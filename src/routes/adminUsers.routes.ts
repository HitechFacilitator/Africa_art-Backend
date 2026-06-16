import { Router } from "express";
import * as adminUsersController from "../controllers/adminUsers.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), adminUsersController.getAll);
router.get("/:id", authenticate, authorize(Role.ADMIN), adminUsersController.getById);
router.post("/", authenticate, authorize(Role.ADMIN), adminUsersController.create);
router.patch("/:id", authenticate, authorize(Role.ADMIN), adminUsersController.update);
router.patch("/:id/status", authenticate, authorize(Role.ADMIN), adminUsersController.updateStatus);
router.delete("/:id", authenticate, authorize(Role.ADMIN), adminUsersController.remove);

export default router;
