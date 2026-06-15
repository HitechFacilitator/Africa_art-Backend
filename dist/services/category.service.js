"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.deleteOne = deleteOne;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
async function getAll() {
    return db_1.default.category.findMany({
        orderBy: { name: "asc" },
        include: { _count: { select: { artworks: true } } },
    });
}
async function getById(id) {
    const category = await db_1.default.category.findUnique({
        where: { id },
        include: { artworks: { take: 10, orderBy: { createdAt: "desc" } } },
    });
    if (!category) {
        throw new AppError_1.AppError("Category not found", 404);
    }
    return category;
}
async function create(data) {
    const existing = await db_1.default.category.findUnique({ where: { name: data.name } });
    if (existing) {
        throw new AppError_1.AppError("Category name already exists", 409);
    }
    return db_1.default.category.create({ data });
}
async function update(id, data) {
    const category = await db_1.default.category.findUnique({ where: { id } });
    if (!category) {
        throw new AppError_1.AppError("Category not found", 404);
    }
    if (data.name) {
        const existing = await db_1.default.category.findFirst({ where: { name: data.name, NOT: { id } } });
        if (existing) {
            throw new AppError_1.AppError("Category name already exists", 409);
        }
    }
    return db_1.default.category.update({ where: { id }, data });
}
async function deleteOne(id) {
    const category = await db_1.default.category.findUnique({ where: { id } });
    if (!category) {
        throw new AppError_1.AppError("Category not found", 404);
    }
    const artworkCount = await db_1.default.artwork.count({ where: { categoryId: id } });
    if (artworkCount > 0) {
        throw new AppError_1.AppError("Cannot delete category with associated artworks", 400);
    }
    await db_1.default.category.delete({ where: { id } });
}
//# sourceMappingURL=category.service.js.map