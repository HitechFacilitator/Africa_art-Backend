import prisma from "../config/db";

export async function getThreads() {
  const threads = await prisma.chatThread.findMany({
    include: { messages: { orderBy: { createdAt: "asc" } } },
    orderBy: { updatedAt: "desc" },
  });

  return threads.map(t => ({
    id: `thr-${t.id}`,
    clientName: t.clientName || "",
    clientRole: t.clientRole || "",
    advisorName: t.advisorName || "",
    subject: t.subject || "",
    lastMessage: t.lastMessage || "",
    lastMessageTime: t.lastMessageTime || "",
    unreadCount: t.unreadCount,
    status: t.status,
    messages: t.messages.map(m => ({
      id: `msg-${m.id}`,
      senderId: m.senderId || "",
      senderName: m.senderName || "",
      senderRole: m.senderRole || "",
      text: m.text || "",
      timestamp: m.timestamp || "",
      read: m.read,
    })),
  }));
}

export async function sendMessage(threadId: number, data: {
  senderId?: string;
  senderName?: string;
  senderRole?: string;
  text: string;
}) {
  const message = await prisma.chatMessage.create({
    data: {
      threadId,
      senderId: data.senderId,
      senderName: data.senderName,
      senderRole: data.senderRole,
      text: data.text,
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC",
      read: true,
    },
  });

  await prisma.chatThread.update({
    where: { id: threadId },
    data: {
      lastMessage: data.text,
      lastMessageTime: message.timestamp || "",
    },
  });

  return {
    id: `msg-${message.id}`,
    senderId: message.senderId || "",
    senderName: message.senderName || "",
    senderRole: message.senderRole || "",
    text: message.text || "",
    timestamp: message.timestamp || "",
    read: message.read,
  };
}

export async function getTickets() {
  const tickets = await prisma.supportTicket.findMany({
    include: { responses: { orderBy: { createdAt: "asc" } } },
    orderBy: { createdAt: "desc" },
  });

  return tickets.map(t => ({
    id: t.id.toString(),
    clientName: t.clientName || "",
    clientRole: t.clientRole || "",
    subject: t.subject || "",
    description: t.description || "",
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
  clientName?: string;
  clientRole?: string;
}) {
  const ticket = await prisma.supportTicket.create({
    data: {
      userId,
      subject: data.subject,
      description: data.description,
      priority: data.priority || "Medium",
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
