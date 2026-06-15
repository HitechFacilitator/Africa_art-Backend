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

export const getByResource = catchAsync(async (req: Request, res: Response) => {
  const resource = String(req.params.resource);
  const resourceId = Number(req.params.resourceId);
  // Reuse getAll with filter
  const result = await adminAuditService.getAll(1, 100, 0);
  const filtered = result.data.filter((l: any) => l.resource === resource && l.resourceId === resourceId);
  res.json({ success: true, data: filtered });
});
