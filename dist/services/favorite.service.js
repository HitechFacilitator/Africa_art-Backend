"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.add = add;
exports.remove = remove;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
async function getByUser(userId) {
    return db_1.default.favorite.findMany({
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
async function add(userId, artworkId) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id: artworkId } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    const existing = await db_1.default.favorite.findUnique({
        where: { userId_artworkId: { userId, artworkId } },
    });
    if (existing) {
        throw new AppError_1.AppError("Artwork already in favorites", 409);
    }
    return db_1.default.favorite.create({
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
async function remove(userId, artworkId) {
    const favorite = await db_1.default.favorite.findUnique({
        where: { userId_artworkId: { userId, artworkId } },
    });
    if (!favorite) {
        throw new AppError_1.AppError("Favorite not found", 404);
    }
    await db_1.default.favorite.delete({
        where: { userId_artworkId: { userId, artworkId } },
    });
}
//# sourceMappingURL=favorite.service.js.map