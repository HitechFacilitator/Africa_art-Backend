"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../utils/AppError");
const JWT_SECRET = process.env.JWT_SECRET || "africa-art-secret-key";
const authenticate = (req, _res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return next(new AppError_1.AppError("No token provided", 401));
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = { userId: decoded.userId, role: decoded.role };
        next();
    }
    catch {
        return next(new AppError_1.AppError("Invalid or expired token", 401));
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.js.map