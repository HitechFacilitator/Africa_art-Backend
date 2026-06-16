import { Router } from "express";
import * as adminCollectorsController from "../controllers/adminCollectors.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), adminCollectorsController.getAll);

export default router;
