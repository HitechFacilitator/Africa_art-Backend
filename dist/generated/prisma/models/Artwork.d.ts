import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Artwork
 *
 */
export type ArtworkModel = runtime.Types.Result.DefaultSelection<Prisma.$ArtworkPayload>;
export type AggregateArtwork = {
    _count: ArtworkCountAggregateOutputType | null;
    _avg: ArtworkAvgAggregateOutputType | null;
    _sum: ArtworkSumAggregateOutputType | null;
    _min: ArtworkMinAggregateOutputType | null;
    _max: ArtworkMaxAggregateOutputType | null;
};
export type ArtworkAvgAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    scarcityIndex: number | null;
    estimatedValue: runtime.Decimal | null;
    historicalCagr: runtime.Decimal | null;
    yieldIndex: runtime.Decimal | null;
    acquiredYear: number | null;
    artistId: number | null;
    categoryId: number | null;
};
export type ArtworkSumAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    scarcityIndex: number | null;
    estimatedValue: runtime.Decimal | null;
    historicalCagr: runtime.Decimal | null;
    yieldIndex: runtime.Decimal | null;
    acquiredYear: number | null;
    artistId: number | null;
    categoryId: number | null;
};
export type ArtworkMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    origin: string | null;
    region: string | null;
    tribe: string | null;
    era: string | null;
    historicalPeriod: string | null;
    material: string | null;
    dimensions: string | null;
    weight: string | null;
    condition: string | null;
    availability: $Enums.Availability | null;
    price: runtime.Decimal | null;
    isPOR: boolean | null;
    imageUrl: string | null;
    blurDataURL: string | null;
    scarcityIndex: number | null;
    preservationStatus: string | null;
    appreciationRate: string | null;
    isHero: boolean | null;
    historicalStory: string | null;
    investmentThesis: string | null;
    estimatedValue: runtime.Decimal | null;
    historicalCagr: runtime.Decimal | null;
    yieldIndex: runtime.Decimal | null;
    tier: string | null;
    artworkStatus: string | null;
    provenanceHash: string | null;
    acquiredYear: number | null;
    acquiredMethod: string | null;
    artistId: number | null;
    categoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArtworkMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    origin: string | null;
    region: string | null;
    tribe: string | null;
    era: string | null;
    historicalPeriod: string | null;
    material: string | null;
    dimensions: string | null;
    weight: string | null;
    condition: string | null;
    availability: $Enums.Availability | null;
    price: runtime.Decimal | null;
    isPOR: boolean | null;
    imageUrl: string | null;
    blurDataURL: string | null;
    scarcityIndex: number | null;
    preservationStatus: string | null;
    appreciationRate: string | null;
    isHero: boolean | null;
    historicalStory: string | null;
    investmentThesis: string | null;
    estimatedValue: runtime.Decimal | null;
    historicalCagr: runtime.Decimal | null;
    yieldIndex: runtime.Decimal | null;
    tier: string | null;
    artworkStatus: string | null;
    provenanceHash: string | null;
    acquiredYear: number | null;
    acquiredMethod: string | null;
    artistId: number | null;
    categoryId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ArtworkCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    origin: number;
    region: number;
    tribe: number;
    era: number;
    historicalPeriod: number;
    material: number;
    dimensions: number;
    weight: number;
    condition: number;
    availability: number;
    price: number;
    isPOR: number;
    imageUrl: number;
    blurDataURL: number;
    scarcityIndex: number;
    preservationStatus: number;
    appreciationRate: number;
    isHero: number;
    historicalStory: number;
    investmentThesis: number;
    estimatedValue: number;
    historicalCagr: number;
    yieldIndex: number;
    tier: number;
    artworkStatus: number;
    provenanceHash: number;
    acquiredYear: number;
    acquiredMethod: number;
    artistId: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ArtworkAvgAggregateInputType = {
    id?: true;
    price?: true;
    scarcityIndex?: true;
    estimatedValue?: true;
    historicalCagr?: true;
    yieldIndex?: true;
    acquiredYear?: true;
    artistId?: true;
    categoryId?: true;
};
export type ArtworkSumAggregateInputType = {
    id?: true;
    price?: true;
    scarcityIndex?: true;
    estimatedValue?: true;
    historicalCagr?: true;
    yieldIndex?: true;
    acquiredYear?: true;
    artistId?: true;
    categoryId?: true;
};
export type ArtworkMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    origin?: true;
    region?: true;
    tribe?: true;
    era?: true;
    historicalPeriod?: true;
    material?: true;
    dimensions?: true;
    weight?: true;
    condition?: true;
    availability?: true;
    price?: true;
    isPOR?: true;
    imageUrl?: true;
    blurDataURL?: true;
    scarcityIndex?: true;
    preservationStatus?: true;
    appreciationRate?: true;
    isHero?: true;
    historicalStory?: true;
    investmentThesis?: true;
    estimatedValue?: true;
    historicalCagr?: true;
    yieldIndex?: true;
    tier?: true;
    artworkStatus?: true;
    provenanceHash?: true;
    acquiredYear?: true;
    acquiredMethod?: true;
    artistId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArtworkMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    origin?: true;
    region?: true;
    tribe?: true;
    era?: true;
    historicalPeriod?: true;
    material?: true;
    dimensions?: true;
    weight?: true;
    condition?: true;
    availability?: true;
    price?: true;
    isPOR?: true;
    imageUrl?: true;
    blurDataURL?: true;
    scarcityIndex?: true;
    preservationStatus?: true;
    appreciationRate?: true;
    isHero?: true;
    historicalStory?: true;
    investmentThesis?: true;
    estimatedValue?: true;
    historicalCagr?: true;
    yieldIndex?: true;
    tier?: true;
    artworkStatus?: true;
    provenanceHash?: true;
    acquiredYear?: true;
    acquiredMethod?: true;
    artistId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ArtworkCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    origin?: true;
    region?: true;
    tribe?: true;
    era?: true;
    historicalPeriod?: true;
    material?: true;
    dimensions?: true;
    weight?: true;
    condition?: true;
    availability?: true;
    price?: true;
    isPOR?: true;
    imageUrl?: true;
    blurDataURL?: true;
    scarcityIndex?: true;
    preservationStatus?: true;
    appreciationRate?: true;
    isHero?: true;
    historicalStory?: true;
    investmentThesis?: true;
    estimatedValue?: true;
    historicalCagr?: true;
    yieldIndex?: true;
    tier?: true;
    artworkStatus?: true;
    provenanceHash?: true;
    acquiredYear?: true;
    acquiredMethod?: true;
    artistId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ArtworkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Artwork to aggregate.
     */
    where?: Prisma.ArtworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artworks to fetch.
     */
    orderBy?: Prisma.ArtworkOrderByWithRelationInput | Prisma.ArtworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ArtworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artworks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Artworks
    **/
    _count?: true | ArtworkCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ArtworkAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ArtworkSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ArtworkMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ArtworkMaxAggregateInputType;
};
export type GetArtworkAggregateType<T extends ArtworkAggregateArgs> = {
    [P in keyof T & keyof AggregateArtwork]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArtwork[P]> : Prisma.GetScalarType<T[P], AggregateArtwork[P]>;
};
export type ArtworkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArtworkWhereInput;
    orderBy?: Prisma.ArtworkOrderByWithAggregationInput | Prisma.ArtworkOrderByWithAggregationInput[];
    by: Prisma.ArtworkScalarFieldEnum[] | Prisma.ArtworkScalarFieldEnum;
    having?: Prisma.ArtworkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArtworkCountAggregateInputType | true;
    _avg?: ArtworkAvgAggregateInputType;
    _sum?: ArtworkSumAggregateInputType;
    _min?: ArtworkMinAggregateInputType;
    _max?: ArtworkMaxAggregateInputType;
};
export type ArtworkGroupByOutputType = {
    id: number;
    title: string;
    description: string;
    origin: string;
    region: string | null;
    tribe: string | null;
    era: string | null;
    historicalPeriod: string | null;
    material: string;
    dimensions: string;
    weight: string | null;
    condition: string;
    availability: $Enums.Availability;
    price: runtime.Decimal | null;
    isPOR: boolean;
    imageUrl: string | null;
    blurDataURL: string | null;
    scarcityIndex: number | null;
    preservationStatus: string | null;
    appreciationRate: string | null;
    isHero: boolean;
    historicalStory: string | null;
    investmentThesis: string | null;
    estimatedValue: runtime.Decimal | null;
    historicalCagr: runtime.Decimal | null;
    yieldIndex: runtime.Decimal | null;
    tier: string | null;
    artworkStatus: string | null;
    provenanceHash: string | null;
    acquiredYear: number | null;
    acquiredMethod: string | null;
    artistId: number | null;
    categoryId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ArtworkCountAggregateOutputType | null;
    _avg: ArtworkAvgAggregateOutputType | null;
    _sum: ArtworkSumAggregateOutputType | null;
    _min: ArtworkMinAggregateOutputType | null;
    _max: ArtworkMaxAggregateOutputType | null;
};
export type GetArtworkGroupByPayload<T extends ArtworkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ArtworkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ArtworkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ArtworkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ArtworkGroupByOutputType[P]>;
}>>;
export type ArtworkWhereInput = {
    AND?: Prisma.ArtworkWhereInput | Prisma.ArtworkWhereInput[];
    OR?: Prisma.ArtworkWhereInput[];
    NOT?: Prisma.ArtworkWhereInput | Prisma.ArtworkWhereInput[];
    id?: Prisma.IntFilter<"Artwork"> | number;
    title?: Prisma.StringFilter<"Artwork"> | string;
    description?: Prisma.StringFilter<"Artwork"> | string;
    origin?: Prisma.StringFilter<"Artwork"> | string;
    region?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    tribe?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    era?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    historicalPeriod?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    material?: Prisma.StringFilter<"Artwork"> | string;
    dimensions?: Prisma.StringFilter<"Artwork"> | string;
    weight?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    condition?: Prisma.StringFilter<"Artwork"> | string;
    availability?: Prisma.EnumAvailabilityFilter<"Artwork"> | $Enums.Availability;
    price?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFilter<"Artwork"> | boolean;
    imageUrl?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    blurDataURL?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    scarcityIndex?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    preservationStatus?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    appreciationRate?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    isHero?: Prisma.BoolFilter<"Artwork"> | boolean;
    historicalStory?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    investmentThesis?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    estimatedValue?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    artworkStatus?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    provenanceHash?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    acquiredYear?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    acquiredMethod?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    artistId?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Artwork"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Artwork"> | Date | string;
    artist?: Prisma.XOR<Prisma.ArtistNullableScalarRelationFilter, Prisma.ArtistWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    images?: Prisma.ArtworkImageListRelationFilter;
    provenance?: Prisma.ProvenanceRecordListRelationFilter;
    provenanceChain?: Prisma.ProvenanceChainListRelationFilter;
    certificates?: Prisma.CertificateListRelationFilter;
    favorites?: Prisma.FavoriteListRelationFilter;
    reservations?: Prisma.ReservationListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
    auctionLots?: Prisma.AuctionLotListRelationFilter;
    priceRequests?: Prisma.PriceRequestListRelationFilter;
};
export type ArtworkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
    region?: Prisma.SortOrderInput | Prisma.SortOrder;
    tribe?: Prisma.SortOrderInput | Prisma.SortOrder;
    era?: Prisma.SortOrderInput | Prisma.SortOrder;
    historicalPeriod?: Prisma.SortOrderInput | Prisma.SortOrder;
    material?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrder;
    weight?: Prisma.SortOrderInput | Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    availability?: Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPOR?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    blurDataURL?: Prisma.SortOrderInput | Prisma.SortOrder;
    scarcityIndex?: Prisma.SortOrderInput | Prisma.SortOrder;
    preservationStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    appreciationRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isHero?: Prisma.SortOrder;
    historicalStory?: Prisma.SortOrderInput | Prisma.SortOrder;
    investmentThesis?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    historicalCagr?: Prisma.SortOrderInput | Prisma.SortOrder;
    yieldIndex?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    artworkStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    provenanceHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquiredYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquiredMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    artistId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    artist?: Prisma.ArtistOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    images?: Prisma.ArtworkImageOrderByRelationAggregateInput;
    provenance?: Prisma.ProvenanceRecordOrderByRelationAggregateInput;
    provenanceChain?: Prisma.ProvenanceChainOrderByRelationAggregateInput;
    certificates?: Prisma.CertificateOrderByRelationAggregateInput;
    favorites?: Prisma.FavoriteOrderByRelationAggregateInput;
    reservations?: Prisma.ReservationOrderByRelationAggregateInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
    auctionLots?: Prisma.AuctionLotOrderByRelationAggregateInput;
    priceRequests?: Prisma.PriceRequestOrderByRelationAggregateInput;
    _relevance?: Prisma.ArtworkOrderByRelevanceInput;
};
export type ArtworkWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    title?: string;
    AND?: Prisma.ArtworkWhereInput | Prisma.ArtworkWhereInput[];
    OR?: Prisma.ArtworkWhereInput[];
    NOT?: Prisma.ArtworkWhereInput | Prisma.ArtworkWhereInput[];
    description?: Prisma.StringFilter<"Artwork"> | string;
    origin?: Prisma.StringFilter<"Artwork"> | string;
    region?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    tribe?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    era?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    historicalPeriod?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    material?: Prisma.StringFilter<"Artwork"> | string;
    dimensions?: Prisma.StringFilter<"Artwork"> | string;
    weight?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    condition?: Prisma.StringFilter<"Artwork"> | string;
    availability?: Prisma.EnumAvailabilityFilter<"Artwork"> | $Enums.Availability;
    price?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFilter<"Artwork"> | boolean;
    imageUrl?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    blurDataURL?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    scarcityIndex?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    preservationStatus?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    appreciationRate?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    isHero?: Prisma.BoolFilter<"Artwork"> | boolean;
    historicalStory?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    investmentThesis?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    estimatedValue?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    artworkStatus?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    provenanceHash?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    acquiredYear?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    acquiredMethod?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    artistId?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Artwork"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Artwork"> | Date | string;
    artist?: Prisma.XOR<Prisma.ArtistNullableScalarRelationFilter, Prisma.ArtistWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    images?: Prisma.ArtworkImageListRelationFilter;
    provenance?: Prisma.ProvenanceRecordListRelationFilter;
    provenanceChain?: Prisma.ProvenanceChainListRelationFilter;
    certificates?: Prisma.CertificateListRelationFilter;
    favorites?: Prisma.FavoriteListRelationFilter;
    reservations?: Prisma.ReservationListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
    auctionLots?: Prisma.AuctionLotListRelationFilter;
    priceRequests?: Prisma.PriceRequestListRelationFilter;
}, "id" | "title">;
export type ArtworkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
    region?: Prisma.SortOrderInput | Prisma.SortOrder;
    tribe?: Prisma.SortOrderInput | Prisma.SortOrder;
    era?: Prisma.SortOrderInput | Prisma.SortOrder;
    historicalPeriod?: Prisma.SortOrderInput | Prisma.SortOrder;
    material?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrder;
    weight?: Prisma.SortOrderInput | Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    availability?: Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    isPOR?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    blurDataURL?: Prisma.SortOrderInput | Prisma.SortOrder;
    scarcityIndex?: Prisma.SortOrderInput | Prisma.SortOrder;
    preservationStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    appreciationRate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isHero?: Prisma.SortOrder;
    historicalStory?: Prisma.SortOrderInput | Prisma.SortOrder;
    investmentThesis?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrderInput | Prisma.SortOrder;
    historicalCagr?: Prisma.SortOrderInput | Prisma.SortOrder;
    yieldIndex?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    artworkStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    provenanceHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquiredYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquiredMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    artistId?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ArtworkCountOrderByAggregateInput;
    _avg?: Prisma.ArtworkAvgOrderByAggregateInput;
    _max?: Prisma.ArtworkMaxOrderByAggregateInput;
    _min?: Prisma.ArtworkMinOrderByAggregateInput;
    _sum?: Prisma.ArtworkSumOrderByAggregateInput;
};
export type ArtworkScalarWhereWithAggregatesInput = {
    AND?: Prisma.ArtworkScalarWhereWithAggregatesInput | Prisma.ArtworkScalarWhereWithAggregatesInput[];
    OR?: Prisma.ArtworkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ArtworkScalarWhereWithAggregatesInput | Prisma.ArtworkScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Artwork"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Artwork"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Artwork"> | string;
    origin?: Prisma.StringWithAggregatesFilter<"Artwork"> | string;
    region?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    tribe?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    era?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    historicalPeriod?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    material?: Prisma.StringWithAggregatesFilter<"Artwork"> | string;
    dimensions?: Prisma.StringWithAggregatesFilter<"Artwork"> | string;
    weight?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    condition?: Prisma.StringWithAggregatesFilter<"Artwork"> | string;
    availability?: Prisma.EnumAvailabilityWithAggregatesFilter<"Artwork"> | $Enums.Availability;
    price?: Prisma.DecimalNullableWithAggregatesFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolWithAggregatesFilter<"Artwork"> | boolean;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    blurDataURL?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    scarcityIndex?: Prisma.IntNullableWithAggregatesFilter<"Artwork"> | number | null;
    preservationStatus?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    appreciationRate?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    isHero?: Prisma.BoolWithAggregatesFilter<"Artwork"> | boolean;
    historicalStory?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    investmentThesis?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    estimatedValue?: Prisma.DecimalNullableWithAggregatesFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.DecimalNullableWithAggregatesFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.DecimalNullableWithAggregatesFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    artworkStatus?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    provenanceHash?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    acquiredYear?: Prisma.IntNullableWithAggregatesFilter<"Artwork"> | number | null;
    acquiredMethod?: Prisma.StringNullableWithAggregatesFilter<"Artwork"> | string | null;
    artistId?: Prisma.IntNullableWithAggregatesFilter<"Artwork"> | number | null;
    categoryId?: Prisma.IntNullableWithAggregatesFilter<"Artwork"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Artwork"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Artwork"> | Date | string;
};
export type ArtworkCreateInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateManyInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArtworkUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkListRelationFilter = {
    every?: Prisma.ArtworkWhereInput;
    some?: Prisma.ArtworkWhereInput;
    none?: Prisma.ArtworkWhereInput;
};
export type ArtworkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ArtworkOrderByRelevanceInput = {
    fields: Prisma.ArtworkOrderByRelevanceFieldEnum | Prisma.ArtworkOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ArtworkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    tribe?: Prisma.SortOrder;
    era?: Prisma.SortOrder;
    historicalPeriod?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    availability?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    isPOR?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    blurDataURL?: Prisma.SortOrder;
    scarcityIndex?: Prisma.SortOrder;
    preservationStatus?: Prisma.SortOrder;
    appreciationRate?: Prisma.SortOrder;
    isHero?: Prisma.SortOrder;
    historicalStory?: Prisma.SortOrder;
    investmentThesis?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    historicalCagr?: Prisma.SortOrder;
    yieldIndex?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    artworkStatus?: Prisma.SortOrder;
    provenanceHash?: Prisma.SortOrder;
    acquiredYear?: Prisma.SortOrder;
    acquiredMethod?: Prisma.SortOrder;
    artistId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArtworkAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    scarcityIndex?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    historicalCagr?: Prisma.SortOrder;
    yieldIndex?: Prisma.SortOrder;
    acquiredYear?: Prisma.SortOrder;
    artistId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ArtworkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    tribe?: Prisma.SortOrder;
    era?: Prisma.SortOrder;
    historicalPeriod?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    availability?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    isPOR?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    blurDataURL?: Prisma.SortOrder;
    scarcityIndex?: Prisma.SortOrder;
    preservationStatus?: Prisma.SortOrder;
    appreciationRate?: Prisma.SortOrder;
    isHero?: Prisma.SortOrder;
    historicalStory?: Prisma.SortOrder;
    investmentThesis?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    historicalCagr?: Prisma.SortOrder;
    yieldIndex?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    artworkStatus?: Prisma.SortOrder;
    provenanceHash?: Prisma.SortOrder;
    acquiredYear?: Prisma.SortOrder;
    acquiredMethod?: Prisma.SortOrder;
    artistId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArtworkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    origin?: Prisma.SortOrder;
    region?: Prisma.SortOrder;
    tribe?: Prisma.SortOrder;
    era?: Prisma.SortOrder;
    historicalPeriod?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    dimensions?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    availability?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    isPOR?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    blurDataURL?: Prisma.SortOrder;
    scarcityIndex?: Prisma.SortOrder;
    preservationStatus?: Prisma.SortOrder;
    appreciationRate?: Prisma.SortOrder;
    isHero?: Prisma.SortOrder;
    historicalStory?: Prisma.SortOrder;
    investmentThesis?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    historicalCagr?: Prisma.SortOrder;
    yieldIndex?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    artworkStatus?: Prisma.SortOrder;
    provenanceHash?: Prisma.SortOrder;
    acquiredYear?: Prisma.SortOrder;
    acquiredMethod?: Prisma.SortOrder;
    artistId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ArtworkSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    scarcityIndex?: Prisma.SortOrder;
    estimatedValue?: Prisma.SortOrder;
    historicalCagr?: Prisma.SortOrder;
    yieldIndex?: Prisma.SortOrder;
    acquiredYear?: Prisma.SortOrder;
    artistId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type ArtworkScalarRelationFilter = {
    is?: Prisma.ArtworkWhereInput;
    isNot?: Prisma.ArtworkWhereInput;
};
export type ArtworkCreateNestedManyWithoutArtistInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutArtistInput, Prisma.ArtworkUncheckedCreateWithoutArtistInput> | Prisma.ArtworkCreateWithoutArtistInput[] | Prisma.ArtworkUncheckedCreateWithoutArtistInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutArtistInput | Prisma.ArtworkCreateOrConnectWithoutArtistInput[];
    createMany?: Prisma.ArtworkCreateManyArtistInputEnvelope;
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
};
export type ArtworkUncheckedCreateNestedManyWithoutArtistInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutArtistInput, Prisma.ArtworkUncheckedCreateWithoutArtistInput> | Prisma.ArtworkCreateWithoutArtistInput[] | Prisma.ArtworkUncheckedCreateWithoutArtistInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutArtistInput | Prisma.ArtworkCreateOrConnectWithoutArtistInput[];
    createMany?: Prisma.ArtworkCreateManyArtistInputEnvelope;
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
};
export type ArtworkUpdateManyWithoutArtistNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutArtistInput, Prisma.ArtworkUncheckedCreateWithoutArtistInput> | Prisma.ArtworkCreateWithoutArtistInput[] | Prisma.ArtworkUncheckedCreateWithoutArtistInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutArtistInput | Prisma.ArtworkCreateOrConnectWithoutArtistInput[];
    upsert?: Prisma.ArtworkUpsertWithWhereUniqueWithoutArtistInput | Prisma.ArtworkUpsertWithWhereUniqueWithoutArtistInput[];
    createMany?: Prisma.ArtworkCreateManyArtistInputEnvelope;
    set?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    disconnect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    delete?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    update?: Prisma.ArtworkUpdateWithWhereUniqueWithoutArtistInput | Prisma.ArtworkUpdateWithWhereUniqueWithoutArtistInput[];
    updateMany?: Prisma.ArtworkUpdateManyWithWhereWithoutArtistInput | Prisma.ArtworkUpdateManyWithWhereWithoutArtistInput[];
    deleteMany?: Prisma.ArtworkScalarWhereInput | Prisma.ArtworkScalarWhereInput[];
};
export type ArtworkUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutArtistInput, Prisma.ArtworkUncheckedCreateWithoutArtistInput> | Prisma.ArtworkCreateWithoutArtistInput[] | Prisma.ArtworkUncheckedCreateWithoutArtistInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutArtistInput | Prisma.ArtworkCreateOrConnectWithoutArtistInput[];
    upsert?: Prisma.ArtworkUpsertWithWhereUniqueWithoutArtistInput | Prisma.ArtworkUpsertWithWhereUniqueWithoutArtistInput[];
    createMany?: Prisma.ArtworkCreateManyArtistInputEnvelope;
    set?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    disconnect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    delete?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    update?: Prisma.ArtworkUpdateWithWhereUniqueWithoutArtistInput | Prisma.ArtworkUpdateWithWhereUniqueWithoutArtistInput[];
    updateMany?: Prisma.ArtworkUpdateManyWithWhereWithoutArtistInput | Prisma.ArtworkUpdateManyWithWhereWithoutArtistInput[];
    deleteMany?: Prisma.ArtworkScalarWhereInput | Prisma.ArtworkScalarWhereInput[];
};
export type ArtworkCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutCategoryInput, Prisma.ArtworkUncheckedCreateWithoutCategoryInput> | Prisma.ArtworkCreateWithoutCategoryInput[] | Prisma.ArtworkUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutCategoryInput | Prisma.ArtworkCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ArtworkCreateManyCategoryInputEnvelope;
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
};
export type ArtworkUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutCategoryInput, Prisma.ArtworkUncheckedCreateWithoutCategoryInput> | Prisma.ArtworkCreateWithoutCategoryInput[] | Prisma.ArtworkUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutCategoryInput | Prisma.ArtworkCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ArtworkCreateManyCategoryInputEnvelope;
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
};
export type ArtworkUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutCategoryInput, Prisma.ArtworkUncheckedCreateWithoutCategoryInput> | Prisma.ArtworkCreateWithoutCategoryInput[] | Prisma.ArtworkUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutCategoryInput | Prisma.ArtworkCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ArtworkUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ArtworkUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ArtworkCreateManyCategoryInputEnvelope;
    set?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    disconnect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    delete?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    update?: Prisma.ArtworkUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ArtworkUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ArtworkUpdateManyWithWhereWithoutCategoryInput | Prisma.ArtworkUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ArtworkScalarWhereInput | Prisma.ArtworkScalarWhereInput[];
};
export type ArtworkUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutCategoryInput, Prisma.ArtworkUncheckedCreateWithoutCategoryInput> | Prisma.ArtworkCreateWithoutCategoryInput[] | Prisma.ArtworkUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutCategoryInput | Prisma.ArtworkCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ArtworkUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ArtworkUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ArtworkCreateManyCategoryInputEnvelope;
    set?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    disconnect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    delete?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    connect?: Prisma.ArtworkWhereUniqueInput | Prisma.ArtworkWhereUniqueInput[];
    update?: Prisma.ArtworkUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ArtworkUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ArtworkUpdateManyWithWhereWithoutCategoryInput | Prisma.ArtworkUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ArtworkScalarWhereInput | Prisma.ArtworkScalarWhereInput[];
};
export type EnumAvailabilityFieldUpdateOperationsInput = {
    set?: $Enums.Availability;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ArtworkCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutImagesInput, Prisma.ArtworkUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutImagesInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutImagesInput, Prisma.ArtworkUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.ArtworkUpsertWithoutImagesInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutImagesInput, Prisma.ArtworkUpdateWithoutImagesInput>, Prisma.ArtworkUncheckedUpdateWithoutImagesInput>;
};
export type ArtworkCreateNestedOneWithoutProvenanceInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutProvenanceInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutProvenanceNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutProvenanceInput;
    upsert?: Prisma.ArtworkUpsertWithoutProvenanceInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutProvenanceInput, Prisma.ArtworkUpdateWithoutProvenanceInput>, Prisma.ArtworkUncheckedUpdateWithoutProvenanceInput>;
};
export type ArtworkCreateNestedOneWithoutProvenanceChainInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceChainInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceChainInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutProvenanceChainInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutProvenanceChainNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceChainInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceChainInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutProvenanceChainInput;
    upsert?: Prisma.ArtworkUpsertWithoutProvenanceChainInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutProvenanceChainInput, Prisma.ArtworkUpdateWithoutProvenanceChainInput>, Prisma.ArtworkUncheckedUpdateWithoutProvenanceChainInput>;
};
export type ArtworkCreateNestedOneWithoutCertificatesInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutCertificatesInput, Prisma.ArtworkUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutCertificatesInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutCertificatesInput, Prisma.ArtworkUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutCertificatesInput;
    upsert?: Prisma.ArtworkUpsertWithoutCertificatesInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutCertificatesInput, Prisma.ArtworkUpdateWithoutCertificatesInput>, Prisma.ArtworkUncheckedUpdateWithoutCertificatesInput>;
};
export type ArtworkCreateNestedOneWithoutFavoritesInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutFavoritesInput, Prisma.ArtworkUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutFavoritesInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutFavoritesInput, Prisma.ArtworkUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutFavoritesInput;
    upsert?: Prisma.ArtworkUpsertWithoutFavoritesInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutFavoritesInput, Prisma.ArtworkUpdateWithoutFavoritesInput>, Prisma.ArtworkUncheckedUpdateWithoutFavoritesInput>;
};
export type ArtworkCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutReservationsInput, Prisma.ArtworkUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutReservationsInput, Prisma.ArtworkUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.ArtworkUpsertWithoutReservationsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutReservationsInput, Prisma.ArtworkUpdateWithoutReservationsInput>, Prisma.ArtworkUncheckedUpdateWithoutReservationsInput>;
};
export type ArtworkCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutOrderItemsInput, Prisma.ArtworkUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutOrderItemsInput, Prisma.ArtworkUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ArtworkUpsertWithoutOrderItemsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ArtworkUpdateWithoutOrderItemsInput>, Prisma.ArtworkUncheckedUpdateWithoutOrderItemsInput>;
};
export type ArtworkCreateNestedOneWithoutPriceRequestsInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutPriceRequestsInput, Prisma.ArtworkUncheckedCreateWithoutPriceRequestsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutPriceRequestsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutPriceRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutPriceRequestsInput, Prisma.ArtworkUncheckedCreateWithoutPriceRequestsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutPriceRequestsInput;
    upsert?: Prisma.ArtworkUpsertWithoutPriceRequestsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutPriceRequestsInput, Prisma.ArtworkUpdateWithoutPriceRequestsInput>, Prisma.ArtworkUncheckedUpdateWithoutPriceRequestsInput>;
};
export type ArtworkCreateNestedOneWithoutAuctionLotsInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutAuctionLotsInput, Prisma.ArtworkUncheckedCreateWithoutAuctionLotsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutAuctionLotsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
};
export type ArtworkUpdateOneRequiredWithoutAuctionLotsNestedInput = {
    create?: Prisma.XOR<Prisma.ArtworkCreateWithoutAuctionLotsInput, Prisma.ArtworkUncheckedCreateWithoutAuctionLotsInput>;
    connectOrCreate?: Prisma.ArtworkCreateOrConnectWithoutAuctionLotsInput;
    upsert?: Prisma.ArtworkUpsertWithoutAuctionLotsInput;
    connect?: Prisma.ArtworkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ArtworkUpdateToOneWithWhereWithoutAuctionLotsInput, Prisma.ArtworkUpdateWithoutAuctionLotsInput>, Prisma.ArtworkUncheckedUpdateWithoutAuctionLotsInput>;
};
export type ArtworkCreateWithoutArtistInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutArtistInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutArtistInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutArtistInput, Prisma.ArtworkUncheckedCreateWithoutArtistInput>;
};
export type ArtworkCreateManyArtistInputEnvelope = {
    data: Prisma.ArtworkCreateManyArtistInput | Prisma.ArtworkCreateManyArtistInput[];
    skipDuplicates?: boolean;
};
export type ArtworkUpsertWithWhereUniqueWithoutArtistInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutArtistInput, Prisma.ArtworkUncheckedUpdateWithoutArtistInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutArtistInput, Prisma.ArtworkUncheckedCreateWithoutArtistInput>;
};
export type ArtworkUpdateWithWhereUniqueWithoutArtistInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutArtistInput, Prisma.ArtworkUncheckedUpdateWithoutArtistInput>;
};
export type ArtworkUpdateManyWithWhereWithoutArtistInput = {
    where: Prisma.ArtworkScalarWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateManyMutationInput, Prisma.ArtworkUncheckedUpdateManyWithoutArtistInput>;
};
export type ArtworkScalarWhereInput = {
    AND?: Prisma.ArtworkScalarWhereInput | Prisma.ArtworkScalarWhereInput[];
    OR?: Prisma.ArtworkScalarWhereInput[];
    NOT?: Prisma.ArtworkScalarWhereInput | Prisma.ArtworkScalarWhereInput[];
    id?: Prisma.IntFilter<"Artwork"> | number;
    title?: Prisma.StringFilter<"Artwork"> | string;
    description?: Prisma.StringFilter<"Artwork"> | string;
    origin?: Prisma.StringFilter<"Artwork"> | string;
    region?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    tribe?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    era?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    historicalPeriod?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    material?: Prisma.StringFilter<"Artwork"> | string;
    dimensions?: Prisma.StringFilter<"Artwork"> | string;
    weight?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    condition?: Prisma.StringFilter<"Artwork"> | string;
    availability?: Prisma.EnumAvailabilityFilter<"Artwork"> | $Enums.Availability;
    price?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFilter<"Artwork"> | boolean;
    imageUrl?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    blurDataURL?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    scarcityIndex?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    preservationStatus?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    appreciationRate?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    isHero?: Prisma.BoolFilter<"Artwork"> | boolean;
    historicalStory?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    investmentThesis?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    estimatedValue?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.DecimalNullableFilter<"Artwork"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    artworkStatus?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    provenanceHash?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    acquiredYear?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    acquiredMethod?: Prisma.StringNullableFilter<"Artwork"> | string | null;
    artistId?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    categoryId?: Prisma.IntNullableFilter<"Artwork"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Artwork"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Artwork"> | Date | string;
};
export type ArtworkCreateWithoutCategoryInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutCategoryInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutCategoryInput, Prisma.ArtworkUncheckedCreateWithoutCategoryInput>;
};
export type ArtworkCreateManyCategoryInputEnvelope = {
    data: Prisma.ArtworkCreateManyCategoryInput | Prisma.ArtworkCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ArtworkUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutCategoryInput, Prisma.ArtworkUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutCategoryInput, Prisma.ArtworkUncheckedCreateWithoutCategoryInput>;
};
export type ArtworkUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutCategoryInput, Prisma.ArtworkUncheckedUpdateWithoutCategoryInput>;
};
export type ArtworkUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ArtworkScalarWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateManyMutationInput, Prisma.ArtworkUncheckedUpdateManyWithoutCategoryInput>;
};
export type ArtworkCreateWithoutImagesInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutImagesInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutImagesInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutImagesInput, Prisma.ArtworkUncheckedCreateWithoutImagesInput>;
};
export type ArtworkUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutImagesInput, Prisma.ArtworkUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutImagesInput, Prisma.ArtworkUncheckedCreateWithoutImagesInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutImagesInput, Prisma.ArtworkUncheckedUpdateWithoutImagesInput>;
};
export type ArtworkUpdateWithoutImagesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutProvenanceInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutProvenanceInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutProvenanceInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceInput>;
};
export type ArtworkUpsertWithoutProvenanceInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutProvenanceInput, Prisma.ArtworkUncheckedUpdateWithoutProvenanceInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutProvenanceInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutProvenanceInput, Prisma.ArtworkUncheckedUpdateWithoutProvenanceInput>;
};
export type ArtworkUpdateWithoutProvenanceInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutProvenanceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutProvenanceChainInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutProvenanceChainInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutProvenanceChainInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceChainInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceChainInput>;
};
export type ArtworkUpsertWithoutProvenanceChainInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutProvenanceChainInput, Prisma.ArtworkUncheckedUpdateWithoutProvenanceChainInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutProvenanceChainInput, Prisma.ArtworkUncheckedCreateWithoutProvenanceChainInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutProvenanceChainInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutProvenanceChainInput, Prisma.ArtworkUncheckedUpdateWithoutProvenanceChainInput>;
};
export type ArtworkUpdateWithoutProvenanceChainInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutProvenanceChainInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutCertificatesInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutCertificatesInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutCertificatesInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutCertificatesInput, Prisma.ArtworkUncheckedCreateWithoutCertificatesInput>;
};
export type ArtworkUpsertWithoutCertificatesInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutCertificatesInput, Prisma.ArtworkUncheckedUpdateWithoutCertificatesInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutCertificatesInput, Prisma.ArtworkUncheckedCreateWithoutCertificatesInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutCertificatesInput, Prisma.ArtworkUncheckedUpdateWithoutCertificatesInput>;
};
export type ArtworkUpdateWithoutCertificatesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutCertificatesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutFavoritesInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutFavoritesInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutFavoritesInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutFavoritesInput, Prisma.ArtworkUncheckedCreateWithoutFavoritesInput>;
};
export type ArtworkUpsertWithoutFavoritesInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutFavoritesInput, Prisma.ArtworkUncheckedUpdateWithoutFavoritesInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutFavoritesInput, Prisma.ArtworkUncheckedCreateWithoutFavoritesInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutFavoritesInput, Prisma.ArtworkUncheckedUpdateWithoutFavoritesInput>;
};
export type ArtworkUpdateWithoutFavoritesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutFavoritesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutReservationsInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutReservationsInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutReservationsInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutReservationsInput, Prisma.ArtworkUncheckedCreateWithoutReservationsInput>;
};
export type ArtworkUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutReservationsInput, Prisma.ArtworkUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutReservationsInput, Prisma.ArtworkUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutReservationsInput, Prisma.ArtworkUncheckedUpdateWithoutReservationsInput>;
};
export type ArtworkUpdateWithoutReservationsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutOrderItemsInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutOrderItemsInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutOrderItemsInput, Prisma.ArtworkUncheckedCreateWithoutOrderItemsInput>;
};
export type ArtworkUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutOrderItemsInput, Prisma.ArtworkUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutOrderItemsInput, Prisma.ArtworkUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutOrderItemsInput, Prisma.ArtworkUncheckedUpdateWithoutOrderItemsInput>;
};
export type ArtworkUpdateWithoutOrderItemsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutPriceRequestsInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutPriceRequestsInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    auctionLots?: Prisma.AuctionLotUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutPriceRequestsInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutPriceRequestsInput, Prisma.ArtworkUncheckedCreateWithoutPriceRequestsInput>;
};
export type ArtworkUpsertWithoutPriceRequestsInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutPriceRequestsInput, Prisma.ArtworkUncheckedUpdateWithoutPriceRequestsInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutPriceRequestsInput, Prisma.ArtworkUncheckedCreateWithoutPriceRequestsInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutPriceRequestsInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutPriceRequestsInput, Prisma.ArtworkUncheckedUpdateWithoutPriceRequestsInput>;
};
export type ArtworkUpdateWithoutPriceRequestsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutPriceRequestsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateWithoutAuctionLotsInput = {
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    artist?: Prisma.ArtistCreateNestedOneWithoutArtworksInput;
    category?: Prisma.CategoryCreateNestedOneWithoutArtworksInput;
    images?: Prisma.ArtworkImageCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutArtworkInput;
};
export type ArtworkUncheckedCreateWithoutAuctionLotsInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.ArtworkImageUncheckedCreateNestedManyWithoutArtworkInput;
    provenance?: Prisma.ProvenanceRecordUncheckedCreateNestedManyWithoutArtworkInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedCreateNestedManyWithoutArtworkInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutArtworkInput;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutArtworkInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutArtworkInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutArtworkInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutArtworkInput;
};
export type ArtworkCreateOrConnectWithoutAuctionLotsInput = {
    where: Prisma.ArtworkWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutAuctionLotsInput, Prisma.ArtworkUncheckedCreateWithoutAuctionLotsInput>;
};
export type ArtworkUpsertWithoutAuctionLotsInput = {
    update: Prisma.XOR<Prisma.ArtworkUpdateWithoutAuctionLotsInput, Prisma.ArtworkUncheckedUpdateWithoutAuctionLotsInput>;
    create: Prisma.XOR<Prisma.ArtworkCreateWithoutAuctionLotsInput, Prisma.ArtworkUncheckedCreateWithoutAuctionLotsInput>;
    where?: Prisma.ArtworkWhereInput;
};
export type ArtworkUpdateToOneWithWhereWithoutAuctionLotsInput = {
    where?: Prisma.ArtworkWhereInput;
    data: Prisma.XOR<Prisma.ArtworkUpdateWithoutAuctionLotsInput, Prisma.ArtworkUncheckedUpdateWithoutAuctionLotsInput>;
};
export type ArtworkUpdateWithoutAuctionLotsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutAuctionLotsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkCreateManyArtistInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    categoryId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArtworkUpdateWithoutArtistInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutArtistInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateManyWithoutArtistInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ArtworkCreateManyCategoryInput = {
    id?: number;
    title: string;
    description: string;
    origin: string;
    region?: string | null;
    tribe?: string | null;
    era?: string | null;
    historicalPeriod?: string | null;
    material: string;
    dimensions: string;
    weight?: string | null;
    condition: string;
    availability?: $Enums.Availability;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: boolean;
    imageUrl?: string | null;
    blurDataURL?: string | null;
    scarcityIndex?: number | null;
    preservationStatus?: string | null;
    appreciationRate?: string | null;
    isHero?: boolean;
    historicalStory?: string | null;
    investmentThesis?: string | null;
    estimatedValue?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: string | null;
    artworkStatus?: string | null;
    provenanceHash?: string | null;
    acquiredYear?: number | null;
    acquiredMethod?: string | null;
    artistId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ArtworkUpdateWithoutCategoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    artist?: Prisma.ArtistUpdateOneWithoutArtworksNestedInput;
    images?: Prisma.ArtworkImageUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.ArtworkImageUncheckedUpdateManyWithoutArtworkNestedInput;
    provenance?: Prisma.ProvenanceRecordUncheckedUpdateManyWithoutArtworkNestedInput;
    provenanceChain?: Prisma.ProvenanceChainUncheckedUpdateManyWithoutArtworkNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutArtworkNestedInput;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutArtworkNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutArtworkNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutArtworkNestedInput;
    auctionLots?: Prisma.AuctionLotUncheckedUpdateManyWithoutArtworkNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutArtworkNestedInput;
};
export type ArtworkUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    origin?: Prisma.StringFieldUpdateOperationsInput | string;
    region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tribe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    era?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    historicalPeriod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    material?: Prisma.StringFieldUpdateOperationsInput | string;
    dimensions?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    availability?: Prisma.EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    isPOR?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    blurDataURL?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scarcityIndex?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    preservationStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appreciationRate?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isHero?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    historicalStory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investmentThesis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estimatedValue?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    historicalCagr?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    yieldIndex?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artworkStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provenanceHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquiredYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acquiredMethod?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    artistId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ArtworkCountOutputType
 */
