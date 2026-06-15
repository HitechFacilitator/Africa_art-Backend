export declare function getByUser(userId: number): Promise<{
    id: string;
    title: string;
    era: string;
    culture: string;
    acquisitionDate: string;
    status: string;
    imageUrl: string;
    estimatedValueEur: number;
    description: string;
    provenance: string[];
}[]>;
export declare function create(userId: number, data: {
    title: string;
    era?: string;
    culture?: string;
    acquisitionDate?: string;
    status?: string;
    imageUrl?: string;
    estimatedValueEur?: number;
    description?: string;
    provenance?: string[];
}): Promise<{
    id: string;
    title: string;
    era: string;
    culture: string;
    acquisitionDate: string;
    status: string;
    imageUrl: string;
    estimatedValueEur: number;
    description: string;
    provenance: string[];
}>;
export declare function remove(id: number): Promise<void>;
//# sourceMappingURL=dashboard.service.d.ts.map