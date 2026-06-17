import { Request, Response } from "express";
import * as inquiryService from "../services/inquiry.service";
import catchAsync from "../utils/catchAsync";
import { sseManager } from "../utils/sse";
import prisma from "../config/db";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const data = await inquiryService.getByUser(req.user!.userId);
  res.json({ success: true, data });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const inquiry = await inquiryService.create(req.user!.userId, req.body);
  res.status(201).json({ success: true, data: inquiry });
});

export const addMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await inquiryService.addMessage(Number(req.params.id), req.body.sender, req.body.text);

  // Only notify the inquiry owner (not the sender)
  const inquiry = await prisma.inquiry.findUnique({
    where: { id: Number(req.params.id) },
    select: { userId: true },
  });
  if (inquiry && inquiry.userId !== req.user!.userId) {
    sseManager.sendToUsers([String(inquiry.userId)], "inquiry-update", {
      inquiryId: Number(req.params.id),
      message,
    });
  }

  res.status(201).json({ success: true, data: message });
});
