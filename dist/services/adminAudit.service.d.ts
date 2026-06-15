export declare function getAll(page: number, limit: number, skip: number): Promise<{
    data: {
        id: string;
        user: string;
        timestamp: string;
        action: string;
        txHash: string;
        signed: boolean;
    }[];
    total: number;
}>;
export declare function verify(id: number): Promise<void>;
export declare function verifyAll(): Promise<void>;
export declare function log(userId: number | null, action: string, resource: string, resourceId?: number, metadata?: Record<string, unknown>, txHash?: string): Promise<{
    userId: number | null;
    id: number;
    action: string;
    resource: string;
    resourceId: number | null;
    metadata: import("@prisma/client/runtime/client").JsonValue | null;
    txHash: string | null;
    signed: boolean;
    timestamp: Date;
}>;
//# sourceMappingURL=adminAudit.service.d.ts.map