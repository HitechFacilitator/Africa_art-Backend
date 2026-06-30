import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Artist: "Artist";
    readonly Category: "Category";
    readonly Artwork: "Artwork";
    readonly ArtworkImage: "ArtworkImage";
    readonly ProvenanceRecord: "ProvenanceRecord";
    readonly ProvenanceChain: "ProvenanceChain";
    readonly Certificate: "Certificate";
    readonly Favorite: "Favorite";
    readonly Reservation: "Reservation";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Consultation: "Consultation";
    readonly PriceRequest: "PriceRequest";
    readonly AuditLog: "AuditLog";
    readonly Notification: "Notification";
    readonly AuctionLot: "AuctionLot";
    readonly Bid: "Bid";
    readonly Acquisition: "Acquisition";
    readonly AcquisitionProvenance: "AcquisitionProvenance";
    readonly Inquiry: "Inquiry";
    readonly InquiryMessage: "InquiryMessage";
    readonly PorMessage: "PorMessage";
    readonly LogisticsShipment: "LogisticsShipment";
    readonly ShipmentUpdate: "ShipmentUpdate";
    readonly SecurityRecord: "SecurityRecord";
    readonly EscrowTransaction: "EscrowTransaction";
    readonly AdvisorClient: "AdvisorClient";
    readonly AdvisorPlacement: "AdvisorPlacement";
    readonly AdvisorActivity: "AdvisorActivity";
    readonly ChatThread: "ChatThread";
    readonly ChatMessage: "ChatMessage";
    readonly ChatThreadReadStatus: "ChatThreadReadStatus";
    readonly SupportTicket: "SupportTicket";
    readonly TicketResponse: "TicketResponse";
    readonly MemberApplication: "MemberApplication";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly role: "role";
    readonly status: "status";
    readonly avatar: "avatar";
    readonly institution: "institution";
    readonly country: "country";
    readonly tier: "tier";
    readonly phone: "phone";
    readonly acceptTerms: "acceptTerms";
    readonly acceptGdpr: "acceptGdpr";
    readonly currency: "currency";
    readonly regionsOfInterest: "regionsOfInterest";
    readonly twoFactorEnabled: "twoFactorEnabled";
    readonly emailVerified: "emailVerified";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ArtistScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly biography: "biography";
    readonly nationality: "nationality";
    readonly birthDate: "birthDate";
    readonly deathDate: "deathDate";
    readonly photo: "photo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const ArtworkScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly origin: "origin";
    readonly region: "region";
    readonly tribe: "tribe";
    readonly era: "era";
    readonly historicalPeriod: "historicalPeriod";
    readonly material: "material";
    readonly dimensions: "dimensions";
    readonly weight: "weight";
    readonly condition: "condition";
    readonly availability: "availability";
    readonly price: "price";
    readonly isPOR: "isPOR";
    readonly imageUrl: "imageUrl";
    readonly blurDataURL: "blurDataURL";
    readonly scarcityIndex: "scarcityIndex";
    readonly preservationStatus: "preservationStatus";
    readonly appreciationRate: "appreciationRate";
    readonly isHero: "isHero";
    readonly historicalStory: "historicalStory";
    readonly investmentThesis: "investmentThesis";
    readonly estimatedValue: "estimatedValue";
    readonly historicalCagr: "historicalCagr";
    readonly yieldIndex: "yieldIndex";
    readonly tier: "tier";
    readonly artworkStatus: "artworkStatus";
    readonly provenanceHash: "provenanceHash";
    readonly acquiredYear: "acquiredYear";
    readonly acquiredMethod: "acquiredMethod";
    readonly artistId: "artistId";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ArtworkScalarFieldEnum = (typeof ArtworkScalarFieldEnum)[keyof typeof ArtworkScalarFieldEnum];
