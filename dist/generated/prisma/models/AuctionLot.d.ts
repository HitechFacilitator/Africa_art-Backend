import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model AuctionLot
 *
 */
export type AuctionLotModel = runtime.Types.Result.DefaultSelection<Prisma.$AuctionLotPayload>;
export type AggregateAuctionLot = {
    _count: AuctionLotCountAggregateOutputType | null;
    _avg: AuctionLotAvgAggregateOutputType | null;
    _sum: AuctionLotSumAggregateOutputType | null;
    _min: AuctionLotMinAggregateOutputType | null;
    _max: AuctionLotMaxAggregateOutputType | null;
};
export type AuctionLotAvgAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
    startingPrice: runtime.Decimal | null;
    currentPrice: runtime.Decimal | null;
    reservePrice: runtime.Decimal | null;
    estimateMin: runtime.Decimal | null;
    estimateMax: runtime.Decimal | null;
    watchers: number | null;
};
export type AuctionLotSumAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
    startingPrice: runtime.Decimal | null;
    currentPrice: runtime.Decimal | null;
    reservePrice: runtime.Decimal | null;
    estimateMin: runtime.Decimal | null;
    estimateMax: runtime.Decimal | null;
    watchers: number | null;
};
export type AuctionLotMinAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
    startingPrice: runtime.Decimal | null;
    currentPrice: runtime.Decimal | null;
    reservePrice: runtime.Decimal | null;
    estimateMin: runtime.Decimal | null;
    estimateMax: runtime.Decimal | null;
    startTime: Date | null;
    endTime: Date | null;
    status: $Enums.AuctionStatus | null;
    watchers: number | null;
    featured: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AuctionLotMaxAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
    startingPrice: runtime.Decimal | null;
    currentPrice: runtime.Decimal | null;
    reservePrice: runtime.Decimal | null;
    estimateMin: runtime.Decimal | null;
    estimateMax: runtime.Decimal | null;
    startTime: Date | null;
    endTime: Date | null;
    status: $Enums.AuctionStatus | null;
    watchers: number | null;
    featured: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AuctionLotCountAggregateOutputType = {
    id: number;
    artworkId: number;
    startingPrice: number;
    currentPrice: number;
    reservePrice: number;
    estimateMin: number;
    estimateMax: number;
    startTime: number;
    endTime: number;
    status: number;
    watchers: number;
    featured: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AuctionLotAvgAggregateInputType = {
    id?: true;
    artworkId?: true;
    startingPrice?: true;
    currentPrice?: true;
    reservePrice?: true;
    estimateMin?: true;
    estimateMax?: true;
    watchers?: true;
};
export type AuctionLotSumAggregateInputType = {
    id?: true;
    artworkId?: true;
    startingPrice?: true;
    currentPrice?: true;
    reservePrice?: true;
    estimateMin?: true;
    estimateMax?: true;
    watchers?: true;
};
export type AuctionLotMinAggregateInputType = {
    id?: true;
    artworkId?: true;
    startingPrice?: true;
    currentPrice?: true;
    reservePrice?: true;
    estimateMin?: true;
    estimateMax?: true;
    startTime?: true;
    endTime?: true;
    status?: true;
    watchers?: true;
    featured?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AuctionLotMaxAggregateInputType = {
    id?: true;
    artworkId?: true;
    startingPrice?: true;
    currentPrice?: true;
    reservePrice?: true;
    estimateMin?: true;
    estimateMax?: true;
    startTime?: true;
    endTime?: true;
    status?: true;
    watchers?: true;
    featured?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AuctionLotCountAggregateInputType = {
    id?: true;
    artworkId?: true;
    startingPrice?: true;
    currentPrice?: true;
    reservePrice?: true;
    estimateMin?: true;
    estimateMax?: true;
    startTime?: true;
    endTime?: true;
    status?: true;
    watchers?: true;
    featured?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AuctionLotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionLot to aggregate.
     */
    where?: Prisma.AuctionLotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuctionLots to fetch.
     */
    orderBy?: Prisma.AuctionLotOrderByWithRelationInput | Prisma.AuctionLotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AuctionLotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuctionLots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuctionLots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuctionLots
    **/
    _count?: true | AuctionLotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AuctionLotAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AuctionLotSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AuctionLotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AuctionLotMaxAggregateInputType;
};
export type GetAuctionLotAggregateType<T extends AuctionLotAggregateArgs> = {
    [P in keyof T & keyof AggregateAuctionLot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuctionLot[P]> : Prisma.GetScalarType<T[P], AggregateAuctionLot[P]>;
};
export type AuctionLotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuctionLotWhereInput;
    orderBy?: Prisma.AuctionLotOrderByWithAggregationInput | Prisma.AuctionLotOrderByWithAggregationInput[];
    by: Prisma.AuctionLotScalarFieldEnum[] | Prisma.AuctionLotScalarFieldEnum;
    having?: Prisma.AuctionLotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuctionLotCountAggregateInputType | true;
    _avg?: AuctionLotAvgAggregateInputType;
    _sum?: AuctionLotSumAggregateInputType;
    _min?: AuctionLotMinAggregateInputType;
    _max?: AuctionLotMaxAggregateInputType;
};
export type AuctionLotGroupByOutputType = {
    id: number;
    artworkId: number;
    startingPrice: runtime.Decimal;
    currentPrice: runtime.Decimal | null;
    reservePrice: runtime.Decimal | null;
    estimateMin: runtime.Decimal | null;
    estimateMax: runtime.Decimal | null;
    startTime: Date;
    endTime: Date;
    status: $Enums.AuctionStatus;
    watchers: number;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: AuctionLotCountAggregateOutputType | null;
    _avg: AuctionLotAvgAggregateOutputType | null;
    _sum: AuctionLotSumAggregateOutputType | null;
    _min: AuctionLotMinAggregateOutputType | null;
    _max: AuctionLotMaxAggregateOutputType | null;
};
export type GetAuctionLotGroupByPayload<T extends AuctionLotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuctionLotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuctionLotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuctionLotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuctionLotGroupByOutputType[P]>;
}>>;
export type AuctionLotWhereInput = {
    AND?: Prisma.AuctionLotWhereInput | Prisma.AuctionLotWhereInput[];
    OR?: Prisma.AuctionLotWhereInput[];
    NOT?: Prisma.AuctionLotWhereInput | Prisma.AuctionLotWhereInput[];
    id?: Prisma.IntFilter<"AuctionLot"> | number;
    artworkId?: Prisma.IntFilter<"AuctionLot"> | number;
    startingPrice?: Prisma.DecimalFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    status?: Prisma.EnumAuctionStatusFilter<"AuctionLot"> | $Enums.AuctionStatus;
    watchers?: Prisma.IntFilter<"AuctionLot"> | number;
    featured?: Prisma.BoolFilter<"AuctionLot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
    bids?: Prisma.BidListRelationFilter;
};
export type AuctionLotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    startingPrice?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    reservePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimateMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimateMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    watchers?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    artwork?: Prisma.ArtworkOrderByWithRelationInput;
    bids?: Prisma.BidOrderByRelationAggregateInput;
};
export type AuctionLotWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AuctionLotWhereInput | Prisma.AuctionLotWhereInput[];
    OR?: Prisma.AuctionLotWhereInput[];
    NOT?: Prisma.AuctionLotWhereInput | Prisma.AuctionLotWhereInput[];
    artworkId?: Prisma.IntFilter<"AuctionLot"> | number;
    startingPrice?: Prisma.DecimalFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    status?: Prisma.EnumAuctionStatusFilter<"AuctionLot"> | $Enums.AuctionStatus;
    watchers?: Prisma.IntFilter<"AuctionLot"> | number;
    featured?: Prisma.BoolFilter<"AuctionLot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
    bids?: Prisma.BidListRelationFilter;
}, "id">;
export type AuctionLotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    startingPrice?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    reservePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimateMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimateMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    watchers?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AuctionLotCountOrderByAggregateInput;
    _avg?: Prisma.AuctionLotAvgOrderByAggregateInput;
    _max?: Prisma.AuctionLotMaxOrderByAggregateInput;
    _min?: Prisma.AuctionLotMinOrderByAggregateInput;
    _sum?: Prisma.AuctionLotSumOrderByAggregateInput;
};
export type AuctionLotScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuctionLotScalarWhereWithAggregatesInput | Prisma.AuctionLotScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuctionLotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuctionLotScalarWhereWithAggregatesInput | Prisma.AuctionLotScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AuctionLot"> | number;
    artworkId?: Prisma.IntWithAggregatesFilter<"AuctionLot"> | number;
    startingPrice?: Prisma.DecimalWithAggregatesFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.DecimalNullableWithAggregatesFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.DecimalNullableWithAggregatesFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.DecimalNullableWithAggregatesFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.DecimalNullableWithAggregatesFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"AuctionLot"> | Date | string;
    endTime?: Prisma.DateTimeWithAggregatesFilter<"AuctionLot"> | Date | string;
    status?: Prisma.EnumAuctionStatusWithAggregatesFilter<"AuctionLot"> | $Enums.AuctionStatus;
    watchers?: Prisma.IntWithAggregatesFilter<"AuctionLot"> | number;
    featured?: Prisma.BoolWithAggregatesFilter<"AuctionLot"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AuctionLot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AuctionLot"> | Date | string;
};
export type AuctionLotCreateInput = {
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artwork: Prisma.ArtworkCreateNestedOneWithoutAuctionLotsInput;
    bids?: Prisma.BidCreateNestedManyWithoutLotInput;
};
export type AuctionLotUncheckedCreateInput = {
    id?: number;
    artworkId: number;
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: Prisma.BidUncheckedCreateNestedManyWithoutLotInput;
};
export type AuctionLotUpdateInput = {
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artwork?: Prisma.ArtworkUpdateOneRequiredWithoutAuctionLotsNestedInput;
    bids?: Prisma.BidUpdateManyWithoutLotNestedInput;
};
export type AuctionLotUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: Prisma.BidUncheckedUpdateManyWithoutLotNestedInput;
};
export type AuctionLotCreateManyInput = {
    id?: number;
    artworkId: number;
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AuctionLotUpdateManyMutationInput = {
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuctionLotUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuctionLotListRelationFilter = {
    every?: Prisma.AuctionLotWhereInput;
    some?: Prisma.AuctionLotWhereInput;
    none?: Prisma.AuctionLotWhereInput;
};
export type AuctionLotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuctionLotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    startingPrice?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    reservePrice?: Prisma.SortOrder;
    estimateMin?: Prisma.SortOrder;
    estimateMax?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    watchers?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AuctionLotAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    startingPrice?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    reservePrice?: Prisma.SortOrder;
    estimateMin?: Prisma.SortOrder;
    estimateMax?: Prisma.SortOrder;
    watchers?: Prisma.SortOrder;
};
export type AuctionLotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    startingPrice?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    reservePrice?: Prisma.SortOrder;
    estimateMin?: Prisma.SortOrder;
    estimateMax?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    watchers?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AuctionLotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    startingPrice?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    reservePrice?: Prisma.SortOrder;
    estimateMin?: Prisma.SortOrder;
    estimateMax?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    endTime?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    watchers?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AuctionLotSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    startingPrice?: Prisma.SortOrder;
    currentPrice?: Prisma.SortOrder;
    reservePrice?: Prisma.SortOrder;
    estimateMin?: Prisma.SortOrder;
    estimateMax?: Prisma.SortOrder;
    watchers?: Prisma.SortOrder;
};
export type AuctionLotScalarRelationFilter = {
    is?: Prisma.AuctionLotWhereInput;
    isNot?: Prisma.AuctionLotWhereInput;
};
export type AuctionLotCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.AuctionLotCreateWithoutArtworkInput, Prisma.AuctionLotUncheckedCreateWithoutArtworkInput> | Prisma.AuctionLotCreateWithoutArtworkInput[] | Prisma.AuctionLotUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.AuctionLotCreateOrConnectWithoutArtworkInput | Prisma.AuctionLotCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.AuctionLotCreateManyArtworkInputEnvelope;
    connect?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
};
export type AuctionLotUncheckedCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.AuctionLotCreateWithoutArtworkInput, Prisma.AuctionLotUncheckedCreateWithoutArtworkInput> | Prisma.AuctionLotCreateWithoutArtworkInput[] | Prisma.AuctionLotUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.AuctionLotCreateOrConnectWithoutArtworkInput | Prisma.AuctionLotCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.AuctionLotCreateManyArtworkInputEnvelope;
    connect?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
};
export type AuctionLotUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.AuctionLotCreateWithoutArtworkInput, Prisma.AuctionLotUncheckedCreateWithoutArtworkInput> | Prisma.AuctionLotCreateWithoutArtworkInput[] | Prisma.AuctionLotUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.AuctionLotCreateOrConnectWithoutArtworkInput | Prisma.AuctionLotCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.AuctionLotUpsertWithWhereUniqueWithoutArtworkInput | Prisma.AuctionLotUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.AuctionLotCreateManyArtworkInputEnvelope;
    set?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    disconnect?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    delete?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    connect?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    update?: Prisma.AuctionLotUpdateWithWhereUniqueWithoutArtworkInput | Prisma.AuctionLotUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.AuctionLotUpdateManyWithWhereWithoutArtworkInput | Prisma.AuctionLotUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.AuctionLotScalarWhereInput | Prisma.AuctionLotScalarWhereInput[];
};
export type AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.AuctionLotCreateWithoutArtworkInput, Prisma.AuctionLotUncheckedCreateWithoutArtworkInput> | Prisma.AuctionLotCreateWithoutArtworkInput[] | Prisma.AuctionLotUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.AuctionLotCreateOrConnectWithoutArtworkInput | Prisma.AuctionLotCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.AuctionLotUpsertWithWhereUniqueWithoutArtworkInput | Prisma.AuctionLotUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.AuctionLotCreateManyArtworkInputEnvelope;
    set?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    disconnect?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    delete?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    connect?: Prisma.AuctionLotWhereUniqueInput | Prisma.AuctionLotWhereUniqueInput[];
    update?: Prisma.AuctionLotUpdateWithWhereUniqueWithoutArtworkInput | Prisma.AuctionLotUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.AuctionLotUpdateManyWithWhereWithoutArtworkInput | Prisma.AuctionLotUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.AuctionLotScalarWhereInput | Prisma.AuctionLotScalarWhereInput[];
};
export type EnumAuctionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AuctionStatus;
};
export type AuctionLotCreateNestedOneWithoutBidsInput = {
    create?: Prisma.XOR<Prisma.AuctionLotCreateWithoutBidsInput, Prisma.AuctionLotUncheckedCreateWithoutBidsInput>;
    connectOrCreate?: Prisma.AuctionLotCreateOrConnectWithoutBidsInput;
    connect?: Prisma.AuctionLotWhereUniqueInput;
};
export type AuctionLotUpdateOneRequiredWithoutBidsNestedInput = {
    create?: Prisma.XOR<Prisma.AuctionLotCreateWithoutBidsInput, Prisma.AuctionLotUncheckedCreateWithoutBidsInput>;
    connectOrCreate?: Prisma.AuctionLotCreateOrConnectWithoutBidsInput;
    upsert?: Prisma.AuctionLotUpsertWithoutBidsInput;
    connect?: Prisma.AuctionLotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuctionLotUpdateToOneWithWhereWithoutBidsInput, Prisma.AuctionLotUpdateWithoutBidsInput>, Prisma.AuctionLotUncheckedUpdateWithoutBidsInput>;
};
export type AuctionLotCreateWithoutArtworkInput = {
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: Prisma.BidCreateNestedManyWithoutLotInput;
};
export type AuctionLotUncheckedCreateWithoutArtworkInput = {
    id?: number;
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bids?: Prisma.BidUncheckedCreateNestedManyWithoutLotInput;
};
export type AuctionLotCreateOrConnectWithoutArtworkInput = {
    where: Prisma.AuctionLotWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuctionLotCreateWithoutArtworkInput, Prisma.AuctionLotUncheckedCreateWithoutArtworkInput>;
};
export type AuctionLotCreateManyArtworkInputEnvelope = {
    data: Prisma.AuctionLotCreateManyArtworkInput | Prisma.AuctionLotCreateManyArtworkInput[];
    skipDuplicates?: boolean;
};
export type AuctionLotUpsertWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.AuctionLotWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuctionLotUpdateWithoutArtworkInput, Prisma.AuctionLotUncheckedUpdateWithoutArtworkInput>;
    create: Prisma.XOR<Prisma.AuctionLotCreateWithoutArtworkInput, Prisma.AuctionLotUncheckedCreateWithoutArtworkInput>;
};
export type AuctionLotUpdateWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.AuctionLotWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuctionLotUpdateWithoutArtworkInput, Prisma.AuctionLotUncheckedUpdateWithoutArtworkInput>;
};
export type AuctionLotUpdateManyWithWhereWithoutArtworkInput = {
    where: Prisma.AuctionLotScalarWhereInput;
    data: Prisma.XOR<Prisma.AuctionLotUpdateManyMutationInput, Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkInput>;
};
export type AuctionLotScalarWhereInput = {
    AND?: Prisma.AuctionLotScalarWhereInput | Prisma.AuctionLotScalarWhereInput[];
    OR?: Prisma.AuctionLotScalarWhereInput[];
    NOT?: Prisma.AuctionLotScalarWhereInput | Prisma.AuctionLotScalarWhereInput[];
    id?: Prisma.IntFilter<"AuctionLot"> | number;
    artworkId?: Prisma.IntFilter<"AuctionLot"> | number;
    startingPrice?: Prisma.DecimalFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.DecimalNullableFilter<"AuctionLot"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    endTime?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    status?: Prisma.EnumAuctionStatusFilter<"AuctionLot"> | $Enums.AuctionStatus;
    watchers?: Prisma.IntFilter<"AuctionLot"> | number;
    featured?: Prisma.BoolFilter<"AuctionLot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AuctionLot"> | Date | string;
};
export type AuctionLotCreateWithoutBidsInput = {
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artwork: Prisma.ArtworkCreateNestedOneWithoutAuctionLotsInput;
};
export type AuctionLotUncheckedCreateWithoutBidsInput = {
    id?: number;
    artworkId: number;
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AuctionLotCreateOrConnectWithoutBidsInput = {
    where: Prisma.AuctionLotWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuctionLotCreateWithoutBidsInput, Prisma.AuctionLotUncheckedCreateWithoutBidsInput>;
};
export type AuctionLotUpsertWithoutBidsInput = {
    update: Prisma.XOR<Prisma.AuctionLotUpdateWithoutBidsInput, Prisma.AuctionLotUncheckedUpdateWithoutBidsInput>;
    create: Prisma.XOR<Prisma.AuctionLotCreateWithoutBidsInput, Prisma.AuctionLotUncheckedCreateWithoutBidsInput>;
    where?: Prisma.AuctionLotWhereInput;
};
export type AuctionLotUpdateToOneWithWhereWithoutBidsInput = {
    where?: Prisma.AuctionLotWhereInput;
    data: Prisma.XOR<Prisma.AuctionLotUpdateWithoutBidsInput, Prisma.AuctionLotUncheckedUpdateWithoutBidsInput>;
};
export type AuctionLotUpdateWithoutBidsInput = {
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artwork?: Prisma.ArtworkUpdateOneRequiredWithoutAuctionLotsNestedInput;
};
export type AuctionLotUncheckedUpdateWithoutBidsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuctionLotCreateManyArtworkInput = {
    id?: number;
    startingPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime: Date | string;
    endTime: Date | string;
    status?: $Enums.AuctionStatus;
    watchers?: number;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AuctionLotUpdateWithoutArtworkInput = {
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: Prisma.BidUpdateManyWithoutLotNestedInput;
};
export type AuctionLotUncheckedUpdateWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bids?: Prisma.BidUncheckedUpdateManyWithoutLotNestedInput;
};
export type AuctionLotUncheckedUpdateManyWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startingPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currentPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reservePrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMin?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimateMax?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumAuctionStatusFieldUpdateOperationsInput | $Enums.AuctionStatus;
    watchers?: Prisma.IntFieldUpdateOperationsInput | number;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AuctionLotCountOutputType
 */
export type AuctionLotCountOutputType = {
    bids: number;
};
export type AuctionLotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bids?: boolean | AuctionLotCountOutputTypeCountBidsArgs;
};
/**
 * AuctionLotCountOutputType without action
 */
