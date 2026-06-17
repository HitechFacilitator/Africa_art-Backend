import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ChatThread
 *
 */
export type ChatThreadModel = runtime.Types.Result.DefaultSelection<Prisma.$ChatThreadPayload>;
export type AggregateChatThread = {
    _count: ChatThreadCountAggregateOutputType | null;
    _avg: ChatThreadAvgAggregateOutputType | null;
    _sum: ChatThreadSumAggregateOutputType | null;
    _min: ChatThreadMinAggregateOutputType | null;
    _max: ChatThreadMaxAggregateOutputType | null;
};
export type ChatThreadAvgAggregateOutputType = {
    id: number | null;
    unreadCount: number | null;
};
export type ChatThreadSumAggregateOutputType = {
    id: number | null;
    unreadCount: number | null;
};
export type ChatThreadMinAggregateOutputType = {
    id: number | null;
    clientName: string | null;
    clientRole: string | null;
    advisorName: string | null;
    subject: string | null;
    status: string | null;
    lastMessage: string | null;
    lastMessageTime: string | null;
    unreadCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChatThreadMaxAggregateOutputType = {
    id: number | null;
    clientName: string | null;
    clientRole: string | null;
    advisorName: string | null;
    subject: string | null;
    status: string | null;
    lastMessage: string | null;
    lastMessageTime: string | null;
    unreadCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChatThreadCountAggregateOutputType = {
    id: number;
    clientName: number;
    clientRole: number;
    advisorName: number;
    subject: number;
    status: number;
    lastMessage: number;
    lastMessageTime: number;
    unreadCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ChatThreadAvgAggregateInputType = {
    id?: true;
    unreadCount?: true;
};
export type ChatThreadSumAggregateInputType = {
    id?: true;
    unreadCount?: true;
};
export type ChatThreadMinAggregateInputType = {
    id?: true;
    clientName?: true;
    clientRole?: true;
    advisorName?: true;
    subject?: true;
    status?: true;
    lastMessage?: true;
    lastMessageTime?: true;
    unreadCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChatThreadMaxAggregateInputType = {
    id?: true;
    clientName?: true;
    clientRole?: true;
    advisorName?: true;
    subject?: true;
    status?: true;
    lastMessage?: true;
    lastMessageTime?: true;
    unreadCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChatThreadCountAggregateInputType = {
    id?: true;
    clientName?: true;
    clientRole?: true;
    advisorName?: true;
    subject?: true;
    status?: true;
    lastMessage?: true;
    lastMessageTime?: true;
    unreadCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ChatThreadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ChatThread to aggregate.
     */
    where?: Prisma.ChatThreadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatThreads to fetch.
     */
    orderBy?: Prisma.ChatThreadOrderByWithRelationInput | Prisma.ChatThreadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ChatThreadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatThreads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatThreads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ChatThreads
    **/
    _count?: true | ChatThreadCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ChatThreadAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ChatThreadSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ChatThreadMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ChatThreadMaxAggregateInputType;
};
export type GetChatThreadAggregateType<T extends ChatThreadAggregateArgs> = {
    [P in keyof T & keyof AggregateChatThread]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChatThread[P]> : Prisma.GetScalarType<T[P], AggregateChatThread[P]>;
};
export type ChatThreadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatThreadWhereInput;
    orderBy?: Prisma.ChatThreadOrderByWithAggregationInput | Prisma.ChatThreadOrderByWithAggregationInput[];
    by: Prisma.ChatThreadScalarFieldEnum[] | Prisma.ChatThreadScalarFieldEnum;
    having?: Prisma.ChatThreadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatThreadCountAggregateInputType | true;
    _avg?: ChatThreadAvgAggregateInputType;
    _sum?: ChatThreadSumAggregateInputType;
    _min?: ChatThreadMinAggregateInputType;
    _max?: ChatThreadMaxAggregateInputType;
};
export type ChatThreadGroupByOutputType = {
    id: number;
    clientName: string | null;
    clientRole: string | null;
    advisorName: string | null;
    subject: string | null;
    status: string;
    lastMessage: string | null;
    lastMessageTime: string | null;
    unreadCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ChatThreadCountAggregateOutputType | null;
    _avg: ChatThreadAvgAggregateOutputType | null;
    _sum: ChatThreadSumAggregateOutputType | null;
    _min: ChatThreadMinAggregateOutputType | null;
    _max: ChatThreadMaxAggregateOutputType | null;
};
export type GetChatThreadGroupByPayload<T extends ChatThreadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChatThreadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChatThreadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChatThreadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChatThreadGroupByOutputType[P]>;
}>>;
export type ChatThreadWhereInput = {
    AND?: Prisma.ChatThreadWhereInput | Prisma.ChatThreadWhereInput[];
    OR?: Prisma.ChatThreadWhereInput[];
    NOT?: Prisma.ChatThreadWhereInput | Prisma.ChatThreadWhereInput[];
    id?: Prisma.IntFilter<"ChatThread"> | number;
    clientName?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    clientRole?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    advisorName?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    subject?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    status?: Prisma.StringFilter<"ChatThread"> | string;
    lastMessage?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    lastMessageTime?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    unreadCount?: Prisma.IntFilter<"ChatThread"> | number;
    createdAt?: Prisma.DateTimeFilter<"ChatThread"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChatThread"> | Date | string;
    messages?: Prisma.ChatMessageListRelationFilter;
    readStatuses?: Prisma.ChatThreadReadStatusListRelationFilter;
};
export type ChatThreadOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clientName?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    advisorName?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessageTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    messages?: Prisma.ChatMessageOrderByRelationAggregateInput;
    readStatuses?: Prisma.ChatThreadReadStatusOrderByRelationAggregateInput;
    _relevance?: Prisma.ChatThreadOrderByRelevanceInput;
};
export type ChatThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ChatThreadWhereInput | Prisma.ChatThreadWhereInput[];
    OR?: Prisma.ChatThreadWhereInput[];
    NOT?: Prisma.ChatThreadWhereInput | Prisma.ChatThreadWhereInput[];
    clientName?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    clientRole?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    advisorName?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    subject?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    status?: Prisma.StringFilter<"ChatThread"> | string;
    lastMessage?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    lastMessageTime?: Prisma.StringNullableFilter<"ChatThread"> | string | null;
    unreadCount?: Prisma.IntFilter<"ChatThread"> | number;
    createdAt?: Prisma.DateTimeFilter<"ChatThread"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ChatThread"> | Date | string;
    messages?: Prisma.ChatMessageListRelationFilter;
    readStatuses?: Prisma.ChatThreadReadStatusListRelationFilter;
}, "id">;
export type ChatThreadOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clientName?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    advisorName?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastMessageTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ChatThreadCountOrderByAggregateInput;
    _avg?: Prisma.ChatThreadAvgOrderByAggregateInput;
    _max?: Prisma.ChatThreadMaxOrderByAggregateInput;
    _min?: Prisma.ChatThreadMinOrderByAggregateInput;
    _sum?: Prisma.ChatThreadSumOrderByAggregateInput;
};
export type ChatThreadScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChatThreadScalarWhereWithAggregatesInput | Prisma.ChatThreadScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChatThreadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChatThreadScalarWhereWithAggregatesInput | Prisma.ChatThreadScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ChatThread"> | number;
    clientName?: Prisma.StringNullableWithAggregatesFilter<"ChatThread"> | string | null;
    clientRole?: Prisma.StringNullableWithAggregatesFilter<"ChatThread"> | string | null;
    advisorName?: Prisma.StringNullableWithAggregatesFilter<"ChatThread"> | string | null;
    subject?: Prisma.StringNullableWithAggregatesFilter<"ChatThread"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"ChatThread"> | string;
    lastMessage?: Prisma.StringNullableWithAggregatesFilter<"ChatThread"> | string | null;
    lastMessageTime?: Prisma.StringNullableWithAggregatesFilter<"ChatThread"> | string | null;
    unreadCount?: Prisma.IntWithAggregatesFilter<"ChatThread"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChatThread"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ChatThread"> | Date | string;
};
export type ChatThreadCreateInput = {
    clientName?: string | null;
    clientRole?: string | null;
    advisorName?: string | null;
    subject?: string | null;
    status?: string;
    lastMessage?: string | null;
    lastMessageTime?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.ChatMessageCreateNestedManyWithoutThreadInput;
    readStatuses?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutThreadInput;
};
export type ChatThreadUncheckedCreateInput = {
    id?: number;
    clientName?: string | null;
    clientRole?: string | null;
    advisorName?: string | null;
    subject?: string | null;
    status?: string;
    lastMessage?: string | null;
    lastMessageTime?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutThreadInput;
    readStatuses?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutThreadInput;
};
export type ChatThreadUpdateInput = {
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.ChatMessageUpdateManyWithoutThreadNestedInput;
    readStatuses?: Prisma.ChatThreadReadStatusUpdateManyWithoutThreadNestedInput;
};
export type ChatThreadUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.ChatMessageUncheckedUpdateManyWithoutThreadNestedInput;
    readStatuses?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutThreadNestedInput;
};
export type ChatThreadCreateManyInput = {
    id?: number;
    clientName?: string | null;
    clientRole?: string | null;
    advisorName?: string | null;
    subject?: string | null;
    status?: string;
    lastMessage?: string | null;
    lastMessageTime?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChatThreadUpdateManyMutationInput = {
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatThreadUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatThreadOrderByRelevanceInput = {
    fields: Prisma.ChatThreadOrderByRelevanceFieldEnum | Prisma.ChatThreadOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ChatThreadCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    clientRole?: Prisma.SortOrder;
    advisorName?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessage?: Prisma.SortOrder;
    lastMessageTime?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatThreadAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
};
export type ChatThreadMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    clientRole?: Prisma.SortOrder;
    advisorName?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessage?: Prisma.SortOrder;
    lastMessageTime?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatThreadMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clientName?: Prisma.SortOrder;
    clientRole?: Prisma.SortOrder;
    advisorName?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    lastMessage?: Prisma.SortOrder;
    lastMessageTime?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChatThreadSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    unreadCount?: Prisma.SortOrder;
};
export type ChatThreadScalarRelationFilter = {
    is?: Prisma.ChatThreadWhereInput;
    isNot?: Prisma.ChatThreadWhereInput;
};
export type ChatThreadCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.ChatThreadCreateWithoutMessagesInput, Prisma.ChatThreadUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ChatThreadCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.ChatThreadWhereUniqueInput;
};
export type ChatThreadUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.ChatThreadCreateWithoutMessagesInput, Prisma.ChatThreadUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.ChatThreadCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.ChatThreadUpsertWithoutMessagesInput;
    connect?: Prisma.ChatThreadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChatThreadUpdateToOneWithWhereWithoutMessagesInput, Prisma.ChatThreadUpdateWithoutMessagesInput>, Prisma.ChatThreadUncheckedUpdateWithoutMessagesInput>;
};
export type ChatThreadCreateNestedOneWithoutReadStatusesInput = {
    create?: Prisma.XOR<Prisma.ChatThreadCreateWithoutReadStatusesInput, Prisma.ChatThreadUncheckedCreateWithoutReadStatusesInput>;
    connectOrCreate?: Prisma.ChatThreadCreateOrConnectWithoutReadStatusesInput;
    connect?: Prisma.ChatThreadWhereUniqueInput;
};
export type ChatThreadUpdateOneRequiredWithoutReadStatusesNestedInput = {
    create?: Prisma.XOR<Prisma.ChatThreadCreateWithoutReadStatusesInput, Prisma.ChatThreadUncheckedCreateWithoutReadStatusesInput>;
    connectOrCreate?: Prisma.ChatThreadCreateOrConnectWithoutReadStatusesInput;
    upsert?: Prisma.ChatThreadUpsertWithoutReadStatusesInput;
    connect?: Prisma.ChatThreadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChatThreadUpdateToOneWithWhereWithoutReadStatusesInput, Prisma.ChatThreadUpdateWithoutReadStatusesInput>, Prisma.ChatThreadUncheckedUpdateWithoutReadStatusesInput>;
};
export type ChatThreadCreateWithoutMessagesInput = {
    clientName?: string | null;
    clientRole?: string | null;
    advisorName?: string | null;
    subject?: string | null;
    status?: string;
    lastMessage?: string | null;
    lastMessageTime?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readStatuses?: Prisma.ChatThreadReadStatusCreateNestedManyWithoutThreadInput;
};
export type ChatThreadUncheckedCreateWithoutMessagesInput = {
    id?: number;
    clientName?: string | null;
    clientRole?: string | null;
    advisorName?: string | null;
    subject?: string | null;
    status?: string;
    lastMessage?: string | null;
    lastMessageTime?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    readStatuses?: Prisma.ChatThreadReadStatusUncheckedCreateNestedManyWithoutThreadInput;
};
export type ChatThreadCreateOrConnectWithoutMessagesInput = {
    where: Prisma.ChatThreadWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatThreadCreateWithoutMessagesInput, Prisma.ChatThreadUncheckedCreateWithoutMessagesInput>;
};
export type ChatThreadUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.ChatThreadUpdateWithoutMessagesInput, Prisma.ChatThreadUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.ChatThreadCreateWithoutMessagesInput, Prisma.ChatThreadUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.ChatThreadWhereInput;
};
export type ChatThreadUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.ChatThreadWhereInput;
    data: Prisma.XOR<Prisma.ChatThreadUpdateWithoutMessagesInput, Prisma.ChatThreadUncheckedUpdateWithoutMessagesInput>;
};
export type ChatThreadUpdateWithoutMessagesInput = {
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readStatuses?: Prisma.ChatThreadReadStatusUpdateManyWithoutThreadNestedInput;
};
export type ChatThreadUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    readStatuses?: Prisma.ChatThreadReadStatusUncheckedUpdateManyWithoutThreadNestedInput;
};
export type ChatThreadCreateWithoutReadStatusesInput = {
    clientName?: string | null;
    clientRole?: string | null;
    advisorName?: string | null;
    subject?: string | null;
    status?: string;
    lastMessage?: string | null;
    lastMessageTime?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.ChatMessageCreateNestedManyWithoutThreadInput;
};
export type ChatThreadUncheckedCreateWithoutReadStatusesInput = {
    id?: number;
    clientName?: string | null;
    clientRole?: string | null;
    advisorName?: string | null;
    subject?: string | null;
    status?: string;
    lastMessage?: string | null;
    lastMessageTime?: string | null;
    unreadCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    messages?: Prisma.ChatMessageUncheckedCreateNestedManyWithoutThreadInput;
};
export type ChatThreadCreateOrConnectWithoutReadStatusesInput = {
    where: Prisma.ChatThreadWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatThreadCreateWithoutReadStatusesInput, Prisma.ChatThreadUncheckedCreateWithoutReadStatusesInput>;
};
export type ChatThreadUpsertWithoutReadStatusesInput = {
    update: Prisma.XOR<Prisma.ChatThreadUpdateWithoutReadStatusesInput, Prisma.ChatThreadUncheckedUpdateWithoutReadStatusesInput>;
    create: Prisma.XOR<Prisma.ChatThreadCreateWithoutReadStatusesInput, Prisma.ChatThreadUncheckedCreateWithoutReadStatusesInput>;
    where?: Prisma.ChatThreadWhereInput;
};
export type ChatThreadUpdateToOneWithWhereWithoutReadStatusesInput = {
    where?: Prisma.ChatThreadWhereInput;
    data: Prisma.XOR<Prisma.ChatThreadUpdateWithoutReadStatusesInput, Prisma.ChatThreadUncheckedUpdateWithoutReadStatusesInput>;
};
export type ChatThreadUpdateWithoutReadStatusesInput = {
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.ChatMessageUpdateManyWithoutThreadNestedInput;
};
export type ChatThreadUncheckedUpdateWithoutReadStatusesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clientName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clientRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    lastMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastMessageTime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unreadCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.ChatMessageUncheckedUpdateManyWithoutThreadNestedInput;
};
/**
 * Count Type ChatThreadCountOutputType
 */
