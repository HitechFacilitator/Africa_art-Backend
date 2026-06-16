import { Request, Response } from "express";
import * as adminArtworksService from "../services/adminArtworks.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

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

export const updateStatus = catchAsync(async (req: Request, res: Response) => {
  const result = await adminArtworksService.updateStatus(Number(req.params.id), req.body.status);
  res.json({ success: true, data: result });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
  await adminArtworksService.remove(Number(req.params.id));
  res.json({ success: true, message: "Artwork deleted" });
});
