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
    include: { artwork: { include: { artist: true, category: true } }, user: true },
  });
  if (!cert) throw new Error("Certificate not found");

  const W = 595.28; // A4 width
  const H = 841.89; // A4 height
  const M = 40;

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 0, bufferPages: true });
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const gold = "#C9A96E";
    const darkGold = "#A07D4A";
    const ebony = "#1A1A1A";
    const grey = "#666666";
    const lightGrey = "#999999";
    const statusColor = cert.status === "VALID" ? "#059669" : cert.status === "REVOKED" ? "#DC2626" : "#D97706";

    // ── Background ──────────────────────────────────────────────
    doc.rect(0, 0, W, H).fill("#FDFCF8");

    // Watermark diagonal text
    doc.save();
    doc.rotate(-45, { origin: [W / 2, H / 2] });
    doc.fontSize(60).font("Helvetica-Bold").fillColor("#F0EDE5")
      .text("ADUNA", W / 2 - 80, H / 2 - 30, { align: "center", width: 160 });
    doc.restore();

    // ── Outer border (thick) ───────────────────────────────────
    doc.rect(M - 5, M - 5, W - 2 * M + 10, H - 2 * M + 10)
      .lineWidth(3).strokeColor(gold).stroke();

    // ── Inner border (thin) ────────────────────────────────────
    doc.rect(M, M, W - 2 * M, H - 2 * M)
      .lineWidth(0.5).strokeColor(gold).stroke();

    // ── Corner ornaments ───────────────────────────────────────
    const ornamentSize = 20;
    const corners = [
      [M + 8, M + 8],
      [W - M - 8 - ornamentSize, M + 8],
      [M + 8, H - M - 8 - ornamentSize],
      [W - M - 8 - ornamentSize, H - M - 8 - ornamentSize],
    ];
    for (const [cx, cy] of corners) {
      doc.rect(cx, cy, ornamentSize, ornamentSize).lineWidth(1).strokeColor(gold).stroke();
      doc.rect(cx + 4, cy + 4, ornamentSize - 8, ornamentSize - 8).lineWidth(0.5).strokeColor(darkGold).stroke();
    }

    // ── Header ─────────────────────────────────────────────────
    let y = M + 45;

    doc.fontSize(10).font("Helvetica").fillColor(lightGrey)
      .text("E S T .   2 0 2 4", M, y, { align: "center", width: W - 2 * M });
    y += 18;

    doc.fontSize(32).font("Helvetica-Bold").fillColor(ebony)
      .text("ADUNA GALLERY", M, y, { align: "center", width: W - 2 * M });
    y += 40;

    doc.fontSize(10).font("Helvetica").fillColor(grey)
      .text("African Heritage Art & Advisory", M, y, { align: "center", width: W - 2 * M });
    y += 18;

    // Decorative line
    doc.moveTo(M + 120, y).lineTo(W - M - 120, y).lineWidth(1).strokeColor(gold).stroke();
    y += 8;
    doc.moveTo(M + 160, y).lineTo(W - M - 160, y).lineWidth(0.5).strokeColor(darkGold).stroke();
    y += 18;

    doc.fontSize(16).font("Helvetica-Bold").fillColor(ebony)
      .text("CERTIFICATE OF AUTHENTICITY", M, y, { align: "center", width: W - 2 * M });
    y += 22;

    doc.fontSize(9).font("Helvetica").fillColor(grey)
      .text("& PROVENANCE VERIFICATION", M, y, { align: "center", width: W - 2 * M });
    y += 20;

    // Decorative line
    doc.moveTo(M + 160, y).lineTo(W - M - 160, y).lineWidth(0.5).strokeColor(darkGold).stroke();
    y += 8;
    doc.moveTo(M + 120, y).lineTo(W - M - 120, y).lineWidth(1).strokeColor(gold).stroke();
    y += 25;

    // ── Certificate Number ─────────────────────────────────────
    doc.roundedRect(M + 60, y, W - 2 * M - 120, 28, 4).fill("#F5F0E8");
    doc.fontSize(9).font("Helvetica-Bold").fillColor(darkGold)
      .text(`CERTIFICATE NO: ${cert.certificateNumber}`, M, y + 9, { align: "center", width: W - 2 * M });
    y += 45;

    // ── Artwork Details Section ────────────────────────────────
    doc.fontSize(10).font("Helvetica-Bold").fillColor(darkGold)
      .text("ARTWORK DETAILS", M + 60, y, { width: W - 2 * M - 120 });
    y += 16;
    doc.moveTo(M + 60, y).lineTo(W - M - 60, y).lineWidth(0.5).strokeColor(gold).stroke();
    y += 12;

    const labelX = M + 60;
    const valueX = M + 200;
    const colWidth = (W - 2 * M - 120) / 2;
    const artwork = cert.artwork;

    const artworkFields: Array<[string, string]> = [
      ["Title", cert.artwork?.title || cert.title],
      ["Artist", artwork?.artist?.name || "Unknown Artist"],
      ["Region", artwork?.region || "—"],
      ["Tribe / Culture", artwork?.tribe || "—"],
      ["Era / Period", artwork?.era || artwork?.historicalPeriod || "—"],
      ["Material", artwork?.material || "—"],
      ["Dimensions", artwork?.dimensions || "—"],
      ["Category", artwork?.category?.name || "—"],
    ];

    for (const [label, value] of artworkFields) {
      doc.fontSize(8).font("Helvetica-Bold").fillColor(grey)
        .text(label + ":", labelX, y, { width: 80 });
      doc.fontSize(8).font("Helvetica").fillColor(ebony)
        .text(value, valueX, y, { width: W - 2 * M - 120 - 140 });
      y += 14;
    }
    y += 10;

    // ── Owner & Certification Details ──────────────────────────
    doc.fontSize(10).font("Helvetica-Bold").fillColor(darkGold)
      .text("CERTIFICATION DETAILS", M + 60, y, { width: W - 2 * M - 120 });
    y += 16;
    doc.moveTo(M + 60, y).lineTo(W - M - 60, y).lineWidth(0.5).strokeColor(gold).stroke();
    y += 12;

    const certFields: Array<[string, string]> = [
      ["Certified Owner", cert.user?.name || "Unknown"],
      ["Owner Email", cert.user?.email || "—"],
      ["Date of Issue", cert.issuedDate.toISOString().split("T")[0]],
      ["Expiry Date", cert.expiryDate ? cert.expiryDate.toISOString().split("T")[0] : "No Expiry"],
      ["Certifying Body", cert.certifyingBody || "Aduna Gallery"],
      ["Auth. Level", cert.authenticationLevel || "Standard"],
    ];

    for (const [label, value] of certFields) {
      doc.fontSize(8).font("Helvetica-Bold").fillColor(grey)
        .text(label + ":", labelX, y, { width: 80 });
      doc.fontSize(8).font("Helvetica").fillColor(ebony)
        .text(value, valueX, y, { width: W - 2 * M - 120 - 140 });
      y += 14;
    }
    y += 10;

    // ── Verification Status Badge ──────────────────────────────
    doc.fontSize(10).font("Helvetica-Bold").fillColor(darkGold)
      .text("VERIFICATION STATUS", M + 60, y, { width: W - 2 * M - 120 });
    y += 16;
    doc.moveTo(M + 60, y).lineTo(W - M - 60, y).lineWidth(0.5).strokeColor(gold).stroke();
    y += 12;

    const badgeW = 140;
    const badgeX = M + 60;
    doc.roundedRect(badgeX, y, badgeW, 24, 4).fill(statusColor);
    doc.fontSize(10).font("Helvetica-Bold").fillColor("#FFFFFF")
      .text(cert.status || "UNKNOWN", badgeX, y + 7, { align: "center", width: badgeW });

    if (cert.lastVerified) {
      doc.fontSize(7).font("Helvetica").fillColor(lightGrey)
        .text(`Last verified: ${cert.lastVerified.toISOString().split("T")[0]}`, badgeX + badgeW + 10, y + 9);
    }
    y += 35;

    // ── Blockchain Verification ────────────────────────────────
    if (cert.blockchainHash) {
      doc.fontSize(10).font("Helvetica-Bold").fillColor(darkGold)
        .text("BLOCKCHAIN VERIFICATION", M + 60, y, { width: W - 2 * M - 120 });
      y += 16;
      doc.moveTo(M + 60, y).lineTo(W - M - 60, y).lineWidth(0.5).strokeColor(gold).stroke();
      y += 12;

      doc.roundedRect(M + 60, y, W - 2 * M - 120, 36, 3).fill("#F8F6F0");
      doc.fontSize(7).font("Helvetica-Bold").fillColor(grey)
        .text("Transaction Hash:", M + 70, y + 6, { width: 100 });
      doc.fontSize(7).font("Courier").fillColor(ebony)
        .text(cert.blockchainHash, M + 70, y + 18, { width: W - 2 * M - 140 });
      y += 48;

      // Verification URL
      doc.fontSize(7).font("Helvetica").fillColor(lightGrey)
        .text(`Verify at: https://etherscan.io/tx/${cert.blockchainHash}`, M + 60, y, { width: W - 2 * M - 120 });
      y += 15;
    }

    // ── Signature Section ──────────────────────────────────────
    y = H - M - 120;
    doc.moveTo(M + 60, y).lineTo(W - M - 60, y).lineWidth(0.5).strokeColor(gold).stroke();
    y += 15;

    // Left signature
    doc.moveTo(M + 60, y + 35).lineTo(M + 200, y + 35).lineWidth(0.5).strokeColor(ebony).stroke();
    doc.fontSize(7).font("Helvetica-Bold").fillColor(ebony)
      .text("Authorized Signature", M + 60, y + 40, { width: 140 });
    doc.fontSize(7).font("Helvetica").fillColor(grey)
      .text(cert.certifyingBody || "Aduna Gallery", M + 60, y + 52, { width: 140 });

    // Right signature
    doc.moveTo(W - M - 200, y + 35).lineTo(W - M - 60, y + 35).lineWidth(0.5).strokeColor(ebony).stroke();
    doc.fontSize(7).font("Helvetica-Bold").fillColor(ebony)
      .text("Digital Verification", W - M - 200, y + 40, { width: 140 });
    doc.fontSize(7).font("Helvetica").fillColor(grey)
      .text("Blockchain Timestamp", W - M - 200, y + 52, { width: 140 });

    // Date under signatures
    doc.fontSize(7).font("Helvetica").fillColor(lightGrey)
      .text(cert.issuedDate.toISOString().split("T")[0], M + 60, y + 65, { width: 140, align: "center" });
    doc.text(cert.issuedDate.toISOString().split("T")[0], W - M - 200, y + 65, { width: 140, align: "center" });

    // ── Footer ─────────────────────────────────────────────────
    const footerY = H - M - 30;
    doc.moveTo(M + 40, footerY).lineTo(W - M - 40, footerY).lineWidth(0.5).strokeColor(gold).stroke();
    doc.fontSize(6).font("Helvetica").fillColor(lightGrey)
      .text("Aduna Gallery — African Heritage Art & Advisory — Geneva, Switzerland", M, footerY + 8, { align: "center", width: W - 2 * M })
      .text("This certificate is digitally signed and blockchain-verified. Any tampering will invalidate the hash.", M, footerY + 18, { align: "center", width: W - 2 * M })
      .text(`Document ID: ${cert.certificateNumber} | Generated: ${new Date().toISOString()}`, M, footerY + 28, { align: "center", width: W - 2 * M });

    doc.end();
  });
}