export type ChatThreadCountOutputType = {
    messages: number;
    readStatuses: number;
};
export type ChatThreadCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | ChatThreadCountOutputTypeCountMessagesArgs;
    readStatuses?: boolean | ChatThreadCountOutputTypeCountReadStatusesArgs;
};
/**
 * ChatThreadCountOutputType without action
 */
export type ChatThreadCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThreadCountOutputType
     */
    select?: Prisma.ChatThreadCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ChatThreadCountOutputType without action
 */
export type ChatThreadCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatMessageWhereInput;
};
/**
 * ChatThreadCountOutputType without action
 */
export type ChatThreadCountOutputTypeCountReadStatusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatThreadReadStatusWhereInput;
};
export type ChatThreadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clientName?: boolean;
    clientRole?: boolean;
    advisorName?: boolean;
    subject?: boolean;
    status?: boolean;
    lastMessage?: boolean;
    lastMessageTime?: boolean;
    unreadCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    messages?: boolean | Prisma.ChatThread$messagesArgs<ExtArgs>;
    readStatuses?: boolean | Prisma.ChatThread$readStatusesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatThreadCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatThread"]>;
export type ChatThreadSelectScalar = {
    id?: boolean;
    clientName?: boolean;
    clientRole?: boolean;
    advisorName?: boolean;
    subject?: boolean;
    status?: boolean;
    lastMessage?: boolean;
    lastMessageTime?: boolean;
    unreadCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ChatThreadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clientName" | "clientRole" | "advisorName" | "subject" | "status" | "lastMessage" | "lastMessageTime" | "unreadCount" | "createdAt" | "updatedAt", ExtArgs["result"]["chatThread"]>;
export type ChatThreadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | Prisma.ChatThread$messagesArgs<ExtArgs>;
    readStatuses?: boolean | Prisma.ChatThread$readStatusesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChatThreadCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ChatThreadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChatThread";
    objects: {
        messages: Prisma.$ChatMessagePayload<ExtArgs>[];
        readStatuses: Prisma.$ChatThreadReadStatusPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clientName: string | null;
        clientRole: string | null;
        advisorName: string | null;
        subject: string | null;
        status: string;
        lastMessage: string | null;
        lastMessageTime: string | null;
        unreadCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["chatThread"]>;
    composites: {};
};
export type ChatThreadGetPayload<S extends boolean | null | undefined | ChatThreadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload, S>;
export type ChatThreadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChatThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatThreadCountAggregateInputType | true;
};
export interface ChatThreadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChatThread'];
        meta: {
            name: 'ChatThread';
        };
    };
    /**
     * Find zero or one ChatThread that matches the filter.
     * @param {ChatThreadFindUniqueArgs} args - Arguments to find a ChatThread
     * @example
     * // Get one ChatThread
     * const chatThread = await prisma.chatThread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatThreadFindUniqueArgs>(args: Prisma.SelectSubset<T, ChatThreadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ChatThread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatThreadFindUniqueOrThrowArgs} args - Arguments to find a ChatThread
     * @example
     * // Get one ChatThread
     * const chatThread = await prisma.chatThread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatThreadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChatThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ChatThread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatThreadFindFirstArgs} args - Arguments to find a ChatThread
     * @example
     * // Get one ChatThread
     * const chatThread = await prisma.chatThread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatThreadFindFirstArgs>(args?: Prisma.SelectSubset<T, ChatThreadFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ChatThread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatThreadFindFirstOrThrowArgs} args - Arguments to find a ChatThread
     * @example
     * // Get one ChatThread
     * const chatThread = await prisma.chatThread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatThreadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChatThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ChatThreads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatThreads
     * const chatThreads = await prisma.chatThread.findMany()
     *
     * // Get first 10 ChatThreads
     * const chatThreads = await prisma.chatThread.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const chatThreadWithIdOnly = await prisma.chatThread.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChatThreadFindManyArgs>(args?: Prisma.SelectSubset<T, ChatThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ChatThread.
     * @param {ChatThreadCreateArgs} args - Arguments to create a ChatThread.
     * @example
     * // Create one ChatThread
     * const ChatThread = await prisma.chatThread.create({
     *   data: {
     *     // ... data to create a ChatThread
     *   }
     * })
     *
     */
    create<T extends ChatThreadCreateArgs>(args: Prisma.SelectSubset<T, ChatThreadCreateArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ChatThreads.
     * @param {ChatThreadCreateManyArgs} args - Arguments to create many ChatThreads.
     * @example
     * // Create many ChatThreads
     * const chatThread = await prisma.chatThread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChatThreadCreateManyArgs>(args?: Prisma.SelectSubset<T, ChatThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a ChatThread.
     * @param {ChatThreadDeleteArgs} args - Arguments to delete one ChatThread.
     * @example
     * // Delete one ChatThread
     * const ChatThread = await prisma.chatThread.delete({
     *   where: {
     *     // ... filter to delete one ChatThread
     *   }
     * })
     *
     */
    delete<T extends ChatThreadDeleteArgs>(args: Prisma.SelectSubset<T, ChatThreadDeleteArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ChatThread.
     * @param {ChatThreadUpdateArgs} args - Arguments to update one ChatThread.
     * @example
     * // Update one ChatThread
     * const chatThread = await prisma.chatThread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChatThreadUpdateArgs>(args: Prisma.SelectSubset<T, ChatThreadUpdateArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ChatThreads.
     * @param {ChatThreadDeleteManyArgs} args - Arguments to filter ChatThreads to delete.
     * @example
     * // Delete a few ChatThreads
     * const { count } = await prisma.chatThread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChatThreadDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChatThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ChatThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatThreads
     * const chatThread = await prisma.chatThread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChatThreadUpdateManyArgs>(args: Prisma.SelectSubset<T, ChatThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one ChatThread.
     * @param {ChatThreadUpsertArgs} args - Arguments to update or create a ChatThread.
     * @example
     * // Update or create a ChatThread
     * const chatThread = await prisma.chatThread.upsert({
     *   create: {
     *     // ... data to create a ChatThread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatThread we want to update
     *   }
     * })
     */
    upsert<T extends ChatThreadUpsertArgs>(args: Prisma.SelectSubset<T, ChatThreadUpsertArgs<ExtArgs>>): Prisma.Prisma__ChatThreadClient<runtime.Types.Result.GetResult<Prisma.$ChatThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ChatThreads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatThreadCountArgs} args - Arguments to filter ChatThreads to count.
     * @example
     * // Count the number of ChatThreads
     * const count = await prisma.chatThread.count({
     *   where: {
     *     // ... the filter for the ChatThreads we want to count
     *   }
     * })
    **/
    count<T extends ChatThreadCountArgs>(args?: Prisma.Subset<T, ChatThreadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChatThreadCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ChatThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatThreadAggregateArgs>(args: Prisma.Subset<T, ChatThreadAggregateArgs>): Prisma.PrismaPromise<GetChatThreadAggregateType<T>>;
    /**
     * Group by ChatThread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatThreadGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ChatThreadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChatThreadGroupByArgs['orderBy'];
    } : {
        orderBy?: ChatThreadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChatThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ChatThread model
     */
    readonly fields: ChatThreadFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ChatThread.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ChatThreadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    messages<T extends Prisma.ChatThread$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatThread$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    readStatuses<T extends Prisma.ChatThread$readStatusesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatThread$readStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatThreadReadStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ChatThread model
 */
export interface ChatThreadFieldRefs {
    readonly id: Prisma.FieldRef<"ChatThread", 'Int'>;
    readonly clientName: Prisma.FieldRef<"ChatThread", 'String'>;
    readonly clientRole: Prisma.FieldRef<"ChatThread", 'String'>;
    readonly advisorName: Prisma.FieldRef<"ChatThread", 'String'>;
    readonly subject: Prisma.FieldRef<"ChatThread", 'String'>;
    readonly status: Prisma.FieldRef<"ChatThread", 'String'>;
    readonly lastMessage: Prisma.FieldRef<"ChatThread", 'String'>;
    readonly lastMessageTime: Prisma.FieldRef<"ChatThread", 'String'>;
    readonly unreadCount: Prisma.FieldRef<"ChatThread", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ChatThread", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ChatThread", 'DateTime'>;
}
/**
 * ChatThread findUnique
 */
export type ChatThreadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * Filter, which ChatThread to fetch.
     */
    where: Prisma.ChatThreadWhereUniqueInput;
};
/**
 * ChatThread findUniqueOrThrow
 */
export type ChatThreadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * Filter, which ChatThread to fetch.
     */
    where: Prisma.ChatThreadWhereUniqueInput;
};
/**
 * ChatThread findFirst
 */
export type ChatThreadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * Filter, which ChatThread to fetch.
     */
    where?: Prisma.ChatThreadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatThreads to fetch.
     */
    orderBy?: Prisma.ChatThreadOrderByWithRelationInput | Prisma.ChatThreadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatThreads.
     */
    cursor?: Prisma.ChatThreadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatThreads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatThreads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatThreads.
     */
    distinct?: Prisma.ChatThreadScalarFieldEnum | Prisma.ChatThreadScalarFieldEnum[];
};
/**
 * ChatThread findFirstOrThrow
 */
export type ChatThreadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * Filter, which ChatThread to fetch.
     */
    where?: Prisma.ChatThreadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatThreads to fetch.
     */
    orderBy?: Prisma.ChatThreadOrderByWithRelationInput | Prisma.ChatThreadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatThreads.
     */
    cursor?: Prisma.ChatThreadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatThreads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatThreads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatThreads.
     */
    distinct?: Prisma.ChatThreadScalarFieldEnum | Prisma.ChatThreadScalarFieldEnum[];
};
/**
 * ChatThread findMany
 */
export type ChatThreadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * Filter, which ChatThreads to fetch.
     */
    where?: Prisma.ChatThreadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatThreads to fetch.
     */
    orderBy?: Prisma.ChatThreadOrderByWithRelationInput | Prisma.ChatThreadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ChatThreads.
     */
    cursor?: Prisma.ChatThreadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatThreads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatThreads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatThreads.
     */
    distinct?: Prisma.ChatThreadScalarFieldEnum | Prisma.ChatThreadScalarFieldEnum[];
};
/**
 * ChatThread create
 */
