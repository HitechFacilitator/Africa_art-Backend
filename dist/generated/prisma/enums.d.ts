export declare const Role: {
    readonly VISITOR: "VISITOR";
    readonly COLLECTOR: "COLLECTOR";
    readonly PRESTIGE: "PRESTIGE";
    readonly ADVISOR: "ADVISOR";
    readonly ADMIN: "ADMIN";
    readonly SUPPORT: "SUPPORT";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly PENDING: "PENDING";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const Availability: {
    readonly AVAILABLE: "AVAILABLE";
    readonly RESERVED: "RESERVED";
    readonly SOLD: "SOLD";
    readonly ON_AUCTION: "ON_AUCTION";
};
export type Availability = (typeof Availability)[keyof typeof Availability];
export declare const ReservationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly PROCESSING: "PROCESSING";
    readonly SHIPPED: "SHIPPED";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const ConsultationType: {
    readonly ACQUISITION_ADVICE: "ACQUISITION_ADVICE";
    readonly INVESTMENT_ADVICE: "INVESTMENT_ADVICE";
    readonly COLLECTION_REVIEW: "COLLECTION_REVIEW";
    readonly VIDEO: "VIDEO";
    readonly PHONE: "PHONE";
    readonly IN_PERSON: "IN_PERSON";
};
export type ConsultationType = (typeof ConsultationType)[keyof typeof ConsultationType];
export declare const ConsultationStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly REJECTED: "REJECTED";
};
export type ConsultationStatus = (typeof ConsultationStatus)[keyof typeof ConsultationStatus];
export declare const PORStatus: {
    readonly PENDING: "PENDING";
    readonly IN_DISCUSSION: "IN_DISCUSSION";
    readonly CLOSED: "CLOSED";
};
export type PORStatus = (typeof PORStatus)[keyof typeof PORStatus];
export declare const AuctionStatus: {
    readonly UPCOMING: "UPCOMING";
    readonly LIVE: "LIVE";
    readonly ENDED: "ENDED";
};
export type AuctionStatus = (typeof AuctionStatus)[keyof typeof AuctionStatus];
export declare const InquiryStatus: {
    readonly RECEIVED: "RECEIVED";
    readonly IN_DISCUSSION: "IN_DISCUSSION";
    readonly OFFER_PRESENTED: "OFFER_PRESENTED";
    readonly COMPLETED: "COMPLETED";
    readonly ARCHIVED: "ARCHIVED";
};
export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus];
export declare const LogisticsStatus: {
    readonly ORIGIN_HUB: "ORIGIN_HUB";
    readonly CUSTOMS_CLEARANCE: "CUSTOMS_CLEARANCE";
    readonly INTERNATIONAL_TRANSIT: "INTERNATIONAL_TRANSIT";
    readonly LOCAL_DELIVERY: "LOCAL_DELIVERY";
    readonly DELIVERED: "DELIVERED";
};
export type LogisticsStatus = (typeof LogisticsStatus)[keyof typeof LogisticsStatus];
export declare const EscrowStatus: {
    readonly HELD: "HELD";
    readonly RELEASED: "RELEASED";
    readonly DISPUTED: "DISPUTED";
    readonly REFUNDED: "REFUNDED";
};
export type EscrowStatus = (typeof EscrowStatus)[keyof typeof EscrowStatus];
export declare const AMLStatus: {
    readonly VERIFIED: "VERIFIED";
    readonly PENDING: "PENDING";
    readonly UNVERIFIED: "UNVERIFIED";
};
export type AMLStatus = (typeof AMLStatus)[keyof typeof AMLStatus];
export declare const TicketStatus: {
    readonly OPEN: "OPEN";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
export declare const TicketPriority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority];
//# sourceMappingURL=enums.d.ts.map