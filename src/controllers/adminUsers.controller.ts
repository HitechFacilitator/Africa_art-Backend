import { Request, Response } from "express";
import * as service from "../services/adminUsers.service";
import catchAsync from "../utils/catchAsync";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getAll({
    page: req.query.page ? Number(req.query.page) : undefined,
    limit: req.query.limit ? Number(req.query.limit) : undefined,
    search: req.query.search as string | undefined,
  });
  res.json({ success: true, ...result });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getById(Number(req.params.id));
  res.json({ success: true, data: result });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const result = await service.create(req.body);
  res.status(201).json({ success: true, data: result });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const result = await service.update(Number(req.params.id), req.body);
  res.json({ success: true, data: result });
});

export const updateStatus = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateStatus(Number(req.params.id), req.body.status);
  res.json({ success: true, data: result });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
  await service.remove(Number(req.params.id));
  res.json({ success: true, message: "User deleted" });
});
