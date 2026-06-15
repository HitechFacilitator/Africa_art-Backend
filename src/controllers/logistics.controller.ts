import { Request, Response } from "express";
import * as logisticsService from "../services/logistics.service";
import catchAsync from "../utils/catchAsync";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const data = await logisticsService.getByUser(req.user!.userId);
  res.json({ success: true, data });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const shipment = await logisticsService.create(req.user!.userId, req.body);
  res.status(201).json({ success: true, data: shipment });
});
