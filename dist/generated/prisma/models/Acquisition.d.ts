import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Acquisition
 *
 */
export type AcquisitionModel = runtime.Types.Result.DefaultSelection<Prisma.$AcquisitionPayload>;
export type AggregateAcquisition = {
    _count: AcquisitionCountAggregateOutputType | null;
    _avg: AcquisitionAvgAggregateOutputType | null;
    _sum: AcquisitionSumAggregateOutputType | null;
    _min: AcquisitionMinAggregateOutputType | null;
    _max: AcquisitionMaxAggregateOutputType | null;
};
export type AcquisitionAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    estimatedValueEur: runtime.Decimal | null;
};
export type AcquisitionSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    estimatedValueEur: runtime.Decimal | null;
};
export type AcquisitionMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    title: string | null;
    era: string | null;
    culture: string | null;
    acquisitionDate: Date | null;
    status: string | null;
    imageUrl: string | null;
    estimatedValueEur: runtime.Decimal | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AcquisitionMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    title: string | null;
    era: string | null;
    culture: string | null;
    acquisitionDate: Date | null;
    status: string | null;
    imageUrl: string | null;
    estimatedValueEur: runtime.Decimal | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AcquisitionCountAggregateOutputType = {
    id: number;
    userId: number;
    title: number;
    era: number;
    culture: number;
    acquisitionDate: number;
    status: number;
    imageUrl: number;
    estimatedValueEur: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AcquisitionAvgAggregateInputType = {
    id?: true;
    userId?: true;
    estimatedValueEur?: true;
};
export type AcquisitionSumAggregateInputType = {
    id?: true;
    userId?: true;
    estimatedValueEur?: true;
};
export type AcquisitionMinAggregateInputType = {
    id?: true;
    userId?: true;
    title?: true;
    era?: true;
    culture?: true;
    acquisitionDate?: true;
    status?: true;
    imageUrl?: true;
    estimatedValueEur?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AcquisitionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    title?: true;
    era?: true;
    culture?: true;
    acquisitionDate?: true;
    status?: true;
    imageUrl?: true;
    estimatedValueEur?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AcquisitionCountAggregateInputType = {
    id?: true;
    userId?: true;
    title?: true;
    era?: true;
    culture?: true;
    acquisitionDate?: true;
    status?: true;
    imageUrl?: true;
    estimatedValueEur?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AcquisitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Acquisition to aggregate.
     */
    where?: Prisma.AcquisitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: Prisma.AcquisitionOrderByWithRelationInput | Prisma.AcquisitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AcquisitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Acquisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Acquisitions
    **/
    _count?: true | AcquisitionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AcquisitionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AcquisitionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AcquisitionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AcquisitionMaxAggregateInputType;
};
export type GetAcquisitionAggregateType<T extends AcquisitionAggregateArgs> = {
    [P in keyof T & keyof AggregateAcquisition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAcquisition[P]> : Prisma.GetScalarType<T[P], AggregateAcquisition[P]>;
};
export type AcquisitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcquisitionWhereInput;
    orderBy?: Prisma.AcquisitionOrderByWithAggregationInput | Prisma.AcquisitionOrderByWithAggregationInput[];
    by: Prisma.AcquisitionScalarFieldEnum[] | Prisma.AcquisitionScalarFieldEnum;
    having?: Prisma.AcquisitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AcquisitionCountAggregateInputType | true;
    _avg?: AcquisitionAvgAggregateInputType;
    _sum?: AcquisitionSumAggregateInputType;
    _min?: AcquisitionMinAggregateInputType;
    _max?: AcquisitionMaxAggregateInputType;
};
export type AcquisitionGroupByOutputType = {
    id: number;
    userId: number;
    title: string;
    era: string | null;
    culture: string | null;
    acquisitionDate: Date | null;
    status: string;
    imageUrl: string | null;
    estimatedValueEur: runtime.Decimal | null;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AcquisitionCountAggregateOutputType | null;
    _avg: AcquisitionAvgAggregateOutputType | null;
    _sum: AcquisitionSumAggregateOutputType | null;
    _min: AcquisitionMinAggregateOutputType | null;
    _max: AcquisitionMaxAggregateOutputType | null;
};
export type GetAcquisitionGroupByPayload<T extends AcquisitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AcquisitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AcquisitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AcquisitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AcquisitionGroupByOutputType[P]>;
}>>;
export type AcquisitionWhereInput = {
    AND?: Prisma.AcquisitionWhereInput | Prisma.AcquisitionWhereInput[];
    OR?: Prisma.AcquisitionWhereInput[];
    NOT?: Prisma.AcquisitionWhereInput | Prisma.AcquisitionWhereInput[];
    id?: Prisma.IntFilter<"Acquisition"> | number;
    userId?: Prisma.IntFilter<"Acquisition"> | number;
    title?: Prisma.StringFilter<"Acquisition"> | string;
    era?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    culture?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    acquisitionDate?: Prisma.DateTimeNullableFilter<"Acquisition"> | Date | string | null;
    status?: Prisma.StringFilter<"Acquisition"> | string;
    imageUrl?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    estimatedValueEur?: Prisma.DecimalNullableFilter<"Acquisition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Acquisition"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Acquisition"> | Date | string;
    provenanceChain?: Prisma.AcquisitionProvenanceListRelationFilter;
};
export type AcquisitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    era?: Prisma.SortOrderInput | Prisma.SortOrder;
    culture?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedValueEur?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    provenanceChain?: Prisma.AcquisitionProvenanceOrderByRelationAggregateInput;
    _relevance?: Prisma.AcquisitionOrderByRelevanceInput;
};
export type AcquisitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AcquisitionWhereInput | Prisma.AcquisitionWhereInput[];
    OR?: Prisma.AcquisitionWhereInput[];
    NOT?: Prisma.AcquisitionWhereInput | Prisma.AcquisitionWhereInput[];
    userId?: Prisma.IntFilter<"Acquisition"> | number;
    title?: Prisma.StringFilter<"Acquisition"> | string;
    era?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    culture?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    acquisitionDate?: Prisma.DateTimeNullableFilter<"Acquisition"> | Date | string | null;
    status?: Prisma.StringFilter<"Acquisition"> | string;
    imageUrl?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    estimatedValueEur?: Prisma.DecimalNullableFilter<"Acquisition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.StringNullableFilter<"Acquisition"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Acquisition"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Acquisition"> | Date | string;
    provenanceChain?: Prisma.AcquisitionProvenanceListRelationFilter;
}, "id">;
export type AcquisitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    era?: Prisma.SortOrderInput | Prisma.SortOrder;
    culture?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedValueEur?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AcquisitionCountOrderByAggregateInput;
    _avg?: Prisma.AcquisitionAvgOrderByAggregateInput;
    _max?: Prisma.AcquisitionMaxOrderByAggregateInput;
    _min?: Prisma.AcquisitionMinOrderByAggregateInput;
    _sum?: Prisma.AcquisitionSumOrderByAggregateInput;
};
export type AcquisitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AcquisitionScalarWhereWithAggregatesInput | Prisma.AcquisitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AcquisitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AcquisitionScalarWhereWithAggregatesInput | Prisma.AcquisitionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Acquisition"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Acquisition"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Acquisition"> | string;
    era?: Prisma.StringNullableWithAggregatesFilter<"Acquisition"> | string | null;
    culture?: Prisma.StringNullableWithAggregatesFilter<"Acquisition"> | string | null;
    acquisitionDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Acquisition"> | Date | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Acquisition"> | string;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Acquisition"> | string | null;
    estimatedValueEur?: Prisma.DecimalNullableWithAggregatesFilter<"Acquisition"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Acquisition"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Acquisition"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Acquisition"> | Date | string;
};
export type AcquisitionCreateInput = {
    userId: number;
    title: string;
    era?: string | null;
    culture?: string | null;
    acquisitionDate?: Date | string | null;
    status?: string;
    imageUrl?: string | null;
    estimatedValueEur?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    provenanceChain?: Prisma.AcquisitionProvenanceCreateNestedManyWithoutAcquisitionInput;
};
export type AcquisitionUncheckedCreateInput = {
    id?: number;
    userId: number;
    title: string;
    era?: string | null;
    culture?: string | null;
    acquisitionDate?: Date | string | null;
    status?: string;
    imageUrl?: string | null;
    estimatedValueEur?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    provenanceChain?: Prisma.AcquisitionProvenanceUncheckedCreateNestedManyWithoutAcquisitionInput;
};
export type AcquisitionUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    culture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValueEur?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provenanceChain?: Prisma.AcquisitionProvenanceUpdateManyWithoutAcquisitionNestedInput;
};
export type AcquisitionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    culture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValueEur?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provenanceChain?: Prisma.AcquisitionProvenanceUncheckedUpdateManyWithoutAcquisitionNestedInput;
};
export type AcquisitionCreateManyInput = {
    id?: number;
    userId: number;
    title: string;
    era?: string | null;
    culture?: string | null;
    acquisitionDate?: Date | string | null;
    status?: string;
    imageUrl?: string | null;
    estimatedValueEur?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcquisitionUpdateManyMutationInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    culture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValueEur?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    culture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValueEur?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionOrderByRelevanceInput = {
    fields: Prisma.AcquisitionOrderByRelevanceFieldEnum | Prisma.AcquisitionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AcquisitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    era?: Prisma.SortOrder;
    culture?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    estimatedValueEur?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcquisitionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    estimatedValueEur?: Prisma.SortOrder;
};
export type AcquisitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    era?: Prisma.SortOrder;
    culture?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    estimatedValueEur?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcquisitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    era?: Prisma.SortOrder;
    culture?: Prisma.SortOrder;
    acquisitionDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    estimatedValueEur?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AcquisitionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    estimatedValueEur?: Prisma.SortOrder;
};
export type AcquisitionScalarRelationFilter = {
    is?: Prisma.AcquisitionWhereInput;
    isNot?: Prisma.AcquisitionWhereInput;
};
export type AcquisitionCreateNestedOneWithoutProvenanceChainInput = {
    create?: Prisma.XOR<Prisma.AcquisitionCreateWithoutProvenanceChainInput, Prisma.AcquisitionUncheckedCreateWithoutProvenanceChainInput>;
    connectOrCreate?: Prisma.AcquisitionCreateOrConnectWithoutProvenanceChainInput;
    connect?: Prisma.AcquisitionWhereUniqueInput;
};
export type AcquisitionUpdateOneRequiredWithoutProvenanceChainNestedInput = {
    create?: Prisma.XOR<Prisma.AcquisitionCreateWithoutProvenanceChainInput, Prisma.AcquisitionUncheckedCreateWithoutProvenanceChainInput>;
    connectOrCreate?: Prisma.AcquisitionCreateOrConnectWithoutProvenanceChainInput;
    upsert?: Prisma.AcquisitionUpsertWithoutProvenanceChainInput;
    connect?: Prisma.AcquisitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AcquisitionUpdateToOneWithWhereWithoutProvenanceChainInput, Prisma.AcquisitionUpdateWithoutProvenanceChainInput>, Prisma.AcquisitionUncheckedUpdateWithoutProvenanceChainInput>;
};
export type AcquisitionCreateWithoutProvenanceChainInput = {
    userId: number;
    title: string;
    era?: string | null;
    culture?: string | null;
    acquisitionDate?: Date | string | null;
    status?: string;
    imageUrl?: string | null;
    estimatedValueEur?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcquisitionUncheckedCreateWithoutProvenanceChainInput = {
    id?: number;
    userId: number;
    title: string;
    era?: string | null;
    culture?: string | null;
    acquisitionDate?: Date | string | null;
    status?: string;
    imageUrl?: string | null;
    estimatedValueEur?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AcquisitionCreateOrConnectWithoutProvenanceChainInput = {
    where: Prisma.AcquisitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcquisitionCreateWithoutProvenanceChainInput, Prisma.AcquisitionUncheckedCreateWithoutProvenanceChainInput>;
};
export type AcquisitionUpsertWithoutProvenanceChainInput = {
    update: Prisma.XOR<Prisma.AcquisitionUpdateWithoutProvenanceChainInput, Prisma.AcquisitionUncheckedUpdateWithoutProvenanceChainInput>;
    create: Prisma.XOR<Prisma.AcquisitionCreateWithoutProvenanceChainInput, Prisma.AcquisitionUncheckedCreateWithoutProvenanceChainInput>;
    where?: Prisma.AcquisitionWhereInput;
};
export type AcquisitionUpdateToOneWithWhereWithoutProvenanceChainInput = {
    where?: Prisma.AcquisitionWhereInput;
    data: Prisma.XOR<Prisma.AcquisitionUpdateWithoutProvenanceChainInput, Prisma.AcquisitionUncheckedUpdateWithoutProvenanceChainInput>;
};
export type AcquisitionUpdateWithoutProvenanceChainInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    culture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValueEur?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionUncheckedUpdateWithoutProvenanceChainInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    culture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquisitionDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValueEur?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AcquisitionCountOutputType
 */
export type AcquisitionCountOutputType = {
    provenanceChain: number;
};
export type AcquisitionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provenanceChain?: boolean | AcquisitionCountOutputTypeCountProvenanceChainArgs;
};
/**
 * AcquisitionCountOutputType without action
 */
export type AcquisitionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcquisitionCountOutputType
     */
    select?: Prisma.AcquisitionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AcquisitionCountOutputType without action
 */
export type AcquisitionCountOutputTypeCountProvenanceChainArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcquisitionProvenanceWhereInput;
};
export type AcquisitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    title?: boolean;
    era?: boolean;
    culture?: boolean;
    acquisitionDate?: boolean;
    status?: boolean;
    imageUrl?: boolean;
    estimatedValueEur?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    provenanceChain?: boolean | Prisma.Acquisition$provenanceChainArgs<ExtArgs>;
    _count?: boolean | Prisma.AcquisitionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["acquisition"]>;
