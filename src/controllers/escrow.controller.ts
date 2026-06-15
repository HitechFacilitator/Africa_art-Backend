import { Request, Response } from "express";
import * as escrowService from "../services/escrow.service";
import * as adminAuditService from "../services/adminAudit.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const result = await escrowService.getAll(page, limit, skip);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});

export const release = catchAsync(async (req: Request, res: Response) => {
  const tx = await escrowService.release(Number(req.params.id));
  await adminAuditService.log(req.user!.userId, `Escrow ${req.params.id} funds released`, "Escrow", Number(req.params.id));
  res.json({ success: true, data: tx });
});

export const dispute = catchAsync(async (req: Request, res: Response) => {
  const tx = await escrowService.dispute(Number(req.params.id));
  await adminAuditService.log(req.user!.userId, `Escrow ${req.params.id} dispute initiated`, "Escrow", Number(req.params.id));
  res.json({ success: true, data: tx });
});

export const refund = catchAsync(async (req: Request, res: Response) => {
  const tx = await escrowService.refund(Number(req.params.id));
  await adminAuditService.log(req.user!.userId, `Escrow ${req.params.id} refund processed`, "Escrow", Number(req.params.id));
  res.json({ success: true, data: tx });
});
