import prisma from "../config/db";

export async function getByUser(userId: number) {
  const inquiries = await prisma.inquiry.findMany({
    where: { userId },
    include: { messages: { orderBy: { createdAt: "asc" } } },
    orderBy: { createdAt: "desc" },
  });

  return inquiries.map(inq => ({
    id: `inq-${inq.id}`,
    artworkTitle: inq.artworkTitle,
    artworkYear: inq.artworkYear || "",
    imageUrl: inq.imageUrl || "",
    status: inq.status,
    category: inq.category || "General",
    date: inq.date || inq.createdAt.toISOString(),
    messages: inq.messages.map(m => ({
      sender: m.sender,
      text: m.text || "",
      timestamp: m.timestamp || "",
    })),
  }));
}

export async function create(userId: number, data: {
  artworkTitle: string;
  artworkYear?: string;
  imageUrl?: string;
  status?: string;
  category?: string;
  messages?: { sender: string; text: string; timestamp?: string }[];
}) {
  const existing = await prisma.inquiry.findFirst({
    where: { userId, artworkTitle: data.artworkTitle },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  });

  if (existing) {
    return {
      id: `inq-${existing.id}`,
      artworkTitle: existing.artworkTitle,
      artworkYear: existing.artworkYear || "",
      imageUrl: existing.imageUrl || "",
      status: existing.status,
      category: existing.category || "General",
      date: existing.date || existing.createdAt.toISOString(),
      messages: existing.messages.map(m => ({
        sender: m.sender,
        text: m.text || "",
        timestamp: m.timestamp || "",
      })),
      existing: true,
    };
  }

  const inquiry = await prisma.inquiry.create({
    data: {
      userId,
      artworkTitle: data.artworkTitle,
      artworkYear: data.artworkYear,
      imageUrl: data.imageUrl,
      status: data.status || "Received",
      category: data.category || "General",
      date: new Date().toISOString(),
      messages: data.messages ? {
        create: data.messages.map(m => ({
          sender: m.sender,
          text: m.text,
          timestamp: m.timestamp || new Date().toISOString(),
        })),
      } : undefined,
    },
    include: { messages: true },
  });

  return {
    id: `inq-${inquiry.id}`,
    artworkTitle: inquiry.artworkTitle,
    artworkYear: inquiry.artworkYear || "",
    imageUrl: inquiry.imageUrl || "",
    status: inquiry.status,
    category: inquiry.category || "General",
    date: inquiry.date || inquiry.createdAt.toISOString(),
    messages: inquiry.messages.map(m => ({
      sender: m.sender,
      text: m.text || "",
      timestamp: m.timestamp || "",
    })),
  };
}

export async function addMessage(inquiryId: number, sender: string, text: string) {
  const message = await prisma.inquiryMessage.create({
    data: {
      inquiryId,
      sender,
      text,
      timestamp: new Date().toISOString(),
    },
  });

  return {
    sender: message.sender,
    text: message.text || "",
    timestamp: message.timestamp || "",
  };
}
