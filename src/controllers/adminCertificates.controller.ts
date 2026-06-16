import { Request, Response } from "express";
import * as service from "../services/adminCertificates.service";

export async function getAll(_req: Request, res: Response) {
  try {
    const result = await service.getAll();
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch certificates" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const cert = await service.create(req.body);
    res.json({ success: true, data: cert });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to create certificate" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await service.update(id, req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to update certificate" });
  }
}

export async function revoke(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await service.revoke(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to revoke certificate" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await service.remove(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to delete certificate" });
  }
}
