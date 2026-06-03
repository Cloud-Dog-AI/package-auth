export type IdamProvider = {
    kind: 'oidc';
    name: string;
    issuer: string;
    clientId: string;
} | {
    kind: 'test';
    name: string;
};
export type AuthConfig = {
    providers: IdamProvider[];
    defaultProvider?: string;
};
export type AuthSession = {
    token?: string;
    user?: {
        name?: string;
        email?: string;
        roles?: string[];
    };
};
//# sourceMappingURL=types.d.ts.map