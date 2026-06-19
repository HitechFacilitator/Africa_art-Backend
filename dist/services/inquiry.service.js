"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.create = create;
exports.addMessage = addMessage;
const db_1 = __importDefault(require("../config/db"));
async function getByUser(userId) {
    const inquiries = await db_1.default.inquiry.findMany({
        where: { userId },
        include: { messages: { orderBy: { createdAt: "asc" } } },
        orderBy: { createdAt: "desc" },
    });
    return inquiries.map(inq => ({
        id: `inq-${inq.id}`,
        artworkTitle: inq.artworkTitle,
        artworkYear: inq.artworkYear || "",
        imageUrl: inq.imageUrl || "",
        status: inq.status,
        category: inq.category || "General",
        date: inq.date || inq.createdAt.toISOString(),
        messages: inq.messages.map(m => ({
            sender: m.sender,
            text: m.text || "",
            timestamp: m.timestamp || "",
        })),
    }));
}
async function create(userId, data) {
    const existing = await db_1.default.inquiry.findFirst({
        where: { userId, artworkTitle: data.artworkTitle },
        include: { messages: { orderBy: { createdAt: "asc" } } },
    });
    if (existing) {
        return {
            id: `inq-${existing.id}`,
            artworkTitle: existing.artworkTitle,
            artworkYear: existing.artworkYear || "",
            imageUrl: existing.imageUrl || "",
            status: existing.status,
            category: existing.category || "General",
            date: existing.date || existing.createdAt.toISOString(),
            messages: existing.messages.map(m => ({
                sender: m.sender,
                text: m.text || "",
                timestamp: m.timestamp || "",
            })),
            existing: true,
        };
    }
    const inquiry = await db_1.default.inquiry.create({
        data: {
            userId,
            artworkTitle: data.artworkTitle,
            artworkYear: data.artworkYear,
            imageUrl: data.imageUrl,
            status: data.status || "Received",
            category: data.category || "General",
            date: new Date().toISOString(),
            messages: data.messages ? {
                create: data.messages.map(m => ({
                    sender: m.sender,
                    text: m.text,
                    timestamp: m.timestamp || new Date().toISOString(),
                })),
            } : undefined,
        },
        include: { messages: true },
    });
    return {
        id: `inq-${inquiry.id}`,
        artworkTitle: inquiry.artworkTitle,
        artworkYear: inquiry.artworkYear || "",
        imageUrl: inquiry.imageUrl || "",
        status: inquiry.status,
        category: inquiry.category || "General",
        date: inquiry.date || inquiry.createdAt.toISOString(),
        messages: inquiry.messages.map(m => ({
            sender: m.sender,
            text: m.text || "",
            timestamp: m.timestamp || "",
        })),
    };
}
async function addMessage(inquiryId, sender, text) {
    const message = await db_1.default.inquiryMessage.create({
        data: {
            inquiryId,
            sender,
            text,
            timestamp: new Date().toISOString(),
        },
    });
    return {
        sender: message.sender,
        text: message.text || "",
        timestamp: message.timestamp || "",
    };
}
//# sourceMappingURL=inquiry.service.js.map