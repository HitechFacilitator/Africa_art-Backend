import { Router } from "express";
import * as adminAuditController from "../controllers/adminAudit.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), adminAuditController.getAll);
router.patch("/:id/verify", authenticate, authorize(Role.ADMIN), adminAuditController.verify);
router.post("/verify-all", authenticate, authorize(Role.ADMIN), adminAuditController.verifyAll);

export default router;
