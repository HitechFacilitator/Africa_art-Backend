import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "artist" | "category" | "artwork" | "artworkImage" | "provenanceRecord" | "provenanceChain" | "certificate" | "favorite" | "reservation" | "order" | "orderItem" | "consultation" | "priceRequest" | "auditLog" | "notification" | "auctionLot" | "bid" | "acquisition" | "acquisitionProvenance" | "inquiry" | "inquiryMessage" | "porMessage" | "logisticsShipment" | "shipmentUpdate" | "securityRecord" | "escrowTransaction" | "advisorClient" | "advisorPlacement" | "advisorActivity" | "chatThread" | "chatMessage" | "chatThreadReadStatus" | "supportTicket" | "ticketResponse" | "memberApplication";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Artist: {
            payload: Prisma.$ArtistPayload<ExtArgs>;
            fields: Prisma.ArtistFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ArtistFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload>;
                };
                findFirst: {
                    args: Prisma.ArtistFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload>;
                };
                findMany: {
                    args: Prisma.ArtistFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload>[];
                };
                create: {
                    args: Prisma.ArtistCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload>;
                };
                createMany: {
                    args: Prisma.ArtistCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ArtistDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload>;
                };
                update: {
                    args: Prisma.ArtistUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload>;
                };
                deleteMany: {
                    args: Prisma.ArtistDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ArtistUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ArtistUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtistPayload>;
                };
                aggregate: {
                    args: Prisma.ArtistAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArtist>;
                };
                groupBy: {
                    args: Prisma.ArtistGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArtistGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ArtistCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArtistCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        Artwork: {
            payload: Prisma.$ArtworkPayload<ExtArgs>;
            fields: Prisma.ArtworkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ArtworkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ArtworkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload>;
                };
                findFirst: {
                    args: Prisma.ArtworkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ArtworkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload>;
                };
                findMany: {
                    args: Prisma.ArtworkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload>[];
                };
                create: {
                    args: Prisma.ArtworkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload>;
                };
                createMany: {
                    args: Prisma.ArtworkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ArtworkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload>;
                };
                update: {
                    args: Prisma.ArtworkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload>;
                };
                deleteMany: {
                    args: Prisma.ArtworkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ArtworkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ArtworkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkPayload>;
                };
                aggregate: {
                    args: Prisma.ArtworkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArtwork>;
                };
                groupBy: {
                    args: Prisma.ArtworkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArtworkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ArtworkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArtworkCountAggregateOutputType> | number;
                };
            };
        };
        ArtworkImage: {
            payload: Prisma.$ArtworkImagePayload<ExtArgs>;
            fields: Prisma.ArtworkImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ArtworkImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ArtworkImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload>;
                };
                findFirst: {
                    args: Prisma.ArtworkImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ArtworkImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload>;
                };
                findMany: {
                    args: Prisma.ArtworkImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload>[];
                };
                create: {
                    args: Prisma.ArtworkImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload>;
                };
                createMany: {
                    args: Prisma.ArtworkImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ArtworkImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload>;
                };
                update: {
                    args: Prisma.ArtworkImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ArtworkImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ArtworkImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ArtworkImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArtworkImagePayload>;
                };
                aggregate: {
                    args: Prisma.ArtworkImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArtworkImage>;
                };
                groupBy: {
                    args: Prisma.ArtworkImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArtworkImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ArtworkImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArtworkImageCountAggregateOutputType> | number;
                };
            };
        };
        ProvenanceRecord: {
            payload: Prisma.$ProvenanceRecordPayload<ExtArgs>;
            fields: Prisma.ProvenanceRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProvenanceRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProvenanceRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload>;
                };
                findFirst: {
                    args: Prisma.ProvenanceRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProvenanceRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload>;
                };
                findMany: {
                    args: Prisma.ProvenanceRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload>[];
                };
                create: {
                    args: Prisma.ProvenanceRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload>;
                };
                createMany: {
                    args: Prisma.ProvenanceRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ProvenanceRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload>;
                };
                update: {
                    args: Prisma.ProvenanceRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.ProvenanceRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProvenanceRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ProvenanceRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceRecordPayload>;
                };
                aggregate: {
                    args: Prisma.ProvenanceRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProvenanceRecord>;
                };
                groupBy: {
                    args: Prisma.ProvenanceRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProvenanceRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProvenanceRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProvenanceRecordCountAggregateOutputType> | number;
                };
            };
        };
        ProvenanceChain: {
            payload: Prisma.$ProvenanceChainPayload<ExtArgs>;
            fields: Prisma.ProvenanceChainFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProvenanceChainFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProvenanceChainFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload>;
                };
                findFirst: {
                    args: Prisma.ProvenanceChainFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProvenanceChainFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload>;
                };
                findMany: {
                    args: Prisma.ProvenanceChainFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload>[];
                };
                create: {
                    args: Prisma.ProvenanceChainCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload>;
                };
                createMany: {
                    args: Prisma.ProvenanceChainCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ProvenanceChainDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload>;
                };
                update: {
                    args: Prisma.ProvenanceChainUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload>;
                };
                deleteMany: {
                    args: Prisma.ProvenanceChainDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProvenanceChainUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ProvenanceChainUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvenanceChainPayload>;
                };
                aggregate: {
                    args: Prisma.ProvenanceChainAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProvenanceChain>;
                };
                groupBy: {
                    args: Prisma.ProvenanceChainGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProvenanceChainGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProvenanceChainCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProvenanceChainCountAggregateOutputType> | number;
                };
            };
        };
        Certificate: {
            payload: Prisma.$CertificatePayload<ExtArgs>;
            fields: Prisma.CertificateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CertificateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                findFirst: {
                    args: Prisma.CertificateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                findMany: {
                    args: Prisma.CertificateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>[];
                };
                create: {
                    args: Prisma.CertificateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                createMany: {
                    args: Prisma.CertificateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CertificateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                update: {
                    args: Prisma.CertificateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                deleteMany: {
                    args: Prisma.CertificateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CertificateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CertificateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CertificatePayload>;
                };
                aggregate: {
                    args: Prisma.CertificateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCertificate>;
                };
                groupBy: {
                    args: Prisma.CertificateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CertificateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificateCountAggregateOutputType> | number;
                };
            };
        };
        Favorite: {
            payload: Prisma.$FavoritePayload<ExtArgs>;
            fields: Prisma.FavoriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FavoriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                findFirst: {
                    args: Prisma.FavoriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                findMany: {
                    args: Prisma.FavoriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>[];
                };
                create: {
                    args: Prisma.FavoriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                createMany: {
                    args: Prisma.FavoriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FavoriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                update: {
                    args: Prisma.FavoriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                deleteMany: {
                    args: Prisma.FavoriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FavoriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FavoriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                aggregate: {
                    args: Prisma.FavoriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFavorite>;
                };
                groupBy: {
                    args: Prisma.FavoriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FavoriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteCountAggregateOutputType> | number;
                };
            };
        };
        Reservation: {
            payload: Prisma.$ReservationPayload<ExtArgs>;
            fields: Prisma.ReservationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReservationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                findFirst: {
                    args: Prisma.ReservationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                findMany: {
                    args: Prisma.ReservationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>[];
                };
                create: {
                    args: Prisma.ReservationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                createMany: {
                    args: Prisma.ReservationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ReservationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                update: {
                    args: Prisma.ReservationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                deleteMany: {
                    args: Prisma.ReservationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReservationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ReservationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                aggregate: {
                    args: Prisma.ReservationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReservation>;
                };
                groupBy: {
                    args: Prisma.ReservationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReservationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        Consultation: {
            payload: Prisma.$ConsultationPayload<ExtArgs>;
            fields: Prisma.ConsultationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConsultationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConsultationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload>;
                };
                findFirst: {
                    args: Prisma.ConsultationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConsultationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload>;
                };
                findMany: {
                    args: Prisma.ConsultationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload>[];
                };
                create: {
                    args: Prisma.ConsultationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload>;
                };
                createMany: {
                    args: Prisma.ConsultationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ConsultationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload>;
                };
                update: {
                    args: Prisma.ConsultationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload>;
                };
                deleteMany: {
                    args: Prisma.ConsultationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConsultationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ConsultationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConsultationPayload>;
                };
                aggregate: {
                    args: Prisma.ConsultationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConsultation>;
                };
                groupBy: {
                    args: Prisma.ConsultationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsultationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConsultationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConsultationCountAggregateOutputType> | number;
                };
            };
        };
        PriceRequest: {
            payload: Prisma.$PriceRequestPayload<ExtArgs>;
            fields: Prisma.PriceRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PriceRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PriceRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload>;
                };
                findFirst: {
                    args: Prisma.PriceRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PriceRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload>;
                };
                findMany: {
                    args: Prisma.PriceRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload>[];
                };
                create: {
                    args: Prisma.PriceRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload>;
                };
                createMany: {
                    args: Prisma.PriceRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PriceRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload>;
                };
                update: {
                    args: Prisma.PriceRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.PriceRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PriceRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PriceRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PriceRequestPayload>;
                };
                aggregate: {
                    args: Prisma.PriceRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePriceRequest>;
                };
                groupBy: {
                    args: Prisma.PriceRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PriceRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PriceRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PriceRequestCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        AuctionLot: {
            payload: Prisma.$AuctionLotPayload<ExtArgs>;
            fields: Prisma.AuctionLotFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuctionLotFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuctionLotFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload>;
                };
                findFirst: {
                    args: Prisma.AuctionLotFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuctionLotFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload>;
                };
                findMany: {
                    args: Prisma.AuctionLotFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload>[];
                };
                create: {
                    args: Prisma.AuctionLotCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload>;
                };
                createMany: {
                    args: Prisma.AuctionLotCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AuctionLotDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload>;
                };
                update: {
                    args: Prisma.AuctionLotUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload>;
                };
                deleteMany: {
                    args: Prisma.AuctionLotDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuctionLotUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AuctionLotUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuctionLotPayload>;
                };
                aggregate: {
                    args: Prisma.AuctionLotAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuctionLot>;
                };
                groupBy: {
                    args: Prisma.AuctionLotGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuctionLotGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuctionLotCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuctionLotCountAggregateOutputType> | number;
                };
            };
        };
        Bid: {
            payload: Prisma.$BidPayload<ExtArgs>;
            fields: Prisma.BidFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BidFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload>;
                };
                findFirst: {
                    args: Prisma.BidFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload>;
                };
                findMany: {
                    args: Prisma.BidFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload>[];
                };
                create: {
                    args: Prisma.BidCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload>;
                };
                createMany: {
                    args: Prisma.BidCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BidDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload>;
                };
                update: {
                    args: Prisma.BidUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload>;
                };
                deleteMany: {
                    args: Prisma.BidDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BidUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BidUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BidPayload>;
                };
                aggregate: {
                    args: Prisma.BidAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBid>;
                };
                groupBy: {
                    args: Prisma.BidGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BidGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BidCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BidCountAggregateOutputType> | number;
                };
            };
        };
        Acquisition: {
            payload: Prisma.$AcquisitionPayload<ExtArgs>;
            fields: Prisma.AcquisitionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AcquisitionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AcquisitionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload>;
                };
                findFirst: {
                    args: Prisma.AcquisitionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AcquisitionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload>;
                };
                findMany: {
                    args: Prisma.AcquisitionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload>[];
                };
                create: {
                    args: Prisma.AcquisitionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload>;
                };
                createMany: {
                    args: Prisma.AcquisitionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AcquisitionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload>;
                };
                update: {
                    args: Prisma.AcquisitionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload>;
                };
                deleteMany: {
                    args: Prisma.AcquisitionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AcquisitionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AcquisitionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionPayload>;
                };
                aggregate: {
                    args: Prisma.AcquisitionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAcquisition>;
                };
                groupBy: {
                    args: Prisma.AcquisitionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcquisitionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AcquisitionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcquisitionCountAggregateOutputType> | number;
                };
            };
        };
        AcquisitionProvenance: {
            payload: Prisma.$AcquisitionProvenancePayload<ExtArgs>;
            fields: Prisma.AcquisitionProvenanceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AcquisitionProvenanceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AcquisitionProvenanceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload>;
                };
                findFirst: {
                    args: Prisma.AcquisitionProvenanceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AcquisitionProvenanceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload>;
                };
                findMany: {
                    args: Prisma.AcquisitionProvenanceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload>[];
                };
                create: {
                    args: Prisma.AcquisitionProvenanceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload>;
                };
                createMany: {
                    args: Prisma.AcquisitionProvenanceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AcquisitionProvenanceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload>;
                };
                update: {
                    args: Prisma.AcquisitionProvenanceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload>;
                };
                deleteMany: {
                    args: Prisma.AcquisitionProvenanceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AcquisitionProvenanceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AcquisitionProvenanceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcquisitionProvenancePayload>;
                };
                aggregate: {
                    args: Prisma.AcquisitionProvenanceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAcquisitionProvenance>;
                };
                groupBy: {
                    args: Prisma.AcquisitionProvenanceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcquisitionProvenanceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AcquisitionProvenanceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcquisitionProvenanceCountAggregateOutputType> | number;
                };
            };
        };
        Inquiry: {
            payload: Prisma.$InquiryPayload<ExtArgs>;
            fields: Prisma.InquiryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InquiryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload>;
                };
                findFirst: {
                    args: Prisma.InquiryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload>;
                };
                findMany: {
                    args: Prisma.InquiryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload>[];
                };
                create: {
                    args: Prisma.InquiryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload>;
                };
                createMany: {
                    args: Prisma.InquiryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.InquiryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload>;
                };
                update: {
                    args: Prisma.InquiryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload>;
                };
                deleteMany: {
                    args: Prisma.InquiryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InquiryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.InquiryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryPayload>;
                };
                aggregate: {
                    args: Prisma.InquiryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInquiry>;
                };
                groupBy: {
                    args: Prisma.InquiryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InquiryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InquiryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InquiryCountAggregateOutputType> | number;
                };
            };
        };
        InquiryMessage: {
            payload: Prisma.$InquiryMessagePayload<ExtArgs>;
            fields: Prisma.InquiryMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InquiryMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InquiryMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload>;
                };
                findFirst: {
                    args: Prisma.InquiryMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InquiryMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload>;
                };
                findMany: {
                    args: Prisma.InquiryMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload>[];
                };
                create: {
                    args: Prisma.InquiryMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload>;
                };
                createMany: {
                    args: Prisma.InquiryMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.InquiryMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload>;
                };
                update: {
                    args: Prisma.InquiryMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.InquiryMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InquiryMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.InquiryMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InquiryMessagePayload>;
                };
                aggregate: {
                    args: Prisma.InquiryMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInquiryMessage>;
                };
                groupBy: {
                    args: Prisma.InquiryMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InquiryMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InquiryMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InquiryMessageCountAggregateOutputType> | number;
                };
            };
        };
        PorMessage: {
            payload: Prisma.$PorMessagePayload<ExtArgs>;
            fields: Prisma.PorMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PorMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PorMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload>;
                };
                findFirst: {
                    args: Prisma.PorMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PorMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload>;
                };
                findMany: {
                    args: Prisma.PorMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload>[];
                };
                create: {
                    args: Prisma.PorMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload>;
                };
                createMany: {
                    args: Prisma.PorMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PorMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload>;
                };
                update: {
                    args: Prisma.PorMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.PorMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PorMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PorMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PorMessagePayload>;
                };
                aggregate: {
                    args: Prisma.PorMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePorMessage>;
                };
                groupBy: {
                    args: Prisma.PorMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PorMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PorMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PorMessageCountAggregateOutputType> | number;
                };
            };
        };
        LogisticsShipment: {
            payload: Prisma.$LogisticsShipmentPayload<ExtArgs>;
            fields: Prisma.LogisticsShipmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LogisticsShipmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LogisticsShipmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload>;
                };
                findFirst: {
                    args: Prisma.LogisticsShipmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LogisticsShipmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload>;
                };
                findMany: {
                    args: Prisma.LogisticsShipmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload>[];
                };
                create: {
                    args: Prisma.LogisticsShipmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload>;
                };
                createMany: {
                    args: Prisma.LogisticsShipmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.LogisticsShipmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload>;
                };
                update: {
                    args: Prisma.LogisticsShipmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload>;
                };
                deleteMany: {
                    args: Prisma.LogisticsShipmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LogisticsShipmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.LogisticsShipmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogisticsShipmentPayload>;
                };
                aggregate: {
                    args: Prisma.LogisticsShipmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLogisticsShipment>;
                };
                groupBy: {
                    args: Prisma.LogisticsShipmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogisticsShipmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LogisticsShipmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogisticsShipmentCountAggregateOutputType> | number;
                };
            };
        };
        ShipmentUpdate: {
            payload: Prisma.$ShipmentUpdatePayload<ExtArgs>;
            fields: Prisma.ShipmentUpdateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShipmentUpdateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShipmentUpdateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload>;
                };
                findFirst: {
                    args: Prisma.ShipmentUpdateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShipmentUpdateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload>;
                };
                findMany: {
                    args: Prisma.ShipmentUpdateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload>[];
                };
                create: {
                    args: Prisma.ShipmentUpdateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload>;
                };
                createMany: {
                    args: Prisma.ShipmentUpdateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ShipmentUpdateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload>;
                };
                update: {
                    args: Prisma.ShipmentUpdateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload>;
                };
                deleteMany: {
                    args: Prisma.ShipmentUpdateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShipmentUpdateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ShipmentUpdateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShipmentUpdatePayload>;
                };
                aggregate: {
                    args: Prisma.ShipmentUpdateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShipmentUpdate>;
                };
                groupBy: {
                    args: Prisma.ShipmentUpdateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentUpdateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShipmentUpdateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShipmentUpdateCountAggregateOutputType> | number;
                };
            };
        };
        SecurityRecord: {
            payload: Prisma.$SecurityRecordPayload<ExtArgs>;
            fields: Prisma.SecurityRecordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SecurityRecordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SecurityRecordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload>;
                };
                findFirst: {
                    args: Prisma.SecurityRecordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SecurityRecordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload>;
                };
                findMany: {
                    args: Prisma.SecurityRecordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload>[];
                };
                create: {
                    args: Prisma.SecurityRecordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload>;
                };
                createMany: {
                    args: Prisma.SecurityRecordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SecurityRecordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload>;
                };
                update: {
                    args: Prisma.SecurityRecordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload>;
                };
                deleteMany: {
                    args: Prisma.SecurityRecordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SecurityRecordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SecurityRecordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SecurityRecordPayload>;
                };
                aggregate: {
                    args: Prisma.SecurityRecordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSecurityRecord>;
                };
                groupBy: {
                    args: Prisma.SecurityRecordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SecurityRecordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SecurityRecordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SecurityRecordCountAggregateOutputType> | number;
                };
            };
        };
        EscrowTransaction: {
            payload: Prisma.$EscrowTransactionPayload<ExtArgs>;
            fields: Prisma.EscrowTransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EscrowTransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EscrowTransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload>;
                };
                findFirst: {
                    args: Prisma.EscrowTransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EscrowTransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload>;
                };
                findMany: {
                    args: Prisma.EscrowTransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload>[];
                };
                create: {
                    args: Prisma.EscrowTransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload>;
                };
                createMany: {
                    args: Prisma.EscrowTransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.EscrowTransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload>;
                };
                update: {
                    args: Prisma.EscrowTransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.EscrowTransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EscrowTransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.EscrowTransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EscrowTransactionPayload>;
                };
                aggregate: {
                    args: Prisma.EscrowTransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEscrowTransaction>;
                };
                groupBy: {
                    args: Prisma.EscrowTransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EscrowTransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EscrowTransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EscrowTransactionCountAggregateOutputType> | number;
                };
            };
        };
        AdvisorClient: {
            payload: Prisma.$AdvisorClientPayload<ExtArgs>;
            fields: Prisma.AdvisorClientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdvisorClientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdvisorClientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload>;
                };
                findFirst: {
                    args: Prisma.AdvisorClientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdvisorClientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload>;
                };
                findMany: {
                    args: Prisma.AdvisorClientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload>[];
                };
                create: {
                    args: Prisma.AdvisorClientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload>;
                };
                createMany: {
                    args: Prisma.AdvisorClientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AdvisorClientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload>;
                };
                update: {
                    args: Prisma.AdvisorClientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload>;
                };
                deleteMany: {
                    args: Prisma.AdvisorClientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdvisorClientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AdvisorClientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorClientPayload>;
                };
                aggregate: {
                    args: Prisma.AdvisorClientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdvisorClient>;
                };
                groupBy: {
                    args: Prisma.AdvisorClientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvisorClientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdvisorClientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvisorClientCountAggregateOutputType> | number;
                };
            };
        };
        AdvisorPlacement: {
            payload: Prisma.$AdvisorPlacementPayload<ExtArgs>;
            fields: Prisma.AdvisorPlacementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdvisorPlacementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdvisorPlacementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload>;
                };
                findFirst: {
                    args: Prisma.AdvisorPlacementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdvisorPlacementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload>;
                };
                findMany: {
                    args: Prisma.AdvisorPlacementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload>[];
                };
                create: {
                    args: Prisma.AdvisorPlacementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload>;
                };
                createMany: {
                    args: Prisma.AdvisorPlacementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AdvisorPlacementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload>;
                };
                update: {
                    args: Prisma.AdvisorPlacementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload>;
                };
                deleteMany: {
                    args: Prisma.AdvisorPlacementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdvisorPlacementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AdvisorPlacementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorPlacementPayload>;
                };
                aggregate: {
                    args: Prisma.AdvisorPlacementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdvisorPlacement>;
                };
                groupBy: {
                    args: Prisma.AdvisorPlacementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvisorPlacementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdvisorPlacementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvisorPlacementCountAggregateOutputType> | number;
                };
            };
        };
        AdvisorActivity: {
            payload: Prisma.$AdvisorActivityPayload<ExtArgs>;
            fields: Prisma.AdvisorActivityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdvisorActivityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdvisorActivityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload>;
                };
                findFirst: {
                    args: Prisma.AdvisorActivityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdvisorActivityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload>;
                };
                findMany: {
                    args: Prisma.AdvisorActivityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload>[];
                };
                create: {
                    args: Prisma.AdvisorActivityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload>;
                };
                createMany: {
                    args: Prisma.AdvisorActivityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.AdvisorActivityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload>;
                };
                update: {
                    args: Prisma.AdvisorActivityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload>;
                };
                deleteMany: {
                    args: Prisma.AdvisorActivityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdvisorActivityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.AdvisorActivityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdvisorActivityPayload>;
                };
                aggregate: {
                    args: Prisma.AdvisorActivityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdvisorActivity>;
                };
                groupBy: {
                    args: Prisma.AdvisorActivityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvisorActivityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdvisorActivityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdvisorActivityCountAggregateOutputType> | number;
                };
            };
        };
        ChatThread: {
            payload: Prisma.$ChatThreadPayload<ExtArgs>;
            fields: Prisma.ChatThreadFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatThreadFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatThreadFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload>;
                };
                findFirst: {
                    args: Prisma.ChatThreadFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatThreadFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload>;
                };
                findMany: {
                    args: Prisma.ChatThreadFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload>[];
                };
                create: {
                    args: Prisma.ChatThreadCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload>;
                };
                createMany: {
                    args: Prisma.ChatThreadCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChatThreadDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload>;
                };
                update: {
                    args: Prisma.ChatThreadUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload>;
                };
                deleteMany: {
                    args: Prisma.ChatThreadDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatThreadUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChatThreadUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadPayload>;
                };
                aggregate: {
                    args: Prisma.ChatThreadAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChatThread>;
                };
                groupBy: {
                    args: Prisma.ChatThreadGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatThreadGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChatThreadCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatThreadCountAggregateOutputType> | number;
                };
            };
        };
        ChatMessage: {
            payload: Prisma.$ChatMessagePayload<ExtArgs>;
            fields: Prisma.ChatMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                findFirst: {
                    args: Prisma.ChatMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                findMany: {
                    args: Prisma.ChatMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
                };
                create: {
                    args: Prisma.ChatMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                createMany: {
                    args: Prisma.ChatMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChatMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                update: {
                    args: Prisma.ChatMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChatMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                aggregate: {
                    args: Prisma.ChatMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChatMessage>;
                };
                groupBy: {
                    args: Prisma.ChatMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChatMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatMessageCountAggregateOutputType> | number;
                };
            };
        };
        ChatThreadReadStatus: {
            payload: Prisma.$ChatThreadReadStatusPayload<ExtArgs>;
            fields: Prisma.ChatThreadReadStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatThreadReadStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatThreadReadStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload>;
                };
                findFirst: {
                    args: Prisma.ChatThreadReadStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatThreadReadStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload>;
                };
                findMany: {
                    args: Prisma.ChatThreadReadStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload>[];
                };
                create: {
                    args: Prisma.ChatThreadReadStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload>;
                };
                createMany: {
                    args: Prisma.ChatThreadReadStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChatThreadReadStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload>;
                };
                update: {
                    args: Prisma.ChatThreadReadStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.ChatThreadReadStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatThreadReadStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChatThreadReadStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatThreadReadStatusPayload>;
                };
                aggregate: {
                    args: Prisma.ChatThreadReadStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChatThreadReadStatus>;
                };
                groupBy: {
                    args: Prisma.ChatThreadReadStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatThreadReadStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChatThreadReadStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatThreadReadStatusCountAggregateOutputType> | number;
                };
            };
        };
        SupportTicket: {
            payload: Prisma.$SupportTicketPayload<ExtArgs>;
            fields: Prisma.SupportTicketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findFirst: {
                    args: Prisma.SupportTicketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                findMany: {
                    args: Prisma.SupportTicketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>[];
                };
                create: {
                    args: Prisma.SupportTicketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                createMany: {
                    args: Prisma.SupportTicketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SupportTicketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                update: {
                    args: Prisma.SupportTicketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                deleteMany: {
                    args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SupportTicketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupportTicketPayload>;
                };
                aggregate: {
                    args: Prisma.SupportTicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupportTicket>;
                };
                groupBy: {
                    args: Prisma.SupportTicketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupportTicketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupportTicketCountAggregateOutputType> | number;
                };
            };
        };
        TicketResponse: {
            payload: Prisma.$TicketResponsePayload<ExtArgs>;
            fields: Prisma.TicketResponseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TicketResponseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TicketResponseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload>;
                };
                findFirst: {
                    args: Prisma.TicketResponseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TicketResponseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload>;
                };
                findMany: {
                    args: Prisma.TicketResponseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload>[];
                };
                create: {
                    args: Prisma.TicketResponseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload>;
                };
                createMany: {
                    args: Prisma.TicketResponseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.TicketResponseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload>;
                };
                update: {
                    args: Prisma.TicketResponseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload>;
                };
                deleteMany: {
                    args: Prisma.TicketResponseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TicketResponseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.TicketResponseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TicketResponsePayload>;
                };
                aggregate: {
                    args: Prisma.TicketResponseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTicketResponse>;
                };
                groupBy: {
                    args: Prisma.TicketResponseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketResponseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TicketResponseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketResponseCountAggregateOutputType> | number;
                };
            };
        };
        MemberApplication: {
            payload: Prisma.$MemberApplicationPayload<ExtArgs>;
            fields: Prisma.MemberApplicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MemberApplicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MemberApplicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload>;
                };
                findFirst: {
                    args: Prisma.MemberApplicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MemberApplicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload>;
                };
                findMany: {
                    args: Prisma.MemberApplicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload>[];
                };
                create: {
                    args: Prisma.MemberApplicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload>;
                };
                createMany: {
                    args: Prisma.MemberApplicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MemberApplicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload>;
                };
                update: {
                    args: Prisma.MemberApplicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload>;
                };
                deleteMany: {
                    args: Prisma.MemberApplicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MemberApplicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MemberApplicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberApplicationPayload>;
                };
                aggregate: {
                    args: Prisma.MemberApplicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMemberApplication>;
                };
                groupBy: {
                    args: Prisma.MemberApplicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemberApplicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MemberApplicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemberApplicationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
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
    readonly senderId: "senderId";
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
/**
 * Reference to a field of type 'UserStatus'
 */
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'Availability'
 */
export type EnumAvailabilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Availability'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'ReservationStatus'
 */
export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>;
/**
 * Reference to a field of type 'OrderStatus'
 */
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
/**
 * Reference to a field of type 'ConsultationType'
 */
export type EnumConsultationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationType'>;
/**
 * Reference to a field of type 'ConsultationStatus'
 */
export type EnumConsultationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationStatus'>;
/**
 * Reference to a field of type 'PORStatus'
 */
export type EnumPORStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PORStatus'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'AuctionStatus'
 */
export type EnumAuctionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuctionStatus'>;
/**
 * Reference to a field of type 'EscrowStatus'
 */
export type EnumEscrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowStatus'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    artist?: Prisma.ArtistOmit;
    category?: Prisma.CategoryOmit;
    artwork?: Prisma.ArtworkOmit;
    artworkImage?: Prisma.ArtworkImageOmit;
    provenanceRecord?: Prisma.ProvenanceRecordOmit;
    provenanceChain?: Prisma.ProvenanceChainOmit;
    certificate?: Prisma.CertificateOmit;
    favorite?: Prisma.FavoriteOmit;
    reservation?: Prisma.ReservationOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    consultation?: Prisma.ConsultationOmit;
    priceRequest?: Prisma.PriceRequestOmit;
    auditLog?: Prisma.AuditLogOmit;
    notification?: Prisma.NotificationOmit;
    auctionLot?: Prisma.AuctionLotOmit;
    bid?: Prisma.BidOmit;
    acquisition?: Prisma.AcquisitionOmit;
    acquisitionProvenance?: Prisma.AcquisitionProvenanceOmit;
    inquiry?: Prisma.InquiryOmit;
    inquiryMessage?: Prisma.InquiryMessageOmit;
    porMessage?: Prisma.PorMessageOmit;
    logisticsShipment?: Prisma.LogisticsShipmentOmit;
    shipmentUpdate?: Prisma.ShipmentUpdateOmit;
    securityRecord?: Prisma.SecurityRecordOmit;
    escrowTransaction?: Prisma.EscrowTransactionOmit;
    advisorClient?: Prisma.AdvisorClientOmit;
    advisorPlacement?: Prisma.AdvisorPlacementOmit;
    advisorActivity?: Prisma.AdvisorActivityOmit;
    chatThread?: Prisma.ChatThreadOmit;
    chatMessage?: Prisma.ChatMessageOmit;
    chatThreadReadStatus?: Prisma.ChatThreadReadStatusOmit;
    supportTicket?: Prisma.SupportTicketOmit;
    ticketResponse?: Prisma.TicketResponseOmit;
    memberApplication?: Prisma.MemberApplicationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map