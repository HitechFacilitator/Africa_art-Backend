import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { ConsultationStatus, ConsultationType } from "../generated/prisma/client";
import { sseManager } from "../utils/sse";

function mapStatus(status: ConsultationStatus): string {
  switch (status) {
    case ConsultationStatus.PENDING: return "Pending";
    case ConsultationStatus.CONFIRMED: return "Confirmed";
    case ConsultationStatus.COMPLETED: return "Completed";
    case ConsultationStatus.CANCELLED: return "Cancelled";
    case ConsultationStatus.REJECTED: return "Rejected";
    default: return String(status);
  }
}

export async function getByUser(userId: number) {
  const consultations = await prisma.consultation.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  return consultations.map(c => ({
    id: `cons-${c.id}`,
    expertName: c.expertName || "",
    expertTitle: c.expertTitle || "",
    expertAvatar: c.expertAvatar || "",
    date: c.date.toISOString().split("T")[0],
    timeSlot: c.timeSlot || "",
    topic: c.topic || "",
    status: mapStatus(c.status),
    notes: c.notes || "",
    type: c.type,
    rejectionReason: c.rejectionReason || "",
    clientName: c.clientName || "",
    clientEmail: c.clientEmail || "",
    currentCollection: c.currentCollection || "",
    meetingFormat: c.meetingFormat || "",
  }));
}

export async function getByAdvisor(advisorId: number) {
  const user = await prisma.user.findUnique({ where: { id: advisorId } });
  const consultations = await prisma.consultation.findMany({
    where: {
      OR: [
        { advisorId },
        ...(user?.name ? [{ expertName: user.name }] : []),
        ...(user?.name ? [{ expertName: { contains: user.name } } as any] : []),
      ],
    },
    include: {
      user: { select: { id: true, name: true, email: true, phone: true, institution: true, country: true } },
    },
    orderBy: { date: "desc" },
  });

  return consultations.map(c => ({
    id: `cons-${c.id}`,
    expertName: c.expertName || "",
    expertTitle: c.expertTitle || "",
    expertAvatar: c.expertAvatar || "",
    date: c.date.toISOString().split("T")[0],
    timeSlot: c.timeSlot || "",
    topic: c.topic || "",
    status: mapStatus(c.status),
    notes: c.notes || "",
    clientName: c.user?.name || c.clientName || "",
    clientEmail: c.user?.email || c.clientEmail || "",
    clientPhone: c.user?.phone || "",
    clientInstitution: c.user?.institution || "",
    clientCountry: c.user?.country || "",
    currentCollection: c.currentCollection || "",
    meetingFormat: c.meetingFormat || "",
    type: c.type,
    rejectionReason: c.rejectionReason || "",
    createdAt: c.createdAt.toISOString(),
  }));
}

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.consultation.findMany({
      skip,
      take: limit,
      orderBy: { date: "desc" },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    }),
    prisma.consultation.count(),
  ]);

  return { data, total };
}

