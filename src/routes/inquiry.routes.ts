import { Router } from "express";
import * as inquiryController from "../controllers/inquiry.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, inquiryController.getByUser);
router.get("/all", authenticate, authorize(Role.ADMIN), inquiryController.getAll);
router.post("/", authenticate, inquiryController.create);
router.post("/:id/messages", authenticate, inquiryController.addMessage);

export default router;
