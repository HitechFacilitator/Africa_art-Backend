import prisma from "../config/db";
import { Prisma, Availability } from "../generated/prisma/client";
import { AppError } from "../utils/AppError";

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

export async function getById(id: number) {
  const a = await prisma.artwork.findUnique({
    where: { id },
    include: {
      artist: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
      images: true,
      provenanceChain: true,
      provenance: true,
    },
  });
  if (!a) throw new AppError("Artwork not found", 404);
  return {
    id: `ART-${a.id}`,
    title: a.title,
    description: a.description || "",
    origin: a.origin || "",
    region: a.region || "",
    tribe: a.tribe || "",
    era: a.era || "",
    historicalPeriod: a.historicalPeriod || "",
    material: a.material || "",
    dimensions: a.dimensions || "",
    weight: a.weight || "",
    condition: a.condition || "",
    availability: a.availability || "AVAILABLE",
    price: a.price ? Number(a.price) : null,
    isPOR: a.isPOR || false,
    estimatedValue: a.estimatedValue ? Number(a.estimatedValue) : null,
    historicalCagr: a.historicalCagr ? Number(a.historicalCagr) : null,
    yieldIndex: a.yieldIndex ? Number(a.yieldIndex) : null,
    imageUrl: a.imageUrl || "",
    blurDataURL: a.blurDataURL || "",
    scarcityIndex: a.scarcityIndex || 0,
    preservationStatus: a.preservationStatus || "",
    appreciationRate: a.appreciationRate ? Number(a.appreciationRate) : null,
    isHero: a.isHero || false,
    historicalStory: a.historicalStory || "",
    investmentThesis: a.investmentThesis || "",
    tier: a.tier || "Standard",
    artworkStatus: a.artworkStatus || "Draft",
    provenanceHash: a.provenanceHash || "",
    acquiredYear: a.acquiredYear || null,
    acquiredMethod: a.acquiredMethod || "",
    artistId: a.artistId || null,
    categoryId: a.categoryId || null,
    artist: a.artist,
    category: a.category,
    images: a.images,
    provenanceChain: a.provenanceChain?.map((p: { entry: string }) => p.entry) || [],
    provenanceRecords: a.provenance?.map((p: { previousOwner: string; acquisitionDate: Date | null; notes: string | null }) => ({
      previousOwner: p.previousOwner,
      acquisitionDate: p.acquisitionDate?.toISOString().split("T")[0] || "",
      notes: p.notes || "",
    })) || [],
    createdAt: a.createdAt.toISOString().split("T")[0],
  };
}

export async function create(data: Record<string, unknown>) {
  const artwork = await prisma.artwork.create({
    data: {
      title: (data.title as string) || "Untitled Artwork",
      description: (data.description as string) || "",
      origin: (data.origin as string) || "",
      region: (data.region as string) || "",
      tribe: (data.tribe as string) || "",
      era: (data.era as string) || "",
      historicalPeriod: (data.historicalPeriod as string) || "",
      material: (data.material as string) || "",
      dimensions: (data.dimensions as string) || "",
      weight: (data.weight as string) || "",
      condition: (data.condition as string) || "",
      availability: ((data.availability as string) || "AVAILABLE") as Availability,
      price: data.price ? String(data.price) : undefined,
      isPOR: (data.isPOR as boolean) || false,
      estimatedValue: data.estimatedValue ? String(data.estimatedValue) : undefined,
      historicalCagr: data.historicalCagr ? String(data.historicalCagr) : undefined,
      yieldIndex: data.yieldIndex ? String(data.yieldIndex) : undefined,
      imageUrl: (data.imageUrl as string) || "",
      blurDataURL: (data.blurDataURL as string) || "",
      scarcityIndex: (data.scarcityIndex as number) || 0,
      preservationStatus: (data.preservationStatus as string) || "",
      appreciationRate: data.appreciationRate ? String(data.appreciationRate) : undefined,
      isHero: (data.isHero as boolean) || false,
      historicalStory: (data.historicalStory as string) || "",
      investmentThesis: (data.investmentThesis as string) || "",
      tier: (data.tier as string) || "Standard",
      artworkStatus: (data.artworkStatus as string) || "Draft",
      provenanceHash: (data.provenanceHash as string) || "",
      acquiredYear: data.acquiredYear ? Number(data.acquiredYear) : undefined,
      acquiredMethod: (data.acquiredMethod as string) || "",
      artistId: data.artistId ? Number(data.artistId) : undefined,
      categoryId: data.categoryId ? Number(data.categoryId) : undefined,
    },
  });

  if (data.provenanceChain && Array.isArray(data.provenanceChain)) {
    await prisma.provenanceChain.createMany({
      data: (data.provenanceChain as string[]).map((entry) => ({
        artworkId: artwork.id,
        entry,
      })),
    });
  }

  return { id: `ART-${artwork.id}`, title: artwork.title, artworkStatus: artwork.artworkStatus };
}

