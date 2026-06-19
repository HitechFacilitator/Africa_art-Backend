import { PORStatus } from "../generated/prisma/client";
export declare function getByArtwork(artworkId: number): Promise<({
    user: {
        id: number;
        email: string;
        name: string;
    };
    artwork: {
        id: number;
        title: string;
    };
    messages: {
        id: number;
        createdAt: Date;
        porId: number;
        sender: string;
        senderId: number | null;
        text: string;
        timestamp: string | null;
    }[];
} & {
    userId: number;
    id: number;
    status: PORStatus;
    createdAt: Date;
    updatedAt: Date;
    artworkId: number;
    message: string | null;
    response: string | null;
})[]>;
export declare function getByUser(userId: number): Promise<{
    id: string;
    artworkId: number;
    message: string;
    status: PORStatus;
    response: string;
    artwork: {
        id: number;
        title: string;
        images: {
            id: number;
            createdAt: Date;
            isPrimary: boolean;
            filename: string;
            path: string;
            order: number;
            artworkId: number;
        }[];
    } | undefined;
    messages: {
        id: number;
        sender: string;
        senderId: number | null;
        text: string;
        timestamp: string;
    }[];
    createdAt: string;
}[]>;
export declare function getAll(page: number, limit: number, skip: number): Promise<{
    data: ({
        user: {
            id: number;
            email: string;
            name: string;
        };
        artwork: {
            id: number;
            title: string;
        };
        messages: {
            id: number;
            createdAt: Date;
            porId: number;
            sender: string;
            senderId: number | null;
            text: string;
            timestamp: string | null;
        }[];
    } & {
        userId: number;
        id: number;
        status: PORStatus;
        createdAt: Date;
        updatedAt: Date;
        artworkId: number;
        message: string | null;
        response: string | null;
    })[];
    total: number;
}>;
export declare function create(userId: number, artworkId: number, message?: string): Promise<{
    userId: number;
    id: number;
    status: PORStatus;
    createdAt: Date;
    updatedAt: Date;
    artworkId: number;
    message: string | null;
    response: string | null;
}>;
export declare function respond(id: number, response: string): Promise<{
    userId: number;
    id: number;
    status: PORStatus;
    createdAt: Date;
    updatedAt: Date;
    artworkId: number;
    message: string | null;
    response: string | null;
}>;
export declare function changeStatus(id: number, newStatus: string): Promise<{
    userId: number;
    id: number;
    status: PORStatus;
    createdAt: Date;
    updatedAt: Date;
    artworkId: number;
    message: string | null;
    response: string | null;
}>;
export declare function close(id: number): Promise<{
    userId: number;
    id: number;
    status: PORStatus;
    createdAt: Date;
    updatedAt: Date;
    artworkId: number;
    message: string | null;
    response: string | null;
}>;
export declare function addMessage(porId: number, sender: string, senderId: number, text: string): Promise<{
    id: number;
    sender: string;
    senderId: number | null;
    text: string;
    timestamp: string;
}>;
//# sourceMappingURL=por.service.d.ts.map