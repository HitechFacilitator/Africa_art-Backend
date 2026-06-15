import { Request, Response } from "express";
import * as userService from "../services/user.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await userService.getAll(page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const getById = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.getById(Number(req.params.id));
  res.json({ success: true, data: user });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.update(Number(req.params.id), req.body);
  res.json({ success: true, data: user });
});

export const deleteOne = catchAsync(async (req: Request, res: Response) => {
  await userService.deleteOne(Number(req.params.id));
  res.json({ success: true, message: "User deleted" });
});

export const updateRole = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.updateRole(Number(req.params.id), req.body.role);
  res.json({ success: true, data: user });
});
