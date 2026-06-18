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
exports.remove = exports.add = exports.getByUser = void 0;
const favoriteService = __importStar(require("../services/favorite.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const parseId_1 = require("../utils/parseId");
exports.getByUser = (0, catchAsync_1.default)(async (req, res) => {
    const favorites = await favoriteService.getByUser(req.user.userId);
    res.json({ success: true, data: favorites });
});
exports.add = (0, catchAsync_1.default)(async (req, res) => {
    const favorite = await favoriteService.add(req.user.userId, (0, parseId_1.parseNumericId)(req.params.artworkId));
    res.status(201).json({ success: true, data: favorite });
});
exports.remove = (0, catchAsync_1.default)(async (req, res) => {
    await favoriteService.remove(req.user.userId, (0, parseId_1.parseNumericId)(req.params.artworkId));
    res.json({ success: true, message: "Removed from favorites" });
});
//# sourceMappingURL=favorite.controller.js.map