import { OrderStatus } from "../generated/prisma/client";
export declare function getByUser(userId: number): Promise<({
    items: ({
        artwork: {
            artist: {
                id: number;
                name: string;
            } | null;
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
        };
    } & {
        id: number;
        createdAt: Date;
        price: import("@prisma/client-runtime-utils").Decimal;
        artworkId: number;
        orderId: number;
    })[];
} & {
    userId: number;
    id: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
})[]>;
export declare function getAll(page: number, limit: number, skip: number): Promise<{
    data: ({
        user: {
            id: number;
            email: string;
            firstName: never;
            lastName: never;
        };
        items: ({
            artwork: {
                id: number;
                title: string;
            };
        } & {
            id: number;
            createdAt: Date;
            price: import("@prisma/client-runtime-utils").Decimal;
            artworkId: number;
            orderId: number;
        })[];
    } & {
        userId: number;
        id: number;
        status: OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    })[];
    total: number;
}>;
export declare function getById(id: number): Promise<{
    user: {
        id: number;
        email: string;
        firstName: never;
        lastName: never;
    };
    items: ({
        artwork: {
            artist: {
                id: number;
                name: string;
            } | null;
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
        };
    } & {
        id: number;
        createdAt: Date;
        price: import("@prisma/client-runtime-utils").Decimal;
        artworkId: number;
        orderId: number;
    })[];
} & {
    userId: number;
    id: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
}>;
export declare function create(userId: number, artworkIds: number[], notes?: string): Promise<{
    items: ({
        artwork: {
            id: number;
            title: string;
        };
    } & {
        id: number;
        createdAt: Date;
        price: import("@prisma/client-runtime-utils").Decimal;
        artworkId: number;
        orderId: number;
    })[];
} & {
    userId: number;
    id: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
}>;
export declare function updateStatus(id: number, status: OrderStatus): Promise<{
    userId: number;
    id: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    totalAmount: import("@prisma/client-runtime-utils").Decimal;
}>;
//# sourceMappingURL=order.service.d.ts.map