export type ArtworkCountOutputType = {
    images: number;
    provenance: number;
    provenanceChain: number;
    certificates: number;
    favorites: number;
    reservations: number;
    orderItems: number;
    auctionLots: number;
    priceRequests: number;
};
export type ArtworkCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | ArtworkCountOutputTypeCountImagesArgs;
    provenance?: boolean | ArtworkCountOutputTypeCountProvenanceArgs;
    provenanceChain?: boolean | ArtworkCountOutputTypeCountProvenanceChainArgs;
    certificates?: boolean | ArtworkCountOutputTypeCountCertificatesArgs;
    favorites?: boolean | ArtworkCountOutputTypeCountFavoritesArgs;
    reservations?: boolean | ArtworkCountOutputTypeCountReservationsArgs;
    orderItems?: boolean | ArtworkCountOutputTypeCountOrderItemsArgs;
    auctionLots?: boolean | ArtworkCountOutputTypeCountAuctionLotsArgs;
    priceRequests?: boolean | ArtworkCountOutputTypeCountPriceRequestsArgs;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtworkCountOutputType
     */
    select?: Prisma.ArtworkCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArtworkImageWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountProvenanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProvenanceRecordWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountProvenanceChainArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProvenanceChainWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountCertificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountAuctionLotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuctionLotWhereInput;
};
/**
 * ArtworkCountOutputType without action
 */
export type ArtworkCountOutputTypeCountPriceRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceRequestWhereInput;
};
export type ArtworkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    origin?: boolean;
    region?: boolean;
    tribe?: boolean;
    era?: boolean;
    historicalPeriod?: boolean;
    material?: boolean;
    dimensions?: boolean;
    weight?: boolean;
    condition?: boolean;
    availability?: boolean;
    price?: boolean;
    isPOR?: boolean;
    imageUrl?: boolean;
    blurDataURL?: boolean;
    scarcityIndex?: boolean;
    preservationStatus?: boolean;
    appreciationRate?: boolean;
    isHero?: boolean;
    historicalStory?: boolean;
    investmentThesis?: boolean;
    estimatedValue?: boolean;
    historicalCagr?: boolean;
    yieldIndex?: boolean;
    tier?: boolean;
    artworkStatus?: boolean;
    provenanceHash?: boolean;
    acquiredYear?: boolean;
    acquiredMethod?: boolean;
    artistId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    artist?: boolean | Prisma.Artwork$artistArgs<ExtArgs>;
    category?: boolean | Prisma.Artwork$categoryArgs<ExtArgs>;
    images?: boolean | Prisma.Artwork$imagesArgs<ExtArgs>;
    provenance?: boolean | Prisma.Artwork$provenanceArgs<ExtArgs>;
    provenanceChain?: boolean | Prisma.Artwork$provenanceChainArgs<ExtArgs>;
    certificates?: boolean | Prisma.Artwork$certificatesArgs<ExtArgs>;
    favorites?: boolean | Prisma.Artwork$favoritesArgs<ExtArgs>;
    reservations?: boolean | Prisma.Artwork$reservationsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Artwork$orderItemsArgs<ExtArgs>;
    auctionLots?: boolean | Prisma.Artwork$auctionLotsArgs<ExtArgs>;
    priceRequests?: boolean | Prisma.Artwork$priceRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ArtworkCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["artwork"]>;
