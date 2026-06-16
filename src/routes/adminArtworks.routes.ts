import { Router } from "express";
import * as adminArtworksController from "../controllers/adminArtworks.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), adminArtworksController.getAll);
router.get("/:id", authenticate, authorize(Role.ADMIN), adminArtworksController.getById);
router.post("/", authenticate, authorize(Role.ADMIN), adminArtworksController.create);
router.patch("/:id", authenticate, authorize(Role.ADMIN), adminArtworksController.update);
router.patch("/:id/status", authenticate, authorize(Role.ADMIN), adminArtworksController.updateStatus);
router.delete("/:id", authenticate, authorize(Role.ADMIN), adminArtworksController.remove);

export default router;
