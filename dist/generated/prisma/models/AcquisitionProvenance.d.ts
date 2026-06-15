import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model AcquisitionProvenance
 *
 */
export type AcquisitionProvenanceModel = runtime.Types.Result.DefaultSelection<Prisma.$AcquisitionProvenancePayload>;
export type AggregateAcquisitionProvenance = {
    _count: AcquisitionProvenanceCountAggregateOutputType | null;
    _avg: AcquisitionProvenanceAvgAggregateOutputType | null;
    _sum: AcquisitionProvenanceSumAggregateOutputType | null;
    _min: AcquisitionProvenanceMinAggregateOutputType | null;
    _max: AcquisitionProvenanceMaxAggregateOutputType | null;
};
export type AcquisitionProvenanceAvgAggregateOutputType = {
    id: number | null;
    acquisitionId: number | null;
};
export type AcquisitionProvenanceSumAggregateOutputType = {
    id: number | null;
    acquisitionId: number | null;
};
export type AcquisitionProvenanceMinAggregateOutputType = {
    id: number | null;
    acquisitionId: number | null;
    entry: string | null;
    createdAt: Date | null;
};
export type AcquisitionProvenanceMaxAggregateOutputType = {
    id: number | null;
    acquisitionId: number | null;
    entry: string | null;
    createdAt: Date | null;
};
export type AcquisitionProvenanceCountAggregateOutputType = {
    id: number;
    acquisitionId: number;
    entry: number;
    createdAt: number;
    _all: number;
};
export type AcquisitionProvenanceAvgAggregateInputType = {
    id?: true;
    acquisitionId?: true;
};
export type AcquisitionProvenanceSumAggregateInputType = {
    id?: true;
    acquisitionId?: true;
};
export type AcquisitionProvenanceMinAggregateInputType = {
    id?: true;
    acquisitionId?: true;
    entry?: true;
    createdAt?: true;
};
export type AcquisitionProvenanceMaxAggregateInputType = {
    id?: true;
    acquisitionId?: true;
    entry?: true;
    createdAt?: true;
};
export type AcquisitionProvenanceCountAggregateInputType = {
    id?: true;
    acquisitionId?: true;
    entry?: true;
    createdAt?: true;
    _all?: true;
};
export type AcquisitionProvenanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AcquisitionProvenance to aggregate.
     */
    where?: Prisma.AcquisitionProvenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcquisitionProvenances to fetch.
     */
    orderBy?: Prisma.AcquisitionProvenanceOrderByWithRelationInput | Prisma.AcquisitionProvenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AcquisitionProvenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcquisitionProvenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcquisitionProvenances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AcquisitionProvenances
    **/
    _count?: true | AcquisitionProvenanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AcquisitionProvenanceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AcquisitionProvenanceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AcquisitionProvenanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AcquisitionProvenanceMaxAggregateInputType;
};
export type GetAcquisitionProvenanceAggregateType<T extends AcquisitionProvenanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAcquisitionProvenance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAcquisitionProvenance[P]> : Prisma.GetScalarType<T[P], AggregateAcquisitionProvenance[P]>;
};
export type AcquisitionProvenanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AcquisitionProvenanceWhereInput;
    orderBy?: Prisma.AcquisitionProvenanceOrderByWithAggregationInput | Prisma.AcquisitionProvenanceOrderByWithAggregationInput[];
    by: Prisma.AcquisitionProvenanceScalarFieldEnum[] | Prisma.AcquisitionProvenanceScalarFieldEnum;
    having?: Prisma.AcquisitionProvenanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AcquisitionProvenanceCountAggregateInputType | true;
    _avg?: AcquisitionProvenanceAvgAggregateInputType;
    _sum?: AcquisitionProvenanceSumAggregateInputType;
    _min?: AcquisitionProvenanceMinAggregateInputType;
    _max?: AcquisitionProvenanceMaxAggregateInputType;
};
export type AcquisitionProvenanceGroupByOutputType = {
    id: number;
    acquisitionId: number;
    entry: string;
    createdAt: Date;
    _count: AcquisitionProvenanceCountAggregateOutputType | null;
    _avg: AcquisitionProvenanceAvgAggregateOutputType | null;
    _sum: AcquisitionProvenanceSumAggregateOutputType | null;
    _min: AcquisitionProvenanceMinAggregateOutputType | null;
    _max: AcquisitionProvenanceMaxAggregateOutputType | null;
};
export type GetAcquisitionProvenanceGroupByPayload<T extends AcquisitionProvenanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AcquisitionProvenanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AcquisitionProvenanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AcquisitionProvenanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AcquisitionProvenanceGroupByOutputType[P]>;
}>>;
export type AcquisitionProvenanceWhereInput = {
    AND?: Prisma.AcquisitionProvenanceWhereInput | Prisma.AcquisitionProvenanceWhereInput[];
    OR?: Prisma.AcquisitionProvenanceWhereInput[];
    NOT?: Prisma.AcquisitionProvenanceWhereInput | Prisma.AcquisitionProvenanceWhereInput[];
    id?: Prisma.IntFilter<"AcquisitionProvenance"> | number;
    acquisitionId?: Prisma.IntFilter<"AcquisitionProvenance"> | number;
    entry?: Prisma.StringFilter<"AcquisitionProvenance"> | string;
    createdAt?: Prisma.DateTimeFilter<"AcquisitionProvenance"> | Date | string;
    acquisition?: Prisma.XOR<Prisma.AcquisitionScalarRelationFilter, Prisma.AcquisitionWhereInput>;
};
export type AcquisitionProvenanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    acquisitionId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    acquisition?: Prisma.AcquisitionOrderByWithRelationInput;
    _relevance?: Prisma.AcquisitionProvenanceOrderByRelevanceInput;
};
export type AcquisitionProvenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AcquisitionProvenanceWhereInput | Prisma.AcquisitionProvenanceWhereInput[];
    OR?: Prisma.AcquisitionProvenanceWhereInput[];
    NOT?: Prisma.AcquisitionProvenanceWhereInput | Prisma.AcquisitionProvenanceWhereInput[];
    acquisitionId?: Prisma.IntFilter<"AcquisitionProvenance"> | number;
    entry?: Prisma.StringFilter<"AcquisitionProvenance"> | string;
    createdAt?: Prisma.DateTimeFilter<"AcquisitionProvenance"> | Date | string;
    acquisition?: Prisma.XOR<Prisma.AcquisitionScalarRelationFilter, Prisma.AcquisitionWhereInput>;
}, "id">;
export type AcquisitionProvenanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    acquisitionId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AcquisitionProvenanceCountOrderByAggregateInput;
    _avg?: Prisma.AcquisitionProvenanceAvgOrderByAggregateInput;
    _max?: Prisma.AcquisitionProvenanceMaxOrderByAggregateInput;
    _min?: Prisma.AcquisitionProvenanceMinOrderByAggregateInput;
    _sum?: Prisma.AcquisitionProvenanceSumOrderByAggregateInput;
};
export type AcquisitionProvenanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.AcquisitionProvenanceScalarWhereWithAggregatesInput | Prisma.AcquisitionProvenanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.AcquisitionProvenanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AcquisitionProvenanceScalarWhereWithAggregatesInput | Prisma.AcquisitionProvenanceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AcquisitionProvenance"> | number;
    acquisitionId?: Prisma.IntWithAggregatesFilter<"AcquisitionProvenance"> | number;
    entry?: Prisma.StringWithAggregatesFilter<"AcquisitionProvenance"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AcquisitionProvenance"> | Date | string;
};
export type AcquisitionProvenanceCreateInput = {
    entry: string;
    createdAt?: Date | string;
    acquisition: Prisma.AcquisitionCreateNestedOneWithoutProvenanceChainInput;
};
export type AcquisitionProvenanceUncheckedCreateInput = {
    id?: number;
    acquisitionId: number;
    entry: string;
    createdAt?: Date | string;
};
export type AcquisitionProvenanceUpdateInput = {
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acquisition?: Prisma.AcquisitionUpdateOneRequiredWithoutProvenanceChainNestedInput;
};
export type AcquisitionProvenanceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    acquisitionId?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionProvenanceCreateManyInput = {
    id?: number;
    acquisitionId: number;
    entry: string;
    createdAt?: Date | string;
};
export type AcquisitionProvenanceUpdateManyMutationInput = {
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionProvenanceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    acquisitionId?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionProvenanceListRelationFilter = {
    every?: Prisma.AcquisitionProvenanceWhereInput;
    some?: Prisma.AcquisitionProvenanceWhereInput;
    none?: Prisma.AcquisitionProvenanceWhereInput;
};
export type AcquisitionProvenanceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AcquisitionProvenanceOrderByRelevanceInput = {
    fields: Prisma.AcquisitionProvenanceOrderByRelevanceFieldEnum | Prisma.AcquisitionProvenanceOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AcquisitionProvenanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    acquisitionId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AcquisitionProvenanceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    acquisitionId?: Prisma.SortOrder;
};
export type AcquisitionProvenanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    acquisitionId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AcquisitionProvenanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    acquisitionId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AcquisitionProvenanceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    acquisitionId?: Prisma.SortOrder;
};
export type AcquisitionProvenanceCreateNestedManyWithoutAcquisitionInput = {
    create?: Prisma.XOR<Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput> | Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput[] | Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput[];
    connectOrCreate?: Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput | Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput[];
    createMany?: Prisma.AcquisitionProvenanceCreateManyAcquisitionInputEnvelope;
    connect?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
};
export type AcquisitionProvenanceUncheckedCreateNestedManyWithoutAcquisitionInput = {
    create?: Prisma.XOR<Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput> | Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput[] | Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput[];
    connectOrCreate?: Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput | Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput[];
    createMany?: Prisma.AcquisitionProvenanceCreateManyAcquisitionInputEnvelope;
    connect?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
};
export type AcquisitionProvenanceUpdateManyWithoutAcquisitionNestedInput = {
    create?: Prisma.XOR<Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput> | Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput[] | Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput[];
    connectOrCreate?: Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput | Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput[];
    upsert?: Prisma.AcquisitionProvenanceUpsertWithWhereUniqueWithoutAcquisitionInput | Prisma.AcquisitionProvenanceUpsertWithWhereUniqueWithoutAcquisitionInput[];
    createMany?: Prisma.AcquisitionProvenanceCreateManyAcquisitionInputEnvelope;
    set?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    disconnect?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    delete?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    connect?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    update?: Prisma.AcquisitionProvenanceUpdateWithWhereUniqueWithoutAcquisitionInput | Prisma.AcquisitionProvenanceUpdateWithWhereUniqueWithoutAcquisitionInput[];
    updateMany?: Prisma.AcquisitionProvenanceUpdateManyWithWhereWithoutAcquisitionInput | Prisma.AcquisitionProvenanceUpdateManyWithWhereWithoutAcquisitionInput[];
    deleteMany?: Prisma.AcquisitionProvenanceScalarWhereInput | Prisma.AcquisitionProvenanceScalarWhereInput[];
};
export type AcquisitionProvenanceUncheckedUpdateManyWithoutAcquisitionNestedInput = {
    create?: Prisma.XOR<Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput> | Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput[] | Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput[];
    connectOrCreate?: Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput | Prisma.AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput[];
    upsert?: Prisma.AcquisitionProvenanceUpsertWithWhereUniqueWithoutAcquisitionInput | Prisma.AcquisitionProvenanceUpsertWithWhereUniqueWithoutAcquisitionInput[];
    createMany?: Prisma.AcquisitionProvenanceCreateManyAcquisitionInputEnvelope;
    set?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    disconnect?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    delete?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    connect?: Prisma.AcquisitionProvenanceWhereUniqueInput | Prisma.AcquisitionProvenanceWhereUniqueInput[];
    update?: Prisma.AcquisitionProvenanceUpdateWithWhereUniqueWithoutAcquisitionInput | Prisma.AcquisitionProvenanceUpdateWithWhereUniqueWithoutAcquisitionInput[];
    updateMany?: Prisma.AcquisitionProvenanceUpdateManyWithWhereWithoutAcquisitionInput | Prisma.AcquisitionProvenanceUpdateManyWithWhereWithoutAcquisitionInput[];
    deleteMany?: Prisma.AcquisitionProvenanceScalarWhereInput | Prisma.AcquisitionProvenanceScalarWhereInput[];
};
export type AcquisitionProvenanceCreateWithoutAcquisitionInput = {
    entry: string;
    createdAt?: Date | string;
};
export type AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput = {
    id?: number;
    entry: string;
    createdAt?: Date | string;
};
export type AcquisitionProvenanceCreateOrConnectWithoutAcquisitionInput = {
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput>;
};
export type AcquisitionProvenanceCreateManyAcquisitionInputEnvelope = {
    data: Prisma.AcquisitionProvenanceCreateManyAcquisitionInput | Prisma.AcquisitionProvenanceCreateManyAcquisitionInput[];
    skipDuplicates?: boolean;
};
export type AcquisitionProvenanceUpsertWithWhereUniqueWithoutAcquisitionInput = {
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
    update: Prisma.XOR<Prisma.AcquisitionProvenanceUpdateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedUpdateWithoutAcquisitionInput>;
    create: Prisma.XOR<Prisma.AcquisitionProvenanceCreateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedCreateWithoutAcquisitionInput>;
};
export type AcquisitionProvenanceUpdateWithWhereUniqueWithoutAcquisitionInput = {
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
    data: Prisma.XOR<Prisma.AcquisitionProvenanceUpdateWithoutAcquisitionInput, Prisma.AcquisitionProvenanceUncheckedUpdateWithoutAcquisitionInput>;
};
export type AcquisitionProvenanceUpdateManyWithWhereWithoutAcquisitionInput = {
    where: Prisma.AcquisitionProvenanceScalarWhereInput;
    data: Prisma.XOR<Prisma.AcquisitionProvenanceUpdateManyMutationInput, Prisma.AcquisitionProvenanceUncheckedUpdateManyWithoutAcquisitionInput>;
};
export type AcquisitionProvenanceScalarWhereInput = {
    AND?: Prisma.AcquisitionProvenanceScalarWhereInput | Prisma.AcquisitionProvenanceScalarWhereInput[];
    OR?: Prisma.AcquisitionProvenanceScalarWhereInput[];
    NOT?: Prisma.AcquisitionProvenanceScalarWhereInput | Prisma.AcquisitionProvenanceScalarWhereInput[];
    id?: Prisma.IntFilter<"AcquisitionProvenance"> | number;
    acquisitionId?: Prisma.IntFilter<"AcquisitionProvenance"> | number;
    entry?: Prisma.StringFilter<"AcquisitionProvenance"> | string;
    createdAt?: Prisma.DateTimeFilter<"AcquisitionProvenance"> | Date | string;
};
export type AcquisitionProvenanceCreateManyAcquisitionInput = {
    id?: number;
    entry: string;
    createdAt?: Date | string;
};
export type AcquisitionProvenanceUpdateWithoutAcquisitionInput = {
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionProvenanceUncheckedUpdateWithoutAcquisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionProvenanceUncheckedUpdateManyWithoutAcquisitionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AcquisitionProvenanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    acquisitionId?: boolean;
    entry?: boolean;
    createdAt?: boolean;
    acquisition?: boolean | Prisma.AcquisitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["acquisitionProvenance"]>;
export type AcquisitionProvenanceSelectScalar = {
    id?: boolean;
    acquisitionId?: boolean;
    entry?: boolean;
    createdAt?: boolean;
};
export type AcquisitionProvenanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "acquisitionId" | "entry" | "createdAt", ExtArgs["result"]["acquisitionProvenance"]>;
export type AcquisitionProvenanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    acquisition?: boolean | Prisma.AcquisitionDefaultArgs<ExtArgs>;
};
export type $AcquisitionProvenancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AcquisitionProvenance";
    objects: {
        acquisition: Prisma.$AcquisitionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        acquisitionId: number;
        entry: string;
        createdAt: Date;
    }, ExtArgs["result"]["acquisitionProvenance"]>;
    composites: {};
};
export type AcquisitionProvenanceGetPayload<S extends boolean | null | undefined | AcquisitionProvenanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload, S>;
export type AcquisitionProvenanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AcquisitionProvenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AcquisitionProvenanceCountAggregateInputType | true;
};
export interface AcquisitionProvenanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AcquisitionProvenance'];
        meta: {
            name: 'AcquisitionProvenance';
        };
    };
    /**
     * Find zero or one AcquisitionProvenance that matches the filter.
     * @param {AcquisitionProvenanceFindUniqueArgs} args - Arguments to find a AcquisitionProvenance
     * @example
     * // Get one AcquisitionProvenance
     * const acquisitionProvenance = await prisma.acquisitionProvenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcquisitionProvenanceFindUniqueArgs>(args: Prisma.SelectSubset<T, AcquisitionProvenanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AcquisitionProvenance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcquisitionProvenanceFindUniqueOrThrowArgs} args - Arguments to find a AcquisitionProvenance
     * @example
     * // Get one AcquisitionProvenance
     * const acquisitionProvenance = await prisma.acquisitionProvenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcquisitionProvenanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AcquisitionProvenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AcquisitionProvenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionProvenanceFindFirstArgs} args - Arguments to find a AcquisitionProvenance
     * @example
     * // Get one AcquisitionProvenance
     * const acquisitionProvenance = await prisma.acquisitionProvenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcquisitionProvenanceFindFirstArgs>(args?: Prisma.SelectSubset<T, AcquisitionProvenanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AcquisitionProvenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionProvenanceFindFirstOrThrowArgs} args - Arguments to find a AcquisitionProvenance
     * @example
     * // Get one AcquisitionProvenance
     * const acquisitionProvenance = await prisma.acquisitionProvenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcquisitionProvenanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AcquisitionProvenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AcquisitionProvenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionProvenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcquisitionProvenances
     * const acquisitionProvenances = await prisma.acquisitionProvenance.findMany()
     *
     * // Get first 10 AcquisitionProvenances
     * const acquisitionProvenances = await prisma.acquisitionProvenance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const acquisitionProvenanceWithIdOnly = await prisma.acquisitionProvenance.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AcquisitionProvenanceFindManyArgs>(args?: Prisma.SelectSubset<T, AcquisitionProvenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AcquisitionProvenance.
     * @param {AcquisitionProvenanceCreateArgs} args - Arguments to create a AcquisitionProvenance.
     * @example
     * // Create one AcquisitionProvenance
     * const AcquisitionProvenance = await prisma.acquisitionProvenance.create({
     *   data: {
     *     // ... data to create a AcquisitionProvenance
     *   }
     * })
     *
     */
    create<T extends AcquisitionProvenanceCreateArgs>(args: Prisma.SelectSubset<T, AcquisitionProvenanceCreateArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AcquisitionProvenances.
     * @param {AcquisitionProvenanceCreateManyArgs} args - Arguments to create many AcquisitionProvenances.
     * @example
     * // Create many AcquisitionProvenances
     * const acquisitionProvenance = await prisma.acquisitionProvenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AcquisitionProvenanceCreateManyArgs>(args?: Prisma.SelectSubset<T, AcquisitionProvenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AcquisitionProvenance.
     * @param {AcquisitionProvenanceDeleteArgs} args - Arguments to delete one AcquisitionProvenance.
     * @example
     * // Delete one AcquisitionProvenance
     * const AcquisitionProvenance = await prisma.acquisitionProvenance.delete({
     *   where: {
     *     // ... filter to delete one AcquisitionProvenance
     *   }
     * })
     *
     */
    delete<T extends AcquisitionProvenanceDeleteArgs>(args: Prisma.SelectSubset<T, AcquisitionProvenanceDeleteArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AcquisitionProvenance.
     * @param {AcquisitionProvenanceUpdateArgs} args - Arguments to update one AcquisitionProvenance.
     * @example
     * // Update one AcquisitionProvenance
     * const acquisitionProvenance = await prisma.acquisitionProvenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AcquisitionProvenanceUpdateArgs>(args: Prisma.SelectSubset<T, AcquisitionProvenanceUpdateArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AcquisitionProvenances.
     * @param {AcquisitionProvenanceDeleteManyArgs} args - Arguments to filter AcquisitionProvenances to delete.
     * @example
     * // Delete a few AcquisitionProvenances
     * const { count } = await prisma.acquisitionProvenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AcquisitionProvenanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, AcquisitionProvenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AcquisitionProvenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionProvenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcquisitionProvenances
     * const acquisitionProvenance = await prisma.acquisitionProvenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AcquisitionProvenanceUpdateManyArgs>(args: Prisma.SelectSubset<T, AcquisitionProvenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AcquisitionProvenance.
     * @param {AcquisitionProvenanceUpsertArgs} args - Arguments to update or create a AcquisitionProvenance.
     * @example
     * // Update or create a AcquisitionProvenance
     * const acquisitionProvenance = await prisma.acquisitionProvenance.upsert({
     *   create: {
     *     // ... data to create a AcquisitionProvenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcquisitionProvenance we want to update
     *   }
     * })
     */
    upsert<T extends AcquisitionProvenanceUpsertArgs>(args: Prisma.SelectSubset<T, AcquisitionProvenanceUpsertArgs<ExtArgs>>): Prisma.Prisma__AcquisitionProvenanceClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionProvenancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AcquisitionProvenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionProvenanceCountArgs} args - Arguments to filter AcquisitionProvenances to count.
     * @example
     * // Count the number of AcquisitionProvenances
     * const count = await prisma.acquisitionProvenance.count({
     *   where: {
     *     // ... the filter for the AcquisitionProvenances we want to count
     *   }
     * })
    **/
    count<T extends AcquisitionProvenanceCountArgs>(args?: Prisma.Subset<T, AcquisitionProvenanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AcquisitionProvenanceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AcquisitionProvenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionProvenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcquisitionProvenanceAggregateArgs>(args: Prisma.Subset<T, AcquisitionProvenanceAggregateArgs>): Prisma.PrismaPromise<GetAcquisitionProvenanceAggregateType<T>>;
    /**
     * Group by AcquisitionProvenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcquisitionProvenanceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AcquisitionProvenanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AcquisitionProvenanceGroupByArgs['orderBy'];
    } : {
        orderBy?: AcquisitionProvenanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AcquisitionProvenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcquisitionProvenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AcquisitionProvenance model
     */
    readonly fields: AcquisitionProvenanceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AcquisitionProvenance.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AcquisitionProvenanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    acquisition<T extends Prisma.AcquisitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcquisitionDefaultArgs<ExtArgs>>): Prisma.Prisma__AcquisitionClient<runtime.Types.Result.GetResult<Prisma.$AcquisitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AcquisitionProvenance model
 */
export interface AcquisitionProvenanceFieldRefs {
    readonly id: Prisma.FieldRef<"AcquisitionProvenance", 'Int'>;
    readonly acquisitionId: Prisma.FieldRef<"AcquisitionProvenance", 'Int'>;
    readonly entry: Prisma.FieldRef<"AcquisitionProvenance", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AcquisitionProvenance", 'DateTime'>;
}
/**
 * AcquisitionProvenance findUnique
 */
export type AcquisitionProvenanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AcquisitionProvenance to fetch.
     */
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
};
/**
 * AcquisitionProvenance findUniqueOrThrow
 */
export type AcquisitionProvenanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AcquisitionProvenance to fetch.
     */
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
};
/**
 * AcquisitionProvenance findFirst
 */
export type AcquisitionProvenanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AcquisitionProvenance to fetch.
     */
    where?: Prisma.AcquisitionProvenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcquisitionProvenances to fetch.
     */
    orderBy?: Prisma.AcquisitionProvenanceOrderByWithRelationInput | Prisma.AcquisitionProvenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AcquisitionProvenances.
     */
    cursor?: Prisma.AcquisitionProvenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcquisitionProvenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcquisitionProvenances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AcquisitionProvenances.
     */
    distinct?: Prisma.AcquisitionProvenanceScalarFieldEnum | Prisma.AcquisitionProvenanceScalarFieldEnum[];
};
/**
 * AcquisitionProvenance findFirstOrThrow
 */
export type AcquisitionProvenanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AcquisitionProvenance to fetch.
     */
    where?: Prisma.AcquisitionProvenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcquisitionProvenances to fetch.
     */
    orderBy?: Prisma.AcquisitionProvenanceOrderByWithRelationInput | Prisma.AcquisitionProvenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AcquisitionProvenances.
     */
    cursor?: Prisma.AcquisitionProvenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcquisitionProvenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcquisitionProvenances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AcquisitionProvenances.
     */
    distinct?: Prisma.AcquisitionProvenanceScalarFieldEnum | Prisma.AcquisitionProvenanceScalarFieldEnum[];
};
/**
 * AcquisitionProvenance findMany
 */
