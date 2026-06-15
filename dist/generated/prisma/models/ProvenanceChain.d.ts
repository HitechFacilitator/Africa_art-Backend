import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ProvenanceChain
 *
 */
export type ProvenanceChainModel = runtime.Types.Result.DefaultSelection<Prisma.$ProvenanceChainPayload>;
export type AggregateProvenanceChain = {
    _count: ProvenanceChainCountAggregateOutputType | null;
    _avg: ProvenanceChainAvgAggregateOutputType | null;
    _sum: ProvenanceChainSumAggregateOutputType | null;
    _min: ProvenanceChainMinAggregateOutputType | null;
    _max: ProvenanceChainMaxAggregateOutputType | null;
};
export type ProvenanceChainAvgAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
};
export type ProvenanceChainSumAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
};
export type ProvenanceChainMinAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
    entry: string | null;
    createdAt: Date | null;
};
export type ProvenanceChainMaxAggregateOutputType = {
    id: number | null;
    artworkId: number | null;
    entry: string | null;
    createdAt: Date | null;
};
export type ProvenanceChainCountAggregateOutputType = {
    id: number;
    artworkId: number;
    entry: number;
    createdAt: number;
    _all: number;
};
export type ProvenanceChainAvgAggregateInputType = {
    id?: true;
    artworkId?: true;
};
export type ProvenanceChainSumAggregateInputType = {
    id?: true;
    artworkId?: true;
};
export type ProvenanceChainMinAggregateInputType = {
    id?: true;
    artworkId?: true;
    entry?: true;
    createdAt?: true;
};
export type ProvenanceChainMaxAggregateInputType = {
    id?: true;
    artworkId?: true;
    entry?: true;
    createdAt?: true;
};
export type ProvenanceChainCountAggregateInputType = {
    id?: true;
    artworkId?: true;
    entry?: true;
    createdAt?: true;
    _all?: true;
};
export type ProvenanceChainAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProvenanceChain to aggregate.
     */
    where?: Prisma.ProvenanceChainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProvenanceChains to fetch.
     */
    orderBy?: Prisma.ProvenanceChainOrderByWithRelationInput | Prisma.ProvenanceChainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProvenanceChainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProvenanceChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProvenanceChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProvenanceChains
    **/
    _count?: true | ProvenanceChainCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProvenanceChainAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProvenanceChainSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProvenanceChainMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProvenanceChainMaxAggregateInputType;
};
export type GetProvenanceChainAggregateType<T extends ProvenanceChainAggregateArgs> = {
    [P in keyof T & keyof AggregateProvenanceChain]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProvenanceChain[P]> : Prisma.GetScalarType<T[P], AggregateProvenanceChain[P]>;
};
export type ProvenanceChainGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProvenanceChainWhereInput;
    orderBy?: Prisma.ProvenanceChainOrderByWithAggregationInput | Prisma.ProvenanceChainOrderByWithAggregationInput[];
    by: Prisma.ProvenanceChainScalarFieldEnum[] | Prisma.ProvenanceChainScalarFieldEnum;
    having?: Prisma.ProvenanceChainScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProvenanceChainCountAggregateInputType | true;
    _avg?: ProvenanceChainAvgAggregateInputType;
    _sum?: ProvenanceChainSumAggregateInputType;
    _min?: ProvenanceChainMinAggregateInputType;
    _max?: ProvenanceChainMaxAggregateInputType;
};
export type ProvenanceChainGroupByOutputType = {
    id: number;
    artworkId: number;
    entry: string;
    createdAt: Date;
    _count: ProvenanceChainCountAggregateOutputType | null;
    _avg: ProvenanceChainAvgAggregateOutputType | null;
    _sum: ProvenanceChainSumAggregateOutputType | null;
    _min: ProvenanceChainMinAggregateOutputType | null;
    _max: ProvenanceChainMaxAggregateOutputType | null;
};
export type GetProvenanceChainGroupByPayload<T extends ProvenanceChainGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProvenanceChainGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProvenanceChainGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProvenanceChainGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProvenanceChainGroupByOutputType[P]>;
}>>;
export type ProvenanceChainWhereInput = {
    AND?: Prisma.ProvenanceChainWhereInput | Prisma.ProvenanceChainWhereInput[];
    OR?: Prisma.ProvenanceChainWhereInput[];
    NOT?: Prisma.ProvenanceChainWhereInput | Prisma.ProvenanceChainWhereInput[];
    id?: Prisma.IntFilter<"ProvenanceChain"> | number;
    artworkId?: Prisma.IntFilter<"ProvenanceChain"> | number;
    entry?: Prisma.StringFilter<"ProvenanceChain"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProvenanceChain"> | Date | string;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
};
export type ProvenanceChainOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    artwork?: Prisma.ArtworkOrderByWithRelationInput;
    _relevance?: Prisma.ProvenanceChainOrderByRelevanceInput;
};
export type ProvenanceChainWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProvenanceChainWhereInput | Prisma.ProvenanceChainWhereInput[];
    OR?: Prisma.ProvenanceChainWhereInput[];
    NOT?: Prisma.ProvenanceChainWhereInput | Prisma.ProvenanceChainWhereInput[];
    artworkId?: Prisma.IntFilter<"ProvenanceChain"> | number;
    entry?: Prisma.StringFilter<"ProvenanceChain"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProvenanceChain"> | Date | string;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
}, "id">;
export type ProvenanceChainOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProvenanceChainCountOrderByAggregateInput;
    _avg?: Prisma.ProvenanceChainAvgOrderByAggregateInput;
    _max?: Prisma.ProvenanceChainMaxOrderByAggregateInput;
    _min?: Prisma.ProvenanceChainMinOrderByAggregateInput;
    _sum?: Prisma.ProvenanceChainSumOrderByAggregateInput;
};
export type ProvenanceChainScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProvenanceChainScalarWhereWithAggregatesInput | Prisma.ProvenanceChainScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProvenanceChainScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProvenanceChainScalarWhereWithAggregatesInput | Prisma.ProvenanceChainScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProvenanceChain"> | number;
    artworkId?: Prisma.IntWithAggregatesFilter<"ProvenanceChain"> | number;
    entry?: Prisma.StringWithAggregatesFilter<"ProvenanceChain"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProvenanceChain"> | Date | string;
};
export type ProvenanceChainCreateInput = {
    entry: string;
    createdAt?: Date | string;
    artwork: Prisma.ArtworkCreateNestedOneWithoutProvenanceChainInput;
};
export type ProvenanceChainUncheckedCreateInput = {
    id?: number;
    artworkId: number;
    entry: string;
    createdAt?: Date | string;
};
export type ProvenanceChainUpdateInput = {
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artwork?: Prisma.ArtworkUpdateOneRequiredWithoutProvenanceChainNestedInput;
};
export type ProvenanceChainUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProvenanceChainCreateManyInput = {
    id?: number;
    artworkId: number;
    entry: string;
    createdAt?: Date | string;
};
export type ProvenanceChainUpdateManyMutationInput = {
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProvenanceChainUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProvenanceChainListRelationFilter = {
    every?: Prisma.ProvenanceChainWhereInput;
    some?: Prisma.ProvenanceChainWhereInput;
    none?: Prisma.ProvenanceChainWhereInput;
};
export type ProvenanceChainOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProvenanceChainOrderByRelevanceInput = {
    fields: Prisma.ProvenanceChainOrderByRelevanceFieldEnum | Prisma.ProvenanceChainOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ProvenanceChainCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProvenanceChainAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
};
export type ProvenanceChainMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProvenanceChainMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    entry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProvenanceChainSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
};
export type ProvenanceChainCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.ProvenanceChainCreateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput> | Prisma.ProvenanceChainCreateWithoutArtworkInput[] | Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput | Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.ProvenanceChainCreateManyArtworkInputEnvelope;
    connect?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
};
export type ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.ProvenanceChainCreateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput> | Prisma.ProvenanceChainCreateWithoutArtworkInput[] | Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput | Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.ProvenanceChainCreateManyArtworkInputEnvelope;
    connect?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
};
export type ProvenanceChainUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.ProvenanceChainCreateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput> | Prisma.ProvenanceChainCreateWithoutArtworkInput[] | Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput | Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.ProvenanceChainUpsertWithWhereUniqueWithoutArtworkInput | Prisma.ProvenanceChainUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.ProvenanceChainCreateManyArtworkInputEnvelope;
    set?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    disconnect?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    delete?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    connect?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    update?: Prisma.ProvenanceChainUpdateWithWhereUniqueWithoutArtworkInput | Prisma.ProvenanceChainUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.ProvenanceChainUpdateManyWithWhereWithoutArtworkInput | Prisma.ProvenanceChainUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.ProvenanceChainScalarWhereInput | Prisma.ProvenanceChainScalarWhereInput[];
};
export type ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.ProvenanceChainCreateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput> | Prisma.ProvenanceChainCreateWithoutArtworkInput[] | Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput | Prisma.ProvenanceChainCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.ProvenanceChainUpsertWithWhereUniqueWithoutArtworkInput | Prisma.ProvenanceChainUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.ProvenanceChainCreateManyArtworkInputEnvelope;
    set?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    disconnect?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    delete?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    connect?: Prisma.ProvenanceChainWhereUniqueInput | Prisma.ProvenanceChainWhereUniqueInput[];
    update?: Prisma.ProvenanceChainUpdateWithWhereUniqueWithoutArtworkInput | Prisma.ProvenanceChainUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.ProvenanceChainUpdateManyWithWhereWithoutArtworkInput | Prisma.ProvenanceChainUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.ProvenanceChainScalarWhereInput | Prisma.ProvenanceChainScalarWhereInput[];
};
export type ProvenanceChainCreateWithoutArtworkInput = {
    entry: string;
    createdAt?: Date | string;
};
export type ProvenanceChainUncheckedCreateWithoutArtworkInput = {
    id?: number;
    entry: string;
    createdAt?: Date | string;
};
export type ProvenanceChainCreateOrConnectWithoutArtworkInput = {
    where: Prisma.ProvenanceChainWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProvenanceChainCreateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput>;
};
export type ProvenanceChainCreateManyArtworkInputEnvelope = {
    data: Prisma.ProvenanceChainCreateManyArtworkInput | Prisma.ProvenanceChainCreateManyArtworkInput[];
    skipDuplicates?: boolean;
};
export type ProvenanceChainUpsertWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.ProvenanceChainWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProvenanceChainUpdateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedUpdateWithoutArtworkInput>;
    create: Prisma.XOR<Prisma.ProvenanceChainCreateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedCreateWithoutArtworkInput>;
};
export type ProvenanceChainUpdateWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.ProvenanceChainWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProvenanceChainUpdateWithoutArtworkInput, Prisma.ProvenanceChainUncheckedUpdateWithoutArtworkInput>;
};
export type ProvenanceChainUpdateManyWithWhereWithoutArtworkInput = {
    where: Prisma.ProvenanceChainScalarWhereInput;
    data: Prisma.XOR<Prisma.ProvenanceChainUpdateManyMutationInput, Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkInput>;
};
export type ProvenanceChainScalarWhereInput = {
    AND?: Prisma.ProvenanceChainScalarWhereInput | Prisma.ProvenanceChainScalarWhereInput[];
    OR?: Prisma.ProvenanceChainScalarWhereInput[];
    NOT?: Prisma.ProvenanceChainScalarWhereInput | Prisma.ProvenanceChainScalarWhereInput[];
    id?: Prisma.IntFilter<"ProvenanceChain"> | number;
    artworkId?: Prisma.IntFilter<"ProvenanceChain"> | number;
    entry?: Prisma.StringFilter<"ProvenanceChain"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProvenanceChain"> | Date | string;
};
export type ProvenanceChainCreateManyArtworkInput = {
    id?: number;
    entry: string;
    createdAt?: Date | string;
};
export type ProvenanceChainUpdateWithoutArtworkInput = {
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProvenanceChainUncheckedUpdateWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProvenanceChainUncheckedUpdateManyWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entry?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProvenanceChainSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    artworkId?: boolean;
    entry?: boolean;
    createdAt?: boolean;
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["provenanceChain"]>;
export type ProvenanceChainSelectScalar = {
    id?: boolean;
    artworkId?: boolean;
    entry?: boolean;
    createdAt?: boolean;
};
export type ProvenanceChainOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "artworkId" | "entry" | "createdAt", ExtArgs["result"]["provenanceChain"]>;
export type ProvenanceChainInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
};
export type $ProvenanceChainPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProvenanceChain";
    objects: {
        artwork: Prisma.$ArtworkPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        artworkId: number;
        entry: string;
        createdAt: Date;
    }, ExtArgs["result"]["provenanceChain"]>;
    composites: {};
};
export type ProvenanceChainGetPayload<S extends boolean | null | undefined | ProvenanceChainDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload, S>;
export type ProvenanceChainCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProvenanceChainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProvenanceChainCountAggregateInputType | true;
};
export interface ProvenanceChainDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProvenanceChain'];
        meta: {
            name: 'ProvenanceChain';
        };
    };
    /**
     * Find zero or one ProvenanceChain that matches the filter.
     * @param {ProvenanceChainFindUniqueArgs} args - Arguments to find a ProvenanceChain
     * @example
     * // Get one ProvenanceChain
     * const provenanceChain = await prisma.provenanceChain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvenanceChainFindUniqueArgs>(args: Prisma.SelectSubset<T, ProvenanceChainFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProvenanceChain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvenanceChainFindUniqueOrThrowArgs} args - Arguments to find a ProvenanceChain
     * @example
     * // Get one ProvenanceChain
     * const provenanceChain = await prisma.provenanceChain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvenanceChainFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProvenanceChainFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProvenanceChain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvenanceChainFindFirstArgs} args - Arguments to find a ProvenanceChain
     * @example
     * // Get one ProvenanceChain
     * const provenanceChain = await prisma.provenanceChain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvenanceChainFindFirstArgs>(args?: Prisma.SelectSubset<T, ProvenanceChainFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProvenanceChain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvenanceChainFindFirstOrThrowArgs} args - Arguments to find a ProvenanceChain
     * @example
     * // Get one ProvenanceChain
     * const provenanceChain = await prisma.provenanceChain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvenanceChainFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProvenanceChainFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProvenanceChains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvenanceChainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProvenanceChains
     * const provenanceChains = await prisma.provenanceChain.findMany()
     *
     * // Get first 10 ProvenanceChains
     * const provenanceChains = await prisma.provenanceChain.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const provenanceChainWithIdOnly = await prisma.provenanceChain.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProvenanceChainFindManyArgs>(args?: Prisma.SelectSubset<T, ProvenanceChainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProvenanceChain.
     * @param {ProvenanceChainCreateArgs} args - Arguments to create a ProvenanceChain.
     * @example
     * // Create one ProvenanceChain
     * const ProvenanceChain = await prisma.provenanceChain.create({
     *   data: {
     *     // ... data to create a ProvenanceChain
     *   }
     * })
     *
     */
    create<T extends ProvenanceChainCreateArgs>(args: Prisma.SelectSubset<T, ProvenanceChainCreateArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProvenanceChains.
     * @param {ProvenanceChainCreateManyArgs} args - Arguments to create many ProvenanceChains.
     * @example
     * // Create many ProvenanceChains
     * const provenanceChain = await prisma.provenanceChain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProvenanceChainCreateManyArgs>(args?: Prisma.SelectSubset<T, ProvenanceChainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a ProvenanceChain.
     * @param {ProvenanceChainDeleteArgs} args - Arguments to delete one ProvenanceChain.
     * @example
     * // Delete one ProvenanceChain
     * const ProvenanceChain = await prisma.provenanceChain.delete({
     *   where: {
     *     // ... filter to delete one ProvenanceChain
     *   }
     * })
     *
     */
    delete<T extends ProvenanceChainDeleteArgs>(args: Prisma.SelectSubset<T, ProvenanceChainDeleteArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProvenanceChain.
     * @param {ProvenanceChainUpdateArgs} args - Arguments to update one ProvenanceChain.
     * @example
     * // Update one ProvenanceChain
     * const provenanceChain = await prisma.provenanceChain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProvenanceChainUpdateArgs>(args: Prisma.SelectSubset<T, ProvenanceChainUpdateArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProvenanceChains.
     * @param {ProvenanceChainDeleteManyArgs} args - Arguments to filter ProvenanceChains to delete.
     * @example
     * // Delete a few ProvenanceChains
     * const { count } = await prisma.provenanceChain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProvenanceChainDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProvenanceChainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProvenanceChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvenanceChainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProvenanceChains
     * const provenanceChain = await prisma.provenanceChain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProvenanceChainUpdateManyArgs>(args: Prisma.SelectSubset<T, ProvenanceChainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one ProvenanceChain.
     * @param {ProvenanceChainUpsertArgs} args - Arguments to update or create a ProvenanceChain.
     * @example
     * // Update or create a ProvenanceChain
     * const provenanceChain = await prisma.provenanceChain.upsert({
     *   create: {
     *     // ... data to create a ProvenanceChain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProvenanceChain we want to update
     *   }
     * })
     */
    upsert<T extends ProvenanceChainUpsertArgs>(args: Prisma.SelectSubset<T, ProvenanceChainUpsertArgs<ExtArgs>>): Prisma.Prisma__ProvenanceChainClient<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProvenanceChains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvenanceChainCountArgs} args - Arguments to filter ProvenanceChains to count.
     * @example
     * // Count the number of ProvenanceChains
     * const count = await prisma.provenanceChain.count({
     *   where: {
     *     // ... the filter for the ProvenanceChains we want to count
     *   }
     * })
    **/
    count<T extends ProvenanceChainCountArgs>(args?: Prisma.Subset<T, ProvenanceChainCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProvenanceChainCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProvenanceChain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvenanceChainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvenanceChainAggregateArgs>(args: Prisma.Subset<T, ProvenanceChainAggregateArgs>): Prisma.PrismaPromise<GetProvenanceChainAggregateType<T>>;
    /**
     * Group by ProvenanceChain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvenanceChainGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProvenanceChainGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProvenanceChainGroupByArgs['orderBy'];
    } : {
        orderBy?: ProvenanceChainGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProvenanceChainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvenanceChainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProvenanceChain model
     */
    readonly fields: ProvenanceChainFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProvenanceChain.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProvenanceChainClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    artwork<T extends Prisma.ArtworkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ArtworkDefaultArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProvenanceChain model
 */
export interface ProvenanceChainFieldRefs {
    readonly id: Prisma.FieldRef<"ProvenanceChain", 'Int'>;
    readonly artworkId: Prisma.FieldRef<"ProvenanceChain", 'Int'>;
    readonly entry: Prisma.FieldRef<"ProvenanceChain", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProvenanceChain", 'DateTime'>;
}
/**
 * ProvenanceChain findUnique
 */
export type ProvenanceChainFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * Filter, which ProvenanceChain to fetch.
     */
    where: Prisma.ProvenanceChainWhereUniqueInput;
};
/**
 * ProvenanceChain findUniqueOrThrow
 */
export type ProvenanceChainFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * Filter, which ProvenanceChain to fetch.
     */
    where: Prisma.ProvenanceChainWhereUniqueInput;
};
/**
 * ProvenanceChain findFirst
 */
export type ProvenanceChainFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * Filter, which ProvenanceChain to fetch.
     */
    where?: Prisma.ProvenanceChainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProvenanceChains to fetch.
     */
    orderBy?: Prisma.ProvenanceChainOrderByWithRelationInput | Prisma.ProvenanceChainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProvenanceChains.
     */
    cursor?: Prisma.ProvenanceChainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProvenanceChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProvenanceChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProvenanceChains.
     */
    distinct?: Prisma.ProvenanceChainScalarFieldEnum | Prisma.ProvenanceChainScalarFieldEnum[];
};
/**
 * ProvenanceChain findFirstOrThrow
 */
export type ProvenanceChainFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * Filter, which ProvenanceChain to fetch.
     */
    where?: Prisma.ProvenanceChainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProvenanceChains to fetch.
     */
    orderBy?: Prisma.ProvenanceChainOrderByWithRelationInput | Prisma.ProvenanceChainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProvenanceChains.
     */
    cursor?: Prisma.ProvenanceChainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProvenanceChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProvenanceChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProvenanceChains.
     */
    distinct?: Prisma.ProvenanceChainScalarFieldEnum | Prisma.ProvenanceChainScalarFieldEnum[];
};
/**
 * ProvenanceChain findMany
 */
export type ProvenanceChainFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * Filter, which ProvenanceChains to fetch.
     */
    where?: Prisma.ProvenanceChainWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProvenanceChains to fetch.
     */
    orderBy?: Prisma.ProvenanceChainOrderByWithRelationInput | Prisma.ProvenanceChainOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProvenanceChains.
     */
    cursor?: Prisma.ProvenanceChainWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProvenanceChains from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProvenanceChains.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProvenanceChains.
     */
    distinct?: Prisma.ProvenanceChainScalarFieldEnum | Prisma.ProvenanceChainScalarFieldEnum[];
};
/**
 * ProvenanceChain create
 */
