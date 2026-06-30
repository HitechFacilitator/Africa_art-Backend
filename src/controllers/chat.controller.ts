import { Request, Response } from "express";
import * as chatService from "../services/chat.service";
import catchAsync from "../utils/catchAsync";
import { sseManager } from "../utils/sse";
import prisma from "../config/db";

export const createThread = catchAsync(async (req: Request, res: Response) => {
  const dbUser = await prisma.user.findUnique({ where: { id: req.user!.userId } });
  const thread = await chatService.createThread({
    ...req.body,
    clientName: req.body.clientName || dbUser?.name || "",
    clientRole: req.body.clientRole || dbUser?.role || "collector",
    clientUserId: req.user!.userId,
  });
  res.status(201).json({ success: true, data: thread });
});

export const getThreads = catchAsync(async (req: Request, res: Response) => {
  const data = await chatService.getThreads(req.user!.userId, req.user!.role);
  res.json({ success: true, data });
});

export const sendMessage = catchAsync(async (req: Request, res: Response) => {
  // Convert senderId from string ("usr-7") to number if present
  const body = { ...req.body };
  if (typeof body.senderId === "string") {
    const parsed = Number(body.senderId.replace("usr-", ""));
    body.senderId = isNaN(parsed) ? undefined : parsed;
  } else if (typeof body.senderId === "number") {
    // Already a number, validate it
    body.senderId = isNaN(body.senderId) ? undefined : body.senderId;
  } else {
    // Not a string or number — clear it
    body.senderId = undefined;
  }

  // Ensure text is never empty/null for Prisma
  if (!body.text || typeof body.text !== "string") {
    body.text = "";
  }

  const threadId = Number(String(req.params.threadId).replace("thr-", ""));
  const message = await chatService.sendMessage(threadId, {
    ...body,
    userId: req.user!.userId,
  });

  // Use recipientIds from service (based on thread participant fields)
  const recipientIds = (message as unknown as { recipientIds: string[] }).recipientIds || [];

  if (recipientIds.length > 0) {
    sseManager.sendToUsers(recipientIds, "new-message", {
      threadId,
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

  // Notify ticket owner of status change
  const ticket = await prisma.supportTicket.findUnique({
    where: { id: Number(req.params.id) },
    select: { userId: true },
  });
  if (ticket && ticket.userId !== req.user!.userId) {
    sseManager.sendToUsers([String(ticket.userId)], "ticket-update", {
      ticketId: Number(req.params.id),
      response: { author: "System", text: `Status changed to: ${req.body.status}`, timestamp: new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC" },
    });
  }

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

  // Only notify the ticket owner (not the sender)
  const ticket = await prisma.supportTicket.findUnique({
    where: { id: Number(req.params.id) },
    select: { userId: true },
  });
  if (ticket && ticket.userId !== req.user!.userId) {
    sseManager.sendToUsers([String(ticket.userId)], "ticket-update", {
      ticketId: Number(req.params.id),
      response,
    });
  }

  res.status(201).json({ success: true, data: response });
});

export const deleteTicket = catchAsync(async (req: Request, res: Response) => {
  await chatService.deleteTicket(Number(req.params.id), req.user!.userId, req.user!.role);
  res.json({ success: true, message: "Ticket deleted" });
});
