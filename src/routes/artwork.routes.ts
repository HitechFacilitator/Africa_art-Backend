import { Router } from "express";
import * as artworkController from "../controllers/artwork.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/search", artworkController.search);
router.get("/", artworkController.getAll);
router.get("/:id", artworkController.getById);
router.post("/", authenticate, authorize(Role.ADMIN), artworkController.create);
router.patch("/:id", authenticate, authorize(Role.ADMIN), artworkController.update);
router.delete("/:id", authenticate, authorize(Role.ADMIN), artworkController.deleteOne);

export default router;