export declare const ArtworkImageScalarFieldEnum: {
    readonly id: "id";
    readonly filename: "filename";
    readonly path: "path";
    readonly isPrimary: "isPrimary";
    readonly order: "order";
    readonly artworkId: "artworkId";
    readonly createdAt: "createdAt";
};
export type ArtworkImageScalarFieldEnum = (typeof ArtworkImageScalarFieldEnum)[keyof typeof ArtworkImageScalarFieldEnum];
export declare const ProvenanceRecordScalarFieldEnum: {
    readonly id: "id";
    readonly previousOwner: "previousOwner";
    readonly acquisitionDate: "acquisitionDate";
    readonly transferDate: "transferDate";
    readonly notes: "notes";
    readonly artworkId: "artworkId";
    readonly createdAt: "createdAt";
};
export type ProvenanceRecordScalarFieldEnum = (typeof ProvenanceRecordScalarFieldEnum)[keyof typeof ProvenanceRecordScalarFieldEnum];
export declare const ProvenanceChainScalarFieldEnum: {
    readonly id: "id";
    readonly artworkId: "artworkId";
    readonly entry: "entry";
    readonly createdAt: "createdAt";
};
export type ProvenanceChainScalarFieldEnum = (typeof ProvenanceChainScalarFieldEnum)[keyof typeof ProvenanceChainScalarFieldEnum];
export declare const CertificateScalarFieldEnum: {
    readonly id: "id";
    readonly certificateNumber: "certificateNumber";
    readonly title: "title";
    readonly filename: "filename";
    readonly path: "path";
    readonly issuedDate: "issuedDate";
    readonly expiryDate: "expiryDate";
    readonly isValid: "isValid";
    readonly blockchainHash: "blockchainHash";
    readonly status: "status";
    readonly authenticationLevel: "authenticationLevel";
    readonly lastVerified: "lastVerified";
    readonly certifyingBody: "certifyingBody";
    readonly artworkId: "artworkId";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum];
export declare const FavoriteScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly artworkId: "artworkId";
    readonly createdAt: "createdAt";
};
export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];
export declare const ReservationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly artworkId: "artworkId";
    readonly status: "status";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly status: "status";
    readonly totalAmount: "totalAmount";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly artworkId: "artworkId";
    readonly price: "price";
    readonly createdAt: "createdAt";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const ConsultationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly advisorId: "advisorId";
    readonly expertName: "expertName";
    readonly expertTitle: "expertTitle";
    readonly expertAvatar: "expertAvatar";
    readonly type: "type";
    readonly status: "status";
    readonly date: "date";
    readonly timeSlot: "timeSlot";
    readonly topic: "topic";
    readonly notes: "notes";
    readonly rejectionReason: "rejectionReason";
    readonly clientName: "clientName";
    readonly clientEmail: "clientEmail";
    readonly currentCollection: "currentCollection";
    readonly meetingFormat: "meetingFormat";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConsultationScalarFieldEnum = (typeof ConsultationScalarFieldEnum)[keyof typeof ConsultationScalarFieldEnum];
export declare const PriceRequestScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly artworkId: "artworkId";
    readonly message: "message";
    readonly status: "status";
    readonly response: "response";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PriceRequestScalarFieldEnum = (typeof PriceRequestScalarFieldEnum)[keyof typeof PriceRequestScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly resource: "resource";
    readonly resourceId: "resourceId";
    readonly metadata: "metadata";
    readonly txHash: "txHash";
    readonly signed: "signed";
    readonly timestamp: "timestamp";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly isRead: "isRead";
    readonly type: "type";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const AuctionLotScalarFieldEnum: {
    readonly id: "id";
    readonly artworkId: "artworkId";
    readonly startingPrice: "startingPrice";
    readonly currentPrice: "currentPrice";
    readonly reservePrice: "reservePrice";
    readonly estimateMin: "estimateMin";
    readonly estimateMax: "estimateMax";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly status: "status";
    readonly watchers: "watchers";
    readonly featured: "featured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AuctionLotScalarFieldEnum = (typeof AuctionLotScalarFieldEnum)[keyof typeof AuctionLotScalarFieldEnum];
export declare const BidScalarFieldEnum: {
    readonly id: "id";
    readonly lotId: "lotId";
    readonly userId: "userId";
    readonly amount: "amount";
    readonly timestamp: "timestamp";
    readonly createdAt: "createdAt";
};
export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum];
export declare const AcquisitionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly era: "era";
    readonly culture: "culture";
    readonly acquisitionDate: "acquisitionDate";
    readonly status: "status";
    readonly imageUrl: "imageUrl";
    readonly estimatedValueEur: "estimatedValueEur";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AcquisitionScalarFieldEnum = (typeof AcquisitionScalarFieldEnum)[keyof typeof AcquisitionScalarFieldEnum];
export declare const AcquisitionProvenanceScalarFieldEnum: {
    readonly id: "id";
    readonly acquisitionId: "acquisitionId";
    readonly entry: "entry";
    readonly createdAt: "createdAt";
};
export type AcquisitionProvenanceScalarFieldEnum = (typeof AcquisitionProvenanceScalarFieldEnum)[keyof typeof AcquisitionProvenanceScalarFieldEnum];
export declare const InquiryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly artworkTitle: "artworkTitle";
    readonly artworkYear: "artworkYear";
    readonly imageUrl: "imageUrl";
    readonly status: "status";
    readonly date: "date";
    readonly category: "category";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum];
