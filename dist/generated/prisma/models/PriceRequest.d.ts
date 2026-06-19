import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PriceRequest
 *
 */
export type PriceRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$PriceRequestPayload>;
export type AggregatePriceRequest = {
    _count: PriceRequestCountAggregateOutputType | null;
    _avg: PriceRequestAvgAggregateOutputType | null;
    _sum: PriceRequestSumAggregateOutputType | null;
    _min: PriceRequestMinAggregateOutputType | null;
    _max: PriceRequestMaxAggregateOutputType | null;
};
export type PriceRequestAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkId: number | null;
};
export type PriceRequestSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkId: number | null;
};
export type PriceRequestMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkId: number | null;
    message: string | null;
    status: $Enums.PORStatus | null;
    response: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PriceRequestMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkId: number | null;
    message: string | null;
    status: $Enums.PORStatus | null;
    response: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PriceRequestCountAggregateOutputType = {
    id: number;
    userId: number;
    artworkId: number;
    message: number;
    status: number;
    response: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PriceRequestAvgAggregateInputType = {
    id?: true;
    userId?: true;
    artworkId?: true;
};
export type PriceRequestSumAggregateInputType = {
    id?: true;
    userId?: true;
    artworkId?: true;
};
export type PriceRequestMinAggregateInputType = {
    id?: true;
    userId?: true;
    artworkId?: true;
    message?: true;
    status?: true;
    response?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PriceRequestMaxAggregateInputType = {
    id?: true;
    userId?: true;
    artworkId?: true;
    message?: true;
    status?: true;
    response?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PriceRequestCountAggregateInputType = {
    id?: true;
    userId?: true;
    artworkId?: true;
    message?: true;
    status?: true;
    response?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PriceRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRequest to aggregate.
     */
    where?: Prisma.PriceRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceRequests to fetch.
     */
    orderBy?: Prisma.PriceRequestOrderByWithRelationInput | Prisma.PriceRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PriceRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PriceRequests
    **/
    _count?: true | PriceRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PriceRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PriceRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PriceRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PriceRequestMaxAggregateInputType;
};
export type GetPriceRequestAggregateType<T extends PriceRequestAggregateArgs> = {
    [P in keyof T & keyof AggregatePriceRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePriceRequest[P]> : Prisma.GetScalarType<T[P], AggregatePriceRequest[P]>;
};
export type PriceRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceRequestWhereInput;
    orderBy?: Prisma.PriceRequestOrderByWithAggregationInput | Prisma.PriceRequestOrderByWithAggregationInput[];
    by: Prisma.PriceRequestScalarFieldEnum[] | Prisma.PriceRequestScalarFieldEnum;
    having?: Prisma.PriceRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PriceRequestCountAggregateInputType | true;
    _avg?: PriceRequestAvgAggregateInputType;
    _sum?: PriceRequestSumAggregateInputType;
    _min?: PriceRequestMinAggregateInputType;
    _max?: PriceRequestMaxAggregateInputType;
};
export type PriceRequestGroupByOutputType = {
    id: number;
    userId: number;
    artworkId: number;
    message: string | null;
    status: $Enums.PORStatus;
    response: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PriceRequestCountAggregateOutputType | null;
    _avg: PriceRequestAvgAggregateOutputType | null;
    _sum: PriceRequestSumAggregateOutputType | null;
    _min: PriceRequestMinAggregateOutputType | null;
    _max: PriceRequestMaxAggregateOutputType | null;
};
export type GetPriceRequestGroupByPayload<T extends PriceRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PriceRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PriceRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PriceRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PriceRequestGroupByOutputType[P]>;
}>>;
export type PriceRequestWhereInput = {
    AND?: Prisma.PriceRequestWhereInput | Prisma.PriceRequestWhereInput[];
    OR?: Prisma.PriceRequestWhereInput[];
    NOT?: Prisma.PriceRequestWhereInput | Prisma.PriceRequestWhereInput[];
    id?: Prisma.IntFilter<"PriceRequest"> | number;
    userId?: Prisma.IntFilter<"PriceRequest"> | number;
    artworkId?: Prisma.IntFilter<"PriceRequest"> | number;
    message?: Prisma.StringNullableFilter<"PriceRequest"> | string | null;
    status?: Prisma.EnumPORStatusFilter<"PriceRequest"> | $Enums.PORStatus;
    response?: Prisma.StringNullableFilter<"PriceRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PriceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PriceRequest"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
    messages?: Prisma.PorMessageListRelationFilter;
};
export type PriceRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    artwork?: Prisma.ArtworkOrderByWithRelationInput;
    messages?: Prisma.PorMessageOrderByRelationAggregateInput;
    _relevance?: Prisma.PriceRequestOrderByRelevanceInput;
};
export type PriceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PriceRequestWhereInput | Prisma.PriceRequestWhereInput[];
    OR?: Prisma.PriceRequestWhereInput[];
    NOT?: Prisma.PriceRequestWhereInput | Prisma.PriceRequestWhereInput[];
    userId?: Prisma.IntFilter<"PriceRequest"> | number;
    artworkId?: Prisma.IntFilter<"PriceRequest"> | number;
    message?: Prisma.StringNullableFilter<"PriceRequest"> | string | null;
    status?: Prisma.EnumPORStatusFilter<"PriceRequest"> | $Enums.PORStatus;
    response?: Prisma.StringNullableFilter<"PriceRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PriceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PriceRequest"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
    messages?: Prisma.PorMessageListRelationFilter;
}, "id">;
export type PriceRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PriceRequestCountOrderByAggregateInput;
    _avg?: Prisma.PriceRequestAvgOrderByAggregateInput;
    _max?: Prisma.PriceRequestMaxOrderByAggregateInput;
    _min?: Prisma.PriceRequestMinOrderByAggregateInput;
    _sum?: Prisma.PriceRequestSumOrderByAggregateInput;
};
export type PriceRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.PriceRequestScalarWhereWithAggregatesInput | Prisma.PriceRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.PriceRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PriceRequestScalarWhereWithAggregatesInput | Prisma.PriceRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PriceRequest"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"PriceRequest"> | number;
    artworkId?: Prisma.IntWithAggregatesFilter<"PriceRequest"> | number;
    message?: Prisma.StringNullableWithAggregatesFilter<"PriceRequest"> | string | null;
    status?: Prisma.EnumPORStatusWithAggregatesFilter<"PriceRequest"> | $Enums.PORStatus;
    response?: Prisma.StringNullableWithAggregatesFilter<"PriceRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PriceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PriceRequest"> | Date | string;
};
export type PriceRequestCreateInput = {
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPriceRequestsInput;
    artwork: Prisma.ArtworkCreateNestedOneWithoutPriceRequestsInput;
    messages?: Prisma.PorMessageCreateNestedManyWithoutPorInput;
};
export type PriceRequestUncheckedCreateInput = {
    id?: number;
    userId: number;
    artworkId: number;
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.PorMessageUncheckedCreateNestedManyWithoutPorInput;
};
export type PriceRequestUpdateInput = {
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPriceRequestsNestedInput;
    artwork?: Prisma.ArtworkUpdateOneRequiredWithoutPriceRequestsNestedInput;
    messages?: Prisma.PorMessageUpdateManyWithoutPorNestedInput;
};
export type PriceRequestUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.PorMessageUncheckedUpdateManyWithoutPorNestedInput;
};
export type PriceRequestCreateManyInput = {
    id?: number;
    userId: number;
    artworkId: number;
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PriceRequestUpdateManyMutationInput = {
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceRequestUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceRequestListRelationFilter = {
    every?: Prisma.PriceRequestWhereInput;
    some?: Prisma.PriceRequestWhereInput;
    none?: Prisma.PriceRequestWhereInput;
};
export type PriceRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PriceRequestOrderByRelevanceInput = {
    fields: Prisma.PriceRequestOrderByRelevanceFieldEnum | Prisma.PriceRequestOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type PriceRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriceRequestAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
};
export type PriceRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriceRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    response?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PriceRequestSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
};
export type PriceRequestScalarRelationFilter = {
    is?: Prisma.PriceRequestWhereInput;
    isNot?: Prisma.PriceRequestWhereInput;
};
export type PriceRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutUserInput, Prisma.PriceRequestUncheckedCreateWithoutUserInput> | Prisma.PriceRequestCreateWithoutUserInput[] | Prisma.PriceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutUserInput | Prisma.PriceRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PriceRequestCreateManyUserInputEnvelope;
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
};
export type PriceRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutUserInput, Prisma.PriceRequestUncheckedCreateWithoutUserInput> | Prisma.PriceRequestCreateWithoutUserInput[] | Prisma.PriceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutUserInput | Prisma.PriceRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PriceRequestCreateManyUserInputEnvelope;
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
};
export type PriceRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutUserInput, Prisma.PriceRequestUncheckedCreateWithoutUserInput> | Prisma.PriceRequestCreateWithoutUserInput[] | Prisma.PriceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutUserInput | Prisma.PriceRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PriceRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.PriceRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PriceRequestCreateManyUserInputEnvelope;
    set?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    disconnect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    delete?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    update?: Prisma.PriceRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.PriceRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PriceRequestUpdateManyWithWhereWithoutUserInput | Prisma.PriceRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PriceRequestScalarWhereInput | Prisma.PriceRequestScalarWhereInput[];
};
export type PriceRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutUserInput, Prisma.PriceRequestUncheckedCreateWithoutUserInput> | Prisma.PriceRequestCreateWithoutUserInput[] | Prisma.PriceRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutUserInput | Prisma.PriceRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PriceRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.PriceRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PriceRequestCreateManyUserInputEnvelope;
    set?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    disconnect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    delete?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    update?: Prisma.PriceRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.PriceRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PriceRequestUpdateManyWithWhereWithoutUserInput | Prisma.PriceRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PriceRequestScalarWhereInput | Prisma.PriceRequestScalarWhereInput[];
};
export type PriceRequestCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutArtworkInput, Prisma.PriceRequestUncheckedCreateWithoutArtworkInput> | Prisma.PriceRequestCreateWithoutArtworkInput[] | Prisma.PriceRequestUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutArtworkInput | Prisma.PriceRequestCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.PriceRequestCreateManyArtworkInputEnvelope;
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
};
export type PriceRequestUncheckedCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutArtworkInput, Prisma.PriceRequestUncheckedCreateWithoutArtworkInput> | Prisma.PriceRequestCreateWithoutArtworkInput[] | Prisma.PriceRequestUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutArtworkInput | Prisma.PriceRequestCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.PriceRequestCreateManyArtworkInputEnvelope;
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
};
export type PriceRequestUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutArtworkInput, Prisma.PriceRequestUncheckedCreateWithoutArtworkInput> | Prisma.PriceRequestCreateWithoutArtworkInput[] | Prisma.PriceRequestUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutArtworkInput | Prisma.PriceRequestCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.PriceRequestUpsertWithWhereUniqueWithoutArtworkInput | Prisma.PriceRequestUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.PriceRequestCreateManyArtworkInputEnvelope;
    set?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    disconnect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    delete?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    update?: Prisma.PriceRequestUpdateWithWhereUniqueWithoutArtworkInput | Prisma.PriceRequestUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.PriceRequestUpdateManyWithWhereWithoutArtworkInput | Prisma.PriceRequestUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.PriceRequestScalarWhereInput | Prisma.PriceRequestScalarWhereInput[];
};
export type PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutArtworkInput, Prisma.PriceRequestUncheckedCreateWithoutArtworkInput> | Prisma.PriceRequestCreateWithoutArtworkInput[] | Prisma.PriceRequestUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutArtworkInput | Prisma.PriceRequestCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.PriceRequestUpsertWithWhereUniqueWithoutArtworkInput | Prisma.PriceRequestUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.PriceRequestCreateManyArtworkInputEnvelope;
    set?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    disconnect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    delete?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    connect?: Prisma.PriceRequestWhereUniqueInput | Prisma.PriceRequestWhereUniqueInput[];
    update?: Prisma.PriceRequestUpdateWithWhereUniqueWithoutArtworkInput | Prisma.PriceRequestUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.PriceRequestUpdateManyWithWhereWithoutArtworkInput | Prisma.PriceRequestUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.PriceRequestScalarWhereInput | Prisma.PriceRequestScalarWhereInput[];
};
export type EnumPORStatusFieldUpdateOperationsInput = {
    set?: $Enums.PORStatus;
};
export type PriceRequestCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutMessagesInput, Prisma.PriceRequestUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.PriceRequestWhereUniqueInput;
};
export type PriceRequestUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.PriceRequestCreateWithoutMessagesInput, Prisma.PriceRequestUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.PriceRequestCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.PriceRequestUpsertWithoutMessagesInput;
    connect?: Prisma.PriceRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PriceRequestUpdateToOneWithWhereWithoutMessagesInput, Prisma.PriceRequestUpdateWithoutMessagesInput>, Prisma.PriceRequestUncheckedUpdateWithoutMessagesInput>;
};
export type PriceRequestCreateWithoutUserInput = {
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artwork: Prisma.ArtworkCreateNestedOneWithoutPriceRequestsInput;
    messages?: Prisma.PorMessageCreateNestedManyWithoutPorInput;
};
export type PriceRequestUncheckedCreateWithoutUserInput = {
    id?: number;
    artworkId: number;
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.PorMessageUncheckedCreateNestedManyWithoutPorInput;
};
export type PriceRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.PriceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceRequestCreateWithoutUserInput, Prisma.PriceRequestUncheckedCreateWithoutUserInput>;
};
export type PriceRequestCreateManyUserInputEnvelope = {
    data: Prisma.PriceRequestCreateManyUserInput | Prisma.PriceRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PriceRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PriceRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.PriceRequestUpdateWithoutUserInput, Prisma.PriceRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PriceRequestCreateWithoutUserInput, Prisma.PriceRequestUncheckedCreateWithoutUserInput>;
};
export type PriceRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PriceRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.PriceRequestUpdateWithoutUserInput, Prisma.PriceRequestUncheckedUpdateWithoutUserInput>;
};
export type PriceRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PriceRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.PriceRequestUpdateManyMutationInput, Prisma.PriceRequestUncheckedUpdateManyWithoutUserInput>;
};
export type PriceRequestScalarWhereInput = {
    AND?: Prisma.PriceRequestScalarWhereInput | Prisma.PriceRequestScalarWhereInput[];
    OR?: Prisma.PriceRequestScalarWhereInput[];
    NOT?: Prisma.PriceRequestScalarWhereInput | Prisma.PriceRequestScalarWhereInput[];
    id?: Prisma.IntFilter<"PriceRequest"> | number;
    userId?: Prisma.IntFilter<"PriceRequest"> | number;
    artworkId?: Prisma.IntFilter<"PriceRequest"> | number;
    message?: Prisma.StringNullableFilter<"PriceRequest"> | string | null;
    status?: Prisma.EnumPORStatusFilter<"PriceRequest"> | $Enums.PORStatus;
    response?: Prisma.StringNullableFilter<"PriceRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PriceRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PriceRequest"> | Date | string;
};
export type PriceRequestCreateWithoutArtworkInput = {
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPriceRequestsInput;
    messages?: Prisma.PorMessageCreateNestedManyWithoutPorInput;
};
export type PriceRequestUncheckedCreateWithoutArtworkInput = {
    id?: number;
    userId: number;
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.PorMessageUncheckedCreateNestedManyWithoutPorInput;
};
export type PriceRequestCreateOrConnectWithoutArtworkInput = {
    where: Prisma.PriceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceRequestCreateWithoutArtworkInput, Prisma.PriceRequestUncheckedCreateWithoutArtworkInput>;
};
export type PriceRequestCreateManyArtworkInputEnvelope = {
    data: Prisma.PriceRequestCreateManyArtworkInput | Prisma.PriceRequestCreateManyArtworkInput[];
    skipDuplicates?: boolean;
};
export type PriceRequestUpsertWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.PriceRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.PriceRequestUpdateWithoutArtworkInput, Prisma.PriceRequestUncheckedUpdateWithoutArtworkInput>;
    create: Prisma.XOR<Prisma.PriceRequestCreateWithoutArtworkInput, Prisma.PriceRequestUncheckedCreateWithoutArtworkInput>;
};
export type PriceRequestUpdateWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.PriceRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.PriceRequestUpdateWithoutArtworkInput, Prisma.PriceRequestUncheckedUpdateWithoutArtworkInput>;
};
export type PriceRequestUpdateManyWithWhereWithoutArtworkInput = {
    where: Prisma.PriceRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.PriceRequestUpdateManyMutationInput, Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkInput>;
};
export type PriceRequestCreateWithoutMessagesInput = {
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPriceRequestsInput;
    artwork: Prisma.ArtworkCreateNestedOneWithoutPriceRequestsInput;
};
export type PriceRequestUncheckedCreateWithoutMessagesInput = {
    id?: number;
    userId: number;
    artworkId: number;
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PriceRequestCreateOrConnectWithoutMessagesInput = {
    where: Prisma.PriceRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceRequestCreateWithoutMessagesInput, Prisma.PriceRequestUncheckedCreateWithoutMessagesInput>;
};
export type PriceRequestUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.PriceRequestUpdateWithoutMessagesInput, Prisma.PriceRequestUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.PriceRequestCreateWithoutMessagesInput, Prisma.PriceRequestUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.PriceRequestWhereInput;
};
export type PriceRequestUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.PriceRequestWhereInput;
    data: Prisma.XOR<Prisma.PriceRequestUpdateWithoutMessagesInput, Prisma.PriceRequestUncheckedUpdateWithoutMessagesInput>;
};
export type PriceRequestUpdateWithoutMessagesInput = {
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPriceRequestsNestedInput;
    artwork?: Prisma.ArtworkUpdateOneRequiredWithoutPriceRequestsNestedInput;
};
export type PriceRequestUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceRequestCreateManyUserInput = {
    id?: number;
    artworkId: number;
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PriceRequestUpdateWithoutUserInput = {
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artwork?: Prisma.ArtworkUpdateOneRequiredWithoutPriceRequestsNestedInput;
    messages?: Prisma.PorMessageUpdateManyWithoutPorNestedInput;
};
export type PriceRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.PorMessageUncheckedUpdateManyWithoutPorNestedInput;
};
export type PriceRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceRequestCreateManyArtworkInput = {
    id?: number;
    userId: number;
    message?: string | null;
    status?: $Enums.PORStatus;
    response?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PriceRequestUpdateWithoutArtworkInput = {
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPriceRequestsNestedInput;
    messages?: Prisma.PorMessageUpdateManyWithoutPorNestedInput;
};
export type PriceRequestUncheckedUpdateWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.PorMessageUncheckedUpdateManyWithoutPorNestedInput;
};
export type PriceRequestUncheckedUpdateManyWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPORStatusFieldUpdateOperationsInput | $Enums.PORStatus;
    response?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PriceRequestCountOutputType
 */
