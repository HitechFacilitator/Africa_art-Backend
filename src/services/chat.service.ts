import prisma from "../config/db";
import { AppError } from "../utils/AppError";

export async function getThreads(userId: number, role: string) {
  // All users (including admin) only see threads where they are a direct participant
  const participantThreadIds = await prisma.chatThread.findMany({
    where: {
      OR: [
        { clientUserId: userId },
        { advisorUserId: userId },
      ],
    },
    select: { id: true },
  }).then(threads => threads.map(t => t.id));

  // Also threads where they have sent messages
  const messageThreadIds = await prisma.chatMessage.findMany({
    where: { userId },
    select: { threadId: true },
    distinct: ["threadId"],
  }).then(msgs => msgs.map(m => m.threadId));

  const threadIds = [...new Set([...participantThreadIds, ...messageThreadIds])];

  const threads = await prisma.chatThread.findMany({
    where: { id: { in: threadIds } },
    include: {
      messages: { orderBy: { createdAt: "asc" } },
      readStatuses: { where: { userId } },
    },
    orderBy: { updatedAt: "desc" },
  });

  return threads.map(t => {
    const readStatus = t.readStatuses[0];
    const lastReadId = readStatus?.lastReadId || 0;
    const unreadCount = t.messages.filter(m => m.id > lastReadId && m.userId !== userId).length;

    return {
      id: `thr-${t.id}`,
      clientName: t.clientName || "",
      clientRole: t.clientRole || "",
      advisorName: t.advisorName || "",
      clientUserId: t.clientUserId || null,
      advisorUserId: t.advisorUserId || null,
      subject: t.subject || "",
      lastMessage: t.lastMessage || "",
      lastMessageTime: t.lastMessageTime || "",
      unreadCount,
      status: t.status,
      messages: t.messages.map(m => ({
        id: `msg-${m.id}`,
        senderId: m.senderId != null ? `usr-${m.senderId}` : null,
        senderName: m.senderName || "",
        senderRole: m.senderRole || "",
        text: m.text || "",
        timestamp: m.timestamp || "",
        read: m.read,
      })),
    };
  });
}

export async function createThread(data: {
  subject?: string;
  clientName?: string;
  clientRole?: string;
  advisorName?: string;
  clientUserId?: number;
  advisorUserId?: number;
  initialMessage?: string;
}) {
  const thread = await prisma.chatThread.create({
    data: {
      subject: data.subject || null,
      clientName: data.clientName || null,
      clientRole: data.clientRole || null,
      advisorName: data.advisorName || null,
      clientUserId: data.clientUserId || null,
      advisorUserId: data.advisorUserId || null,
      status: "active",
    },
  });

  // Optionally send an initial message
  if (data.initialMessage) {
    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
    await prisma.chatMessage.create({
      data: {
        threadId: thread.id,
        userId: data.clientUserId || null,
        senderName: data.clientName || "System",
        senderRole: data.clientRole || "system",
        text: data.initialMessage,
        timestamp,
        read: false,
      },
    });
    await prisma.chatThread.update({
      where: { id: thread.id },
      data: { lastMessage: data.initialMessage, lastMessageTime: timestamp },
    });
  }

  // Notify admins about new thread (especially acquisition threads without assigned advisor)
  const admins = await prisma.user.findMany({
    where: { role: "ADMIN" as any },
    select: { id: true },
  });
  if (admins.length > 0) {
    const { sseManager } = await import("../utils/sse");
    sseManager.sendToUsers(
      admins.map(a => String(a.id)),
      "new-message",
      {
        threadId: thread.id,
        message: {
          id: 0,
          senderName: thread.clientName || "System",
          senderRole: thread.clientRole || "system",
          text: data.initialMessage || `New thread: ${thread.subject || "Untitled"}`,
          timestamp: new Date().toISOString(),
        },
      }
    );
  }

  // Set up Agora chat group for this thread (fire-and-forget)
  const { setupThreadGroup } = await import("./agora.service");
  const groupName = data.subject || `Chat: ${data.clientName || "Unknown"} & ${data.advisorName || "Advisor"}`;
  setupThreadGroup({
    threadId: thread.id,
    groupName,
    clientUserId: data.clientUserId,
    clientName: data.clientName,
    advisorUserId: data.advisorUserId,
    advisorName: data.advisorName,
  }).catch((err) => console.error("Agora group setup failed for thread", thread.id, err));

  return {
    id: `thr-${thread.id}`,
    subject: thread.subject || "",
    clientName: thread.clientName || "",
    advisorName: thread.advisorName || "",
    status: thread.status,
  };
}

