import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { ReservationStatus } from "../generated/prisma/client";

export async function getByUser(userId: number) {
  return prisma.reservation.findMany({
    where: { userId },
    include: {
      artwork: {
        include: {
          artist: { select: { id: true, name: true } },
          images: { where: { isPrimary: true }, take: 1 },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function create(userId: number, artworkId: number) {
  const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  if (artwork.availability !== "AVAILABLE") {
    throw new AppError("Artwork is not available for reservation", 400);
  }

  const activeReservation = await prisma.reservation.findFirst({
    where: { artworkId, status: ReservationStatus.ACTIVE },
  });

  if (activeReservation) {
    throw new AppError("Artwork is already reserved", 409);
  }

  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 48);

  const reservation = await prisma.reservation.create({
    data: { userId, artworkId, expiresAt },
  });

  await prisma.artwork.update({
    where: { id: artworkId },
    data: { availability: "RESERVED" },
  });

  return reservation;
}

export async function cancel(id: number, userId: number) {
  const reservation = await prisma.reservation.findUnique({ where: { id } });
  if (!reservation) {
    throw new AppError("Reservation not found", 404);
  }

  if (reservation.userId !== userId) {
    throw new AppError("Not authorized", 403);
  }

  if (reservation.status !== ReservationStatus.ACTIVE) {
    throw new AppError("Reservation is not active", 400);
  }

  const updated = await prisma.reservation.update({
    where: { id },
    data: { status: ReservationStatus.CANCELLED },
  });

  await prisma.artwork.update({
    where: { id: reservation.artworkId },
    data: { availability: "AVAILABLE" },
  });

  return updated;
}

export async function expire() {
  const expired = await prisma.reservation.findMany({
    where: {
      status: ReservationStatus.ACTIVE,
      expiresAt: { lt: new Date() },
    },
  });

  for (const reservation of expired) {
    await prisma.reservation.update({
      where: { id: reservation.id },
      data: { status: ReservationStatus.EXPIRED },
    });

    await prisma.artwork.update({
      where: { id: reservation.artworkId },
      data: { availability: "AVAILABLE" },
    });
  }

  return expired.length;
}
