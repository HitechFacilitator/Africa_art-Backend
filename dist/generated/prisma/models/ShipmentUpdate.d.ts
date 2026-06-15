import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ShipmentUpdate
 *
 */
export type ShipmentUpdateModel = runtime.Types.Result.DefaultSelection<Prisma.$ShipmentUpdatePayload>;
export type AggregateShipmentUpdate = {
    _count: ShipmentUpdateCountAggregateOutputType | null;
    _avg: ShipmentUpdateAvgAggregateOutputType | null;
    _sum: ShipmentUpdateSumAggregateOutputType | null;
    _min: ShipmentUpdateMinAggregateOutputType | null;
    _max: ShipmentUpdateMaxAggregateOutputType | null;
};
export type ShipmentUpdateAvgAggregateOutputType = {
    id: number | null;
    shipmentId: number | null;
};
export type ShipmentUpdateSumAggregateOutputType = {
    id: number | null;
    shipmentId: number | null;
};
export type ShipmentUpdateMinAggregateOutputType = {
    id: number | null;
    shipmentId: number | null;
    date: string | null;
    status: string | null;
    location: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type ShipmentUpdateMaxAggregateOutputType = {
    id: number | null;
    shipmentId: number | null;
    date: string | null;
    status: string | null;
    location: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type ShipmentUpdateCountAggregateOutputType = {
    id: number;
    shipmentId: number;
    date: number;
    status: number;
    location: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type ShipmentUpdateAvgAggregateInputType = {
    id?: true;
    shipmentId?: true;
};
export type ShipmentUpdateSumAggregateInputType = {
    id?: true;
    shipmentId?: true;
};
export type ShipmentUpdateMinAggregateInputType = {
    id?: true;
    shipmentId?: true;
    date?: true;
    status?: true;
    location?: true;
    description?: true;
    createdAt?: true;
};
export type ShipmentUpdateMaxAggregateInputType = {
    id?: true;
    shipmentId?: true;
    date?: true;
    status?: true;
    location?: true;
    description?: true;
    createdAt?: true;
};
export type ShipmentUpdateCountAggregateInputType = {
    id?: true;
    shipmentId?: true;
    date?: true;
    status?: true;
    location?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type ShipmentUpdateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentUpdate to aggregate.
     */
    where?: Prisma.ShipmentUpdateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShipmentUpdates to fetch.
     */
    orderBy?: Prisma.ShipmentUpdateOrderByWithRelationInput | Prisma.ShipmentUpdateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShipmentUpdateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShipmentUpdates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShipmentUpdates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShipmentUpdates
    **/
    _count?: true | ShipmentUpdateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShipmentUpdateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShipmentUpdateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentUpdateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentUpdateMaxAggregateInputType;
};
export type GetShipmentUpdateAggregateType<T extends ShipmentUpdateAggregateArgs> = {
    [P in keyof T & keyof AggregateShipmentUpdate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShipmentUpdate[P]> : Prisma.GetScalarType<T[P], AggregateShipmentUpdate[P]>;
};
export type ShipmentUpdateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShipmentUpdateWhereInput;
    orderBy?: Prisma.ShipmentUpdateOrderByWithAggregationInput | Prisma.ShipmentUpdateOrderByWithAggregationInput[];
    by: Prisma.ShipmentUpdateScalarFieldEnum[] | Prisma.ShipmentUpdateScalarFieldEnum;
    having?: Prisma.ShipmentUpdateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShipmentUpdateCountAggregateInputType | true;
    _avg?: ShipmentUpdateAvgAggregateInputType;
    _sum?: ShipmentUpdateSumAggregateInputType;
    _min?: ShipmentUpdateMinAggregateInputType;
    _max?: ShipmentUpdateMaxAggregateInputType;
};
export type ShipmentUpdateGroupByOutputType = {
    id: number;
    shipmentId: number;
    date: string | null;
    status: string | null;
    location: string | null;
    description: string | null;
    createdAt: Date;
    _count: ShipmentUpdateCountAggregateOutputType | null;
    _avg: ShipmentUpdateAvgAggregateOutputType | null;
    _sum: ShipmentUpdateSumAggregateOutputType | null;
    _min: ShipmentUpdateMinAggregateOutputType | null;
    _max: ShipmentUpdateMaxAggregateOutputType | null;
};
export type GetShipmentUpdateGroupByPayload<T extends ShipmentUpdateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShipmentUpdateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShipmentUpdateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShipmentUpdateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShipmentUpdateGroupByOutputType[P]>;
}>>;
export type ShipmentUpdateWhereInput = {
    AND?: Prisma.ShipmentUpdateWhereInput | Prisma.ShipmentUpdateWhereInput[];
    OR?: Prisma.ShipmentUpdateWhereInput[];
    NOT?: Prisma.ShipmentUpdateWhereInput | Prisma.ShipmentUpdateWhereInput[];
    id?: Prisma.IntFilter<"ShipmentUpdate"> | number;
    shipmentId?: Prisma.IntFilter<"ShipmentUpdate"> | number;
    date?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    status?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    location?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    description?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShipmentUpdate"> | Date | string;
    shipment?: Prisma.XOR<Prisma.LogisticsShipmentScalarRelationFilter, Prisma.LogisticsShipmentWhereInput>;
};
export type ShipmentUpdateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    date?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    shipment?: Prisma.LogisticsShipmentOrderByWithRelationInput;
    _relevance?: Prisma.ShipmentUpdateOrderByRelevanceInput;
};
export type ShipmentUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ShipmentUpdateWhereInput | Prisma.ShipmentUpdateWhereInput[];
    OR?: Prisma.ShipmentUpdateWhereInput[];
    NOT?: Prisma.ShipmentUpdateWhereInput | Prisma.ShipmentUpdateWhereInput[];
    shipmentId?: Prisma.IntFilter<"ShipmentUpdate"> | number;
    date?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    status?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    location?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    description?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShipmentUpdate"> | Date | string;
    shipment?: Prisma.XOR<Prisma.LogisticsShipmentScalarRelationFilter, Prisma.LogisticsShipmentWhereInput>;
}, "id">;
export type ShipmentUpdateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    date?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShipmentUpdateCountOrderByAggregateInput;
    _avg?: Prisma.ShipmentUpdateAvgOrderByAggregateInput;
    _max?: Prisma.ShipmentUpdateMaxOrderByAggregateInput;
    _min?: Prisma.ShipmentUpdateMinOrderByAggregateInput;
    _sum?: Prisma.ShipmentUpdateSumOrderByAggregateInput;
};
export type ShipmentUpdateScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShipmentUpdateScalarWhereWithAggregatesInput | Prisma.ShipmentUpdateScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShipmentUpdateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShipmentUpdateScalarWhereWithAggregatesInput | Prisma.ShipmentUpdateScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ShipmentUpdate"> | number;
    shipmentId?: Prisma.IntWithAggregatesFilter<"ShipmentUpdate"> | number;
    date?: Prisma.StringNullableWithAggregatesFilter<"ShipmentUpdate"> | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"ShipmentUpdate"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"ShipmentUpdate"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"ShipmentUpdate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShipmentUpdate"> | Date | string;
};
export type ShipmentUpdateCreateInput = {
    date?: string | null;
    status?: string | null;
    location?: string | null;
    description?: string | null;
    createdAt?: Date | string;
    shipment: Prisma.LogisticsShipmentCreateNestedOneWithoutUpdatesInput;
};
export type ShipmentUpdateUncheckedCreateInput = {
    id?: number;
    shipmentId: number;
    date?: string | null;
    status?: string | null;
    location?: string | null;
    description?: string | null;
    createdAt?: Date | string;
};
export type ShipmentUpdateUpdateInput = {
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    shipment?: Prisma.LogisticsShipmentUpdateOneRequiredWithoutUpdatesNestedInput;
};
export type ShipmentUpdateUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shipmentId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUpdateCreateManyInput = {
    id?: number;
    shipmentId: number;
    date?: string | null;
    status?: string | null;
    location?: string | null;
    description?: string | null;
    createdAt?: Date | string;
};
export type ShipmentUpdateUpdateManyMutationInput = {
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUpdateUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    shipmentId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUpdateListRelationFilter = {
    every?: Prisma.ShipmentUpdateWhereInput;
    some?: Prisma.ShipmentUpdateWhereInput;
    none?: Prisma.ShipmentUpdateWhereInput;
};
export type ShipmentUpdateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShipmentUpdateOrderByRelevanceInput = {
    fields: Prisma.ShipmentUpdateOrderByRelevanceFieldEnum | Prisma.ShipmentUpdateOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ShipmentUpdateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentUpdateAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
};
export type ShipmentUpdateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentUpdateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShipmentUpdateSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    shipmentId?: Prisma.SortOrder;
};
export type ShipmentUpdateCreateNestedManyWithoutShipmentInput = {
    create?: Prisma.XOR<Prisma.ShipmentUpdateCreateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentUpdateCreateWithoutShipmentInput[] | Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput | Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput[];
    createMany?: Prisma.ShipmentUpdateCreateManyShipmentInputEnvelope;
    connect?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
};
export type ShipmentUpdateUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: Prisma.XOR<Prisma.ShipmentUpdateCreateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentUpdateCreateWithoutShipmentInput[] | Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput | Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput[];
    createMany?: Prisma.ShipmentUpdateCreateManyShipmentInputEnvelope;
    connect?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
};
export type ShipmentUpdateUpdateManyWithoutShipmentNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentUpdateCreateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentUpdateCreateWithoutShipmentInput[] | Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput | Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput[];
    upsert?: Prisma.ShipmentUpdateUpsertWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentUpdateUpsertWithWhereUniqueWithoutShipmentInput[];
    createMany?: Prisma.ShipmentUpdateCreateManyShipmentInputEnvelope;
    set?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    disconnect?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    delete?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    connect?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateUpdateWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentUpdateUpdateWithWhereUniqueWithoutShipmentInput[];
    updateMany?: Prisma.ShipmentUpdateUpdateManyWithWhereWithoutShipmentInput | Prisma.ShipmentUpdateUpdateManyWithWhereWithoutShipmentInput[];
    deleteMany?: Prisma.ShipmentUpdateScalarWhereInput | Prisma.ShipmentUpdateScalarWhereInput[];
};
export type ShipmentUpdateUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: Prisma.XOR<Prisma.ShipmentUpdateCreateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput> | Prisma.ShipmentUpdateCreateWithoutShipmentInput[] | Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput[];
    connectOrCreate?: Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput | Prisma.ShipmentUpdateCreateOrConnectWithoutShipmentInput[];
    upsert?: Prisma.ShipmentUpdateUpsertWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentUpdateUpsertWithWhereUniqueWithoutShipmentInput[];
    createMany?: Prisma.ShipmentUpdateCreateManyShipmentInputEnvelope;
    set?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    disconnect?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    delete?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    connect?: Prisma.ShipmentUpdateWhereUniqueInput | Prisma.ShipmentUpdateWhereUniqueInput[];
    update?: Prisma.ShipmentUpdateUpdateWithWhereUniqueWithoutShipmentInput | Prisma.ShipmentUpdateUpdateWithWhereUniqueWithoutShipmentInput[];
    updateMany?: Prisma.ShipmentUpdateUpdateManyWithWhereWithoutShipmentInput | Prisma.ShipmentUpdateUpdateManyWithWhereWithoutShipmentInput[];
    deleteMany?: Prisma.ShipmentUpdateScalarWhereInput | Prisma.ShipmentUpdateScalarWhereInput[];
};
export type ShipmentUpdateCreateWithoutShipmentInput = {
    date?: string | null;
    status?: string | null;
    location?: string | null;
    description?: string | null;
    createdAt?: Date | string;
};
export type ShipmentUpdateUncheckedCreateWithoutShipmentInput = {
    id?: number;
    date?: string | null;
    status?: string | null;
    location?: string | null;
    description?: string | null;
    createdAt?: Date | string;
};
export type ShipmentUpdateCreateOrConnectWithoutShipmentInput = {
    where: Prisma.ShipmentUpdateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShipmentUpdateCreateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput>;
};
export type ShipmentUpdateCreateManyShipmentInputEnvelope = {
    data: Prisma.ShipmentUpdateCreateManyShipmentInput | Prisma.ShipmentUpdateCreateManyShipmentInput[];
    skipDuplicates?: boolean;
};
export type ShipmentUpdateUpsertWithWhereUniqueWithoutShipmentInput = {
    where: Prisma.ShipmentUpdateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShipmentUpdateUpdateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedUpdateWithoutShipmentInput>;
    create: Prisma.XOR<Prisma.ShipmentUpdateCreateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedCreateWithoutShipmentInput>;
};
export type ShipmentUpdateUpdateWithWhereUniqueWithoutShipmentInput = {
    where: Prisma.ShipmentUpdateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateUpdateWithoutShipmentInput, Prisma.ShipmentUpdateUncheckedUpdateWithoutShipmentInput>;
};
export type ShipmentUpdateUpdateManyWithWhereWithoutShipmentInput = {
    where: Prisma.ShipmentUpdateScalarWhereInput;
    data: Prisma.XOR<Prisma.ShipmentUpdateUpdateManyMutationInput, Prisma.ShipmentUpdateUncheckedUpdateManyWithoutShipmentInput>;
};
export type ShipmentUpdateScalarWhereInput = {
    AND?: Prisma.ShipmentUpdateScalarWhereInput | Prisma.ShipmentUpdateScalarWhereInput[];
    OR?: Prisma.ShipmentUpdateScalarWhereInput[];
    NOT?: Prisma.ShipmentUpdateScalarWhereInput | Prisma.ShipmentUpdateScalarWhereInput[];
    id?: Prisma.IntFilter<"ShipmentUpdate"> | number;
    shipmentId?: Prisma.IntFilter<"ShipmentUpdate"> | number;
    date?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    status?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    location?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    description?: Prisma.StringNullableFilter<"ShipmentUpdate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShipmentUpdate"> | Date | string;
};
export type ShipmentUpdateCreateManyShipmentInput = {
    id?: number;
    date?: string | null;
    status?: string | null;
    location?: string | null;
    description?: string | null;
    createdAt?: Date | string;
};
export type ShipmentUpdateUpdateWithoutShipmentInput = {
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUpdateUncheckedUpdateWithoutShipmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUpdateUncheckedUpdateManyWithoutShipmentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShipmentUpdateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    shipmentId?: boolean;
    date?: boolean;
    status?: boolean;
    location?: boolean;
    description?: boolean;
    createdAt?: boolean;
    shipment?: boolean | Prisma.LogisticsShipmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shipmentUpdate"]>;
export type ShipmentUpdateSelectScalar = {
    id?: boolean;
    shipmentId?: boolean;
    date?: boolean;
    status?: boolean;
    location?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type ShipmentUpdateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "shipmentId" | "date" | "status" | "location" | "description" | "createdAt", ExtArgs["result"]["shipmentUpdate"]>;
export type ShipmentUpdateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    shipment?: boolean | Prisma.LogisticsShipmentDefaultArgs<ExtArgs>;
};
export type $ShipmentUpdatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShipmentUpdate";
    objects: {
        shipment: Prisma.$LogisticsShipmentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        shipmentId: number;
        date: string | null;
        status: string | null;
        location: string | null;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["shipmentUpdate"]>;
    composites: {};
};
export type ShipmentUpdateGetPayload<S extends boolean | null | undefined | ShipmentUpdateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload, S>;
export type ShipmentUpdateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShipmentUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShipmentUpdateCountAggregateInputType | true;
};
export interface ShipmentUpdateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShipmentUpdate'];
        meta: {
            name: 'ShipmentUpdate';
        };
    };
    /**
     * Find zero or one ShipmentUpdate that matches the filter.
     * @param {ShipmentUpdateFindUniqueArgs} args - Arguments to find a ShipmentUpdate
     * @example
     * // Get one ShipmentUpdate
     * const shipmentUpdate = await prisma.shipmentUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentUpdateFindUniqueArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShipmentUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentUpdateFindUniqueOrThrowArgs} args - Arguments to find a ShipmentUpdate
     * @example
     * // Get one ShipmentUpdate
     * const shipmentUpdate = await prisma.shipmentUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentUpdateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShipmentUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateFindFirstArgs} args - Arguments to find a ShipmentUpdate
     * @example
     * // Get one ShipmentUpdate
     * const shipmentUpdate = await prisma.shipmentUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentUpdateFindFirstArgs>(args?: Prisma.SelectSubset<T, ShipmentUpdateFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShipmentUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateFindFirstOrThrowArgs} args - Arguments to find a ShipmentUpdate
     * @example
     * // Get one ShipmentUpdate
     * const shipmentUpdate = await prisma.shipmentUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentUpdateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShipmentUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShipmentUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentUpdates
     * const shipmentUpdates = await prisma.shipmentUpdate.findMany()
     *
     * // Get first 10 ShipmentUpdates
     * const shipmentUpdates = await prisma.shipmentUpdate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shipmentUpdateWithIdOnly = await prisma.shipmentUpdate.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShipmentUpdateFindManyArgs>(args?: Prisma.SelectSubset<T, ShipmentUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShipmentUpdate.
     * @param {ShipmentUpdateCreateArgs} args - Arguments to create a ShipmentUpdate.
     * @example
     * // Create one ShipmentUpdate
     * const ShipmentUpdate = await prisma.shipmentUpdate.create({
     *   data: {
     *     // ... data to create a ShipmentUpdate
     *   }
     * })
     *
     */
    create<T extends ShipmentUpdateCreateArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateCreateArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShipmentUpdates.
     * @param {ShipmentUpdateCreateManyArgs} args - Arguments to create many ShipmentUpdates.
     * @example
     * // Create many ShipmentUpdates
     * const shipmentUpdate = await prisma.shipmentUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShipmentUpdateCreateManyArgs>(args?: Prisma.SelectSubset<T, ShipmentUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a ShipmentUpdate.
     * @param {ShipmentUpdateDeleteArgs} args - Arguments to delete one ShipmentUpdate.
     * @example
     * // Delete one ShipmentUpdate
     * const ShipmentUpdate = await prisma.shipmentUpdate.delete({
     *   where: {
     *     // ... filter to delete one ShipmentUpdate
     *   }
     * })
     *
     */
    delete<T extends ShipmentUpdateDeleteArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateDeleteArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShipmentUpdate.
     * @param {ShipmentUpdateUpdateArgs} args - Arguments to update one ShipmentUpdate.
     * @example
     * // Update one ShipmentUpdate
     * const shipmentUpdate = await prisma.shipmentUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShipmentUpdateUpdateArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateUpdateArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShipmentUpdates.
     * @param {ShipmentUpdateDeleteManyArgs} args - Arguments to filter ShipmentUpdates to delete.
     * @example
     * // Delete a few ShipmentUpdates
     * const { count } = await prisma.shipmentUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShipmentUpdateDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShipmentUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShipmentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentUpdates
     * const shipmentUpdate = await prisma.shipmentUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShipmentUpdateUpdateManyArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one ShipmentUpdate.
     * @param {ShipmentUpdateUpsertArgs} args - Arguments to update or create a ShipmentUpdate.
     * @example
     * // Update or create a ShipmentUpdate
     * const shipmentUpdate = await prisma.shipmentUpdate.upsert({
     *   create: {
     *     // ... data to create a ShipmentUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentUpdate we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpdateUpsertArgs>(args: Prisma.SelectSubset<T, ShipmentUpdateUpsertArgs<ExtArgs>>): Prisma.Prisma__ShipmentUpdateClient<runtime.Types.Result.GetResult<Prisma.$ShipmentUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShipmentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateCountArgs} args - Arguments to filter ShipmentUpdates to count.
     * @example
     * // Count the number of ShipmentUpdates
     * const count = await prisma.shipmentUpdate.count({
     *   where: {
     *     // ... the filter for the ShipmentUpdates we want to count
     *   }
     * })
    **/
    count<T extends ShipmentUpdateCountArgs>(args?: Prisma.Subset<T, ShipmentUpdateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShipmentUpdateCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShipmentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentUpdateAggregateArgs>(args: Prisma.Subset<T, ShipmentUpdateAggregateArgs>): Prisma.PrismaPromise<GetShipmentUpdateAggregateType<T>>;
    /**
     * Group by ShipmentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShipmentUpdateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShipmentUpdateGroupByArgs['orderBy'];
    } : {
        orderBy?: ShipmentUpdateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShipmentUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShipmentUpdate model
     */
    readonly fields: ShipmentUpdateFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShipmentUpdate.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShipmentUpdateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    shipment<T extends Prisma.LogisticsShipmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LogisticsShipmentDefaultArgs<ExtArgs>>): Prisma.Prisma__LogisticsShipmentClient<runtime.Types.Result.GetResult<Prisma.$LogisticsShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShipmentUpdate model
 */
export interface ShipmentUpdateFieldRefs {
    readonly id: Prisma.FieldRef<"ShipmentUpdate", 'Int'>;
    readonly shipmentId: Prisma.FieldRef<"ShipmentUpdate", 'Int'>;
    readonly date: Prisma.FieldRef<"ShipmentUpdate", 'String'>;
    readonly status: Prisma.FieldRef<"ShipmentUpdate", 'String'>;
    readonly location: Prisma.FieldRef<"ShipmentUpdate", 'String'>;
    readonly description: Prisma.FieldRef<"ShipmentUpdate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShipmentUpdate", 'DateTime'>;
}
/**
 * ShipmentUpdate findUnique
 */
export type ShipmentUpdateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShipmentUpdate to fetch.
     */
    where: Prisma.ShipmentUpdateWhereUniqueInput;
};
/**
 * ShipmentUpdate findUniqueOrThrow
 */
export type ShipmentUpdateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShipmentUpdate to fetch.
     */
    where: Prisma.ShipmentUpdateWhereUniqueInput;
};
/**
 * ShipmentUpdate findFirst
 */
export type ShipmentUpdateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShipmentUpdate to fetch.
     */
    where?: Prisma.ShipmentUpdateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShipmentUpdates to fetch.
     */
    orderBy?: Prisma.ShipmentUpdateOrderByWithRelationInput | Prisma.ShipmentUpdateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShipmentUpdates.
     */
    cursor?: Prisma.ShipmentUpdateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShipmentUpdates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShipmentUpdates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShipmentUpdates.
     */
    distinct?: Prisma.ShipmentUpdateScalarFieldEnum | Prisma.ShipmentUpdateScalarFieldEnum[];
};
/**
 * ShipmentUpdate findFirstOrThrow
 */
export type ShipmentUpdateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShipmentUpdate to fetch.
     */
    where?: Prisma.ShipmentUpdateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShipmentUpdates to fetch.
     */
    orderBy?: Prisma.ShipmentUpdateOrderByWithRelationInput | Prisma.ShipmentUpdateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShipmentUpdates.
     */
    cursor?: Prisma.ShipmentUpdateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShipmentUpdates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShipmentUpdates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShipmentUpdates.
     */
    distinct?: Prisma.ShipmentUpdateScalarFieldEnum | Prisma.ShipmentUpdateScalarFieldEnum[];
};
/**
 * ShipmentUpdate findMany
 */
