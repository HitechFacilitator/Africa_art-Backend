import prisma from "../config/db";

export async function getAll(page: number, limit: number, skip: number, search?: string) {
  const where: any = {};
  if (search) {
    where.OR = [
      { name: { contains: search } },
      { email: { contains: search } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.user.findMany({
      where: { ...where, role: { not: "ADMIN" } },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        country: true,
        tier: true,
        role: true,
        avatar: true,
        createdAt: true,
        _count: { select: { orders: true } },
      },
    }),
    prisma.user.count({ where: { ...where, role: { not: "ADMIN" } } }),
  ]);

  return {
    data: data.map(u => ({
      id: `COL-${u.id}`,
      name: u.name,
      email: u.email,
      country: u.country || "",
      tier: u.tier || "Standard",
      purchasedValue: 0,
      acquisitionsCount: u._count.orders,
      amlStatus: "Verified",
      joinedDate: u.createdAt.toISOString().split("T")[0],
      avatarColor: u.avatar ? `#${u.avatar}` : "#C5A059",
    })),
    total,
  };
}
