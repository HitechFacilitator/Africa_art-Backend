import { Router } from "express";
import * as dashboardController from "../controllers/dashboard.controller";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.get("/", authenticate, dashboardController.getByUser);
router.post("/", authenticate, dashboardController.create);
router.delete("/:id", authenticate, dashboardController.remove);

export default router;
