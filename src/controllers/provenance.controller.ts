import { Request, Response } from "express";
import * as provenanceService from "../services/provenance.service";
import catchAsync from "../utils/catchAsync";

export const getByArtwork = catchAsync(async (req: Request, res: Response) => {
  const records = await provenanceService.getByArtwork(Number(req.params.artworkId));
  res.json({ success: true, data: records });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const record = await provenanceService.create(Number(req.params.artworkId), req.body);
  res.status(201).json({ success: true, data: record });
});

export const deleteOne = catchAsync(async (req: Request, res: Response) => {
  await provenanceService.deleteOne(Number(req.params.id));
  res.json({ success: true, message: "Provenance record deleted" });
});
