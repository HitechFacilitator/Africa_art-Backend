"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConsultations = getConsultations;
exports.getClients = getClients;
exports.getPlacements = getPlacements;
exports.getActivities = getActivities;
const db_1 = __importDefault(require("../config/db"));
async function getConsultations(advisorId) {
    const user = advisorId ? await db_1.default.user.findUnique({ where: { id: advisorId } }) : null;
    const where = advisorId ? {
        OR: [
            { advisorId },
            ...(user?.name ? [{ expertName: user.name }] : []),
            ...(user?.name ? [{ expertName: { contains: user.name } }] : []),
        ],
    } : {};
    const consultations = await db_1.default.consultation.findMany({
        where,
        include: { user: true },
        orderBy: { date: "desc" },
    });
    return consultations.map(c => ({
        id: `cons-${c.id}`,
        clientName: c.user?.name || "",
        clientTier: "Standard",
        topic: c.topic || "",
        date: c.date.toISOString().split("T")[0],
        timeSlot: c.timeSlot || "",
        status: c.status,
        type: "Video",
        notes: c.notes || "",
        followUpRequired: false,
    }));
}
async function getClients(advisorId) {
    const clients = await db_1.default.advisorClient.findMany({
        where: { advisorId },
        orderBy: { createdAt: "desc" },
    });
    return clients.map(c => ({
        id: `cli-${c.id}`,
        name: c.name,
        email: c.email || "",
        tier: c.tier || "Standard",
        country: c.country || "",
        avatarColor: c.avatarColor || "#C5A059",
        totalSpent: c.totalSpent ? Number(c.totalSpent) : 0,
        acquisitionsCount: c.acquisitionsCount,
        satisfactionScore: c.satisfactionScore ? Number(c.satisfactionScore) : 0,
        lastContact: c.lastContact || "",
        interests: c.interests ? JSON.parse(c.interests) : [],
    }));
}
async function getPlacements(userId) {
    const placements = await db_1.default.advisorPlacement.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });
    return placements.map(p => ({
        id: `plc-${p.id}`,
        artworkTitle: p.artworkTitle || "",
        artworkCulture: p.artworkCulture || "",
        artworkEra: p.artworkEra || "",
        imageUrl: p.imageUrl || "",
        valuation: p.valuation ? Number(p.valuation) : 0,
        commission: p.commission ? Number(p.commission) : 0,
        clientName: p.clientName || "",
        status: p.status,
        notes: p.notes || "",
        proposedDate: p.proposedDate?.toISOString?.() || "",
    }));
}
async function getActivities() {
    const activities = await db_1.default.advisorActivity.findMany({
        orderBy: { createdAt: "desc" },
    });
    return activities.map(a => ({
        id: `act-${a.id}`,
        type: a.type || "",
        title: a.title || "",
        description: a.description || "",
        timestamp: a.timestamp || "",
        icon: a.icon || "",
    }));
}
//# sourceMappingURL=advisor.service.js.map