export type AcquisitionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    title?: boolean;
    era?: boolean;
    culture?: boolean;
    acquisitionDate?: boolean;
    status?: boolean;
    imageUrl?: boolean;
    estimatedValueEur?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AcquisitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "title" | "era" | "culture" | "acquisitionDate" | "status" | "imageUrl" | "estimatedValueEur" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["acquisition"]>;
export type AcquisitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provenanceChain?: boolean | Prisma.Acquisition$provenanceChainArgs<ExtArgs>;
    _count?: boolean | Prisma.AcquisitionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $AcquisitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Acquisition";
    objects: {
        provenanceChain: Prisma.$AcquisitionProvenancePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        title: string;
        era: string | null;
        culture: string | null;
        acquisitionDate: Date | null;
        status: string;
        imageUrl: string | null;
        estimatedValueEur: runtime.Decimal | null;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["acquisition"]>;
    composites: {};
};
export type AcquisitionGetPayload<S extends boolean | null | undefined | AcquisitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload, S>;
export type AcquisitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AcquisitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AcquisitionCountAggregateInputType | true;
};
export interface AcquisitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Acquisition'];
        meta: {
            name: 'Acquisition';
        };
    };
    /**
     * Find zero or one Acquisition that matches the filter.
     * @param {AcquisitionFindUniqueArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcquisitionFindUniqueArgs>(args: Prisma.SelectSubset<T, AcquisitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Acquisition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcquisitionFindUniqueOrThrowArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcquisitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AcquisitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Acquisition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionFindFirstArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcquisitionFindFirstArgs>(args?: Prisma.SelectSubset<T, AcquisitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Acquisition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionFindFirstOrThrowArgs} args - Arguments to find a Acquisition
     * @example
     * // Get one Acquisition
     * const acquisition = await prisma.acquisition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcquisitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AcquisitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Acquisitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acquisitions
     * const acquisitions = await prisma.acquisition.findMany()
     *
     * // Get first 10 Acquisitions
     * const acquisitions = await prisma.acquisition.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const acquisitionWithIdOnly = await prisma.acquisition.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AcquisitionFindManyArgs>(args?: Prisma.SelectSubset<T, AcquisitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Acquisition.
     * @param {AcquisitionCreateArgs} args - Arguments to create a Acquisition.
     * @example
     * // Create one Acquisition
     * const Acquisition = await prisma.acquisition.create({
     *   data: {
     *     // ... data to create a Acquisition
     *   }
     * })
     *
     */
    create<T extends AcquisitionCreateArgs>(args: Prisma.SelectSubset<T, AcquisitionCreateArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Acquisitions.
     * @param {AcquisitionCreateManyArgs} args - Arguments to create many Acquisitions.
     * @example
     * // Create many Acquisitions
     * const acquisition = await prisma.acquisition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AcquisitionCreateManyArgs>(args?: Prisma.SelectSubset<T, AcquisitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Acquisition.
     * @param {AcquisitionDeleteArgs} args - Arguments to delete one Acquisition.
     * @example
     * // Delete one Acquisition
     * const Acquisition = await prisma.acquisition.delete({
     *   where: {
     *     // ... filter to delete one Acquisition
     *   }
     * })
     *
     */
    delete<T extends AcquisitionDeleteArgs>(args: Prisma.SelectSubset<T, AcquisitionDeleteArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Acquisition.
     * @param {AcquisitionUpdateArgs} args - Arguments to update one Acquisition.
     * @example
     * // Update one Acquisition
     * const acquisition = await prisma.acquisition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AcquisitionUpdateArgs>(args: Prisma.SelectSubset<T, AcquisitionUpdateArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Acquisitions.
     * @param {AcquisitionDeleteManyArgs} args - Arguments to filter Acquisitions to delete.
     * @example
     * // Delete a few Acquisitions
     * const { count } = await prisma.acquisition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AcquisitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AcquisitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Acquisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acquisitions
     * const acquisition = await prisma.acquisition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AcquisitionUpdateManyArgs>(args: Prisma.SelectSubset<T, AcquisitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Acquisition.
     * @param {AcquisitionUpsertArgs} args - Arguments to update or create a Acquisition.
     * @example
     * // Update or create a Acquisition
     * const acquisition = await prisma.acquisition.upsert({
     *   create: {
     *     // ... data to create a Acquisition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acquisition we want to update
     *   }
     * })
     */
    upsert<T extends AcquisitionUpsertArgs>(args: Prisma.SelectSubset<T, AcquisitionUpsertArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Acquisitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionCountArgs} args - Arguments to filter Acquisitions to count.
     * @example
     * // Count the number of Acquisitions
     * const count = await prisma.acquisition.count({
     *   where: {
     *     // ... the filter for the Acquisitions we want to count
     *   }
     * })
    **/
    count<T extends AcquisitionCountArgs>(args?: Prisma.Subset<T, AcquisitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AcquisitionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Acquisition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcquisitionAggregateArgs>(args: Prisma.Subset<T, AcquisitionAggregateArgs>): Prisma.PrismaPromise<GetAcquisitionAggregateType<T>>;
    /**
     * Group by Acquisition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AcquisitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AcquisitionGroupByArgs['orderBy'];
    } : {
        orderBy?: AcquisitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AcquisitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcquisitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Acquisition model
     */
    readonly fields: AcquisitionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Acquisition.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AcquisitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    provenanceChain<T extends Prisma.Acquisition$provenanceChainArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Acquisition$provenanceChainArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Acquisition model
 */
export interface AcquisitionFieldRefs {
    readonly id: Prisma.FieldRef<"Acquisition", 'Int'>;
    readonly userId: Prisma.FieldRef<"Acquisition", 'Int'>;
    readonly title: Prisma.FieldRef<"Acquisition", 'String'>;
    readonly era: Prisma.FieldRef<"Acquisition", 'String'>;
    readonly culture: Prisma.FieldRef<"Acquisition", 'String'>;
    readonly acquisitionDate: Prisma.FieldRef<"Acquisition", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Acquisition", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"Acquisition", 'String'>;
    readonly estimatedValueEur: Prisma.FieldRef<"Acquisition", 'Decimal'>;
    readonly description: Prisma.FieldRef<"Acquisition", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Acquisition", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Acquisition", 'DateTime'>;
}
/**
 * Acquisition findUnique
 */
export type AcquisitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * Filter, which Acquisition to fetch.
     */
    where: Prisma.AcquisitionWhereUniqueInput;
};
/**
 * Acquisition findUniqueOrThrow
 */
export type AcquisitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * Filter, which Acquisition to fetch.
     */
    where: Prisma.AcquisitionWhereUniqueInput;
};
/**
 * Acquisition findFirst
 */
export type AcquisitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * Filter, which Acquisition to fetch.
     */
    where?: Prisma.AcquisitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: Prisma.AcquisitionOrderByWithRelationInput | Prisma.AcquisitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Acquisitions.
     */
    cursor?: Prisma.AcquisitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Acquisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Acquisitions.
     */
    distinct?: Prisma.AcquisitionScalarFieldEnum | Prisma.AcquisitionScalarFieldEnum[];
};
/**
 * Acquisition findFirstOrThrow
 */
export type AcquisitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * Filter, which Acquisition to fetch.
     */
    where?: Prisma.AcquisitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: Prisma.AcquisitionOrderByWithRelationInput | Prisma.AcquisitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Acquisitions.
     */
    cursor?: Prisma.AcquisitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Acquisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Acquisitions.
     */
    distinct?: Prisma.AcquisitionScalarFieldEnum | Prisma.AcquisitionScalarFieldEnum[];
};
/**
 * Acquisition findMany
 */
export type AcquisitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * Filter, which Acquisitions to fetch.
     */
    where?: Prisma.AcquisitionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Acquisitions to fetch.
     */
    orderBy?: Prisma.AcquisitionOrderByWithRelationInput | Prisma.AcquisitionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Acquisitions.
     */
    cursor?: Prisma.AcquisitionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Acquisitions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Acquisitions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Acquisitions.
     */
    distinct?: Prisma.AcquisitionScalarFieldEnum | Prisma.AcquisitionScalarFieldEnum[];
};
/**
 * Acquisition create
 */
export type AcquisitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Acquisition.
     */
    data: Prisma.XOR<Prisma.AcquisitionCreateInput, Prisma.AcquisitionUncheckedCreateInput>;
};
/**
 * Acquisition createMany
 */
