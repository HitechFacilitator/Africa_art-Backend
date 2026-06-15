import { Request, Response } from "express";
import * as reservationService from "../services/reservation.service";
import catchAsync from "../utils/catchAsync";

export const getByUser = catchAsync(async (req: Request, res: Response) => {
  const reservations = await reservationService.getByUser(req.user!.userId);
  res.json({ success: true, data: reservations });
});

export const create = catchAsync(async (req: Request, res: Response) => {
  const reservation = await reservationService.create(req.user!.userId, Number(req.params.artworkId));
  res.status(201).json({ success: true, data: reservation });
});

export const cancel = catchAsync(async (req: Request, res: Response) => {
  const reservation = await reservationService.cancel(Number(req.params.id), req.user!.userId);
  res.json({ success: true, data: reservation });
});

export const expire = catchAsync(async (_req: Request, res: Response) => {
  const count = await reservationService.expire();
  res.json({ success: true, data: { expired: count } });
});
