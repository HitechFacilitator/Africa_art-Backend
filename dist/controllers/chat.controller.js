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
exports.addTicketResponse = exports.updateTicketStatus = exports.getTickets = exports.sendMessage = exports.getThreads = void 0;
const chatService = __importStar(require("../services/chat.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.getThreads = (0, catchAsync_1.default)(async (_req, res) => {
    const data = await chatService.getThreads();
    res.json({ success: true, data });
});
exports.sendMessage = (0, catchAsync_1.default)(async (req, res) => {
    const message = await chatService.sendMessage(Number(req.params.threadId), req.body);
    res.status(201).json({ success: true, data: message });
});
exports.getTickets = (0, catchAsync_1.default)(async (_req, res) => {
    const data = await chatService.getTickets();
    res.json({ success: true, data });
});
exports.updateTicketStatus = (0, catchAsync_1.default)(async (req, res) => {
    await chatService.updateTicketStatus(Number(req.params.id), req.body.status);
    res.json({ success: true, message: "Ticket status updated" });
});
exports.addTicketResponse = (0, catchAsync_1.default)(async (req, res) => {
    const response = await chatService.addTicketResponse(Number(req.params.id), req.body.author, req.body.text);
    res.status(201).json({ success: true, data: response });
});
//# sourceMappingURL=chat.controller.js.map