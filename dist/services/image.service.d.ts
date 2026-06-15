export declare function upload(artworkId: number, files: Express.Multer.File[]): Promise<{
    id: number;
    createdAt: Date;
    isPrimary: boolean;
    filename: string;
    path: string;
    order: number;
    artworkId: number;
}[]>;
export declare function deleteOne(imageId: number): Promise<void>;
export declare function setPrimary(imageId: number): Promise<{
    id: number;
    createdAt: Date;
    isPrimary: boolean;
    filename: string;
    path: string;
    order: number;
    artworkId: number;
}>;
export declare function reorder(artworkId: number, imageIds: number[]): Promise<{
    id: number;
    createdAt: Date;
    isPrimary: boolean;
    filename: string;
    path: string;
    order: number;
    artworkId: number;
}[]>;
//# sourceMappingURL=image.service.d.ts.map