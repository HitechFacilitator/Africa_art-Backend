"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateRegister = void 0;
const AppError_1 = require("../utils/AppError");
const validateRegister = (req, _res, next) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        return next(new AppError_1.AppError("Email, password, and name are required", 400));
    }
    if (password.length < 12) {
        return next(new AppError_1.AppError("Password must be at least 12 characters", 400));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return next(new AppError_1.AppError("Invalid email format", 400));
    }
    next();
};
exports.validateRegister = validateRegister;
const validateLogin = (req, _res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new AppError_1.AppError("Email and password are required", 400));
    }
    next();
};
exports.validateLogin = validateLogin;
//# sourceMappingURL=auth.validator.js.map