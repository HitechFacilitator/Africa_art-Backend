import { Router } from "express";
import multer from "multer";
import * as imageController from "../controllers/image.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";
import path from "path";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, "../uploads/artworks"));
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    const allowed = /jpeg|jpg|png|webp/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    cb(null, ext && mime);
  },
  limits: { fileSize: 10 * 1024 * 1024 },
});

const router = Router();

router.post(
  "/artworks/:id/images",
  authenticate,
  authorize(Role.ADMIN),
  upload.array("images", 10),
  imageController.upload
);
router.delete("/images/:id", authenticate, authorize(Role.ADMIN), imageController.deleteOne);
router.patch("/images/:id/primary", authenticate, authorize(Role.ADMIN), imageController.setPrimary);
router.patch("/artworks/:id/images/reorder", authenticate, authorize(Role.ADMIN), imageController.reorder);

export default router;