export type ArtworkSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    origin?: boolean;
    region?: boolean;
    tribe?: boolean;
    era?: boolean;
    historicalPeriod?: boolean;
    material?: boolean;
    dimensions?: boolean;
    weight?: boolean;
    condition?: boolean;
    availability?: boolean;
    price?: boolean;
    isPOR?: boolean;
    imageUrl?: boolean;
    blurDataURL?: boolean;
    scarcityIndex?: boolean;
    preservationStatus?: boolean;
    appreciationRate?: boolean;
    isHero?: boolean;
    historicalStory?: boolean;
    investmentThesis?: boolean;
    estimatedValue?: boolean;
    historicalCagr?: boolean;
    yieldIndex?: boolean;
    tier?: boolean;
    artworkStatus?: boolean;
    provenanceHash?: boolean;
    acquiredYear?: boolean;
    acquiredMethod?: boolean;
    artistId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ArtworkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "origin" | "region" | "tribe" | "era" | "historicalPeriod" | "material" | "dimensions" | "weight" | "condition" | "availability" | "price" | "isPOR" | "imageUrl" | "blurDataURL" | "scarcityIndex" | "preservationStatus" | "appreciationRate" | "isHero" | "historicalStory" | "investmentThesis" | "estimatedValue" | "historicalCagr" | "yieldIndex" | "tier" | "artworkStatus" | "provenanceHash" | "acquiredYear" | "acquiredMethod" | "artistId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["artwork"]>;
