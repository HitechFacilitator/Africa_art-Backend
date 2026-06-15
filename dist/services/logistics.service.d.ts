export declare function getByUser(userId: number): Promise<{
    id: string;
    artworkTitle: string;
    carrier: string;
    status: string;
    estimatedDeliveryDate: string;
    securityTier: string;
    insuranceCoverage: string;
    updates: {
        date: string;
        status: string;
        location: string;
        description: string;
    }[];
}[]>;
export declare function create(userId: number, data: {
    artworkTitle: string;
    carrier?: string;
    status?: string;
    estimatedDeliveryDate?: string;
    securityTier?: string;
    insuranceCoverage?: string;
    updates?: {
        date: string;
        status: string;
        location: string;
        description: string;
    }[];
}): Promise<{
    id: string;
    artworkTitle: string;
    carrier: string;
    status: string;
    estimatedDeliveryDate: string;
    securityTier: string;
    insuranceCoverage: string;
    updates: {
        date: string;
        status: string;
        location: string;
        description: string;
    }[];
}>;
//# sourceMappingURL=logistics.service.d.ts.map