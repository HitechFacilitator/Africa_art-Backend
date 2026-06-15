import { Request, Response } from "express";
import * as orderService from "../services/order.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderService.getByUser(req.user!.userId);
  res.json({ success: true, data: orders });
});

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await orderService.getAll(page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const order = await orderService.getById(Number(req.params.id));
  res.json({ success: true, data: order });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const order = await orderService.create(req.user!.userId, req.body.artworkIds, req.body.notes);
  res.status(201).json({ success: true, data: order });
});

export const updateStatus = catchAsync(async (req: Request, res: Response) => {
  const order = await orderService.updateStatus(Number(req.params.id), req.body.status);
  res.json({ success: true, data: order });
});
