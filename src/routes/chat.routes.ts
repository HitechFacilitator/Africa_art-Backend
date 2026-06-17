import { Router, Request, Response } from "express";
import * as chatController from "../controllers/chat.controller";
import { authenticate } from "../middlewares/auth";
import { sseManager } from "../utils/sse";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/events", (req: Request, res: Response) => {
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

router.get("/threads", authenticate, chatController.getThreads);
router.post("/threads/:threadId/messages", authenticate, chatController.sendMessage);
router.patch("/threads/:threadId/read", authenticate, chatController.markThreadRead);
router.get("/tickets", authenticate, chatController.getTickets);
router.post("/tickets", authenticate, chatController.createTicket);
router.patch("/tickets/:id/status", authenticate, chatController.updateTicketStatus);
router.post("/tickets/:id/responses", authenticate, chatController.addTicketResponse);
router.delete("/tickets/:id", authenticate, chatController.deleteTicket);

export default router;
