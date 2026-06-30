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

// Handle CORS preflight for file serving
router.options("/files/:filename", (_req: Request, res: Response) => {
  res.writeHead(204, {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "Range",
    "Access-Control-Max-Age": "86400",
  });
  res.end();
});

// Serve uploaded chat files — NO AUTH REQUIRED
// File URLs use random hashes (timestamp + random) making them unguessable.
// Auth on this endpoint breaks <audio>, <img>, <video> elements since browsers
// cannot send custom Authorization headers on media element requests.
router.get("/files/:filename", (req: Request, res: Response) => {
  const filename = req.params.filename as string;
  const safeFilename = path.basename(filename);
  const filePath = path.join(__dirname, "../uploads/chat", safeFilename);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ success: false, message: "File not found" });
    return;
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const ext = path.extname(safeFilename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
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
  const safeDispositionName = safeFilename.replace(/["';\r\n]/g, "_");

  // CORS headers — required because res.writeHead() bypasses Express middleware
  const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
    "Access-Control-Allow-Headers": "Range",
    "Access-Control-Expose-Headers": "Content-Range, Content-Length, Accept-Ranges",
    "Access-Control-Allow-Credentials": "true",
  };

  // Handle Range requests for video/audio seeking
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    res.writeHead(206, {
      ...corsHeaders,
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": contentType,
      "Content-Disposition": `inline; filename="${safeDispositionName}"`,
      "Cache-Control": "public, max-age=31536000",
    });

    fs.createReadStream(filePath, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      ...corsHeaders,
      "Content-Length": fileSize,
      "Content-Type": contentType,
      "Content-Disposition": `inline; filename="${safeDispositionName}"`,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000",
    });

    fs.createReadStream(filePath).pipe(res);
  }
});

export default router;
