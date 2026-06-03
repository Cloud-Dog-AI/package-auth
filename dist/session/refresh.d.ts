import type { AuthConfig, User } from "../types/user";
import { TokenStore } from "./token-store";
export declare function refreshUserSession(opts: {
    config: AuthConfig;
    tokenStore: TokenStore;
}): Promise<User | null>;
//# sourceMappingURL=refresh.d.ts.map