export type AuctionLotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLotCountOutputType
     */
    select?: Prisma.AuctionLotCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AuctionLotCountOutputType without action
 */
export type AuctionLotCountOutputTypeCountBidsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BidWhereInput;
};
export type AuctionLotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    artworkId?: boolean;
    startingPrice?: boolean;
    currentPrice?: boolean;
    reservePrice?: boolean;
    estimateMin?: boolean;
    estimateMax?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    status?: boolean;
    watchers?: boolean;
    featured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
    bids?: boolean | Prisma.AuctionLot$bidsArgs<ExtArgs>;
    _count?: boolean | Prisma.AuctionLotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auctionLot"]>;
export type AuctionLotSelectScalar = {
    id?: boolean;
    artworkId?: boolean;
    startingPrice?: boolean;
    currentPrice?: boolean;
    reservePrice?: boolean;
    estimateMin?: boolean;
    estimateMax?: boolean;
    startTime?: boolean;
    endTime?: boolean;
    status?: boolean;
    watchers?: boolean;
    featured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AuctionLotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "artworkId" | "startingPrice" | "currentPrice" | "reservePrice" | "estimateMin" | "estimateMax" | "startTime" | "endTime" | "status" | "watchers" | "featured" | "createdAt" | "updatedAt", ExtArgs["result"]["auctionLot"]>;
export type AuctionLotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
    bids?: boolean | Prisma.AuctionLot$bidsArgs<ExtArgs>;
    _count?: boolean | Prisma.AuctionLotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AuctionLotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuctionLot";
    objects: {
        artwork: Prisma.$ArtworkPayload<ExtArgs>;
        bids: Prisma.$BidPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        artworkId: number;
        startingPrice: runtime.Decimal;
        currentPrice: runtime.Decimal | null;
        reservePrice: runtime.Decimal | null;
        estimateMin: runtime.Decimal | null;
        estimateMax: runtime.Decimal | null;
        startTime: Date;
        endTime: Date;
        status: $Enums.AuctionStatus;
        watchers: number;
        featured: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["auctionLot"]>;
    composites: {};
};
export type AuctionLotGetPayload<S extends boolean | null | undefined | AuctionLotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload, S>;
export type AuctionLotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuctionLotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuctionLotCountAggregateInputType | true;
};
export interface AuctionLotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuctionLot'];
        meta: {
            name: 'AuctionLot';
        };
    };
    /**
     * Find zero or one AuctionLot that matches the filter.
     * @param {AuctionLotFindUniqueArgs} args - Arguments to find a AuctionLot
     * @example
     * // Get one AuctionLot
     * const auctionLot = await prisma.auctionLot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionLotFindUniqueArgs>(args: Prisma.SelectSubset<T, AuctionLotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AuctionLot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuctionLotFindUniqueOrThrowArgs} args - Arguments to find a AuctionLot
     * @example
     * // Get one AuctionLot
     * const auctionLot = await prisma.auctionLot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionLotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuctionLotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AuctionLot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionLotFindFirstArgs} args - Arguments to find a AuctionLot
     * @example
     * // Get one AuctionLot
     * const auctionLot = await prisma.auctionLot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionLotFindFirstArgs>(args?: Prisma.SelectSubset<T, AuctionLotFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AuctionLot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionLotFindFirstOrThrowArgs} args - Arguments to find a AuctionLot
     * @example
     * // Get one AuctionLot
     * const auctionLot = await prisma.auctionLot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionLotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuctionLotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AuctionLots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionLotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuctionLots
     * const auctionLots = await prisma.auctionLot.findMany()
     *
     * // Get first 10 AuctionLots
     * const auctionLots = await prisma.auctionLot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const auctionLotWithIdOnly = await prisma.auctionLot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AuctionLotFindManyArgs>(args?: Prisma.SelectSubset<T, AuctionLotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AuctionLot.
     * @param {AuctionLotCreateArgs} args - Arguments to create a AuctionLot.
     * @example
     * // Create one AuctionLot
     * const AuctionLot = await prisma.auctionLot.create({
     *   data: {
     *     // ... data to create a AuctionLot
     *   }
     * })
     *
     */
    create<T extends AuctionLotCreateArgs>(args: Prisma.SelectSubset<T, AuctionLotCreateArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AuctionLots.
     * @param {AuctionLotCreateManyArgs} args - Arguments to create many AuctionLots.
     * @example
     * // Create many AuctionLots
     * const auctionLot = await prisma.auctionLot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuctionLotCreateManyArgs>(args?: Prisma.SelectSubset<T, AuctionLotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AuctionLot.
     * @param {AuctionLotDeleteArgs} args - Arguments to delete one AuctionLot.
     * @example
     * // Delete one AuctionLot
     * const AuctionLot = await prisma.auctionLot.delete({
     *   where: {
     *     // ... filter to delete one AuctionLot
     *   }
     * })
     *
     */
    delete<T extends AuctionLotDeleteArgs>(args: Prisma.SelectSubset<T, AuctionLotDeleteArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AuctionLot.
     * @param {AuctionLotUpdateArgs} args - Arguments to update one AuctionLot.
     * @example
     * // Update one AuctionLot
     * const auctionLot = await prisma.auctionLot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuctionLotUpdateArgs>(args: Prisma.SelectSubset<T, AuctionLotUpdateArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AuctionLots.
     * @param {AuctionLotDeleteManyArgs} args - Arguments to filter AuctionLots to delete.
     * @example
     * // Delete a few AuctionLots
     * const { count } = await prisma.auctionLot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuctionLotDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuctionLotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AuctionLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionLotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuctionLots
     * const auctionLot = await prisma.auctionLot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuctionLotUpdateManyArgs>(args: Prisma.SelectSubset<T, AuctionLotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AuctionLot.
     * @param {AuctionLotUpsertArgs} args - Arguments to update or create a AuctionLot.
     * @example
     * // Update or create a AuctionLot
     * const auctionLot = await prisma.auctionLot.upsert({
     *   create: {
     *     // ... data to create a AuctionLot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuctionLot we want to update
     *   }
     * })
     */
    upsert<T extends AuctionLotUpsertArgs>(args: Prisma.SelectSubset<T, AuctionLotUpsertArgs<ExtArgs>>): Prisma.Prisma__AuctionLotClient<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AuctionLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionLotCountArgs} args - Arguments to filter AuctionLots to count.
     * @example
     * // Count the number of AuctionLots
     * const count = await prisma.auctionLot.count({
     *   where: {
     *     // ... the filter for the AuctionLots we want to count
     *   }
     * })
    **/
    count<T extends AuctionLotCountArgs>(args?: Prisma.Subset<T, AuctionLotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuctionLotCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AuctionLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionLotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuctionLotAggregateArgs>(args: Prisma.Subset<T, AuctionLotAggregateArgs>): Prisma.PrismaPromise<GetAuctionLotAggregateType<T>>;
    /**
     * Group by AuctionLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionLotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AuctionLotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuctionLotGroupByArgs['orderBy'];
    } : {
        orderBy?: AuctionLotGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuctionLotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AuctionLot model
     */
    readonly fields: AuctionLotFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AuctionLot.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AuctionLotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    artwork<T extends Prisma.ArtworkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ArtworkDefaultArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bids<T extends Prisma.AuctionLot$bidsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuctionLot$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the AuctionLot model
 */
export interface AuctionLotFieldRefs {
    readonly id: Prisma.FieldRef<"AuctionLot", 'Int'>;
    readonly artworkId: Prisma.FieldRef<"AuctionLot", 'Int'>;
    readonly startingPrice: Prisma.FieldRef<"AuctionLot", 'Decimal'>;
    readonly currentPrice: Prisma.FieldRef<"AuctionLot", 'Decimal'>;
    readonly reservePrice: Prisma.FieldRef<"AuctionLot", 'Decimal'>;
    readonly estimateMin: Prisma.FieldRef<"AuctionLot", 'Decimal'>;
    readonly estimateMax: Prisma.FieldRef<"AuctionLot", 'Decimal'>;
    readonly startTime: Prisma.FieldRef<"AuctionLot", 'DateTime'>;
    readonly endTime: Prisma.FieldRef<"AuctionLot", 'DateTime'>;
    readonly status: Prisma.FieldRef<"AuctionLot", 'AuctionStatus'>;
    readonly watchers: Prisma.FieldRef<"AuctionLot", 'Int'>;
    readonly featured: Prisma.FieldRef<"AuctionLot", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"AuctionLot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AuctionLot", 'DateTime'>;
}
/**
 * AuctionLot findUnique
 */
export type AuctionLotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * Filter, which AuctionLot to fetch.
     */
    where: Prisma.AuctionLotWhereUniqueInput;
};
/**
 * AuctionLot findUniqueOrThrow
 */
export type AuctionLotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * Filter, which AuctionLot to fetch.
     */
    where: Prisma.AuctionLotWhereUniqueInput;
};
/**
 * AuctionLot findFirst
 */
export type AuctionLotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * Filter, which AuctionLot to fetch.
     */
    where?: Prisma.AuctionLotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuctionLots to fetch.
     */
    orderBy?: Prisma.AuctionLotOrderByWithRelationInput | Prisma.AuctionLotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuctionLots.
     */
    cursor?: Prisma.AuctionLotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuctionLots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuctionLots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuctionLots.
     */
    distinct?: Prisma.AuctionLotScalarFieldEnum | Prisma.AuctionLotScalarFieldEnum[];
};
/**
 * AuctionLot findFirstOrThrow
 */
export type AuctionLotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * Filter, which AuctionLot to fetch.
     */
    where?: Prisma.AuctionLotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuctionLots to fetch.
     */
    orderBy?: Prisma.AuctionLotOrderByWithRelationInput | Prisma.AuctionLotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuctionLots.
     */
    cursor?: Prisma.AuctionLotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuctionLots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuctionLots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuctionLots.
     */
    distinct?: Prisma.AuctionLotScalarFieldEnum | Prisma.AuctionLotScalarFieldEnum[];
};
/**
 * AuctionLot findMany
 */
export type AuctionLotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * Filter, which AuctionLots to fetch.
     */
    where?: Prisma.AuctionLotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuctionLots to fetch.
     */
    orderBy?: Prisma.AuctionLotOrderByWithRelationInput | Prisma.AuctionLotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuctionLots.
     */
    cursor?: Prisma.AuctionLotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuctionLots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuctionLots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuctionLots.
     */
    distinct?: Prisma.AuctionLotScalarFieldEnum | Prisma.AuctionLotScalarFieldEnum[];
};
/**
 * AuctionLot create
 */
