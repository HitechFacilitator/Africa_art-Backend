import prisma from "../config/db";
import { AppError } from "../utils/AppError";

export async function getAll(params?: { page?: number; limit?: number; search?: string }) {
  const page = params?.page || 1;
  const limit = params?.limit || 50;
  const search = params?.search || "";
  const skip = (page - 1) * limit;

  const where = search
    ? {
        OR: [
          { name: { contains: search } },
          { email: { contains: search } },
        ],
      }
    : {};

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    data: users.map((u) => ({
      id: `usr-${u.id}`,
      name: u.name,
      email: u.email,
      role: u.role.toLowerCase(),
      institution: u.institution || "",
      joinedDate: u.createdAt.toISOString().split("T")[0],
      lastActive: u.updatedAt.toISOString().split("T")[0],
      status: u.status || "ACTIVE",
    })),
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
}

export async function getById(id: number) {
  const u = await prisma.user.findUnique({ where: { id } });
  if (!u) throw new AppError("User not found", 404);
  return {
    id: `usr-${u.id}`,
    name: u.name,
    email: u.email,
    role: u.role.toLowerCase(),
    institution: u.institution || "",
    country: u.country || "",
    tier: u.tier || "Standard",
    avatar: u.avatar || "",
    joinedDate: u.createdAt.toISOString().split("T")[0],
    lastActive: u.updatedAt.toISOString().split("T")[0],
    status: u.status || "ACTIVE",
  };
}

export async function create(data: { name: string; email: string; password: string; role?: string; institution?: string; country?: string }) {
  // Password validation
  if (!data.password || data.password.length < 12) {
    throw new AppError("Password must be at least 12 characters", 400);
  }
  if (!/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/[0-9]/.test(data.password)) {
    throw new AppError("Password must contain uppercase, lowercase, and a number", 400);
  }

  // Role validation
  const validRoles = ["VISITOR", "COLLECTOR", "PRESTIGE", "ADVISOR", "ADMIN", "SUPPORT"];
  const roleUpper = data.role?.toUpperCase() || "COLLECTOR";
  if (!validRoles.includes(roleUpper)) {
    throw new AppError(`Invalid role: ${data.role}. Must be one of: ${validRoles.join(", ")}`, 400);
  }

  const bcrypt = await import("bcrypt");
  const hashedPassword = await bcrypt.hash(data.password, 12);
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: roleUpper as any,
      institution: data.institution || null,
      country: data.country || null,
      status: "ACTIVE",
    },
  });
  return { id: `usr-${user.id}`, name: user.name, email: user.email, role: user.role.toLowerCase(), status: user.status };
}

export async function update(id: number, data: { name?: string; email?: string; role?: string; institution?: string; country?: string; status?: string }) {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new AppError("User not found", 404);

  const updateData: Record<string, unknown> = {};
  if (data.name) updateData.name = data.name;
  if (data.email) updateData.email = data.email;
  if (data.role) {
    const validRoles = ["VISITOR", "COLLECTOR", "PRESTIGE", "ADVISOR", "ADMIN", "SUPPORT"];
    const roleUpper = data.role.toUpperCase();
    if (!validRoles.includes(roleUpper)) {
      throw new AppError(`Invalid role: ${data.role}. Must be one of: ${validRoles.join(", ")}`, 400);
    }
    updateData.role = roleUpper;
  }
  if (data.institution !== undefined) updateData.institution = data.institution || null;
  if (data.country !== undefined) updateData.country = data.country || null;
  if (data.status) updateData.status = data.status.toUpperCase();

  const updated = await prisma.user.update({ where: { id }, data: updateData });
  return { id: `usr-${updated.id}`, name: updated.name, email: updated.email, role: updated.role.toLowerCase(), status: updated.status };
}

export async function updateStatus(id: number, status: string) {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new AppError("User not found", 404);
  const updated = await prisma.user.update({
    where: { id },
    data: { status: status.toUpperCase() as "ACTIVE" },
  });
  return { id: `usr-${updated.id}`, status: updated.status };
}

export async function remove(id: number) {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new AppError("User not found", 404);
  await prisma.user.delete({ where: { id } });
  return { success: true };
}
