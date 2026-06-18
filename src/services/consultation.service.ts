import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { ConsultationStatus, ConsultationType } from "../generated/prisma/client";

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
    status: c.status,
    notes: c.notes || "",
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
      user: { select: { id: true, name: true, email: true } },
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
    status: c.status,
    notes: c.notes || "",
    clientName: c.user?.name || "",
    clientEmail: c.user?.email || "",
    type: c.type,
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

export async function create(userId: number, data: { type: string; date: string; notes?: string; topic?: string; timeSlot?: string; expertName?: string; expertTitle?: string; expertAvatar?: string; advisorId?: number }) {
  const dateObj = new Date(data.date);
  if (isNaN(dateObj.getTime())) {
    throw new AppError("Invalid date", 400);
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

  return prisma.consultation.create({
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
    },
  });
}

export async function confirm(id: number, advisorId: number) {
  const consultation = await prisma.consultation.findUnique({ where: { id } });
  if (!consultation) {
    throw new AppError("Consultation not found", 404);
  }

  if (consultation.status !== ConsultationStatus.PENDING) {
    throw new AppError("Consultation is not pending", 400);
  }

  return prisma.consultation.update({
    where: { id },
    data: { status: ConsultationStatus.CONFIRMED, advisorId },
  });
}

export async function complete(id: number) {
  const consultation = await prisma.consultation.findUnique({ where: { id } });
  if (!consultation) {
    throw new AppError("Consultation not found", 404);
  }

  return prisma.consultation.update({
    where: { id },
    data: { status: ConsultationStatus.COMPLETED },
  });
}

export async function cancel(id: number) {
  const consultation = await prisma.consultation.findUnique({ where: { id } });
  if (!consultation) {
    throw new AppError("Consultation not found", 404);
  }

  return prisma.consultation.update({
    where: { id },
    data: { status: ConsultationStatus.CANCELLED },
  });
}
