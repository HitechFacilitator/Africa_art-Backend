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
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
async function getAll(page, limit, skip) {
    const [data, total] = await Promise.all([
        db_1.default.artist.findMany({
            skip,
            take: limit,
            orderBy: { name: "asc" },
            include: { _count: { select: { artworks: true } } },
        }),
        db_1.default.artist.count(),
    ]);
    return { data, total };
}
async function getById(id) {
    const artist = await db_1.default.artist.findUnique({
        where: { id },
        include: { artworks: { take: 10, orderBy: { createdAt: "desc" } } },
    });
    if (!artist) {
        throw new AppError_1.AppError("Artist not found", 404);
    }
    return artist;
}
async function create(data) {
    return db_1.default.artist.create({
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
async function update(id, data) {
    const artist = await db_1.default.artist.findUnique({ where: { id } });
    if (!artist) {
        throw new AppError_1.AppError("Artist not found", 404);
    }
    return db_1.default.artist.update({
        where: { id },
        data: {
            ...data,
            birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
            deathDate: data.deathDate ? new Date(data.deathDate) : undefined,
        },
    });
}
async function deleteOne(id) {
    const artist = await db_1.default.artist.findUnique({ where: { id } });
    if (!artist) {
        throw new AppError_1.AppError("Artist not found", 404);
    }
    const artworkCount = await db_1.default.artwork.count({ where: { artistId: id } });
    if (artworkCount > 0) {
        throw new AppError_1.AppError("Cannot delete artist with associated artworks", 400);
    }
    await db_1.default.artist.delete({ where: { id } });
}
//# sourceMappingURL=artist.service.js.map