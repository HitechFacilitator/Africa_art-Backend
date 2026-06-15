export declare function getByArtwork(artworkId: number): Promise<({
    user: {
        id: number;
        firstName: never;
        lastName: never;
    };
    artwork: {
        id: number;
        title: string;
    };
} & {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    filename: string;
    path: string;
    artworkId: number;
    isValid: boolean;
    certificateNumber: string;
    issuedDate: Date;
    expiryDate: Date | null;
    blockchainHash: string | null;
    status: string | null;
    authenticationLevel: string | null;
    lastVerified: Date | null;
    certifyingBody: string | null;
})[]>;
export declare function getByUser(userId: number): Promise<({
    artwork: {
        id: number;
        title: string;
    };
} & {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    filename: string;
    path: string;
    artworkId: number;
    isValid: boolean;
    certificateNumber: string;
    issuedDate: Date;
    expiryDate: Date | null;
    blockchainHash: string | null;
    status: string | null;
    authenticationLevel: string | null;
    lastVerified: Date | null;
    certifyingBody: string | null;
})[]>;
export declare function getById(id: number): Promise<{
    user: {
        id: number;
        email: string;
        firstName: never;
        lastName: never;
    };
    artwork: {
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
    updatedAt: Date;
    title: string;
    filename: string;
    path: string;
    artworkId: number;
    isValid: boolean;
    certificateNumber: string;
    issuedDate: Date;
    expiryDate: Date | null;
    blockchainHash: string | null;
    status: string | null;
    authenticationLevel: string | null;
    lastVerified: Date | null;
    certifyingBody: string | null;
}>;
export declare function create(data: {
    title: string;
    artworkId: number;
    userId: number;
    filename: string;
    path: string;
    expiryDate?: string;
    blockchainHash?: string;
}): Promise<{
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    filename: string;
    path: string;
    artworkId: number;
    isValid: boolean;
    certificateNumber: string;
    issuedDate: Date;
    expiryDate: Date | null;
    blockchainHash: string | null;
    status: string | null;
    authenticationLevel: string | null;
    lastVerified: Date | null;
    certifyingBody: string | null;
}>;
export declare function verify(certificateNumber: string): Promise<{
    isValid: boolean;
    certificate: {
        user: {
            id: number;
            firstName: never;
            lastName: never;
        };
        artwork: {
            id: number;
            title: string;
        };
    } & {
        userId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        filename: string;
        path: string;
        artworkId: number;
        isValid: boolean;
        certificateNumber: string;
        issuedDate: Date;
        expiryDate: Date | null;
        blockchainHash: string | null;
        status: string | null;
        authenticationLevel: string | null;
        lastVerified: Date | null;
        certifyingBody: string | null;
    };
}>;
export declare function deleteOne(id: number): Promise<void>;
//# sourceMappingURL=certificate.service.d.ts.map