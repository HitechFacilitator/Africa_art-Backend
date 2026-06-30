import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Artist
 *
 */
export type ArtistModel = runtime.Types.Result.DefaultSelection<Prisma.$ArtistPayload>;
export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null;
    _avg: ArtistAvgAggregateOutputType | null;
    _sum: ArtistSumAggregateOutputType | null;
    _min: ArtistMinAggregateOutputType | null;
    _max: ArtistMaxAggregateOutputType | null;
};
export type ArtistAvgAggregateOutputType = {
    id: number | null;
};
export type ArtistSumAggregateOutputType = {
    id: number | null;
};
export type ArtistMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    biography: string | null;
    nationality: string | null;
    birthDate: Date | null;
    deathDate: Date | null;
    photo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArtistMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    biography: string | null;
    nationality: string | null;
    birthDate: Date | null;
    deathDate: Date | null;
    photo: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArtistCountAggregateOutputType = {
    id: number;
    name: number;
    biography: number;
    nationality: number;
    birthDate: number;
    deathDate: number;
    photo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ArtistAvgAggregateInputType = {
    id?: true;
};
export type ArtistSumAggregateInputType = {
    id?: true;
};
export type ArtistMinAggregateInputType = {
    id?: true;
    name?: true;
    biography?: true;
    nationality?: true;
    birthDate?: true;
    deathDate?: true;
    photo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArtistMaxAggregateInputType = {
    id?: true;
    name?: true;
    biography?: true;
    nationality?: true;
    birthDate?: true;
    deathDate?: true;
    photo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArtistCountAggregateInputType = {
    id?: true;
    name?: true;
    biography?: true;
    nationality?: true;
    birthDate?: true;
    deathDate?: true;
    photo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ArtistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: Prisma.ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: Prisma.ArtistOrderByWithRelationInput | Prisma.ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType;
};
export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
    [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArtist[P]> : Prisma.GetScalarType<T[P], AggregateArtist[P]>;
};
export type ArtistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArtistWhereInput;
    orderBy?: Prisma.ArtistOrderByWithAggregationInput | Prisma.ArtistOrderByWithAggregationInput[];
    by: Prisma.ArtistScalarFieldEnum[] | Prisma.ArtistScalarFieldEnum;
    having?: Prisma.ArtistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArtistCountAggregateInputType | true;
    _avg?: ArtistAvgAggregateInputType;
    _sum?: ArtistSumAggregateInputType;
    _min?: ArtistMinAggregateInputType;
    _max?: ArtistMaxAggregateInputType;
};
export type ArtistGroupByOutputType = {
    id: number;
    name: string;
    biography: string | null;
    nationality: string | null;
    birthDate: Date | null;
    deathDate: Date | null;
    photo: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ArtistCountAggregateOutputType | null;
    _avg: ArtistAvgAggregateOutputType | null;
    _sum: ArtistSumAggregateOutputType | null;
    _min: ArtistMinAggregateOutputType | null;
    _max: ArtistMaxAggregateOutputType | null;
};
export type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ArtistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ArtistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ArtistGroupByOutputType[P]>;
}>>;
export type ArtistWhereInput = {
    AND?: Prisma.ArtistWhereInput | Prisma.ArtistWhereInput[];
    OR?: Prisma.ArtistWhereInput[];
    NOT?: Prisma.ArtistWhereInput | Prisma.ArtistWhereInput[];
    id?: Prisma.IntFilter<"Artist"> | number;
    name?: Prisma.StringFilter<"Artist"> | string;
    biography?: Prisma.StringNullableFilter<"Artist"> | string | null;
    nationality?: Prisma.StringNullableFilter<"Artist"> | string | null;
    birthDate?: Prisma.DateTimeNullableFilter<"Artist"> | Date | string | null;
    deathDate?: Prisma.DateTimeNullableFilter<"Artist"> | Date | string | null;
    photo?: Prisma.StringNullableFilter<"Artist"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Artist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Artist"> | Date | string;
    artworks?: Prisma.ArtworkListRelationFilter;
};
export type ArtistOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    biography?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationality?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    deathDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    artworks?: Prisma.ArtworkOrderByRelationAggregateInput;
    _relevance?: Prisma.ArtistOrderByRelevanceInput;
};
export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.ArtistWhereInput | Prisma.ArtistWhereInput[];
    OR?: Prisma.ArtistWhereInput[];
    NOT?: Prisma.ArtistWhereInput | Prisma.ArtistWhereInput[];
    biography?: Prisma.StringNullableFilter<"Artist"> | string | null;
    nationality?: Prisma.StringNullableFilter<"Artist"> | string | null;
    birthDate?: Prisma.DateTimeNullableFilter<"Artist"> | Date | string | null;
    deathDate?: Prisma.DateTimeNullableFilter<"Artist"> | Date | string | null;
    photo?: Prisma.StringNullableFilter<"Artist"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Artist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Artist"> | Date | string;
    artworks?: Prisma.ArtworkListRelationFilter;
}, "id" | "name">;
export type ArtistOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    biography?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationality?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    deathDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    photo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ArtistCountOrderByAggregateInput;
    _avg?: Prisma.ArtistAvgOrderByAggregateInput;
    _max?: Prisma.ArtistMaxOrderByAggregateInput;
    _min?: Prisma.ArtistMinOrderByAggregateInput;
    _sum?: Prisma.ArtistSumOrderByAggregateInput;
};
export type ArtistScalarWhereWithAggregatesInput = {
    AND?: Prisma.ArtistScalarWhereWithAggregatesInput | Prisma.ArtistScalarWhereWithAggregatesInput[];
    OR?: Prisma.ArtistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ArtistScalarWhereWithAggregatesInput | Prisma.ArtistScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Artist"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Artist"> | string;
    biography?: Prisma.StringNullableWithAggregatesFilter<"Artist"> | string | null;
    nationality?: Prisma.StringNullableWithAggregatesFilter<"Artist"> | string | null;
    birthDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Artist"> | Date | string | null;
    deathDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Artist"> | Date | string | null;
    photo?: Prisma.StringNullableWithAggregatesFilter<"Artist"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Artist"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Artist"> | Date | string;
};
export type ArtistCreateInput = {
    name: string;
    biography?: string | null;
    nationality?: string | null;
    birthDate?: Date | string | null;
    deathDate?: Date | string | null;
    photo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artworks?: Prisma.ArtworkCreateNestedManyWithoutArtistInput;
};
export type ArtistUncheckedCreateInput = {
    id?: number;
    name: string;
    biography?: string | null;
    nationality?: string | null;
    birthDate?: Date | string | null;
    deathDate?: Date | string | null;
    photo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artworks?: Prisma.ArtworkUncheckedCreateNestedManyWithoutArtistInput;
};
export type ArtistUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deathDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artworks?: Prisma.ArtworkUpdateManyWithoutArtistNestedInput;
};
export type ArtistUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deathDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artworks?: Prisma.ArtworkUncheckedUpdateManyWithoutArtistNestedInput;
};
export type ArtistCreateManyInput = {
    id?: number;
    name: string;
    biography?: string | null;
    nationality?: string | null;
    birthDate?: Date | string | null;
    deathDate?: Date | string | null;
    photo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArtistUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deathDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtistUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deathDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtistOrderByRelevanceInput = {
    fields: Prisma.ArtistOrderByRelevanceFieldEnum | Prisma.ArtistOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ArtistCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    deathDate?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArtistAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ArtistMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    deathDate?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArtistMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    biography?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
    deathDate?: Prisma.SortOrder;
    photo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArtistSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ArtistNullableScalarRelationFilter = {
    is?: Prisma.ArtistWhereInput | null;
    isNot?: Prisma.ArtistWhereInput | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ArtistCreateNestedOneWithoutArtworksInput = {
    create?: Prisma.XOR<Prisma.ArtistCreateWithoutArtworksInput, Prisma.ArtistUncheckedCreateWithoutArtworksInput>;
    connectOrCreate?: Prisma.ArtistCreateOrConnectWithoutArtworksInput;
    connect?: Prisma.ArtistWhereUniqueInput;
};
export type ArtistUpdateOneWithoutArtworksNestedInput = {
    create?: Prisma.XOR<Prisma.ArtistCreateWithoutArtworksInput, Prisma.ArtistUncheckedCreateWithoutArtworksInput>;
    connectOrCreate?: Prisma.ArtistCreateOrConnectWithoutArtworksInput;
    upsert?: Prisma.ArtistUpsertWithoutArtworksInput;
    disconnect?: Prisma.ArtistWhereInput | boolean;
    delete?: Prisma.ArtistWhereInput | boolean;
    connect?: Prisma.ArtistWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtistUpdateToOneWithWhereWithoutArtworksInput, Prisma.ArtistUpdateWithoutArtworksInput>, Prisma.ArtistUncheckedUpdateWithoutArtworksInput>;
};
export type ArtistCreateWithoutArtworksInput = {
    name: string;
    biography?: string | null;
    nationality?: string | null;
    birthDate?: Date | string | null;
    deathDate?: Date | string | null;
    photo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArtistUncheckedCreateWithoutArtworksInput = {
    id?: number;
    name: string;
    biography?: string | null;
    nationality?: string | null;
    birthDate?: Date | string | null;
    deathDate?: Date | string | null;
    photo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArtistCreateOrConnectWithoutArtworksInput = {
    where: Prisma.ArtistWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtistCreateWithoutArtworksInput, Prisma.ArtistUncheckedCreateWithoutArtworksInput>;
};
export type ArtistUpsertWithoutArtworksInput = {
    update: Prisma.XOR<Prisma.ArtistUpdateWithoutArtworksInput, Prisma.ArtistUncheckedUpdateWithoutArtworksInput>;
    create: Prisma.XOR<Prisma.ArtistCreateWithoutArtworksInput, Prisma.ArtistUncheckedCreateWithoutArtworksInput>;
    where?: Prisma.ArtistWhereInput;
};
export type ArtistUpdateToOneWithWhereWithoutArtworksInput = {
    where?: Prisma.ArtistWhereInput;
    data: Prisma.XOR<Prisma.ArtistUpdateWithoutArtworksInput, Prisma.ArtistUncheckedUpdateWithoutArtworksInput>;
};
export type ArtistUpdateWithoutArtworksInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deathDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtistUncheckedUpdateWithoutArtworksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    biography?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deathDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    photo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ArtistCountOutputType
 */
export type ArtistCountOutputType = {
    artworks: number;
};
export type ArtistCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    artworks?: boolean | ArtistCountOutputTypeCountArtworksArgs;
};
/**
 * ArtistCountOutputType without action
 */
export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: Prisma.ArtistCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ArtistCountOutputType without action
 */
export type ArtistCountOutputTypeCountArtworksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArtworkWhereInput;
};
export type ArtistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    biography?: boolean;
    nationality?: boolean;
    birthDate?: boolean;
    deathDate?: boolean;
    photo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    artworks?: boolean | Prisma.Artist$artworksArgs<ExtArgs>;
    _count?: boolean | Prisma.ArtistCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["artist"]>;
export type ArtistSelectScalar = {
    id?: boolean;
    name?: boolean;
    biography?: boolean;
    nationality?: boolean;
    birthDate?: boolean;
    deathDate?: boolean;
    photo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ArtistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "biography" | "nationality" | "birthDate" | "deathDate" | "photo" | "createdAt" | "updatedAt", ExtArgs["result"]["artist"]>;
export type ArtistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    artworks?: boolean | Prisma.Artist$artworksArgs<ExtArgs>;
    _count?: boolean | Prisma.ArtistCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ArtistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Artist";
    objects: {
        artworks: Prisma.$ArtworkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        biography: string | null;
        nationality: string | null;
        birthDate: Date | null;
        deathDate: Date | null;
        photo: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["artist"]>;
    composites: {};
};
export type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ArtistPayload, S>;
export type ArtistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArtistCountAggregateInputType | true;
};
export interface ArtistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Artist'];
        meta: {
            name: 'Artist';
        };
    };
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: Prisma.SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: Prisma.SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     *
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArtistFindManyArgs>(args?: Prisma.SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     *
     */
    create<T extends ArtistCreateArgs>(args: Prisma.SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArtistCreateManyArgs>(args?: Prisma.SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     *
     */
    delete<T extends ArtistDeleteArgs>(args: Prisma.SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArtistUpdateArgs>(args: Prisma.SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: Prisma.SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: Prisma.SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: Prisma.SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(args?: Prisma.Subset<T, ArtistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ArtistCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Prisma.Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>;
    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ArtistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ArtistGroupByArgs['orderBy'];
    } : {
        orderBy?: ArtistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Artist model
     */
    readonly fields: ArtistFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Artist.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    artworks<T extends Prisma.Artist$artworksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artist$artworksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Artist model
 */
export interface ArtistFieldRefs {
    readonly id: Prisma.FieldRef<"Artist", 'Int'>;
    readonly name: Prisma.FieldRef<"Artist", 'String'>;
    readonly biography: Prisma.FieldRef<"Artist", 'String'>;
    readonly nationality: Prisma.FieldRef<"Artist", 'String'>;
    readonly birthDate: Prisma.FieldRef<"Artist", 'DateTime'>;
    readonly deathDate: Prisma.FieldRef<"Artist", 'DateTime'>;
    readonly photo: Prisma.FieldRef<"Artist", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Artist", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Artist", 'DateTime'>;
}
/**
 * Artist findUnique
 */
export type ArtistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where: Prisma.ArtistWhereUniqueInput;
};
/**
 * Artist findUniqueOrThrow
 */
export type ArtistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where: Prisma.ArtistWhereUniqueInput;
};
/**
 * Artist findFirst
 */
export type ArtistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where?: Prisma.ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: Prisma.ArtistOrderByWithRelationInput | Prisma.ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Artists.
     */
    cursor?: Prisma.ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artists.
     */
    distinct?: Prisma.ArtistScalarFieldEnum | Prisma.ArtistScalarFieldEnum[];
};
/**
 * Artist findFirstOrThrow
 */
export type ArtistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * Filter, which Artist to fetch.
     */
    where?: Prisma.ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: Prisma.ArtistOrderByWithRelationInput | Prisma.ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Artists.
     */
    cursor?: Prisma.ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artists.
     */
    distinct?: Prisma.ArtistScalarFieldEnum | Prisma.ArtistScalarFieldEnum[];
};
/**
 * Artist findMany
 */
export type ArtistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * Filter, which Artists to fetch.
     */
    where?: Prisma.ArtistWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artists to fetch.
     */
    orderBy?: Prisma.ArtistOrderByWithRelationInput | Prisma.ArtistOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Artists.
     */
    cursor?: Prisma.ArtistWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artists.
     */
    distinct?: Prisma.ArtistScalarFieldEnum | Prisma.ArtistScalarFieldEnum[];
};
/**
 * Artist create
 */
export type ArtistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * The data needed to create a Artist.
     */
    data: Prisma.XOR<Prisma.ArtistCreateInput, Prisma.ArtistUncheckedCreateInput>;
};
/**
 * Artist createMany
 */
export type ArtistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: Prisma.ArtistCreateManyInput | Prisma.ArtistCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Artist update
 */
export type ArtistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * The data needed to update a Artist.
     */
    data: Prisma.XOR<Prisma.ArtistUpdateInput, Prisma.ArtistUncheckedUpdateInput>;
    /**
     * Choose, which Artist to update.
     */
    where: Prisma.ArtistWhereUniqueInput;
};
/**
 * Artist updateMany
 */
export type ArtistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: Prisma.XOR<Prisma.ArtistUpdateManyMutationInput, Prisma.ArtistUncheckedUpdateManyInput>;
    /**
     * Filter which Artists to update
     */
    where?: Prisma.ArtistWhereInput;
    /**
     * Limit how many Artists to update.
     */
    limit?: number;
};
/**
 * Artist upsert
 */
