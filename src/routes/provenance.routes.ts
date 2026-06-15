import { Router } from "express";
import * as provenanceController from "../controllers/provenance.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

const router = Router();

router.get("/artworks/:artworkId/provenance", provenanceController.getByArtwork);
router.post("/artworks/:artworkId/provenance", authenticate, authorize(Role.ADMIN), provenanceController.create);
router.delete("/provenance/:id", authenticate, authorize(Role.ADMIN), provenanceController.deleteOne);

export default router;
