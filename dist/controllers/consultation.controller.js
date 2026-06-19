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
exports.cancel = exports.complete = exports.reject = exports.confirm = exports.create = exports.getAll = exports.getByAdvisor = exports.getByUser = void 0;
const consultationService = __importStar(require("../services/consultation.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const pagination_1 = require("../utils/pagination");
exports.getByUser = (0, catchAsync_1.default)(async (req, res) => {
    const consultations = await consultationService.getByUser(req.user.userId);
    res.json({ success: true, data: consultations });
});
exports.getByAdvisor = (0, catchAsync_1.default)(async (req, res) => {
    const consultations = await consultationService.getByAdvisor(req.user.userId);
    res.json({ success: true, data: consultations });
});
exports.getAll = (0, catchAsync_1.default)(async (req, res) => {
    const { page, limit, skip } = (0, pagination_1.getPaginationParams)(req.query);
    const result = await consultationService.getAll(page, limit, skip);
    res.json({
        success: true,
        data: result.data,
        pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
    });
});
exports.create = (0, catchAsync_1.default)(async (req, res) => {
    const consultation = await consultationService.create(req.user.userId, req.body);
    res.status(201).json({ success: true, data: consultation });
});
exports.confirm = (0, catchAsync_1.default)(async (req, res) => {
    const consultation = await consultationService.confirm(Number(req.params.id), req.user.userId);
    res.json({ success: true, data: consultation });
});
exports.reject = (0, catchAsync_1.default)(async (req, res) => {
    const consultation = await consultationService.reject(Number(req.params.id), req.body.reason);
    res.json({ success: true, data: consultation });
});
exports.complete = (0, catchAsync_1.default)(async (req, res) => {
    const consultation = await consultationService.complete(Number(req.params.id));
    res.json({ success: true, data: consultation });
});
exports.cancel = (0, catchAsync_1.default)(async (req, res) => {
    const consultation = await consultationService.cancel(Number(req.params.id));
    res.json({ success: true, data: consultation });
});
//# sourceMappingURL=consultation.controller.js.map