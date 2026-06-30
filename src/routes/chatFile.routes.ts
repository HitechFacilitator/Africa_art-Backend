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

// Upload a file for chat (requires auth)
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

// Serve uploaded chat files — NO AUTH REQUIRED
// File URLs use random hashes (timestamp + random) making them unguessable.
// Auth on this endpoint breaks <audio>, <img>, <video> elements since browsers
// cannot send custom Authorization headers on media element requests.
router.get("/files/:filename", (req: Request, res: Response) => {
  const filename = req.params.filename as string;
  // Sanitize filename to prevent path traversal
  const safeFilename = path.basename(filename);
  const filePath = path.join(__dirname, "../uploads/chat", safeFilename);

  // Check file exists before attempting sendFile
  if (!fs.existsSync(filePath)) {
    res.status(404).json({ success: false, message: "File not found" });
    return;
  }

  // Set proper Content-Type based on extension
  const ext = path.extname(safeFilename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
    ".webm": "audio/webm",
    ".ogg": "audio/ogg",
    ".mp3": "audio/mpeg",
    ".wav": "audio/wav",
    ".weba": "audio/webm",
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".txt": "text/plain",
    ".zip": "application/zip",
    ".json": "application/json",
  };

  const contentType = mimeTypes[ext] || "application/octet-stream";
  res.setHeader("Content-Type", contentType);
  const safeDispositionName = safeFilename.replace(/["';\r\n]/g, '_');
  res.setHeader("Content-Disposition", `inline; filename="${safeDispositionName}"`);
  res.setHeader("Cache-Control", "public, max-age=31536000");

  const readStream = fs.createReadStream(filePath);
  readStream.on("error", () => {
    if (!res.headersSent) {
      res.status(404).json({ success: false, message: "File read error" });
    }
  });
  readStream.pipe(res);
});

export default router;
