import { Request, Response } from "express";
import * as service from "../services/adminCertificates.service";
import catchAsync from "../utils/catchAsync";

export const getAll = catchAsync(async (_req: Request, res: Response) => {
  const result = await service.getAll();
  res.json({ success: true, ...result });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const cert = await service.create({
    ...req.body,
    artworkId: req.body.artworkId ? Number(req.body.artworkId) : undefined,
    userId: req.user!.userId,
  });
  res.status(201).json({ success: true, data: cert });
});

export const update = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await service.update(id, req.body);
  res.json({ success: true });
});

export const revoke = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await service.revoke(id);
  res.json({ success: true });
});

export const remove = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await service.remove(id);
  res.json({ success: true });
});

export const downloadPdf = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const pdfBuffer = await service.generatePdf(id);
  const cert = await service.getAll();
  const certData = cert.data.find((c) => c.id === `cert-${id}`);
  const filename = certData
    ? `${certData.artworkTitle.replace(/[^a-zA-Z0-9]/g, "_")}_certificate.pdf`
    : `certificate_${id}.pdf`;
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.send(pdfBuffer);
});
