"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = upload;
exports.deleteOne = deleteOne;
exports.setPrimary = setPrimary;
exports.reorder = reorder;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const promises_1 = __importDefault(require("fs/promises"));
async function upload(artworkId, files) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id: artworkId } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    const existingCount = await db_1.default.artworkImage.count({ where: { artworkId } });
    const images = await Promise.all(files.map((file, index) => db_1.default.artworkImage.create({
        data: {
            filename: file.filename,
            path: file.path,
            isPrimary: existingCount === 0 && index === 0,
            order: existingCount + index,
            artworkId,
        },
    })));
    return images;
}
async function deleteOne(imageId) {
    const image = await db_1.default.artworkImage.findUnique({ where: { id: imageId } });
    if (!image) {
        throw new AppError_1.AppError("Image not found", 404);
    }
    try {
        await promises_1.default.unlink(image.path);
    }
    catch {
        // File may already be deleted
    }
    await db_1.default.artworkImage.delete({ where: { id: imageId } });
}
async function setPrimary(imageId) {
    const image = await db_1.default.artworkImage.findUnique({ where: { id: imageId } });
    if (!image) {
        throw new AppError_1.AppError("Image not found", 404);
    }
    await db_1.default.artworkImage.updateMany({
        where: { artworkId: image.artworkId },
        data: { isPrimary: false },
    });
    return db_1.default.artworkImage.update({
        where: { id: imageId },
        data: { isPrimary: true },
    });
}
async function reorder(artworkId, imageIds) {
    const artwork = await db_1.default.artwork.findUnique({ where: { id: artworkId } });
    if (!artwork) {
        throw new AppError_1.AppError("Artwork not found", 404);
    }
    await Promise.all(imageIds.map((id, index) => db_1.default.artworkImage.update({
        where: { id },
        data: { order: index },
    })));
    return db_1.default.artworkImage.findMany({
        where: { artworkId },
        orderBy: { order: "asc" },
    });
}
//# sourceMappingURL=image.service.js.map