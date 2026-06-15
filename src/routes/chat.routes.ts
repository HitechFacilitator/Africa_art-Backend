import { Router } from "express";
import * as chatController from "../controllers/chat.controller";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.get("/threads", authenticate, chatController.getThreads);
router.post("/threads/:threadId/messages", authenticate, chatController.sendMessage);
router.get("/tickets", authenticate, chatController.getTickets);
router.patch("/tickets/:id/status", authenticate, chatController.updateTicketStatus);
router.post("/tickets/:id/responses", authenticate, chatController.addTicketResponse);

export default router;
