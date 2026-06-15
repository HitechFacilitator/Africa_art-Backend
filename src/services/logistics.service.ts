import prisma from "../config/db";

export async function getByUser(userId: number) {
  const shipments = await prisma.logisticsShipment.findMany({
    where: { userId },
    include: { updates: { orderBy: { createdAt: "asc" } } },
    orderBy: { createdAt: "desc" },
  });

  return shipments.map(s => ({
    id: `ship-${s.id}`,
    artworkTitle: s.artworkTitle,
    carrier: s.carrier || "",
    status: s.status,
    estimatedDeliveryDate: s.estimatedDeliveryDate || "",
    securityTier: s.securityTier || "",
    insuranceCoverage: s.insuranceCoverage || "",
    updates: s.updates.map(u => ({
      date: u.date || "",
      status: u.status || "",
      location: u.location || "",
      description: u.description || "",
    })),
  }));
}

export async function create(userId: number, data: {
  artworkTitle: string;
  carrier?: string;
  status?: string;
  estimatedDeliveryDate?: string;
  securityTier?: string;
  insuranceCoverage?: string;
  updates?: { date: string; status: string; location: string; description: string }[];
}) {
  const shipment = await prisma.logisticsShipment.create({
    data: {
      userId,
      artworkTitle: data.artworkTitle,
      carrier: data.carrier,
      status: data.status || "Origin Hub",
      estimatedDeliveryDate: data.estimatedDeliveryDate,
      securityTier: data.securityTier,
      insuranceCoverage: data.insuranceCoverage,
      updates: data.updates ? {
        create: data.updates,
      } : undefined,
    },
    include: { updates: true },
  });

  return {
    id: `ship-${shipment.id}`,
    artworkTitle: shipment.artworkTitle,
    carrier: shipment.carrier || "",
    status: shipment.status,
    estimatedDeliveryDate: shipment.estimatedDeliveryDate || "",
    securityTier: shipment.securityTier || "",
    insuranceCoverage: shipment.insuranceCoverage || "",
    updates: shipment.updates.map(u => ({
      date: u.date || "",
      status: u.status || "",
      location: u.location || "",
      description: u.description || "",
    })),
  };
}
