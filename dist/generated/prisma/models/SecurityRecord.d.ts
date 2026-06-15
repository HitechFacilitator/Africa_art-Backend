import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SecurityRecord
 *
 */
export type SecurityRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$SecurityRecordPayload>;
export type AggregateSecurityRecord = {
    _count: SecurityRecordCountAggregateOutputType | null;
    _avg: SecurityRecordAvgAggregateOutputType | null;
    _sum: SecurityRecordSumAggregateOutputType | null;
    _min: SecurityRecordMinAggregateOutputType | null;
    _max: SecurityRecordMaxAggregateOutputType | null;
};
export type SecurityRecordAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type SecurityRecordSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type SecurityRecordMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkTitle: string | null;
    vaultLocation: string | null;
    fingerprintId: string | null;
    smartContractAddress: string | null;
    lastInspectionDate: string | null;
    temperatureHumidity: string | null;
    insurancePolicyNumber: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SecurityRecordMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkTitle: string | null;
    vaultLocation: string | null;
    fingerprintId: string | null;
    smartContractAddress: string | null;
    lastInspectionDate: string | null;
    temperatureHumidity: string | null;
    insurancePolicyNumber: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SecurityRecordCountAggregateOutputType = {
    id: number;
    userId: number;
    artworkTitle: number;
    vaultLocation: number;
    fingerprintId: number;
    smartContractAddress: number;
    lastInspectionDate: number;
    temperatureHumidity: number;
    insurancePolicyNumber: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SecurityRecordAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type SecurityRecordSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type SecurityRecordMinAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    vaultLocation?: true;
    fingerprintId?: true;
    smartContractAddress?: true;
    lastInspectionDate?: true;
    temperatureHumidity?: true;
    insurancePolicyNumber?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SecurityRecordMaxAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    vaultLocation?: true;
    fingerprintId?: true;
    smartContractAddress?: true;
    lastInspectionDate?: true;
    temperatureHumidity?: true;
    insurancePolicyNumber?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SecurityRecordCountAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    vaultLocation?: true;
    fingerprintId?: true;
    smartContractAddress?: true;
    lastInspectionDate?: true;
    temperatureHumidity?: true;
    insurancePolicyNumber?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SecurityRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityRecord to aggregate.
     */
    where?: Prisma.SecurityRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityRecords to fetch.
     */
    orderBy?: Prisma.SecurityRecordOrderByWithRelationInput | Prisma.SecurityRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SecurityRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SecurityRecords
    **/
    _count?: true | SecurityRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SecurityRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SecurityRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SecurityRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SecurityRecordMaxAggregateInputType;
};
export type GetSecurityRecordAggregateType<T extends SecurityRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateSecurityRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSecurityRecord[P]> : Prisma.GetScalarType<T[P], AggregateSecurityRecord[P]>;
};
export type SecurityRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SecurityRecordWhereInput;
    orderBy?: Prisma.SecurityRecordOrderByWithAggregationInput | Prisma.SecurityRecordOrderByWithAggregationInput[];
    by: Prisma.SecurityRecordScalarFieldEnum[] | Prisma.SecurityRecordScalarFieldEnum;
    having?: Prisma.SecurityRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SecurityRecordCountAggregateInputType | true;
    _avg?: SecurityRecordAvgAggregateInputType;
    _sum?: SecurityRecordSumAggregateInputType;
    _min?: SecurityRecordMinAggregateInputType;
    _max?: SecurityRecordMaxAggregateInputType;
};
export type SecurityRecordGroupByOutputType = {
    id: number;
    userId: number;
    artworkTitle: string;
    vaultLocation: string | null;
    fingerprintId: string | null;
    smartContractAddress: string | null;
    lastInspectionDate: string | null;
    temperatureHumidity: string | null;
    insurancePolicyNumber: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SecurityRecordCountAggregateOutputType | null;
    _avg: SecurityRecordAvgAggregateOutputType | null;
    _sum: SecurityRecordSumAggregateOutputType | null;
    _min: SecurityRecordMinAggregateOutputType | null;
    _max: SecurityRecordMaxAggregateOutputType | null;
};
export type GetSecurityRecordGroupByPayload<T extends SecurityRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SecurityRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SecurityRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SecurityRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SecurityRecordGroupByOutputType[P]>;
}>>;
export type SecurityRecordWhereInput = {
    AND?: Prisma.SecurityRecordWhereInput | Prisma.SecurityRecordWhereInput[];
    OR?: Prisma.SecurityRecordWhereInput[];
    NOT?: Prisma.SecurityRecordWhereInput | Prisma.SecurityRecordWhereInput[];
    id?: Prisma.IntFilter<"SecurityRecord"> | number;
    userId?: Prisma.IntFilter<"SecurityRecord"> | number;
    artworkTitle?: Prisma.StringFilter<"SecurityRecord"> | string;
    vaultLocation?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    fingerprintId?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    smartContractAddress?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    lastInspectionDate?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    temperatureHumidity?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    insurancePolicyNumber?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SecurityRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SecurityRecord"> | Date | string;
};
export type SecurityRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    vaultLocation?: Prisma.SortOrderInput | Prisma.SortOrder;
    fingerprintId?: Prisma.SortOrderInput | Prisma.SortOrder;
    smartContractAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastInspectionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperatureHumidity?: Prisma.SortOrderInput | Prisma.SortOrder;
    insurancePolicyNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.SecurityRecordOrderByRelevanceInput;
};
export type SecurityRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SecurityRecordWhereInput | Prisma.SecurityRecordWhereInput[];
    OR?: Prisma.SecurityRecordWhereInput[];
    NOT?: Prisma.SecurityRecordWhereInput | Prisma.SecurityRecordWhereInput[];
    userId?: Prisma.IntFilter<"SecurityRecord"> | number;
    artworkTitle?: Prisma.StringFilter<"SecurityRecord"> | string;
    vaultLocation?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    fingerprintId?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    smartContractAddress?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    lastInspectionDate?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    temperatureHumidity?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    insurancePolicyNumber?: Prisma.StringNullableFilter<"SecurityRecord"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SecurityRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SecurityRecord"> | Date | string;
}, "id">;
export type SecurityRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    vaultLocation?: Prisma.SortOrderInput | Prisma.SortOrder;
    fingerprintId?: Prisma.SortOrderInput | Prisma.SortOrder;
    smartContractAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastInspectionDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperatureHumidity?: Prisma.SortOrderInput | Prisma.SortOrder;
    insurancePolicyNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SecurityRecordCountOrderByAggregateInput;
    _avg?: Prisma.SecurityRecordAvgOrderByAggregateInput;
    _max?: Prisma.SecurityRecordMaxOrderByAggregateInput;
    _min?: Prisma.SecurityRecordMinOrderByAggregateInput;
    _sum?: Prisma.SecurityRecordSumOrderByAggregateInput;
};
export type SecurityRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.SecurityRecordScalarWhereWithAggregatesInput | Prisma.SecurityRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.SecurityRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SecurityRecordScalarWhereWithAggregatesInput | Prisma.SecurityRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SecurityRecord"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"SecurityRecord"> | number;
    artworkTitle?: Prisma.StringWithAggregatesFilter<"SecurityRecord"> | string;
    vaultLocation?: Prisma.StringNullableWithAggregatesFilter<"SecurityRecord"> | string | null;
    fingerprintId?: Prisma.StringNullableWithAggregatesFilter<"SecurityRecord"> | string | null;
    smartContractAddress?: Prisma.StringNullableWithAggregatesFilter<"SecurityRecord"> | string | null;
    lastInspectionDate?: Prisma.StringNullableWithAggregatesFilter<"SecurityRecord"> | string | null;
    temperatureHumidity?: Prisma.StringNullableWithAggregatesFilter<"SecurityRecord"> | string | null;
    insurancePolicyNumber?: Prisma.StringNullableWithAggregatesFilter<"SecurityRecord"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SecurityRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SecurityRecord"> | Date | string;
};
export type SecurityRecordCreateInput = {
    userId: number;
    artworkTitle: string;
    vaultLocation?: string | null;
    fingerprintId?: string | null;
    smartContractAddress?: string | null;
    lastInspectionDate?: string | null;
    temperatureHumidity?: string | null;
    insurancePolicyNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SecurityRecordUncheckedCreateInput = {
    id?: number;
    userId: number;
    artworkTitle: string;
    vaultLocation?: string | null;
    fingerprintId?: string | null;
    smartContractAddress?: string | null;
    lastInspectionDate?: string | null;
    temperatureHumidity?: string | null;
    insurancePolicyNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SecurityRecordUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    vaultLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprintId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    smartContractAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastInspectionDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperatureHumidity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insurancePolicyNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityRecordUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    vaultLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprintId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    smartContractAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastInspectionDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperatureHumidity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insurancePolicyNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityRecordCreateManyInput = {
    id?: number;
    userId: number;
    artworkTitle: string;
    vaultLocation?: string | null;
    fingerprintId?: string | null;
    smartContractAddress?: string | null;
    lastInspectionDate?: string | null;
    temperatureHumidity?: string | null;
    insurancePolicyNumber?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SecurityRecordUpdateManyMutationInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    vaultLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprintId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    smartContractAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastInspectionDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperatureHumidity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insurancePolicyNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityRecordUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    vaultLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fingerprintId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    smartContractAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastInspectionDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperatureHumidity?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insurancePolicyNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SecurityRecordOrderByRelevanceInput = {
    fields: Prisma.SecurityRecordOrderByRelevanceFieldEnum | Prisma.SecurityRecordOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SecurityRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    vaultLocation?: Prisma.SortOrder;
    fingerprintId?: Prisma.SortOrder;
    smartContractAddress?: Prisma.SortOrder;
    lastInspectionDate?: Prisma.SortOrder;
    temperatureHumidity?: Prisma.SortOrder;
    insurancePolicyNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SecurityRecordAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type SecurityRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    vaultLocation?: Prisma.SortOrder;
    fingerprintId?: Prisma.SortOrder;
    smartContractAddress?: Prisma.SortOrder;
    lastInspectionDate?: Prisma.SortOrder;
    temperatureHumidity?: Prisma.SortOrder;
    insurancePolicyNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SecurityRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    vaultLocation?: Prisma.SortOrder;
    fingerprintId?: Prisma.SortOrder;
    smartContractAddress?: Prisma.SortOrder;
    lastInspectionDate?: Prisma.SortOrder;
    temperatureHumidity?: Prisma.SortOrder;
    insurancePolicyNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SecurityRecordSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type SecurityRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    artworkTitle?: boolean;
    vaultLocation?: boolean;
    fingerprintId?: boolean;
    smartContractAddress?: boolean;
    lastInspectionDate?: boolean;
    temperatureHumidity?: boolean;
    insurancePolicyNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["securityRecord"]>;
export type SecurityRecordSelectScalar = {
    id?: boolean;
    userId?: boolean;
    artworkTitle?: boolean;
    vaultLocation?: boolean;
    fingerprintId?: boolean;
    smartContractAddress?: boolean;
    lastInspectionDate?: boolean;
    temperatureHumidity?: boolean;
    insurancePolicyNumber?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SecurityRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "artworkTitle" | "vaultLocation" | "fingerprintId" | "smartContractAddress" | "lastInspectionDate" | "temperatureHumidity" | "insurancePolicyNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["securityRecord"]>;
export type $SecurityRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SecurityRecord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        artworkTitle: string;
        vaultLocation: string | null;
        fingerprintId: string | null;
        smartContractAddress: string | null;
        lastInspectionDate: string | null;
        temperatureHumidity: string | null;
        insurancePolicyNumber: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["securityRecord"]>;
    composites: {};
};
export type SecurityRecordGetPayload<S extends boolean | null | undefined | SecurityRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload, S>;
export type SecurityRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SecurityRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SecurityRecordCountAggregateInputType | true;
};
export interface SecurityRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SecurityRecord'];
        meta: {
            name: 'SecurityRecord';
        };
    };
    /**
     * Find zero or one SecurityRecord that matches the filter.
     * @param {SecurityRecordFindUniqueArgs} args - Arguments to find a SecurityRecord
     * @example
     * // Get one SecurityRecord
     * const securityRecord = await prisma.securityRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, SecurityRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SecurityRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityRecordFindUniqueOrThrowArgs} args - Arguments to find a SecurityRecord
     * @example
     * // Get one SecurityRecord
     * const securityRecord = await prisma.securityRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SecurityRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SecurityRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityRecordFindFirstArgs} args - Arguments to find a SecurityRecord
     * @example
     * // Get one SecurityRecord
     * const securityRecord = await prisma.securityRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, SecurityRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SecurityRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityRecordFindFirstOrThrowArgs} args - Arguments to find a SecurityRecord
     * @example
     * // Get one SecurityRecord
     * const securityRecord = await prisma.securityRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SecurityRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SecurityRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityRecords
     * const securityRecords = await prisma.securityRecord.findMany()
     *
     * // Get first 10 SecurityRecords
     * const securityRecords = await prisma.securityRecord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const securityRecordWithIdOnly = await prisma.securityRecord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SecurityRecordFindManyArgs>(args?: Prisma.SelectSubset<T, SecurityRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SecurityRecord.
     * @param {SecurityRecordCreateArgs} args - Arguments to create a SecurityRecord.
     * @example
     * // Create one SecurityRecord
     * const SecurityRecord = await prisma.securityRecord.create({
     *   data: {
     *     // ... data to create a SecurityRecord
     *   }
     * })
     *
     */
    create<T extends SecurityRecordCreateArgs>(args: Prisma.SelectSubset<T, SecurityRecordCreateArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SecurityRecords.
     * @param {SecurityRecordCreateManyArgs} args - Arguments to create many SecurityRecords.
     * @example
     * // Create many SecurityRecords
     * const securityRecord = await prisma.securityRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SecurityRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, SecurityRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a SecurityRecord.
     * @param {SecurityRecordDeleteArgs} args - Arguments to delete one SecurityRecord.
     * @example
     * // Delete one SecurityRecord
     * const SecurityRecord = await prisma.securityRecord.delete({
     *   where: {
     *     // ... filter to delete one SecurityRecord
     *   }
     * })
     *
     */
    delete<T extends SecurityRecordDeleteArgs>(args: Prisma.SelectSubset<T, SecurityRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SecurityRecord.
     * @param {SecurityRecordUpdateArgs} args - Arguments to update one SecurityRecord.
     * @example
     * // Update one SecurityRecord
     * const securityRecord = await prisma.securityRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SecurityRecordUpdateArgs>(args: Prisma.SelectSubset<T, SecurityRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SecurityRecords.
     * @param {SecurityRecordDeleteManyArgs} args - Arguments to filter SecurityRecords to delete.
     * @example
     * // Delete a few SecurityRecords
     * const { count } = await prisma.securityRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SecurityRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, SecurityRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SecurityRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityRecords
     * const securityRecord = await prisma.securityRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SecurityRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, SecurityRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one SecurityRecord.
     * @param {SecurityRecordUpsertArgs} args - Arguments to update or create a SecurityRecord.
     * @example
     * // Update or create a SecurityRecord
     * const securityRecord = await prisma.securityRecord.upsert({
     *   create: {
     *     // ... data to create a SecurityRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityRecord we want to update
     *   }
     * })
     */
    upsert<T extends SecurityRecordUpsertArgs>(args: Prisma.SelectSubset<T, SecurityRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__SecurityRecordClient<runtime.Types.Result.GetResult<Prisma.$SecurityRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SecurityRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityRecordCountArgs} args - Arguments to filter SecurityRecords to count.
     * @example
     * // Count the number of SecurityRecords
     * const count = await prisma.securityRecord.count({
     *   where: {
     *     // ... the filter for the SecurityRecords we want to count
     *   }
     * })
    **/
    count<T extends SecurityRecordCountArgs>(args?: Prisma.Subset<T, SecurityRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SecurityRecordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SecurityRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityRecordAggregateArgs>(args: Prisma.Subset<T, SecurityRecordAggregateArgs>): Prisma.PrismaPromise<GetSecurityRecordAggregateType<T>>;
    /**
     * Group by SecurityRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityRecordGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SecurityRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SecurityRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: SecurityRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SecurityRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SecurityRecord model
     */
    readonly fields: SecurityRecordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SecurityRecord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SecurityRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the SecurityRecord model
 */
export interface SecurityRecordFieldRefs {
    readonly id: Prisma.FieldRef<"SecurityRecord", 'Int'>;
    readonly userId: Prisma.FieldRef<"SecurityRecord", 'Int'>;
    readonly artworkTitle: Prisma.FieldRef<"SecurityRecord", 'String'>;
    readonly vaultLocation: Prisma.FieldRef<"SecurityRecord", 'String'>;
    readonly fingerprintId: Prisma.FieldRef<"SecurityRecord", 'String'>;
    readonly smartContractAddress: Prisma.FieldRef<"SecurityRecord", 'String'>;
    readonly lastInspectionDate: Prisma.FieldRef<"SecurityRecord", 'String'>;
    readonly temperatureHumidity: Prisma.FieldRef<"SecurityRecord", 'String'>;
    readonly insurancePolicyNumber: Prisma.FieldRef<"SecurityRecord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SecurityRecord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SecurityRecord", 'DateTime'>;
}
/**
 * SecurityRecord findUnique
 */
export type SecurityRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * Filter, which SecurityRecord to fetch.
     */
    where: Prisma.SecurityRecordWhereUniqueInput;
};
/**
 * SecurityRecord findUniqueOrThrow
 */
export type SecurityRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * Filter, which SecurityRecord to fetch.
     */
    where: Prisma.SecurityRecordWhereUniqueInput;
};
/**
 * SecurityRecord findFirst
 */
export type SecurityRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * Filter, which SecurityRecord to fetch.
     */
    where?: Prisma.SecurityRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityRecords to fetch.
     */
    orderBy?: Prisma.SecurityRecordOrderByWithRelationInput | Prisma.SecurityRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SecurityRecords.
     */
    cursor?: Prisma.SecurityRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SecurityRecords.
     */
    distinct?: Prisma.SecurityRecordScalarFieldEnum | Prisma.SecurityRecordScalarFieldEnum[];
};
/**
 * SecurityRecord findFirstOrThrow
 */
export type SecurityRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * Filter, which SecurityRecord to fetch.
     */
    where?: Prisma.SecurityRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityRecords to fetch.
     */
    orderBy?: Prisma.SecurityRecordOrderByWithRelationInput | Prisma.SecurityRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SecurityRecords.
     */
    cursor?: Prisma.SecurityRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SecurityRecords.
     */
    distinct?: Prisma.SecurityRecordScalarFieldEnum | Prisma.SecurityRecordScalarFieldEnum[];
};
/**
 * SecurityRecord findMany
 */
export type SecurityRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * Filter, which SecurityRecords to fetch.
     */
    where?: Prisma.SecurityRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SecurityRecords to fetch.
     */
    orderBy?: Prisma.SecurityRecordOrderByWithRelationInput | Prisma.SecurityRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SecurityRecords.
     */
    cursor?: Prisma.SecurityRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SecurityRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SecurityRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SecurityRecords.
     */
    distinct?: Prisma.SecurityRecordScalarFieldEnum | Prisma.SecurityRecordScalarFieldEnum[];
};
/**
 * SecurityRecord create
 */
export type SecurityRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * The data needed to create a SecurityRecord.
     */
    data: Prisma.XOR<Prisma.SecurityRecordCreateInput, Prisma.SecurityRecordUncheckedCreateInput>;
};
/**
 * SecurityRecord createMany
 */
