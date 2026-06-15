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
  messages?: { sender: string; text: string; timestamp?: string }[];
}) {
  const inquiry = await prisma.inquiry.create({
    data: {
      userId,
      artworkTitle: data.artworkTitle,
      artworkYear: data.artworkYear,
      imageUrl: data.imageUrl,
      status: data.status || "Received",
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