export type ArtworkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    artist?: boolean | Prisma.Artwork$artistArgs<ExtArgs>;
    category?: boolean | Prisma.Artwork$categoryArgs<ExtArgs>;
    images?: boolean | Prisma.Artwork$imagesArgs<ExtArgs>;
    provenance?: boolean | Prisma.Artwork$provenanceArgs<ExtArgs>;
    provenanceChain?: boolean | Prisma.Artwork$provenanceChainArgs<ExtArgs>;
    certificates?: boolean | Prisma.Artwork$certificatesArgs<ExtArgs>;
    favorites?: boolean | Prisma.Artwork$favoritesArgs<ExtArgs>;
    reservations?: boolean | Prisma.Artwork$reservationsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Artwork$orderItemsArgs<ExtArgs>;
    auctionLots?: boolean | Prisma.Artwork$auctionLotsArgs<ExtArgs>;
    priceRequests?: boolean | Prisma.Artwork$priceRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ArtworkCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ArtworkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Artwork";
    objects: {
        artist: Prisma.$ArtistPayload<ExtArgs> | null;
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        images: Prisma.$ArtworkImagePayload<ExtArgs>[];
        provenance: Prisma.$ProvenanceRecordPayload<ExtArgs>[];
        provenanceChain: Prisma.$ProvenanceChainPayload<ExtArgs>[];
        certificates: Prisma.$CertificatePayload<ExtArgs>[];
        favorites: Prisma.$FavoritePayload<ExtArgs>[];
        reservations: Prisma.$ReservationPayload<ExtArgs>[];
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
        auctionLots: Prisma.$AuctionLotPayload<ExtArgs>[];
        priceRequests: Prisma.$PriceRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string;
        origin: string;
        region: string | null;
        tribe: string | null;
        era: string | null;
        historicalPeriod: string | null;
        material: string;
        dimensions: string;
        weight: string | null;
        condition: string;
        availability: $Enums.Availability;
        price: runtime.Decimal | null;
        isPOR: boolean;
        imageUrl: string | null;
        blurDataURL: string | null;
        scarcityIndex: number | null;
        preservationStatus: string | null;
        appreciationRate: string | null;
        isHero: boolean;
        historicalStory: string | null;
        investmentThesis: string | null;
        estimatedValue: runtime.Decimal | null;
        historicalCagr: runtime.Decimal | null;
        yieldIndex: runtime.Decimal | null;
        tier: string | null;
        artworkStatus: string | null;
        provenanceHash: string | null;
        acquiredYear: number | null;
        acquiredMethod: string | null;
        artistId: number | null;
        categoryId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["artwork"]>;
    composites: {};
};
export type ArtworkGetPayload<S extends boolean | null | undefined | ArtworkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ArtworkPayload, S>;
export type ArtworkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ArtworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArtworkCountAggregateInputType | true;
};
export interface ArtworkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Artwork'];
        meta: {
            name: 'Artwork';
        };
    };
    /**
     * Find zero or one Artwork that matches the filter.
     * @param {ArtworkFindUniqueArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtworkFindUniqueArgs>(args: Prisma.SelectSubset<T, ArtworkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Artwork that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtworkFindUniqueOrThrowArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtworkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ArtworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Artwork that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkFindFirstArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtworkFindFirstArgs>(args?: Prisma.SelectSubset<T, ArtworkFindFirstArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Artwork that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkFindFirstOrThrowArgs} args - Arguments to find a Artwork
     * @example
     * // Get one Artwork
     * const artwork = await prisma.artwork.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtworkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ArtworkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Artworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artworks
     * const artworks = await prisma.artwork.findMany()
     *
     * // Get first 10 Artworks
     * const artworks = await prisma.artwork.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const artworkWithIdOnly = await prisma.artwork.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ArtworkFindManyArgs>(args?: Prisma.SelectSubset<T, ArtworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Artwork.
     * @param {ArtworkCreateArgs} args - Arguments to create a Artwork.
     * @example
     * // Create one Artwork
     * const Artwork = await prisma.artwork.create({
     *   data: {
     *     // ... data to create a Artwork
     *   }
     * })
     *
     */
    create<T extends ArtworkCreateArgs>(args: Prisma.SelectSubset<T, ArtworkCreateArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Artworks.
     * @param {ArtworkCreateManyArgs} args - Arguments to create many Artworks.
     * @example
     * // Create many Artworks
     * const artwork = await prisma.artwork.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ArtworkCreateManyArgs>(args?: Prisma.SelectSubset<T, ArtworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Artwork.
     * @param {ArtworkDeleteArgs} args - Arguments to delete one Artwork.
     * @example
     * // Delete one Artwork
     * const Artwork = await prisma.artwork.delete({
     *   where: {
     *     // ... filter to delete one Artwork
     *   }
     * })
     *
     */
    delete<T extends ArtworkDeleteArgs>(args: Prisma.SelectSubset<T, ArtworkDeleteArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Artwork.
     * @param {ArtworkUpdateArgs} args - Arguments to update one Artwork.
     * @example
     * // Update one Artwork
     * const artwork = await prisma.artwork.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ArtworkUpdateArgs>(args: Prisma.SelectSubset<T, ArtworkUpdateArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Artworks.
     * @param {ArtworkDeleteManyArgs} args - Arguments to filter Artworks to delete.
     * @example
     * // Delete a few Artworks
     * const { count } = await prisma.artwork.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ArtworkDeleteManyArgs>(args?: Prisma.SelectSubset<T, ArtworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Artworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artworks
     * const artwork = await prisma.artwork.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ArtworkUpdateManyArgs>(args: Prisma.SelectSubset<T, ArtworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Artwork.
     * @param {ArtworkUpsertArgs} args - Arguments to update or create a Artwork.
     * @example
     * // Update or create a Artwork
     * const artwork = await prisma.artwork.upsert({
     *   create: {
     *     // ... data to create a Artwork
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artwork we want to update
     *   }
     * })
     */
    upsert<T extends ArtworkUpsertArgs>(args: Prisma.SelectSubset<T, ArtworkUpsertArgs<ExtArgs>>): Prisma.Prisma__ArtworkClient<runtime.Types.Result.GetResult<Prisma.$ArtworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Artworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkCountArgs} args - Arguments to filter Artworks to count.
     * @example
     * // Count the number of Artworks
     * const count = await prisma.artwork.count({
     *   where: {
     *     // ... the filter for the Artworks we want to count
     *   }
     * })
    **/
    count<T extends ArtworkCountArgs>(args?: Prisma.Subset<T, ArtworkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ArtworkCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Artwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtworkAggregateArgs>(args: Prisma.Subset<T, ArtworkAggregateArgs>): Prisma.PrismaPromise<GetArtworkAggregateType<T>>;
    /**
     * Group by Artwork.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtworkGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ArtworkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ArtworkGroupByArgs['orderBy'];
    } : {
        orderBy?: ArtworkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ArtworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Artwork model
     */
    readonly fields: ArtworkFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Artwork.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ArtworkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    artist<T extends Prisma.Artwork$artistArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$artistArgs<ExtArgs>>): Prisma.Prisma__ArtistClient<runtime.Types.Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.Artwork$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    images<T extends Prisma.Artwork$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArtworkImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    provenance<T extends Prisma.Artwork$provenanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$provenanceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProvenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    provenanceChain<T extends Prisma.Artwork$provenanceChainArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$provenanceChainArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProvenanceChainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    certificates<T extends Prisma.Artwork$certificatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favorites<T extends Prisma.Artwork$favoritesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reservations<T extends Prisma.Artwork$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.Artwork$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auctionLots<T extends Prisma.Artwork$auctionLotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$auctionLotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuctionLotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    priceRequests<T extends Prisma.Artwork$priceRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Artwork$priceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Artwork model
 */
export interface ArtworkFieldRefs {
    readonly id: Prisma.FieldRef<"Artwork", 'Int'>;
    readonly title: Prisma.FieldRef<"Artwork", 'String'>;
    readonly description: Prisma.FieldRef<"Artwork", 'String'>;
    readonly origin: Prisma.FieldRef<"Artwork", 'String'>;
    readonly region: Prisma.FieldRef<"Artwork", 'String'>;
    readonly tribe: Prisma.FieldRef<"Artwork", 'String'>;
    readonly era: Prisma.FieldRef<"Artwork", 'String'>;
    readonly historicalPeriod: Prisma.FieldRef<"Artwork", 'String'>;
    readonly material: Prisma.FieldRef<"Artwork", 'String'>;
    readonly dimensions: Prisma.FieldRef<"Artwork", 'String'>;
    readonly weight: Prisma.FieldRef<"Artwork", 'String'>;
    readonly condition: Prisma.FieldRef<"Artwork", 'String'>;
    readonly availability: Prisma.FieldRef<"Artwork", 'Availability'>;
    readonly price: Prisma.FieldRef<"Artwork", 'Decimal'>;
    readonly isPOR: Prisma.FieldRef<"Artwork", 'Boolean'>;
    readonly imageUrl: Prisma.FieldRef<"Artwork", 'String'>;
    readonly blurDataURL: Prisma.FieldRef<"Artwork", 'String'>;
    readonly scarcityIndex: Prisma.FieldRef<"Artwork", 'Int'>;
    readonly preservationStatus: Prisma.FieldRef<"Artwork", 'String'>;
    readonly appreciationRate: Prisma.FieldRef<"Artwork", 'String'>;
    readonly isHero: Prisma.FieldRef<"Artwork", 'Boolean'>;
    readonly historicalStory: Prisma.FieldRef<"Artwork", 'String'>;
    readonly investmentThesis: Prisma.FieldRef<"Artwork", 'String'>;
    readonly estimatedValue: Prisma.FieldRef<"Artwork", 'Decimal'>;
    readonly historicalCagr: Prisma.FieldRef<"Artwork", 'Decimal'>;
    readonly yieldIndex: Prisma.FieldRef<"Artwork", 'Decimal'>;
    readonly tier: Prisma.FieldRef<"Artwork", 'String'>;
    readonly artworkStatus: Prisma.FieldRef<"Artwork", 'String'>;
    readonly provenanceHash: Prisma.FieldRef<"Artwork", 'String'>;
    readonly acquiredYear: Prisma.FieldRef<"Artwork", 'Int'>;
    readonly acquiredMethod: Prisma.FieldRef<"Artwork", 'String'>;
    readonly artistId: Prisma.FieldRef<"Artwork", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"Artwork", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Artwork", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Artwork", 'DateTime'>;
}
/**
 * Artwork findUnique
 */
export type ArtworkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Artwork to fetch.
     */
    where: Prisma.ArtworkWhereUniqueInput;
};
/**
 * Artwork findUniqueOrThrow
 */
export type ArtworkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Artwork to fetch.
     */
    where: Prisma.ArtworkWhereUniqueInput;
};
/**
 * Artwork findFirst
 */
export type ArtworkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Artwork to fetch.
     */
    where?: Prisma.ArtworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artworks to fetch.
     */
    orderBy?: Prisma.ArtworkOrderByWithRelationInput | Prisma.ArtworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Artworks.
     */
    cursor?: Prisma.ArtworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artworks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artworks.
     */
    distinct?: Prisma.ArtworkScalarFieldEnum | Prisma.ArtworkScalarFieldEnum[];
};
/**
 * Artwork findFirstOrThrow
 */
export type ArtworkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Artwork to fetch.
     */
    where?: Prisma.ArtworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artworks to fetch.
     */
    orderBy?: Prisma.ArtworkOrderByWithRelationInput | Prisma.ArtworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Artworks.
     */
    cursor?: Prisma.ArtworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artworks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artworks.
     */
    distinct?: Prisma.ArtworkScalarFieldEnum | Prisma.ArtworkScalarFieldEnum[];
};
/**
 * Artwork findMany
 */
export type ArtworkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Artworks to fetch.
     */
    where?: Prisma.ArtworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Artworks to fetch.
     */
    orderBy?: Prisma.ArtworkOrderByWithRelationInput | Prisma.ArtworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Artworks.
     */
    cursor?: Prisma.ArtworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Artworks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Artworks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Artworks.
     */
    distinct?: Prisma.ArtworkScalarFieldEnum | Prisma.ArtworkScalarFieldEnum[];
};
/**
 * Artwork create
 */
