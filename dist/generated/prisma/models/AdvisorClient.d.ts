import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model AdvisorClient
 *
 */
export type AdvisorClientModel = runtime.Types.Result.DefaultSelection<Prisma.$AdvisorClientPayload>;
export type AggregateAdvisorClient = {
    _count: AdvisorClientCountAggregateOutputType | null;
    _avg: AdvisorClientAvgAggregateOutputType | null;
    _sum: AdvisorClientSumAggregateOutputType | null;
    _min: AdvisorClientMinAggregateOutputType | null;
    _max: AdvisorClientMaxAggregateOutputType | null;
};
export type AdvisorClientAvgAggregateOutputType = {
    id: number | null;
    advisorId: number | null;
    totalSpent: runtime.Decimal | null;
    acquisitionsCount: number | null;
    satisfactionScore: runtime.Decimal | null;
};
export type AdvisorClientSumAggregateOutputType = {
    id: number | null;
    advisorId: number | null;
    totalSpent: runtime.Decimal | null;
    acquisitionsCount: number | null;
    satisfactionScore: runtime.Decimal | null;
};
export type AdvisorClientMinAggregateOutputType = {
    id: number | null;
    advisorId: number | null;
    name: string | null;
    email: string | null;
    country: string | null;
    tier: string | null;
    avatarColor: string | null;
    totalSpent: runtime.Decimal | null;
    acquisitionsCount: number | null;
    satisfactionScore: runtime.Decimal | null;
    lastContact: string | null;
    interests: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdvisorClientMaxAggregateOutputType = {
    id: number | null;
    advisorId: number | null;
    name: string | null;
    email: string | null;
    country: string | null;
    tier: string | null;
    avatarColor: string | null;
    totalSpent: runtime.Decimal | null;
    acquisitionsCount: number | null;
    satisfactionScore: runtime.Decimal | null;
    lastContact: string | null;
    interests: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdvisorClientCountAggregateOutputType = {
    id: number;
    advisorId: number;
    name: number;
    email: number;
    country: number;
    tier: number;
    avatarColor: number;
    totalSpent: number;
    acquisitionsCount: number;
    satisfactionScore: number;
    lastContact: number;
    interests: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AdvisorClientAvgAggregateInputType = {
    id?: true;
    advisorId?: true;
    totalSpent?: true;
    acquisitionsCount?: true;
    satisfactionScore?: true;
};
export type AdvisorClientSumAggregateInputType = {
    id?: true;
    advisorId?: true;
    totalSpent?: true;
    acquisitionsCount?: true;
    satisfactionScore?: true;
};
export type AdvisorClientMinAggregateInputType = {
    id?: true;
    advisorId?: true;
    name?: true;
    email?: true;
    country?: true;
    tier?: true;
    avatarColor?: true;
    totalSpent?: true;
    acquisitionsCount?: true;
    satisfactionScore?: true;
    lastContact?: true;
    interests?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdvisorClientMaxAggregateInputType = {
    id?: true;
    advisorId?: true;
    name?: true;
    email?: true;
    country?: true;
    tier?: true;
    avatarColor?: true;
    totalSpent?: true;
    acquisitionsCount?: true;
    satisfactionScore?: true;
    lastContact?: true;
    interests?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdvisorClientCountAggregateInputType = {
    id?: true;
    advisorId?: true;
    name?: true;
    email?: true;
    country?: true;
    tier?: true;
    avatarColor?: true;
    totalSpent?: true;
    acquisitionsCount?: true;
    satisfactionScore?: true;
    lastContact?: true;
    interests?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AdvisorClientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdvisorClient to aggregate.
     */
    where?: Prisma.AdvisorClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorClients to fetch.
     */
    orderBy?: Prisma.AdvisorClientOrderByWithRelationInput | Prisma.AdvisorClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdvisorClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorClients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorClients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdvisorClients
    **/
    _count?: true | AdvisorClientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AdvisorClientAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AdvisorClientSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdvisorClientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdvisorClientMaxAggregateInputType;
};
export type GetAdvisorClientAggregateType<T extends AdvisorClientAggregateArgs> = {
    [P in keyof T & keyof AggregateAdvisorClient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdvisorClient[P]> : Prisma.GetScalarType<T[P], AggregateAdvisorClient[P]>;
};
export type AdvisorClientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdvisorClientWhereInput;
    orderBy?: Prisma.AdvisorClientOrderByWithAggregationInput | Prisma.AdvisorClientOrderByWithAggregationInput[];
    by: Prisma.AdvisorClientScalarFieldEnum[] | Prisma.AdvisorClientScalarFieldEnum;
    having?: Prisma.AdvisorClientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdvisorClientCountAggregateInputType | true;
    _avg?: AdvisorClientAvgAggregateInputType;
    _sum?: AdvisorClientSumAggregateInputType;
    _min?: AdvisorClientMinAggregateInputType;
    _max?: AdvisorClientMaxAggregateInputType;
};
export type AdvisorClientGroupByOutputType = {
    id: number;
    advisorId: number;
    name: string;
    email: string | null;
    country: string | null;
    tier: string | null;
    avatarColor: string | null;
    totalSpent: runtime.Decimal | null;
    acquisitionsCount: number;
    satisfactionScore: runtime.Decimal | null;
    lastContact: string | null;
    interests: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AdvisorClientCountAggregateOutputType | null;
    _avg: AdvisorClientAvgAggregateOutputType | null;
    _sum: AdvisorClientSumAggregateOutputType | null;
    _min: AdvisorClientMinAggregateOutputType | null;
    _max: AdvisorClientMaxAggregateOutputType | null;
};
export type GetAdvisorClientGroupByPayload<T extends AdvisorClientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdvisorClientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdvisorClientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdvisorClientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdvisorClientGroupByOutputType[P]>;
}>>;
export type AdvisorClientWhereInput = {
    AND?: Prisma.AdvisorClientWhereInput | Prisma.AdvisorClientWhereInput[];
    OR?: Prisma.AdvisorClientWhereInput[];
    NOT?: Prisma.AdvisorClientWhereInput | Prisma.AdvisorClientWhereInput[];
    id?: Prisma.IntFilter<"AdvisorClient"> | number;
    advisorId?: Prisma.IntFilter<"AdvisorClient"> | number;
    name?: Prisma.StringFilter<"AdvisorClient"> | string;
    email?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    country?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    tier?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    avatarColor?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    totalSpent?: Prisma.DecimalNullableFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFilter<"AdvisorClient"> | number;
    satisfactionScore?: Prisma.DecimalNullableFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    interests?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorClient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdvisorClient"> | Date | string;
    advisor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type AdvisorClientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    advisorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalSpent?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquisitionsCount?: Prisma.SortOrder;
    satisfactionScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastContact?: Prisma.SortOrderInput | Prisma.SortOrder;
    interests?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    advisor?: Prisma.UserOrderByWithRelationInput;
    _relevance?: Prisma.AdvisorClientOrderByRelevanceInput;
};
export type AdvisorClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AdvisorClientWhereInput | Prisma.AdvisorClientWhereInput[];
    OR?: Prisma.AdvisorClientWhereInput[];
    NOT?: Prisma.AdvisorClientWhereInput | Prisma.AdvisorClientWhereInput[];
    advisorId?: Prisma.IntFilter<"AdvisorClient"> | number;
    name?: Prisma.StringFilter<"AdvisorClient"> | string;
    email?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    country?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    tier?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    avatarColor?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    totalSpent?: Prisma.DecimalNullableFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFilter<"AdvisorClient"> | number;
    satisfactionScore?: Prisma.DecimalNullableFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    interests?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorClient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdvisorClient"> | Date | string;
    advisor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type AdvisorClientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    advisorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarColor?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalSpent?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquisitionsCount?: Prisma.SortOrder;
    satisfactionScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastContact?: Prisma.SortOrderInput | Prisma.SortOrder;
    interests?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AdvisorClientCountOrderByAggregateInput;
    _avg?: Prisma.AdvisorClientAvgOrderByAggregateInput;
    _max?: Prisma.AdvisorClientMaxOrderByAggregateInput;
    _min?: Prisma.AdvisorClientMinOrderByAggregateInput;
    _sum?: Prisma.AdvisorClientSumOrderByAggregateInput;
};
export type AdvisorClientScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdvisorClientScalarWhereWithAggregatesInput | Prisma.AdvisorClientScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdvisorClientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdvisorClientScalarWhereWithAggregatesInput | Prisma.AdvisorClientScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AdvisorClient"> | number;
    advisorId?: Prisma.IntWithAggregatesFilter<"AdvisorClient"> | number;
    name?: Prisma.StringWithAggregatesFilter<"AdvisorClient"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"AdvisorClient"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"AdvisorClient"> | string | null;
    tier?: Prisma.StringNullableWithAggregatesFilter<"AdvisorClient"> | string | null;
    avatarColor?: Prisma.StringNullableWithAggregatesFilter<"AdvisorClient"> | string | null;
    totalSpent?: Prisma.DecimalNullableWithAggregatesFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntWithAggregatesFilter<"AdvisorClient"> | number;
    satisfactionScore?: Prisma.DecimalNullableWithAggregatesFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.StringNullableWithAggregatesFilter<"AdvisorClient"> | string | null;
    interests?: Prisma.StringNullableWithAggregatesFilter<"AdvisorClient"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdvisorClient"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdvisorClient"> | Date | string;
};
export type AdvisorClientCreateInput = {
    name: string;
    email?: string | null;
    country?: string | null;
    tier?: string | null;
    avatarColor?: string | null;
    totalSpent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: number;
    satisfactionScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: string | null;
    interests?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    advisor: Prisma.UserCreateNestedOneWithoutAdvisorClientsInput;
};
export type AdvisorClientUncheckedCreateInput = {
    id?: number;
    advisorId: number;
    name: string;
    email?: string | null;
    country?: string | null;
    tier?: string | null;
    avatarColor?: string | null;
    totalSpent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: number;
    satisfactionScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: string | null;
    interests?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorClientUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalSpent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    satisfactionScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    advisor?: Prisma.UserUpdateOneRequiredWithoutAdvisorClientsNestedInput;
};
export type AdvisorClientUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    advisorId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalSpent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    satisfactionScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorClientCreateManyInput = {
    id?: number;
    advisorId: number;
    name: string;
    email?: string | null;
    country?: string | null;
    tier?: string | null;
    avatarColor?: string | null;
    totalSpent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: number;
    satisfactionScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: string | null;
    interests?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorClientUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalSpent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    satisfactionScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorClientUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    advisorId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalSpent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    satisfactionScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorClientListRelationFilter = {
    every?: Prisma.AdvisorClientWhereInput;
    some?: Prisma.AdvisorClientWhereInput;
    none?: Prisma.AdvisorClientWhereInput;
};
export type AdvisorClientOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdvisorClientOrderByRelevanceInput = {
    fields: Prisma.AdvisorClientOrderByRelevanceFieldEnum | Prisma.AdvisorClientOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type AdvisorClientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    advisorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    avatarColor?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    acquisitionsCount?: Prisma.SortOrder;
    satisfactionScore?: Prisma.SortOrder;
    lastContact?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdvisorClientAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    advisorId?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    acquisitionsCount?: Prisma.SortOrder;
    satisfactionScore?: Prisma.SortOrder;
};
export type AdvisorClientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    advisorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    avatarColor?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    acquisitionsCount?: Prisma.SortOrder;
    satisfactionScore?: Prisma.SortOrder;
    lastContact?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdvisorClientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    advisorId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    avatarColor?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    acquisitionsCount?: Prisma.SortOrder;
    satisfactionScore?: Prisma.SortOrder;
    lastContact?: Prisma.SortOrder;
    interests?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdvisorClientSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    advisorId?: Prisma.SortOrder;
    totalSpent?: Prisma.SortOrder;
    acquisitionsCount?: Prisma.SortOrder;
    satisfactionScore?: Prisma.SortOrder;
};
export type AdvisorClientCreateNestedManyWithoutAdvisorInput = {
    create?: Prisma.XOR<Prisma.AdvisorClientCreateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput> | Prisma.AdvisorClientCreateWithoutAdvisorInput[] | Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?: Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput | Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput[];
    createMany?: Prisma.AdvisorClientCreateManyAdvisorInputEnvelope;
    connect?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
};
export type AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput = {
    create?: Prisma.XOR<Prisma.AdvisorClientCreateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput> | Prisma.AdvisorClientCreateWithoutAdvisorInput[] | Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?: Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput | Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput[];
    createMany?: Prisma.AdvisorClientCreateManyAdvisorInputEnvelope;
    connect?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
};
export type AdvisorClientUpdateManyWithoutAdvisorNestedInput = {
    create?: Prisma.XOR<Prisma.AdvisorClientCreateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput> | Prisma.AdvisorClientCreateWithoutAdvisorInput[] | Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?: Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput | Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput[];
    upsert?: Prisma.AdvisorClientUpsertWithWhereUniqueWithoutAdvisorInput | Prisma.AdvisorClientUpsertWithWhereUniqueWithoutAdvisorInput[];
    createMany?: Prisma.AdvisorClientCreateManyAdvisorInputEnvelope;
    set?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    disconnect?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    delete?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    connect?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    update?: Prisma.AdvisorClientUpdateWithWhereUniqueWithoutAdvisorInput | Prisma.AdvisorClientUpdateWithWhereUniqueWithoutAdvisorInput[];
    updateMany?: Prisma.AdvisorClientUpdateManyWithWhereWithoutAdvisorInput | Prisma.AdvisorClientUpdateManyWithWhereWithoutAdvisorInput[];
    deleteMany?: Prisma.AdvisorClientScalarWhereInput | Prisma.AdvisorClientScalarWhereInput[];
};
export type AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput = {
    create?: Prisma.XOR<Prisma.AdvisorClientCreateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput> | Prisma.AdvisorClientCreateWithoutAdvisorInput[] | Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput[];
    connectOrCreate?: Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput | Prisma.AdvisorClientCreateOrConnectWithoutAdvisorInput[];
    upsert?: Prisma.AdvisorClientUpsertWithWhereUniqueWithoutAdvisorInput | Prisma.AdvisorClientUpsertWithWhereUniqueWithoutAdvisorInput[];
    createMany?: Prisma.AdvisorClientCreateManyAdvisorInputEnvelope;
    set?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    disconnect?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    delete?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    connect?: Prisma.AdvisorClientWhereUniqueInput | Prisma.AdvisorClientWhereUniqueInput[];
    update?: Prisma.AdvisorClientUpdateWithWhereUniqueWithoutAdvisorInput | Prisma.AdvisorClientUpdateWithWhereUniqueWithoutAdvisorInput[];
    updateMany?: Prisma.AdvisorClientUpdateManyWithWhereWithoutAdvisorInput | Prisma.AdvisorClientUpdateManyWithWhereWithoutAdvisorInput[];
    deleteMany?: Prisma.AdvisorClientScalarWhereInput | Prisma.AdvisorClientScalarWhereInput[];
};
export type AdvisorClientCreateWithoutAdvisorInput = {
    name: string;
    email?: string | null;
    country?: string | null;
    tier?: string | null;
    avatarColor?: string | null;
    totalSpent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: number;
    satisfactionScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: string | null;
    interests?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorClientUncheckedCreateWithoutAdvisorInput = {
    id?: number;
    name: string;
    email?: string | null;
    country?: string | null;
    tier?: string | null;
    avatarColor?: string | null;
    totalSpent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: number;
    satisfactionScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: string | null;
    interests?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorClientCreateOrConnectWithoutAdvisorInput = {
    where: Prisma.AdvisorClientWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdvisorClientCreateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput>;
};
export type AdvisorClientCreateManyAdvisorInputEnvelope = {
    data: Prisma.AdvisorClientCreateManyAdvisorInput | Prisma.AdvisorClientCreateManyAdvisorInput[];
    skipDuplicates?: boolean;
};
export type AdvisorClientUpsertWithWhereUniqueWithoutAdvisorInput = {
    where: Prisma.AdvisorClientWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdvisorClientUpdateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedUpdateWithoutAdvisorInput>;
    create: Prisma.XOR<Prisma.AdvisorClientCreateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedCreateWithoutAdvisorInput>;
};
export type AdvisorClientUpdateWithWhereUniqueWithoutAdvisorInput = {
    where: Prisma.AdvisorClientWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdvisorClientUpdateWithoutAdvisorInput, Prisma.AdvisorClientUncheckedUpdateWithoutAdvisorInput>;
};
export type AdvisorClientUpdateManyWithWhereWithoutAdvisorInput = {
    where: Prisma.AdvisorClientScalarWhereInput;
    data: Prisma.XOR<Prisma.AdvisorClientUpdateManyMutationInput, Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorInput>;
};
export type AdvisorClientScalarWhereInput = {
    AND?: Prisma.AdvisorClientScalarWhereInput | Prisma.AdvisorClientScalarWhereInput[];
    OR?: Prisma.AdvisorClientScalarWhereInput[];
    NOT?: Prisma.AdvisorClientScalarWhereInput | Prisma.AdvisorClientScalarWhereInput[];
    id?: Prisma.IntFilter<"AdvisorClient"> | number;
    advisorId?: Prisma.IntFilter<"AdvisorClient"> | number;
    name?: Prisma.StringFilter<"AdvisorClient"> | string;
    email?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    country?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    tier?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    avatarColor?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    totalSpent?: Prisma.DecimalNullableFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFilter<"AdvisorClient"> | number;
    satisfactionScore?: Prisma.DecimalNullableFilter<"AdvisorClient"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    interests?: Prisma.StringNullableFilter<"AdvisorClient"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdvisorClient"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdvisorClient"> | Date | string;
};
export type AdvisorClientCreateManyAdvisorInput = {
    id?: number;
    name: string;
    email?: string | null;
    country?: string | null;
    tier?: string | null;
    avatarColor?: string | null;
    totalSpent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: number;
    satisfactionScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: string | null;
    interests?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdvisorClientUpdateWithoutAdvisorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalSpent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    satisfactionScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorClientUncheckedUpdateWithoutAdvisorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalSpent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    satisfactionScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorClientUncheckedUpdateManyWithoutAdvisorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarColor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    totalSpent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    acquisitionsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    satisfactionScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lastContact?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdvisorClientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    advisorId?: boolean;
    name?: boolean;
    email?: boolean;
    country?: boolean;
    tier?: boolean;
    avatarColor?: boolean;
    totalSpent?: boolean;
    acquisitionsCount?: boolean;
    satisfactionScore?: boolean;
    lastContact?: boolean;
    interests?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    advisor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["advisorClient"]>;
export type AdvisorClientSelectScalar = {
    id?: boolean;
    advisorId?: boolean;
    name?: boolean;
    email?: boolean;
    country?: boolean;
    tier?: boolean;
    avatarColor?: boolean;
    totalSpent?: boolean;
    acquisitionsCount?: boolean;
    satisfactionScore?: boolean;
    lastContact?: boolean;
    interests?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AdvisorClientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "advisorId" | "name" | "email" | "country" | "tier" | "avatarColor" | "totalSpent" | "acquisitionsCount" | "satisfactionScore" | "lastContact" | "interests" | "createdAt" | "updatedAt", ExtArgs["result"]["advisorClient"]>;
export type AdvisorClientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    advisor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AdvisorClientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdvisorClient";
    objects: {
        advisor: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        advisorId: number;
        name: string;
        email: string | null;
        country: string | null;
        tier: string | null;
        avatarColor: string | null;
        totalSpent: runtime.Decimal | null;
        acquisitionsCount: number;
        satisfactionScore: runtime.Decimal | null;
        lastContact: string | null;
        interests: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["advisorClient"]>;
    composites: {};
};
export type AdvisorClientGetPayload<S extends boolean | null | undefined | AdvisorClientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload, S>;
export type AdvisorClientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdvisorClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdvisorClientCountAggregateInputType | true;
};
export interface AdvisorClientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdvisorClient'];
        meta: {
            name: 'AdvisorClient';
        };
    };
    /**
     * Find zero or one AdvisorClient that matches the filter.
     * @param {AdvisorClientFindUniqueArgs} args - Arguments to find a AdvisorClient
     * @example
     * // Get one AdvisorClient
     * const advisorClient = await prisma.advisorClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvisorClientFindUniqueArgs>(args: Prisma.SelectSubset<T, AdvisorClientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AdvisorClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvisorClientFindUniqueOrThrowArgs} args - Arguments to find a AdvisorClient
     * @example
     * // Get one AdvisorClient
     * const advisorClient = await prisma.advisorClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvisorClientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdvisorClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdvisorClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorClientFindFirstArgs} args - Arguments to find a AdvisorClient
     * @example
     * // Get one AdvisorClient
     * const advisorClient = await prisma.advisorClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvisorClientFindFirstArgs>(args?: Prisma.SelectSubset<T, AdvisorClientFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdvisorClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorClientFindFirstOrThrowArgs} args - Arguments to find a AdvisorClient
     * @example
     * // Get one AdvisorClient
     * const advisorClient = await prisma.advisorClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvisorClientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdvisorClientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AdvisorClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdvisorClients
     * const advisorClients = await prisma.advisorClient.findMany()
     *
     * // Get first 10 AdvisorClients
     * const advisorClients = await prisma.advisorClient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const advisorClientWithIdOnly = await prisma.advisorClient.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdvisorClientFindManyArgs>(args?: Prisma.SelectSubset<T, AdvisorClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AdvisorClient.
     * @param {AdvisorClientCreateArgs} args - Arguments to create a AdvisorClient.
     * @example
     * // Create one AdvisorClient
     * const AdvisorClient = await prisma.advisorClient.create({
     *   data: {
     *     // ... data to create a AdvisorClient
     *   }
     * })
     *
     */
    create<T extends AdvisorClientCreateArgs>(args: Prisma.SelectSubset<T, AdvisorClientCreateArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AdvisorClients.
     * @param {AdvisorClientCreateManyArgs} args - Arguments to create many AdvisorClients.
     * @example
     * // Create many AdvisorClients
     * const advisorClient = await prisma.advisorClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdvisorClientCreateManyArgs>(args?: Prisma.SelectSubset<T, AdvisorClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a AdvisorClient.
     * @param {AdvisorClientDeleteArgs} args - Arguments to delete one AdvisorClient.
     * @example
     * // Delete one AdvisorClient
     * const AdvisorClient = await prisma.advisorClient.delete({
     *   where: {
     *     // ... filter to delete one AdvisorClient
     *   }
     * })
     *
     */
    delete<T extends AdvisorClientDeleteArgs>(args: Prisma.SelectSubset<T, AdvisorClientDeleteArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AdvisorClient.
     * @param {AdvisorClientUpdateArgs} args - Arguments to update one AdvisorClient.
     * @example
     * // Update one AdvisorClient
     * const advisorClient = await prisma.advisorClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdvisorClientUpdateArgs>(args: Prisma.SelectSubset<T, AdvisorClientUpdateArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AdvisorClients.
     * @param {AdvisorClientDeleteManyArgs} args - Arguments to filter AdvisorClients to delete.
     * @example
     * // Delete a few AdvisorClients
     * const { count } = await prisma.advisorClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdvisorClientDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdvisorClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdvisorClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdvisorClients
     * const advisorClient = await prisma.advisorClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdvisorClientUpdateManyArgs>(args: Prisma.SelectSubset<T, AdvisorClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one AdvisorClient.
     * @param {AdvisorClientUpsertArgs} args - Arguments to update or create a AdvisorClient.
     * @example
     * // Update or create a AdvisorClient
     * const advisorClient = await prisma.advisorClient.upsert({
     *   create: {
     *     // ... data to create a AdvisorClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdvisorClient we want to update
     *   }
     * })
     */
    upsert<T extends AdvisorClientUpsertArgs>(args: Prisma.SelectSubset<T, AdvisorClientUpsertArgs<ExtArgs>>): Prisma.Prisma__AdvisorClientClient<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AdvisorClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorClientCountArgs} args - Arguments to filter AdvisorClients to count.
     * @example
     * // Count the number of AdvisorClients
     * const count = await prisma.advisorClient.count({
     *   where: {
     *     // ... the filter for the AdvisorClients we want to count
     *   }
     * })
    **/
    count<T extends AdvisorClientCountArgs>(args?: Prisma.Subset<T, AdvisorClientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdvisorClientCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AdvisorClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdvisorClientAggregateArgs>(args: Prisma.Subset<T, AdvisorClientAggregateArgs>): Prisma.PrismaPromise<GetAdvisorClientAggregateType<T>>;
    /**
     * Group by AdvisorClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvisorClientGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdvisorClientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdvisorClientGroupByArgs['orderBy'];
    } : {
        orderBy?: AdvisorClientGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdvisorClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvisorClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdvisorClient model
     */
    readonly fields: AdvisorClientFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AdvisorClient.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdvisorClientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    advisor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AdvisorClient model
 */
export interface AdvisorClientFieldRefs {
    readonly id: Prisma.FieldRef<"AdvisorClient", 'Int'>;
    readonly advisorId: Prisma.FieldRef<"AdvisorClient", 'Int'>;
    readonly name: Prisma.FieldRef<"AdvisorClient", 'String'>;
    readonly email: Prisma.FieldRef<"AdvisorClient", 'String'>;
    readonly country: Prisma.FieldRef<"AdvisorClient", 'String'>;
    readonly tier: Prisma.FieldRef<"AdvisorClient", 'String'>;
    readonly avatarColor: Prisma.FieldRef<"AdvisorClient", 'String'>;
    readonly totalSpent: Prisma.FieldRef<"AdvisorClient", 'Decimal'>;
    readonly acquisitionsCount: Prisma.FieldRef<"AdvisorClient", 'Int'>;
    readonly satisfactionScore: Prisma.FieldRef<"AdvisorClient", 'Decimal'>;
    readonly lastContact: Prisma.FieldRef<"AdvisorClient", 'String'>;
    readonly interests: Prisma.FieldRef<"AdvisorClient", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AdvisorClient", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AdvisorClient", 'DateTime'>;
}
/**
 * AdvisorClient findUnique
 */
export type AdvisorClientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorClient to fetch.
     */
    where: Prisma.AdvisorClientWhereUniqueInput;
};
/**
 * AdvisorClient findUniqueOrThrow
 */
export type AdvisorClientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorClient to fetch.
     */
    where: Prisma.AdvisorClientWhereUniqueInput;
};
/**
 * AdvisorClient findFirst
 */
export type AdvisorClientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorClient to fetch.
     */
    where?: Prisma.AdvisorClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorClients to fetch.
     */
    orderBy?: Prisma.AdvisorClientOrderByWithRelationInput | Prisma.AdvisorClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdvisorClients.
     */
    cursor?: Prisma.AdvisorClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorClients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorClients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorClients.
     */
    distinct?: Prisma.AdvisorClientScalarFieldEnum | Prisma.AdvisorClientScalarFieldEnum[];
};
/**
 * AdvisorClient findFirstOrThrow
 */
export type AdvisorClientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorClient to fetch.
     */
    where?: Prisma.AdvisorClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorClients to fetch.
     */
    orderBy?: Prisma.AdvisorClientOrderByWithRelationInput | Prisma.AdvisorClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdvisorClients.
     */
    cursor?: Prisma.AdvisorClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorClients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorClients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorClients.
     */
    distinct?: Prisma.AdvisorClientScalarFieldEnum | Prisma.AdvisorClientScalarFieldEnum[];
};
/**
 * AdvisorClient findMany
 */
export type AdvisorClientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * Filter, which AdvisorClients to fetch.
     */
    where?: Prisma.AdvisorClientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdvisorClients to fetch.
     */
    orderBy?: Prisma.AdvisorClientOrderByWithRelationInput | Prisma.AdvisorClientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdvisorClients.
     */
    cursor?: Prisma.AdvisorClientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdvisorClients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdvisorClients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdvisorClients.
     */
    distinct?: Prisma.AdvisorClientScalarFieldEnum | Prisma.AdvisorClientScalarFieldEnum[];
};
/**
 * AdvisorClient create
 */
export type AdvisorClientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * The data needed to create a AdvisorClient.
     */
    data: Prisma.XOR<Prisma.AdvisorClientCreateInput, Prisma.AdvisorClientUncheckedCreateInput>;
};
/**
 * AdvisorClient createMany
 */
export type AdvisorClientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdvisorClients.
     */
    data: Prisma.AdvisorClientCreateManyInput | Prisma.AdvisorClientCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdvisorClient update
 */
export type AdvisorClientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * The data needed to update a AdvisorClient.
     */
    data: Prisma.XOR<Prisma.AdvisorClientUpdateInput, Prisma.AdvisorClientUncheckedUpdateInput>;
    /**
     * Choose, which AdvisorClient to update.
     */
    where: Prisma.AdvisorClientWhereUniqueInput;
};
/**
 * AdvisorClient updateMany
 */
export type AdvisorClientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AdvisorClients.
     */
    data: Prisma.XOR<Prisma.AdvisorClientUpdateManyMutationInput, Prisma.AdvisorClientUncheckedUpdateManyInput>;
    /**
     * Filter which AdvisorClients to update
     */
    where?: Prisma.AdvisorClientWhereInput;
    /**
     * Limit how many AdvisorClients to update.
     */
    limit?: number;
};
/**
 * AdvisorClient upsert
 */
export type AdvisorClientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * The filter to search for the AdvisorClient to update in case it exists.
     */
    where: Prisma.AdvisorClientWhereUniqueInput;
    /**
     * In case the AdvisorClient found by the `where` argument doesn't exist, create a new AdvisorClient with this data.
     */
    create: Prisma.XOR<Prisma.AdvisorClientCreateInput, Prisma.AdvisorClientUncheckedCreateInput>;
    /**
     * In case the AdvisorClient was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdvisorClientUpdateInput, Prisma.AdvisorClientUncheckedUpdateInput>;
};
/**
 * AdvisorClient delete
 */
export type AdvisorClientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
    /**
     * Filter which AdvisorClient to delete.
     */
    where: Prisma.AdvisorClientWhereUniqueInput;
};
/**
 * AdvisorClient deleteMany
 */
export type AdvisorClientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdvisorClients to delete
     */
    where?: Prisma.AdvisorClientWhereInput;
    /**
     * Limit how many AdvisorClients to delete.
     */
    limit?: number;
};
/**
 * AdvisorClient without action
 */
export type AdvisorClientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorClient
     */
    select?: Prisma.AdvisorClientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorClient
     */
    omit?: Prisma.AdvisorClientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorClientInclude<ExtArgs> | null;
};
//# sourceMappingURL=AdvisorClient.d.ts.map