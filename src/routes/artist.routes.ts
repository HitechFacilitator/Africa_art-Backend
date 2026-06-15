import { Router } from "express";
import * as artistController from "../controllers/artist.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", artistController.getAll);
router.get("/:id", artistController.getById);
router.post("/", authenticate, authorize(Role.ADMIN), artistController.create);
router.patch("/:id", authenticate, authorize(Role.ADMIN), artistController.update);
router.delete("/:id", authenticate, authorize(Role.ADMIN), artistController.deleteOne);

export default router;
