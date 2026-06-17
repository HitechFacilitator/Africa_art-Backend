import { ConsultationStatus, ConsultationType } from "../generated/prisma/client";
export declare function getByUser(userId: number): Promise<{
    id: string;
    expertName: string;
    expertTitle: string;
    expertAvatar: string;
    date: string;
    timeSlot: string;
    topic: string;
    status: ConsultationStatus;
    notes: string;
}[]>;
export declare function getAll(page: number, limit: number, skip: number): Promise<{
    data: ({
        user: {
            id: number;
            email: string;
            name: string;
        };
    } & {
        userId: number;
        id: number;
        status: ConsultationStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        advisorId: number | null;
        expertName: string | null;
        expertTitle: string | null;
        expertAvatar: string | null;
        type: ConsultationType;
        date: Date;
        timeSlot: string | null;
        topic: string | null;
    })[];
    total: number;
}>;
export declare function create(userId: number, data: {
    type: string;
    date: string;
    notes?: string;
    topic?: string;
    timeSlot?: string;
    expertName?: string;
    expertTitle?: string;
    expertAvatar?: string;
}): Promise<{
    userId: number;
    id: number;
    status: ConsultationStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    advisorId: number | null;
    expertName: string | null;
    expertTitle: string | null;
    expertAvatar: string | null;
    type: ConsultationType;
    date: Date;
    timeSlot: string | null;
    topic: string | null;
}>;
export declare function confirm(id: number, advisorId: number): Promise<{
    userId: number;
    id: number;
    status: ConsultationStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    advisorId: number | null;
    expertName: string | null;
    expertTitle: string | null;
    expertAvatar: string | null;
    type: ConsultationType;
    date: Date;
    timeSlot: string | null;
    topic: string | null;
}>;
export declare function complete(id: number): Promise<{
    userId: number;
    id: number;
    status: ConsultationStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    advisorId: number | null;
    expertName: string | null;
    expertTitle: string | null;
    expertAvatar: string | null;
    type: ConsultationType;
    date: Date;
    timeSlot: string | null;
    topic: string | null;
}>;
export declare function cancel(id: number): Promise<{
    userId: number;
    id: number;
    status: ConsultationStatus;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    advisorId: number | null;
    expertName: string | null;
    expertTitle: string | null;
    expertAvatar: string | null;
    type: ConsultationType;
    date: Date;
    timeSlot: string | null;
    topic: string | null;
}>;
//# sourceMappingURL=consultation.service.d.ts.map