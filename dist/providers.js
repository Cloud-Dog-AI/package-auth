// Starter: test adapter for local/dev + CI. Replace/add OIDC adapter in real implementation.
export function createAuthAdapter(config) {
    const testProvider = config.providers.find((p) => p.kind === 'test');
    let session = { token: undefined, user: undefined };
    return {
        async getSession() {
            return session;
        },
        async signIn() {
            if (!testProvider)
                throw new Error('No test provider configured');
            session = { token: 'test-token', user: { name: 'Test User', email: 'test@example.com', roles: ['admin'] } };
        },
        async signOut() {
            session = { token: undefined, user: undefined };
        },
    };
}
