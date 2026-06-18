import { Request, Response } from "express";
import * as consultationService from "../services/consultation.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const consultations = await consultationService.getByUser(req.user!.userId);
  res.json({ success: true, data: consultations });
});

export const getByAdvisor = catchAsync(async (req: Request, res: Response) => {
  const consultations = await consultationService.getByAdvisor(req.user!.userId);
  res.json({ success: true, data: consultations });
});

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await consultationService.getAll(page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const consultation = await consultationService.create(req.user!.userId, req.body);
  res.status(201).json({ success: true, data: consultation });
});

export const confirm = catchAsync(async (req: Request, res: Response) => {
  const consultation = await consultationService.confirm(Number(req.params.id), Number(req.body.advisorId));
  res.json({ success: true, data: consultation });
});

export const complete = catchAsync(async (req: Request, res: Response) => {
  const consultation = await consultationService.complete(Number(req.params.id));
  res.json({ success: true, data: consultation });
});

export const cancel = catchAsync(async (req: Request, res: Response) => {
  const consultation = await consultationService.cancel(Number(req.params.id));
  res.json({ success: true, data: consultation });
});
