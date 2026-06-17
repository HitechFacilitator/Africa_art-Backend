export declare function getThreads(userId: number): Promise<{
    id: string;
    clientName: string;
    clientRole: string;
    advisorName: string;
    subject: string;
    lastMessage: string;
    lastMessageTime: string;
    unreadCount: number;
    status: string;
    messages: {
        id: string;
        senderId: string;
        senderName: string;
        senderRole: string;
        text: string;
        timestamp: string;
        read: boolean;
    }[];
}[]>;
export declare function sendMessage(threadId: number, data: {
    senderId?: string;
    senderName?: string;
    senderRole?: string;
    userId?: number;
    text: string;
}): Promise<{
    id: string;
    senderId: string;
    senderName: string;
    senderRole: string;
    text: string;
    timestamp: string;
    read: boolean;
}>;
export declare function markThreadRead(threadId: number, userId: number): Promise<{
    success: boolean;
}>;
export declare function getTickets(userId: number, role: string): Promise<{
    id: string;
    clientName: string;
    clientRole: string;
    subject: string;
    description: string;
    category: string;
    status: string;
    priority: string;
    createdDate: string;
    lastUpdate: string;
    assignedTo: string;
    responses: {
        author: string;
        text: string;
        timestamp: string;
    }[];
}[]>;
export declare function createTicket(userId: number, data: {
    subject: string;
    description: string;
    priority?: string;
    category?: string;
    clientName?: string;
    clientRole?: string;
}): Promise<{
    id: string;
    clientName: string;
    clientRole: string;
    subject: string;
    description: string;
    category: string;
    status: string;
    priority: string;
    createdDate: string;
    lastUpdate: string;
    assignedTo: string;
    responses: never[];
}>;
export declare function updateTicketStatus(id: number, status: string): Promise<void>;
export declare function addTicketResponse(id: number, author: string, text: string): Promise<{
    author: string;
    text: string;
    timestamp: string;
}>;
//# sourceMappingURL=chat.service.d.ts.map