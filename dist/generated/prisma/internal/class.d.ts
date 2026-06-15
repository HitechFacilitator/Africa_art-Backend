import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Artists
      * const artists = await prisma.artist.findMany()
      * ```
      */
    get artist(): Prisma.ArtistDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.artwork`: Exposes CRUD operations for the **Artwork** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Artworks
      * const artworks = await prisma.artwork.findMany()
      * ```
      */
    get artwork(): Prisma.ArtworkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.artworkImage`: Exposes CRUD operations for the **ArtworkImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ArtworkImages
      * const artworkImages = await prisma.artworkImage.findMany()
      * ```
      */
    get artworkImage(): Prisma.ArtworkImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.provenanceRecord`: Exposes CRUD operations for the **ProvenanceRecord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProvenanceRecords
      * const provenanceRecords = await prisma.provenanceRecord.findMany()
      * ```
      */
    get provenanceRecord(): Prisma.ProvenanceRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.provenanceChain`: Exposes CRUD operations for the **ProvenanceChain** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProvenanceChains
      * const provenanceChains = await prisma.provenanceChain.findMany()
      * ```
      */
    get provenanceChain(): Prisma.ProvenanceChainDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Certificates
      * const certificates = await prisma.certificate.findMany()
      * ```
      */
    get certificate(): Prisma.CertificateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Favorites
      * const favorites = await prisma.favorite.findMany()
      * ```
      */
    get favorite(): Prisma.FavoriteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reservations
      * const reservations = await prisma.reservation.findMany()
      * ```
      */
    get reservation(): Prisma.ReservationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderItems
      * const orderItems = await prisma.orderItem.findMany()
      * ```
      */
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.consultation`: Exposes CRUD operations for the **Consultation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Consultations
      * const consultations = await prisma.consultation.findMany()
      * ```
      */
    get consultation(): Prisma.ConsultationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.priceRequest`: Exposes CRUD operations for the **PriceRequest** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PriceRequests
      * const priceRequests = await prisma.priceRequest.findMany()
      * ```
      */
    get priceRequest(): Prisma.PriceRequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auctionLot`: Exposes CRUD operations for the **AuctionLot** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuctionLots
      * const auctionLots = await prisma.auctionLot.findMany()
      * ```
      */
    get auctionLot(): Prisma.AuctionLotDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Bids
      * const bids = await prisma.bid.findMany()
      * ```
      */
    get bid(): Prisma.BidDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.acquisition`: Exposes CRUD operations for the **Acquisition** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Acquisitions
      * const acquisitions = await prisma.acquisition.findMany()
      * ```
      */
    get acquisition(): Prisma.AcquisitionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.acquisitionProvenance`: Exposes CRUD operations for the **AcquisitionProvenance** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AcquisitionProvenances
      * const acquisitionProvenances = await prisma.acquisitionProvenance.findMany()
      * ```
      */
    get acquisitionProvenance(): Prisma.AcquisitionProvenanceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Inquiries
      * const inquiries = await prisma.inquiry.findMany()
      * ```
      */
    get inquiry(): Prisma.InquiryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inquiryMessage`: Exposes CRUD operations for the **InquiryMessage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more InquiryMessages
      * const inquiryMessages = await prisma.inquiryMessage.findMany()
      * ```
      */
    get inquiryMessage(): Prisma.InquiryMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.logisticsShipment`: Exposes CRUD operations for the **LogisticsShipment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LogisticsShipments
      * const logisticsShipments = await prisma.logisticsShipment.findMany()
      * ```
      */
    get logisticsShipment(): Prisma.LogisticsShipmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shipmentUpdate`: Exposes CRUD operations for the **ShipmentUpdate** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShipmentUpdates
      * const shipmentUpdates = await prisma.shipmentUpdate.findMany()
      * ```
      */
    get shipmentUpdate(): Prisma.ShipmentUpdateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.securityRecord`: Exposes CRUD operations for the **SecurityRecord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SecurityRecords
      * const securityRecords = await prisma.securityRecord.findMany()
      * ```
      */
    get securityRecord(): Prisma.SecurityRecordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.escrowTransaction`: Exposes CRUD operations for the **EscrowTransaction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EscrowTransactions
      * const escrowTransactions = await prisma.escrowTransaction.findMany()
      * ```
      */
    get escrowTransaction(): Prisma.EscrowTransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.advisorClient`: Exposes CRUD operations for the **AdvisorClient** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AdvisorClients
      * const advisorClients = await prisma.advisorClient.findMany()
      * ```
      */
    get advisorClient(): Prisma.AdvisorClientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.advisorPlacement`: Exposes CRUD operations for the **AdvisorPlacement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AdvisorPlacements
      * const advisorPlacements = await prisma.advisorPlacement.findMany()
      * ```
      */
    get advisorPlacement(): Prisma.AdvisorPlacementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.advisorActivity`: Exposes CRUD operations for the **AdvisorActivity** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AdvisorActivities
      * const advisorActivities = await prisma.advisorActivity.findMany()
      * ```
      */
    get advisorActivity(): Prisma.AdvisorActivityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chatThread`: Exposes CRUD operations for the **ChatThread** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ChatThreads
      * const chatThreads = await prisma.chatThread.findMany()
      * ```
      */
    get chatThread(): Prisma.ChatThreadDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ChatMessages
      * const chatMessages = await prisma.chatMessage.findMany()
      * ```
      */
    get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupportTickets
      * const supportTickets = await prisma.supportTicket.findMany()
      * ```
      */
    get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticketResponse`: Exposes CRUD operations for the **TicketResponse** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TicketResponses
      * const ticketResponses = await prisma.ticketResponse.findMany()
      * ```
      */
    get ticketResponse(): Prisma.TicketResponseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.memberApplication`: Exposes CRUD operations for the **MemberApplication** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MemberApplications
      * const memberApplications = await prisma.memberApplication.findMany()
      * ```
      */
    get memberApplication(): Prisma.MemberApplicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map