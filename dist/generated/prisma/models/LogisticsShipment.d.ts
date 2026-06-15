import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model LogisticsShipment
 *
 */
export type LogisticsShipmentModel = runtime.Types.Result.DefaultSelection<Prisma.$LogisticsShipmentPayload>;
export type AggregateLogisticsShipment = {
    _count: LogisticsShipmentCountAggregateOutputType | null;
    _avg: LogisticsShipmentAvgAggregateOutputType | null;
    _sum: LogisticsShipmentSumAggregateOutputType | null;
    _min: LogisticsShipmentMinAggregateOutputType | null;
    _max: LogisticsShipmentMaxAggregateOutputType | null;
};
export type LogisticsShipmentAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type LogisticsShipmentSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type LogisticsShipmentMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkTitle: string | null;
    carrier: string | null;
    status: string | null;
    estimatedDeliveryDate: string | null;
    securityTier: string | null;
    insuranceCoverage: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LogisticsShipmentMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    artworkTitle: string | null;
    carrier: string | null;
    status: string | null;
    estimatedDeliveryDate: string | null;
    securityTier: string | null;
    insuranceCoverage: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LogisticsShipmentCountAggregateOutputType = {
    id: number;
    userId: number;
    artworkTitle: number;
    carrier: number;
    status: number;
    estimatedDeliveryDate: number;
    securityTier: number;
    insuranceCoverage: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LogisticsShipmentAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type LogisticsShipmentSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type LogisticsShipmentMinAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    carrier?: true;
    status?: true;
    estimatedDeliveryDate?: true;
    securityTier?: true;
    insuranceCoverage?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LogisticsShipmentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    carrier?: true;
    status?: true;
    estimatedDeliveryDate?: true;
    securityTier?: true;
    insuranceCoverage?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LogisticsShipmentCountAggregateInputType = {
    id?: true;
    userId?: true;
    artworkTitle?: true;
    carrier?: true;
    status?: true;
    estimatedDeliveryDate?: true;
    securityTier?: true;
    insuranceCoverage?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LogisticsShipmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsShipment to aggregate.
     */
    where?: Prisma.LogisticsShipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogisticsShipments to fetch.
     */
    orderBy?: Prisma.LogisticsShipmentOrderByWithRelationInput | Prisma.LogisticsShipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LogisticsShipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogisticsShipments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogisticsShipments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LogisticsShipments
    **/
    _count?: true | LogisticsShipmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LogisticsShipmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LogisticsShipmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LogisticsShipmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LogisticsShipmentMaxAggregateInputType;
};
export type GetLogisticsShipmentAggregateType<T extends LogisticsShipmentAggregateArgs> = {
    [P in keyof T & keyof AggregateLogisticsShipment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLogisticsShipment[P]> : Prisma.GetScalarType<T[P], AggregateLogisticsShipment[P]>;
};
export type LogisticsShipmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogisticsShipmentWhereInput;
    orderBy?: Prisma.LogisticsShipmentOrderByWithAggregationInput | Prisma.LogisticsShipmentOrderByWithAggregationInput[];
    by: Prisma.LogisticsShipmentScalarFieldEnum[] | Prisma.LogisticsShipmentScalarFieldEnum;
    having?: Prisma.LogisticsShipmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LogisticsShipmentCountAggregateInputType | true;
    _avg?: LogisticsShipmentAvgAggregateInputType;
    _sum?: LogisticsShipmentSumAggregateInputType;
    _min?: LogisticsShipmentMinAggregateInputType;
    _max?: LogisticsShipmentMaxAggregateInputType;
};
export type LogisticsShipmentGroupByOutputType = {
    id: number;
    userId: number;
    artworkTitle: string;
    carrier: string | null;
    status: string;
    estimatedDeliveryDate: string | null;
    securityTier: string | null;
    insuranceCoverage: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LogisticsShipmentCountAggregateOutputType | null;
    _avg: LogisticsShipmentAvgAggregateOutputType | null;
    _sum: LogisticsShipmentSumAggregateOutputType | null;
    _min: LogisticsShipmentMinAggregateOutputType | null;
    _max: LogisticsShipmentMaxAggregateOutputType | null;
};
export type GetLogisticsShipmentGroupByPayload<T extends LogisticsShipmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LogisticsShipmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LogisticsShipmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LogisticsShipmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LogisticsShipmentGroupByOutputType[P]>;
}>>;
export type LogisticsShipmentWhereInput = {
    AND?: Prisma.LogisticsShipmentWhereInput | Prisma.LogisticsShipmentWhereInput[];
    OR?: Prisma.LogisticsShipmentWhereInput[];
    NOT?: Prisma.LogisticsShipmentWhereInput | Prisma.LogisticsShipmentWhereInput[];
    id?: Prisma.IntFilter<"LogisticsShipment"> | number;
    userId?: Prisma.IntFilter<"LogisticsShipment"> | number;
    artworkTitle?: Prisma.StringFilter<"LogisticsShipment"> | string;
    carrier?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    status?: Prisma.StringFilter<"LogisticsShipment"> | string;
    estimatedDeliveryDate?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    securityTier?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    insuranceCoverage?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LogisticsShipment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LogisticsShipment"> | Date | string;
    updates?: Prisma.ShipmentUpdateListRelationFilter;
};
export type LogisticsShipmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    carrier?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    estimatedDeliveryDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    securityTier?: Prisma.SortOrderInput | Prisma.SortOrder;
    insuranceCoverage?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updates?: Prisma.ShipmentUpdateOrderByRelationAggregateInput;
    _relevance?: Prisma.LogisticsShipmentOrderByRelevanceInput;
};
export type LogisticsShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LogisticsShipmentWhereInput | Prisma.LogisticsShipmentWhereInput[];
    OR?: Prisma.LogisticsShipmentWhereInput[];
    NOT?: Prisma.LogisticsShipmentWhereInput | Prisma.LogisticsShipmentWhereInput[];
    userId?: Prisma.IntFilter<"LogisticsShipment"> | number;
    artworkTitle?: Prisma.StringFilter<"LogisticsShipment"> | string;
    carrier?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    status?: Prisma.StringFilter<"LogisticsShipment"> | string;
    estimatedDeliveryDate?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    securityTier?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    insuranceCoverage?: Prisma.StringNullableFilter<"LogisticsShipment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LogisticsShipment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LogisticsShipment"> | Date | string;
    updates?: Prisma.ShipmentUpdateListRelationFilter;
}, "id">;
export type LogisticsShipmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    carrier?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    estimatedDeliveryDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    securityTier?: Prisma.SortOrderInput | Prisma.SortOrder;
    insuranceCoverage?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LogisticsShipmentCountOrderByAggregateInput;
    _avg?: Prisma.LogisticsShipmentAvgOrderByAggregateInput;
    _max?: Prisma.LogisticsShipmentMaxOrderByAggregateInput;
    _min?: Prisma.LogisticsShipmentMinOrderByAggregateInput;
    _sum?: Prisma.LogisticsShipmentSumOrderByAggregateInput;
};
export type LogisticsShipmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.LogisticsShipmentScalarWhereWithAggregatesInput | Prisma.LogisticsShipmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.LogisticsShipmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LogisticsShipmentScalarWhereWithAggregatesInput | Prisma.LogisticsShipmentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LogisticsShipment"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"LogisticsShipment"> | number;
    artworkTitle?: Prisma.StringWithAggregatesFilter<"LogisticsShipment"> | string;
    carrier?: Prisma.StringNullableWithAggregatesFilter<"LogisticsShipment"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"LogisticsShipment"> | string;
    estimatedDeliveryDate?: Prisma.StringNullableWithAggregatesFilter<"LogisticsShipment"> | string | null;
    securityTier?: Prisma.StringNullableWithAggregatesFilter<"LogisticsShipment"> | string | null;
    insuranceCoverage?: Prisma.StringNullableWithAggregatesFilter<"LogisticsShipment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LogisticsShipment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LogisticsShipment"> | Date | string;
};
export type LogisticsShipmentCreateInput = {
    userId: number;
    artworkTitle: string;
    carrier?: string | null;
    status?: string;
    estimatedDeliveryDate?: string | null;
    securityTier?: string | null;
    insuranceCoverage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updates?: Prisma.ShipmentUpdateCreateNestedManyWithoutShipmentInput;
};
export type LogisticsShipmentUncheckedCreateInput = {
    id?: number;
    userId: number;
    artworkTitle: string;
    carrier?: string | null;
    status?: string;
    estimatedDeliveryDate?: string | null;
    securityTier?: string | null;
    insuranceCoverage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updates?: Prisma.ShipmentUpdateUncheckedCreateNestedManyWithoutShipmentInput;
};
export type LogisticsShipmentUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedDeliveryDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    securityTier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insuranceCoverage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updates?: Prisma.ShipmentUpdateUpdateManyWithoutShipmentNestedInput;
};
export type LogisticsShipmentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedDeliveryDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    securityTier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insuranceCoverage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updates?: Prisma.ShipmentUpdateUncheckedUpdateManyWithoutShipmentNestedInput;
};
export type LogisticsShipmentCreateManyInput = {
    id?: number;
    userId: number;
    artworkTitle: string;
    carrier?: string | null;
    status?: string;
    estimatedDeliveryDate?: string | null;
    securityTier?: string | null;
    insuranceCoverage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LogisticsShipmentUpdateManyMutationInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedDeliveryDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    securityTier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insuranceCoverage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogisticsShipmentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedDeliveryDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    securityTier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insuranceCoverage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogisticsShipmentOrderByRelevanceInput = {
    fields: Prisma.LogisticsShipmentOrderByRelevanceFieldEnum | Prisma.LogisticsShipmentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type LogisticsShipmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    carrier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    estimatedDeliveryDate?: Prisma.SortOrder;
    securityTier?: Prisma.SortOrder;
    insuranceCoverage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LogisticsShipmentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type LogisticsShipmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    carrier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    estimatedDeliveryDate?: Prisma.SortOrder;
    securityTier?: Prisma.SortOrder;
    insuranceCoverage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LogisticsShipmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    artworkTitle?: Prisma.SortOrder;
    carrier?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    estimatedDeliveryDate?: Prisma.SortOrder;
    securityTier?: Prisma.SortOrder;
    insuranceCoverage?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LogisticsShipmentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type LogisticsShipmentScalarRelationFilter = {
    is?: Prisma.LogisticsShipmentWhereInput;
    isNot?: Prisma.LogisticsShipmentWhereInput;
};
export type LogisticsShipmentCreateNestedOneWithoutUpdatesInput = {
    create?: Prisma.XOR<Prisma.LogisticsShipmentCreateWithoutUpdatesInput, Prisma.LogisticsShipmentUncheckedCreateWithoutUpdatesInput>;
    connectOrCreate?: Prisma.LogisticsShipmentCreateOrConnectWithoutUpdatesInput;
    connect?: Prisma.LogisticsShipmentWhereUniqueInput;
};
export type LogisticsShipmentUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: Prisma.XOR<Prisma.LogisticsShipmentCreateWithoutUpdatesInput, Prisma.LogisticsShipmentUncheckedCreateWithoutUpdatesInput>;
    connectOrCreate?: Prisma.LogisticsShipmentCreateOrConnectWithoutUpdatesInput;
    upsert?: Prisma.LogisticsShipmentUpsertWithoutUpdatesInput;
    connect?: Prisma.LogisticsShipmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LogisticsShipmentUpdateToOneWithWhereWithoutUpdatesInput, Prisma.LogisticsShipmentUpdateWithoutUpdatesInput>, Prisma.LogisticsShipmentUncheckedUpdateWithoutUpdatesInput>;
};
export type LogisticsShipmentCreateWithoutUpdatesInput = {
    userId: number;
    artworkTitle: string;
    carrier?: string | null;
    status?: string;
    estimatedDeliveryDate?: string | null;
    securityTier?: string | null;
    insuranceCoverage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LogisticsShipmentUncheckedCreateWithoutUpdatesInput = {
    id?: number;
    userId: number;
    artworkTitle: string;
    carrier?: string | null;
    status?: string;
    estimatedDeliveryDate?: string | null;
    securityTier?: string | null;
    insuranceCoverage?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LogisticsShipmentCreateOrConnectWithoutUpdatesInput = {
    where: Prisma.LogisticsShipmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.LogisticsShipmentCreateWithoutUpdatesInput, Prisma.LogisticsShipmentUncheckedCreateWithoutUpdatesInput>;
};
export type LogisticsShipmentUpsertWithoutUpdatesInput = {
    update: Prisma.XOR<Prisma.LogisticsShipmentUpdateWithoutUpdatesInput, Prisma.LogisticsShipmentUncheckedUpdateWithoutUpdatesInput>;
    create: Prisma.XOR<Prisma.LogisticsShipmentCreateWithoutUpdatesInput, Prisma.LogisticsShipmentUncheckedCreateWithoutUpdatesInput>;
    where?: Prisma.LogisticsShipmentWhereInput;
};
export type LogisticsShipmentUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: Prisma.LogisticsShipmentWhereInput;
    data: Prisma.XOR<Prisma.LogisticsShipmentUpdateWithoutUpdatesInput, Prisma.LogisticsShipmentUncheckedUpdateWithoutUpdatesInput>;
};
export type LogisticsShipmentUpdateWithoutUpdatesInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedDeliveryDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    securityTier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insuranceCoverage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogisticsShipmentUncheckedUpdateWithoutUpdatesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkTitle?: Prisma.StringFieldUpdateOperationsInput | string;
    carrier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedDeliveryDate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    securityTier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    insuranceCoverage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LogisticsShipmentCountOutputType
 */
export type LogisticsShipmentCountOutputType = {
    updates: number;
};
export type LogisticsShipmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updates?: boolean | LogisticsShipmentCountOutputTypeCountUpdatesArgs;
};
/**
 * LogisticsShipmentCountOutputType without action
 */
export type LogisticsShipmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipmentCountOutputType
     */
    select?: Prisma.LogisticsShipmentCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LogisticsShipmentCountOutputType without action
 */
export type LogisticsShipmentCountOutputTypeCountUpdatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentUpdateWhereInput;
};
export type LogisticsShipmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    artworkTitle?: boolean;
    carrier?: boolean;
    status?: boolean;
    estimatedDeliveryDate?: boolean;
    securityTier?: boolean;
    insuranceCoverage?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    updates?: boolean | Prisma.LogisticsShipment$updatesArgs<ExtArgs>;
    _count?: boolean | Prisma.LogisticsShipmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["logisticsShipment"]>;
