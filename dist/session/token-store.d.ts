export declare class TokenStore {
    private accessToken;
    private refreshToken;
    private expiresAt;
    set(tokens: {
        access: string;
        refresh?: string;
        expiresIn: number;
    }): void;
    getAccess(): string | null;
    getRefresh(): string | null;
    clear(): void;
    isExpired(): boolean;
}
//# sourceMappingURL=token-store.d.ts.map