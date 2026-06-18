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
exports.deleteOne = exports.update = exports.create = exports.getById = exports.search = exports.getAll = void 0;
const artworkService = __importStar(require("../services/artwork.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const pagination_1 = require("../utils/pagination");
const parseId_1 = require("../utils/parseId");
exports.getAll = (0, catchAsync_1.default)(async (req, res) => {
    const { page, limit, skip } = (0, pagination_1.getPaginationParams)(req.query);
    const filters = {
        category: req.query.category,
        artist: req.query.artist,
        origin: req.query.origin,
        availability: req.query.availability,
        artworkStatus: req.query.artworkStatus,
        isPOR: req.query.isPOR,
        minPrice: req.query.minPrice,
        maxPrice: req.query.maxPrice,
    };
    const result = await artworkService.getAll(filters, page, limit, skip);
    res.json({
        success: true,
        data: result.data,
        pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
    });
});
exports.search = (0, catchAsync_1.default)(async (req, res) => {
    const { q } = req.query;
    if (!q || typeof q !== "string") {
        res.status(400).json({ success: false, message: "Search query is required" });
        return;
    }
    const { page, limit, skip } = (0, pagination_1.getPaginationParams)(req.query);
    const result = await artworkService.search(q, page, limit, skip);
    res.json({
        success: true,
        data: result.data,
        pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
    });
});
exports.getById = (0, catchAsync_1.default)(async (req, res) => {
    const artwork = await artworkService.getById((0, parseId_1.parseNumericId)(req.params.id));
    res.json({ success: true, data: artwork });
});
exports.create = (0, catchAsync_1.default)(async (req, res) => {
    const artwork = await artworkService.create(req.body);
    res.status(201).json({ success: true, data: artwork });
});
exports.update = (0, catchAsync_1.default)(async (req, res) => {
    const artwork = await artworkService.update((0, parseId_1.parseNumericId)(req.params.id), req.body);
    res.json({ success: true, data: artwork });
});
exports.deleteOne = (0, catchAsync_1.default)(async (req, res) => {
    await artworkService.deleteOne((0, parseId_1.parseNumericId)(req.params.id));
    res.json({ success: true, message: "Artwork deleted" });
});
//# sourceMappingURL=artwork.controller.js.map