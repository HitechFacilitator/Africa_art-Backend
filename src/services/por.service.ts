import prisma from "../config/db";
import { AppError } from "../utils/AppError";
import { PORStatus, Role } from "../generated/prisma/client";
import { sseManager } from "../utils/sse";

export async function getByArtwork(artworkId: number) {
  return prisma.priceRequest.findMany({
    where: { artworkId },
    include: {
      user: { select: { id: true, name: true, email: true } },
      artwork: { select: { id: true, title: true } },
      messages: { orderBy: { createdAt: "asc" } },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getByUser(userId: number) {
  const requests = await prisma.priceRequest.findMany({
    where: { userId },
    include: {
      artwork: {
        include: {
          artist: { select: { id: true, name: true } },
          images: { where: { isPrimary: true }, take: 1 },
        },
      },
      messages: { orderBy: { createdAt: "asc" } },
    },
    orderBy: { createdAt: "desc" },
  });

  return requests.map(r => ({
    id: `por-${r.id}`,
    artworkId: r.artworkId,
    message: r.message || "",
    status: r.status,
    response: r.response || "",
    artwork: r.artwork ? {
      id: r.artwork.id,
      title: r.artwork.title,
      images: r.artwork.images,
    } : undefined,
    messages: r.messages.map(m => ({
      id: m.id,
      sender: m.sender,
      senderId: m.senderId,
      text: m.text || "",
      timestamp: m.timestamp || "",
    })),
    createdAt: r.createdAt.toISOString(),
  }));
}

export async function getAll(page: number, limit: number, skip: number) {
  const [data, total] = await Promise.all([
    prisma.priceRequest.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, name: true, email: true } },
        artwork: { select: { id: true, title: true } },
        messages: { orderBy: { createdAt: "asc" } },
      },
    }),
    prisma.priceRequest.count(),
  ]);

  return { data, total };
}

export async function create(userId: number, artworkId: number, message?: string) {
  const artwork = await prisma.artwork.findUnique({ where: { id: artworkId } });
  if (!artwork) {
    throw new AppError("Artwork not found", 404);
  }

  if (!artwork.isPOR) {
    throw new AppError("Artwork is not price-on-request", 400);
  }

  const existing = await prisma.priceRequest.findFirst({
    where: { userId, artworkId },
  });
  if (existing) {
    throw new AppError("You have already submitted an inquiry for this artwork", 409);
  }

  const por = await prisma.priceRequest.create({
    data: { userId, artworkId, message },
  });

  const admins = await prisma.user.findMany({ where: { role: Role.ADMIN }, select: { id: true } });
  if (admins.length > 0) {
    sseManager.sendToUsers(admins.map(a => String(a.id)), "por-update", {
      porId: por.id,
      action: "created",
      artworkId,
    });
  }

  return por;
}

export async function respond(id: number, response: string) {
  const request = await prisma.priceRequest.findUnique({ where: { id } });
  if (!request) {
    throw new AppError("Price request not found", 404);
  }

  if (request.status !== PORStatus.PENDING) {
    throw new AppError("Request is not pending", 400);
  }

  const updated = await prisma.priceRequest.update({
    where: { id },
    data: { response, status: PORStatus.IN_DISCUSSION },
  });

  sseManager.sendToUsers([String(request.userId)], "por-update", {
    porId: id,
    action: "responded",
    status: "IN_DISCUSSION",
    response,
  });

  return updated;
}

export async function changeStatus(id: number, newStatus: string) {
  const request = await prisma.priceRequest.findUnique({ where: { id } });
  if (!request) {
    throw new AppError("Price request not found", 404);
  }

  const validStatuses = ["PENDING", "IN_DISCUSSION", "CLOSED"];
  if (!validStatuses.includes(newStatus)) {
    throw new AppError("Invalid status. Must be PENDING, IN_DISCUSSION, or CLOSED", 400);
  }

  const updated = await prisma.priceRequest.update({
    where: { id },
    data: { status: newStatus as PORStatus },
  });

  const recipientIds: string[] = [String(request.userId)];
  const admins = await prisma.user.findMany({ where: { role: Role.ADMIN }, select: { id: true } });
  for (const admin of admins) {
    recipientIds.push(String(admin.id));
  }

  sseManager.sendToUsers([...new Set(recipientIds)], "por-update", {
    porId: id,
    action: "status-changed",
    status: newStatus,
  });

  return updated;
}

export async function close(id: number) {
  const request = await prisma.priceRequest.findUnique({ where: { id } });
  if (!request) {
    throw new AppError("Price request not found", 404);
  }

  const updated = await prisma.priceRequest.update({
    where: { id },
    data: { status: PORStatus.CLOSED },
  });

  const recipientIds: string[] = [String(request.userId)];
  const admins = await prisma.user.findMany({ where: { role: Role.ADMIN }, select: { id: true } });
  for (const admin of admins) {
    recipientIds.push(String(admin.id));
  }

  sseManager.sendToUsers([...new Set(recipientIds)], "por-update", {
    porId: id,
    action: "closed",
    status: "CLOSED",
  });

  return updated;
}

export async function addMessage(porId: number, sender: string, senderId: number, text: string) {
  const request = await prisma.priceRequest.findUnique({ where: { id: porId } });
  if (!request) {
    throw new AppError("Price request not found", 404);
  }

  if (request.status === PORStatus.CLOSED) {
    throw new AppError("Cannot send messages on a closed POR request", 400);
  }

  const message = await prisma.porMessage.create({
    data: {
      porId,
      sender,
      senderId,
      text,
      timestamp: new Date().toISOString(),
    },
  });

  const recipientIds: string[] = [];
  if (senderId !== request.userId) {
    recipientIds.push(String(request.userId));
  }
  const admins = await prisma.user.findMany({ where: { role: Role.ADMIN }, select: { id: true } });
  for (const admin of admins) {
    if (admin.id !== senderId) {
      recipientIds.push(String(admin.id));
    }
  }

  if (recipientIds.length > 0) {
    sseManager.sendToUsers([...new Set(recipientIds)], "por-message", {
      porId,
      message: {
        id: message.id,
        sender: message.sender,
        senderId: message.senderId,
        text: message.text,
        timestamp: message.timestamp,
      },
    });
  }

  return {
    id: message.id,
    sender: message.sender,
    senderId: message.senderId,
    text: message.text || "",
    timestamp: message.timestamp || "",
  };
}