export type ShipmentUpdateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShipmentUpdates to fetch.
     */
    where?: Prisma.ShipmentUpdateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShipmentUpdates to fetch.
     */
    orderBy?: Prisma.ShipmentUpdateOrderByWithRelationInput | Prisma.ShipmentUpdateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShipmentUpdates.
     */
    cursor?: Prisma.ShipmentUpdateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShipmentUpdates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShipmentUpdates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShipmentUpdates.
     */
    distinct?: Prisma.ShipmentUpdateScalarFieldEnum | Prisma.ShipmentUpdateScalarFieldEnum[];
};
/**
 * ShipmentUpdate create
 */
export type ShipmentUpdateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ShipmentUpdate.
     */
    data: Prisma.XOR<Prisma.ShipmentUpdateCreateInput, Prisma.ShipmentUpdateUncheckedCreateInput>;
};
/**
 * ShipmentUpdate createMany
 */
export type ShipmentUpdateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentUpdates.
     */
    data: Prisma.ShipmentUpdateCreateManyInput | Prisma.ShipmentUpdateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShipmentUpdate update
 */
export type ShipmentUpdateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ShipmentUpdate.
     */
    data: Prisma.XOR<Prisma.ShipmentUpdateUpdateInput, Prisma.ShipmentUpdateUncheckedUpdateInput>;
    /**
     * Choose, which ShipmentUpdate to update.
     */
    where: Prisma.ShipmentUpdateWhereUniqueInput;
};
/**
 * ShipmentUpdate updateMany
 */
