import { Router } from "express";
import * as advisorController from "../controllers/advisor.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/consultations", authenticate, authorize(Role.ADVISOR), advisorController.getConsultations);
router.get("/clients", authenticate, authorize(Role.ADVISOR), advisorController.getClients);
router.get("/placements", authenticate, authorize(Role.ADVISOR), advisorController.getPlacements);
router.get("/activities", authenticate, authorize(Role.ADVISOR), advisorController.getActivities);

export default router;
