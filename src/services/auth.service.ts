import prisma from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { AppError } from "../utils/AppError";
import { Role } from "../generated/prisma/client";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}
const JWT_SECRET = process.env.JWT_SECRET as string;

// In-memory OTP store: email → { code, expiresAt }
const otpStore = new Map<string, { code: string; expiresAt: number }>();
const OTP_TTL_MS = 5 * 60 * 1000; // 5 minutes
const OTP_MAX_ATTEMPTS = 5;
const OTP_ATTEMPT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const otpAttempts = new Map<string, { count: number; windowStart: number }>();

function generateToken(userId: number, role: Role): string {
  return jwt.sign({ userId, role } as object, JWT_SECRET, { expiresIn: "24h" });
}

function toUserSession(user: { id: number; email: string; name: string; role: Role; avatar?: string | null; institution?: string | null; twoFactorEnabled?: boolean }) {
  return {
    id: `usr-${user.id}`,
    email: user.email,
    name: user.name,
    role: user.role.toString().toLowerCase(),
    avatar: user.avatar || undefined,
    institution: user.institution || undefined,
    twoFactorEnabled: user.twoFactorEnabled ?? false,
  };
}

export async function register(data: {
  email: string;
  password: string;
  name: string;
  phone?: string;
  country?: string;
  institution?: string;
  invitationCode?: string;
  acceptTerms?: boolean;
  acceptGdpr?: boolean;
}) {
  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) {
    throw new AppError("Email already registered", 409);
  }

  // Password strength validation
  if (data.password.length < 12) {
    throw new AppError("Password must be at least 12 characters", 400);
  }
  if (!/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/[0-9]/.test(data.password)) {
    throw new AppError("Password must contain uppercase, lowercase, and numbers", 400);
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
      role: Role.COLLECTOR,
      phone: data.phone || null,
      country: data.country,
      institution: data.institution,
      acceptTerms: data.acceptTerms ?? false,
      acceptGdpr: data.acceptGdpr ?? false,
    },
  });

  const token = generateToken(user.id, user.role);

  return {
    user: toUserSession(user),
    token,
  };
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new AppError("Invalid email or password", 401);
  }

  const session = toUserSession(user);

  // If 2FA is not enabled, return token directly (no OTP required)
  if (!user.twoFactorEnabled) {
    const token = generateToken(user.id, user.role);
    return { user: session, token, requiresOTP: false };
  }

  // Generate and store a 6-digit OTP
  otpAttempts.delete(email);
  const otpCode = String(crypto.randomInt(100000, 999999));
  otpStore.set(email, { code: otpCode, expiresAt: Date.now() + OTP_TTL_MS });

  return {
    user: session,
    token: "",
    requiresOTP: true,
  };
}

export async function loginAs(role: string) {
  const roleMap: Record<string, Role> = {
    visitor: Role.VISITOR,
    collector: Role.COLLECTOR,
    prestige: Role.PRESTIGE,
    advisor: Role.ADVISOR,
    admin: Role.ADMIN,
    support: Role.SUPPORT,
  };

  const prismaRole = roleMap[role.toLowerCase()];
  if (!prismaRole) {
    throw new AppError("Invalid role", 400);
  }

  const user = await prisma.user.findFirst({ where: { role: prismaRole } });
  if (!user) {
    throw new AppError(`No user found for role: ${role}`, 404);
  }

  const token = generateToken(user.id, user.role);

  return {
    user: toUserSession(user),
    token,
  };
}

export async function verifyOTP(email: string, code: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new AppError("Invalid session", 401);
  }

  const stored = otpStore.get(email);
  if (!stored) {
    throw new AppError("No OTP pending for this email", 401);
  }

  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    throw new AppError("OTP has expired", 401);
  }

  // Check brute-force attempts
  const attempts = otpAttempts.get(email);
  if (attempts) {
    if (Date.now() > attempts.windowStart + OTP_ATTEMPT_WINDOW_MS) {
      // Window expired, reset
      otpAttempts.delete(email);
    } else if (attempts.count >= OTP_MAX_ATTEMPTS) {
      otpStore.delete(email);
      otpAttempts.delete(email);
      throw new AppError("Too many OTP attempts. Please request a new code.", 429);
    }
  }

  if (stored.code !== code) {
    // Increment attempt counter
    const current = otpAttempts.get(email) || { count: 0, windowStart: Date.now() };
    otpAttempts.set(email, { count: current.count + 1, windowStart: current.windowStart });
    throw new AppError("Invalid OTP code", 410);
  }

  // OTP valid — clear attempts
  otpAttempts.delete(email);

  otpStore.delete(email);
  const token = generateToken(user.id, user.role);
  return {
    user: toUserSession(user),
    token,
    success: true,
  };
}

export async function getMe(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      avatar: true,
      institution: true,
      country: true,
      tier: true,
      twoFactorEnabled: true,
      emailVerified: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return toUserSession(user);
}

export async function enable2FA(userId: number) {
  await prisma.user.update({
    where: { id: userId },
    data: { twoFactorEnabled: true },
  });
  return { success: true, twoFactorEnabled: true };
}

export async function disable2FA(userId: number, password: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new AppError("Invalid password", 401);
  }

  await prisma.user.update({
    where: { id: userId },
    data: { twoFactorEnabled: false },
  });

  // Clear any pending OTPs
  otpStore.delete(user.email);

  return { success: true, twoFactorEnabled: false };
}

// Password reset token store: token → { userId, expiresAt }
const resetTokenStore = new Map<string, { userId: number; expiresAt: number }>();
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

export async function forgotPassword(email: string) {
  // Always return success to prevent email enumeration
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return { message: "If the email exists, a reset link has been sent" };
  }

  const token = crypto.randomBytes(32).toString("hex");
  resetTokenStore.set(token, { userId: user.id, expiresAt: Date.now() + RESET_TOKEN_TTL_MS });

  // TODO: Send email with reset link in production
  console.log(`[DEV] Password reset token for ${email}: ${token}`);

  return { message: "If the email exists, a reset link has been sent" };
}

export async function resetPassword(token: string, newPassword: string) {
  const stored = resetTokenStore.get(token);
  if (!stored) {
    throw new AppError("Invalid or expired reset token", 400);
  }

  if (Date.now() > stored.expiresAt) {
    resetTokenStore.delete(token);
    throw new AppError("Invalid or expired reset token", 400);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  await prisma.user.update({
    where: { id: stored.userId },
    data: { password: hashedPassword },
  });

  resetTokenStore.delete(token);
  return { message: "Password has been reset successfully" };
}
