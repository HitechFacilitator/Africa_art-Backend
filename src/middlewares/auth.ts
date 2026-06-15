import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError";
import { TokenPayload } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "africa-art-secret-key";

export const authenticate = (req: Request, _res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("No token provided", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    req.user = { userId: decoded.userId, role: decoded.role };
    next();
  } catch {
    return next(new AppError("Invalid or expired token", 401));
  }
};
