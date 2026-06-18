import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { PORStatus } from "../generated/prisma/client";

export async function getByArtwork(artworkId: number) {
  return prisma.priceRequest.findMany({
    where: { artworkId },
    include: {
      user: { select: { id: true, name: true, email: true } },
      artwork: { select: { id: true, title: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getByUser(userId: number) {
  return prisma.priceRequest.findMany({
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

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.priceRequest.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, name: true, email: true } },
        artwork: { select: { id: true, title: true } },
      },
    }),
    prisma.priceRequest.count(),
  ]);

  return { data, total };
}

export async function create(userId: number, artworkId: number, message?: string) {
  const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  if (!artwork.isPOR) {
    throw new AppError("Artwork is not price-on-request", 400);
  }

  const existing = await prisma.priceRequest.findFirst({
    where: { userId, artworkId },
  });
  if (existing) {
    throw new AppError("You have already submitted an inquiry for this artwork", 409);
  }

  return prisma.priceRequest.create({
    data: { userId, artworkId, message },
  });
}

export async function respond(id: number, response: string) {
  const request = await prisma.priceRequest.findUnique({ where: { id } });
  if (!request) {
    throw new AppError("Price request not found", 404);
  }

  if (request.status !== PORStatus.PENDING) {
    throw new AppError("Request is not pending", 400);
  }

  return prisma.priceRequest.update({
    where: { id },
    data: { response, status: PORStatus.RESPONDED },
  });
}

export async function close(id: number) {
  const request = await prisma.priceRequest.findUnique({ where: { id } });
  if (!request) {
    throw new AppError("Price request not found", 404);
  }

  return prisma.priceRequest.update({
    where: { id },
    data: { status: PORStatus.CLOSED },
  });
}
