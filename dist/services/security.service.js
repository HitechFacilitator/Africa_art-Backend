"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.create = create;
const db_1 = __importDefault(require("../config/db"));
async function getByUser(userId) {
    const records = await db_1.default.securityRecord.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });
    return records.map(r => ({
        id: `sec-${r.id}`,
        artworkTitle: r.artworkTitle,
        vaultLocation: r.vaultLocation || "",
        fingerprintId: r.fingerprintId || "",
        smartContractAddress: r.smartContractAddress || "",
        lastInspectionDate: r.lastInspectionDate || "",
        temperatureHumidity: r.temperatureHumidity || "",
        insurancePolicyNumber: r.insurancePolicyNumber || "",
    }));
}
async function create(userId, data) {
    const record = await db_1.default.securityRecord.create({
        data: {
            userId,
            ...data,
        },
    });
    return {
        id: `sec-${record.id}`,
        artworkTitle: record.artworkTitle,
        vaultLocation: record.vaultLocation || "",
        fingerprintId: record.fingerprintId || "",
        smartContractAddress: record.smartContractAddress || "",
        lastInspectionDate: record.lastInspectionDate || "",
        temperatureHumidity: record.temperatureHumidity || "",
        insurancePolicyNumber: record.insurancePolicyNumber || "",
    };
}
//# sourceMappingURL=security.service.js.map