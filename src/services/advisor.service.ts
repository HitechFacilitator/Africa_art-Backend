import prisma from "../config/db";

export async function getConsultations(advisorId?: number) {
  const where = advisorId ? { advisorId } : {};
  const consultations = await prisma.consultation.findMany({
    where,
    include: { user: true },
    orderBy: { date: "desc" },
  });

  return consultations.map(c => ({
    id: `cons-${c.id}`,
    clientName: c.user?.name || "",
    clientTier: "Standard",
    topic: c.topic || "",
    date: c.date.toISOString().split("T")[0],
    timeSlot: c.timeSlot || "",
    status: c.status,
    type: "Video",
    notes: c.notes || "",
    followUpRequired: false,
  }));
}

export async function getClients(advisorId: number) {
  const clients = await prisma.advisorClient.findMany({
    where: { advisorId },
    orderBy: { createdAt: "desc" },
  });

  return clients.map(c => ({
    id: `cli-${c.id}`,
    name: c.name,
    email: c.email || "",
    tier: c.tier || "Standard",
    country: c.country || "",
    avatarColor: c.avatarColor || "#C5A059",
    totalSpent: c.totalSpent ? Number(c.totalSpent) : 0,
    acquisitionsCount: c.acquisitionsCount,
    satisfactionScore: c.satisfactionScore ? Number(c.satisfactionScore) : 0,
    lastContact: c.lastContact || "",
    interests: c.interests ? JSON.parse(c.interests) : [],
  }));
}

export async function getPlacements(userId: number) {
  const placements = await prisma.advisorPlacement.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return placements.map(p => ({
    id: `plc-${p.id}`,
    artworkTitle: p.artworkTitle || "",
    artworkCulture: p.artworkCulture || "",
    artworkEra: p.artworkEra || "",
    imageUrl: p.imageUrl || "",
    valuation: p.valuation ? Number(p.valuation) : 0,
    commission: p.commission ? Number(p.commission) : 0,
    clientName: p.clientName || "",
    status: p.status,
    notes: p.notes || "",
    proposedDate: p.proposedDate?.toISOString?.() || "",
  }));
}

export async function getActivities() {
  const activities = await prisma.advisorActivity.findMany({
    orderBy: { createdAt: "desc" },
  });

  return activities.map(a => ({
    id: `act-${a.id}`,
    type: a.type || "",
    title: a.title || "",
    description: a.description || "",
    timestamp: a.timestamp || "",
    icon: a.icon || "",
  }));
}
