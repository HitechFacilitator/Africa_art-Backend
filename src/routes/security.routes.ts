import { Router } from "express";
import * as securityController from "../controllers/security.controller";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.get("/", authenticate, securityController.getByUser);
router.post("/", authenticate, securityController.create);

export default router;