export async function create(userId: number, data: { type: string; date: string; notes?: string; topic?: string; timeSlot?: string; expertName?: string; expertTitle?: string; expertAvatar?: string; advisorId?: number; clientName?: string; clientEmail?: string; currentCollection?: string; meetingFormat?: string }) {
  const dateObj = new Date(data.date);
  if (isNaN(dateObj.getTime())) {
    throw new AppError("Invalid date", 400);
  }

  const activeConsultation = await prisma.consultation.findFirst({
    where: {
      userId,
      status: { in: [ConsultationStatus.PENDING, ConsultationStatus.CONFIRMED] },
    },
  });
  if (activeConsultation) {
    throw new AppError("You already have an active consultation. Please wait for it to be completed or rejected before scheduling a new one.", 409);
  }

  let advisorId = data.advisorId;
  if (!advisorId && data.expertName) {
    const advisor = await prisma.user.findFirst({
      where: { role: "ADVISOR" as any, name: data.expertName },
    });
    if (advisor) {
      advisorId = advisor.id;
    } else {
      const advisorByInstitution = await prisma.user.findFirst({
        where: {
          role: "ADVISOR" as any,
          name: { contains: data.expertName.split(" (")[0] },
        },
      });
      if (advisorByInstitution) advisorId = advisorByInstitution.id;
    }
  }

  const consultation = await prisma.consultation.create({
    data: {
      userId,
      advisorId,
      type: data.type as ConsultationType,
      date: dateObj,
      notes: data.notes,
      topic: data.topic,
      timeSlot: data.timeSlot,
      expertName: data.expertName,
      expertTitle: data.expertTitle,
      expertAvatar: data.expertAvatar,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      currentCollection: data.currentCollection,
      meetingFormat: data.meetingFormat,
    },
  });

  const payload = {
    consultationId: consultation.id,
    action: "created",
    consultation: {
      id: `cons-${consultation.id}`,
      expertName: consultation.expertName,
      date: consultation.date.toISOString().split("T")[0],
      timeSlot: consultation.timeSlot,
      topic: consultation.topic,
      status: consultation.status,
      notes: consultation.notes,
      type: consultation.type,
    },
  };

  if (advisorId) {
    sseManager.sendToUsers([String(advisorId)], "consultation-update", payload);
  }
  sseManager.sendToUsers([String(userId)], "consultation-update", payload);

  return consultation;
}

export async function confirm(id: number, advisorId: number) {
  const consultation = await prisma.consultation.findUnique({ where: { id } });
  if (!consultation) {
    throw new AppError("Consultation not found", 404);
  }

  if (consultation.status !== ConsultationStatus.PENDING) {
    throw new AppError("Consultation is not pending", 400);
  }

  const updated = await prisma.consultation.update({
    where: { id },
    data: { status: ConsultationStatus.CONFIRMED, advisorId },
  });

  const recipientIds = [String(consultation.userId), String(advisorId)];
  sseManager.sendToUsers(recipientIds, "consultation-update", {
    consultationId: id,
    action: "confirmed",
    consultation: { id: `cons-${updated.id}`, status: updated.status },
  });

  return updated;
}

export async function reject(id: number, reason?: string) {
  const consultation = await prisma.consultation.findUnique({ where: { id } });
  if (!consultation) {
    throw new AppError("Consultation not found", 404);
  }

  if (consultation.status !== ConsultationStatus.PENDING) {
    throw new AppError("Consultation is not pending", 400);
  }

  const updated = await prisma.consultation.update({
    where: { id },
    data: { status: ConsultationStatus.REJECTED, rejectionReason: reason || null },
  });

  const recipientIds = [String(consultation.userId), String(consultation.advisorId)].filter(Boolean);
  sseManager.sendToUsers(recipientIds, "consultation-update", {
    consultationId: id,
    action: "rejected",
    consultation: { id: `cons-${updated.id}`, status: updated.status, rejectionReason: updated.rejectionReason },
  });

  return updated;
}

export async function complete(id: number) {
  const consultation = await prisma.consultation.findUnique({ where: { id } });
  if (!consultation) {
    throw new AppError("Consultation not found", 404);
  }

  const updated = await prisma.consultation.update({
    where: { id },
    data: { status: ConsultationStatus.COMPLETED },
  });

  const recipientIds = [String(consultation.userId), String(consultation.advisorId)].filter(Boolean);
  sseManager.sendToUsers(recipientIds, "consultation-update", {
    consultationId: id,
    action: "completed",
    consultation: { id: `cons-${updated.id}`, status: updated.status },
  });

  return updated;
}

export async function cancel(id: number) {
  const consultation = await prisma.consultation.findUnique({ where: { id } });
  if (!consultation) {
    throw new AppError("Consultation not found", 404);
  }

  const updated = await prisma.consultation.update({
    where: { id },
    data: { status: ConsultationStatus.CANCELLED },
  });

  const recipientIds = [String(consultation.userId), String(consultation.advisorId)].filter(Boolean);
  sseManager.sendToUsers(recipientIds, "consultation-update", {
    consultationId: id,
    action: "cancelled",
    consultation: { id: `cons-${updated.id}`, status: updated.status },
  });

  return updated;
}
