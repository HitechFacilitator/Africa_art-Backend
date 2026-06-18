import { Request, Response } from "express";
import * as porService from "../services/por.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";
import { parseNumericId } from "../utils/parseId";

export const getByArtwork = catchAsync(async (req: Request, res: Response) => {
  const requests = await porService.getByArtwork(parseNumericId(req.params.artworkId));
  res.json({ success: true, data: requests });
});

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const requests = await porService.getByUser(req.user!.userId);
  res.json({ success: true, data: requests });
});

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await porService.getAll(page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const request = await porService.create(req.user!.userId, parseNumericId(req.params.artworkId), req.body.message);
  res.status(201).json({ success: true, data: request });
});

export const respond = catchAsync(async (req: Request, res: Response) => {
  const request = await porService.respond(Number(req.params.id), req.body.response);
  res.json({ success: true, data: request });
});

export const close = catchAsync(async (req: Request, res: Response) => {
  const request = await porService.close(Number(req.params.id));
  res.json({ success: true, data: request });
});

export const addMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await porService.addMessage(
    Number(req.params.id),
    req.user!.role === "ADMIN" ? "admin" : "collector",
    req.user!.userId,
    req.body.text
  );
  res.status(201).json({ success: true, data: message });
});

export const changeStatus = catchAsync(async (req: Request, res: Response) => {
  const request = await porService.changeStatus(Number(req.params.id), req.body.status);
  res.json({ success: true, data: request });
});
