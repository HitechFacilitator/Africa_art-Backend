"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.release = release;
exports.dispute = dispute;
exports.refund = refund;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
async function getAll(page, limit, skip) {
    const [data, total] = await Promise.all([
        db_1.default.escrowTransaction.findMany({
            skip,
            take: limit,
            orderBy: { createdDate: "desc" },
        }),
        db_1.default.escrowTransaction.count(),
    ]);
    return {
        data: data.map(t => ({
            id: `esc-${t.id}`,
            artworkTitle: t.artworkTitle,
            buyerName: t.buyerName || "",
            sellerName: t.sellerName || "",
            amount: Number(t.amount),
            status: t.status,
            createdDate: t.createdDate.toISOString(),
            notes: t.notes || "",
        })),
        total,
    };
}
async function release(id) {
    const existing = await db_1.default.escrowTransaction.findUnique({ where: { id } });
    if (!existing)
        throw new AppError_1.AppError("Escrow transaction not found", 404);
    const tx = await db_1.default.escrowTransaction.update({
        where: { id },
        data: { status: "RELEASED", notes: " Funds released." },
    });
    return tx;
}
async function dispute(id) {
    const existing = await db_1.default.escrowTransaction.findUnique({ where: { id } });
    if (!existing)
        throw new AppError_1.AppError("Escrow transaction not found", 404);
    const tx = await db_1.default.escrowTransaction.update({
        where: { id },
        data: { status: "DISPUTED", notes: " Dispute initiated." },
    });
    return tx;
}
async function refund(id) {
    const existing = await db_1.default.escrowTransaction.findUnique({ where: { id } });
    if (!existing)
        throw new AppError_1.AppError("Escrow transaction not found", 404);
    const tx = await db_1.default.escrowTransaction.update({
        where: { id },
        data: { status: "REFUNDED", notes: " Refund processed." },
    });
    return tx;
}
//# sourceMappingURL=escrow.service.js.map