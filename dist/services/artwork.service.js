"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.deleteOne = deleteOne;
exports.search = search;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
function toFrontendArtwork(artwork) {
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
        provenance: artwork.provenanceChain?.map((p) => p.entry) || artwork.provenance?.map((p) => p.previousOwner) || [],
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
async function getAll(filters, page, limit, skip) {
    const where = {};
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
        where.availability = filters.availability;
    }
    if (filters.isPOR !== undefined) {
        where.isPOR = filters.isPOR === "true";
    }
    if (filters.minPrice || filters.maxPrice) {
        where.price = {};
        if (filters.minPrice) {
            where.price.gte = new client_1.Prisma.Decimal(filters.minPrice);
        }
        if (filters.maxPrice) {
            where.price.lte = new client_1.Prisma.Decimal(filters.maxPrice);
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
        db_1.default.artwork.findMany({
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
        db_1.default.artwork.count({ where }),
    ]);
    return { data: data.map(toFrontendArtwork), total };
}
async function getById(id) {
    const artwork = await db_1.default.artwork.findUnique({
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
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    return toFrontendArtwork(artwork);
}
async function create(data) {
    const artist = await db_1.default.artist.findUnique({ where: { id: data.artistId } });
    if (!artist) {
        throw new AppError_1.AppError("Artist not found", 404);
    }
    const category = await db_1.default.category.findUnique({ where: { id: data.categoryId } });
    if (!category) {
        throw new AppError_1.AppError("Category not found", 404);
    }
    const artwork = await db_1.default.artwork.create({
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
            price: data.price ? new client_1.Prisma.Decimal(data.price) : undefined,
            isPOR: data.isPOR || false,
            imageUrl: data.imageUrl,
            scarcityIndex: data.scarcityIndex,
            preservationStatus: data.preservationStatus,
            appreciationRate: data.appreciationRate,
            isHero: data.isHero || false,
            historicalStory: data.historicalStory,
            investmentThesis: data.investmentThesis,
            estimatedValue: data.estimatedValue ? new client_1.Prisma.Decimal(data.estimatedValue) : undefined,
            historicalCagr: data.historicalCagr ? new client_1.Prisma.Decimal(data.historicalCagr) : undefined,
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
async function update(id, data) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    const updated = await db_1.default.artwork.update({
        where: { id },
        data: {
            ...data,
            price: data.price !== undefined ? new client_1.Prisma.Decimal(data.price) : undefined,
            estimatedValue: data.estimatedValue !== undefined ? new client_1.Prisma.Decimal(data.estimatedValue) : undefined,
        },
        include: {
            artist: { select: { id: true, name: true } },
            category: { select: { id: true, name: true } },
            images: true,
        },
    });
    return toFrontendArtwork(updated);
}
async function deleteOne(id) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    await db_1.default.artwork.delete({ where: { id } });
}
async function search(query, page, limit, skip) {
    const where = {
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
        db_1.default.artwork.findMany({
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
        db_1.default.artwork.count({ where }),
    ]);
    return { data: data.map(toFrontendArtwork), total };
}
//# sourceMappingURL=artwork.service.js.map