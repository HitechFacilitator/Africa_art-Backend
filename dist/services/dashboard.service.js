"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = getByUser;
exports.create = create;
exports.remove = remove;
const db_1 = __importDefault(require("../config/db"));
async function getByUser(userId) {
    const acquisitions = await db_1.default.acquisition.findMany({
        where: { userId },
        include: { provenanceChain: true },
        orderBy: { createdAt: "desc" },
    });
    return acquisitions.map(a => ({
        id: `acq-${a.id}`,
        title: a.title,
        era: a.era || "",
        culture: a.culture || "",
        acquisitionDate: a.acquisitionDate?.toISOString?.() || a.createdAt.toISOString(),
        status: a.status,
        imageUrl: a.imageUrl || "",
        estimatedValueEur: a.estimatedValueEur ? Number(a.estimatedValueEur) : 0,
        description: a.description || "",
        provenance: a.provenanceChain.map(p => p.entry),
    }));
}
async function create(userId, data) {
    const acquisition = await db_1.default.acquisition.create({
        data: {
            userId,
            title: data.title,
            era: data.era,
            culture: data.culture,
            acquisitionDate: data.acquisitionDate ? new Date(data.acquisitionDate) : undefined,
            status: data.status || "Certified",
            imageUrl: data.imageUrl,
            estimatedValueEur: data.estimatedValueEur,
            description: data.description,
            provenanceChain: data.provenance ? {
                create: data.provenance.map(entry => ({ entry })),
            } : undefined,
        },
        include: { provenanceChain: true },
    });
    return {
        id: `acq-${acquisition.id}`,
        title: acquisition.title,
        era: acquisition.era || "",
        culture: acquisition.culture || "",
        acquisitionDate: acquisition.acquisitionDate?.toISOString?.() || acquisition.createdAt.toISOString(),
        status: acquisition.status,
        imageUrl: acquisition.imageUrl || "",
        estimatedValueEur: acquisition.estimatedValueEur ? Number(acquisition.estimatedValueEur) : 0,
        description: acquisition.description || "",
        provenance: acquisition.provenanceChain.map(p => p.entry),
    };
}
async function remove(id) {
    await db_1.default.acquisition.delete({ where: { id } });
}
//# sourceMappingURL=dashboard.service.js.map