export type LogisticsShipmentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    artworkTitle?: boolean;
    carrier?: boolean;
    status?: boolean;
    estimatedDeliveryDate?: boolean;
    securityTier?: boolean;
    insuranceCoverage?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LogisticsShipmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "artworkTitle" | "carrier" | "status" | "estimatedDeliveryDate" | "securityTier" | "insuranceCoverage" | "createdAt" | "updatedAt", ExtArgs["result"]["logisticsShipment"]>;
export type LogisticsShipmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    updates?: boolean | Prisma.LogisticsShipment$updatesArgs<ExtArgs>;
    _count?: boolean | Prisma.LogisticsShipmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $LogisticsShipmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LogisticsShipment";
    objects: {
        updates: Prisma.$ShipmentUpdatePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        artworkTitle: string;
        carrier: string | null;
        status: string;
        estimatedDeliveryDate: string | null;
        securityTier: string | null;
        insuranceCoverage: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["logisticsShipment"]>;
    composites: {};
};
export type LogisticsShipmentGetPayload<S extends boolean | null | undefined | LogisticsShipmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload, S>;
export type LogisticsShipmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LogisticsShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LogisticsShipmentCountAggregateInputType | true;
};
export interface LogisticsShipmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LogisticsShipment'];
        meta: {
            name: 'LogisticsShipment';
        };
    };
    /**
     * Find zero or one LogisticsShipment that matches the filter.
     * @param {LogisticsShipmentFindUniqueArgs} args - Arguments to find a LogisticsShipment
     * @example
     * // Get one LogisticsShipment
     * const logisticsShipment = await prisma.logisticsShipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogisticsShipmentFindUniqueArgs>(args: Prisma.SelectSubset<T, LogisticsShipmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LogisticsShipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogisticsShipmentFindUniqueOrThrowArgs} args - Arguments to find a LogisticsShipment
     * @example
     * // Get one LogisticsShipment
     * const logisticsShipment = await prisma.logisticsShipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogisticsShipmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LogisticsShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LogisticsShipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsShipmentFindFirstArgs} args - Arguments to find a LogisticsShipment
     * @example
     * // Get one LogisticsShipment
     * const logisticsShipment = await prisma.logisticsShipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogisticsShipmentFindFirstArgs>(args?: Prisma.SelectSubset<T, LogisticsShipmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LogisticsShipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsShipmentFindFirstOrThrowArgs} args - Arguments to find a LogisticsShipment
     * @example
     * // Get one LogisticsShipment
     * const logisticsShipment = await prisma.logisticsShipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogisticsShipmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LogisticsShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LogisticsShipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogisticsShipments
     * const logisticsShipments = await prisma.logisticsShipment.findMany()
     *
     * // Get first 10 LogisticsShipments
     * const logisticsShipments = await prisma.logisticsShipment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const logisticsShipmentWithIdOnly = await prisma.logisticsShipment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LogisticsShipmentFindManyArgs>(args?: Prisma.SelectSubset<T, LogisticsShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LogisticsShipment.
     * @param {LogisticsShipmentCreateArgs} args - Arguments to create a LogisticsShipment.
     * @example
     * // Create one LogisticsShipment
     * const LogisticsShipment = await prisma.logisticsShipment.create({
     *   data: {
     *     // ... data to create a LogisticsShipment
     *   }
     * })
     *
     */
    create<T extends LogisticsShipmentCreateArgs>(args: Prisma.SelectSubset<T, LogisticsShipmentCreateArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LogisticsShipments.
     * @param {LogisticsShipmentCreateManyArgs} args - Arguments to create many LogisticsShipments.
     * @example
     * // Create many LogisticsShipments
     * const logisticsShipment = await prisma.logisticsShipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LogisticsShipmentCreateManyArgs>(args?: Prisma.SelectSubset<T, LogisticsShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a LogisticsShipment.
     * @param {LogisticsShipmentDeleteArgs} args - Arguments to delete one LogisticsShipment.
     * @example
     * // Delete one LogisticsShipment
     * const LogisticsShipment = await prisma.logisticsShipment.delete({
     *   where: {
     *     // ... filter to delete one LogisticsShipment
     *   }
     * })
     *
     */
    delete<T extends LogisticsShipmentDeleteArgs>(args: Prisma.SelectSubset<T, LogisticsShipmentDeleteArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LogisticsShipment.
     * @param {LogisticsShipmentUpdateArgs} args - Arguments to update one LogisticsShipment.
     * @example
     * // Update one LogisticsShipment
     * const logisticsShipment = await prisma.logisticsShipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LogisticsShipmentUpdateArgs>(args: Prisma.SelectSubset<T, LogisticsShipmentUpdateArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LogisticsShipments.
     * @param {LogisticsShipmentDeleteManyArgs} args - Arguments to filter LogisticsShipments to delete.
     * @example
     * // Delete a few LogisticsShipments
     * const { count } = await prisma.logisticsShipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LogisticsShipmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, LogisticsShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LogisticsShipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogisticsShipments
     * const logisticsShipment = await prisma.logisticsShipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LogisticsShipmentUpdateManyArgs>(args: Prisma.SelectSubset<T, LogisticsShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one LogisticsShipment.
     * @param {LogisticsShipmentUpsertArgs} args - Arguments to update or create a LogisticsShipment.
     * @example
     * // Update or create a LogisticsShipment
     * const logisticsShipment = await prisma.logisticsShipment.upsert({
     *   create: {
     *     // ... data to create a LogisticsShipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogisticsShipment we want to update
     *   }
     * })
     */
    upsert<T extends LogisticsShipmentUpsertArgs>(args: Prisma.SelectSubset<T, LogisticsShipmentUpsertArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LogisticsShipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsShipmentCountArgs} args - Arguments to filter LogisticsShipments to count.
     * @example
     * // Count the number of LogisticsShipments
     * const count = await prisma.logisticsShipment.count({
     *   where: {
     *     // ... the filter for the LogisticsShipments we want to count
     *   }
     * })
    **/
    count<T extends LogisticsShipmentCountArgs>(args?: Prisma.Subset<T, LogisticsShipmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LogisticsShipmentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LogisticsShipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogisticsShipmentAggregateArgs>(args: Prisma.Subset<T, LogisticsShipmentAggregateArgs>): Prisma.PrismaPromise<GetLogisticsShipmentAggregateType<T>>;
    /**
     * Group by LogisticsShipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsShipmentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LogisticsShipmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LogisticsShipmentGroupByArgs['orderBy'];
    } : {
        orderBy?: LogisticsShipmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LogisticsShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogisticsShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LogisticsShipment model
     */
    readonly fields: LogisticsShipmentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LogisticsShipment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LogisticsShipmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    updates<T extends Prisma.LogisticsShipment$updatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LogisticsShipment$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the LogisticsShipment model
 */
export interface LogisticsShipmentFieldRefs {
    readonly id: Prisma.FieldRef<"LogisticsShipment", 'Int'>;
    readonly userId: Prisma.FieldRef<"LogisticsShipment", 'Int'>;
    readonly artworkTitle: Prisma.FieldRef<"LogisticsShipment", 'String'>;
    readonly carrier: Prisma.FieldRef<"LogisticsShipment", 'String'>;
    readonly status: Prisma.FieldRef<"LogisticsShipment", 'String'>;
    readonly estimatedDeliveryDate: Prisma.FieldRef<"LogisticsShipment", 'String'>;
    readonly securityTier: Prisma.FieldRef<"LogisticsShipment", 'String'>;
    readonly insuranceCoverage: Prisma.FieldRef<"LogisticsShipment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LogisticsShipment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LogisticsShipment", 'DateTime'>;
}
/**
 * LogisticsShipment findUnique
 */
export type LogisticsShipmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * Filter, which LogisticsShipment to fetch.
     */
    where: Prisma.LogisticsShipmentWhereUniqueInput;
};
/**
 * LogisticsShipment findUniqueOrThrow
 */
export type LogisticsShipmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * Filter, which LogisticsShipment to fetch.
     */
    where: Prisma.LogisticsShipmentWhereUniqueInput;
};
/**
 * LogisticsShipment findFirst
 */
export type LogisticsShipmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * Filter, which LogisticsShipment to fetch.
     */
    where?: Prisma.LogisticsShipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogisticsShipments to fetch.
     */
    orderBy?: Prisma.LogisticsShipmentOrderByWithRelationInput | Prisma.LogisticsShipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LogisticsShipments.
     */
    cursor?: Prisma.LogisticsShipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogisticsShipments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogisticsShipments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogisticsShipments.
     */
    distinct?: Prisma.LogisticsShipmentScalarFieldEnum | Prisma.LogisticsShipmentScalarFieldEnum[];
};
/**
 * LogisticsShipment findFirstOrThrow
 */
export type LogisticsShipmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * Filter, which LogisticsShipment to fetch.
     */
    where?: Prisma.LogisticsShipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogisticsShipments to fetch.
     */
    orderBy?: Prisma.LogisticsShipmentOrderByWithRelationInput | Prisma.LogisticsShipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LogisticsShipments.
     */
    cursor?: Prisma.LogisticsShipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogisticsShipments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogisticsShipments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogisticsShipments.
     */
    distinct?: Prisma.LogisticsShipmentScalarFieldEnum | Prisma.LogisticsShipmentScalarFieldEnum[];
};
/**
 * LogisticsShipment findMany
 */
export type LogisticsShipmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * Filter, which LogisticsShipments to fetch.
     */
    where?: Prisma.LogisticsShipmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogisticsShipments to fetch.
     */
    orderBy?: Prisma.LogisticsShipmentOrderByWithRelationInput | Prisma.LogisticsShipmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LogisticsShipments.
     */
    cursor?: Prisma.LogisticsShipmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogisticsShipments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogisticsShipments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogisticsShipments.
     */
    distinct?: Prisma.LogisticsShipmentScalarFieldEnum | Prisma.LogisticsShipmentScalarFieldEnum[];
};
/**
 * LogisticsShipment create
 */
export type LogisticsShipmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a LogisticsShipment.
     */
    data: Prisma.XOR<Prisma.LogisticsShipmentCreateInput, Prisma.LogisticsShipmentUncheckedCreateInput>;
};
/**
 * LogisticsShipment createMany
 */