export type ArtistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: Prisma.ArtistWhereUniqueInput;
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: Prisma.XOR<Prisma.ArtistCreateInput, Prisma.ArtistUncheckedCreateInput>;
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ArtistUpdateInput, Prisma.ArtistUncheckedUpdateInput>;
};
/**
 * Artist delete
 */
export type ArtistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
    /**
     * Filter which Artist to delete.
     */
    where: Prisma.ArtistWhereUniqueInput;
};
/**
 * Artist deleteMany
 */
export type ArtistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: Prisma.ArtistWhereInput;
    /**
     * Limit how many Artists to delete.
     */
    limit?: number;
};
/**
 * Artist.artworks
 */
export type Artist$artworksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artwork
     */
    select?: Prisma.ArtworkSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artwork
     */
    omit?: Prisma.ArtworkOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtworkInclude<ExtArgs> | null;
    where?: Prisma.ArtworkWhereInput;
    orderBy?: Prisma.ArtworkOrderByWithRelationInput | Prisma.ArtworkOrderByWithRelationInput[];
    cursor?: Prisma.ArtworkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArtworkScalarFieldEnum | Prisma.ArtworkScalarFieldEnum[];
};
/**
 * Artist without action
 */
export type ArtistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: Prisma.ArtistSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Artist
     */
    omit?: Prisma.ArtistOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArtistInclude<ExtArgs> | null;
};
//# sourceMappingURL=Artist.d.ts.map