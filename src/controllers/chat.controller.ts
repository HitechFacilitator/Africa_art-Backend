import { Request, Response } from "express";
import * as chatService from "../services/chat.service";
import catchAsync from "../utils/catchAsync";

export const getThreads = catchAsync(async (_req: Request, res: Response) => {
  const data = await chatService.getThreads();
  res.json({ success: true, data });
});

export const sendMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await chatService.sendMessage(Number(req.params.threadId), req.body);
  res.status(201).json({ success: true, data: message });
});

export const getTickets = catchAsync(async (_req: Request, res: Response) => {
  const data = await chatService.getTickets();
  res.json({ success: true, data });
});

export const createTicket = catchAsync(async (req: Request, res: Response) => {
  const ticket = await chatService.createTicket(req.user!.userId, req.body);
  res.status(201).json({ success: true, data: ticket });
});

export const updateTicketStatus = catchAsync(async (req: Request, res: Response) => {
  await chatService.updateTicketStatus(Number(req.params.id), req.body.status);
  res.json({ success: true, message: "Ticket status updated" });
});

export const addTicketResponse = catchAsync(async (req: Request, res: Response) => {
  const response = await chatService.addTicketResponse(Number(req.params.id), req.body.author, req.body.text);
  res.status(201).json({ success: true, data: response });
});
