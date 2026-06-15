import prisma from "../config/db";
import { AppError } from "../utils/AppError";

export async function getByUser(userId: number) {
  return prisma.favorite.findMany({
    where: { userId },
    include: {
      artwork: {
        include: {
          artist: { select: { id: true, name: true } },
          category: { select: { id: true, name: true } },
          images: { where: { isPrimary: true }, take: 1 },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function add(userId: number, artworkId: number) {
  const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  const existing = await prisma.favorite.findUnique({
    where: { userId_artworkId: { userId, artworkId } },
  });

  if (existing) {
    throw new AppError("Artwork already in favorites", 409);
  }

  return prisma.favorite.create({
    data: { userId, artworkId },
    include: {
      artwork: {
        include: {
          artist: { select: { id: true, name: true } },
        },
      },
    },
  });
}

export async function remove(userId: number, artworkId: number) {
  const favorite = await prisma.favorite.findUnique({
    where: { userId_artworkId: { userId, artworkId } },
  });

  if (!favorite) {
    throw new AppError("Favorite not found", 404);
  }

  await prisma.favorite.delete({
    where: { userId_artworkId: { userId, artworkId } },
  });
}
