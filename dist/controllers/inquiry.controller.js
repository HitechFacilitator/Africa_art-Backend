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
exports.addMessage = exports.create = exports.getAll = exports.getByUser = void 0;
const inquiryService = __importStar(require("../services/inquiry.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const sse_1 = require("../utils/sse");
const db_1 = __importDefault(require("../config/db"));
exports.getByUser = (0, catchAsync_1.default)(async (req, res) => {
    const data = await inquiryService.getByUser(req.user.userId);
    res.json({ success: true, data });
});
exports.getAll = (0, catchAsync_1.default)(async (req, res) => {
    const inquiries = await db_1.default.inquiry.findMany({
        include: { messages: { orderBy: { createdAt: "asc" } } },
        orderBy: { createdAt: "desc" },
    });
    res.json({
        success: true,
        data: inquiries.map(inq => ({
            id: `inq-${inq.id}`,
            artworkTitle: inq.artworkTitle,
            artworkYear: inq.artworkYear || "",
            imageUrl: inq.imageUrl || "",
            status: inq.status,
            category: inq.category || "General",
            date: inq.date || inq.createdAt.toISOString(),
            clientName: inq.userId ? String(inq.userId) : "",
            messages: inq.messages.map(m => ({
                sender: m.sender,
                text: m.text || "",
                timestamp: m.timestamp || "",
            })),
        })),
    });
});
exports.create = (0, catchAsync_1.default)(async (req, res) => {
    const inquiry = await inquiryService.create(req.user.userId, req.body);
    res.status(201).json({ success: true, data: inquiry });
});
exports.addMessage = (0, catchAsync_1.default)(async (req, res) => {
    const message = await inquiryService.addMessage(Number(req.params.id), req.body.sender, req.body.text);
    const inquiry = await db_1.default.inquiry.findUnique({
        where: { id: Number(req.params.id) },
        select: { userId: true },
    });
    if (!inquiry) {
        res.status(201).json({ success: true, data: message });
        return;
    }
    const senderId = String(req.user.userId);
    const ownerId = String(inquiry.userId);
    if (senderId === ownerId) {
        // User sent message → notify all admins
        const admins = await db_1.default.user.findMany({ where: { role: "ADMIN" }, select: { id: true } });
        const adminIds = admins.map(a => String(a.id));
        if (adminIds.length > 0) {
            sse_1.sseManager.sendToUsers(adminIds, "inquiry-update", {
                inquiryId: Number(req.params.id),
                message,
            });
        }
    }
    else {
        // Admin sent message → notify the inquiry owner
        sse_1.sseManager.sendToUsers([ownerId], "inquiry-update", {
            inquiryId: Number(req.params.id),
            message,
        });
    }
    res.status(201).json({ success: true, data: message });
});
//# sourceMappingURL=inquiry.controller.js.map