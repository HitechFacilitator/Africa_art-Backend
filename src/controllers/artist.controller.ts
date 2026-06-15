import { Request, Response } from "express";
import * as artistService from "../services/artist.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await artistService.getAll(page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const artist = await artistService.getById(Number(req.params.id));
  res.json({ success: true, data: artist });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const artist = await artistService.create(req.body);
  res.status(201).json({ success: true, data: artist });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const artist = await artistService.update(Number(req.params.id), req.body);
  res.json({ success: true, data: artist });
});

export const deleteOne = catchAsync(async (req: Request, res: Response) => {
  await artistService.deleteOne(Number(req.params.id));
  res.json({ success: true, message: "Artist deleted" });
});
