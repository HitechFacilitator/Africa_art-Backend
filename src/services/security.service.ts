import prisma from "../config/db";

export async function getByUser(userId: number) {
  const records = await prisma.securityRecord.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return records.map(r => ({
    id: `sec-${r.id}`,
    artworkTitle: r.artworkTitle,
    vaultLocation: r.vaultLocation || "",
    fingerprintId: r.fingerprintId || "",
    smartContractAddress: r.smartContractAddress || "",
    lastInspectionDate: r.lastInspectionDate || "",
    temperatureHumidity: r.temperatureHumidity || "",
    insurancePolicyNumber: r.insurancePolicyNumber || "",
  }));
}

export async function create(userId: number, data: {
  artworkTitle: string;
  vaultLocation?: string;
  fingerprintId?: string;
  smartContractAddress?: string;
  lastInspectionDate?: string;
  temperatureHumidity?: string;
  insurancePolicyNumber?: string;
}) {
  const record = await prisma.securityRecord.create({
    data: {
      userId,
      ...data,
    },
  });

  return {
    id: `sec-${record.id}`,
    artworkTitle: record.artworkTitle,
    vaultLocation: record.vaultLocation || "",
    fingerprintId: record.fingerprintId || "",
    smartContractAddress: record.smartContractAddress || "",
    lastInspectionDate: record.lastInspectionDate || "",
    temperatureHumidity: record.temperatureHumidity || "",
    insurancePolicyNumber: record.insurancePolicyNumber || "",
  };
}
