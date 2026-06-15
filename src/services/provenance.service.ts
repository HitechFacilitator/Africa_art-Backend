import prisma from "../config/db";
import { AppError } from "../utils/AppError";

export async function getByArtwork(artworkId: number) {
  return prisma.provenanceRecord.findMany({
    where: { artworkId },
    orderBy: { createdAt: "desc" },
  });
}

export async function create(artworkId: number, data: {
  previousOwner: string;
  acquisitionDate?: string;
  transferDate?: string;
  notes?: string;
}) {
  const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  return prisma.provenanceRecord.create({
    data: {
      artworkId,
      previousOwner: data.previousOwner,
      acquisitionDate: data.acquisitionDate ? new Date(data.acquisitionDate) : undefined,
      transferDate: data.transferDate ? new Date(data.transferDate) : undefined,
      notes: data.notes,
    },
  });
}

export async function deleteOne(id: number) {
  const record = await prisma.provenanceRecord.findUnique({ where: { id } });
  if (!record) {
    throw new AppError("Provenance record not found", 404);
  }

  await prisma.provenanceRecord.delete({ where: { id } });
}
