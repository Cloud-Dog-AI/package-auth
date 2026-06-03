export type LoginCredentials = Readonly<{
    username: string;
    password: string;
}> | Readonly<{
    apiKey: string;
}> | Readonly<{
    oidc: true;
}>;
export type User = Readonly<{
    id: string;
    /**
     * Stable login identifier (e.g. "alice", "svc-imap"). Falls back to {@link id}
     * if the underlying identity provider does not surface a separate username.
     */
    username?: string;
    displayName: string;
    email?: string;
    roles: string[];
    /**
     * Group memberships (e.g. directory groups, OIDC `groups` claim).
     * Profile surfaces render this list; empty array means "no groups".
     */
    groups?: string[];
    permissions: string[];
    /**
     * ISO-8601 timestamp of the last successful authentication for this principal.
     * Optional — not all identity providers surface this.
     */
    lastLogin?: string;
}>;
export type AuthMode = "cookie" | "oidc" | "api_key";
export type AuthConfig = Readonly<{
    mode: AuthMode;
    apiBaseUrl: string;
    idleTimeoutMs?: number;
    cookie?: {
        loginPath: string;
        mePath: string;
        logoutPath: string;
        refreshPath?: string;
    };
    oidc?: {
        issuer: string;
        clientId: string;
        redirectUri: string;
        scope: string;
    };
    apiKey?: {
        userId?: string;
        username?: string;
        displayName?: string;
        email?: string;
        roles?: string[];
        groups?: string[];
        permissions?: string[];
    };
}>;
//# sourceMappingURL=user.d.ts.map