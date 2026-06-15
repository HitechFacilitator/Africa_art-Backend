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
exports.close = exports.respond = exports.create = exports.getAll = exports.getByUser = exports.getByArtwork = void 0;
const porService = __importStar(require("../services/por.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const pagination_1 = require("../utils/pagination");
exports.getByArtwork = (0, catchAsync_1.default)(async (req, res) => {
    const requests = await porService.getByArtwork(Number(req.params.artworkId));
    res.json({ success: true, data: requests });
});
exports.getByUser = (0, catchAsync_1.default)(async (req, res) => {
    const requests = await porService.getByUser(req.user.userId);
    res.json({ success: true, data: requests });
});
exports.getAll = (0, catchAsync_1.default)(async (req, res) => {
    const { page, limit, skip } = (0, pagination_1.getPaginationParams)(req.query);
    const result = await porService.getAll(page, limit, skip);
    res.json({
        success: true,
        data: result.data,
        pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
    });
});
exports.create = (0, catchAsync_1.default)(async (req, res) => {
    const request = await porService.create(req.user.userId, Number(req.params.artworkId), req.body.message);
    res.status(201).json({ success: true, data: request });
});
exports.respond = (0, catchAsync_1.default)(async (req, res) => {
    const request = await porService.respond(Number(req.params.id), req.body.response);
    res.json({ success: true, data: request });
});
exports.close = (0, catchAsync_1.default)(async (req, res) => {
    const request = await porService.close(Number(req.params.id));
    res.json({ success: true, data: request });
});
//# sourceMappingURL=por.controller.js.map