export type PriceRequestCountOutputType = {
    messages: number;
};
export type PriceRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | PriceRequestCountOutputTypeCountMessagesArgs;
};
/**
 * PriceRequestCountOutputType without action
 */
export type PriceRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequestCountOutputType
     */
    select?: Prisma.PriceRequestCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PriceRequestCountOutputType without action
 */
export type PriceRequestCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PorMessageWhereInput;
};
export type PriceRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    artworkId?: boolean;
    message?: boolean;
    status?: boolean;
    response?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.PriceRequest$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.PriceRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priceRequest"]>;
export type PriceRequestSelectScalar = {
    id?: boolean;
    userId?: boolean;
    artworkId?: boolean;
    message?: boolean;
    status?: boolean;
    response?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PriceRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "artworkId" | "message" | "status" | "response" | "createdAt" | "updatedAt", ExtArgs["result"]["priceRequest"]>;
export type PriceRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.PriceRequest$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.PriceRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $PriceRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PriceRequest";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        artwork: Prisma.$ArtworkPayload<ExtArgs>;
        messages: Prisma.$PorMessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        artworkId: number;
        message: string | null;
        status: $Enums.PORStatus;
        response: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["priceRequest"]>;
    composites: {};
};
export type PriceRequestGetPayload<S extends boolean | null | undefined | PriceRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload, S>;
export type PriceRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PriceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PriceRequestCountAggregateInputType | true;
};
export interface PriceRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PriceRequest'];
        meta: {
            name: 'PriceRequest';
        };
    };
    /**
     * Find zero or one PriceRequest that matches the filter.
     * @param {PriceRequestFindUniqueArgs} args - Arguments to find a PriceRequest
     * @example
     * // Get one PriceRequest
     * const priceRequest = await prisma.priceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, PriceRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PriceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceRequestFindUniqueOrThrowArgs} args - Arguments to find a PriceRequest
     * @example
     * // Get one PriceRequest
     * const priceRequest = await prisma.priceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PriceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PriceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRequestFindFirstArgs} args - Arguments to find a PriceRequest
     * @example
     * // Get one PriceRequest
     * const priceRequest = await prisma.priceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, PriceRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PriceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRequestFindFirstOrThrowArgs} args - Arguments to find a PriceRequest
     * @example
     * // Get one PriceRequest
     * const priceRequest = await prisma.priceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PriceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PriceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceRequests
     * const priceRequests = await prisma.priceRequest.findMany()
     *
     * // Get first 10 PriceRequests
     * const priceRequests = await prisma.priceRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const priceRequestWithIdOnly = await prisma.priceRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PriceRequestFindManyArgs>(args?: Prisma.SelectSubset<T, PriceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PriceRequest.
     * @param {PriceRequestCreateArgs} args - Arguments to create a PriceRequest.
     * @example
     * // Create one PriceRequest
     * const PriceRequest = await prisma.priceRequest.create({
     *   data: {
     *     // ... data to create a PriceRequest
     *   }
     * })
     *
     */
    create<T extends PriceRequestCreateArgs>(args: Prisma.SelectSubset<T, PriceRequestCreateArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PriceRequests.
     * @param {PriceRequestCreateManyArgs} args - Arguments to create many PriceRequests.
     * @example
     * // Create many PriceRequests
     * const priceRequest = await prisma.priceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PriceRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, PriceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a PriceRequest.
     * @param {PriceRequestDeleteArgs} args - Arguments to delete one PriceRequest.
     * @example
     * // Delete one PriceRequest
     * const PriceRequest = await prisma.priceRequest.delete({
     *   where: {
     *     // ... filter to delete one PriceRequest
     *   }
     * })
     *
     */
    delete<T extends PriceRequestDeleteArgs>(args: Prisma.SelectSubset<T, PriceRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PriceRequest.
     * @param {PriceRequestUpdateArgs} args - Arguments to update one PriceRequest.
     * @example
     * // Update one PriceRequest
     * const priceRequest = await prisma.priceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PriceRequestUpdateArgs>(args: Prisma.SelectSubset<T, PriceRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PriceRequests.
     * @param {PriceRequestDeleteManyArgs} args - Arguments to filter PriceRequests to delete.
     * @example
     * // Delete a few PriceRequests
     * const { count } = await prisma.priceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PriceRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, PriceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PriceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceRequests
     * const priceRequest = await prisma.priceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PriceRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, PriceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one PriceRequest.
     * @param {PriceRequestUpsertArgs} args - Arguments to update or create a PriceRequest.
     * @example
     * // Update or create a PriceRequest
     * const priceRequest = await prisma.priceRequest.upsert({
     *   create: {
     *     // ... data to create a PriceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceRequest we want to update
     *   }
     * })
     */
    upsert<T extends PriceRequestUpsertArgs>(args: Prisma.SelectSubset<T, PriceRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__PriceRequestClient<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PriceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRequestCountArgs} args - Arguments to filter PriceRequests to count.
     * @example
     * // Count the number of PriceRequests
     * const count = await prisma.priceRequest.count({
     *   where: {
     *     // ... the filter for the PriceRequests we want to count
     *   }
     * })
    **/
    count<T extends PriceRequestCountArgs>(args?: Prisma.Subset<T, PriceRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PriceRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PriceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceRequestAggregateArgs>(args: Prisma.Subset<T, PriceRequestAggregateArgs>): Prisma.PrismaPromise<GetPriceRequestAggregateType<T>>;
    /**
     * Group by PriceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PriceRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PriceRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: PriceRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PriceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PriceRequest model
     */
    readonly fields: PriceRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PriceRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PriceRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    artwork<T extends Prisma.ArtworkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ArtworkDefaultArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.PriceRequest$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PriceRequest$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PorMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PriceRequest model
 */
export interface PriceRequestFieldRefs {
    readonly id: Prisma.FieldRef<"PriceRequest", 'Int'>;
    readonly userId: Prisma.FieldRef<"PriceRequest", 'Int'>;
    readonly artworkId: Prisma.FieldRef<"PriceRequest", 'Int'>;
    readonly message: Prisma.FieldRef<"PriceRequest", 'String'>;
    readonly status: Prisma.FieldRef<"PriceRequest", 'PORStatus'>;
    readonly response: Prisma.FieldRef<"PriceRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PriceRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PriceRequest", 'DateTime'>;
}
/**
 * PriceRequest findUnique
 */
export type PriceRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PriceRequest to fetch.
     */
    where: Prisma.PriceRequestWhereUniqueInput;
};
/**
 * PriceRequest findUniqueOrThrow
 */
export type PriceRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PriceRequest to fetch.
     */
    where: Prisma.PriceRequestWhereUniqueInput;
};
/**
 * PriceRequest findFirst
 */
export type PriceRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PriceRequest to fetch.
     */
    where?: Prisma.PriceRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceRequests to fetch.
     */
    orderBy?: Prisma.PriceRequestOrderByWithRelationInput | Prisma.PriceRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PriceRequests.
     */
    cursor?: Prisma.PriceRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceRequests.
     */
    distinct?: Prisma.PriceRequestScalarFieldEnum | Prisma.PriceRequestScalarFieldEnum[];
};
/**
 * PriceRequest findFirstOrThrow
 */
export type PriceRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PriceRequest to fetch.
     */
    where?: Prisma.PriceRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceRequests to fetch.
     */
    orderBy?: Prisma.PriceRequestOrderByWithRelationInput | Prisma.PriceRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PriceRequests.
     */
    cursor?: Prisma.PriceRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceRequests.
     */
    distinct?: Prisma.PriceRequestScalarFieldEnum | Prisma.PriceRequestScalarFieldEnum[];
};
/**
 * PriceRequest findMany
 */