export declare const InquiryMessageScalarFieldEnum: {
    readonly id: "id";
    readonly inquiryId: "inquiryId";
    readonly sender: "sender";
    readonly text: "text";
    readonly timestamp: "timestamp";
    readonly createdAt: "createdAt";
};
export type InquiryMessageScalarFieldEnum = (typeof InquiryMessageScalarFieldEnum)[keyof typeof InquiryMessageScalarFieldEnum];
export declare const PorMessageScalarFieldEnum: {
    readonly id: "id";
    readonly porId: "porId";
    readonly sender: "sender";
    readonly senderId: "senderId";
    readonly text: "text";
    readonly timestamp: "timestamp";
    readonly createdAt: "createdAt";
};
export type PorMessageScalarFieldEnum = (typeof PorMessageScalarFieldEnum)[keyof typeof PorMessageScalarFieldEnum];
export declare const LogisticsShipmentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly artworkTitle: "artworkTitle";
    readonly carrier: "carrier";
    readonly status: "status";
    readonly estimatedDeliveryDate: "estimatedDeliveryDate";
    readonly securityTier: "securityTier";
    readonly insuranceCoverage: "insuranceCoverage";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LogisticsShipmentScalarFieldEnum = (typeof LogisticsShipmentScalarFieldEnum)[keyof typeof LogisticsShipmentScalarFieldEnum];
