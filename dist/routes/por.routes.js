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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const porController = __importStar(require("../controllers/por.controller"));
const auth_1 = require("../middlewares/auth");
const role_1 = require("../middlewares/role");
const client_1 = require("../generated/prisma/client");
const router = (0, express_1.Router)();
router.get("/", auth_1.authenticate, (0, role_1.authorize)(client_1.Role.ADMIN), porController.getAll);
router.get("/my", auth_1.authenticate, porController.getByUser);
router.get("/artwork/:artworkId", porController.getByArtwork);
router.post("/:artworkId", auth_1.authenticate, porController.create);
router.patch("/:id/respond", auth_1.authenticate, (0, role_1.authorize)(client_1.Role.ADMIN), porController.respond);
router.patch("/:id/close", auth_1.authenticate, (0, role_1.authorize)(client_1.Role.ADMIN), porController.close);
router.patch("/:id/status", auth_1.authenticate, (0, role_1.authorize)(client_1.Role.ADMIN), porController.changeStatus);
router.post("/:id/messages", auth_1.authenticate, porController.addMessage);
exports.default = router;
//# sourceMappingURL=por.routes.js.map