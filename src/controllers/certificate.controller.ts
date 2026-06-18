import { Request, Response } from "express";
import * as certificateService from "../services/certificate.service";
import catchAsync from "../utils/catchAsync";
import { parseNumericId } from "../utils/parseId";

export const getByArtwork = catchAsync(async (req: Request, res: Response) => {
  const certs = await certificateService.getByArtwork(parseNumericId(req.params.artworkId));
  res.json({ success: true, data: certs });
});

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const certs = await certificateService.getByUser(req.user!.userId);
  res.json({ success: true, data: certs });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const cert = await certificateService.getById(Number(req.params.id));
  res.json({ success: true, data: cert });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const file = req.file as Express.Multer.File | undefined;
  const cert = await certificateService.create({
    ...req.body,
    filename: file?.filename || "",
    path: file?.path || "",
    userId: req.user!.userId,
  });
  res.status(201).json({ success: true, data: cert });
});

export const verify = catchAsync(async (req: Request, res: Response) => {
  const result = await certificateService.verify(String(req.params.number));
  res.json({ success: true, data: result });
});

export const deleteOne = catchAsync(async (req: Request, res: Response) => {
  await certificateService.deleteOne(Number(req.params.id));
  res.json({ success: true, message: "Certificate deleted" });
});
