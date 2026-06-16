import { Request, Response } from "express";
import * as service from "../services/adminUsers.service";

export async function getAll(req: Request, res: Response) {
  try {
    const result = await service.getAll({
      page: req.query.page ? Number(req.query.page) : undefined,
      limit: req.query.limit ? Number(req.query.limit) : undefined,
      search: req.query.search as string | undefined,
    });
    res.json({ success: true, ...result });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch users" });
  }
}

export async function updateStatus(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await service.updateStatus(id, req.body.status);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to update user status" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await service.remove(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to delete user" });
  }
}
