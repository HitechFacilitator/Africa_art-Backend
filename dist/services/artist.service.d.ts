export declare function getAll(page: number, limit: number, skip: number): Promise<{
    data: ({
        _count: {
            artworks: number;
        };
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        biography: string | null;
        nationality: string | null;
        birthDate: Date | null;
        deathDate: Date | null;
        photo: string | null;
    })[];
    total: number;
}>;
export declare function getById(id: number): Promise<{
    artworks: {
        id: number;
        tier: string | null;
        createdAt: Date;
        updatedAt: Date;
        artistId: number | null;
        description: string;
        categoryId: number | null;
        origin: string;
        title: string;
        region: string | null;
        tribe: string | null;
        era: string | null;
        historicalPeriod: string | null;
        material: string;
        dimensions: string;
        weight: string | null;
        condition: string;
        availability: import("../generated/prisma/enums").Availability;
        price: import("@prisma/client-runtime-utils").Decimal | null;
        isPOR: boolean;
        imageUrl: string | null;
        blurDataURL: string | null;
        scarcityIndex: number | null;
        preservationStatus: string | null;
        appreciationRate: string | null;
        isHero: boolean;
        historicalStory: string | null;
        investmentThesis: string | null;
        estimatedValue: import("@prisma/client-runtime-utils").Decimal | null;
        historicalCagr: import("@prisma/client-runtime-utils").Decimal | null;
        yieldIndex: import("@prisma/client-runtime-utils").Decimal | null;
        artworkStatus: string | null;
        provenanceHash: string | null;
        acquiredYear: number | null;
        acquiredMethod: string | null;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    biography: string | null;
    nationality: string | null;
    birthDate: Date | null;
    deathDate: Date | null;
    photo: string | null;
}>;
export declare function create(data: {
    name: string;
    biography?: string;
    nationality?: string;
    birthDate?: string;
    deathDate?: string;
    photo?: string;
}): Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    biography: string | null;
    nationality: string | null;
    birthDate: Date | null;
    deathDate: Date | null;
    photo: string | null;
}>;
export declare function update(id: number, data: {
    name?: string;
    biography?: string;
    nationality?: string;
    birthDate?: string;
    deathDate?: string;
    photo?: string;
}): Promise<{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    biography: string | null;
    nationality: string | null;
    birthDate: Date | null;
    deathDate: Date | null;
    photo: string | null;
}>;
export declare function deleteOne(id: number): Promise<void>;
//# sourceMappingURL=artist.service.d.ts.map