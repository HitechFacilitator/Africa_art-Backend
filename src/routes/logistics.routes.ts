import { Router } from "express";
import * as logisticsController from "../controllers/logistics.controller";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.get("/", authenticate, logisticsController.getByUser);
router.post("/", authenticate, logisticsController.create);

export default router;
