import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    name: string | null;
    role: $Enums.Role | null;
    status: $Enums.UserStatus | null;
    avatar: string | null;
    phone: string | null;
    institution: string | null;
    country: string | null;
    tier: string | null;
    twoFactorEnabled: boolean | null;
    emailVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    name: string | null;
    role: $Enums.Role | null;
    status: $Enums.UserStatus | null;
    avatar: string | null;
    phone: string | null;
    institution: string | null;
    country: string | null;
    tier: string | null;
    twoFactorEnabled: boolean | null;
    emailVerified: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    name: number;
    role: number;
    status: number;
    avatar: number;
    phone: number;
    institution: number;
    country: number;
    tier: number;
    twoFactorEnabled: number;
    emailVerified: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    status?: true;
    avatar?: true;
    phone?: true;
    institution?: true;
    country?: true;
    tier?: true;
    twoFactorEnabled?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    status?: true;
    avatar?: true;
    phone?: true;
    institution?: true;
    country?: true;
    tier?: true;
    twoFactorEnabled?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    role?: true;
    status?: true;
    avatar?: true;
    phone?: true;
    institution?: true;
    country?: true;
    tier?: true;
    twoFactorEnabled?: true;
    emailVerified?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    email: string;
    password: string;
    name: string;
    role: $Enums.Role;
    status: $Enums.UserStatus;
    avatar: string | null;
    phone: string | null;
    institution: string | null;
    country: string | null;
    tier: string | null;
    twoFactorEnabled: boolean;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    institution?: Prisma.StringNullableFilter<"User"> | string | null;
    country?: Prisma.StringNullableFilter<"User"> | string | null;
    tier?: Prisma.StringNullableFilter<"User"> | string | null;
    twoFactorEnabled?: Prisma.BoolFilter<"User"> | boolean;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    favorites?: Prisma.FavoriteListRelationFilter;
    reservations?: Prisma.ReservationListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    consultations?: Prisma.ConsultationListRelationFilter;
    certificates?: Prisma.CertificateListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    priceRequests?: Prisma.PriceRequestListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    chatMessages?: Prisma.ChatMessageListRelationFilter;
    chatReadStatus?: Prisma.ChatThreadReadStatusListRelationFilter;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    advisorClients?: Prisma.AdvisorClientListRelationFilter;
    advisorPlacements?: Prisma.AdvisorPlacementListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    institution?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    favorites?: Prisma.FavoriteOrderByRelationAggregateInput;
    reservations?: Prisma.ReservationOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    consultations?: Prisma.ConsultationOrderByRelationAggregateInput;
    certificates?: Prisma.CertificateOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
    priceRequests?: Prisma.PriceRequestOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    chatMessages?: Prisma.ChatMessageOrderByRelationAggregateInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusOrderByRelationAggregateInput;
    supportTickets?: Prisma.SupportTicketOrderByRelationAggregateInput;
    advisorClients?: Prisma.AdvisorClientOrderByRelationAggregateInput;
    advisorPlacements?: Prisma.AdvisorPlacementOrderByRelationAggregateInput;
    _relevance?: Prisma.UserOrderByRelevanceInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    institution?: Prisma.StringNullableFilter<"User"> | string | null;
    country?: Prisma.StringNullableFilter<"User"> | string | null;
    tier?: Prisma.StringNullableFilter<"User"> | string | null;
    twoFactorEnabled?: Prisma.BoolFilter<"User"> | boolean;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    favorites?: Prisma.FavoriteListRelationFilter;
    reservations?: Prisma.ReservationListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    consultations?: Prisma.ConsultationListRelationFilter;
    certificates?: Prisma.CertificateListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    priceRequests?: Prisma.PriceRequestListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    chatMessages?: Prisma.ChatMessageListRelationFilter;
    chatReadStatus?: Prisma.ChatThreadReadStatusListRelationFilter;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    advisorClients?: Prisma.AdvisorClientListRelationFilter;
    advisorPlacements?: Prisma.AdvisorPlacementListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    institution?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    tier?: Prisma.SortOrderInput | Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus;
    avatar?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    institution?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    tier?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    twoFactorEnabled?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    emailVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserOrderByRelevanceInput = {
    fields: Prisma.UserOrderByRelevanceFieldEnum | Prisma.UserOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    institution?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    emailVerified?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCertificatesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCertificatesInput;
    upsert?: Prisma.UserUpsertWithoutCertificatesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCertificatesInput, Prisma.UserUpdateWithoutCertificatesInput>, Prisma.UserUncheckedUpdateWithoutCertificatesInput>;
};
export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFavoritesInput;
    upsert?: Prisma.UserUpsertWithoutFavoritesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFavoritesInput, Prisma.UserUpdateWithoutFavoritesInput>, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
};
export type UserCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.UserUpsertWithoutReservationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReservationsInput, Prisma.UserUpdateWithoutReservationsInput>, Prisma.UserUncheckedUpdateWithoutReservationsInput>;
};
export type UserCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.UserUpsertWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, Prisma.UserUpdateWithoutOrdersInput>, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserCreateNestedOneWithoutConsultationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConsultationsInput, Prisma.UserUncheckedCreateWithoutConsultationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConsultationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutConsultationsInput, Prisma.UserUncheckedCreateWithoutConsultationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutConsultationsInput;
    upsert?: Prisma.UserUpsertWithoutConsultationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutConsultationsInput, Prisma.UserUpdateWithoutConsultationsInput>, Prisma.UserUncheckedUpdateWithoutConsultationsInput>;
};
export type UserCreateNestedOneWithoutPriceRequestsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPriceRequestsInput, Prisma.UserUncheckedCreateWithoutPriceRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPriceRequestsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPriceRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPriceRequestsInput, Prisma.UserUncheckedCreateWithoutPriceRequestsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPriceRequestsInput;
    upsert?: Prisma.UserUpsertWithoutPriceRequestsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPriceRequestsInput, Prisma.UserUpdateWithoutPriceRequestsInput>, Prisma.UserUncheckedUpdateWithoutPriceRequestsInput>;
};
export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UserUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutAdvisorClientsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdvisorClientsInput, Prisma.UserUncheckedCreateWithoutAdvisorClientsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdvisorClientsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAdvisorClientsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdvisorClientsInput, Prisma.UserUncheckedCreateWithoutAdvisorClientsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdvisorClientsInput;
    upsert?: Prisma.UserUpsertWithoutAdvisorClientsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAdvisorClientsInput, Prisma.UserUpdateWithoutAdvisorClientsInput>, Prisma.UserUncheckedUpdateWithoutAdvisorClientsInput>;
};
export type UserCreateNestedOneWithoutAdvisorPlacementsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdvisorPlacementsInput, Prisma.UserUncheckedCreateWithoutAdvisorPlacementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdvisorPlacementsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAdvisorPlacementsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAdvisorPlacementsInput, Prisma.UserUncheckedCreateWithoutAdvisorPlacementsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAdvisorPlacementsInput;
    upsert?: Prisma.UserUpsertWithoutAdvisorPlacementsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAdvisorPlacementsInput, Prisma.UserUpdateWithoutAdvisorPlacementsInput>, Prisma.UserUncheckedUpdateWithoutAdvisorPlacementsInput>;
};
export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChatMessagesInput, Prisma.UserUncheckedCreateWithoutChatMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChatMessagesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutChatMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChatMessagesInput, Prisma.UserUncheckedCreateWithoutChatMessagesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChatMessagesInput;
    upsert?: Prisma.UserUpsertWithoutChatMessagesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutChatMessagesInput, Prisma.UserUpdateWithoutChatMessagesInput>, Prisma.UserUncheckedUpdateWithoutChatMessagesInput>;
};
export type UserCreateNestedOneWithoutChatReadStatusInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChatReadStatusInput, Prisma.UserUncheckedCreateWithoutChatReadStatusInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChatReadStatusInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutChatReadStatusNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutChatReadStatusInput, Prisma.UserUncheckedCreateWithoutChatReadStatusInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutChatReadStatusInput;
    upsert?: Prisma.UserUpsertWithoutChatReadStatusInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutChatReadStatusInput, Prisma.UserUpdateWithoutChatReadStatusInput>, Prisma.UserUncheckedUpdateWithoutChatReadStatusInput>;
};
export type UserCreateNestedOneWithoutSupportTicketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutSupportTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    upsert?: Prisma.UserUpsertWithoutSupportTicketsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSupportTicketsInput, Prisma.UserUpdateWithoutSupportTicketsInput>, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserCreateWithoutCertificatesInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCertificatesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
};
export type UserUpsertWithoutCertificatesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCertificatesInput, Prisma.UserUncheckedUpdateWithoutCertificatesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCertificatesInput, Prisma.UserUncheckedUpdateWithoutCertificatesInput>;
};
export type UserUpdateWithoutCertificatesInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFavoritesInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFavoritesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
};
export type UserUpsertWithoutFavoritesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFavoritesInput, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFavoritesInput, Prisma.UserUncheckedCreateWithoutFavoritesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFavoritesInput, Prisma.UserUncheckedUpdateWithoutFavoritesInput>;
};
export type UserUpdateWithoutFavoritesInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReservationsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReservationsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReservationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
};
export type UserUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReservationsInput, Prisma.UserUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReservationsInput, Prisma.UserUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReservationsInput, Prisma.UserUncheckedUpdateWithoutReservationsInput>;
};
export type UserUpdateWithoutReservationsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOrdersInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
};
export type UserUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserUpdateWithoutOrdersInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutConsultationsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutConsultationsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutConsultationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutConsultationsInput, Prisma.UserUncheckedCreateWithoutConsultationsInput>;
};
export type UserUpsertWithoutConsultationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutConsultationsInput, Prisma.UserUncheckedUpdateWithoutConsultationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutConsultationsInput, Prisma.UserUncheckedCreateWithoutConsultationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutConsultationsInput, Prisma.UserUncheckedUpdateWithoutConsultationsInput>;
};
export type UserUpdateWithoutConsultationsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutConsultationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPriceRequestsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPriceRequestsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPriceRequestsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPriceRequestsInput, Prisma.UserUncheckedCreateWithoutPriceRequestsInput>;
};
export type UserUpsertWithoutPriceRequestsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPriceRequestsInput, Prisma.UserUncheckedUpdateWithoutPriceRequestsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPriceRequestsInput, Prisma.UserUncheckedCreateWithoutPriceRequestsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPriceRequestsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPriceRequestsInput, Prisma.UserUncheckedUpdateWithoutPriceRequestsInput>;
};
export type UserUpdateWithoutPriceRequestsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPriceRequestsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAuditLogsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
};
export type UserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserUpdateWithoutAuditLogsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAdvisorClientsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAdvisorClientsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAdvisorClientsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdvisorClientsInput, Prisma.UserUncheckedCreateWithoutAdvisorClientsInput>;
};
export type UserUpsertWithoutAdvisorClientsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAdvisorClientsInput, Prisma.UserUncheckedUpdateWithoutAdvisorClientsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdvisorClientsInput, Prisma.UserUncheckedCreateWithoutAdvisorClientsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAdvisorClientsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAdvisorClientsInput, Prisma.UserUncheckedUpdateWithoutAdvisorClientsInput>;
};
export type UserUpdateWithoutAdvisorClientsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAdvisorClientsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAdvisorPlacementsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
};
export type UserUncheckedCreateWithoutAdvisorPlacementsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
};
export type UserCreateOrConnectWithoutAdvisorPlacementsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdvisorPlacementsInput, Prisma.UserUncheckedCreateWithoutAdvisorPlacementsInput>;
};
export type UserUpsertWithoutAdvisorPlacementsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAdvisorPlacementsInput, Prisma.UserUncheckedUpdateWithoutAdvisorPlacementsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAdvisorPlacementsInput, Prisma.UserUncheckedCreateWithoutAdvisorPlacementsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAdvisorPlacementsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAdvisorPlacementsInput, Prisma.UserUncheckedUpdateWithoutAdvisorPlacementsInput>;
};
export type UserUpdateWithoutAdvisorPlacementsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
};
export type UserUncheckedUpdateWithoutAdvisorPlacementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
};
export type UserCreateWithoutChatMessagesInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutChatMessagesInput, Prisma.UserUncheckedCreateWithoutChatMessagesInput>;
};
export type UserUpsertWithoutChatMessagesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutChatMessagesInput, Prisma.UserUncheckedUpdateWithoutChatMessagesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutChatMessagesInput, Prisma.UserUncheckedCreateWithoutChatMessagesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutChatMessagesInput, Prisma.UserUncheckedUpdateWithoutChatMessagesInput>;
};
export type UserUpdateWithoutChatMessagesInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutChatReadStatusInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutChatReadStatusInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutChatReadStatusInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutChatReadStatusInput, Prisma.UserUncheckedCreateWithoutChatReadStatusInput>;
};
export type UserUpsertWithoutChatReadStatusInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutChatReadStatusInput, Prisma.UserUncheckedUpdateWithoutChatReadStatusInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutChatReadStatusInput, Prisma.UserUncheckedCreateWithoutChatReadStatusInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutChatReadStatusInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutChatReadStatusInput, Prisma.UserUncheckedUpdateWithoutChatReadStatusInput>;
};
export type UserUpdateWithoutChatReadStatusInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutChatReadStatusInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSupportTicketsInput = {
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSupportTicketsInput = {
    id?: number;
    email: string;
    password: string;
    name: string;
    role?: $Enums.Role;
    status?: $Enums.UserStatus;
    avatar?: string | null;
    phone?: string | null;
    institution?: string | null;
    country?: string | null;
    tier?: string | null;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutUserInput;
    reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    consultations?: Prisma.ConsultationUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
    priceRequests?: Prisma.PriceRequestUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    chatMessages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutUserInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutUserInput;
    advisorClients?: Prisma.AdvisorClientUncheckedCreateNestedManyWithoutAdvisorInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSupportTicketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
};
export type UserUpsertWithoutSupportTicketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSupportTicketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserUpdateWithoutSupportTicketsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSupportTicketsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    institution?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tier?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutUserNestedInput;
    reservations?: Prisma.ReservationUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    consultations?: Prisma.ConsultationUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
    priceRequests?: Prisma.PriceRequestUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    chatMessages?: Prisma.ChatMessageUncheckedUpdateManyWithoutUserNestedInput;
    chatReadStatus?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutUserNestedInput;
    advisorClients?: Prisma.AdvisorClientUncheckedUpdateManyWithoutAdvisorNestedInput;
    advisorPlacements?: Prisma.AdvisorPlacementUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    favorites: number;
    reservations: number;
    orders: number;
    consultations: number;
    certificates: number;
    auditLogs: number;
    priceRequests: number;
    notifications: number;
    chatMessages: number;
    chatReadStatus: number;
    supportTickets: number;
    advisorClients: number;
    advisorPlacements: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs;
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs;
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
    consultations?: boolean | UserCountOutputTypeCountConsultationsArgs;
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
    priceRequests?: boolean | UserCountOutputTypeCountPriceRequestsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs;
    chatReadStatus?: boolean | UserCountOutputTypeCountChatReadStatusArgs;
    supportTickets?: boolean | UserCountOutputTypeCountSupportTicketsArgs;
    advisorClients?: boolean | UserCountOutputTypeCountAdvisorClientsArgs;
    advisorPlacements?: boolean | UserCountOutputTypeCountAdvisorPlacementsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountConsultationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsultationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPriceRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceRequestWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatMessageWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountChatReadStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatThreadReadStatusWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSupportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAdvisorClientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdvisorClientWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAdvisorPlacementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdvisorPlacementWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    role?: boolean;
    status?: boolean;
    avatar?: boolean;
    phone?: boolean;
    institution?: boolean;
    country?: boolean;
    tier?: boolean;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    favorites?: boolean | Prisma.User$favoritesArgs<ExtArgs>;
    reservations?: boolean | Prisma.User$reservationsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    consultations?: boolean | Prisma.User$consultationsArgs<ExtArgs>;
    certificates?: boolean | Prisma.User$certificatesArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    priceRequests?: boolean | Prisma.User$priceRequestsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    chatMessages?: boolean | Prisma.User$chatMessagesArgs<ExtArgs>;
    chatReadStatus?: boolean | Prisma.User$chatReadStatusArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    advisorClients?: boolean | Prisma.User$advisorClientsArgs<ExtArgs>;
    advisorPlacements?: boolean | Prisma.User$advisorPlacementsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    role?: boolean;
    status?: boolean;
    avatar?: boolean;
    phone?: boolean;
    institution?: boolean;
    country?: boolean;
    tier?: boolean;
    twoFactorEnabled?: boolean;
    emailVerified?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "status" | "avatar" | "phone" | "institution" | "country" | "tier" | "twoFactorEnabled" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favorites?: boolean | Prisma.User$favoritesArgs<ExtArgs>;
    reservations?: boolean | Prisma.User$reservationsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    consultations?: boolean | Prisma.User$consultationsArgs<ExtArgs>;
    certificates?: boolean | Prisma.User$certificatesArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    priceRequests?: boolean | Prisma.User$priceRequestsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    chatMessages?: boolean | Prisma.User$chatMessagesArgs<ExtArgs>;
    chatReadStatus?: boolean | Prisma.User$chatReadStatusArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    advisorClients?: boolean | Prisma.User$advisorClientsArgs<ExtArgs>;
    advisorPlacements?: boolean | Prisma.User$advisorPlacementsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        favorites: Prisma.$FavoritePayload<ExtArgs>[];
        reservations: Prisma.$ReservationPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
        consultations: Prisma.$ConsultationPayload<ExtArgs>[];
        certificates: Prisma.$CertificatePayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
        priceRequests: Prisma.$PriceRequestPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[];
        chatReadStatus: Prisma.$ChatThreadReadStatusPayload<ExtArgs>[];
        supportTickets: Prisma.$SupportTicketPayload<ExtArgs>[];
        advisorClients: Prisma.$AdvisorClientPayload<ExtArgs>[];
        advisorPlacements: Prisma.$AdvisorPlacementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        password: string;
        name: string;
        role: $Enums.Role;
        status: $Enums.UserStatus;
        avatar: string | null;
        phone: string | null;
        institution: string | null;
        country: string | null;
        tier: string | null;
        twoFactorEnabled: boolean;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    favorites<T extends Prisma.User$favoritesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reservations<T extends Prisma.User$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.User$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    consultations<T extends Prisma.User$consultationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    certificates<T extends Prisma.User$certificatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    priceRequests<T extends Prisma.User$priceRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$priceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chatMessages<T extends Prisma.User$chatMessagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chatReadStatus<T extends Prisma.User$chatReadStatusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$chatReadStatusArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatThreadReadStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supportTickets<T extends Prisma.User$supportTicketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$supportTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    advisorClients<T extends Prisma.User$advisorClientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$advisorClientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdvisorClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    advisorPlacements<T extends Prisma.User$advisorPlacementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$advisorPlacementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdvisorPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly status: Prisma.FieldRef<"User", 'UserStatus'>;
    readonly avatar: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly institution: Prisma.FieldRef<"User", 'String'>;
    readonly country: Prisma.FieldRef<"User", 'String'>;
    readonly tier: Prisma.FieldRef<"User", 'String'>;
    readonly twoFactorEnabled: Prisma.FieldRef<"User", 'Boolean'>;
    readonly emailVerified: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.favorites
 */
export type User$favoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.reservations
 */
export type User$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.orders
 */
export type User$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * User.consultations
 */
export type User$consultationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: Prisma.ConsultationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consultation
     */
    omit?: Prisma.ConsultationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsultationInclude<ExtArgs> | null;
    where?: Prisma.ConsultationWhereInput;
    orderBy?: Prisma.ConsultationOrderByWithRelationInput | Prisma.ConsultationOrderByWithRelationInput[];
    cursor?: Prisma.ConsultationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsultationScalarFieldEnum | Prisma.ConsultationScalarFieldEnum[];
};
/**
 * User.certificates
 */
