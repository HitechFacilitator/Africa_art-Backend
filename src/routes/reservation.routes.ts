import { Router } from "express";
import * as reservationController from "../controllers/reservation.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/", authenticate, reservationController.getByUser);
router.post("/:artworkId", authenticate, reservationController.create);
router.delete("/:id", authenticate, reservationController.cancel);
router.post("/expire/all", authenticate, authorize(Role.ADMIN), reservationController.expire);

export default router;
