import prisma from "../config/db";

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
      status: "Active" as const,
    })),
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
}

export async function updateStatus(id: number, status: string) {
  await prisma.user.update({ where: { id }, data: {} });
  return { success: true };
}

export async function remove(id: number) {
  await prisma.user.delete({ where: { id } });
  return { success: true };
}
