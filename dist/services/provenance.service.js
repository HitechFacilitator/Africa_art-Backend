"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByArtwork = getByArtwork;
exports.create = create;
exports.deleteOne = deleteOne;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
async function getByArtwork(artworkId) {
    return db_1.default.provenanceRecord.findMany({
        where: { artworkId },
        orderBy: { createdAt: "desc" },
    });
}
async function create(artworkId, data) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id: artworkId } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    return db_1.default.provenanceRecord.create({
        data: {
            artworkId,
            previousOwner: data.previousOwner,
            acquisitionDate: data.acquisitionDate ? new Date(data.acquisitionDate) : undefined,
            transferDate: data.transferDate ? new Date(data.transferDate) : undefined,
            notes: data.notes,
        },
    });
}
async function deleteOne(id) {
    const record = await db_1.default.provenanceRecord.findUnique({ where: { id } });
    if (!record) {
        throw new AppError_1.AppError("Provenance record not found", 404);
    }
    await db_1.default.provenanceRecord.delete({ where: { id } });
}
//# sourceMappingURL=provenance.service.js.map