export type ChatThreadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * The data needed to create a ChatThread.
     */
    data: Prisma.XOR<Prisma.ChatThreadCreateInput, Prisma.ChatThreadUncheckedCreateInput>;
};
/**
 * ChatThread createMany
 */
export type ChatThreadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatThreads.
     */
    data: Prisma.ChatThreadCreateManyInput | Prisma.ChatThreadCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ChatThread update
 */
export type ChatThreadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * The data needed to update a ChatThread.
     */
    data: Prisma.XOR<Prisma.ChatThreadUpdateInput, Prisma.ChatThreadUncheckedUpdateInput>;
    /**
     * Choose, which ChatThread to update.
     */
    where: Prisma.ChatThreadWhereUniqueInput;
};
/**
 * ChatThread updateMany
 */
export type ChatThreadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatThreads.
     */
    data: Prisma.XOR<Prisma.ChatThreadUpdateManyMutationInput, Prisma.ChatThreadUncheckedUpdateManyInput>;
    /**
     * Filter which ChatThreads to update
     */
    where?: Prisma.ChatThreadWhereInput;
    /**
     * Limit how many ChatThreads to update.
     */
    limit?: number;
};
/**
 * ChatThread upsert
 */
export type ChatThreadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * The filter to search for the ChatThread to update in case it exists.
     */
    where: Prisma.ChatThreadWhereUniqueInput;
    /**
     * In case the ChatThread found by the `where` argument doesn't exist, create a new ChatThread with this data.
     */
    create: Prisma.XOR<Prisma.ChatThreadCreateInput, Prisma.ChatThreadUncheckedCreateInput>;
    /**
     * In case the ChatThread was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ChatThreadUpdateInput, Prisma.ChatThreadUncheckedUpdateInput>;
};
/**
 * ChatThread delete
 */
export type ChatThreadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
    /**
     * Filter which ChatThread to delete.
     */
    where: Prisma.ChatThreadWhereUniqueInput;
};
/**
 * ChatThread deleteMany
 */
export type ChatThreadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ChatThreads to delete
     */
    where?: Prisma.ChatThreadWhereInput;
    /**
     * Limit how many ChatThreads to delete.
     */
    limit?: number;
};
/**
 * ChatThread.messages
 */
export type ChatThread$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ChatThread.readStatuses
 */
export type ChatThread$readStatusesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ChatThread without action
 */
export type ChatThreadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatThread
     */
    select?: Prisma.ChatThreadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatThread
     */
    omit?: Prisma.ChatThreadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatThreadInclude<ExtArgs> | null;
};
//# sourceMappingURL=ChatThread.d.ts.map