export type ArtworkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Artwork.
     */
    data: Prisma.XOR<Prisma.ArtworkCreateInput, Prisma.ArtworkUncheckedCreateInput>;
};
/**
 * Artwork createMany
 */
export type ArtworkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artworks.
     */
    data: Prisma.ArtworkCreateManyInput | Prisma.ArtworkCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Artwork update
 */
export type ArtworkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Artwork.
     */
    data: Prisma.XOR<Prisma.ArtworkUpdateInput, Prisma.ArtworkUncheckedUpdateInput>;
    /**
     * Choose, which Artwork to update.
     */
    where: Prisma.ArtworkWhereUniqueInput;
};
/**
 * Artwork updateMany
 */
export type ArtworkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Artworks.
     */
    data: Prisma.XOR<Prisma.ArtworkUpdateManyMutationInput, Prisma.ArtworkUncheckedUpdateManyInput>;
    /**
     * Filter which Artworks to update
     */
    where?: Prisma.ArtworkWhereInput;
    /**
     * Limit how many Artworks to update.
     */
    limit?: number;
};
/**
 * Artwork upsert
 */
export type ArtworkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Artwork to update in case it exists.
     */
    where: Prisma.ArtworkWhereUniqueInput;
    /**
     * In case the Artwork found by the `where` argument doesn't exist, create a new Artwork with this data.
     */
    create: Prisma.XOR<Prisma.ArtworkCreateInput, Prisma.ArtworkUncheckedCreateInput>;
    /**
     * In case the Artwork was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ArtworkUpdateInput, Prisma.ArtworkUncheckedUpdateInput>;
};
/**
 * Artwork delete
 */
