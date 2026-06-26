import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import fs from "fs/promises";
import path from "path";

export async function upload(artworkId: number, files: Express.Multer.File[]) {
  const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  const existingCount = await prisma.artworkImage.count({ where: { artworkId } });

  const images = await Promise.all(
    files.map((file, index) =>
      prisma.artworkImage.create({
        data: {
          filename: file.filename,
          path: file.path,
          isPrimary: existingCount === 0 && index === 0,
          order: existingCount + index,
          artworkId,
        },
      })
    )
  );

  return images;
}

export async function deleteOne(imageId: number) {
  const image = await prisma.artworkImage.findUnique({ where: { id: imageId } });
  if (!image) {
    throw new AppError("Image not found", 404);
  }

  try {
    await fs.unlink(image.path);
  } catch (e) {
    // File may already be deleted
    console.warn("Failed to delete image file:", e);
  }

  await prisma.artworkImage.delete({ where: { id: imageId } });
}

export async function setPrimary(imageId: number) {
  const image = await prisma.artworkImage.findUnique({ where: { id: imageId } });
  if (!image) {
    throw new AppError("Image not found", 404);
  }

  await prisma.artworkImage.updateMany({
    where: { artworkId: image.artworkId },
    data: { isPrimary: false },
  });

  return prisma.artworkImage.update({
    where: { id: imageId },
    data: { isPrimary: true },
  });
}

export async function reorder(artworkId: number, imageIds: number[]) {
  const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  await prisma.$transaction(
    imageIds.map((id, index) =>
      prisma.artworkImage.update({
        where: { id },
        data: { order: index },
      })
    )
  );

  return prisma.artworkImage.findMany({
    where: { artworkId },
    orderBy: { order: "asc" },
  });
}
