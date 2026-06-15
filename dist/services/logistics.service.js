"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.create = create;
const db_1 = __importDefault(require("../config/db"));
async function getByUser(userId) {
    const shipments = await db_1.default.logisticsShipment.findMany({
        where: { userId },
        include: { updates: { orderBy: { createdAt: "asc" } } },
        orderBy: { createdAt: "desc" },
    });
    return shipments.map(s => ({
        id: `ship-${s.id}`,
        artworkTitle: s.artworkTitle,
        carrier: s.carrier || "",
        status: s.status,
        estimatedDeliveryDate: s.estimatedDeliveryDate || "",
        securityTier: s.securityTier || "",
        insuranceCoverage: s.insuranceCoverage || "",
        updates: s.updates.map(u => ({
            date: u.date || "",
            status: u.status || "",
            location: u.location || "",
            description: u.description || "",
        })),
    }));
}
async function create(userId, data) {
    const shipment = await db_1.default.logisticsShipment.create({
        data: {
            userId,
            artworkTitle: data.artworkTitle,
            carrier: data.carrier,
            status: data.status || "Origin Hub",
            estimatedDeliveryDate: data.estimatedDeliveryDate,
            securityTier: data.securityTier,
            insuranceCoverage: data.insuranceCoverage,
            updates: data.updates ? {
                create: data.updates,
            } : undefined,
        },
        include: { updates: true },
    });
    return {
        id: `ship-${shipment.id}`,
        artworkTitle: shipment.artworkTitle,
        carrier: shipment.carrier || "",
        status: shipment.status,
        estimatedDeliveryDate: shipment.estimatedDeliveryDate || "",
        securityTier: shipment.securityTier || "",
        insuranceCoverage: shipment.insuranceCoverage || "",
        updates: shipment.updates.map(u => ({
            date: u.date || "",
            status: u.status || "",
            location: u.location || "",
            description: u.description || "",
        })),
    };
}
//# sourceMappingURL=logistics.service.js.map