export type LogisticsShipmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogisticsShipments.
     */
    data: Prisma.LogisticsShipmentCreateManyInput | Prisma.LogisticsShipmentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LogisticsShipment update
 */
export type LogisticsShipmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a LogisticsShipment.
     */
    data: Prisma.XOR<Prisma.LogisticsShipmentUpdateInput, Prisma.LogisticsShipmentUncheckedUpdateInput>;
    /**
     * Choose, which LogisticsShipment to update.
     */
    where: Prisma.LogisticsShipmentWhereUniqueInput;
};
/**
 * LogisticsShipment updateMany
 */
export type LogisticsShipmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LogisticsShipments.
     */
    data: Prisma.XOR<Prisma.LogisticsShipmentUpdateManyMutationInput, Prisma.LogisticsShipmentUncheckedUpdateManyInput>;
    /**
     * Filter which LogisticsShipments to update
     */
    where?: Prisma.LogisticsShipmentWhereInput;
    /**
     * Limit how many LogisticsShipments to update.
     */
    limit?: number;
};
/**
 * LogisticsShipment upsert
 */
export type LogisticsShipmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the LogisticsShipment to update in case it exists.
     */
    where: Prisma.LogisticsShipmentWhereUniqueInput;
    /**
     * In case the LogisticsShipment found by the `where` argument doesn't exist, create a new LogisticsShipment with this data.
     */
    create: Prisma.XOR<Prisma.LogisticsShipmentCreateInput, Prisma.LogisticsShipmentUncheckedCreateInput>;
    /**
     * In case the LogisticsShipment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LogisticsShipmentUpdateInput, Prisma.LogisticsShipmentUncheckedUpdateInput>;
};
/**
 * LogisticsShipment delete
 */
