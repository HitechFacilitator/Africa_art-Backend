"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const AppError_1 = require("../utils/AppError");
const authorize = (...roles) => {
    return (req, _res, next) => {
        if (!req.user) {
            return next(new AppError_1.AppError("Not authenticated", 401));
        }
        if (!roles.includes(req.user.role)) {
            return next(new AppError_1.AppError("Insufficient permissions", 403));
        }
        next();
    };
};
exports.authorize = authorize;
//# sourceMappingURL=role.js.map