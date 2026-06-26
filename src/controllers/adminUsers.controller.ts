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
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ success: false, message: "Invalid user ID" });
    return;
  }
  const result = await service.getById(id);
  res.json({ success: true, data: result });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const result = await service.create(req.body);
  res.status(201).json({ success: true, data: result });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ success: false, message: "Invalid user ID" });
    return;
  }
  const result = await service.update(id, req.body);
  res.json({ success: true, data: result });
});

export const updateStatus = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ success: false, message: "Invalid user ID" });
    return;
  }
  const result = await service.updateStatus(id, req.body.status);
  res.json({ success: true, data: result });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ success: false, message: "Invalid user ID" });
    return;
  }
  await service.remove(id);
  res.json({ success: true, message: "User deleted" });
});