export type AcquisitionProvenanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AcquisitionProvenances to fetch.
     */
    where?: Prisma.AcquisitionProvenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AcquisitionProvenances to fetch.
     */
    orderBy?: Prisma.AcquisitionProvenanceOrderByWithRelationInput | Prisma.AcquisitionProvenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AcquisitionProvenances.
     */
    cursor?: Prisma.AcquisitionProvenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AcquisitionProvenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AcquisitionProvenances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AcquisitionProvenances.
     */
    distinct?: Prisma.AcquisitionProvenanceScalarFieldEnum | Prisma.AcquisitionProvenanceScalarFieldEnum[];
};
/**
 * AcquisitionProvenance create
 */
export type AcquisitionProvenanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AcquisitionProvenance.
     */
    data: Prisma.XOR<Prisma.AcquisitionProvenanceCreateInput, Prisma.AcquisitionProvenanceUncheckedCreateInput>;
};
/**
 * AcquisitionProvenance createMany
 */
export type AcquisitionProvenanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcquisitionProvenances.
     */
    data: Prisma.AcquisitionProvenanceCreateManyInput | Prisma.AcquisitionProvenanceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AcquisitionProvenance update
 */
export type AcquisitionProvenanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AcquisitionProvenance.
     */
    data: Prisma.XOR<Prisma.AcquisitionProvenanceUpdateInput, Prisma.AcquisitionProvenanceUncheckedUpdateInput>;
    /**
     * Choose, which AcquisitionProvenance to update.
     */
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
};
/**
 * AcquisitionProvenance updateMany
 */
