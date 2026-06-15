import { Request, Response } from "express";
import * as categoryService from "../services/category.service";
import catchAsync from "../utils/catchAsync";

export const getAll = catchAsync(async (_req: Request, res: Response) => {
  const categories = await categoryService.getAll();
  res.json({ success: true, data: categories });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryService.getById(Number(req.params.id));
  res.json({ success: true, data: category });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryService.create(req.body);
  res.status(201).json({ success: true, data: category });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const category = await categoryService.update(Number(req.params.id), req.body);
  res.json({ success: true, data: category });
});

export const deleteOne = catchAsync(async (req: Request, res: Response) => {
  await categoryService.deleteOne(Number(req.params.id));
  res.json({ success: true, message: "Category deleted" });
});