export async function update(id: number, data: Record<string, unknown>) {
  const existing = await prisma.artwork.findUnique({ where: { id } });
  if (!existing) throw new AppError("Artwork not found", 404);

  const updateData: Record<string, unknown> = {};
  const allowedFields = [
    "title", "description", "origin", "region", "tribe", "era", "historicalPeriod",
    "material", "dimensions", "weight", "condition", "availability", "price", "isPOR",
    "estimatedValue", "historicalCagr", "yieldIndex", "imageUrl", "blurDataURL",
    "scarcityIndex", "preservationStatus", "appreciationRate", "isHero",
    "historicalStory", "investmentThesis", "tier", "artworkStatus", "provenanceHash",
    "acquiredYear", "acquiredMethod", "artistId", "categoryId",
  ];

  for (const field of allowedFields) {
    if (data[field] !== undefined) {
      if (["price", "estimatedValue", "historicalCagr", "yieldIndex", "appreciationRate"].includes(field)) {
        updateData[field] = data[field] !== null ? String(data[field]) : undefined;
      } else if (["scarcityIndex", "acquiredYear", "artistId", "categoryId"].includes(field)) {
        updateData[field] = data[field] !== null ? Number(data[field]) : undefined;
      } else if (["isPOR", "isHero"].includes(field)) {
        updateData[field] = Boolean(data[field]);
      } else {
        updateData[field] = data[field];
      }
    }
  }

  const updated = await prisma.artwork.update({ where: { id }, data: updateData });

  if (data.provenanceChain && Array.isArray(data.provenanceChain)) {
    await prisma.$transaction([
      prisma.provenanceChain.deleteMany({ where: { artworkId: id } }),
      prisma.provenanceChain.createMany({
        data: (data.provenanceChain as string[]).map((entry) => ({
          artworkId: id,
          entry,
        })),
      }),
    ]);
  }

  return { id: `ART-${updated.id}`, title: updated.title, artworkStatus: updated.artworkStatus };
}

export async function updateStatus(id: number, status: string) {
  const artwork = await prisma.artwork.findUnique({ where: { id } });
  if (!artwork) throw new AppError("Artwork not found", 404);

  const updated = await prisma.artwork.update({
    where: { id },
    data: { artworkStatus: status },
  });
  return { id: `ART-${updated.id}`, status: updated.artworkStatus };
}

export async function remove(id: number) {
  const artwork = await prisma.artwork.findUnique({ where: { id } });
  if (!artwork) throw new AppError("Artwork not found", 404);
  await prisma.provenanceChain.deleteMany({ where: { artworkId: id } });
  await prisma.provenanceRecord.deleteMany({ where: { artworkId: id } });
  await prisma.artworkImage.deleteMany({ where: { artworkId: id } });
  await prisma.artwork.delete({ where: { id } });
}
