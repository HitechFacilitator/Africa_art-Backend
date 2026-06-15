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
exports.reorder = exports.setPrimary = exports.deleteOne = exports.upload = void 0;
const imageService = __importStar(require("../services/image.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.upload = (0, catchAsync_1.default)(async (req, res) => {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
        res.status(400).json({ success: false, message: "No files uploaded" });
        return;
    }
    const images = await imageService.upload(Number(req.params.id), req.files);
    res.status(201).json({ success: true, data: images });
});
exports.deleteOne = (0, catchAsync_1.default)(async (req, res) => {
    await imageService.deleteOne(Number(req.params.id));
    res.json({ success: true, message: "Image deleted" });
});
exports.setPrimary = (0, catchAsync_1.default)(async (req, res) => {
    const image = await imageService.setPrimary(Number(req.params.id));
    res.json({ success: true, data: image });
});
exports.reorder = (0, catchAsync_1.default)(async (req, res) => {
    const images = await imageService.reorder(Number(req.params.id), req.body.imageIds);
    res.json({ success: true, data: images });
});
//# sourceMappingURL=image.controller.js.map