export type ShipmentUpdateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentUpdates.
     */
    data: Prisma.XOR<Prisma.ShipmentUpdateUpdateManyMutationInput, Prisma.ShipmentUpdateUncheckedUpdateManyInput>;
    /**
     * Filter which ShipmentUpdates to update
     */
    where?: Prisma.ShipmentUpdateWhereInput;
    /**
     * Limit how many ShipmentUpdates to update.
     */
    limit?: number;
};
/**
 * ShipmentUpdate upsert
 */
export type ShipmentUpdateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ShipmentUpdate to update in case it exists.
     */
    where: Prisma.ShipmentUpdateWhereUniqueInput;
    /**
     * In case the ShipmentUpdate found by the `where` argument doesn't exist, create a new ShipmentUpdate with this data.
     */
    create: Prisma.XOR<Prisma.ShipmentUpdateCreateInput, Prisma.ShipmentUpdateUncheckedCreateInput>;
    /**
     * In case the ShipmentUpdate was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShipmentUpdateUpdateInput, Prisma.ShipmentUpdateUncheckedUpdateInput>;
};
/**
 * ShipmentUpdate delete
 */
export type ShipmentUpdateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ShipmentUpdate to delete.
     */
    where: Prisma.ShipmentUpdateWhereUniqueInput;
};
/**
 * ShipmentUpdate deleteMany
 */
export type ShipmentUpdateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentUpdates to delete
     */
    where?: Prisma.ShipmentUpdateWhereInput;
    /**
     * Limit how many ShipmentUpdates to delete.
     */
    limit?: number;
};
/**
 * ShipmentUpdate without action
 */
export type ShipmentUpdateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ShipmentUpdate.d.ts.map