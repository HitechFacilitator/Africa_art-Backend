"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByArtwork = getByArtwork;
exports.getByUser = getByUser;
exports.getAll = getAll;
exports.create = create;
exports.respond = respond;
exports.close = close;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
async function getByArtwork(artworkId) {
    return db_1.default.priceRequest.findMany({
        where: { artworkId },
        include: {
            user: { select: { id: true, name: true, email: true } },
            artwork: { select: { id: true, title: true } },
        },
        orderBy: { createdAt: "desc" },
    });
}
async function getByUser(userId) {
    return db_1.default.priceRequest.findMany({
        where: { userId },
        include: {
            artwork: {
                include: {
                    artist: { select: { id: true, name: true } },
                    images: { where: { isPrimary: true }, take: 1 },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
}
async function getAll(page, limit, skip) {
    const [data, total] = await Promise.all([
        db_1.default.priceRequest.findMany({
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
            include: {
                user: { select: { id: true, name: true, email: true } },
                artwork: { select: { id: true, title: true } },
            },
        }),
        db_1.default.priceRequest.count(),
    ]);
    return { data, total };
}
async function create(userId, artworkId, message) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id: artworkId } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    if (!artwork.isPOR) {
        throw new AppError_1.AppError("Artwork is not price-on-request", 400);
    }
    const existing = await db_1.default.priceRequest.findFirst({
        where: { userId, artworkId },
    });
    if (existing) {
        throw new AppError_1.AppError("You have already submitted an inquiry for this artwork", 409);
    }
    return db_1.default.priceRequest.create({
        data: { userId, artworkId, message },
    });
}
async function respond(id, response) {
    const request = await db_1.default.priceRequest.findUnique({ where: { id } });
    if (!request) {
        throw new AppError_1.AppError("Price request not found", 404);
    }
    if (request.status !== client_1.PORStatus.PENDING) {
        throw new AppError_1.AppError("Request is not pending", 400);
    }
    return db_1.default.priceRequest.update({
        where: { id },
        data: { response, status: client_1.PORStatus.RESPONDED },
    });
}
async function close(id) {
    const request = await db_1.default.priceRequest.findUnique({ where: { id } });
    if (!request) {
        throw new AppError_1.AppError("Price request not found", 404);
    }
    return db_1.default.priceRequest.update({
        where: { id },
        data: { status: client_1.PORStatus.CLOSED },
    });
}
//# sourceMappingURL=por.service.js.map