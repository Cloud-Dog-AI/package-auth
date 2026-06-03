import * as React from "react";
interface SessionTimeoutProviderProps {
    timeoutMinutes?: number;
    warningMinutes?: number;
    onTimeout?: () => void;
    children: React.ReactNode;
}
export declare function SessionTimeoutProvider({ timeoutMinutes, warningMinutes, onTimeout, children, }: SessionTimeoutProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SessionTimeoutProvider.d.ts.map