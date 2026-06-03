import type { AuthConfig, AuthSession } from './types';
export type AuthAdapter = {
    getSession: () => Promise<AuthSession>;
    signIn: (providerName?: string) => Promise<void>;
    signOut: () => Promise<void>;
};
export declare function createAuthAdapter(config: AuthConfig): AuthAdapter;
//# sourceMappingURL=providers.d.ts.map