import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const validateRegister = (req: Request, _res: Response, next: NextFunction): void => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return next(new AppError("Email, password, and name are required", 400));
  }

  if (password.length < 12) {
    return next(new AppError("Password must be at least 12 characters", 400));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new AppError("Invalid email format", 400));
  }

  next();
};

export const validateLogin = (req: Request, _res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Email and password are required", 400));
  }

  next();
};
