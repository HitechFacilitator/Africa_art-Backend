import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model AdvisorPlacement
 *
 */
export type AdvisorPlacementModel = runtime.Types.Result.DefaultSelection<Prisma.$AdvisorPlacementPayload>;
export type AggregateAdvisorPlacement = {
    _count: AdvisorPlacementCountAggregateOutputType | null;
    _avg: AdvisorPlacementAvgAggregateOutputType | null;
    _sum: AdvisorPlacementSumAggregateOutputType | null;
    _min: AdvisorPlacementMinAggregateOutputType | null;
    _max: AdvisorPlacementMaxAggregateOutputType | null;
};
export type AdvisorPlacementAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    valuation: runtime.Decimal | null;
    commission: runtime.Decimal | null;
};
export type AdvisorPlacementSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    valuation: runtime.Decimal | null;
    commission: runtime.Decimal | null;
};
export type AdvisorPlacementMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkTitle: string | null;
    artworkCulture: string | null;
    artworkEra: string | null;
    imageUrl: string | null;
    valuation: runtime.Decimal | null;
    commission: runtime.Decimal | null;
    clientName: string | null;
    status: string | null;
    notes: string | null;
    proposedDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdvisorPlacementMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkTitle: string | null;
    artworkCulture: string | null;
    artworkEra: string | null;
    imageUrl: string | null;
    valuation: runtime.Decimal | null;
    commission: runtime.Decimal | null;
    clientName: string | null;
    status: string | null;
    notes: string | null;
    proposedDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdvisorPlacementCountAggregateOutputType = {
    id: number;
    userId: number;
    artworkTitle: number;
    artworkCulture: number;
    artworkEra: number;
    imageUrl: number;
    valuation: number;
    commission: number;
    clientName: number;
    status: number;
    notes: number;
    proposedDate: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AdvisorPlacementAvgAggregateInputType = {
    id?: true;
    userId?: true;
    valuation?: true;
    commission?: true;
};
export type AdvisorPlacementSumAggregateInputType = {
    id?: true;
    userId?: true;
    valuation?: true;
    commission?: true;
};
export type AdvisorPlacementMinAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    artworkCulture?: true;
    artworkEra?: true;
    imageUrl?: true;
    valuation?: true;
    commission?: true;
    clientName?: true;
    status?: true;
    notes?: true;
    proposedDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdvisorPlacementMaxAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    artworkCulture?: true;
    artworkEra?: true;
    imageUrl?: true;
    valuation?: true;
    commission?: true;
    clientName?: true;
    status?: true;
    notes?: true;
    proposedDate?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdvisorPlacementCountAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    artworkCulture?: true;
    artworkEra?: true;
    imageUrl?: true;
    valuation?: true;
    commission?: true;
    clientName?: true;
    status?: true;
    notes?: true;
    proposedDate?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AdvisorPlacementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdvisorPlacement to aggregate.
     */
    where?: Prisma.AdvisorPlacementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorPlacements to fetch.
     */
    orderBy?: Prisma.AdvisorPlacementOrderByWithRelationInput | Prisma.AdvisorPlacementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdvisorPlacementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorPlacements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorPlacements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdvisorPlacements
    **/
    _count?: true | AdvisorPlacementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AdvisorPlacementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AdvisorPlacementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdvisorPlacementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdvisorPlacementMaxAggregateInputType;
};
export type GetAdvisorPlacementAggregateType<T extends AdvisorPlacementAggregateArgs> = {
    [P in keyof T & keyof AggregateAdvisorPlacement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdvisorPlacement[P]> : Prisma.GetScalarType<T[P], AggregateAdvisorPlacement[P]>;
};
export type AdvisorPlacementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdvisorPlacementWhereInput;
    orderBy?: Prisma.AdvisorPlacementOrderByWithAggregationInput | Prisma.AdvisorPlacementOrderByWithAggregationInput[];
    by: Prisma.AdvisorPlacementScalarFieldEnum[] | Prisma.AdvisorPlacementScalarFieldEnum;
    having?: Prisma.AdvisorPlacementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdvisorPlacementCountAggregateInputType | true;
    _avg?: AdvisorPlacementAvgAggregateInputType;
    _sum?: AdvisorPlacementSumAggregateInputType;
    _min?: AdvisorPlacementMinAggregateInputType;
    _max?: AdvisorPlacementMaxAggregateInputType;
};
export type AdvisorPlacementGroupByOutputType = {
    id: number;
    userId: number;
    artworkTitle: string | null;
    artworkCulture: string | null;
    artworkEra: string | null;
    imageUrl: string | null;
    valuation: runtime.Decimal | null;
    commission: runtime.Decimal | null;
    clientName: string | null;
    status: string;
    notes: string | null;
    proposedDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AdvisorPlacementCountAggregateOutputType | null;
    _avg: AdvisorPlacementAvgAggregateOutputType | null;
    _sum: AdvisorPlacementSumAggregateOutputType | null;
    _min: AdvisorPlacementMinAggregateOutputType | null;
    _max: AdvisorPlacementMaxAggregateOutputType | null;
};
export type GetAdvisorPlacementGroupByPayload<T extends AdvisorPlacementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdvisorPlacementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdvisorPlacementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdvisorPlacementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdvisorPlacementGroupByOutputType[P]>;
}>>;
export type AdvisorPlacementWhereInput = {
    AND?: Prisma.AdvisorPlacementWhereInput | Prisma.AdvisorPlacementWhereInput[];
    OR?: Prisma.AdvisorPlacementWhereInput[];
    NOT?: Prisma.AdvisorPlacementWhereInput | Prisma.AdvisorPlacementWhereInput[];
    id?: Prisma.IntFilter<"AdvisorPlacement"> | number;
    userId?: Prisma.IntFilter<"AdvisorPlacement"> | number;
    artworkTitle?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    artworkCulture?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    artworkEra?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    valuation?: Prisma.DecimalNullableFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.DecimalNullableFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    status?: Prisma.StringFilter<"AdvisorPlacement"> | string;
    notes?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    proposedDate?: Prisma.DateTimeNullableFilter<"AdvisorPlacement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorPlacement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdvisorPlacement"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AdvisorPlacementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    artworkCulture?: Prisma.SortOrderInput | Prisma.SortOrder;
    artworkEra?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    valuation?: Prisma.SortOrderInput | Prisma.SortOrder;
    commission?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.AdvisorPlacementOrderByRelevanceInput;
};
export type AdvisorPlacementWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AdvisorPlacementWhereInput | Prisma.AdvisorPlacementWhereInput[];
    OR?: Prisma.AdvisorPlacementWhereInput[];
    NOT?: Prisma.AdvisorPlacementWhereInput | Prisma.AdvisorPlacementWhereInput[];
    userId?: Prisma.IntFilter<"AdvisorPlacement"> | number;
    artworkTitle?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    artworkCulture?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    artworkEra?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    valuation?: Prisma.DecimalNullableFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.DecimalNullableFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    status?: Prisma.StringFilter<"AdvisorPlacement"> | string;
    notes?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    proposedDate?: Prisma.DateTimeNullableFilter<"AdvisorPlacement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorPlacement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdvisorPlacement"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AdvisorPlacementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    artworkCulture?: Prisma.SortOrderInput | Prisma.SortOrder;
    artworkEra?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    valuation?: Prisma.SortOrderInput | Prisma.SortOrder;
    commission?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientName?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AdvisorPlacementCountOrderByAggregateInput;
    _avg?: Prisma.AdvisorPlacementAvgOrderByAggregateInput;
    _max?: Prisma.AdvisorPlacementMaxOrderByAggregateInput;
    _min?: Prisma.AdvisorPlacementMinOrderByAggregateInput;
    _sum?: Prisma.AdvisorPlacementSumOrderByAggregateInput;
};
export type AdvisorPlacementScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdvisorPlacementScalarWhereWithAggregatesInput | Prisma.AdvisorPlacementScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdvisorPlacementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdvisorPlacementScalarWhereWithAggregatesInput | Prisma.AdvisorPlacementScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AdvisorPlacement"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"AdvisorPlacement"> | number;
    artworkTitle?: Prisma.StringNullableWithAggregatesFilter<"AdvisorPlacement"> | string | null;
    artworkCulture?: Prisma.StringNullableWithAggregatesFilter<"AdvisorPlacement"> | string | null;
    artworkEra?: Prisma.StringNullableWithAggregatesFilter<"AdvisorPlacement"> | string | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"AdvisorPlacement"> | string | null;
    valuation?: Prisma.DecimalNullableWithAggregatesFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.DecimalNullableWithAggregatesFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.StringNullableWithAggregatesFilter<"AdvisorPlacement"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"AdvisorPlacement"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"AdvisorPlacement"> | string | null;
    proposedDate?: Prisma.DateTimeNullableWithAggregatesFilter<"AdvisorPlacement"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdvisorPlacement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdvisorPlacement"> | Date | string;
};
export type AdvisorPlacementCreateInput = {
    artworkTitle?: string | null;
    artworkCulture?: string | null;
    artworkEra?: string | null;
    imageUrl?: string | null;
    valuation?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: string | null;
    status?: string;
    notes?: string | null;
    proposedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAdvisorPlacementsInput;
};
export type AdvisorPlacementUncheckedCreateInput = {
    id?: number;
    userId: number;
    artworkTitle?: string | null;
    artworkCulture?: string | null;
    artworkEra?: string | null;
    imageUrl?: string | null;
    valuation?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: string | null;
    status?: string;
    notes?: string | null;
    proposedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorPlacementUpdateInput = {
    artworkTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkCulture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkEra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuation?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAdvisorPlacementsNestedInput;
};
export type AdvisorPlacementUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkCulture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkEra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuation?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorPlacementCreateManyInput = {
    id?: number;
    userId: number;
    artworkTitle?: string | null;
    artworkCulture?: string | null;
    artworkEra?: string | null;
    imageUrl?: string | null;
    valuation?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: string | null;
    status?: string;
    notes?: string | null;
    proposedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorPlacementUpdateManyMutationInput = {
    artworkTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkCulture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkEra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuation?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorPlacementUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkCulture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkEra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuation?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorPlacementListRelationFilter = {
    every?: Prisma.AdvisorPlacementWhereInput;
    some?: Prisma.AdvisorPlacementWhereInput;
    none?: Prisma.AdvisorPlacementWhereInput;
};
export type AdvisorPlacementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdvisorPlacementOrderByRelevanceInput = {
    fields: Prisma.AdvisorPlacementOrderByRelevanceFieldEnum | Prisma.AdvisorPlacementOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AdvisorPlacementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    artworkCulture?: Prisma.SortOrder;
    artworkEra?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    valuation?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    proposedDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdvisorPlacementAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    valuation?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type AdvisorPlacementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    artworkCulture?: Prisma.SortOrder;
    artworkEra?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    valuation?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    proposedDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdvisorPlacementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    artworkCulture?: Prisma.SortOrder;
    artworkEra?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    valuation?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    proposedDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdvisorPlacementSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    valuation?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
};
export type AdvisorPlacementCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdvisorPlacementCreateWithoutUserInput, Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput> | Prisma.AdvisorPlacementCreateWithoutUserInput[] | Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput | Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AdvisorPlacementCreateManyUserInputEnvelope;
    connect?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
};
export type AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdvisorPlacementCreateWithoutUserInput, Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput> | Prisma.AdvisorPlacementCreateWithoutUserInput[] | Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput | Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AdvisorPlacementCreateManyUserInputEnvelope;
    connect?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
};
export type AdvisorPlacementUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdvisorPlacementCreateWithoutUserInput, Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput> | Prisma.AdvisorPlacementCreateWithoutUserInput[] | Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput | Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AdvisorPlacementUpsertWithWhereUniqueWithoutUserInput | Prisma.AdvisorPlacementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AdvisorPlacementCreateManyUserInputEnvelope;
    set?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    disconnect?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    delete?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    connect?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    update?: Prisma.AdvisorPlacementUpdateWithWhereUniqueWithoutUserInput | Prisma.AdvisorPlacementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AdvisorPlacementUpdateManyWithWhereWithoutUserInput | Prisma.AdvisorPlacementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AdvisorPlacementScalarWhereInput | Prisma.AdvisorPlacementScalarWhereInput[];
};
export type AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdvisorPlacementCreateWithoutUserInput, Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput> | Prisma.AdvisorPlacementCreateWithoutUserInput[] | Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput | Prisma.AdvisorPlacementCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AdvisorPlacementUpsertWithWhereUniqueWithoutUserInput | Prisma.AdvisorPlacementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AdvisorPlacementCreateManyUserInputEnvelope;
    set?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    disconnect?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    delete?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    connect?: Prisma.AdvisorPlacementWhereUniqueInput | Prisma.AdvisorPlacementWhereUniqueInput[];
    update?: Prisma.AdvisorPlacementUpdateWithWhereUniqueWithoutUserInput | Prisma.AdvisorPlacementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AdvisorPlacementUpdateManyWithWhereWithoutUserInput | Prisma.AdvisorPlacementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AdvisorPlacementScalarWhereInput | Prisma.AdvisorPlacementScalarWhereInput[];
};
export type AdvisorPlacementCreateWithoutUserInput = {
    artworkTitle?: string | null;
    artworkCulture?: string | null;
    artworkEra?: string | null;
    imageUrl?: string | null;
    valuation?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: string | null;
    status?: string;
    notes?: string | null;
    proposedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorPlacementUncheckedCreateWithoutUserInput = {
    id?: number;
    artworkTitle?: string | null;
    artworkCulture?: string | null;
    artworkEra?: string | null;
    imageUrl?: string | null;
    valuation?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: string | null;
    status?: string;
    notes?: string | null;
    proposedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorPlacementCreateOrConnectWithoutUserInput = {
    where: Prisma.AdvisorPlacementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdvisorPlacementCreateWithoutUserInput, Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput>;
};
export type AdvisorPlacementCreateManyUserInputEnvelope = {
    data: Prisma.AdvisorPlacementCreateManyUserInput | Prisma.AdvisorPlacementCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AdvisorPlacementUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AdvisorPlacementWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdvisorPlacementUpdateWithoutUserInput, Prisma.AdvisorPlacementUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AdvisorPlacementCreateWithoutUserInput, Prisma.AdvisorPlacementUncheckedCreateWithoutUserInput>;
};
export type AdvisorPlacementUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AdvisorPlacementWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdvisorPlacementUpdateWithoutUserInput, Prisma.AdvisorPlacementUncheckedUpdateWithoutUserInput>;
};
export type AdvisorPlacementUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AdvisorPlacementScalarWhereInput;
    data: Prisma.XOR<Prisma.AdvisorPlacementUpdateManyMutationInput, Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserInput>;
};
export type AdvisorPlacementScalarWhereInput = {
    AND?: Prisma.AdvisorPlacementScalarWhereInput | Prisma.AdvisorPlacementScalarWhereInput[];
    OR?: Prisma.AdvisorPlacementScalarWhereInput[];
    NOT?: Prisma.AdvisorPlacementScalarWhereInput | Prisma.AdvisorPlacementScalarWhereInput[];
    id?: Prisma.IntFilter<"AdvisorPlacement"> | number;
    userId?: Prisma.IntFilter<"AdvisorPlacement"> | number;
    artworkTitle?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    artworkCulture?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    artworkEra?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    valuation?: Prisma.DecimalNullableFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.DecimalNullableFilter<"AdvisorPlacement"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    status?: Prisma.StringFilter<"AdvisorPlacement"> | string;
    notes?: Prisma.StringNullableFilter<"AdvisorPlacement"> | string | null;
    proposedDate?: Prisma.DateTimeNullableFilter<"AdvisorPlacement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorPlacement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdvisorPlacement"> | Date | string;
};
export type AdvisorPlacementCreateManyUserInput = {
    id?: number;
    artworkTitle?: string | null;
    artworkCulture?: string | null;
    artworkEra?: string | null;
    imageUrl?: string | null;
    valuation?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: string | null;
    status?: string;
    notes?: string | null;
    proposedDate?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorPlacementUpdateWithoutUserInput = {
    artworkTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkCulture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkEra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuation?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorPlacementUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkCulture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkEra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuation?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorPlacementUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkCulture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkEra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valuation?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    commission?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorPlacementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    artworkTitle?: boolean;
    artworkCulture?: boolean;
    artworkEra?: boolean;
    imageUrl?: boolean;
    valuation?: boolean;
    commission?: boolean;
    clientName?: boolean;
    status?: boolean;
    notes?: boolean;
    proposedDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["advisorPlacement"]>;
export type AdvisorPlacementSelectScalar = {
    id?: boolean;
    userId?: boolean;
    artworkTitle?: boolean;
    artworkCulture?: boolean;
    artworkEra?: boolean;
    imageUrl?: boolean;
    valuation?: boolean;
    commission?: boolean;
    clientName?: boolean;
    status?: boolean;
    notes?: boolean;
    proposedDate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AdvisorPlacementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "artworkTitle" | "artworkCulture" | "artworkEra" | "imageUrl" | "valuation" | "commission" | "clientName" | "status" | "notes" | "proposedDate" | "createdAt" | "updatedAt", ExtArgs["result"]["advisorPlacement"]>;
export type AdvisorPlacementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AdvisorPlacementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdvisorPlacement";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        artworkTitle: string | null;
        artworkCulture: string | null;
        artworkEra: string | null;
        imageUrl: string | null;
        valuation: runtime.Decimal | null;
        commission: runtime.Decimal | null;
        clientName: string | null;
        status: string;
        notes: string | null;
        proposedDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["advisorPlacement"]>;
    composites: {};
};
export type AdvisorPlacementGetPayload<S extends boolean | null | undefined | AdvisorPlacementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload, S>;
export type AdvisorPlacementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdvisorPlacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdvisorPlacementCountAggregateInputType | true;
};
export interface AdvisorPlacementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdvisorPlacement'];
        meta: {
            name: 'AdvisorPlacement';
        };
    };
    /**
     * Find zero or one AdvisorPlacement that matches the filter.
     * @param {AdvisorPlacementFindUniqueArgs} args - Arguments to find a AdvisorPlacement
     * @example
     * // Get one AdvisorPlacement
     * const advisorPlacement = await prisma.advisorPlacement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvisorPlacementFindUniqueArgs>(args: Prisma.SelectSubset<T, AdvisorPlacementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AdvisorPlacement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvisorPlacementFindUniqueOrThrowArgs} args - Arguments to find a AdvisorPlacement
     * @example
     * // Get one AdvisorPlacement
     * const advisorPlacement = await prisma.advisorPlacement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvisorPlacementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdvisorPlacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdvisorPlacement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorPlacementFindFirstArgs} args - Arguments to find a AdvisorPlacement
     * @example
     * // Get one AdvisorPlacement
     * const advisorPlacement = await prisma.advisorPlacement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvisorPlacementFindFirstArgs>(args?: Prisma.SelectSubset<T, AdvisorPlacementFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdvisorPlacement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorPlacementFindFirstOrThrowArgs} args - Arguments to find a AdvisorPlacement
     * @example
     * // Get one AdvisorPlacement
     * const advisorPlacement = await prisma.advisorPlacement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvisorPlacementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdvisorPlacementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AdvisorPlacements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorPlacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdvisorPlacements
     * const advisorPlacements = await prisma.advisorPlacement.findMany()
     *
     * // Get first 10 AdvisorPlacements
     * const advisorPlacements = await prisma.advisorPlacement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const advisorPlacementWithIdOnly = await prisma.advisorPlacement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdvisorPlacementFindManyArgs>(args?: Prisma.SelectSubset<T, AdvisorPlacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AdvisorPlacement.
     * @param {AdvisorPlacementCreateArgs} args - Arguments to create a AdvisorPlacement.
     * @example
     * // Create one AdvisorPlacement
     * const AdvisorPlacement = await prisma.advisorPlacement.create({
     *   data: {
     *     // ... data to create a AdvisorPlacement
     *   }
     * })
     *
     */
    create<T extends AdvisorPlacementCreateArgs>(args: Prisma.SelectSubset<T, AdvisorPlacementCreateArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AdvisorPlacements.
     * @param {AdvisorPlacementCreateManyArgs} args - Arguments to create many AdvisorPlacements.
     * @example
     * // Create many AdvisorPlacements
     * const advisorPlacement = await prisma.advisorPlacement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdvisorPlacementCreateManyArgs>(args?: Prisma.SelectSubset<T, AdvisorPlacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AdvisorPlacement.
     * @param {AdvisorPlacementDeleteArgs} args - Arguments to delete one AdvisorPlacement.
     * @example
     * // Delete one AdvisorPlacement
     * const AdvisorPlacement = await prisma.advisorPlacement.delete({
     *   where: {
     *     // ... filter to delete one AdvisorPlacement
     *   }
     * })
     *
     */
    delete<T extends AdvisorPlacementDeleteArgs>(args: Prisma.SelectSubset<T, AdvisorPlacementDeleteArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AdvisorPlacement.
     * @param {AdvisorPlacementUpdateArgs} args - Arguments to update one AdvisorPlacement.
     * @example
     * // Update one AdvisorPlacement
     * const advisorPlacement = await prisma.advisorPlacement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdvisorPlacementUpdateArgs>(args: Prisma.SelectSubset<T, AdvisorPlacementUpdateArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AdvisorPlacements.
     * @param {AdvisorPlacementDeleteManyArgs} args - Arguments to filter AdvisorPlacements to delete.
     * @example
     * // Delete a few AdvisorPlacements
     * const { count } = await prisma.advisorPlacement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdvisorPlacementDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdvisorPlacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdvisorPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorPlacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdvisorPlacements
     * const advisorPlacement = await prisma.advisorPlacement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdvisorPlacementUpdateManyArgs>(args: Prisma.SelectSubset<T, AdvisorPlacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AdvisorPlacement.
     * @param {AdvisorPlacementUpsertArgs} args - Arguments to update or create a AdvisorPlacement.
     * @example
     * // Update or create a AdvisorPlacement
     * const advisorPlacement = await prisma.advisorPlacement.upsert({
     *   create: {
     *     // ... data to create a AdvisorPlacement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdvisorPlacement we want to update
     *   }
     * })
     */
    upsert<T extends AdvisorPlacementUpsertArgs>(args: Prisma.SelectSubset<T, AdvisorPlacementUpsertArgs<ExtArgs>>): Prisma.Prisma__AdvisorPlacementClient<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AdvisorPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorPlacementCountArgs} args - Arguments to filter AdvisorPlacements to count.
     * @example
     * // Count the number of AdvisorPlacements
     * const count = await prisma.advisorPlacement.count({
     *   where: {
     *     // ... the filter for the AdvisorPlacements we want to count
     *   }
     * })
    **/
    count<T extends AdvisorPlacementCountArgs>(args?: Prisma.Subset<T, AdvisorPlacementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdvisorPlacementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AdvisorPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorPlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvisorPlacementAggregateArgs>(args: Prisma.Subset<T, AdvisorPlacementAggregateArgs>): Prisma.PrismaPromise<GetAdvisorPlacementAggregateType<T>>;
    /**
     * Group by AdvisorPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorPlacementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdvisorPlacementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdvisorPlacementGroupByArgs['orderBy'];
    } : {
        orderBy?: AdvisorPlacementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdvisorPlacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvisorPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdvisorPlacement model
     */
    readonly fields: AdvisorPlacementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AdvisorPlacement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdvisorPlacementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AdvisorPlacement model
 */
export interface AdvisorPlacementFieldRefs {
    readonly id: Prisma.FieldRef<"AdvisorPlacement", 'Int'>;
    readonly userId: Prisma.FieldRef<"AdvisorPlacement", 'Int'>;
    readonly artworkTitle: Prisma.FieldRef<"AdvisorPlacement", 'String'>;
    readonly artworkCulture: Prisma.FieldRef<"AdvisorPlacement", 'String'>;
    readonly artworkEra: Prisma.FieldRef<"AdvisorPlacement", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"AdvisorPlacement", 'String'>;
    readonly valuation: Prisma.FieldRef<"AdvisorPlacement", 'Decimal'>;
    readonly commission: Prisma.FieldRef<"AdvisorPlacement", 'Decimal'>;
    readonly clientName: Prisma.FieldRef<"AdvisorPlacement", 'String'>;
    readonly status: Prisma.FieldRef<"AdvisorPlacement", 'String'>;
    readonly notes: Prisma.FieldRef<"AdvisorPlacement", 'String'>;
    readonly proposedDate: Prisma.FieldRef<"AdvisorPlacement", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AdvisorPlacement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AdvisorPlacement", 'DateTime'>;
}
/**
 * AdvisorPlacement findUnique
 */
export type AdvisorPlacementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorPlacement to fetch.
     */
    where: Prisma.AdvisorPlacementWhereUniqueInput;
};
/**
 * AdvisorPlacement findUniqueOrThrow
 */
export type AdvisorPlacementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorPlacement to fetch.
     */
    where: Prisma.AdvisorPlacementWhereUniqueInput;
};
/**
 * AdvisorPlacement findFirst
 */
export type AdvisorPlacementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorPlacement to fetch.
     */
    where?: Prisma.AdvisorPlacementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorPlacements to fetch.
     */
    orderBy?: Prisma.AdvisorPlacementOrderByWithRelationInput | Prisma.AdvisorPlacementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdvisorPlacements.
     */
    cursor?: Prisma.AdvisorPlacementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorPlacements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorPlacements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorPlacements.
     */
    distinct?: Prisma.AdvisorPlacementScalarFieldEnum | Prisma.AdvisorPlacementScalarFieldEnum[];
};
/**
 * AdvisorPlacement findFirstOrThrow
 */
export type AdvisorPlacementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorPlacement to fetch.
     */
    where?: Prisma.AdvisorPlacementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorPlacements to fetch.
     */
    orderBy?: Prisma.AdvisorPlacementOrderByWithRelationInput | Prisma.AdvisorPlacementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdvisorPlacements.
     */
    cursor?: Prisma.AdvisorPlacementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorPlacements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorPlacements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorPlacements.
     */
    distinct?: Prisma.AdvisorPlacementScalarFieldEnum | Prisma.AdvisorPlacementScalarFieldEnum[];
};
/**
 * AdvisorPlacement findMany
 */
export type AdvisorPlacementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorPlacements to fetch.
     */
    where?: Prisma.AdvisorPlacementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorPlacements to fetch.
     */
    orderBy?: Prisma.AdvisorPlacementOrderByWithRelationInput | Prisma.AdvisorPlacementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdvisorPlacements.
     */
    cursor?: Prisma.AdvisorPlacementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorPlacements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorPlacements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorPlacements.
     */
    distinct?: Prisma.AdvisorPlacementScalarFieldEnum | Prisma.AdvisorPlacementScalarFieldEnum[];
};
/**
 * AdvisorPlacement create
 */
