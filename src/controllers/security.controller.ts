import { Request, Response } from "express";
import * as securityService from "../services/security.service";
import catchAsync from "../utils/catchAsync";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const data = await securityService.getByUser(req.user!.userId);
  res.json({ success: true, data });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const record = await securityService.create(req.user!.userId, req.body);
  res.status(201).json({ success: true, data: record });
});
