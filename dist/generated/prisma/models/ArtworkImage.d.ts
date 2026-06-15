import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ArtworkImage
 *
 */
export type ArtworkImageModel = runtime.Types.Result.DefaultSelection<Prisma.$ArtworkImagePayload>;
export type AggregateArtworkImage = {
    _count: ArtworkImageCountAggregateOutputType | null;
    _avg: ArtworkImageAvgAggregateOutputType | null;
    _sum: ArtworkImageSumAggregateOutputType | null;
    _min: ArtworkImageMinAggregateOutputType | null;
    _max: ArtworkImageMaxAggregateOutputType | null;
};
export type ArtworkImageAvgAggregateOutputType = {
    id: number | null;
    order: number | null;
    artworkId: number | null;
};
export type ArtworkImageSumAggregateOutputType = {
    id: number | null;
    order: number | null;
    artworkId: number | null;
};
export type ArtworkImageMinAggregateOutputType = {
    id: number | null;
    filename: string | null;
    path: string | null;
    isPrimary: boolean | null;
    order: number | null;
    artworkId: number | null;
    createdAt: Date | null;
};
export type ArtworkImageMaxAggregateOutputType = {
    id: number | null;
    filename: string | null;
    path: string | null;
    isPrimary: boolean | null;
    order: number | null;
    artworkId: number | null;
    createdAt: Date | null;
};
export type ArtworkImageCountAggregateOutputType = {
    id: number;
    filename: number;
    path: number;
    isPrimary: number;
    order: number;
    artworkId: number;
    createdAt: number;
    _all: number;
};
export type ArtworkImageAvgAggregateInputType = {
    id?: true;
    order?: true;
    artworkId?: true;
};
export type ArtworkImageSumAggregateInputType = {
    id?: true;
    order?: true;
    artworkId?: true;
};
export type ArtworkImageMinAggregateInputType = {
    id?: true;
    filename?: true;
    path?: true;
    isPrimary?: true;
    order?: true;
    artworkId?: true;
    createdAt?: true;
};
export type ArtworkImageMaxAggregateInputType = {
    id?: true;
    filename?: true;
    path?: true;
    isPrimary?: true;
    order?: true;
    artworkId?: true;
    createdAt?: true;
};
export type ArtworkImageCountAggregateInputType = {
    id?: true;
    filename?: true;
    path?: true;
    isPrimary?: true;
    order?: true;
    artworkId?: true;
    createdAt?: true;
    _all?: true;
};
export type ArtworkImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ArtworkImage to aggregate.
     */
    where?: Prisma.ArtworkImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArtworkImages to fetch.
     */
    orderBy?: Prisma.ArtworkImageOrderByWithRelationInput | Prisma.ArtworkImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ArtworkImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArtworkImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArtworkImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ArtworkImages
    **/
    _count?: true | ArtworkImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ArtworkImageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ArtworkImageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ArtworkImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ArtworkImageMaxAggregateInputType;
};
export type GetArtworkImageAggregateType<T extends ArtworkImageAggregateArgs> = {
    [P in keyof T & keyof AggregateArtworkImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArtworkImage[P]> : Prisma.GetScalarType<T[P], AggregateArtworkImage[P]>;
};
export type ArtworkImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArtworkImageWhereInput;
    orderBy?: Prisma.ArtworkImageOrderByWithAggregationInput | Prisma.ArtworkImageOrderByWithAggregationInput[];
    by: Prisma.ArtworkImageScalarFieldEnum[] | Prisma.ArtworkImageScalarFieldEnum;
    having?: Prisma.ArtworkImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArtworkImageCountAggregateInputType | true;
    _avg?: ArtworkImageAvgAggregateInputType;
    _sum?: ArtworkImageSumAggregateInputType;
    _min?: ArtworkImageMinAggregateInputType;
    _max?: ArtworkImageMaxAggregateInputType;
};
export type ArtworkImageGroupByOutputType = {
    id: number;
    filename: string;
    path: string;
    isPrimary: boolean;
    order: number;
    artworkId: number;
    createdAt: Date;
    _count: ArtworkImageCountAggregateOutputType | null;
    _avg: ArtworkImageAvgAggregateOutputType | null;
    _sum: ArtworkImageSumAggregateOutputType | null;
    _min: ArtworkImageMinAggregateOutputType | null;
    _max: ArtworkImageMaxAggregateOutputType | null;
};
export type GetArtworkImageGroupByPayload<T extends ArtworkImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ArtworkImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ArtworkImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ArtworkImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ArtworkImageGroupByOutputType[P]>;
}>>;
export type ArtworkImageWhereInput = {
    AND?: Prisma.ArtworkImageWhereInput | Prisma.ArtworkImageWhereInput[];
    OR?: Prisma.ArtworkImageWhereInput[];
    NOT?: Prisma.ArtworkImageWhereInput | Prisma.ArtworkImageWhereInput[];
    id?: Prisma.IntFilter<"ArtworkImage"> | number;
    filename?: Prisma.StringFilter<"ArtworkImage"> | string;
    path?: Prisma.StringFilter<"ArtworkImage"> | string;
    isPrimary?: Prisma.BoolFilter<"ArtworkImage"> | boolean;
    order?: Prisma.IntFilter<"ArtworkImage"> | number;
    artworkId?: Prisma.IntFilter<"ArtworkImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"ArtworkImage"> | Date | string;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
};
export type ArtworkImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    artwork?: Prisma.ArtworkOrderByWithRelationInput;
    _relevance?: Prisma.ArtworkImageOrderByRelevanceInput;
};
export type ArtworkImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ArtworkImageWhereInput | Prisma.ArtworkImageWhereInput[];
    OR?: Prisma.ArtworkImageWhereInput[];
    NOT?: Prisma.ArtworkImageWhereInput | Prisma.ArtworkImageWhereInput[];
    filename?: Prisma.StringFilter<"ArtworkImage"> | string;
    path?: Prisma.StringFilter<"ArtworkImage"> | string;
    isPrimary?: Prisma.BoolFilter<"ArtworkImage"> | boolean;
    order?: Prisma.IntFilter<"ArtworkImage"> | number;
    artworkId?: Prisma.IntFilter<"ArtworkImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"ArtworkImage"> | Date | string;
    artwork?: Prisma.XOR<Prisma.ArtworkScalarRelationFilter, Prisma.ArtworkWhereInput>;
}, "id">;
export type ArtworkImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ArtworkImageCountOrderByAggregateInput;
    _avg?: Prisma.ArtworkImageAvgOrderByAggregateInput;
    _max?: Prisma.ArtworkImageMaxOrderByAggregateInput;
    _min?: Prisma.ArtworkImageMinOrderByAggregateInput;
    _sum?: Prisma.ArtworkImageSumOrderByAggregateInput;
};
export type ArtworkImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.ArtworkImageScalarWhereWithAggregatesInput | Prisma.ArtworkImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.ArtworkImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ArtworkImageScalarWhereWithAggregatesInput | Prisma.ArtworkImageScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ArtworkImage"> | number;
    filename?: Prisma.StringWithAggregatesFilter<"ArtworkImage"> | string;
    path?: Prisma.StringWithAggregatesFilter<"ArtworkImage"> | string;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"ArtworkImage"> | boolean;
    order?: Prisma.IntWithAggregatesFilter<"ArtworkImage"> | number;
    artworkId?: Prisma.IntWithAggregatesFilter<"ArtworkImage"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ArtworkImage"> | Date | string;
};
export type ArtworkImageCreateInput = {
    filename: string;
    path: string;
    isPrimary?: boolean;
    order?: number;
    createdAt?: Date | string;
    artwork: Prisma.ArtworkCreateNestedOneWithoutImagesInput;
};
export type ArtworkImageUncheckedCreateInput = {
    id?: number;
    filename: string;
    path: string;
    isPrimary?: boolean;
    order?: number;
    artworkId: number;
    createdAt?: Date | string;
};
export type ArtworkImageUpdateInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artwork?: Prisma.ArtworkUpdateOneRequiredWithoutImagesNestedInput;
};
export type ArtworkImageUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkImageCreateManyInput = {
    id?: number;
    filename: string;
    path: string;
    isPrimary?: boolean;
    order?: number;
    artworkId: number;
    createdAt?: Date | string;
};
export type ArtworkImageUpdateManyMutationInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkImageUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    artworkId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkImageListRelationFilter = {
    every?: Prisma.ArtworkImageWhereInput;
    some?: Prisma.ArtworkImageWhereInput;
    none?: Prisma.ArtworkImageWhereInput;
};
export type ArtworkImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ArtworkImageOrderByRelevanceInput = {
    fields: Prisma.ArtworkImageOrderByRelevanceFieldEnum | Prisma.ArtworkImageOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ArtworkImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ArtworkImageAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
};
export type ArtworkImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ArtworkImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ArtworkImageSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    artworkId?: Prisma.SortOrder;
};
export type ArtworkImageCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.ArtworkImageCreateWithoutArtworkInput, Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput> | Prisma.ArtworkImageCreateWithoutArtworkInput[] | Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput | Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.ArtworkImageCreateManyArtworkInputEnvelope;
    connect?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
};
export type ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput = {
    create?: Prisma.XOR<Prisma.ArtworkImageCreateWithoutArtworkInput, Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput> | Prisma.ArtworkImageCreateWithoutArtworkInput[] | Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput | Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput[];
    createMany?: Prisma.ArtworkImageCreateManyArtworkInputEnvelope;
    connect?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
};
export type ArtworkImageUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkImageCreateWithoutArtworkInput, Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput> | Prisma.ArtworkImageCreateWithoutArtworkInput[] | Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput | Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.ArtworkImageUpsertWithWhereUniqueWithoutArtworkInput | Prisma.ArtworkImageUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.ArtworkImageCreateManyArtworkInputEnvelope;
    set?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    disconnect?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    delete?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    connect?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    update?: Prisma.ArtworkImageUpdateWithWhereUniqueWithoutArtworkInput | Prisma.ArtworkImageUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.ArtworkImageUpdateManyWithWhereWithoutArtworkInput | Prisma.ArtworkImageUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.ArtworkImageScalarWhereInput | Prisma.ArtworkImageScalarWhereInput[];
};
export type ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkImageCreateWithoutArtworkInput, Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput> | Prisma.ArtworkImageCreateWithoutArtworkInput[] | Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput[];
    connectOrCreate?: Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput | Prisma.ArtworkImageCreateOrConnectWithoutArtworkInput[];
    upsert?: Prisma.ArtworkImageUpsertWithWhereUniqueWithoutArtworkInput | Prisma.ArtworkImageUpsertWithWhereUniqueWithoutArtworkInput[];
    createMany?: Prisma.ArtworkImageCreateManyArtworkInputEnvelope;
    set?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    disconnect?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    delete?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    connect?: Prisma.ArtworkImageWhereUniqueInput | Prisma.ArtworkImageWhereUniqueInput[];
    update?: Prisma.ArtworkImageUpdateWithWhereUniqueWithoutArtworkInput | Prisma.ArtworkImageUpdateWithWhereUniqueWithoutArtworkInput[];
    updateMany?: Prisma.ArtworkImageUpdateManyWithWhereWithoutArtworkInput | Prisma.ArtworkImageUpdateManyWithWhereWithoutArtworkInput[];
    deleteMany?: Prisma.ArtworkImageScalarWhereInput | Prisma.ArtworkImageScalarWhereInput[];
};
export type ArtworkImageCreateWithoutArtworkInput = {
    filename: string;
    path: string;
    isPrimary?: boolean;
    order?: number;
    createdAt?: Date | string;
};
export type ArtworkImageUncheckedCreateWithoutArtworkInput = {
    id?: number;
    filename: string;
    path: string;
    isPrimary?: boolean;
    order?: number;
    createdAt?: Date | string;
};
export type ArtworkImageCreateOrConnectWithoutArtworkInput = {
    where: Prisma.ArtworkImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkImageCreateWithoutArtworkInput, Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput>;
};
export type ArtworkImageCreateManyArtworkInputEnvelope = {
    data: Prisma.ArtworkImageCreateManyArtworkInput | Prisma.ArtworkImageCreateManyArtworkInput[];
    skipDuplicates?: boolean;
};
export type ArtworkImageUpsertWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.ArtworkImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.ArtworkImageUpdateWithoutArtworkInput, Prisma.ArtworkImageUncheckedUpdateWithoutArtworkInput>;
    create: Prisma.XOR<Prisma.ArtworkImageCreateWithoutArtworkInput, Prisma.ArtworkImageUncheckedCreateWithoutArtworkInput>;
};
export type ArtworkImageUpdateWithWhereUniqueWithoutArtworkInput = {
    where: Prisma.ArtworkImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.ArtworkImageUpdateWithoutArtworkInput, Prisma.ArtworkImageUncheckedUpdateWithoutArtworkInput>;
};
export type ArtworkImageUpdateManyWithWhereWithoutArtworkInput = {
    where: Prisma.ArtworkImageScalarWhereInput;
    data: Prisma.XOR<Prisma.ArtworkImageUpdateManyMutationInput, Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkInput>;
};
export type ArtworkImageScalarWhereInput = {
    AND?: Prisma.ArtworkImageScalarWhereInput | Prisma.ArtworkImageScalarWhereInput[];
    OR?: Prisma.ArtworkImageScalarWhereInput[];
    NOT?: Prisma.ArtworkImageScalarWhereInput | Prisma.ArtworkImageScalarWhereInput[];
    id?: Prisma.IntFilter<"ArtworkImage"> | number;
    filename?: Prisma.StringFilter<"ArtworkImage"> | string;
    path?: Prisma.StringFilter<"ArtworkImage"> | string;
    isPrimary?: Prisma.BoolFilter<"ArtworkImage"> | boolean;
    order?: Prisma.IntFilter<"ArtworkImage"> | number;
    artworkId?: Prisma.IntFilter<"ArtworkImage"> | number;
    createdAt?: Prisma.DateTimeFilter<"ArtworkImage"> | Date | string;
};
export type ArtworkImageCreateManyArtworkInput = {
    id?: number;
    filename: string;
    path: string;
    isPrimary?: boolean;
    order?: number;
    createdAt?: Date | string;
};
export type ArtworkImageUpdateWithoutArtworkInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkImageUncheckedUpdateWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkImageUncheckedUpdateManyWithoutArtworkInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    path?: boolean;
    isPrimary?: boolean;
    order?: boolean;
    artworkId?: boolean;
    createdAt?: boolean;
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["artworkImage"]>;
export type ArtworkImageSelectScalar = {
    id?: boolean;
    filename?: boolean;
    path?: boolean;
    isPrimary?: boolean;
    order?: boolean;
    artworkId?: boolean;
    createdAt?: boolean;
};
export type ArtworkImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "filename" | "path" | "isPrimary" | "order" | "artworkId" | "createdAt", ExtArgs["result"]["artworkImage"]>;
export type ArtworkImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    artwork?: boolean | Prisma.ArtworkDefaultArgs<ExtArgs>;
};
export type $ArtworkImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ArtworkImage";
    objects: {
        artwork: Prisma.$ArtworkPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        filename: string;
        path: string;
        isPrimary: boolean;
        order: number;
        artworkId: number;
        createdAt: Date;
    }, ExtArgs["result"]["artworkImage"]>;
    composites: {};
};
export type ArtworkImageGetPayload<S extends boolean | null | undefined | ArtworkImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload, S>;
export type ArtworkImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ArtworkImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArtworkImageCountAggregateInputType | true;
};
export interface ArtworkImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ArtworkImage'];
        meta: {
            name: 'ArtworkImage';
        };
    };
    /**
     * Find zero or one ArtworkImage that matches the filter.
     * @param {ArtworkImageFindUniqueArgs} args - Arguments to find a ArtworkImage
     * @example
     * // Get one ArtworkImage
     * const artworkImage = await prisma.artworkImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtworkImageFindUniqueArgs>(args: Prisma.SelectSubset<T, ArtworkImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ArtworkImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtworkImageFindUniqueOrThrowArgs} args - Arguments to find a ArtworkImage
     * @example
     * // Get one ArtworkImage
     * const artworkImage = await prisma.artworkImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtworkImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ArtworkImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ArtworkImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkImageFindFirstArgs} args - Arguments to find a ArtworkImage
     * @example
     * // Get one ArtworkImage
     * const artworkImage = await prisma.artworkImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtworkImageFindFirstArgs>(args?: Prisma.SelectSubset<T, ArtworkImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ArtworkImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkImageFindFirstOrThrowArgs} args - Arguments to find a ArtworkImage
     * @example
     * // Get one ArtworkImage
     * const artworkImage = await prisma.artworkImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtworkImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ArtworkImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ArtworkImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtworkImages
     * const artworkImages = await prisma.artworkImage.findMany()
     *
     * // Get first 10 ArtworkImages
     * const artworkImages = await prisma.artworkImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const artworkImageWithIdOnly = await prisma.artworkImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArtworkImageFindManyArgs>(args?: Prisma.SelectSubset<T, ArtworkImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ArtworkImage.
     * @param {ArtworkImageCreateArgs} args - Arguments to create a ArtworkImage.
     * @example
     * // Create one ArtworkImage
     * const ArtworkImage = await prisma.artworkImage.create({
     *   data: {
     *     // ... data to create a ArtworkImage
     *   }
     * })
     *
     */
    create<T extends ArtworkImageCreateArgs>(args: Prisma.SelectSubset<T, ArtworkImageCreateArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ArtworkImages.
     * @param {ArtworkImageCreateManyArgs} args - Arguments to create many ArtworkImages.
     * @example
     * // Create many ArtworkImages
     * const artworkImage = await prisma.artworkImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArtworkImageCreateManyArgs>(args?: Prisma.SelectSubset<T, ArtworkImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a ArtworkImage.
     * @param {ArtworkImageDeleteArgs} args - Arguments to delete one ArtworkImage.
     * @example
     * // Delete one ArtworkImage
     * const ArtworkImage = await prisma.artworkImage.delete({
     *   where: {
     *     // ... filter to delete one ArtworkImage
     *   }
     * })
     *
     */
    delete<T extends ArtworkImageDeleteArgs>(args: Prisma.SelectSubset<T, ArtworkImageDeleteArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ArtworkImage.
     * @param {ArtworkImageUpdateArgs} args - Arguments to update one ArtworkImage.
     * @example
     * // Update one ArtworkImage
     * const artworkImage = await prisma.artworkImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArtworkImageUpdateArgs>(args: Prisma.SelectSubset<T, ArtworkImageUpdateArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ArtworkImages.
     * @param {ArtworkImageDeleteManyArgs} args - Arguments to filter ArtworkImages to delete.
     * @example
     * // Delete a few ArtworkImages
     * const { count } = await prisma.artworkImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArtworkImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, ArtworkImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ArtworkImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtworkImages
     * const artworkImage = await prisma.artworkImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArtworkImageUpdateManyArgs>(args: Prisma.SelectSubset<T, ArtworkImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one ArtworkImage.
     * @param {ArtworkImageUpsertArgs} args - Arguments to update or create a ArtworkImage.
     * @example
     * // Update or create a ArtworkImage
     * const artworkImage = await prisma.artworkImage.upsert({
     *   create: {
     *     // ... data to create a ArtworkImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtworkImage we want to update
     *   }
     * })
     */
    upsert<T extends ArtworkImageUpsertArgs>(args: Prisma.SelectSubset<T, ArtworkImageUpsertArgs<ExtArgs>>): Prisma.Prisma__ArtworkImageClient<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ArtworkImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkImageCountArgs} args - Arguments to filter ArtworkImages to count.
     * @example
     * // Count the number of ArtworkImages
     * const count = await prisma.artworkImage.count({
     *   where: {
     *     // ... the filter for the ArtworkImages we want to count
     *   }
     * })
    **/
    count<T extends ArtworkImageCountArgs>(args?: Prisma.Subset<T, ArtworkImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ArtworkImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ArtworkImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtworkImageAggregateArgs>(args: Prisma.Subset<T, ArtworkImageAggregateArgs>): Prisma.PrismaPromise<GetArtworkImageAggregateType<T>>;
    /**
     * Group by ArtworkImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ArtworkImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ArtworkImageGroupByArgs['orderBy'];
    } : {
        orderBy?: ArtworkImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ArtworkImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtworkImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ArtworkImage model
     */
    readonly fields: ArtworkImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ArtworkImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ArtworkImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ArtworkImage model
 */
export interface ArtworkImageFieldRefs {
    readonly id: Prisma.FieldRef<"ArtworkImage", 'Int'>;
    readonly filename: Prisma.FieldRef<"ArtworkImage", 'String'>;
    readonly path: Prisma.FieldRef<"ArtworkImage", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"ArtworkImage", 'Boolean'>;
    readonly order: Prisma.FieldRef<"ArtworkImage", 'Int'>;
    readonly artworkId: Prisma.FieldRef<"ArtworkImage", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ArtworkImage", 'DateTime'>;
}
/**
 * ArtworkImage findUnique
 */
export type ArtworkImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * Filter, which ArtworkImage to fetch.
     */
    where: Prisma.ArtworkImageWhereUniqueInput;
};
/**
 * ArtworkImage findUniqueOrThrow
 */
export type ArtworkImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * Filter, which ArtworkImage to fetch.
     */
    where: Prisma.ArtworkImageWhereUniqueInput;
};
/**
 * ArtworkImage findFirst
 */
export type ArtworkImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * Filter, which ArtworkImage to fetch.
     */
    where?: Prisma.ArtworkImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArtworkImages to fetch.
     */
    orderBy?: Prisma.ArtworkImageOrderByWithRelationInput | Prisma.ArtworkImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ArtworkImages.
     */
    cursor?: Prisma.ArtworkImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArtworkImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArtworkImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ArtworkImages.
     */
    distinct?: Prisma.ArtworkImageScalarFieldEnum | Prisma.ArtworkImageScalarFieldEnum[];
};
/**
 * ArtworkImage findFirstOrThrow
 */
export type ArtworkImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * Filter, which ArtworkImage to fetch.
     */
    where?: Prisma.ArtworkImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArtworkImages to fetch.
     */
    orderBy?: Prisma.ArtworkImageOrderByWithRelationInput | Prisma.ArtworkImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ArtworkImages.
     */
    cursor?: Prisma.ArtworkImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArtworkImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArtworkImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ArtworkImages.
     */
    distinct?: Prisma.ArtworkImageScalarFieldEnum | Prisma.ArtworkImageScalarFieldEnum[];
};
/**
 * ArtworkImage findMany
 */
export type ArtworkImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * Filter, which ArtworkImages to fetch.
     */
    where?: Prisma.ArtworkImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ArtworkImages to fetch.
     */
    orderBy?: Prisma.ArtworkImageOrderByWithRelationInput | Prisma.ArtworkImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ArtworkImages.
     */
    cursor?: Prisma.ArtworkImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ArtworkImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ArtworkImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ArtworkImages.
     */
    distinct?: Prisma.ArtworkImageScalarFieldEnum | Prisma.ArtworkImageScalarFieldEnum[];
};
/**
 * ArtworkImage create
 */
