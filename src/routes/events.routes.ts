import { Router, Request, Response } from "express";
import { sseManager } from "../utils/sse";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const token = req.query.token as string;
  if (!token) {
    res.status(401).json({ error: "Token required" });
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "aduna-secret-key-2026") as { userId: number; role: string };
    sseManager.addClient(String(decoded.userId), res);
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
