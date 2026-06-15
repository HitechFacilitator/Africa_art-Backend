import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { Role } from "../generated/prisma/client";

function toUserSession(user: { id: number; email: string; name: string; role: Role; avatar?: string | null; institution?: string | null }) {
  return {
    id: `usr-${user.id}`,
    email: user.email,
    name: user.name,
    role: user.role.toString().toLowerCase(),
    avatar: user.avatar || undefined,
    institution: user.institution || undefined,
  };
}

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
        institution: true,
        country: true,
        tier: true,
        emailVerified: true,
        createdAt: true,
      },
    }),
    prisma.user.count(),
  ]);

  return {
    data: data.map(u => ({
      ...u,
      id: `usr-${u.id}`,
      role: u.role.toString().toLowerCase(),
    })),
    total,
  };
}

export async function getById(id: number) {
  const user = await prisma.user.findUnique({
    where: { id },
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

export async function update(id: number, data: { name?: string; avatar?: string; institution?: string; country?: string; tier?: string }) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  return prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      avatar: true,
      institution: true,
    },
  });
}

export async function deleteOne(id: number) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError("User not found", 404);
  }
  await prisma.user.delete({ where: { id } });
}

export async function updateRole(id: number, role: Role) {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  return prisma.user.update({
    where: { id },
    data: { role },
    select: { id: true, email: true, name: true, role: true },
  });
}
