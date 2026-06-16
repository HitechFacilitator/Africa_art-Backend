import { Request, Response } from "express";
import * as artworkService from "../services/artwork.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const filters = {
    category: req.query.category as string,
    artist: req.query.artist as string,
    origin: req.query.origin as string,
    availability: req.query.availability as string,
    artworkStatus: req.query.artworkStatus as string,
    isPOR: req.query.isPOR as string,
    minPrice: req.query.minPrice as string,
    maxPrice: req.query.maxPrice as string,
  };
  const result = await artworkService.getAll(filters, page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const search = catchAsync(async (req: Request, res: Response) => {
  const { q } = req.query;
  if (!q || typeof q !== "string") {
    res.status(400).json({ success: false, message: "Search query is required" });
    return;
  }
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await artworkService.search(q, page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const artwork = await artworkService.getById(Number(req.params.id));
  res.json({ success: true, data: artwork });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const artwork = await artworkService.create(req.body);
  res.status(201).json({ success: true, data: artwork });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const artwork = await artworkService.update(Number(req.params.id), req.body);
  res.json({ success: true, data: artwork });
});

export const deleteOne = catchAsync(async (req: Request, res: Response) => {
  await artworkService.deleteOne(Number(req.params.id));
  res.json({ success: true, message: "Artwork deleted" });
});
