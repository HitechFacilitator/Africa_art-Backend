import { Router } from "express";
import * as orderController from "../controllers/order.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), orderController.getAll);
router.get("/my", authenticate, orderController.getByUser);
router.get("/:id", authenticate, orderController.getById);
router.post("/", authenticate, orderController.create);
router.patch("/:id/status", authenticate, authorize(Role.ADMIN), orderController.updateStatus);

export default router;
