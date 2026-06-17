export declare function getAll(page: number, limit: number, skip: number): Promise<{
    data: {
        id: string;
        artworkTitle: string;
        buyerName: string;
        sellerName: string;
        amount: number;
        status: import("../generated/prisma/enums").EscrowStatus;
        createdDate: string;
        notes: string;
    }[];
    total: number;
}>;
export declare function release(id: number): Promise<{
    id: number;
    status: import("../generated/prisma/enums").EscrowStatus;
    updatedAt: Date;
    notes: string | null;
    artworkTitle: string;
    buyerName: string | null;
    sellerName: string | null;
    amount: import("@prisma/client-runtime-utils").Decimal;
    createdDate: Date;
}>;
export declare function dispute(id: number): Promise<{
    id: number;
    status: import("../generated/prisma/enums").EscrowStatus;
    updatedAt: Date;
    notes: string | null;
    artworkTitle: string;
    buyerName: string | null;
    sellerName: string | null;
    amount: import("@prisma/client-runtime-utils").Decimal;
    createdDate: Date;
}>;
export declare function refund(id: number): Promise<{
    id: number;
    status: import("../generated/prisma/enums").EscrowStatus;
    updatedAt: Date;
    notes: string | null;
    artworkTitle: string;
    buyerName: string | null;
    sellerName: string | null;
    amount: import("@prisma/client-runtime-utils").Decimal;
    createdDate: Date;
}>;
//# sourceMappingURL=escrow.service.d.ts.map