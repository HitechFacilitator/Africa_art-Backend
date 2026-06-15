"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThreads = getThreads;
exports.sendMessage = sendMessage;
exports.getTickets = getTickets;
exports.updateTicketStatus = updateTicketStatus;
exports.addTicketResponse = addTicketResponse;
const db_1 = __importDefault(require("../config/db"));
async function getThreads() {
    const threads = await db_1.default.chatThread.findMany({
        include: { messages: { orderBy: { createdAt: "asc" } } },
        orderBy: { updatedAt: "desc" },
    });
    return threads.map(t => ({
        id: `thr-${t.id}`,
        clientName: t.clientName || "",
        clientRole: t.clientRole || "",
        advisorName: t.advisorName || "",
        subject: t.subject || "",
        lastMessage: t.lastMessage || "",
        lastMessageTime: t.lastMessageTime || "",
        unreadCount: t.unreadCount,
        status: t.status,
        messages: t.messages.map(m => ({
            id: `msg-${m.id}`,
            senderId: m.senderId || "",
            senderName: m.senderName || "",
            senderRole: m.senderRole || "",
            text: m.text || "",
            timestamp: m.timestamp || "",
            read: m.read,
        })),
    }));
}
async function sendMessage(threadId, data) {
    const message = await db_1.default.chatMessage.create({
        data: {
            threadId,
            senderId: data.senderId,
            senderName: data.senderName,
            senderRole: data.senderRole,
            text: data.text,
            timestamp: new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC",
            read: true,
        },
    });
    await db_1.default.chatThread.update({
        where: { id: threadId },
        data: {
            lastMessage: data.text,
            lastMessageTime: message.timestamp || "",
        },
    });
    return {
        id: `msg-${message.id}`,
        senderId: message.senderId || "",
        senderName: message.senderName || "",
        senderRole: message.senderRole || "",
        text: message.text || "",
        timestamp: message.timestamp || "",
        read: message.read,
    };
}
async function getTickets() {
    const tickets = await db_1.default.supportTicket.findMany({
        include: { responses: { orderBy: { createdAt: "asc" } } },
        orderBy: { createdAt: "desc" },
    });
    return tickets.map(t => ({
        id: t.id.toString(),
        clientName: t.clientName || "",
        clientRole: t.clientRole || "",
        subject: t.subject || "",
        description: t.description || "",
        status: t.status,
        priority: t.priority,
        createdDate: t.createdDate || "",
        lastUpdate: t.lastUpdate || "",
        assignedTo: t.assignedTo || "",
        responses: t.responses.map(r => ({
            author: r.author || "",
            text: r.text || "",
            timestamp: r.timestamp || "",
        })),
    }));
}
async function updateTicketStatus(id, status) {
    await db_1.default.supportTicket.update({
        where: { id },
        data: {
            status,
            lastUpdate: new Date().toISOString().split("T")[0],
        },
    });
}
async function addTicketResponse(id, author, text) {
    const response = await db_1.default.ticketResponse.create({
        data: {
            ticketId: id,
            author,
            text,
            timestamp: new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC",
        },
    });
    await db_1.default.supportTicket.update({
        where: { id },
        data: { lastUpdate: new Date().toISOString().split("T")[0] },
    });
    return {
        author: response.author || "",
        text: response.text || "",
        timestamp: response.timestamp || "",
    };
}
//# sourceMappingURL=chat.service.js.map