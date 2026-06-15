import { Router } from "express";
import * as categoryController from "../controllers/category.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", authenticate, authorize(Role.ADMIN), categoryController.create);
router.patch("/:id", authenticate, authorize(Role.ADMIN), categoryController.update);
router.delete("/:id", authenticate, authorize(Role.ADMIN), categoryController.deleteOne);

export default router;
