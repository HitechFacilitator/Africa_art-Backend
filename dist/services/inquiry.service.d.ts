export declare function getByUser(userId: number): Promise<{
    id: string;
    artworkTitle: string;
    artworkYear: string;
    imageUrl: string;
    status: string;
    category: string;
    date: string;
    messages: {
        sender: string;
        text: string;
        timestamp: string;
    }[];
}[]>;
export declare function create(userId: number, data: {
    artworkTitle: string;
    artworkYear?: string;
    imageUrl?: string;
    status?: string;
    category?: string;
    messages?: {
        sender: string;
        text: string;
        timestamp?: string;
    }[];
}): Promise<{
    id: string;
    artworkTitle: string;
    artworkYear: string;
    imageUrl: string;
    status: string;
    category: string;
    date: string;
    messages: {
        sender: string;
        text: string;
        timestamp: string;
    }[];
    existing: boolean;
} | {
    id: string;
    artworkTitle: string;
    artworkYear: string;
    imageUrl: string;
    status: string;
    category: string;
    date: string;
    messages: {
        sender: string;
        text: string;
        timestamp: string;
    }[];
    existing?: undefined;
}>;
export declare function addMessage(inquiryId: number, sender: string, text: string): Promise<{
    sender: string;
    text: string;
    timestamp: string;
}>;
//# sourceMappingURL=inquiry.service.d.ts.map