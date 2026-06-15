export declare function getConsultations(advisorId?: number): Promise<{
    id: string;
    clientName: string;
    clientTier: string;
    topic: string;
    date: string;
    timeSlot: string;
    status: import("../generated/prisma/enums").ConsultationStatus;
    type: string;
    notes: string;
    followUpRequired: boolean;
}[]>;
export declare function getClients(advisorId: number): Promise<{
    id: string;
    name: string;
    email: string;
    tier: string;
    country: string;
    avatarColor: string;
    totalSpent: number;
    acquisitionsCount: number;
    satisfactionScore: number;
    lastContact: string;
    interests: any;
}[]>;
export declare function getPlacements(userId: number): Promise<{
    id: string;
    artworkTitle: string;
    artworkCulture: string;
    artworkEra: string;
    imageUrl: string;
    valuation: number;
    commission: number;
    clientName: string;
    status: string;
    notes: string;
    proposedDate: string;
}[]>;
export declare function getActivities(): Promise<{
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: string;
    icon: string;
}[]>;
//# sourceMappingURL=advisor.service.d.ts.map