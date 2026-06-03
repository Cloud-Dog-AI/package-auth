import type { AuthMode } from "../types/user";
type SecondaryField = Readonly<{
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    autoComplete?: string;
}>;
export type LoginPageProps = Readonly<{
    appName?: string;
    mode?: AuthMode;
    title?: string;
    description?: string;
    apiKeyValue?: string;
    onApiKeyChange?: (value: string) => void;
    onApiKeySubmit?: (payload: {
        apiKey: string;
        secondaryValue?: string;
    }) => Promise<void>;
    oidcButtonLabel?: string;
    secondaryField?: SecondaryField;
    error?: string | null;
}>;
export declare function LoginPage(props: LoginPageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LoginPage.d.ts.map