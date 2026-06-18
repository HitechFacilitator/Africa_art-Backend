import { Router } from "express";
import * as porController from "../controllers/por.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), porController.getAll);
router.get("/my", authenticate, porController.getByUser);
router.get("/artwork/:artworkId", porController.getByArtwork);
router.post("/:artworkId", authenticate, porController.create);
router.patch("/:id/respond", authenticate, authorize(Role.ADMIN), porController.respond);
router.patch("/:id/close", authenticate, authorize(Role.ADMIN), porController.close);
router.patch("/:id/status", authenticate, authorize(Role.ADMIN), porController.changeStatus);
router.post("/:id/messages", authenticate, porController.addMessage);

export default router;
