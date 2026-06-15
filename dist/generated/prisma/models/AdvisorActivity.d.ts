import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model AdvisorActivity
 *
 */
export type AdvisorActivityModel = runtime.Types.Result.DefaultSelection<Prisma.$AdvisorActivityPayload>;
export type AggregateAdvisorActivity = {
    _count: AdvisorActivityCountAggregateOutputType | null;
    _avg: AdvisorActivityAvgAggregateOutputType | null;
    _sum: AdvisorActivitySumAggregateOutputType | null;
    _min: AdvisorActivityMinAggregateOutputType | null;
    _max: AdvisorActivityMaxAggregateOutputType | null;
};
export type AdvisorActivityAvgAggregateOutputType = {
    id: number | null;
};
export type AdvisorActivitySumAggregateOutputType = {
    id: number | null;
};
export type AdvisorActivityMinAggregateOutputType = {
    id: number | null;
    type: string | null;
    title: string | null;
    description: string | null;
    timestamp: string | null;
    icon: string | null;
    createdAt: Date | null;
};
export type AdvisorActivityMaxAggregateOutputType = {
    id: number | null;
    type: string | null;
    title: string | null;
    description: string | null;
    timestamp: string | null;
    icon: string | null;
    createdAt: Date | null;
};
export type AdvisorActivityCountAggregateOutputType = {
    id: number;
    type: number;
    title: number;
    description: number;
    timestamp: number;
    icon: number;
    createdAt: number;
    _all: number;
};
export type AdvisorActivityAvgAggregateInputType = {
    id?: true;
};
export type AdvisorActivitySumAggregateInputType = {
    id?: true;
};
export type AdvisorActivityMinAggregateInputType = {
    id?: true;
    type?: true;
    title?: true;
    description?: true;
    timestamp?: true;
    icon?: true;
    createdAt?: true;
};
export type AdvisorActivityMaxAggregateInputType = {
    id?: true;
    type?: true;
    title?: true;
    description?: true;
    timestamp?: true;
    icon?: true;
    createdAt?: true;
};
export type AdvisorActivityCountAggregateInputType = {
    id?: true;
    type?: true;
    title?: true;
    description?: true;
    timestamp?: true;
    icon?: true;
    createdAt?: true;
    _all?: true;
};
export type AdvisorActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdvisorActivity to aggregate.
     */
    where?: Prisma.AdvisorActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorActivities to fetch.
     */
    orderBy?: Prisma.AdvisorActivityOrderByWithRelationInput | Prisma.AdvisorActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdvisorActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdvisorActivities
    **/
    _count?: true | AdvisorActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AdvisorActivityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AdvisorActivitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdvisorActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdvisorActivityMaxAggregateInputType;
};
export type GetAdvisorActivityAggregateType<T extends AdvisorActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateAdvisorActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdvisorActivity[P]> : Prisma.GetScalarType<T[P], AggregateAdvisorActivity[P]>;
};
export type AdvisorActivityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdvisorActivityWhereInput;
    orderBy?: Prisma.AdvisorActivityOrderByWithAggregationInput | Prisma.AdvisorActivityOrderByWithAggregationInput[];
    by: Prisma.AdvisorActivityScalarFieldEnum[] | Prisma.AdvisorActivityScalarFieldEnum;
    having?: Prisma.AdvisorActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdvisorActivityCountAggregateInputType | true;
    _avg?: AdvisorActivityAvgAggregateInputType;
    _sum?: AdvisorActivitySumAggregateInputType;
    _min?: AdvisorActivityMinAggregateInputType;
    _max?: AdvisorActivityMaxAggregateInputType;
};
export type AdvisorActivityGroupByOutputType = {
    id: number;
    type: string | null;
    title: string | null;
    description: string | null;
    timestamp: string | null;
    icon: string | null;
    createdAt: Date;
    _count: AdvisorActivityCountAggregateOutputType | null;
    _avg: AdvisorActivityAvgAggregateOutputType | null;
    _sum: AdvisorActivitySumAggregateOutputType | null;
    _min: AdvisorActivityMinAggregateOutputType | null;
    _max: AdvisorActivityMaxAggregateOutputType | null;
};
export type GetAdvisorActivityGroupByPayload<T extends AdvisorActivityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdvisorActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdvisorActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdvisorActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdvisorActivityGroupByOutputType[P]>;
}>>;
export type AdvisorActivityWhereInput = {
    AND?: Prisma.AdvisorActivityWhereInput | Prisma.AdvisorActivityWhereInput[];
    OR?: Prisma.AdvisorActivityWhereInput[];
    NOT?: Prisma.AdvisorActivityWhereInput | Prisma.AdvisorActivityWhereInput[];
    id?: Prisma.IntFilter<"AdvisorActivity"> | number;
    type?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    title?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    description?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    timestamp?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    icon?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorActivity"> | Date | string;
};
export type AdvisorActivityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _relevance?: Prisma.AdvisorActivityOrderByRelevanceInput;
};
export type AdvisorActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AdvisorActivityWhereInput | Prisma.AdvisorActivityWhereInput[];
    OR?: Prisma.AdvisorActivityWhereInput[];
    NOT?: Prisma.AdvisorActivityWhereInput | Prisma.AdvisorActivityWhereInput[];
    type?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    title?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    description?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    timestamp?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    icon?: Prisma.StringNullableFilter<"AdvisorActivity"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorActivity"> | Date | string;
}, "id">;
export type AdvisorActivityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AdvisorActivityCountOrderByAggregateInput;
    _avg?: Prisma.AdvisorActivityAvgOrderByAggregateInput;
    _max?: Prisma.AdvisorActivityMaxOrderByAggregateInput;
    _min?: Prisma.AdvisorActivityMinOrderByAggregateInput;
    _sum?: Prisma.AdvisorActivitySumOrderByAggregateInput;
};
export type AdvisorActivityScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdvisorActivityScalarWhereWithAggregatesInput | Prisma.AdvisorActivityScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdvisorActivityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdvisorActivityScalarWhereWithAggregatesInput | Prisma.AdvisorActivityScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AdvisorActivity"> | number;
    type?: Prisma.StringNullableWithAggregatesFilter<"AdvisorActivity"> | string | null;
    title?: Prisma.StringNullableWithAggregatesFilter<"AdvisorActivity"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"AdvisorActivity"> | string | null;
    timestamp?: Prisma.StringNullableWithAggregatesFilter<"AdvisorActivity"> | string | null;
    icon?: Prisma.StringNullableWithAggregatesFilter<"AdvisorActivity"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdvisorActivity"> | Date | string;
};
export type AdvisorActivityCreateInput = {
    type?: string | null;
    title?: string | null;
    description?: string | null;
    timestamp?: string | null;
    icon?: string | null;
    createdAt?: Date | string;
};
export type AdvisorActivityUncheckedCreateInput = {
    id?: number;
    type?: string | null;
    title?: string | null;
    description?: string | null;
    timestamp?: string | null;
    icon?: string | null;
    createdAt?: Date | string;
};
export type AdvisorActivityUpdateInput = {
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorActivityUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorActivityCreateManyInput = {
    id?: number;
    type?: string | null;
    title?: string | null;
    description?: string | null;
    timestamp?: string | null;
    icon?: string | null;
    createdAt?: Date | string;
};
export type AdvisorActivityUpdateManyMutationInput = {
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorActivityUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorActivityOrderByRelevanceInput = {
    fields: Prisma.AdvisorActivityOrderByRelevanceFieldEnum | Prisma.AdvisorActivityOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AdvisorActivityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdvisorActivityAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdvisorActivityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdvisorActivityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdvisorActivitySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdvisorActivitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    title?: boolean;
    description?: boolean;
    timestamp?: boolean;
    icon?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["advisorActivity"]>;
export type AdvisorActivitySelectScalar = {
    id?: boolean;
    type?: boolean;
    title?: boolean;
    description?: boolean;
    timestamp?: boolean;
    icon?: boolean;
    createdAt?: boolean;
};
export type AdvisorActivityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "title" | "description" | "timestamp" | "icon" | "createdAt", ExtArgs["result"]["advisorActivity"]>;
export type $AdvisorActivityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdvisorActivity";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        type: string | null;
        title: string | null;
        description: string | null;
        timestamp: string | null;
        icon: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["advisorActivity"]>;
    composites: {};
};
export type AdvisorActivityGetPayload<S extends boolean | null | undefined | AdvisorActivityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload, S>;
export type AdvisorActivityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdvisorActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdvisorActivityCountAggregateInputType | true;
};
export interface AdvisorActivityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdvisorActivity'];
        meta: {
            name: 'AdvisorActivity';
        };
    };
    /**
     * Find zero or one AdvisorActivity that matches the filter.
     * @param {AdvisorActivityFindUniqueArgs} args - Arguments to find a AdvisorActivity
     * @example
     * // Get one AdvisorActivity
     * const advisorActivity = await prisma.advisorActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvisorActivityFindUniqueArgs>(args: Prisma.SelectSubset<T, AdvisorActivityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AdvisorActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvisorActivityFindUniqueOrThrowArgs} args - Arguments to find a AdvisorActivity
     * @example
     * // Get one AdvisorActivity
     * const advisorActivity = await prisma.advisorActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvisorActivityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdvisorActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdvisorActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorActivityFindFirstArgs} args - Arguments to find a AdvisorActivity
     * @example
     * // Get one AdvisorActivity
     * const advisorActivity = await prisma.advisorActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvisorActivityFindFirstArgs>(args?: Prisma.SelectSubset<T, AdvisorActivityFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdvisorActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorActivityFindFirstOrThrowArgs} args - Arguments to find a AdvisorActivity
     * @example
     * // Get one AdvisorActivity
     * const advisorActivity = await prisma.advisorActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvisorActivityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdvisorActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AdvisorActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdvisorActivities
     * const advisorActivities = await prisma.advisorActivity.findMany()
     *
     * // Get first 10 AdvisorActivities
     * const advisorActivities = await prisma.advisorActivity.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const advisorActivityWithIdOnly = await prisma.advisorActivity.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdvisorActivityFindManyArgs>(args?: Prisma.SelectSubset<T, AdvisorActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AdvisorActivity.
     * @param {AdvisorActivityCreateArgs} args - Arguments to create a AdvisorActivity.
     * @example
     * // Create one AdvisorActivity
     * const AdvisorActivity = await prisma.advisorActivity.create({
     *   data: {
     *     // ... data to create a AdvisorActivity
     *   }
     * })
     *
     */
    create<T extends AdvisorActivityCreateArgs>(args: Prisma.SelectSubset<T, AdvisorActivityCreateArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AdvisorActivities.
     * @param {AdvisorActivityCreateManyArgs} args - Arguments to create many AdvisorActivities.
     * @example
     * // Create many AdvisorActivities
     * const advisorActivity = await prisma.advisorActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdvisorActivityCreateManyArgs>(args?: Prisma.SelectSubset<T, AdvisorActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AdvisorActivity.
     * @param {AdvisorActivityDeleteArgs} args - Arguments to delete one AdvisorActivity.
     * @example
     * // Delete one AdvisorActivity
     * const AdvisorActivity = await prisma.advisorActivity.delete({
     *   where: {
     *     // ... filter to delete one AdvisorActivity
     *   }
     * })
     *
     */
    delete<T extends AdvisorActivityDeleteArgs>(args: Prisma.SelectSubset<T, AdvisorActivityDeleteArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AdvisorActivity.
     * @param {AdvisorActivityUpdateArgs} args - Arguments to update one AdvisorActivity.
     * @example
     * // Update one AdvisorActivity
     * const advisorActivity = await prisma.advisorActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdvisorActivityUpdateArgs>(args: Prisma.SelectSubset<T, AdvisorActivityUpdateArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AdvisorActivities.
     * @param {AdvisorActivityDeleteManyArgs} args - Arguments to filter AdvisorActivities to delete.
     * @example
     * // Delete a few AdvisorActivities
     * const { count } = await prisma.advisorActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdvisorActivityDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdvisorActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdvisorActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdvisorActivities
     * const advisorActivity = await prisma.advisorActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdvisorActivityUpdateManyArgs>(args: Prisma.SelectSubset<T, AdvisorActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AdvisorActivity.
     * @param {AdvisorActivityUpsertArgs} args - Arguments to update or create a AdvisorActivity.
     * @example
     * // Update or create a AdvisorActivity
     * const advisorActivity = await prisma.advisorActivity.upsert({
     *   create: {
     *     // ... data to create a AdvisorActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdvisorActivity we want to update
     *   }
     * })
     */
    upsert<T extends AdvisorActivityUpsertArgs>(args: Prisma.SelectSubset<T, AdvisorActivityUpsertArgs<ExtArgs>>): Prisma.Prisma__AdvisorActivityClient<runtime.Types.Result.GetResult<Prisma.$AdvisorActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AdvisorActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorActivityCountArgs} args - Arguments to filter AdvisorActivities to count.
     * @example
     * // Count the number of AdvisorActivities
     * const count = await prisma.advisorActivity.count({
     *   where: {
     *     // ... the filter for the AdvisorActivities we want to count
     *   }
     * })
    **/
    count<T extends AdvisorActivityCountArgs>(args?: Prisma.Subset<T, AdvisorActivityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdvisorActivityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AdvisorActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvisorActivityAggregateArgs>(args: Prisma.Subset<T, AdvisorActivityAggregateArgs>): Prisma.PrismaPromise<GetAdvisorActivityAggregateType<T>>;
    /**
     * Group by AdvisorActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorActivityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdvisorActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdvisorActivityGroupByArgs['orderBy'];
    } : {
        orderBy?: AdvisorActivityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdvisorActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvisorActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdvisorActivity model
     */
    readonly fields: AdvisorActivityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AdvisorActivity.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdvisorActivityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the AdvisorActivity model
 */
export interface AdvisorActivityFieldRefs {
    readonly id: Prisma.FieldRef<"AdvisorActivity", 'Int'>;
    readonly type: Prisma.FieldRef<"AdvisorActivity", 'String'>;
    readonly title: Prisma.FieldRef<"AdvisorActivity", 'String'>;
    readonly description: Prisma.FieldRef<"AdvisorActivity", 'String'>;
    readonly timestamp: Prisma.FieldRef<"AdvisorActivity", 'String'>;
    readonly icon: Prisma.FieldRef<"AdvisorActivity", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AdvisorActivity", 'DateTime'>;
}
/**
 * AdvisorActivity findUnique
 */
export type AdvisorActivityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * Filter, which AdvisorActivity to fetch.
     */
    where: Prisma.AdvisorActivityWhereUniqueInput;
};
/**
 * AdvisorActivity findUniqueOrThrow
 */
export type AdvisorActivityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * Filter, which AdvisorActivity to fetch.
     */
    where: Prisma.AdvisorActivityWhereUniqueInput;
};
/**
 * AdvisorActivity findFirst
 */
export type AdvisorActivityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * Filter, which AdvisorActivity to fetch.
     */
    where?: Prisma.AdvisorActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorActivities to fetch.
     */
    orderBy?: Prisma.AdvisorActivityOrderByWithRelationInput | Prisma.AdvisorActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdvisorActivities.
     */
    cursor?: Prisma.AdvisorActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorActivities.
     */
    distinct?: Prisma.AdvisorActivityScalarFieldEnum | Prisma.AdvisorActivityScalarFieldEnum[];
};
/**
 * AdvisorActivity findFirstOrThrow
 */
export type AdvisorActivityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * Filter, which AdvisorActivity to fetch.
     */
    where?: Prisma.AdvisorActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorActivities to fetch.
     */
    orderBy?: Prisma.AdvisorActivityOrderByWithRelationInput | Prisma.AdvisorActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdvisorActivities.
     */
    cursor?: Prisma.AdvisorActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorActivities.
     */
    distinct?: Prisma.AdvisorActivityScalarFieldEnum | Prisma.AdvisorActivityScalarFieldEnum[];
};
/**
 * AdvisorActivity findMany
 */
export type AdvisorActivityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * Filter, which AdvisorActivities to fetch.
     */
    where?: Prisma.AdvisorActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorActivities to fetch.
     */
    orderBy?: Prisma.AdvisorActivityOrderByWithRelationInput | Prisma.AdvisorActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdvisorActivities.
     */
    cursor?: Prisma.AdvisorActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorActivities.
     */
    distinct?: Prisma.AdvisorActivityScalarFieldEnum | Prisma.AdvisorActivityScalarFieldEnum[];
};
/**
 * AdvisorActivity create
 */
