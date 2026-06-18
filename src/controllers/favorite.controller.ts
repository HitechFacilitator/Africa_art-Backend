import { Request, Response } from "express";
import * as favoriteService from "../services/favorite.service";
import catchAsync from "../utils/catchAsync";
import { parseNumericId } from "../utils/parseId";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const favorites = await favoriteService.getByUser(req.user!.userId);
  res.json({ success: true, data: favorites });
});

export const add = catchAsync(async (req: Request, res: Response) => {
  const favorite = await favoriteService.add(req.user!.userId, parseNumericId(req.params.artworkId));
  res.status(201).json({ success: true, data: favorite });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
  await favoriteService.remove(req.user!.userId, parseNumericId(req.params.artworkId));
  res.json({ success: true, message: "Removed from favorites" });
});
