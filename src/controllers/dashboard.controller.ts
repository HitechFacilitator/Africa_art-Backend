import { Request, Response } from "express";
import * as dashboardService from "../services/dashboard.service";
import catchAsync from "../utils/catchAsync";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const data = await dashboardService.getByUser(req.user!.userId);
  res.json({ success: true, data });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const acquisition = await dashboardService.create(req.user!.userId, req.body);
  res.status(201).json({ success: true, data: acquisition });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
  await dashboardService.remove(Number(req.params.id));
  res.json({ success: true, message: "Acquisition removed" });
});
