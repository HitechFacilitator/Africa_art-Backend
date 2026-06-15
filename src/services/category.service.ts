import prisma from "../config/db";
import { AppError } from "../utils/AppError";

export async function getAll() {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { artworks: true } } },
  });
}

export async function getById(id: number) {
  const category = await prisma.category.findUnique({
    where: { id },
    include: { artworks: { take: 10, orderBy: { createdAt: "desc" } } },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
}

export async function create(data: { name: string; description?: string; image?: string }) {
  const existing = await prisma.category.findUnique({ where: { name: data.name } });
  if (existing) {
    throw new AppError("Category name already exists", 409);
  }

  return prisma.category.create({ data });
}

export async function update(id: number, data: { name?: string; description?: string; image?: string }) {
  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  if (data.name) {
    const existing = await prisma.category.findFirst({ where: { name: data.name, NOT: { id } } });
    if (existing) {
      throw new AppError("Category name already exists", 409);
    }
  }

  return prisma.category.update({ where: { id }, data });
}

export async function deleteOne(id: number) {
  const category = await prisma.category.findUnique({ where: { id } });
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const artworkCount = await prisma.artwork.count({ where: { categoryId: id } });
  if (artworkCount > 0) {
    throw new AppError("Cannot delete category with associated artworks", 400);
  }

  await prisma.category.delete({ where: { id } });
}
