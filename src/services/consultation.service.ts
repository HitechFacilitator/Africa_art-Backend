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

export async function create(userId: number, data: { type: string; date: string; notes?: string; topic?: string; timeSlot?: string; expertName?: string; expertTitle?: string; expertAvatar?: string }) {
  const dateObj = new Date(data.date);
  if (isNaN(dateObj.getTime())) {
    throw new AppError("Invalid date", 400);
  }

  return prisma.consultation.create({
    data: {
      userId,
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
