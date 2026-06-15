import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MemberApplication
 *
 */
export type MemberApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$MemberApplicationPayload>;
export type AggregateMemberApplication = {
    _count: MemberApplicationCountAggregateOutputType | null;
    _avg: MemberApplicationAvgAggregateOutputType | null;
    _sum: MemberApplicationSumAggregateOutputType | null;
    _min: MemberApplicationMinAggregateOutputType | null;
    _max: MemberApplicationMaxAggregateOutputType | null;
};
export type MemberApplicationAvgAggregateOutputType = {
    id: number | null;
};
export type MemberApplicationSumAggregateOutputType = {
    id: number | null;
};
export type MemberApplicationMinAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    email: string | null;
    organization: string | null;
    collectorProfile: string | null;
    message: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MemberApplicationMaxAggregateOutputType = {
    id: number | null;
    fullName: string | null;
    email: string | null;
    organization: string | null;
    collectorProfile: string | null;
    message: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MemberApplicationCountAggregateOutputType = {
    id: number;
    fullName: number;
    email: number;
    organization: number;
    collectorProfile: number;
    message: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MemberApplicationAvgAggregateInputType = {
    id?: true;
};
export type MemberApplicationSumAggregateInputType = {
    id?: true;
};
export type MemberApplicationMinAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    organization?: true;
    collectorProfile?: true;
    message?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MemberApplicationMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    organization?: true;
    collectorProfile?: true;
    message?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MemberApplicationCountAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    organization?: true;
    collectorProfile?: true;
    message?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MemberApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MemberApplication to aggregate.
     */
    where?: Prisma.MemberApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MemberApplications to fetch.
     */
    orderBy?: Prisma.MemberApplicationOrderByWithRelationInput | Prisma.MemberApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MemberApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MemberApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MemberApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MemberApplications
    **/
    _count?: true | MemberApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MemberApplicationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MemberApplicationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MemberApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MemberApplicationMaxAggregateInputType;
};
export type GetMemberApplicationAggregateType<T extends MemberApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateMemberApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMemberApplication[P]> : Prisma.GetScalarType<T[P], AggregateMemberApplication[P]>;
};
export type MemberApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberApplicationWhereInput;
    orderBy?: Prisma.MemberApplicationOrderByWithAggregationInput | Prisma.MemberApplicationOrderByWithAggregationInput[];
    by: Prisma.MemberApplicationScalarFieldEnum[] | Prisma.MemberApplicationScalarFieldEnum;
    having?: Prisma.MemberApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MemberApplicationCountAggregateInputType | true;
    _avg?: MemberApplicationAvgAggregateInputType;
    _sum?: MemberApplicationSumAggregateInputType;
    _min?: MemberApplicationMinAggregateInputType;
    _max?: MemberApplicationMaxAggregateInputType;
};
export type MemberApplicationGroupByOutputType = {
    id: number;
    fullName: string | null;
    email: string | null;
    organization: string | null;
    collectorProfile: string | null;
    message: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MemberApplicationCountAggregateOutputType | null;
    _avg: MemberApplicationAvgAggregateOutputType | null;
    _sum: MemberApplicationSumAggregateOutputType | null;
    _min: MemberApplicationMinAggregateOutputType | null;
    _max: MemberApplicationMaxAggregateOutputType | null;
};
export type GetMemberApplicationGroupByPayload<T extends MemberApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MemberApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MemberApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MemberApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MemberApplicationGroupByOutputType[P]>;
}>>;
export type MemberApplicationWhereInput = {
    AND?: Prisma.MemberApplicationWhereInput | Prisma.MemberApplicationWhereInput[];
    OR?: Prisma.MemberApplicationWhereInput[];
    NOT?: Prisma.MemberApplicationWhereInput | Prisma.MemberApplicationWhereInput[];
    id?: Prisma.IntFilter<"MemberApplication"> | number;
    fullName?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    email?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    organization?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    collectorProfile?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    message?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    status?: Prisma.StringFilter<"MemberApplication"> | string;
    createdAt?: Prisma.DateTimeFilter<"MemberApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MemberApplication"> | Date | string;
};
export type MemberApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    organization?: Prisma.SortOrderInput | Prisma.SortOrder;
    collectorProfile?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.MemberApplicationOrderByRelevanceInput;
};
export type MemberApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MemberApplicationWhereInput | Prisma.MemberApplicationWhereInput[];
    OR?: Prisma.MemberApplicationWhereInput[];
    NOT?: Prisma.MemberApplicationWhereInput | Prisma.MemberApplicationWhereInput[];
    fullName?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    email?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    organization?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    collectorProfile?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    message?: Prisma.StringNullableFilter<"MemberApplication"> | string | null;
    status?: Prisma.StringFilter<"MemberApplication"> | string;
    createdAt?: Prisma.DateTimeFilter<"MemberApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MemberApplication"> | Date | string;
}, "id">;
export type MemberApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    organization?: Prisma.SortOrderInput | Prisma.SortOrder;
    collectorProfile?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MemberApplicationCountOrderByAggregateInput;
    _avg?: Prisma.MemberApplicationAvgOrderByAggregateInput;
    _max?: Prisma.MemberApplicationMaxOrderByAggregateInput;
    _min?: Prisma.MemberApplicationMinOrderByAggregateInput;
    _sum?: Prisma.MemberApplicationSumOrderByAggregateInput;
};
export type MemberApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.MemberApplicationScalarWhereWithAggregatesInput | Prisma.MemberApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.MemberApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MemberApplicationScalarWhereWithAggregatesInput | Prisma.MemberApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MemberApplication"> | number;
    fullName?: Prisma.StringNullableWithAggregatesFilter<"MemberApplication"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"MemberApplication"> | string | null;
    organization?: Prisma.StringNullableWithAggregatesFilter<"MemberApplication"> | string | null;
    collectorProfile?: Prisma.StringNullableWithAggregatesFilter<"MemberApplication"> | string | null;
    message?: Prisma.StringNullableWithAggregatesFilter<"MemberApplication"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"MemberApplication"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MemberApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MemberApplication"> | Date | string;
};
export type MemberApplicationCreateInput = {
    fullName?: string | null;
    email?: string | null;
    organization?: string | null;
    collectorProfile?: string | null;
    message?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemberApplicationUncheckedCreateInput = {
    id?: number;
    fullName?: string | null;
    email?: string | null;
    organization?: string | null;
    collectorProfile?: string | null;
    message?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemberApplicationUpdateInput = {
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collectorProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberApplicationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collectorProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberApplicationCreateManyInput = {
    id?: number;
    fullName?: string | null;
    email?: string | null;
    organization?: string | null;
    collectorProfile?: string | null;
    message?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MemberApplicationUpdateManyMutationInput = {
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collectorProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberApplicationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fullName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    organization?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collectorProfile?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberApplicationOrderByRelevanceInput = {
    fields: Prisma.MemberApplicationOrderByRelevanceFieldEnum | Prisma.MemberApplicationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type MemberApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organization?: Prisma.SortOrder;
    collectorProfile?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemberApplicationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MemberApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organization?: Prisma.SortOrder;
    collectorProfile?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemberApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organization?: Prisma.SortOrder;
    collectorProfile?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MemberApplicationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MemberApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    email?: boolean;
    organization?: boolean;
    collectorProfile?: boolean;
    message?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["memberApplication"]>;
export type MemberApplicationSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    email?: boolean;
    organization?: boolean;
    collectorProfile?: boolean;
    message?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MemberApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullName" | "email" | "organization" | "collectorProfile" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["memberApplication"]>;
export type $MemberApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MemberApplication";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fullName: string | null;
        email: string | null;
        organization: string | null;
        collectorProfile: string | null;
        message: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["memberApplication"]>;
    composites: {};
};
export type MemberApplicationGetPayload<S extends boolean | null | undefined | MemberApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload, S>;
export type MemberApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MemberApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MemberApplicationCountAggregateInputType | true;
};
export interface MemberApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MemberApplication'];
        meta: {
            name: 'MemberApplication';
        };
    };
    /**
     * Find zero or one MemberApplication that matches the filter.
     * @param {MemberApplicationFindUniqueArgs} args - Arguments to find a MemberApplication
     * @example
     * // Get one MemberApplication
     * const memberApplication = await prisma.memberApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, MemberApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MemberApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberApplicationFindUniqueOrThrowArgs} args - Arguments to find a MemberApplication
     * @example
     * // Get one MemberApplication
     * const memberApplication = await prisma.memberApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MemberApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MemberApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberApplicationFindFirstArgs} args - Arguments to find a MemberApplication
     * @example
     * // Get one MemberApplication
     * const memberApplication = await prisma.memberApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, MemberApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MemberApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberApplicationFindFirstOrThrowArgs} args - Arguments to find a MemberApplication
     * @example
     * // Get one MemberApplication
     * const memberApplication = await prisma.memberApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MemberApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MemberApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberApplications
     * const memberApplications = await prisma.memberApplication.findMany()
     *
     * // Get first 10 MemberApplications
     * const memberApplications = await prisma.memberApplication.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const memberApplicationWithIdOnly = await prisma.memberApplication.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MemberApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, MemberApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MemberApplication.
     * @param {MemberApplicationCreateArgs} args - Arguments to create a MemberApplication.
     * @example
     * // Create one MemberApplication
     * const MemberApplication = await prisma.memberApplication.create({
     *   data: {
     *     // ... data to create a MemberApplication
     *   }
     * })
     *
     */
    create<T extends MemberApplicationCreateArgs>(args: Prisma.SelectSubset<T, MemberApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MemberApplications.
     * @param {MemberApplicationCreateManyArgs} args - Arguments to create many MemberApplications.
     * @example
     * // Create many MemberApplications
     * const memberApplication = await prisma.memberApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MemberApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, MemberApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a MemberApplication.
     * @param {MemberApplicationDeleteArgs} args - Arguments to delete one MemberApplication.
     * @example
     * // Delete one MemberApplication
     * const MemberApplication = await prisma.memberApplication.delete({
     *   where: {
     *     // ... filter to delete one MemberApplication
     *   }
     * })
     *
     */
    delete<T extends MemberApplicationDeleteArgs>(args: Prisma.SelectSubset<T, MemberApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MemberApplication.
     * @param {MemberApplicationUpdateArgs} args - Arguments to update one MemberApplication.
     * @example
     * // Update one MemberApplication
     * const memberApplication = await prisma.memberApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MemberApplicationUpdateArgs>(args: Prisma.SelectSubset<T, MemberApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MemberApplications.
     * @param {MemberApplicationDeleteManyArgs} args - Arguments to filter MemberApplications to delete.
     * @example
     * // Delete a few MemberApplications
     * const { count } = await prisma.memberApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MemberApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, MemberApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MemberApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberApplications
     * const memberApplication = await prisma.memberApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MemberApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, MemberApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one MemberApplication.
     * @param {MemberApplicationUpsertArgs} args - Arguments to update or create a MemberApplication.
     * @example
     * // Update or create a MemberApplication
     * const memberApplication = await prisma.memberApplication.upsert({
     *   create: {
     *     // ... data to create a MemberApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberApplication we want to update
     *   }
     * })
     */
    upsert<T extends MemberApplicationUpsertArgs>(args: Prisma.SelectSubset<T, MemberApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__MemberApplicationClient<runtime.Types.Result.GetResult<Prisma.$MemberApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MemberApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberApplicationCountArgs} args - Arguments to filter MemberApplications to count.
     * @example
     * // Count the number of MemberApplications
     * const count = await prisma.memberApplication.count({
     *   where: {
     *     // ... the filter for the MemberApplications we want to count
     *   }
     * })
    **/
    count<T extends MemberApplicationCountArgs>(args?: Prisma.Subset<T, MemberApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MemberApplicationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MemberApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberApplicationAggregateArgs>(args: Prisma.Subset<T, MemberApplicationAggregateArgs>): Prisma.PrismaPromise<GetMemberApplicationAggregateType<T>>;
    /**
     * Group by MemberApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberApplicationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MemberApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MemberApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: MemberApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MemberApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MemberApplication model
     */
    readonly fields: MemberApplicationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MemberApplication.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MemberApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the MemberApplication model
 */
export interface MemberApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"MemberApplication", 'Int'>;
    readonly fullName: Prisma.FieldRef<"MemberApplication", 'String'>;
    readonly email: Prisma.FieldRef<"MemberApplication", 'String'>;
    readonly organization: Prisma.FieldRef<"MemberApplication", 'String'>;
    readonly collectorProfile: Prisma.FieldRef<"MemberApplication", 'String'>;
    readonly message: Prisma.FieldRef<"MemberApplication", 'String'>;
    readonly status: Prisma.FieldRef<"MemberApplication", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MemberApplication", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MemberApplication", 'DateTime'>;
}
/**
 * MemberApplication findUnique
 */
export type MemberApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * Filter, which MemberApplication to fetch.
     */
    where: Prisma.MemberApplicationWhereUniqueInput;
};
/**
 * MemberApplication findUniqueOrThrow
 */
export type MemberApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * Filter, which MemberApplication to fetch.
     */
    where: Prisma.MemberApplicationWhereUniqueInput;
};
/**
 * MemberApplication findFirst
 */
export type MemberApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * Filter, which MemberApplication to fetch.
     */
    where?: Prisma.MemberApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MemberApplications to fetch.
     */
    orderBy?: Prisma.MemberApplicationOrderByWithRelationInput | Prisma.MemberApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MemberApplications.
     */
    cursor?: Prisma.MemberApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MemberApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MemberApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MemberApplications.
     */
    distinct?: Prisma.MemberApplicationScalarFieldEnum | Prisma.MemberApplicationScalarFieldEnum[];
};
/**
 * MemberApplication findFirstOrThrow
 */
export type MemberApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * Filter, which MemberApplication to fetch.
     */
    where?: Prisma.MemberApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MemberApplications to fetch.
     */
    orderBy?: Prisma.MemberApplicationOrderByWithRelationInput | Prisma.MemberApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MemberApplications.
     */
    cursor?: Prisma.MemberApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MemberApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MemberApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MemberApplications.
     */
    distinct?: Prisma.MemberApplicationScalarFieldEnum | Prisma.MemberApplicationScalarFieldEnum[];
};
/**
 * MemberApplication findMany
 */
export type MemberApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * Filter, which MemberApplications to fetch.
     */
    where?: Prisma.MemberApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MemberApplications to fetch.
     */
    orderBy?: Prisma.MemberApplicationOrderByWithRelationInput | Prisma.MemberApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MemberApplications.
     */
    cursor?: Prisma.MemberApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MemberApplications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MemberApplications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MemberApplications.
     */
    distinct?: Prisma.MemberApplicationScalarFieldEnum | Prisma.MemberApplicationScalarFieldEnum[];
};
/**
 * MemberApplication create
 */
export type MemberApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * The data needed to create a MemberApplication.
     */
    data: Prisma.XOR<Prisma.MemberApplicationCreateInput, Prisma.MemberApplicationUncheckedCreateInput>;
};
/**
 * MemberApplication createMany
 */
