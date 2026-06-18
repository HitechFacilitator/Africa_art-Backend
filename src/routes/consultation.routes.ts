import { Router } from "express";
import * as consultationController from "../controllers/consultation.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";
import prisma from "../config/db";

const router = Router();

router.get("/", authenticate, authorize(Role.ADMIN), consultationController.getAll);
router.get("/my", authenticate, consultationController.getByUser);
router.get("/advisor", authenticate, consultationController.getByAdvisor);
router.post("/", authenticate, consultationController.create);
router.patch("/:id/confirm", authenticate, authorize(Role.ADMIN), consultationController.confirm);
router.patch("/:id/complete", authenticate, consultationController.complete);
router.patch("/:id/cancel", authenticate, consultationController.cancel);

router.get("/advisors", authenticate, async (req, res) => {
  const advisors = await prisma.user.findMany({
    where: { role: Role.ADVISOR },
    select: { id: true, name: true, email: true, institution: true, avatar: true },
  });
  res.json({
    success: true,
    data: advisors.map(a => ({
      id: `usr-${a.id}`,
      name: a.name,
      email: a.email,
      institution: a.institution || "",
      avatar: a.avatar || "",
    })),
  });
});

export default router;
