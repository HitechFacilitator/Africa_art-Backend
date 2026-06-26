import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { Prisma, OrderStatus } from "../generated/prisma/client";

export async function getByUser(userId: number) {
  return prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          artwork: {
            include: {
              artist: { select: { id: true, name: true } },
              images: { where: { isPrimary: true }, take: 1 },
            },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.order.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, firstName: true, lastName: true, email: true } },
        items: {
          include: {
            artwork: { select: { id: true, title: true } },
          },
        },
      },
    }),
    prisma.order.count(),
  ]);

  return { data, total };
}

export async function getById(id: number) {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, firstName: true, lastName: true, email: true } },
      items: {
        include: {
          artwork: {
            include: {
              artist: { select: { id: true, name: true } },
              images: { where: { isPrimary: true }, take: 1 },
            },
          },
        },
      },
    },
  });

  if (!order) {
    throw new AppError("Order not found", 404);
  }

  return order;
}

export async function create(userId: number, artworkIds: number[], notes?: string) {
  if (!artworkIds.length) {
    throw new AppError("At least one artwork is required", 400);
  }

  const artworks = await prisma.artwork.findMany({
    where: { id: { in: artworkIds }, availability: "AVAILABLE" },
  });

  if (artworks.length !== artworkIds.length) {
    throw new AppError("Some artworks are not available", 400);
  }

  const totalAmount = artworks.reduce((sum: number, a) => {
    return sum + (a.price ? Number(a.price) : 0);
  }, 0);

  const order = await prisma.$transaction(async (tx) => {
    const newOrder = await tx.order.create({
      data: {
        userId,
        totalAmount: new Prisma.Decimal(totalAmount),
        notes,
        items: {
          create: artworks.map((a) => ({
            artworkId: a.id,
            price: a.price ?? new Prisma.Decimal(0),
          })),
        },
      },
      include: {
        items: {
          include: {
            artwork: { select: { id: true, title: true } },
          },
        },
      },
    });

    await tx.artwork.updateMany({
      where: { id: { in: artworkIds } },
      data: { availability: "SOLD" },
    });

    return newOrder;
  });

  return order;
}

export async function updateStatus(id: number, status: OrderStatus) {
  const order = await prisma.order.findUnique({ where: { id } });
  if (!order) {
    throw new AppError("Order not found", 404);
  }

  return prisma.order.update({
    where: { id },
    data: { status },
  });
}
