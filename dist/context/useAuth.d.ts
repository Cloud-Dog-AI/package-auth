export declare function useAuth(): Readonly<{
    isLoading: boolean;
    user: import("..").User | null;
    error: string | null;
    config: import("..").AuthConfig;
    login: (credentials: import("..").LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    refresh: () => Promise<void>;
    getAccessToken: () => string | null;
    isAuthenticated: boolean;
    hasPermission: (permission: string) => boolean;
}>;
//# sourceMappingURL=useAuth.d.ts.map