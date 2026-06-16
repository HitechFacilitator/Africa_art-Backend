import prisma from "../config/db";
import { Prisma, Availability } from "../generated/prisma/client";

export async function getAll(page: number, limit: number, skip: number, search?: string) {
  const where: Prisma.ArtworkWhereInput = {};
  if (search) {
    where.OR = [
      { title: { contains: search } },
      { description: { contains: search } },
      { artist: { name: { contains: search } } },
      { origin: { contains: search } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.artwork.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        artist: { select: { id: true, name: true } },
        category: { select: { id: true, name: true } },
        images: { where: { isPrimary: true }, take: 1 },
        provenanceChain: true,
      },
    }),
    prisma.artwork.count({ where }),
  ]);

  return {
    data: data.map(a => ({
      id: `ART-${a.id}`,
      title: a.title,
      culture: a.artist?.name ? `${a.origin} (${a.artist.name})` : a.origin,
      era: a.era || "",
      valuation: a.isPOR ? "POR" as const : a.estimatedValue ? Number(a.estimatedValue) : a.price ? Number(a.price) : 0,
      status: a.artworkStatus || "Live",
      tier: a.tier || "Standard",
      imageUrl: a.imageUrl || a.images?.[0]?.path || "",
      description: a.description || "",
      provenanceHash: a.provenanceHash || "",
      dateCreated: a.createdAt.toISOString().split("T")[0],
      acquiredYear: a.acquiredYear || 0,
      acquiredMethod: a.acquiredMethod || "",
      provenance: a.provenanceChain?.map(p => p.entry) || [],
    })),
    total,
  };
}

export async function updateStatus(id: number, status: string) {
  const artwork = await prisma.artwork.findUnique({ where: { id } });
  if (!artwork) throw new Error("Artwork not found");

  const updated = await prisma.artwork.update({
    where: { id },
    data: { artworkStatus: status },
  });
  return { id: `ART-${updated.id}`, status: updated.artworkStatus };
}

export async function remove(id: number) {
  const artwork = await prisma.artwork.findUnique({ where: { id } });
  if (!artwork) throw new Error("Artwork not found");
  await prisma.artwork.delete({ where: { id } });
}
