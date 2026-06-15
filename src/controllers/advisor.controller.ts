import { Request, Response } from "express";
import * as advisorService from "../services/advisor.service";
import catchAsync from "../utils/catchAsync";

export const getConsultations = catchAsync(async (req: Request, res: Response) => {
  const data = await advisorService.getConsultations(req.user?.userId);
  res.json({ success: true, data });
});

export const getClients = catchAsync(async (req: Request, res: Response) => {
  const data = await advisorService.getClients(req.user!.userId);
  res.json({ success: true, data });
});

export const getPlacements = catchAsync(async (req: Request, res: Response) => {
  const data = await advisorService.getPlacements(req.user!.userId);
  res.json({ success: true, data });
});

export const getActivities = catchAsync(async (_req: Request, res: Response) => {
  const data = await advisorService.getActivities();
  res.json({ success: true, data });
});
