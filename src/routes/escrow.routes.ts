import { Router } from "express";
import * as escrowController from "../controllers/escrow.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), escrowController.getAll);
router.patch("/:id/release", authenticate, authorize(Role.ADMIN), escrowController.release);
router.patch("/:id/dispute", authenticate, authorize(Role.ADMIN), escrowController.dispute);
router.patch("/:id/refund", authenticate, authorize(Role.ADMIN), escrowController.refund);

export default router;