export type LogisticsShipmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
    /**
     * Filter which LogisticsShipment to delete.
     */
    where: Prisma.LogisticsShipmentWhereUniqueInput;
};
/**
 * LogisticsShipment deleteMany
 */
export type LogisticsShipmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsShipments to delete
     */
    where?: Prisma.LogisticsShipmentWhereInput;
    /**
     * Limit how many LogisticsShipments to delete.
     */
    limit?: number;
};
/**
 * LogisticsShipment.updates
 */
export type LogisticsShipment$updatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentUpdate
     */
    select?: Prisma.ShipmentUpdateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShipmentUpdate
     */
    omit?: Prisma.ShipmentUpdateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShipmentUpdateInclude<ExtArgs> | null;
    where?: Prisma.ShipmentUpdateWhereInput;
    orderBy?: Prisma.ShipmentUpdateOrderByWithRelationInput | Prisma.ShipmentUpdateOrderByWithRelationInput[];
    cursor?: Prisma.ShipmentUpdateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShipmentUpdateScalarFieldEnum | Prisma.ShipmentUpdateScalarFieldEnum[];
};
/**
 * LogisticsShipment without action
 */
export type LogisticsShipmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsShipment
     */
    select?: Prisma.LogisticsShipmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogisticsShipment
     */
    omit?: Prisma.LogisticsShipmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogisticsShipmentInclude<ExtArgs> | null;
};
//# sourceMappingURL=LogisticsShipment.d.ts.map