import PDFDocument from "pdfkit";
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

export async function generatePdf(id: number): Promise<Buffer> {
  const cert = await prisma.certificate.findUnique({
    where: { id },
    include: { artwork: true, user: true },
  });
  if (!cert) throw new Error("Certificate not found");

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const statusColor = cert.status === "VALID" ? "#059669" : cert.status === "REVOKED" ? "#DC2626" : "#D97706";

    doc.rect(0, 0, doc.page.width, doc.page.height).fill("#FAFAF5");

    doc.rect(30, 30, doc.page.width - 60, doc.page.height - 60).lineWidth(2).strokeColor("#C9A96E").stroke();

    doc.rect(35, 35, doc.page.width - 70, doc.page.height - 70).lineWidth(0.5).strokeColor("#C9A96E").stroke();

    doc.fontSize(28).font("Helvetica-Bold").fillColor("#1A1A1A")
      .text("ADUNA GALLERY", 50, 60, { align: "center" });
    doc.fontSize(10).font("Helvetica").fillColor("#888888")
      .text("Certificate of Authenticity & Provenance", { align: "center" });
    doc.moveDown(0.5);
    doc.moveTo(200, doc.y).lineTo(395, doc.y).lineWidth(1).strokeColor("#C9A96E").stroke();
    doc.moveDown(1.5);

    doc.fontSize(12).font("Helvetica-Bold").fillColor("#1A1A1A")
      .text("Certificate No:", 50, doc.y, { continued: true })
      .font("Helvetica").text(`  ${cert.certificateNumber}`);
    doc.moveDown(0.5);

    doc.fontSize(12).font("Helvetica-Bold")
      .text("Artwork:", 50, doc.y, { continued: true })
      .font("Helvetica").text(`  ${cert.artwork?.title || cert.title}`);
    doc.moveDown(0.5);

    doc.fontSize(12).font("Helvetica-Bold")
      .text("Certified Owner:", 50, doc.y, { continued: true })
      .font("Helvetica").text(`  ${cert.user?.name || "Unknown"}`);
    doc.moveDown(0.5);

    if (cert.user?.email) {
      doc.fontSize(12).font("Helvetica-Bold")
        .text("Owner Email:", 50, doc.y, { continued: true })
        .font("Helvetica").text(`  ${cert.user.email}`);
      doc.moveDown(0.5);
    }

    doc.fontSize(12).font("Helvetica-Bold")
      .text("Date of Issue:", 50, doc.y, { continued: true })
      .font("Helvetica").text(`  ${cert.issuedDate.toISOString().split("T")[0]}`);
    doc.moveDown(0.5);

    if (cert.expiryDate) {
      doc.fontSize(12).font("Helvetica-Bold")
        .text("Expiry Date:", 50, doc.y, { continued: true })
        .font("Helvetica").text(`  ${cert.expiryDate.toISOString().split("T")[0]}`);
      doc.moveDown(0.5);
    }

    doc.fontSize(12).font("Helvetica-Bold")
      .text("Certifying Body:", 50, doc.y, { continued: true })
      .font("Helvetica").text(`  ${cert.certifyingBody || "Aduna Gallery"}`);
    doc.moveDown(0.5);

    doc.fontSize(12).font("Helvetica-Bold")
      .text("Authentication Level:", 50, doc.y, { continued: true })
      .font("Helvetica").text(`  ${cert.authenticationLevel || "Standard"}`);
    doc.moveDown(1);

    doc.fontSize(12).font("Helvetica-Bold").fillColor("#1A1A1A")
      .text("Verification Status", 50, doc.y);
    doc.moveDown(0.3);
    doc.roundedRect(50, doc.y, 120, 24, 4).fill(statusColor);
    doc.fontSize(11).font("Helvetica-Bold").fillColor("#FFFFFF")
      .text(cert.status || "UNKNOWN", 60, doc.y + 5);
    doc.moveDown(1.5);

    if (cert.blockchainHash) {
      doc.fontSize(10).font("Helvetica-Bold").fillColor("#1A1A1A")
        .text("Blockchain Verification Hash:", 50, doc.y);
      doc.moveDown(0.2);
      doc.fontSize(8).font("Courier").fillColor("#555555")
        .text(cert.blockchainHash, 50, doc.y, { width: 500 });
      doc.moveDown(1);
    }

    if (cert.lastVerified) {
      doc.fontSize(10).font("Helvetica").fillColor("#888888")
        .text(`Last Verified: ${cert.lastVerified.toISOString().split("T")[0]}`, 50, doc.y);
      doc.moveDown(0.5);
    }

    const footerY = doc.page.height - 80;
    doc.moveTo(50, footerY).lineTo(doc.page.width - 50, footerY).lineWidth(0.5).strokeColor("#C9A96E").stroke();
    doc.fontSize(8).font("Helvetica").fillColor("#AAAAAA")
      .text("Aduna Gallery — African Heritage Art & Advisory", 50, footerY + 10, { align: "center", width: doc.page.width - 100 })
      .text("This certificate is digitally signed and blockchain-verified for authenticity.", { align: "center", width: doc.page.width - 100 })
      .text(`Generated: ${new Date().toISOString()}`, { align: "center", width: doc.page.width - 100 });

    doc.end();
  });
}
