import { Router } from "express";
import multer from "multer";
import path from "path";
import * as adminCertificatesController from "../controllers/adminCertificates.controller";
import { authenticate } from "../middlewares/auth";
import { authorize } from "../middlewares/role";
import { Role } from "../generated/prisma/client";

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

router.get("/", authenticate, authorize(Role.ADMIN), adminCertificatesController.getAll);
router.post("/", authenticate, authorize(Role.ADMIN), upload.single("file"), adminCertificatesController.create);
router.patch("/:id", authenticate, authorize(Role.ADMIN), adminCertificatesController.update);
router.patch("/:id/revoke", authenticate, authorize(Role.ADMIN), adminCertificatesController.revoke);
router.delete("/:id", authenticate, authorize(Role.ADMIN), adminCertificatesController.remove);
router.get("/:id/pdf", authenticate, authorize(Role.ADMIN), adminCertificatesController.downloadPdf);

export default router;