export type ArtworkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Artwork to delete.
     */
    where: Prisma.ArtworkWhereUniqueInput;
};
/**
 * Artwork deleteMany
 */
export type ArtworkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Artworks to delete
     */
    where?: Prisma.ArtworkWhereInput;
    /**
     * Limit how many Artworks to delete.
     */
    limit?: number;
};
/**
 * Artwork.artist
 */
export type Artwork$artistArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ArtistWhereInput;
};
/**
 * Artwork.category
 */
export type Artwork$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: Prisma.CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
/**
 * Artwork.images
 */
export type Artwork$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ArtworkImageWhereInput;
    orderBy?: Prisma.ArtworkImageOrderByWithRelationInput | Prisma.ArtworkImageOrderByWithRelationInput[];
    cursor?: Prisma.ArtworkImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArtworkImageScalarFieldEnum | Prisma.ArtworkImageScalarFieldEnum[];
};
/**
 * Artwork.provenance
 */
export type Artwork$provenanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvenanceRecord
     */
    select?: Prisma.ProvenanceRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProvenanceRecord
     */
    omit?: Prisma.ProvenanceRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProvenanceRecordInclude<ExtArgs> | null;
    where?: Prisma.ProvenanceRecordWhereInput;
    orderBy?: Prisma.ProvenanceRecordOrderByWithRelationInput | Prisma.ProvenanceRecordOrderByWithRelationInput[];
    cursor?: Prisma.ProvenanceRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvenanceRecordScalarFieldEnum | Prisma.ProvenanceRecordScalarFieldEnum[];
};
/**
 * Artwork.provenanceChain
 */
