import { Router } from "express";
import * as inquiryController from "../controllers/inquiry.controller";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.get("/", authenticate, inquiryController.getByUser);
router.post("/", authenticate, inquiryController.create);
router.post("/:id/messages", authenticate, inquiryController.addMessage);

export default router;
