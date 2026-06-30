"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.getByAdvisor = getByAdvisor;
exports.getAll = getAll;
exports.create = create;
exports.confirm = confirm;
exports.reject = reject;
exports.complete = complete;
exports.cancel = cancel;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
const sse_1 = require("../utils/sse");
function mapStatus(status) {
    switch (status) {
        case client_1.ConsultationStatus.PENDING: return "Pending";
        case client_1.ConsultationStatus.CONFIRMED: return "Confirmed";
        case client_1.ConsultationStatus.COMPLETED: return "Completed";
        case client_1.ConsultationStatus.CANCELLED: return "Cancelled";
        case client_1.ConsultationStatus.REJECTED: return "Rejected";
        default: return String(status);
    }
}
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
        status: mapStatus(c.status),
        notes: c.notes || "",
        type: c.type,
        rejectionReason: c.rejectionReason || "",
        clientName: c.clientName || "",
        clientEmail: c.clientEmail || "",
        currentCollection: c.currentCollection || "",
        meetingFormat: c.meetingFormat || "",
    }));
}
async function getByAdvisor(advisorId) {
    const user = await db_1.default.user.findUnique({ where: { id: advisorId } });
    const consultations = await db_1.default.consultation.findMany({
        where: {
            OR: [
                { advisorId },
                ...(user?.name ? [{ expertName: user.name }] : []),
                ...(user?.name ? [{ expertName: { contains: user.name } }] : []),
            ],
        },
        include: {
            user: { select: { id: true, name: true, email: true, phone: true, institution: true, country: true } },
        },
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
        status: mapStatus(c.status),
        notes: c.notes || "",
        clientName: c.user?.name || c.clientName || "",
        clientEmail: c.user?.email || c.clientEmail || "",
        clientPhone: c.user?.phone || "",
        clientInstitution: c.user?.institution || "",
        clientCountry: c.user?.country || "",
        currentCollection: c.currentCollection || "",
        meetingFormat: c.meetingFormat || "",
        type: c.type,
        rejectionReason: c.rejectionReason || "",
        createdAt: c.createdAt.toISOString(),
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
    const activeConsultation = await db_1.default.consultation.findFirst({
        where: {
            userId,
            status: { in: [client_1.ConsultationStatus.PENDING, client_1.ConsultationStatus.CONFIRMED] },
        },
    });
    if (activeConsultation) {
        throw new AppError_1.AppError("You already have an active consultation. Please wait for it to be completed or rejected before scheduling a new one.", 409);
    }
    let advisorId = data.advisorId;
    if (!advisorId && data.expertName) {
        const advisor = await db_1.default.user.findFirst({
            where: { role: client_1.Role.ADVISOR, name: data.expertName },
        });
        if (advisor) {
            advisorId = advisor.id;
        }
        else {
            const advisorByInstitution = await db_1.default.user.findFirst({
                where: {
                    role: client_1.Role.ADVISOR,
                    name: { contains: data.expertName.split(" (")[0] },
                },
            });
            if (advisorByInstitution)
                advisorId = advisorByInstitution.id;
        }
    }
    const consultation = await db_1.default.consultation.create({
        data: {
            userId,
            advisorId,
            type: data.type,
            date: dateObj,
            notes: data.notes,
            topic: data.topic,
            timeSlot: data.timeSlot,
            expertName: data.expertName,
            expertTitle: data.expertTitle,
            expertAvatar: data.expertAvatar,
            clientName: data.clientName,
            clientEmail: data.clientEmail,
            currentCollection: data.currentCollection,
            meetingFormat: data.meetingFormat,
        },
    });
    const payload = {
        consultationId: consultation.id,
        action: "created",
        consultation: {
            id: `cons-${consultation.id}`,
            expertName: consultation.expertName,
            date: consultation.date.toISOString().split("T")[0],
            timeSlot: consultation.timeSlot,
            topic: consultation.topic,
            status: consultation.status,
            notes: consultation.notes,
            type: consultation.type,
        },
    };
    if (advisorId) {
        sse_1.sseManager.sendToUsers([String(advisorId)], "consultation-update", payload);
    }
    sse_1.sseManager.sendToUsers([String(userId)], "consultation-update", payload);
    return consultation;
}
async function confirm(id, advisorId) {
    const consultation = await db_1.default.consultation.findUnique({ where: { id } });
    if (!consultation) {
        throw new AppError_1.AppError("Consultation not found", 404);
    }
    if (consultation.status !== client_1.ConsultationStatus.PENDING) {
        throw new AppError_1.AppError("Consultation is not pending", 400);
    }
    const updated = await db_1.default.consultation.update({
        where: { id },
        data: { status: client_1.ConsultationStatus.CONFIRMED, advisorId },
    });
    const recipientIds = [String(consultation.userId), String(advisorId)];
    sse_1.sseManager.sendToUsers(recipientIds, "consultation-update", {
        consultationId: id,
        action: "confirmed",
        consultation: { id: `cons-${updated.id}`, status: updated.status },
    });
    return updated;
}
async function reject(id, reason) {
    const consultation = await db_1.default.consultation.findUnique({ where: { id } });
    if (!consultation) {
        throw new AppError_1.AppError("Consultation not found", 404);
    }
    if (consultation.status !== client_1.ConsultationStatus.PENDING) {
        throw new AppError_1.AppError("Consultation is not pending", 400);
    }
    const updated = await db_1.default.consultation.update({
        where: { id },
        data: { status: client_1.ConsultationStatus.REJECTED, rejectionReason: reason || null },
    });
    const recipientIds = [String(consultation.userId), String(consultation.advisorId)].filter(Boolean);
    sse_1.sseManager.sendToUsers(recipientIds, "consultation-update", {
        consultationId: id,
        action: "rejected",
        consultation: { id: `cons-${updated.id}`, status: updated.status, rejectionReason: updated.rejectionReason },
    });
    return updated;
}
async function complete(id) {
    const consultation = await db_1.default.consultation.findUnique({ where: { id } });
    if (!consultation) {
        throw new AppError_1.AppError("Consultation not found", 404);
    }
    const updated = await db_1.default.consultation.update({
        where: { id },
        data: { status: client_1.ConsultationStatus.COMPLETED },
    });
    const recipientIds = [String(consultation.userId), String(consultation.advisorId)].filter(Boolean);
    sse_1.sseManager.sendToUsers(recipientIds, "consultation-update", {
        consultationId: id,
        action: "completed",
        consultation: { id: `cons-${updated.id}`, status: updated.status },
    });
    return updated;
}
async function cancel(id) {
    const consultation = await db_1.default.consultation.findUnique({ where: { id } });
    if (!consultation) {
        throw new AppError_1.AppError("Consultation not found", 404);
    }
    const updated = await db_1.default.consultation.update({
        where: { id },
        data: { status: client_1.ConsultationStatus.CANCELLED },
    });
    const recipientIds = [String(consultation.userId), String(consultation.advisorId)].filter(Boolean);
    sse_1.sseManager.sendToUsers(recipientIds, "consultation-update", {
        consultationId: id,
        action: "cancelled",
        consultation: { id: `cons-${updated.id}`, status: updated.status },
    });
    return updated;
}
//# sourceMappingURL=consultation.service.js.map