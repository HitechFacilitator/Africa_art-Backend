import { Role } from "../generated/prisma/client";
export interface TokenPayload {
    userId: number;
    role: Role;
}
export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    message?: string;
}
//# sourceMappingURL=index.d.ts.map