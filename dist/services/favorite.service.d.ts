export declare function getByUser(userId: number): Promise<({
    artwork: {
        artist: {
            id: number;
            name: string;
        };
        category: {
            id: number;
            name: string;
        };
        images: {
            id: number;
            createdAt: Date;
            isPrimary: boolean;
            filename: string;
            path: string;
            order: number;
            artworkId: number;
        }[];
    } & {
        id: number;
        tier: string | null;
        createdAt: Date;
        updatedAt: Date;
        artistId: number;
        description: string;
        categoryId: number;
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
    };
} & {
    userId: number;
    id: number;
    createdAt: Date;
    artworkId: number;
})[]>;
export declare function add(userId: number, artworkId: number): Promise<{
    artwork: {
        artist: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        tier: string | null;
        createdAt: Date;
        updatedAt: Date;
        artistId: number;
        description: string;
        categoryId: number;
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
    };
} & {
    userId: number;
    id: number;
    createdAt: Date;
    artworkId: number;
}>;
export declare function remove(userId: number, artworkId: number): Promise<void>;
//# sourceMappingURL=favorite.service.d.ts.map