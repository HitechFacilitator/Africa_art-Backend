import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import crypto from "crypto";

export async function getByArtwork(artworkId: number) {
  return prisma.certificate.findMany({
    where: { artworkId },
    orderBy: { issuedDate: "desc" },
    include: {
      artwork: { select: { id: true, title: true } },
      user: { select: { id: true, firstName: true, lastName: true } },
    },
  });
}

export async function getByUser(userId: number) {
  return prisma.certificate.findMany({
    where: { userId },
    orderBy: { issuedDate: "desc" },
    include: {
      artwork: { select: { id: true, title: true } },
    },
  });
}

export async function getById(id: number) {
  const cert = await prisma.certificate.findUnique({
    where: { id },
    include: {
      artwork: true,
      user: { select: { id: true, firstName: true, lastName: true, email: true } },
    },
  });

  if (!cert) {
    throw new AppError("Certificate not found", 404);
  }

  return cert;
}

export async function create(data: {
  title: string;
  artworkId: number;
  userId: number;
  filename: string;
  path: string;
  expiryDate?: string;
  blockchainHash?: string;
}) {
  const artwork = await prisma.artwork.findUnique({ where: { id: data.artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  const certNumber = `COA-${Date.now()}-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;

  return prisma.certificate.create({
    data: {
      certificateNumber: certNumber,
      title: data.title,
      artworkId: data.artworkId,
      userId: data.userId,
      filename: data.filename,
      path: data.path,
      expiryDate: data.expiryDate ? new Date(data.expiryDate) : undefined,
      blockchainHash: data.blockchainHash,
    },
  });
}

export async function verify(certificateNumber: string) {
  const cert = await prisma.certificate.findUnique({
    where: { certificateNumber },
    include: {
      artwork: { select: { id: true, title: true } },
      user: { select: { id: true, firstName: true, lastName: true } },
    },
  });

  if (!cert) {
    throw new AppError("Certificate not found", 404);
  }

  return {
    isValid: cert.isValid,
    certificate: cert,
  };
}

export async function deleteOne(id: number) {
  const cert = await prisma.certificate.findUnique({ where: { id } });
  if (!cert) {
    throw new AppError("Certificate not found", 404);
  }

  await prisma.certificate.delete({ where: { id } });
}
