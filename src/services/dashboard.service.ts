import prisma from "../config/db";

export async function getByUser(userId: number) {
  const acquisitions = await prisma.acquisition.findMany({
    where: { userId },
    include: { provenanceChain: true },
    orderBy: { createdAt: "desc" },
  });

  return acquisitions.map(a => ({
    id: `acq-${a.id}`,
    title: a.title,
    era: a.era || "",
    culture: a.culture || "",
    acquisitionDate: a.acquisitionDate?.toISOString?.() || a.createdAt.toISOString(),
    status: a.status,
    imageUrl: a.imageUrl || "",
    estimatedValueEur: a.estimatedValueEur ? Number(a.estimatedValueEur) : 0,
    description: a.description || "",
    provenance: a.provenanceChain.map(p => p.entry),
  }));
}

export async function create(userId: number, data: {
  title: string;
  era?: string;
  culture?: string;
  acquisitionDate?: string;
  status?: string;
  imageUrl?: string;
  estimatedValueEur?: number;
  description?: string;
  provenance?: string[];
}) {
  const acquisition = await prisma.acquisition.create({
    data: {
      userId,
      title: data.title,
      era: data.era,
      culture: data.culture,
      acquisitionDate: data.acquisitionDate ? new Date(data.acquisitionDate) : undefined,
      status: data.status || "Certified",
      imageUrl: data.imageUrl,
      estimatedValueEur: data.estimatedValueEur,
      description: data.description,
      provenanceChain: data.provenance ? {
        create: data.provenance.map(entry => ({ entry })),
      } : undefined,
    },
    include: { provenanceChain: true },
  });

  return {
    id: `acq-${acquisition.id}`,
    title: acquisition.title,
    era: acquisition.era || "",
    culture: acquisition.culture || "",
    acquisitionDate: acquisition.acquisitionDate?.toISOString?.() || acquisition.createdAt.toISOString(),
    status: acquisition.status,
    imageUrl: acquisition.imageUrl || "",
    estimatedValueEur: acquisition.estimatedValueEur ? Number(acquisition.estimatedValueEur) : 0,
    description: acquisition.description || "",
    provenance: acquisition.provenanceChain.map(p => p.entry),
  };
}

export async function remove(id: number) {
  await prisma.acquisition.delete({ where: { id } });
}