export type AuctionLotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * The data needed to create a AuctionLot.
     */
    data: Prisma.XOR<Prisma.AuctionLotCreateInput, Prisma.AuctionLotUncheckedCreateInput>;
};
/**
 * AuctionLot createMany
 */
export type AuctionLotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuctionLots.
     */
    data: Prisma.AuctionLotCreateManyInput | Prisma.AuctionLotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AuctionLot update
 */
export type AuctionLotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * The data needed to update a AuctionLot.
     */
    data: Prisma.XOR<Prisma.AuctionLotUpdateInput, Prisma.AuctionLotUncheckedUpdateInput>;
    /**
     * Choose, which AuctionLot to update.
     */
    where: Prisma.AuctionLotWhereUniqueInput;
};
/**
 * AuctionLot updateMany
 */
export type AuctionLotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AuctionLots.
     */
    data: Prisma.XOR<Prisma.AuctionLotUpdateManyMutationInput, Prisma.AuctionLotUncheckedUpdateManyInput>;
    /**
     * Filter which AuctionLots to update
     */
    where?: Prisma.AuctionLotWhereInput;
    /**
     * Limit how many AuctionLots to update.
     */
    limit?: number;
};
/**
 * AuctionLot upsert
 */
export type AuctionLotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * The filter to search for the AuctionLot to update in case it exists.
     */
    where: Prisma.AuctionLotWhereUniqueInput;
    /**
     * In case the AuctionLot found by the `where` argument doesn't exist, create a new AuctionLot with this data.
     */
    create: Prisma.XOR<Prisma.AuctionLotCreateInput, Prisma.AuctionLotUncheckedCreateInput>;
    /**
     * In case the AuctionLot was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AuctionLotUpdateInput, Prisma.AuctionLotUncheckedUpdateInput>;
};
/**
 * AuctionLot delete
 */
export type AuctionLotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    /**
     * Filter which AuctionLot to delete.
     */
    where: Prisma.AuctionLotWhereUniqueInput;
};
/**
 * AuctionLot deleteMany
 */
export type AuctionLotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AuctionLots to delete
     */
    where?: Prisma.AuctionLotWhereInput;
    /**
     * Limit how many AuctionLots to delete.
     */
    limit?: number;
};
/**
 * AuctionLot.bids
 */
export type AuctionLot$bidsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: Prisma.BidSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bid
     */
    omit?: Prisma.BidOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BidInclude<ExtArgs> | null;
    where?: Prisma.BidWhereInput;
    orderBy?: Prisma.BidOrderByWithRelationInput | Prisma.BidOrderByWithRelationInput[];
    cursor?: Prisma.BidWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BidScalarFieldEnum | Prisma.BidScalarFieldEnum[];
};
/**
 * AuctionLot without action
 */
export type AuctionLotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
};
//# sourceMappingURL=AuctionLot.d.ts.map