export type AdvisorPlacementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * The data needed to create a AdvisorPlacement.
     */
    data: Prisma.XOR<Prisma.AdvisorPlacementCreateInput, Prisma.AdvisorPlacementUncheckedCreateInput>;
};
/**
 * AdvisorPlacement createMany
 */
export type AdvisorPlacementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdvisorPlacements.
     */
    data: Prisma.AdvisorPlacementCreateManyInput | Prisma.AdvisorPlacementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdvisorPlacement update
 */
export type AdvisorPlacementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * The data needed to update a AdvisorPlacement.
     */
    data: Prisma.XOR<Prisma.AdvisorPlacementUpdateInput, Prisma.AdvisorPlacementUncheckedUpdateInput>;
    /**
     * Choose, which AdvisorPlacement to update.
     */
    where: Prisma.AdvisorPlacementWhereUniqueInput;
};
/**
 * AdvisorPlacement updateMany
 */
export type AdvisorPlacementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AdvisorPlacements.
     */
    data: Prisma.XOR<Prisma.AdvisorPlacementUpdateManyMutationInput, Prisma.AdvisorPlacementUncheckedUpdateManyInput>;
    /**
     * Filter which AdvisorPlacements to update
     */
    where?: Prisma.AdvisorPlacementWhereInput;
    /**
     * Limit how many AdvisorPlacements to update.
     */
    limit?: number;
};
/**
 * AdvisorPlacement upsert
 */
export type AdvisorPlacementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * The filter to search for the AdvisorPlacement to update in case it exists.
     */
    where: Prisma.AdvisorPlacementWhereUniqueInput;
    /**
     * In case the AdvisorPlacement found by the `where` argument doesn't exist, create a new AdvisorPlacement with this data.
     */
    create: Prisma.XOR<Prisma.AdvisorPlacementCreateInput, Prisma.AdvisorPlacementUncheckedCreateInput>;
    /**
     * In case the AdvisorPlacement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdvisorPlacementUpdateInput, Prisma.AdvisorPlacementUncheckedUpdateInput>;
};
/**
 * AdvisorPlacement delete
 */
export type AdvisorPlacementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    /**
     * Filter which AdvisorPlacement to delete.
     */
    where: Prisma.AdvisorPlacementWhereUniqueInput;
};
/**
 * AdvisorPlacement deleteMany
 */
export type AdvisorPlacementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdvisorPlacements to delete
     */
    where?: Prisma.AdvisorPlacementWhereInput;
    /**
     * Limit how many AdvisorPlacements to delete.
     */
    limit?: number;
};
/**
 * AdvisorPlacement without action
 */
export type AdvisorPlacementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
};
//# sourceMappingURL=AdvisorPlacement.d.ts.map