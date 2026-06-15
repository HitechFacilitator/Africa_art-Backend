import { Router } from "express";
import multer from "multer";
import * as certificateController from "../controllers/certificate.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";
import path from "path";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, "../uploads/certificates"));
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } });

const router = Router();

router.get("/", authenticate, certificateController.getByUser);
router.get("/verify/:number", certificateController.verify);
router.get("/artwork/:artworkId", certificateController.getByArtwork);
router.get("/:id", authenticate, certificateController.getById);
router.post("/", authenticate, authorize(Role.ADMIN), upload.single("file"), certificateController.create);
router.delete("/:id", authenticate, authorize(Role.ADMIN), certificateController.deleteOne);

export default router;
