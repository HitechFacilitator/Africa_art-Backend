export declare function getByArtwork(artworkId: number): Promise<{
    id: number;
    createdAt: Date;
    artworkId: number;
    previousOwner: string;
    acquisitionDate: Date | null;
    transferDate: Date | null;
    notes: string | null;
}[]>;
export declare function create(artworkId: number, data: {
    previousOwner: string;
    acquisitionDate?: string;
    transferDate?: string;
    notes?: string;
}): Promise<{
    id: number;
    createdAt: Date;
    artworkId: number;
    previousOwner: string;
    acquisitionDate: Date | null;
    transferDate: Date | null;
    notes: string | null;
}>;
export declare function deleteOne(id: number): Promise<void>;
//# sourceMappingURL=provenance.service.d.ts.map