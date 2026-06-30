import { Router } from "express";
import { authenticate } from "../middlewares/auth";
import * as agoraController from "../controllers/agora.controller";

const router = Router();

router.get("/agora-token", authenticate, agoraController.getToken);
router.post("/agora-register", authenticate, agoraController.registerUser);
router.post("/agora-group", authenticate, agoraController.createGroup);

export default router;
