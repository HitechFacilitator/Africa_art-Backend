"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.getAll = getAll;
exports.create = create;
exports.confirm = confirm;
exports.complete = complete;
exports.cancel = cancel;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
async function getByUser(userId) {
    const consultations = await db_1.default.consultation.findMany({
        where: { userId },
        orderBy: { date: "desc" },
    });
    return consultations.map(c => ({
        id: `cons-${c.id}`,
        expertName: c.expertName || "",
        expertTitle: c.expertTitle || "",
        expertAvatar: c.expertAvatar || "",
        date: c.date.toISOString().split("T")[0],
        timeSlot: c.timeSlot || "",
        topic: c.topic || "",
        status: c.status,
        notes: c.notes || "",
    }));
}
async function getAll(page, limit, skip) {
    const [data, total] = await Promise.all([
        db_1.default.consultation.findMany({
            skip,
            take: limit,
            orderBy: { date: "desc" },
            include: {
                user: { select: { id: true, name: true, email: true } },
            },
        }),
        db_1.default.consultation.count(),
    ]);
    return { data, total };
}
async function create(userId, data) {
    const dateObj = new Date(data.date);
    if (isNaN(dateObj.getTime())) {
        throw new AppError_1.AppError("Invalid date", 400);
    }
    return db_1.default.consultation.create({
        data: {
            userId,
            type: data.type,
            date: dateObj,
            notes: data.notes,
            topic: data.topic,
            timeSlot: data.timeSlot,
            expertName: data.expertName,
            expertTitle: data.expertTitle,
            expertAvatar: data.expertAvatar,
        },
    });
}
async function confirm(id, advisorId) {
    const consultation = await db_1.default.consultation.findUnique({ where: { id } });
    if (!consultation) {
        throw new AppError_1.AppError("Consultation not found", 404);
    }
    if (consultation.status !== client_1.ConsultationStatus.PENDING) {
        throw new AppError_1.AppError("Consultation is not pending", 400);
    }
    return db_1.default.consultation.update({
        where: { id },
        data: { status: client_1.ConsultationStatus.CONFIRMED, advisorId },
    });
}
async function complete(id) {
    const consultation = await db_1.default.consultation.findUnique({ where: { id } });
    if (!consultation) {
        throw new AppError_1.AppError("Consultation not found", 404);
    }
    return db_1.default.consultation.update({
        where: { id },
        data: { status: client_1.ConsultationStatus.COMPLETED },
    });
}
async function cancel(id) {
    const consultation = await db_1.default.consultation.findUnique({ where: { id } });
    if (!consultation) {
        throw new AppError_1.AppError("Consultation not found", 404);
    }
    return db_1.default.consultation.update({
        where: { id },
        data: { status: client_1.ConsultationStatus.CANCELLED },
    });
}
//# sourceMappingURL=consultation.service.js.map