export declare const ShipmentUpdateScalarFieldEnum: {
    readonly id: "id";
    readonly shipmentId: "shipmentId";
    readonly date: "date";
    readonly status: "status";
    readonly location: "location";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type ShipmentUpdateScalarFieldEnum = (typeof ShipmentUpdateScalarFieldEnum)[keyof typeof ShipmentUpdateScalarFieldEnum];
export declare const SecurityRecordScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly artworkTitle: "artworkTitle";
    readonly vaultLocation: "vaultLocation";
    readonly fingerprintId: "fingerprintId";
    readonly smartContractAddress: "smartContractAddress";
    readonly lastInspectionDate: "lastInspectionDate";
    readonly temperatureHumidity: "temperatureHumidity";
    readonly insurancePolicyNumber: "insurancePolicyNumber";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SecurityRecordScalarFieldEnum = (typeof SecurityRecordScalarFieldEnum)[keyof typeof SecurityRecordScalarFieldEnum];
export declare const EscrowTransactionScalarFieldEnum: {
    readonly id: "id";
    readonly artworkTitle: "artworkTitle";
    readonly buyerName: "buyerName";
    readonly sellerName: "sellerName";
    readonly amount: "amount";
    readonly status: "status";
    readonly notes: "notes";
    readonly createdDate: "createdDate";
    readonly updatedAt: "updatedAt";
};
export type EscrowTransactionScalarFieldEnum = (typeof EscrowTransactionScalarFieldEnum)[keyof typeof EscrowTransactionScalarFieldEnum];
export declare const AdvisorClientScalarFieldEnum: {
    readonly id: "id";
    readonly advisorId: "advisorId";
    readonly name: "name";
    readonly email: "email";
    readonly country: "country";
    readonly tier: "tier";
    readonly avatarColor: "avatarColor";
    readonly totalSpent: "totalSpent";
    readonly acquisitionsCount: "acquisitionsCount";
    readonly satisfactionScore: "satisfactionScore";
    readonly lastContact: "lastContact";
    readonly interests: "interests";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdvisorClientScalarFieldEnum = (typeof AdvisorClientScalarFieldEnum)[keyof typeof AdvisorClientScalarFieldEnum];
export declare const AdvisorPlacementScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly artworkTitle: "artworkTitle";
    readonly artworkCulture: "artworkCulture";
    readonly artworkEra: "artworkEra";
    readonly imageUrl: "imageUrl";
    readonly valuation: "valuation";
    readonly commission: "commission";
    readonly clientName: "clientName";
    readonly status: "status";
    readonly notes: "notes";
    readonly proposedDate: "proposedDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdvisorPlacementScalarFieldEnum = (typeof AdvisorPlacementScalarFieldEnum)[keyof typeof AdvisorPlacementScalarFieldEnum];
export declare const AdvisorActivityScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly title: "title";
    readonly description: "description";
    readonly timestamp: "timestamp";
    readonly icon: "icon";
    readonly createdAt: "createdAt";
};
export type AdvisorActivityScalarFieldEnum = (typeof AdvisorActivityScalarFieldEnum)[keyof typeof AdvisorActivityScalarFieldEnum];
export declare const ChatThreadScalarFieldEnum: {
    readonly id: "id";
    readonly clientName: "clientName";
    readonly clientRole: "clientRole";
    readonly advisorName: "advisorName";
    readonly clientUserId: "clientUserId";
    readonly advisorUserId: "advisorUserId";
    readonly subject: "subject";
    readonly status: "status";
    readonly lastMessage: "lastMessage";
    readonly lastMessageTime: "lastMessageTime";
    readonly unreadCount: "unreadCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChatThreadScalarFieldEnum = (typeof ChatThreadScalarFieldEnum)[keyof typeof ChatThreadScalarFieldEnum];
export declare const ChatMessageScalarFieldEnum: {
    readonly id: "id";
    readonly threadId: "threadId";
    readonly userId: "userId";
    readonly senderId: "senderId";
    readonly senderName: "senderName";
    readonly senderRole: "senderRole";
    readonly text: "text";
    readonly timestamp: "timestamp";
    readonly read: "read";
    readonly createdAt: "createdAt";
};
export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum];
export declare const ChatThreadReadStatusScalarFieldEnum: {
    readonly id: "id";
    readonly threadId: "threadId";
    readonly userId: "userId";
    readonly lastReadId: "lastReadId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChatThreadReadStatusScalarFieldEnum = (typeof ChatThreadReadStatusScalarFieldEnum)[keyof typeof ChatThreadReadStatusScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly clientName: "clientName";
    readonly clientRole: "clientRole";
    readonly subject: "subject";
    readonly description: "description";
    readonly category: "category";
    readonly status: "status";
    readonly priority: "priority";
    readonly createdDate: "createdDate";
    readonly lastUpdate: "lastUpdate";
    readonly assignedTo: "assignedTo";
    readonly assignedToId: "assignedToId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const TicketResponseScalarFieldEnum: {
    readonly id: "id";
    readonly ticketId: "ticketId";
    readonly author: "author";
    readonly text: "text";
    readonly timestamp: "timestamp";
    readonly createdAt: "createdAt";
};
export type TicketResponseScalarFieldEnum = (typeof TicketResponseScalarFieldEnum)[keyof typeof TicketResponseScalarFieldEnum];
export declare const MemberApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly fullName: "fullName";
    readonly email: "email";
    readonly organization: "organization";
    readonly collectorProfile: "collectorProfile";
    readonly message: "message";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MemberApplicationScalarFieldEnum = (typeof MemberApplicationScalarFieldEnum)[keyof typeof MemberApplicationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly avatar: "avatar";
    readonly institution: "institution";
    readonly country: "country";
    readonly tier: "tier";
    readonly phone: "phone";
    readonly currency: "currency";
    readonly regionsOfInterest: "regionsOfInterest";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const ArtistOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly biography: "biography";
    readonly nationality: "nationality";
    readonly photo: "photo";
};
export type ArtistOrderByRelevanceFieldEnum = (typeof ArtistOrderByRelevanceFieldEnum)[keyof typeof ArtistOrderByRelevanceFieldEnum];
export declare const CategoryOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
    readonly image: "image";
};
export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum];
export declare const ArtworkOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly description: "description";
    readonly origin: "origin";
    readonly region: "region";
    readonly tribe: "tribe";
    readonly era: "era";
    readonly historicalPeriod: "historicalPeriod";
    readonly material: "material";
    readonly dimensions: "dimensions";
    readonly weight: "weight";
    readonly condition: "condition";
    readonly imageUrl: "imageUrl";
    readonly blurDataURL: "blurDataURL";
    readonly preservationStatus: "preservationStatus";
    readonly appreciationRate: "appreciationRate";
    readonly historicalStory: "historicalStory";
    readonly investmentThesis: "investmentThesis";
    readonly tier: "tier";
    readonly artworkStatus: "artworkStatus";
    readonly provenanceHash: "provenanceHash";
    readonly acquiredMethod: "acquiredMethod";
};
export type ArtworkOrderByRelevanceFieldEnum = (typeof ArtworkOrderByRelevanceFieldEnum)[keyof typeof ArtworkOrderByRelevanceFieldEnum];
export declare const ArtworkImageOrderByRelevanceFieldEnum: {
    readonly filename: "filename";
    readonly path: "path";
};
export type ArtworkImageOrderByRelevanceFieldEnum = (typeof ArtworkImageOrderByRelevanceFieldEnum)[keyof typeof ArtworkImageOrderByRelevanceFieldEnum];
export declare const ProvenanceRecordOrderByRelevanceFieldEnum: {
    readonly previousOwner: "previousOwner";
    readonly notes: "notes";
};
export type ProvenanceRecordOrderByRelevanceFieldEnum = (typeof ProvenanceRecordOrderByRelevanceFieldEnum)[keyof typeof ProvenanceRecordOrderByRelevanceFieldEnum];
export declare const ProvenanceChainOrderByRelevanceFieldEnum: {
    readonly entry: "entry";
};
export type ProvenanceChainOrderByRelevanceFieldEnum = (typeof ProvenanceChainOrderByRelevanceFieldEnum)[keyof typeof ProvenanceChainOrderByRelevanceFieldEnum];
export declare const CertificateOrderByRelevanceFieldEnum: {
    readonly certificateNumber: "certificateNumber";
    readonly title: "title";
    readonly filename: "filename";
    readonly path: "path";
    readonly blockchainHash: "blockchainHash";
    readonly status: "status";
    readonly authenticationLevel: "authenticationLevel";
    readonly certifyingBody: "certifyingBody";
};
export type CertificateOrderByRelevanceFieldEnum = (typeof CertificateOrderByRelevanceFieldEnum)[keyof typeof CertificateOrderByRelevanceFieldEnum];
export declare const OrderOrderByRelevanceFieldEnum: {
    readonly notes: "notes";
};
export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum];
export declare const ConsultationOrderByRelevanceFieldEnum: {
    readonly expertName: "expertName";
    readonly expertTitle: "expertTitle";
    readonly expertAvatar: "expertAvatar";
    readonly timeSlot: "timeSlot";
    readonly topic: "topic";
    readonly notes: "notes";
    readonly rejectionReason: "rejectionReason";
    readonly clientName: "clientName";
    readonly clientEmail: "clientEmail";
    readonly currentCollection: "currentCollection";
    readonly meetingFormat: "meetingFormat";
};
export type ConsultationOrderByRelevanceFieldEnum = (typeof ConsultationOrderByRelevanceFieldEnum)[keyof typeof ConsultationOrderByRelevanceFieldEnum];
export declare const PriceRequestOrderByRelevanceFieldEnum: {
    readonly message: "message";
    readonly response: "response";
};
export type PriceRequestOrderByRelevanceFieldEnum = (typeof PriceRequestOrderByRelevanceFieldEnum)[keyof typeof PriceRequestOrderByRelevanceFieldEnum];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const AuditLogOrderByRelevanceFieldEnum: {
    readonly action: "action";
    readonly resource: "resource";
    readonly txHash: "txHash";
};
export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum];
export declare const NotificationOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly message: "message";
    readonly type: "type";
};
export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum];
export declare const AcquisitionOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly era: "era";
    readonly culture: "culture";
    readonly status: "status";
    readonly imageUrl: "imageUrl";
    readonly description: "description";
};
export type AcquisitionOrderByRelevanceFieldEnum = (typeof AcquisitionOrderByRelevanceFieldEnum)[keyof typeof AcquisitionOrderByRelevanceFieldEnum];
export declare const AcquisitionProvenanceOrderByRelevanceFieldEnum: {
    readonly entry: "entry";
};
export type AcquisitionProvenanceOrderByRelevanceFieldEnum = (typeof AcquisitionProvenanceOrderByRelevanceFieldEnum)[keyof typeof AcquisitionProvenanceOrderByRelevanceFieldEnum];
export declare const InquiryOrderByRelevanceFieldEnum: {
    readonly artworkTitle: "artworkTitle";
    readonly artworkYear: "artworkYear";
    readonly imageUrl: "imageUrl";
    readonly status: "status";
    readonly date: "date";
    readonly category: "category";
};
export type InquiryOrderByRelevanceFieldEnum = (typeof InquiryOrderByRelevanceFieldEnum)[keyof typeof InquiryOrderByRelevanceFieldEnum];
export declare const InquiryMessageOrderByRelevanceFieldEnum: {
    readonly sender: "sender";
    readonly text: "text";
    readonly timestamp: "timestamp";
};
export type InquiryMessageOrderByRelevanceFieldEnum = (typeof InquiryMessageOrderByRelevanceFieldEnum)[keyof typeof InquiryMessageOrderByRelevanceFieldEnum];
export declare const PorMessageOrderByRelevanceFieldEnum: {
    readonly sender: "sender";
    readonly text: "text";
    readonly timestamp: "timestamp";
};
export type PorMessageOrderByRelevanceFieldEnum = (typeof PorMessageOrderByRelevanceFieldEnum)[keyof typeof PorMessageOrderByRelevanceFieldEnum];
export declare const LogisticsShipmentOrderByRelevanceFieldEnum: {
    readonly artworkTitle: "artworkTitle";
    readonly carrier: "carrier";
    readonly status: "status";
    readonly estimatedDeliveryDate: "estimatedDeliveryDate";
    readonly securityTier: "securityTier";
    readonly insuranceCoverage: "insuranceCoverage";
};
export type LogisticsShipmentOrderByRelevanceFieldEnum = (typeof LogisticsShipmentOrderByRelevanceFieldEnum)[keyof typeof LogisticsShipmentOrderByRelevanceFieldEnum];
export declare const ShipmentUpdateOrderByRelevanceFieldEnum: {
    readonly date: "date";
    readonly status: "status";
    readonly location: "location";
    readonly description: "description";
};
export type ShipmentUpdateOrderByRelevanceFieldEnum = (typeof ShipmentUpdateOrderByRelevanceFieldEnum)[keyof typeof ShipmentUpdateOrderByRelevanceFieldEnum];
export declare const SecurityRecordOrderByRelevanceFieldEnum: {
    readonly artworkTitle: "artworkTitle";
    readonly vaultLocation: "vaultLocation";
    readonly fingerprintId: "fingerprintId";
    readonly smartContractAddress: "smartContractAddress";
    readonly lastInspectionDate: "lastInspectionDate";
    readonly temperatureHumidity: "temperatureHumidity";
    readonly insurancePolicyNumber: "insurancePolicyNumber";
};
export type SecurityRecordOrderByRelevanceFieldEnum = (typeof SecurityRecordOrderByRelevanceFieldEnum)[keyof typeof SecurityRecordOrderByRelevanceFieldEnum];
export declare const EscrowTransactionOrderByRelevanceFieldEnum: {
    readonly artworkTitle: "artworkTitle";
    readonly buyerName: "buyerName";
    readonly sellerName: "sellerName";
    readonly notes: "notes";
};
export type EscrowTransactionOrderByRelevanceFieldEnum = (typeof EscrowTransactionOrderByRelevanceFieldEnum)[keyof typeof EscrowTransactionOrderByRelevanceFieldEnum];
export declare const AdvisorClientOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly email: "email";
    readonly country: "country";
    readonly tier: "tier";
    readonly avatarColor: "avatarColor";
    readonly lastContact: "lastContact";
    readonly interests: "interests";
};
export type AdvisorClientOrderByRelevanceFieldEnum = (typeof AdvisorClientOrderByRelevanceFieldEnum)[keyof typeof AdvisorClientOrderByRelevanceFieldEnum];
export declare const AdvisorPlacementOrderByRelevanceFieldEnum: {
    readonly artworkTitle: "artworkTitle";
    readonly artworkCulture: "artworkCulture";
    readonly artworkEra: "artworkEra";
    readonly imageUrl: "imageUrl";
    readonly clientName: "clientName";
    readonly status: "status";
    readonly notes: "notes";
};
export type AdvisorPlacementOrderByRelevanceFieldEnum = (typeof AdvisorPlacementOrderByRelevanceFieldEnum)[keyof typeof AdvisorPlacementOrderByRelevanceFieldEnum];
export declare const AdvisorActivityOrderByRelevanceFieldEnum: {
    readonly type: "type";
    readonly title: "title";
    readonly description: "description";
    readonly timestamp: "timestamp";
    readonly icon: "icon";
};
export type AdvisorActivityOrderByRelevanceFieldEnum = (typeof AdvisorActivityOrderByRelevanceFieldEnum)[keyof typeof AdvisorActivityOrderByRelevanceFieldEnum];
export declare const ChatThreadOrderByRelevanceFieldEnum: {
    readonly clientName: "clientName";
    readonly clientRole: "clientRole";
    readonly advisorName: "advisorName";
    readonly subject: "subject";
    readonly status: "status";
    readonly lastMessage: "lastMessage";
    readonly lastMessageTime: "lastMessageTime";
};
export type ChatThreadOrderByRelevanceFieldEnum = (typeof ChatThreadOrderByRelevanceFieldEnum)[keyof typeof ChatThreadOrderByRelevanceFieldEnum];
export declare const ChatMessageOrderByRelevanceFieldEnum: {
    readonly senderName: "senderName";
    readonly senderRole: "senderRole";
    readonly text: "text";
    readonly timestamp: "timestamp";
};
export type ChatMessageOrderByRelevanceFieldEnum = (typeof ChatMessageOrderByRelevanceFieldEnum)[keyof typeof ChatMessageOrderByRelevanceFieldEnum];
export declare const SupportTicketOrderByRelevanceFieldEnum: {
    readonly clientName: "clientName";
    readonly clientRole: "clientRole";
    readonly subject: "subject";
    readonly description: "description";
    readonly category: "category";
    readonly status: "status";
    readonly priority: "priority";
    readonly createdDate: "createdDate";
    readonly lastUpdate: "lastUpdate";
    readonly assignedTo: "assignedTo";
};
export type SupportTicketOrderByRelevanceFieldEnum = (typeof SupportTicketOrderByRelevanceFieldEnum)[keyof typeof SupportTicketOrderByRelevanceFieldEnum];
export declare const TicketResponseOrderByRelevanceFieldEnum: {
    readonly author: "author";
    readonly text: "text";
    readonly timestamp: "timestamp";
};
export type TicketResponseOrderByRelevanceFieldEnum = (typeof TicketResponseOrderByRelevanceFieldEnum)[keyof typeof TicketResponseOrderByRelevanceFieldEnum];
export declare const MemberApplicationOrderByRelevanceFieldEnum: {
    readonly fullName: "fullName";
    readonly email: "email";
    readonly organization: "organization";
    readonly collectorProfile: "collectorProfile";
    readonly message: "message";
    readonly status: "status";
};
export type MemberApplicationOrderByRelevanceFieldEnum = (typeof MemberApplicationOrderByRelevanceFieldEnum)[keyof typeof MemberApplicationOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map