export async function sendMessage(threadId: number, data: {
  senderId?: number;
  senderName?: string;
  senderRole?: string;
  userId?: number;
  text: string;
}) {
  const message = await prisma.chatMessage.create({
    data: {
      threadId,
      senderId: data.senderId,
      senderName: data.senderName,
      senderRole: data.senderRole,
      userId: data.userId,
      text: data.text,
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC",
      read: false,
    },
  });

  await prisma.chatThread.update({
    where: { id: threadId },
    data: {
      lastMessage: data.text,
      lastMessageTime: message.timestamp || "",
    },
  });

  // Get thread to determine correct recipients
  const thread = await prisma.chatThread.findUnique({ where: { id: threadId } });

  // Find recipient user IDs from thread participant fields
  const recipientIds: number[] = [];
  if (thread) {
    if (thread.clientUserId && thread.clientUserId !== data.userId) {
      recipientIds.push(thread.clientUserId);
    }
    if (thread.advisorUserId && thread.advisorUserId !== data.userId) {
      recipientIds.push(thread.advisorUserId);
    }
    // Support/admin sending: route to the non-support participant
    if (recipientIds.length === 0 && data.userId) {
      // Fallback: use message participants
      const participantMessages = await prisma.chatMessage.findMany({
        where: { threadId, userId: { not: null, notIn: [data.userId] } },
        select: { userId: true },
        distinct: ["userId"],
      });
      for (const m of participantMessages) {
        if (m.userId) recipientIds.push(m.userId);
      }
    }
  }

  return {
    id: `msg-${message.id}`,
    senderId: message.senderId != null ? `usr-${message.senderId}` : null,
    senderName: message.senderName || "",
    senderRole: message.senderRole || "",
    text: message.text || "",
    timestamp: message.timestamp || "",
    read: message.read,
    recipientIds: recipientIds.map(String),
  };
}

export async function markThreadRead(threadId: number, userId: number) {
  const lastMessage = await prisma.chatMessage.findFirst({
    where: { threadId },
    orderBy: { id: "desc" },
  });

  if (!lastMessage) return { success: true };

  try {
    await prisma.chatThreadReadStatus.upsert({
      where: { threadId_userId: { threadId, userId } },
      update: { lastReadId: lastMessage.id },
      create: { threadId, userId, lastReadId: lastMessage.id },
    });
  } catch (e) {
    // Concurrent upsert race — safe to ignore, read status is approximate
    console.warn("ChatThreadReadStatus upsert race condition:", e);
  }

  await prisma.chatMessage.updateMany({
    where: { threadId, userId: { not: userId } },
    data: { read: true },
  });

  return { success: true };
}

export async function getTickets(userId: number, role: string) {
  const where: Record<string, unknown> = {};

  if (role.toLowerCase() === "support" || role.toLowerCase() === "admin") {
    // Support and admin see all tickets
  } else {
    where.userId = userId;
  }

  const tickets = await prisma.supportTicket.findMany({
    where,
    include: { responses: { orderBy: { createdAt: "asc" } } },
    orderBy: { createdAt: "desc" },
  });

  return tickets.map(t => ({
    id: t.id.toString(),
    clientName: t.clientName || "",
    clientRole: t.clientRole || "",
    subject: t.subject || "",
    description: t.description || "",
    category: t.category || "General",
    status: t.status,
    priority: t.priority,
    createdDate: t.createdDate || "",
    lastUpdate: t.lastUpdate || "",
    assignedTo: t.assignedTo || "",
    responses: t.responses.map(r => ({
      author: r.author || "",
      text: r.text || "",
      timestamp: r.timestamp || "",
    })),
  }));
}

export async function createTicket(userId: number, data: {
  subject: string;
  description: string;
  priority?: string;
  category?: string;
  clientName?: string;
  clientRole?: string;
}) {
  const ticket = await prisma.supportTicket.create({
    data: {
      userId,
      subject: data.subject,
      description: data.description,
      priority: data.priority || "Medium",
      category: data.category || "General",
      clientName: data.clientName || "",
      clientRole: data.clientRole || "collector",
      status: "Open",
      createdDate: new Date().toISOString().split("T")[0],
      lastUpdate: new Date().toISOString().split("T")[0],
    },
  });

  return {
    id: ticket.id.toString(),
    clientName: ticket.clientName || "",
    clientRole: ticket.clientRole || "",
    subject: ticket.subject || "",
    description: ticket.description || "",
    category: ticket.category || "General",
    status: ticket.status,
    priority: ticket.priority,
    createdDate: ticket.createdDate || "",
    lastUpdate: ticket.lastUpdate || "",
    assignedTo: "",
    responses: [],
  };
}

export async function updateTicketStatus(id: number, status: string) {
  await prisma.supportTicket.update({
    where: { id },
    data: {
      status,
      lastUpdate: new Date().toISOString().split("T")[0],
    },
  });
}

export async function deleteTicket(id: number, userId: number, role: string) {
  const ticket = await prisma.supportTicket.findUnique({ where: { id } });
  if (!ticket) throw new AppError("Ticket not found", 404);

  if (role.toLowerCase() !== "support" && role.toLowerCase() !== "admin" && ticket.userId !== userId) {
    throw new AppError("Not authorized to delete this ticket", 403);
  }

  await prisma.ticketResponse.deleteMany({ where: { ticketId: id } });
  await prisma.supportTicket.delete({ where: { id } });
  return { success: true };
}

export async function addTicketResponse(id: number, author: string, text: string) {
  const response = await prisma.ticketResponse.create({
    data: {
      ticketId: id,
      author,
      text,
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC",
    },
  });

  await prisma.supportTicket.update({
    where: { id },
    data: { lastUpdate: new Date().toISOString().split("T")[0] },
  });

  return {
    author: response.author || "",
    text: response.text || "",
    timestamp: response.timestamp || "",
  };
}