export type AcquisitionProvenanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AcquisitionProvenances.
     */
    data: Prisma.XOR<Prisma.AcquisitionProvenanceUpdateManyMutationInput, Prisma.AcquisitionProvenanceUncheckedUpdateManyInput>;
    /**
     * Filter which AcquisitionProvenances to update
     */
    where?: Prisma.AcquisitionProvenanceWhereInput;
    /**
     * Limit how many AcquisitionProvenances to update.
     */
    limit?: number;
};
/**
 * AcquisitionProvenance upsert
 */
export type AcquisitionProvenanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AcquisitionProvenance to update in case it exists.
     */
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
    /**
     * In case the AcquisitionProvenance found by the `where` argument doesn't exist, create a new AcquisitionProvenance with this data.
     */
    create: Prisma.XOR<Prisma.AcquisitionProvenanceCreateInput, Prisma.AcquisitionProvenanceUncheckedCreateInput>;
    /**
     * In case the AcquisitionProvenance was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AcquisitionProvenanceUpdateInput, Prisma.AcquisitionProvenanceUncheckedUpdateInput>;
};
/**
 * AcquisitionProvenance delete
 */
export type AcquisitionProvenanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AcquisitionProvenance to delete.
     */
    where: Prisma.AcquisitionProvenanceWhereUniqueInput;
};
/**
 * AcquisitionProvenance deleteMany
 */
export type AcquisitionProvenanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AcquisitionProvenances to delete
     */
    where?: Prisma.AcquisitionProvenanceWhereInput;
    /**
     * Limit how many AcquisitionProvenances to delete.
     */
    limit?: number;
};
/**
 * AcquisitionProvenance without action
 */
export type AcquisitionProvenanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=AcquisitionProvenance.d.ts.map