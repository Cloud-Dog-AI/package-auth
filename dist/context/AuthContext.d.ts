import type { AuthConfig, LoginCredentials, User } from "../types/user";
export type AuthState = Readonly<{
    isLoading: boolean;
    user: User | null;
    error: string | null;
    config: AuthConfig;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    refresh: () => Promise<void>;
    getAccessToken: () => string | null;
    isAuthenticated: boolean;
    hasPermission: (permission: string) => boolean;
}>;
//# sourceMappingURL=AuthContext.d.ts.map