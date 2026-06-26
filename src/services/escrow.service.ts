import prisma from "../config/db";
import { AppError } from "../utils/AppError";

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.escrowTransaction.findMany({
      skip,
      take: limit,
      orderBy: { createdDate: "desc" },
    }),
    prisma.escrowTransaction.count(),
  ]);

  return {
    data: data.map(t => ({
      id: `esc-${t.id}`,
      artworkTitle: t.artworkTitle,
      buyerName: t.buyerName || "",
      sellerName: t.sellerName || "",
      amount: Number(t.amount),
      status: t.status,
      createdDate: t.createdDate.toISOString(),
      notes: t.notes || "",
    })),
    total,
  };
}

export async function release(id: number) {
  const existing = await prisma.escrowTransaction.findUnique({ where: { id } });
  if (!existing) throw new AppError("Escrow transaction not found", 404);

  const tx = await prisma.escrowTransaction.update({
    where: { id },
    data: { status: "RELEASED", notes: " Funds released." },
  });
  return tx;
}

export async function dispute(id: number) {
  const existing = await prisma.escrowTransaction.findUnique({ where: { id } });
  if (!existing) throw new AppError("Escrow transaction not found", 404);

  const tx = await prisma.escrowTransaction.update({
    where: { id },
    data: { status: "DISPUTED", notes: " Dispute initiated." },
  });
  return tx;
}

export async function refund(id: number) {
  const existing = await prisma.escrowTransaction.findUnique({ where: { id } });
  if (!existing) throw new AppError("Escrow transaction not found", 404);

  const tx = await prisma.escrowTransaction.update({
    where: { id },
    data: { status: "REFUNDED", notes: " Refund processed." },
  });
  return tx;
}
