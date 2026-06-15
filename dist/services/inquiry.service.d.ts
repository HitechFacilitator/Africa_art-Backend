export declare function getByUser(userId: number): Promise<{
    id: string;
    artworkTitle: string;
    artworkYear: string;
    imageUrl: string;
    status: string;
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
    date: string;
    messages: {
        sender: string;
        text: string;
        timestamp: string;
    }[];
}>;
export declare function addMessage(inquiryId: number, sender: string, text: string): Promise<{
    sender: string;
    text: string;
    timestamp: string;
}>;
//# sourceMappingURL=inquiry.service.d.ts.map