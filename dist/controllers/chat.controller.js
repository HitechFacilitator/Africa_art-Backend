"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTicket = exports.addTicketResponse = exports.updateTicketStatus = exports.createTicket = exports.getTickets = exports.markThreadRead = exports.sendMessage = exports.getThreads = exports.createThread = void 0;
const chatService = __importStar(require("../services/chat.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const sse_1 = require("../utils/sse");
const db_1 = __importDefault(require("../config/db"));
exports.createThread = (0, catchAsync_1.default)(async (req, res) => {
    const dbUser = await db_1.default.user.findUnique({ where: { id: req.user.userId } });
    const thread = await chatService.createThread({
        ...req.body,
        clientName: req.body.clientName || dbUser?.name || "",
        clientRole: req.body.clientRole || dbUser?.role || "collector",
        clientUserId: req.user.userId,
    });
    res.status(201).json({ success: true, data: thread });
});
exports.getThreads = (0, catchAsync_1.default)(async (req, res) => {
    const data = await chatService.getThreads(req.user.userId, req.user.role);
    res.json({ success: true, data });
});
exports.sendMessage = (0, catchAsync_1.default)(async (req, res) => {
    // Convert senderId from string ("usr-7") to number if present
    const body = { ...req.body };
    if (typeof body.senderId === "string") {
        const parsed = Number(body.senderId.replace("usr-", ""));
        body.senderId = isNaN(parsed) ? undefined : parsed;
    }
    else if (typeof body.senderId === "number") {
        // Already a number, validate it
        body.senderId = isNaN(body.senderId) ? undefined : body.senderId;
    }
    else {
        // Not a string or number — clear it
        body.senderId = undefined;
    }
    // Ensure text is never empty/null for Prisma
    if (!body.text || typeof body.text !== "string") {
        body.text = "";
    }
    const threadId = Number(String(req.params.threadId).replace("thr-", ""));
    const message = await chatService.sendMessage(threadId, {
        ...body,
        userId: req.user.userId,
    });
    // Use recipientIds from service (based on thread participant fields)
    const recipientIds = message.recipientIds || [];
    if (recipientIds.length > 0) {
        sse_1.sseManager.sendToUsers(recipientIds, "new-message", {
            threadId,
            message,
        });
    }
    res.status(201).json({ success: true, data: message });
});
exports.markThreadRead = (0, catchAsync_1.default)(async (req, res) => {
    const result = await chatService.markThreadRead(Number(req.params.threadId), req.user.userId);
    res.json({ success: true, data: result });
});
exports.getTickets = (0, catchAsync_1.default)(async (req, res) => {
    const data = await chatService.getTickets(req.user.userId, req.user.role);
    res.json({ success: true, data });
});
exports.createTicket = (0, catchAsync_1.default)(async (req, res) => {
    const dbUser = await db_1.default.user.findUnique({ where: { id: req.user.userId } });
    const ticket = await chatService.createTicket(req.user.userId, {
        ...req.body,
        clientName: req.body.clientName || dbUser?.name || "",
        clientRole: req.body.clientRole || dbUser?.role || "collector",
    });
    res.status(201).json({ success: true, data: ticket });
});
exports.updateTicketStatus = (0, catchAsync_1.default)(async (req, res) => {
    await chatService.updateTicketStatus(Number(req.params.id), req.body.status);
    // Notify ticket owner of status change
    const ticket = await db_1.default.supportTicket.findUnique({
        where: { id: Number(req.params.id) },
        select: { userId: true },
    });
    if (ticket && ticket.userId !== req.user.userId) {
        sse_1.sseManager.sendToUsers([String(ticket.userId)], "ticket-update", {
            ticketId: Number(req.params.id),
            response: { author: "System", text: `Status changed to: ${req.body.status}`, timestamp: new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC" },
        });
    }
    res.json({ success: true, message: "Ticket status updated" });
});
exports.addTicketResponse = (0, catchAsync_1.default)(async (req, res) => {
    let author = req.body.author;
    if (!author && req.user) {
        const dbUser = await db_1.default.user.findUnique({ where: { id: req.user.userId } });
        author = dbUser?.name || "Unknown";
    }
    const response = await chatService.addTicketResponse(Number(req.params.id), author || "Unknown", req.body.text);
    // Only notify the ticket owner (not the sender)
    const ticket = await db_1.default.supportTicket.findUnique({
        where: { id: Number(req.params.id) },
        select: { userId: true },
    });
    if (ticket && ticket.userId !== req.user.userId) {
        sse_1.sseManager.sendToUsers([String(ticket.userId)], "ticket-update", {
            ticketId: Number(req.params.id),
            response,
        });
    }
    res.status(201).json({ success: true, data: response });
});
exports.deleteTicket = (0, catchAsync_1.default)(async (req, res) => {
    await chatService.deleteTicket(Number(req.params.id), req.user.userId, req.user.role);
    res.json({ success: true, message: "Ticket deleted" });
});
//# sourceMappingURL=chat.controller.js.map