export type User$certificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.auditLogs
 */
export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
/**
 * User.priceRequests
 */
export type User$priceRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.chatMessages
 */
export type User$chatMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithRelationInput | Prisma.ChatMessageOrderByWithRelationInput[];
    cursor?: Prisma.ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatMessageScalarFieldEnum | Prisma.ChatMessageScalarFieldEnum[];
};
/**
 * User.chatReadStatus
 */
export type User$chatReadStatusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThreadReadStatus
     */
    select?: Prisma.ChatThreadReadStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThreadReadStatus
     */
    omit?: Prisma.ChatThreadReadStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadReadStatusInclude<ExtArgs> | null;
    where?: Prisma.ChatThreadReadStatusWhereInput;
    orderBy?: Prisma.ChatThreadReadStatusOrderByWithRelationInput | Prisma.ChatThreadReadStatusOrderByWithRelationInput[];
    cursor?: Prisma.ChatThreadReadStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatThreadReadStatusScalarFieldEnum | Prisma.ChatThreadReadStatusScalarFieldEnum[];
};
/**
 * User.supportTickets
 */
export type User$supportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
/**
 * User.advisorClients
 */
export type User$advisorClientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.AdvisorClientWhereInput;
    orderBy?: Prisma.AdvisorClientOrderByWithRelationInput | Prisma.AdvisorClientOrderByWithRelationInput[];
    cursor?: Prisma.AdvisorClientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdvisorClientScalarFieldEnum | Prisma.AdvisorClientScalarFieldEnum[];
};
/**
 * User.advisorPlacements
 */
export type User$advisorPlacementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvisorPlacement
     */
    select?: Prisma.AdvisorPlacementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdvisorPlacement
     */
    omit?: Prisma.AdvisorPlacementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdvisorPlacementInclude<ExtArgs> | null;
    where?: Prisma.AdvisorPlacementWhereInput;
    orderBy?: Prisma.AdvisorPlacementOrderByWithRelationInput | Prisma.AdvisorPlacementOrderByWithRelationInput[];
    cursor?: Prisma.AdvisorPlacementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdvisorPlacementScalarFieldEnum | Prisma.AdvisorPlacementScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map