export type AcquisitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acquisitions.
     */
    data: Prisma.AcquisitionCreateManyInput | Prisma.AcquisitionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Acquisition update
 */
export type AcquisitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Acquisition.
     */
    data: Prisma.XOR<Prisma.AcquisitionUpdateInput, Prisma.AcquisitionUncheckedUpdateInput>;
    /**
     * Choose, which Acquisition to update.
     */
    where: Prisma.AcquisitionWhereUniqueInput;
};
/**
 * Acquisition updateMany
 */
export type AcquisitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Acquisitions.
     */
    data: Prisma.XOR<Prisma.AcquisitionUpdateManyMutationInput, Prisma.AcquisitionUncheckedUpdateManyInput>;
    /**
     * Filter which Acquisitions to update
     */
    where?: Prisma.AcquisitionWhereInput;
    /**
     * Limit how many Acquisitions to update.
     */
    limit?: number;
};
/**
 * Acquisition upsert
 */
export type AcquisitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Acquisition to update in case it exists.
     */
    where: Prisma.AcquisitionWhereUniqueInput;
    /**
     * In case the Acquisition found by the `where` argument doesn't exist, create a new Acquisition with this data.
     */
    create: Prisma.XOR<Prisma.AcquisitionCreateInput, Prisma.AcquisitionUncheckedCreateInput>;
    /**
     * In case the Acquisition was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AcquisitionUpdateInput, Prisma.AcquisitionUncheckedUpdateInput>;
};
/**
 * Acquisition delete
 */
