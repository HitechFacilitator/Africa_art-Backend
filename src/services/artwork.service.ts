import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { Prisma, Availability } from "../generated/prisma/client";

interface ArtworkFilters {
  category?: string;
  artist?: string;
  origin?: string;
  availability?: string;
  artworkStatus?: string;
  isPOR?: string;
  minPrice?: string;
  maxPrice?: string;
  search?: string;
}

function toFrontendArtwork(artwork: any) {
  return {
    id: `art-${artwork.id}`,
    title: artwork.title,
    region: artwork.region || artwork.origin,
    tribe: artwork.tribe || "",
    material: artwork.material,
    period: artwork.era || artwork.historicalPeriod || "",
    era: artwork.era || artwork.historicalPeriod || "",
    origin: artwork.origin,
    dimensions: artwork.dimensions,
    imageUrl: artwork.imageUrl || artwork.images?.[0]?.path || "",
    blurDataURL: artwork.blurDataURL || "",
    label: artwork.isPOR ? "Price on Request" : artwork.price ? Number(artwork.price) : 0,
    scarcityIndex: artwork.scarcityIndex || 85,
    preservationStatus: artwork.preservationStatus || "Excellent",
    appreciationRate: artwork.appreciationRate || "+10.2% CAGR",
    isHero: artwork.isHero || false,
    provenance: artwork.provenanceChain?.map((p: any) => p.entry) || artwork.provenance?.map((p: any) => p.previousOwner) || [],
    historicalStory: artwork.historicalStory || artwork.description || "",
    investmentThesis: artwork.investmentThesis || "",
    investment: artwork.estimatedValue ? {
      estimatedValue: Number(artwork.estimatedValue),
      historicalCagr: artwork.historicalCagr ? Number(artwork.historicalCagr) : 10.2,
      yieldIndex: artwork.yieldIndex ? Number(artwork.yieldIndex) : 85,
    } : null,
    // Extra fields for admin
    tier: artwork.tier || "Standard",
    status: artwork.artworkStatus || "Live",
    provenanceHash: artwork.provenanceHash || "",
    dateCreated: artwork.createdAt?.toISOString?.() || "",
    acquiredYear: artwork.acquiredYear || 0,
    acquiredMethod: artwork.acquiredMethod || "",
  };
}

export async function getAll(filters: ArtworkFilters, page: number, limit: number, skip: number) {
  const where: Prisma.ArtworkWhereInput = {};

  if (filters.category) {
    where.category = { name: { contains: filters.category } };
  }
  if (filters.artist) {
    where.artist = { name: { contains: filters.artist } };
  }
  if (filters.origin) {
    where.origin = { contains: filters.origin };
  }
  if (filters.availability) {
    where.availability = filters.availability as Availability;
  }
  if (filters.artworkStatus) {
    where.artworkStatus = filters.artworkStatus;
  }
  if (filters.isPOR !== undefined) {
    where.isPOR = filters.isPOR === "true";
  }
  if (filters.minPrice || filters.maxPrice) {
    where.price = {};
    if (filters.minPrice) {
      where.price.gte = new Prisma.Decimal(filters.minPrice);
    }
    if (filters.maxPrice) {
      where.price.lte = new Prisma.Decimal(filters.maxPrice);
    }
  }
  if (filters.search) {
    where.OR = [
      { title: { contains: filters.search } },
      { description: { contains: filters.search } },
      { artist: { name: { contains: filters.search } } },
      { origin: { contains: filters.search } },
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
        provenance: { orderBy: { createdAt: "desc" } },
      },
    }),
    prisma.artwork.count({ where }),
  ]);

  return { data: data.map(toFrontendArtwork), total };
}

export async function getById(id: number) {
  const artwork = await prisma.artwork.findUnique({
    where: { id },
    include: {
      artist: true,
      category: true,
      images: { orderBy: { order: "asc" } },
      provenance: { orderBy: { createdAt: "desc" } },
      provenanceChain: true,
      certificates: { where: { isValid: true } },
      _count: { select: { favorites: true, reservations: true } },
    },
  });

  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  return toFrontendArtwork(artwork);
}

export async function create(data: any) {
  const artist = await prisma.artist.findUnique({ where: { id: data.artistId } });
  if (!artist) {
    throw new AppError("Artist not found", 404);
  }

  const category = await prisma.category.findUnique({ where: { id: data.categoryId } });
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const artwork = await prisma.artwork.create({
    data: {
      title: data.title,
      description: data.description || "",
      origin: data.origin || "",
      region: data.region,
      tribe: data.tribe,
      era: data.era,
      historicalPeriod: data.historicalPeriod,
      material: data.material || "",
      dimensions: data.dimensions || "",
      weight: data.weight,
      condition: data.condition || "Good",
      price: data.price ? new Prisma.Decimal(data.price) : undefined,
      isPOR: data.isPOR || false,
      imageUrl: data.imageUrl,
      scarcityIndex: data.scarcityIndex,
      preservationStatus: data.preservationStatus,
      appreciationRate: data.appreciationRate,
      isHero: data.isHero || false,
      historicalStory: data.historicalStory,
      investmentThesis: data.investmentThesis,
      estimatedValue: data.estimatedValue ? new Prisma.Decimal(data.estimatedValue) : undefined,
      historicalCagr: data.historicalCagr ? new Prisma.Decimal(data.historicalCagr) : undefined,
      tier: data.tier,
      artistId: data.artistId,
      categoryId: data.categoryId,
    },
    include: {
      artist: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
      images: true,
    },
  });

  return toFrontendArtwork(artwork);
}

export async function update(id: number, data: any) {
  const artwork = await prisma.artwork.findUnique({ where: { id } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  const updated = await prisma.artwork.update({
    where: { id },
    data: {
      ...data,
      price: data.price !== undefined ? new Prisma.Decimal(data.price) : undefined,
      estimatedValue: data.estimatedValue !== undefined ? new Prisma.Decimal(data.estimatedValue) : undefined,
    },
    include: {
      artist: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
      images: true,
    },
  });

  return toFrontendArtwork(updated);
}

export async function deleteOne(id: number) {
  const artwork = await prisma.artwork.findUnique({ where: { id } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }
  await prisma.artwork.delete({ where: { id } });
}

export async function search(query: string, page: number, limit: number, skip: number) {
  const where: Prisma.ArtworkWhereInput = {
    OR: [
      { title: { contains: query } },
      { description: { contains: query } },
      { origin: { contains: query } },
      { region: { contains: query } },
      { tribe: { contains: query } },
      { material: { contains: query } },
      { artist: { name: { contains: query } } },
      { category: { name: { contains: query } } },
    ],
  };

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

  return { data: data.map(toFrontendArtwork), total };
}