export type Artwork$provenanceChainArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProvenanceChainWhereInput;
    orderBy?: Prisma.ProvenanceChainOrderByWithRelationInput | Prisma.ProvenanceChainOrderByWithRelationInput[];
    cursor?: Prisma.ProvenanceChainWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvenanceChainScalarFieldEnum | Prisma.ProvenanceChainScalarFieldEnum[];
};
/**
 * Artwork.certificates
 */
export type Artwork$certificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
/**
 * Artwork.favorites
 */
export type Artwork$favoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FavoriteInclude<ExtArgs> | null;
    where?: Prisma.FavoriteWhereInput;
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    cursor?: Prisma.FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FavoriteScalarFieldEnum | Prisma.FavoriteScalarFieldEnum[];
};
/**
 * Artwork.reservations
 */
export type Artwork$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reservation
     */
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationScalarFieldEnum | Prisma.ReservationScalarFieldEnum[];
};
/**
 * Artwork.orderItems
 */
export type Artwork$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
/**
 * Artwork.auctionLots
 */
export type Artwork$auctionLotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuctionLot
     */
    select?: Prisma.AuctionLotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuctionLot
     */
    omit?: Prisma.AuctionLotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuctionLotInclude<ExtArgs> | null;
    where?: Prisma.AuctionLotWhereInput;
    orderBy?: Prisma.AuctionLotOrderByWithRelationInput | Prisma.AuctionLotOrderByWithRelationInput[];
    cursor?: Prisma.AuctionLotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuctionLotScalarFieldEnum | Prisma.AuctionLotScalarFieldEnum[];
};
/**
 * Artwork.priceRequests
 */
export type Artwork$priceRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRequest
     */
    select?: Prisma.PriceRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceRequest
     */
    omit?: Prisma.PriceRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceRequestInclude<ExtArgs> | null;
    where?: Prisma.PriceRequestWhereInput;
    orderBy?: Prisma.PriceRequestOrderByWithRelationInput | Prisma.PriceRequestOrderByWithRelationInput[];
    cursor?: Prisma.PriceRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PriceRequestScalarFieldEnum | Prisma.PriceRequestScalarFieldEnum[];
};
/**
 * Artwork without action
 */
export type ArtworkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Artwork.d.ts.map