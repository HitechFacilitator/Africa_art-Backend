export declare function register(data: {
    email: string;
    password: string;
    name: string;
    phone?: string;
    country?: string;
    institution?: string;
    invitationCode?: string;
    acceptTerms?: boolean;
    acceptGdpr?: boolean;
}): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
        twoFactorEnabled: boolean;
    };
    token: string;
}>;
export declare function login(email: string, password: string): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
        twoFactorEnabled: boolean;
    };
    token: string;
    requiresOTP: boolean;
}>;
export declare function loginAs(role: string): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
        twoFactorEnabled: boolean;
    };
    token: string;
}>;
export declare function verifyOTP(email: string, code: string): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
        twoFactorEnabled: boolean;
    };
    token: string;
    success: boolean;
}>;
export declare function getMe(userId: number): Promise<{
    id: string;
    email: string;
    name: string;
    role: string;
    avatar: string | undefined;
    institution: string | undefined;
    twoFactorEnabled: boolean;
}>;
export declare function enable2FA(userId: number): Promise<{
    success: boolean;
    twoFactorEnabled: boolean;
}>;
export declare function disable2FA(userId: number, password: string): Promise<{
    success: boolean;
    twoFactorEnabled: boolean;
}>;
export declare function forgotPassword(email: string): Promise<{
    message: string;
}>;
export declare function resetPassword(token: string, newPassword: string): Promise<{
    message: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map