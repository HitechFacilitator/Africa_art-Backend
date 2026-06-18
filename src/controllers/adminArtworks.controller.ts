import { Request, Response } from "express";
import * as adminArtworksService from "../services/adminArtworks.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";
import { parseNumericId } from "../utils/parseId";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const search = req.query.search as string | undefined;
  const result = await adminArtworksService.getAll(page, limit, skip, search);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const result = await adminArtworksService.getById(parseNumericId(req.params.id));
  res.json({ success: true, data: result });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const result = await adminArtworksService.create(req.body);
  res.status(201).json({ success: true, data: result });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const result = await adminArtworksService.update(parseNumericId(req.params.id), req.body);
  res.json({ success: true, data: result });
});

export const updateStatus = catchAsync(async (req: Request, res: Response) => {
  const result = await adminArtworksService.updateStatus(parseNumericId(req.params.id), req.body.status);
  res.json({ success: true, data: result });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
  await adminArtworksService.remove(parseNumericId(req.params.id));
  res.json({ success: true, message: "Artwork deleted" });
});