export type AdvisorActivityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * The data needed to create a AdvisorActivity.
     */
    data?: Prisma.XOR<Prisma.AdvisorActivityCreateInput, Prisma.AdvisorActivityUncheckedCreateInput>;
};
/**
 * AdvisorActivity createMany
 */
export type AdvisorActivityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdvisorActivities.
     */
    data: Prisma.AdvisorActivityCreateManyInput | Prisma.AdvisorActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdvisorActivity update
 */
export type AdvisorActivityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * The data needed to update a AdvisorActivity.
     */
    data: Prisma.XOR<Prisma.AdvisorActivityUpdateInput, Prisma.AdvisorActivityUncheckedUpdateInput>;
    /**
     * Choose, which AdvisorActivity to update.
     */
    where: Prisma.AdvisorActivityWhereUniqueInput;
};
/**
 * AdvisorActivity updateMany
 */
export type AdvisorActivityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AdvisorActivities.
     */
    data: Prisma.XOR<Prisma.AdvisorActivityUpdateManyMutationInput, Prisma.AdvisorActivityUncheckedUpdateManyInput>;
    /**
     * Filter which AdvisorActivities to update
     */
    where?: Prisma.AdvisorActivityWhereInput;
    /**
     * Limit how many AdvisorActivities to update.
     */
    limit?: number;
};
/**
 * AdvisorActivity upsert
 */