export type AcquisitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
    /**
     * Filter which Acquisition to delete.
     */
    where: Prisma.AcquisitionWhereUniqueInput;
};
/**
 * Acquisition deleteMany
 */
export type AcquisitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Acquisitions to delete
     */
    where?: Prisma.AcquisitionWhereInput;
    /**
     * Limit how many Acquisitions to delete.
     */
    limit?: number;
};
/**
 * Acquisition.provenanceChain
 */
export type Acquisition$provenanceChainArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcquisitionProvenance
     */
    select?: Prisma.AcquisitionProvenanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AcquisitionProvenance
     */
    omit?: Prisma.AcquisitionProvenanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionProvenanceInclude<ExtArgs> | null;
    where?: Prisma.AcquisitionProvenanceWhereInput;
    orderBy?: Prisma.AcquisitionProvenanceOrderByWithRelationInput | Prisma.AcquisitionProvenanceOrderByWithRelationInput[];
    cursor?: Prisma.AcquisitionProvenanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AcquisitionProvenanceScalarFieldEnum | Prisma.AcquisitionProvenanceScalarFieldEnum[];
};
/**
 * Acquisition without action
 */
export type AcquisitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acquisition
     */
    select?: Prisma.AcquisitionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Acquisition
     */
    omit?: Prisma.AcquisitionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AcquisitionInclude<ExtArgs> | null;
};
//# sourceMappingURL=Acquisition.d.ts.map