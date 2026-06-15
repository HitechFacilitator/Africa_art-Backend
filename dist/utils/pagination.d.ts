export interface PaginationParams {
    page: number;
    limit: number;
    skip: number;
}
export declare function getPaginationParams(query: {
    page?: string;
    limit?: string;
}): PaginationParams;
export interface PaginatedResult<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
//# sourceMappingURL=pagination.d.ts.map