export type AdvisorActivityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * The filter to search for the AdvisorActivity to update in case it exists.
     */
    where: Prisma.AdvisorActivityWhereUniqueInput;
    /**
     * In case the AdvisorActivity found by the `where` argument doesn't exist, create a new AdvisorActivity with this data.
     */
    create: Prisma.XOR<Prisma.AdvisorActivityCreateInput, Prisma.AdvisorActivityUncheckedCreateInput>;
    /**
     * In case the AdvisorActivity was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdvisorActivityUpdateInput, Prisma.AdvisorActivityUncheckedUpdateInput>;
};
/**
 * AdvisorActivity delete
 */
export type AdvisorActivityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
    /**
     * Filter which AdvisorActivity to delete.
     */
    where: Prisma.AdvisorActivityWhereUniqueInput;
};
/**
 * AdvisorActivity deleteMany
 */
export type AdvisorActivityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdvisorActivities to delete
     */
    where?: Prisma.AdvisorActivityWhereInput;
    /**
     * Limit how many AdvisorActivities to delete.
     */
    limit?: number;
};
/**
 * AdvisorActivity without action
 */
export type AdvisorActivityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorActivity
     */
    select?: Prisma.AdvisorActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorActivity
     */
    omit?: Prisma.AdvisorActivityOmit<ExtArgs> | null;
};
//# sourceMappingURL=AdvisorActivity.d.ts.map