import prisma from "../config/db";

export async function getAll() {
  const certs = await prisma.certificate.findMany({
    include: { artwork: true, user: true },
    orderBy: { createdAt: "desc" },
  });

  return {
    data: certs.map((c) => ({
      id: `cert-${c.id}`,
      artworkTitle: c.artwork?.title || c.title,
      artworkId: `art-${c.artworkId}`,
      ownerName: c.user?.name || "Unknown",
      ownerEmail: c.user?.email || "",
      issuedDate: c.issuedDate.toISOString().split("T")[0],
      expiryDate: c.expiryDate ? c.expiryDate.toISOString().split("T")[0] : "N/A",
      status: c.status || (c.isValid ? "Valid" : "Revoked"),
      blockchainHash: c.blockchainHash || "",
      verifiedBy: c.certifyingBody || "Aduna Gallery",
    })),
  };
}

export async function create(data: { artworkTitle: string; artworkId?: number; userId?: number; expiryDate?: string; verifiedBy?: string }) {
  const cert = await prisma.certificate.create({
    data: {
      certificateNumber: `CERT-${Date.now()}`,
      title: data.artworkTitle,
      filename: `${data.artworkTitle.replace(/\s+/g, "_")}_certificate.pdf`,
      path: "/certificates",
      artworkId: data.artworkId || 1,
      userId: data.userId || 1,
      expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
      isValid: true,
      status: "VALID",
      certifyingBody: data.verifiedBy || "Aduna Gallery",
      blockchainHash: `0x${Array.from({ length: 64 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")}`,
    },
  });
  return cert;
}

export async function update(id: number, data: { artworkTitle?: string; expiryDate?: string; verifiedBy?: string }) {
  const updateData: Record<string, unknown> = {};
  if (data.artworkTitle) updateData.title = data.artworkTitle;
  if (data.expiryDate) updateData.expiryDate = new Date(data.expiryDate);
  if (data.verifiedBy) updateData.certifyingBody = data.verifiedBy;

  await prisma.certificate.update({ where: { id }, data: updateData });
  return { success: true };
}

export async function revoke(id: number) {
  await prisma.certificate.update({
    where: { id },
    data: { status: "REVOKED", isValid: false },
  });
  return { success: true };
}

export async function remove(id: number) {
  await prisma.certificate.delete({ where: { id } });
  return { success: true };
}
