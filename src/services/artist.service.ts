import prisma from "../config/db";
import { AppError } from "../utils/AppError";

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.artist.findMany({
      skip,
      take: limit,
      orderBy: { name: "asc" },
      include: { _count: { select: { artworks: true } } },
    }),
    prisma.artist.count(),
  ]);

  return { data, total };
}

export async function getById(id: number) {
  const artist = await prisma.artist.findUnique({
    where: { id },
    include: { artworks: { take: 10, orderBy: { createdAt: "desc" } } },
  });

  if (!artist) {
    throw new AppError("Artist not found", 404);
  }

  return artist;
}

export async function create(data: { name: string; biography?: string; nationality?: string; birthDate?: string; deathDate?: string; photo?: string }) {
  return prisma.artist.create({
    data: {
      name: data.name,
      biography: data.biography,
      nationality: data.nationality,
      birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
      deathDate: data.deathDate ? new Date(data.deathDate) : undefined,
      photo: data.photo,
    },
  });
}

export async function update(id: number, data: { name?: string; biography?: string; nationality?: string; birthDate?: string; deathDate?: string; photo?: string }) {
  const artist = await prisma.artist.findUnique({ where: { id } });
  if (!artist) {
    throw new AppError("Artist not found", 404);
  }

  return prisma.artist.update({
    where: { id },
    data: {
      ...data,
      birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
      deathDate: data.deathDate ? new Date(data.deathDate) : undefined,
    },
  });
}

export async function deleteOne(id: number) {
  const artist = await prisma.artist.findUnique({ where: { id } });
  if (!artist) {
    throw new AppError("Artist not found", 404);
  }

  const artworkCount = await prisma.artwork.count({ where: { artistId: id } });
  if (artworkCount > 0) {
    throw new AppError("Cannot delete artist with associated artworks", 400);
  }

  await prisma.artist.delete({ where: { id } });
}
