export declare function register(data: {
    email: string;
    password: string;
    name: string;
    phone?: string;
    country?: string;
    institution?: string;
    invitationCode?: string;
}): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
    };
    token: string;
}>;
export declare function login(email: string, _password: string): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
    };
    token: string;
    requiresOTP: boolean;
    otpCode: string;
}>;
export declare function loginAs(role: string): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
    };
    token: string;
}>;
export declare function verifyOTP(email: string, _code: string): Promise<{
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar: string | undefined;
        institution: string | undefined;
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
}>;
export declare function forgotPassword(_email: string): Promise<{
    message: string;
}>;
export declare function resetPassword(_token: string, _newPassword: string): Promise<{
    message: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map