export type ArtworkImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * The data needed to create a ArtworkImage.
     */
    data: Prisma.XOR<Prisma.ArtworkImageCreateInput, Prisma.ArtworkImageUncheckedCreateInput>;
};
/**
 * ArtworkImage createMany
 */
export type ArtworkImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtworkImages.
     */
    data: Prisma.ArtworkImageCreateManyInput | Prisma.ArtworkImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ArtworkImage update
 */
export type ArtworkImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * The data needed to update a ArtworkImage.
     */
    data: Prisma.XOR<Prisma.ArtworkImageUpdateInput, Prisma.ArtworkImageUncheckedUpdateInput>;
    /**
     * Choose, which ArtworkImage to update.
     */
    where: Prisma.ArtworkImageWhereUniqueInput;
};
/**
 * ArtworkImage updateMany
 */
export type ArtworkImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtworkImages.
     */
    data: Prisma.XOR<Prisma.ArtworkImageUpdateManyMutationInput, Prisma.ArtworkImageUncheckedUpdateManyInput>;
    /**
     * Filter which ArtworkImages to update
     */
    where?: Prisma.ArtworkImageWhereInput;
    /**
     * Limit how many ArtworkImages to update.
     */
    limit?: number;
};
/**
 * ArtworkImage upsert
 */
