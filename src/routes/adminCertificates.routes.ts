import { Router } from "express";
import * as adminCertificatesController from "../controllers/adminCertificates.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), adminCertificatesController.getAll);
router.post("/", authenticate, authorize(Role.ADMIN), adminCertificatesController.create);
router.patch("/:id", authenticate, authorize(Role.ADMIN), adminCertificatesController.update);
router.patch("/:id/revoke", authenticate, authorize(Role.ADMIN), adminCertificatesController.revoke);
router.delete("/:id", authenticate, authorize(Role.ADMIN), adminCertificatesController.remove);

export default router;
