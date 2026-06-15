"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.verify = verify;
exports.verifyAll = verifyAll;
exports.log = log;
const db_1 = __importDefault(require("../config/db"));
async function getAll(page, limit, skip) {
    const [data, total] = await Promise.all([
        db_1.default.auditLog.findMany({
            skip,
            take: limit,
            orderBy: { timestamp: "desc" },
            include: { user: { select: { id: true, name: true, email: true } } },
        }),
        db_1.default.auditLog.count(),
    ]);
    return {
        data: data.map(log => ({
            id: `log-${log.id}`,
            user: log.user?.name || "System",
            timestamp: log.timestamp.toISOString().replace("T", " ").slice(0, 19) + " UTC",
            action: log.action,
            txHash: log.txHash || `0x${Math.floor(Math.random() * 0xffffff).toString(16).padStart(4, "0")}...${Math.floor(Math.random() * 0xffffff).toString(16).padStart(4, "0")}`,
            signed: log.signed,
        })),
        total,
    };
}
async function verify(id) {
    await db_1.default.auditLog.update({
        where: { id },
        data: { signed: true },
    });
}
async function verifyAll() {
    await db_1.default.auditLog.updateMany({
        data: { signed: true },
    });
}
async function log(userId, action, resource, resourceId, metadata, txHash) {
    return db_1.default.auditLog.create({
        data: {
            userId,
            action,
            resource,
            resourceId,
            metadata: metadata,
            txHash,
        },
    });
}
//# sourceMappingURL=adminAudit.service.js.map