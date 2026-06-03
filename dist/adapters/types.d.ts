import type { AuthConfig, LoginCredentials, User } from "../types/user";
export interface AuthAdapter {
    login(credentials: LoginCredentials): Promise<User>;
    logout(): Promise<void>;
    refresh(): Promise<User | null>;
    getAccessToken(): string | null;
    isAuthenticated(): boolean;
}
export type AdapterFactory = (config: AuthConfig) => AuthAdapter;
//# sourceMappingURL=types.d.ts.map