export type PriceRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * Filter, which PriceRequests to fetch.
     */
    where?: Prisma.PriceRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceRequests to fetch.
     */
    orderBy?: Prisma.PriceRequestOrderByWithRelationInput | Prisma.PriceRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PriceRequests.
     */
    cursor?: Prisma.PriceRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceRequests.
     */
    distinct?: Prisma.PriceRequestScalarFieldEnum | Prisma.PriceRequestScalarFieldEnum[];
};
/**
 * PriceRequest create
 */
export type PriceRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a PriceRequest.
     */
    data: Prisma.XOR<Prisma.PriceRequestCreateInput, Prisma.PriceRequestUncheckedCreateInput>;
};
/**
 * PriceRequest createMany
 */
export type PriceRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceRequests.
     */
    data: Prisma.PriceRequestCreateManyInput | Prisma.PriceRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PriceRequest update
 */
export type PriceRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a PriceRequest.
     */
    data: Prisma.XOR<Prisma.PriceRequestUpdateInput, Prisma.PriceRequestUncheckedUpdateInput>;
    /**
     * Choose, which PriceRequest to update.
     */
    where: Prisma.PriceRequestWhereUniqueInput;
};
/**
 * PriceRequest updateMany
 */
export type PriceRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceRequests.
     */
    data: Prisma.XOR<Prisma.PriceRequestUpdateManyMutationInput, Prisma.PriceRequestUncheckedUpdateManyInput>;
    /**
     * Filter which PriceRequests to update
     */
    where?: Prisma.PriceRequestWhereInput;
    /**
     * Limit how many PriceRequests to update.
     */
    limit?: number;
};
/**
 * PriceRequest upsert
 */