export type MemberApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberApplications.
     */
    data: Prisma.MemberApplicationCreateManyInput | Prisma.MemberApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MemberApplication update
 */
export type MemberApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * The data needed to update a MemberApplication.
     */
    data: Prisma.XOR<Prisma.MemberApplicationUpdateInput, Prisma.MemberApplicationUncheckedUpdateInput>;
    /**
     * Choose, which MemberApplication to update.
     */
    where: Prisma.MemberApplicationWhereUniqueInput;
};
/**
 * MemberApplication updateMany
 */
export type MemberApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberApplications.
     */
    data: Prisma.XOR<Prisma.MemberApplicationUpdateManyMutationInput, Prisma.MemberApplicationUncheckedUpdateManyInput>;
    /**
     * Filter which MemberApplications to update
     */
    where?: Prisma.MemberApplicationWhereInput;
    /**
     * Limit how many MemberApplications to update.
     */
    limit?: number;
};
/**
 * MemberApplication upsert
 */
export type MemberApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * The filter to search for the MemberApplication to update in case it exists.
     */
    where: Prisma.MemberApplicationWhereUniqueInput;
    /**
     * In case the MemberApplication found by the `where` argument doesn't exist, create a new MemberApplication with this data.
     */
    create: Prisma.XOR<Prisma.MemberApplicationCreateInput, Prisma.MemberApplicationUncheckedCreateInput>;
    /**
     * In case the MemberApplication was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MemberApplicationUpdateInput, Prisma.MemberApplicationUncheckedUpdateInput>;
};
/**
 * MemberApplication delete
 */
export type MemberApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
    /**
     * Filter which MemberApplication to delete.
     */
    where: Prisma.MemberApplicationWhereUniqueInput;
};
/**
 * MemberApplication deleteMany
 */
export type MemberApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MemberApplications to delete
     */
    where?: Prisma.MemberApplicationWhereInput;
    /**
     * Limit how many MemberApplications to delete.
     */
    limit?: number;
};
/**
 * MemberApplication without action
 */
export type MemberApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberApplication
     */
    select?: Prisma.MemberApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberApplication
     */
    omit?: Prisma.MemberApplicationOmit<ExtArgs> | null;
};
//# sourceMappingURL=MemberApplication.d.ts.map