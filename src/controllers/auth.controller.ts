import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import catchAsync from "../utils/catchAsync";

export const register = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.register(req.body);
  res.status(201).json({ success: true, data: result });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  res.json({ success: true, data: result });
});

export const loginAs = catchAsync(async (req: Request, res: Response) => {
  const { role } = req.body;
  const result = await authService.loginAs(role);
  res.json({ success: true, data: result });
});

export const verifyOTP = catchAsync(async (req: Request, res: Response) => {
  const { email, code } = req.body;
  const result = await authService.verifyOTP(email, code);
  res.json({ success: true, data: result });
});

export const getMe = catchAsync(async (req: Request, res: Response) => {
  const user = await authService.getMe(req.user!.userId);
  res.json({ success: true, data: user });
});

export const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.forgotPassword(req.body.email);
  res.json({ success: true, data: result });
});

export const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;
  const result = await authService.resetPassword(token, newPassword);
  res.json({ success: true, data: result });
});

export const enable2FA = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.enable2FA(req.user!.userId);
  res.json({ success: true, data: result });
});

export const disable2FA = catchAsync(async (req: Request, res: Response) => {
  const { password } = req.body;
  const result = await authService.disable2FA(req.user!.userId, password);
  res.json({ success: true, data: result });
});
