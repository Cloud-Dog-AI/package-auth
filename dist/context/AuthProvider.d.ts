import * as React from "react";
import type { AuthConfig, LoginCredentials, User } from "../types/user";
export declare const AuthContext: React.Context<Readonly<{
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
}> | null>;
export declare function AuthProvider(props: {
    config: AuthConfig;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AuthProvider.d.ts.map