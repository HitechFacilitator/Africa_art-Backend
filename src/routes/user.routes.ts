import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), userController.getAll);
router.get("/:id", authenticate, userController.getById);
router.patch("/:id", authenticate, userController.update);
router.delete("/:id", authenticate, authorize(Role.ADMIN), userController.deleteOne);
router.patch("/:id/role", authenticate, authorize(Role.ADMIN), userController.updateRole);
router.post("/change-password", authenticate, userController.changePassword);

export default router;
