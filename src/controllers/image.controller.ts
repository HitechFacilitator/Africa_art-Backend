import { Request, Response } from "express";
import * as imageService from "../services/image.service";
import catchAsync from "../utils/catchAsync";

export const upload = catchAsync(async (req: Request, res: Response) => {
  if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
    res.status(400).json({ success: false, message: "No files uploaded" });
    return;
  }
  const images = await imageService.upload(Number(req.params.id), req.files as Express.Multer.File[]);
  res.status(201).json({ success: true, data: images });
});

export const deleteOne = catchAsync(async (req: Request, res: Response) => {
  await imageService.deleteOne(Number(req.params.id));
  res.json({ success: true, message: "Image deleted" });
});

export const setPrimary = catchAsync(async (req: Request, res: Response) => {
  const image = await imageService.setPrimary(Number(req.params.id));
  res.json({ success: true, data: image });
});

export const reorder = catchAsync(async (req: Request, res: Response) => {
  const images = await imageService.reorder(Number(req.params.id), req.body.imageIds);
  res.json({ success: true, data: images });
});
