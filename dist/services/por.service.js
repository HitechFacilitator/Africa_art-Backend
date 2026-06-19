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
exports.changeStatus = changeStatus;
exports.close = close;
exports.addMessage = addMessage;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
const sse_1 = require("../utils/sse");
async function getByArtwork(artworkId) {
    return db_1.default.priceRequest.findMany({
        where: { artworkId },
        include: {
            user: { select: { id: true, name: true, email: true } },
            artwork: { select: { id: true, title: true } },
            messages: { orderBy: { createdAt: "asc" } },
        },
        orderBy: { createdAt: "desc" },
    });
}
async function getByUser(userId) {
    const requests = await db_1.default.priceRequest.findMany({
        where: { userId },
        include: {
            artwork: {
                include: {
                    artist: { select: { id: true, name: true } },
                    images: { where: { isPrimary: true }, take: 1 },
                },
            },
            messages: { orderBy: { createdAt: "asc" } },
        },
        orderBy: { createdAt: "desc" },
    });
    return requests.map(r => ({
        id: `por-${r.id}`,
        artworkId: r.artworkId,
        message: r.message || "",
        status: r.status,
        response: r.response || "",
        artwork: r.artwork ? {
            id: r.artwork.id,
            title: r.artwork.title,
            images: r.artwork.images,
        } : undefined,
        messages: r.messages.map(m => ({
            id: m.id,
            sender: m.sender,
            senderId: m.senderId,
            text: m.text || "",
            timestamp: m.timestamp || "",
        })),
        createdAt: r.createdAt.toISOString(),
    }));
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
                messages: { orderBy: { createdAt: "asc" } },
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
    const por = await db_1.default.priceRequest.create({
        data: { userId, artworkId, message },
    });
    const admins = await db_1.default.user.findMany({ where: { role: "ADMIN" }, select: { id: true } });
    if (admins.length > 0) {
        sse_1.sseManager.sendToUsers(admins.map(a => String(a.id)), "por-update", {
            porId: por.id,
            action: "created",
            artworkId,
        });
    }
    return por;
}
async function respond(id, response) {
    const request = await db_1.default.priceRequest.findUnique({ where: { id } });
    if (!request) {
        throw new AppError_1.AppError("Price request not found", 404);
    }
    if (request.status !== client_1.PORStatus.PENDING) {
        throw new AppError_1.AppError("Request is not pending", 400);
    }
    const updated = await db_1.default.priceRequest.update({
        where: { id },
        data: { response, status: client_1.PORStatus.IN_DISCUSSION },
    });
    sse_1.sseManager.sendToUsers([String(request.userId)], "por-update", {
        porId: id,
        action: "responded",
        status: "IN_DISCUSSION",
        response,
    });
    return updated;
}
async function changeStatus(id, newStatus) {
    const request = await db_1.default.priceRequest.findUnique({ where: { id } });
    if (!request) {
        throw new AppError_1.AppError("Price request not found", 404);
    }
    const validStatuses = ["PENDING", "IN_DISCUSSION", "CLOSED"];
    if (!validStatuses.includes(newStatus)) {
        throw new AppError_1.AppError("Invalid status. Must be PENDING, IN_DISCUSSION, or CLOSED", 400);
    }
    const updated = await db_1.default.priceRequest.update({
        where: { id },
        data: { status: newStatus },
    });
    const recipientIds = [String(request.userId)];
    const admins = await db_1.default.user.findMany({ where: { role: "ADMIN" }, select: { id: true } });
    for (const admin of admins) {
        recipientIds.push(String(admin.id));
    }
    sse_1.sseManager.sendToUsers([...new Set(recipientIds)], "por-update", {
        porId: id,
        action: "status-changed",
        status: newStatus,
    });
    return updated;
}
async function close(id) {
    const request = await db_1.default.priceRequest.findUnique({ where: { id } });
    if (!request) {
        throw new AppError_1.AppError("Price request not found", 404);
    }
    const updated = await db_1.default.priceRequest.update({
        where: { id },
        data: { status: client_1.PORStatus.CLOSED },
    });
    const recipientIds = [String(request.userId)];
    const admins = await db_1.default.user.findMany({ where: { role: "ADMIN" }, select: { id: true } });
    for (const admin of admins) {
        recipientIds.push(String(admin.id));
    }
    sse_1.sseManager.sendToUsers([...new Set(recipientIds)], "por-update", {
        porId: id,
        action: "closed",
        status: "CLOSED",
    });
    return updated;
}
async function addMessage(porId, sender, senderId, text) {
    const request = await db_1.default.priceRequest.findUnique({ where: { id: porId } });
    if (!request) {
        throw new AppError_1.AppError("Price request not found", 404);
    }
    if (request.status === client_1.PORStatus.CLOSED) {
        throw new AppError_1.AppError("Cannot send messages on a closed POR request", 400);
    }
    const message = await db_1.default.porMessage.create({
        data: {
            porId,
            sender,
            senderId,
            text,
            timestamp: new Date().toISOString(),
        },
    });
    const recipientIds = [];
    if (senderId !== request.userId) {
        recipientIds.push(String(request.userId));
    }
    const admins = await db_1.default.user.findMany({ where: { role: "ADMIN" }, select: { id: true } });
    for (const admin of admins) {
        if (admin.id !== senderId) {
            recipientIds.push(String(admin.id));
        }
    }
    if (recipientIds.length > 0) {
        sse_1.sseManager.sendToUsers([...new Set(recipientIds)], "por-message", {
            porId,
            message: {
                id: message.id,
                sender: message.sender,
                senderId: message.senderId,
                text: message.text,
                timestamp: message.timestamp,
            },
        });
    }
    return {
        id: message.id,
        sender: message.sender,
        senderId: message.senderId,
        text: message.text || "",
        timestamp: message.timestamp || "",
    };
}
//# sourceMappingURL=por.service.js.map