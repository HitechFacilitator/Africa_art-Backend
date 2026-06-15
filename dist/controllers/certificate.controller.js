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
exports.deleteOne = exports.verify = exports.create = exports.getById = exports.getByUser = exports.getByArtwork = void 0;
const certificateService = __importStar(require("../services/certificate.service"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.getByArtwork = (0, catchAsync_1.default)(async (req, res) => {
    const certs = await certificateService.getByArtwork(Number(req.params.artworkId));
    res.json({ success: true, data: certs });
});
exports.getByUser = (0, catchAsync_1.default)(async (req, res) => {
    const certs = await certificateService.getByUser(req.user.userId);
    res.json({ success: true, data: certs });
});
exports.getById = (0, catchAsync_1.default)(async (req, res) => {
    const cert = await certificateService.getById(Number(req.params.id));
    res.json({ success: true, data: cert });
});
exports.create = (0, catchAsync_1.default)(async (req, res) => {
    const file = req.file;
    const cert = await certificateService.create({
        ...req.body,
        filename: file?.filename || "",
        path: file?.path || "",
        userId: req.user.userId,
    });
    res.status(201).json({ success: true, data: cert });
});
exports.verify = (0, catchAsync_1.default)(async (req, res) => {
    const result = await certificateService.verify(String(req.params.number));
    res.json({ success: true, data: result });
});
exports.deleteOne = (0, catchAsync_1.default)(async (req, res) => {
    await certificateService.deleteOne(Number(req.params.id));
    res.json({ success: true, message: "Certificate deleted" });
});
//# sourceMappingURL=certificate.controller.js.map