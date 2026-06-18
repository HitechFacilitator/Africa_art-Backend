"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expire = exports.cancel = exports.create = exports.getByUser = void 0;
const reservationService = __importStar(require("../services/reservation.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const parseId_1 = require("../utils/parseId");
exports.getByUser = (0, catchAsync_1.default)(async (req, res) => {
    const reservations = await reservationService.getByUser(req.user.userId);
    res.json({ success: true, data: reservations });
});
exports.create = (0, catchAsync_1.default)(async (req, res) => {
    const reservation = await reservationService.create(req.user.userId, (0, parseId_1.parseNumericId)(req.params.artworkId));
    res.status(201).json({ success: true, data: reservation });
});
exports.cancel = (0, catchAsync_1.default)(async (req, res) => {
    const reservation = await reservationService.cancel(Number(req.params.id), req.user.userId);
    res.json({ success: true, data: reservation });
});
exports.expire = (0, catchAsync_1.default)(async (_req, res) => {
    const count = await reservationService.expire();
    res.json({ success: true, data: { expired: count } });
});
//# sourceMappingURL=reservation.controller.js.map