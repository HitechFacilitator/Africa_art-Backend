import { Request, Response } from "express";
import * as chatService from "../services/chat.service";
import catchAsync from "../utils/catchAsync";
import { sseManager } from "../utils/sse";
import prisma from "../config/db";

export const getThreads = catchAsync(async (req: Request, res: Response) => {
  const data = await chatService.getThreads(req.user!.userId);
  res.json({ success: true, data });
});

export const sendMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await chatService.sendMessage(Number(req.params.threadId), {
    ...req.body,
    userId: req.user!.userId,
  });

  const participantMessages = await prisma.chatMessage.findMany({
    where: { threadId: Number(req.params.threadId), userId: { not: null } },
    select: { userId: true },
    distinct: ["userId"],
  });

  const recipientIds = participantMessages
    .map((m) => m.userId)
    .filter((id): id is number => id !== null && id !== req.user!.userId)
    .map(String);

  if (recipientIds.length > 0) {
    sseManager.sendToUsers(recipientIds, "new-message", {
      threadId: Number(req.params.threadId),
      message,
    });
  }

  res.status(201).json({ success: true, data: message });
});

export const markThreadRead = catchAsync(async (req: Request, res: Response) => {
  const result = await chatService.markThreadRead(
    Number(req.params.threadId),
    req.user!.userId
  );
  res.json({ success: true, data: result });
});

export const getTickets = catchAsync(async (req: Request, res: Response) => {
  const data = await chatService.getTickets(req.user!.userId, req.user!.role);
  res.json({ success: true, data });
});

export const createTicket = catchAsync(async (req: Request, res: Response) => {
  const dbUser = await prisma.user.findUnique({ where: { id: req.user!.userId } });
  const ticket = await chatService.createTicket(req.user!.userId, {
    ...req.body,
    clientName: req.body.clientName || dbUser?.name || "",
    clientRole: req.body.clientRole || dbUser?.role || "collector",
  });
  res.status(201).json({ success: true, data: ticket });
});

export const updateTicketStatus = catchAsync(async (req: Request, res: Response) => {
  await chatService.updateTicketStatus(Number(req.params.id), req.body.status);
  res.json({ success: true, message: "Ticket status updated" });
});

export const addTicketResponse = catchAsync(async (req: Request, res: Response) => {
  let author = req.body.author;
  if (!author && req.user) {
    const dbUser = await prisma.user.findUnique({ where: { id: req.user.userId } });
    author = dbUser?.name || "Unknown";
  }
  const response = await chatService.addTicketResponse(
    Number(req.params.id),
    author || "Unknown",
    req.body.text
  );

  sseManager.broadcast("ticket-update", {
    ticketId: Number(req.params.id),
    response,
  });

  res.status(201).json({ success: true, data: response });
});

export const deleteTicket = catchAsync(async (req: Request, res: Response) => {
  await chatService.deleteTicket(Number(req.params.id), req.user!.userId, req.user!.role);
  res.json({ success: true, message: "Ticket deleted" });
});
