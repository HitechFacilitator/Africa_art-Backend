import { Request, Response } from "express";
import * as inquiryService from "../services/inquiry.service";
import catchAsync from "../utils/catchAsync";
import { sseManager } from "../utils/sse";
import prisma from "../config/db";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const data = await inquiryService.getByUser(req.user!.userId);
  res.json({ success: true, data });
});

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const inquiries = await prisma.inquiry.findMany({
    include: { messages: { orderBy: { createdAt: "asc" } } },
    orderBy: { createdAt: "desc" },
  });
  res.json({
    success: true,
    data: inquiries.map(inq => ({
      id: `inq-${inq.id}`,
      artworkTitle: inq.artworkTitle,
      artworkYear: inq.artworkYear || "",
      imageUrl: inq.imageUrl || "",
      status: inq.status,
      category: inq.category || "General",
      date: inq.date || inq.createdAt.toISOString(),
      clientName: inq.userId ? String(inq.userId) : "",
      messages: inq.messages.map(m => ({
        sender: m.sender,
        text: m.text || "",
        timestamp: m.timestamp || "",
      })),
    })),
  });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const inquiry = await inquiryService.create(req.user!.userId, req.body);
  res.status(201).json({ success: true, data: inquiry });
});

export const addMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await inquiryService.addMessage(Number(req.params.id), req.body.sender, req.body.text);

  const inquiry = await prisma.inquiry.findUnique({
    where: { id: Number(req.params.id) },
    select: { userId: true },
  });

  if (!inquiry) {
    res.status(201).json({ success: true, data: message });
    return;
  }

  const senderId = String(req.user!.userId);
  const ownerId = String(inquiry.userId);

  if (senderId === ownerId) {
    // User sent message → notify all admins
    const admins = await prisma.user.findMany({ where: { role: "ADMIN" as any }, select: { id: true } });
    const adminIds = admins.map(a => String(a.id));
    if (adminIds.length > 0) {
      sseManager.sendToUsers(adminIds, "inquiry-update", {
        inquiryId: Number(req.params.id),
        message,
      });
    }
  } else {
    // Admin sent message → notify the inquiry owner
    sseManager.sendToUsers([ownerId], "inquiry-update", {
      inquiryId: Number(req.params.id),
      message,
    });
  }

  res.status(201).json({ success: true, data: message });
});
