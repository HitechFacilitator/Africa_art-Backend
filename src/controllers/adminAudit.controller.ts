import { Request, Response } from "express";
import * as adminAuditService from "../services/adminAudit.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await adminAuditService.getAll(page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const verify = catchAsync(async (req: Request, res: Response) => {
  await adminAuditService.verify(Number(req.params.id));
  res.json({ success: true, message: "Audit log verified" });
});

export const verifyAll = catchAsync(async (_req: Request, res: Response) => {
  await adminAuditService.verifyAll();
  res.json({ success: true, message: "All audit logs verified" });
});
