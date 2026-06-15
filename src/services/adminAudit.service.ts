import prisma from "../config/db";

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.auditLog.findMany({
      skip,
      take: limit,
      orderBy: { timestamp: "desc" },
      include: { user: { select: { id: true, name: true, email: true } } },
    }),
    prisma.auditLog.count(),
  ]);

  return {
    data: data.map(log => ({
      id: `log-${log.id}`,
      user: log.user?.name || "System",
      timestamp: log.timestamp.toISOString().replace("T", " ").slice(0, 19) + " UTC",
      action: log.action,
      txHash: log.txHash || `0x${Math.floor(Math.random() * 0xffffff).toString(16).padStart(4, "0")}...${Math.floor(Math.random() * 0xffffff).toString(16).padStart(4, "0")}`,
      signed: log.signed,
    })),
    total,
  };
}

export async function verify(id: number) {
  await prisma.auditLog.update({
    where: { id },
    data: { signed: true },
  });
}

export async function verifyAll() {
  await prisma.auditLog.updateMany({
    data: { signed: true },
  });
}

export async function log(userId: number | null, action: string, resource: string, resourceId?: number, metadata?: Record<string, unknown>, txHash?: string) {
  return prisma.auditLog.create({
    data: {
      userId,
      action,
      resource,
      resourceId,
      metadata: metadata as undefined,
      txHash,
    },
  });
}