export type ProvenanceChainCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProvenanceChain.
     */
    data: Prisma.XOR<Prisma.ProvenanceChainCreateInput, Prisma.ProvenanceChainUncheckedCreateInput>;
};
/**
 * ProvenanceChain createMany
 */
export type ProvenanceChainCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProvenanceChains.
     */
    data: Prisma.ProvenanceChainCreateManyInput | Prisma.ProvenanceChainCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProvenanceChain update
 */
export type ProvenanceChainUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProvenanceChain.
     */
    data: Prisma.XOR<Prisma.ProvenanceChainUpdateInput, Prisma.ProvenanceChainUncheckedUpdateInput>;
    /**
     * Choose, which ProvenanceChain to update.
     */
    where: Prisma.ProvenanceChainWhereUniqueInput;
};
/**
 * ProvenanceChain updateMany
 */
export type ProvenanceChainUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProvenanceChains.
     */
    data: Prisma.XOR<Prisma.ProvenanceChainUpdateManyMutationInput, Prisma.ProvenanceChainUncheckedUpdateManyInput>;
    /**
     * Filter which ProvenanceChains to update
     */
    where?: Prisma.ProvenanceChainWhereInput;
    /**
     * Limit how many ProvenanceChains to update.
     */
    limit?: number;
};
/**
 * ProvenanceChain upsert
 */
