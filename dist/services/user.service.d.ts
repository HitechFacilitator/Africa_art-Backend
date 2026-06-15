import { Role } from "../generated/prisma/client";
export declare function getAll(page: number, limit: number, skip: number): Promise<{
    data: {
        id: string;
        role: string;
        email: string;
        name: string;
        avatar: string | null;
        institution: string | null;
        country: string | null;
        tier: string | null;
        emailVerified: boolean;
        createdAt: Date;
    }[];
    total: number;
}>;
export declare function getById(id: number): Promise<{
    id: string;
    email: string;
    name: string;
    role: string;
    avatar: string | undefined;
    institution: string | undefined;
}>;
export declare function update(id: number, data: {
    name?: string;
    avatar?: string;
    institution?: string;
    country?: string;
    tier?: string;
}): Promise<{
    role: Role;
    id: number;
    email: string;
    name: string;
    avatar: string | null;
    institution: string | null;
}>;
export declare function deleteOne(id: number): Promise<void>;
export declare function updateRole(id: number, role: Role): Promise<{
    role: Role;
    id: number;
    email: string;
    name: string;
}>;
//# sourceMappingURL=user.service.d.ts.map