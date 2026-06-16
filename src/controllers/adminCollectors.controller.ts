import { Request, Response } from "express";
import * as adminCollectorsService from "../services/adminCollectors.service";
import catchAsync from "../utils/catchAsync";
import { getPaginationParams } from "../utils/pagination";

export const getAll = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, skip } = getPaginationParams(req.query as { page?: string; limit?: string });
  const search = req.query.search as string | undefined;
  const result = await adminCollectorsService.getAll(page, limit, skip, search);
  res.json({
    success: true,
    data: result.data,
    pagination: { page, limit, total: result.total, totalPages: Math.ceil(result.total / limit) },
  });
});
