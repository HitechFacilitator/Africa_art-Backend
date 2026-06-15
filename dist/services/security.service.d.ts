export declare function getByUser(userId: number): Promise<{
    id: string;
    artworkTitle: string;
    vaultLocation: string;
    fingerprintId: string;
    smartContractAddress: string;
    lastInspectionDate: string;
    temperatureHumidity: string;
    insurancePolicyNumber: string;
}[]>;
export declare function create(userId: number, data: {
    artworkTitle: string;
    vaultLocation?: string;
    fingerprintId?: string;
    smartContractAddress?: string;
    lastInspectionDate?: string;
    temperatureHumidity?: string;
    insurancePolicyNumber?: string;
}): Promise<{
    id: string;
    artworkTitle: string;
    vaultLocation: string;
    fingerprintId: string;
    smartContractAddress: string;
    lastInspectionDate: string;
    temperatureHumidity: string;
    insurancePolicyNumber: string;
}>;
//# sourceMappingURL=security.service.d.ts.map