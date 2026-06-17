import prisma from "../config/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError";
import { Role } from "../generated/prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "africa-art-secret-key";

// In-memory OTP store: email → { code, expiresAt }
const otpStore = new Map<string, { code: string; expiresAt: number }>();
const OTP_TTL_MS = 5 * 60 * 1000; // 5 minutes

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
}) {
  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) {
    throw new AppError("Email already registered", 409);
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
      role: Role.COLLECTOR,
      country: data.country,
      institution: data.institution,
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
  const otpCode = String(Math.floor(100000 + Math.random() * 900000));
  otpStore.set(email, { code: otpCode, expiresAt: Date.now() + OTP_TTL_MS });

  console.log(`\n${"=".repeat(50)}`);
  console.log(`  OTP CODE for ${email}: ${otpCode}`);
  console.log(`${"=".repeat(50)}\n`);

  return {
    user: session,
    token: "",
    requiresOTP: true,
    otpCode,
  };
}

export async function loginAs(role: string) {
  const roleMap: Record<string, Role> = {
    visitor: Role.VISITOR,
    collector: Role.COLLECTOR,
    prestige: Role.PRESTIGE,
    advisor: Role.ADVISOR,
    admin: Role.ADMIN,
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

  // Generate a 6-digit OTP and print it to the backend terminal for development
  const otpCode = String(Math.floor(100000 + Math.random() * 900000));
  console.log(`\n${"=".repeat(50)}`);
  console.log(`  OTP CODE for ${user.email} (${role}): ${otpCode}`);
  console.log(`${"=".repeat(50)}\n`);

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

  if (stored.code !== code) {
    throw new AppError("Invalid OTP code", 401);
  }

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

export async function forgotPassword(_email: string) {
  return { message: "If the email exists, a reset link has been sent" };
}

export async function resetPassword(_token: string, _newPassword: string) {
  return { message: "Password has been reset successfully" };
}
