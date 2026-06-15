"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByArtwork = getByArtwork;
exports.getByUser = getByUser;
exports.getById = getById;
exports.create = create;
exports.verify = verify;
exports.deleteOne = deleteOne;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const crypto_1 = __importDefault(require("crypto"));
async function getByArtwork(artworkId) {
    return db_1.default.certificate.findMany({
        where: { artworkId },
        orderBy: { issuedDate: "desc" },
        include: {
            artwork: { select: { id: true, title: true } },
            user: { select: { id: true, firstName: true, lastName: true } },
        },
    });
}
async function getByUser(userId) {
    return db_1.default.certificate.findMany({
        where: { userId },
        orderBy: { issuedDate: "desc" },
        include: {
            artwork: { select: { id: true, title: true } },
        },
    });
}
async function getById(id) {
    const cert = await db_1.default.certificate.findUnique({
        where: { id },
        include: {
            artwork: true,
            user: { select: { id: true, firstName: true, lastName: true, email: true } },
        },
    });
    if (!cert) {
        throw new AppError_1.AppError("Certificate not found", 404);
    }
    return cert;
}
async function create(data) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id: data.artworkId } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    const certNumber = `COA-${Date.now()}-${crypto_1.default.randomBytes(4).toString("hex").toUpperCase()}`;
    return db_1.default.certificate.create({
        data: {
            certificateNumber: certNumber,
            title: data.title,
            artworkId: data.artworkId,
            userId: data.userId,
            filename: data.filename,
            path: data.path,
            expiryDate: data.expiryDate ? new Date(data.expiryDate) : undefined,
            blockchainHash: data.blockchainHash,
        },
    });
}
async function verify(certificateNumber) {
    const cert = await db_1.default.certificate.findUnique({
        where: { certificateNumber },
        include: {
            artwork: { select: { id: true, title: true } },
            user: { select: { id: true, firstName: true, lastName: true } },
        },
    });
    if (!cert) {
        throw new AppError_1.AppError("Certificate not found", 404);
    }
    return {
        isValid: cert.isValid,
        certificate: cert,
    };
}
async function deleteOne(id) {
    const cert = await db_1.default.certificate.findUnique({ where: { id } });
    if (!cert) {
        throw new AppError_1.AppError("Certificate not found", 404);
    }
    await db_1.default.certificate.delete({ where: { id } });
}
//# sourceMappingURL=certificate.service.js.map