export type SecurityRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityRecords.
     */
    data: Prisma.SecurityRecordCreateManyInput | Prisma.SecurityRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SecurityRecord update
 */
export type SecurityRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * The data needed to update a SecurityRecord.
     */
    data: Prisma.XOR<Prisma.SecurityRecordUpdateInput, Prisma.SecurityRecordUncheckedUpdateInput>;
    /**
     * Choose, which SecurityRecord to update.
     */
    where: Prisma.SecurityRecordWhereUniqueInput;
};
/**
 * SecurityRecord updateMany
 */
export type SecurityRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityRecords.
     */
    data: Prisma.XOR<Prisma.SecurityRecordUpdateManyMutationInput, Prisma.SecurityRecordUncheckedUpdateManyInput>;
    /**
     * Filter which SecurityRecords to update
     */
    where?: Prisma.SecurityRecordWhereInput;
    /**
     * Limit how many SecurityRecords to update.
     */
    limit?: number;
};
/**
 * SecurityRecord upsert
 */
export type SecurityRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * The filter to search for the SecurityRecord to update in case it exists.
     */
    where: Prisma.SecurityRecordWhereUniqueInput;
    /**
     * In case the SecurityRecord found by the `where` argument doesn't exist, create a new SecurityRecord with this data.
     */
    create: Prisma.XOR<Prisma.SecurityRecordCreateInput, Prisma.SecurityRecordUncheckedCreateInput>;
    /**
     * In case the SecurityRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SecurityRecordUpdateInput, Prisma.SecurityRecordUncheckedUpdateInput>;
};
/**
 * SecurityRecord delete
 */
export type SecurityRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
    /**
     * Filter which SecurityRecord to delete.
     */
    where: Prisma.SecurityRecordWhereUniqueInput;
};
/**
 * SecurityRecord deleteMany
 */
export type SecurityRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityRecords to delete
     */
    where?: Prisma.SecurityRecordWhereInput;
    /**
     * Limit how many SecurityRecords to delete.
     */
    limit?: number;
};
/**
 * SecurityRecord without action
 */
export type SecurityRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityRecord
     */
    select?: Prisma.SecurityRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SecurityRecord
     */
    omit?: Prisma.SecurityRecordOmit<ExtArgs> | null;
};
//# sourceMappingURL=SecurityRecord.d.ts.map