export type ArtworkImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * The filter to search for the ArtworkImage to update in case it exists.
     */
    where: Prisma.ArtworkImageWhereUniqueInput;
    /**
     * In case the ArtworkImage found by the `where` argument doesn't exist, create a new ArtworkImage with this data.
     */
    create: Prisma.XOR<Prisma.ArtworkImageCreateInput, Prisma.ArtworkImageUncheckedCreateInput>;
    /**
     * In case the ArtworkImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ArtworkImageUpdateInput, Prisma.ArtworkImageUncheckedUpdateInput>;
};
/**
 * ArtworkImage delete
 */
export type ArtworkImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
    /**
     * Filter which ArtworkImage to delete.
     */
    where: Prisma.ArtworkImageWhereUniqueInput;
};
/**
 * ArtworkImage deleteMany
 */
export type ArtworkImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ArtworkImages to delete
     */
    where?: Prisma.ArtworkImageWhereInput;
    /**
     * Limit how many ArtworkImages to delete.
     */
    limit?: number;
};
/**
 * ArtworkImage without action
 */
export type ArtworkImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkImage
     */
    select?: Prisma.ArtworkImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArtworkImage
     */
    omit?: Prisma.ArtworkImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkImageInclude<ExtArgs> | null;
};
//# sourceMappingURL=ArtworkImage.d.ts.map