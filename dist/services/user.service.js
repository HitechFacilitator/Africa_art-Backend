"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getById = getById;
exports.update = update;
exports.deleteOne = deleteOne;
exports.updateRole = updateRole;
exports.changePassword = changePassword;
const db_1 = __importDefault(require("../config/db"));
const AppError_1 = require("../utils/AppError");
const bcrypt_1 = __importDefault(require("bcrypt"));
function toUserSession(user) {
    return {
        id: `usr-${user.id}`,
        email: user.email,
        name: user.name,
        role: user.role.toString().toLowerCase(),
        avatar: user.avatar || undefined,
        institution: user.institution || undefined,
    };
}
async function getAll(page, limit, skip) {
    const [data, total] = await Promise.all([
        db_1.default.user.findMany({
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                avatar: true,
                institution: true,
                country: true,
                tier: true,
                emailVerified: true,
                createdAt: true,
            },
        }),
        db_1.default.user.count(),
    ]);
    return {
        data: data.map(u => ({
            ...u,
            id: `usr-${u.id}`,
            role: u.role.toString().toLowerCase(),
        })),
        total,
    };
}
async function getById(id) {
    const user = await db_1.default.user.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            avatar: true,
            institution: true,
            country: true,
            tier: true,
            twoFactorEnabled: true,
            emailVerified: true,
            createdAt: true,
        },
    });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    return toUserSession(user);
}
async function update(id, data) {
    const user = await db_1.default.user.findUnique({ where: { id } });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    return db_1.default.user.update({
        where: { id },
        data,
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            avatar: true,
            institution: true,
        },
    });
}
async function deleteOne(id) {
    const user = await db_1.default.user.findUnique({ where: { id } });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    await db_1.default.user.delete({ where: { id } });
}
async function updateRole(id, role) {
    const user = await db_1.default.user.findUnique({ where: { id } });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    return db_1.default.user.update({
        where: { id },
        data: { role },
        select: { id: true, email: true, name: true, role: true },
    });
}
async function changePassword(id, currentPassword, newPassword) {
    const user = await db_1.default.user.findUnique({ where: { id } });
    if (!user) {
        throw new AppError_1.AppError("User not found", 404);
    }
    const isValid = await bcrypt_1.default.compare(currentPassword, user.password);
    if (!isValid) {
        throw new AppError_1.AppError("Current password is incorrect", 401);
    }
    const hashed = await bcrypt_1.default.hash(newPassword, 12);
    await db_1.default.user.update({
        where: { id },
        data: { password: hashed },
    });
    return { success: true };
}
//# sourceMappingURL=user.service.js.map