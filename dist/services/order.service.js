"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
exports.updateStatus = updateStatus;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
async function getByUser(userId) {
    return db_1.default.order.findMany({
        where: { userId },
        include: {
            items: {
                include: {
                    artwork: {
                        include: {
                            artist: { select: { id: true, name: true } },
                            images: { where: { isPrimary: true }, take: 1 },
                        },
                    },
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
}
async function getAll(page, limit, skip) {
    const [data, total] = await Promise.all([
        db_1.default.order.findMany({
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
            include: {
                user: { select: { id: true, firstName: true, lastName: true, email: true } },
                items: {
                    include: {
                        artwork: { select: { id: true, title: true } },
                    },
                },
            },
        }),
        db_1.default.order.count(),
    ]);
    return { data, total };
}
async function getById(id) {
    const order = await db_1.default.order.findUnique({
        where: { id },
        include: {
            user: { select: { id: true, firstName: true, lastName: true, email: true } },
            items: {
                include: {
                    artwork: {
                        include: {
                            artist: { select: { id: true, name: true } },
                            images: { where: { isPrimary: true }, take: 1 },
                        },
                    },
                },
            },
        },
    });
    if (!order) {
        throw new AppError_1.AppError("Order not found", 404);
    }
    return order;
}
async function create(userId, artworkIds, notes) {
    if (!artworkIds.length) {
        throw new AppError_1.AppError("At least one artwork is required", 400);
    }
    const artworks = await db_1.default.artwork.findMany({
        where: { id: { in: artworkIds }, availability: "AVAILABLE" },
    });
    if (artworks.length !== artworkIds.length) {
        throw new AppError_1.AppError("Some artworks are not available", 400);
    }
    const totalAmount = artworks.reduce((sum, a) => {
        return sum + (a.price ? Number(a.price) : 0);
    }, 0);
    const order = await db_1.default.order.create({
        data: {
            userId,
            totalAmount: new client_1.Prisma.Decimal(totalAmount),
            notes,
            items: {
                create: artworks.map((a) => ({
                    artworkId: a.id,
                    price: a.price || new client_1.Prisma.Decimal(0),
                })),
            },
        },
        include: {
            items: {
                include: {
                    artwork: { select: { id: true, title: true } },
                },
            },
        },
    });
    await db_1.default.artwork.updateMany({
        where: { id: { in: artworkIds } },
        data: { availability: "SOLD" },
    });
    return order;
}
async function updateStatus(id, status) {
    const order = await db_1.default.order.findUnique({ where: { id } });
    if (!order) {
        throw new AppError_1.AppError("Order not found", 404);
    }
    return db_1.default.order.update({
        where: { id },
        data: { status },
    });
}
//# sourceMappingURL=order.service.js.map