export type ProvenanceChainUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProvenanceChain to update in case it exists.
     */
    where: Prisma.ProvenanceChainWhereUniqueInput;
    /**
     * In case the ProvenanceChain found by the `where` argument doesn't exist, create a new ProvenanceChain with this data.
     */
    create: Prisma.XOR<Prisma.ProvenanceChainCreateInput, Prisma.ProvenanceChainUncheckedCreateInput>;
    /**
     * In case the ProvenanceChain was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProvenanceChainUpdateInput, Prisma.ProvenanceChainUncheckedUpdateInput>;
};
/**
 * ProvenanceChain delete
 */
export type ProvenanceChainDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
    /**
     * Filter which ProvenanceChain to delete.
     */
    where: Prisma.ProvenanceChainWhereUniqueInput;
};
/**
 * ProvenanceChain deleteMany
 */
export type ProvenanceChainDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProvenanceChains to delete
     */
    where?: Prisma.ProvenanceChainWhereInput;
    /**
     * Limit how many ProvenanceChains to delete.
     */
    limit?: number;
};
/**
 * ProvenanceChain without action
 */
export type ProvenanceChainDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceChain
     */
    select?: Prisma.ProvenanceChainSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceChain
     */
    omit?: Prisma.ProvenanceChainOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceChainInclude<ExtArgs> | null;
};
//# sourceMappingURL=ProvenanceChain.d.ts.map