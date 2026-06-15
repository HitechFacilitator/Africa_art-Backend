"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.create = create;
exports.cancel = cancel;
exports.expire = expire;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
async function getByUser(userId) {
    return db_1.default.reservation.findMany({
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
async function create(userId, artworkId) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id: artworkId } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    if (artwork.availability !== "AVAILABLE") {
        throw new AppError_1.AppError("Artwork is not available for reservation", 400);
    }
    const activeReservation = await db_1.default.reservation.findFirst({
        where: { artworkId, status: client_1.ReservationStatus.ACTIVE },
    });
    if (activeReservation) {
        throw new AppError_1.AppError("Artwork is already reserved", 409);
    }
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 48);
    const reservation = await db_1.default.reservation.create({
        data: { userId, artworkId, expiresAt },
    });
    await db_1.default.artwork.update({
        where: { id: artworkId },
        data: { availability: "RESERVED" },
    });
    return reservation;
}
async function cancel(id, userId) {
    const reservation = await db_1.default.reservation.findUnique({ where: { id } });
    if (!reservation) {
        throw new AppError_1.AppError("Reservation not found", 404);
    }
    if (reservation.userId !== userId) {
        throw new AppError_1.AppError("Not authorized", 403);
    }
    if (reservation.status !== client_1.ReservationStatus.ACTIVE) {
        throw new AppError_1.AppError("Reservation is not active", 400);
    }
    const updated = await db_1.default.reservation.update({
        where: { id },
        data: { status: client_1.ReservationStatus.CANCELLED },
    });
    await db_1.default.artwork.update({
        where: { id: reservation.artworkId },
        data: { availability: "AVAILABLE" },
    });
    return updated;
}
async function expire() {
    const expired = await db_1.default.reservation.findMany({
        where: {
            status: client_1.ReservationStatus.ACTIVE,
            expiresAt: { lt: new Date() },
        },
    });
    for (const reservation of expired) {
        await db_1.default.reservation.update({
            where: { id: reservation.id },
            data: { status: client_1.ReservationStatus.EXPIRED },
        });
        await db_1.default.artwork.update({
            where: { id: reservation.artworkId },
            data: { availability: "AVAILABLE" },
        });
    }
    return expired.length;
}
//# sourceMappingURL=reservation.service.js.map