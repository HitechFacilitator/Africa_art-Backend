"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.loginAs = loginAs;
exports.verifyOTP = verifyOTP;
exports.getMe = getMe;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../utils/AppError");
const client_1 = require("../generated/prisma/client");
const JWT_SECRET = process.env.JWT_SECRET || "africa-art-secret-key";
function generateToken(userId, role) {
    return jsonwebtoken_1.default.sign({ userId, role }, JWT_SECRET, { expiresIn: "24h" });
}
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
async function register(data) {
    const existing = await db_1.default.user.findUnique({ where: { email: data.email } });
    if (existing) {
        throw new AppError_1.AppError("Email already registered", 409);
    }
    const hashedPassword = await bcrypt_1.default.hash(data.password, 12);
    const user = await db_1.default.user.create({
        data: {
            email: data.email,
            password: hashedPassword,
            name: data.name,
            role: client_1.Role.COLLECTOR,
            country: data.country,
            institution: data.institution,
        },
    });
    const token = generateToken(user.id, user.role);
    return {
        user: toUserSession(user),
        token,
    };
}
async function login(email, _password) {
    const user = await db_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new AppError_1.AppError("Invalid email or password", 401);
    }
    // For demo: accept any password for existing users
    // In production: validate with bcrypt.compare
    const token = generateToken(user.id, user.role);
    // Generate a 6-digit OTP and print it to the backend terminal for development
    const otpCode = String(Math.floor(100000 + Math.random() * 900000));
    console.log(`\n${"=".repeat(50)}`);
    console.log(`  OTP CODE for ${email}: ${otpCode}`);
    console.log(`${"=".repeat(50)}\n`);
    return {
        user: toUserSession(user),
        token,
        requiresOTP: true,
        otpCode,
    };
}
async function loginAs(role) {
    const roleMap = {
        visitor: client_1.Role.VISITOR,
        collector: client_1.Role.COLLECTOR,
        prestige: client_1.Role.PRESTIGE,
        advisor: client_1.Role.ADVISOR,
        admin: client_1.Role.ADMIN,
    };
    const prismaRole = roleMap[role.toLowerCase()];
    if (!prismaRole) {
        throw new AppError_1.AppError("Invalid role", 400);
    }
    const user = await db_1.default.user.findFirst({ where: { role: prismaRole } });
    if (!user) {
        throw new AppError_1.AppError(`No user found for role: ${role}`, 404);
    }
    const token = generateToken(user.id, user.role);
    // Generate a 6-digit OTP and print it to the backend terminal for development
    const otpCode = String(Math.floor(100000 + Math.random() * 900000));
    console.log(`\n${"=".repeat(50)}`);
    console.log(`  OTP CODE for ${user.email} (${role}): ${otpCode}`);
    console.log(`${"=".repeat(50)}\n`);
    return {
        user: toUserSession(user),
        token,
    };
}
async function verifyOTP(email, _code) {
    const user = await db_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new AppError_1.AppError("Invalid session", 401);
    }
    const token = generateToken(user.id, user.role);
    return {
        user: toUserSession(user),
        token,
        success: true,
    };
}
async function getMe(userId) {
    const user = await db_1.default.user.findUnique({
        where: { id: userId },
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
async function forgotPassword(_email) {
    return { message: "If the email exists, a reset link has been sent" };
}
async function resetPassword(_token, _newPassword) {
    return { message: "Password has been reset successfully" };
}
//# sourceMappingURL=auth.service.js.map