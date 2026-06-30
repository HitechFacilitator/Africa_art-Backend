import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { authenticate } from "../middlewares/auth";
import { Request, Response } from "express";

// Ensure uploads/chat directory exists
const uploadDir = path.join(__dirname, "../uploads/chat");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, "../uploads/chat"));
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});

const router = Router();

// Upload a file for chat
router.post("/upload", authenticate, upload.single("file"), (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ success: false, message: "No file uploaded" });
    return;
  }

  const fileUrl = `/api/v1/chat/files/${req.file.filename}`;
  
  res.json({
    success: true,
    data: {
      url: fileUrl,
      filename: req.file.originalname,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    },
  });
});

// Serve uploaded chat files
router.get("/files/:filename", (req: Request, res: Response) => {
  const filename = req.params.filename as string;
  const filePath = path.join(__dirname, "../uploads/chat", filename);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ success: false, message: "File not found" });
    }
  });
});

export default router;