export type PriceRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the PriceRequest to update in case it exists.
     */
    where: Prisma.PriceRequestWhereUniqueInput;
    /**
     * In case the PriceRequest found by the `where` argument doesn't exist, create a new PriceRequest with this data.
     */
    create: Prisma.XOR<Prisma.PriceRequestCreateInput, Prisma.PriceRequestUncheckedCreateInput>;
    /**
     * In case the PriceRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PriceRequestUpdateInput, Prisma.PriceRequestUncheckedUpdateInput>;
};
/**
 * PriceRequest delete
 */
export type PriceRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    /**
     * Filter which PriceRequest to delete.
     */
    where: Prisma.PriceRequestWhereUniqueInput;
};
/**
 * PriceRequest deleteMany
 */
export type PriceRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRequests to delete
     */
    where?: Prisma.PriceRequestWhereInput;
    /**
     * Limit how many PriceRequests to delete.
     */
    limit?: number;
};
/**
 * PriceRequest.messages
 */
export type PriceRequest$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PorMessage
     */
    select?: Prisma.PorMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PorMessage
     */
    omit?: Prisma.PorMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PorMessageInclude<ExtArgs> | null;
    where?: Prisma.PorMessageWhereInput;
    orderBy?: Prisma.PorMessageOrderByWithRelationInput | Prisma.PorMessageOrderByWithRelationInput[];
    cursor?: Prisma.PorMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PorMessageScalarFieldEnum | Prisma.PorMessageScalarFieldEnum[];
};
/**
 * PriceRequest without action
 */
export type PriceRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
};
//# sourceMappingURL=PriceRequest.d.ts.map