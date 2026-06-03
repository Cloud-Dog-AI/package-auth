import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Copyright 2026 Cloud-Dog, Viewdeck Engineering Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// @cloud-dog/auth — Canonical cross-app login page.
import * as React from "react";
import { brand, BRAND_NAME, BRAND_TAGLINE } from "@cloud-dog/tokens";
import { Button, Card, CardContent, CardHeader, Input, Label } from "@cloud-dog/ui";
import { useAuth } from "../context/useAuth";
export function LoginPage(props) {
    const auth = useAuth();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [formError, setFormError] = React.useState(null);
    const mode = props.mode ?? "cookie";
    const apiKeyValue = props.apiKeyValue ?? "";
    const description = props.description ??
        (mode === "oidc"
            ? "Continue with your organisation single sign-on."
            : mode === "api_key"
                ? "Use your service API key to access the platform."
                : "Use your organisation account.");
    const onCookieSubmit = async (e) => {
        e.preventDefault();
        setFormError(null);
        try {
            await auth.login({ username, password });
        }
        catch {
            setFormError(auth.error ?? "Login failed.");
        }
    };
    const onApiKeySubmit = async (e) => {
        e.preventDefault();
        setFormError(null);
        const apiKey = apiKeyValue.trim();
        if (!apiKey) {
            setFormError("API key is required.");
            return;
        }
        try {
            if (props.onApiKeySubmit) {
                await props.onApiKeySubmit({ apiKey, secondaryValue: props.secondaryField?.value.trim() });
            }
            else {
                await auth.login({ apiKey });
            }
        }
        catch {
            setFormError(props.error ?? auth.error ?? "Login failed.");
        }
    };
    const onOidcStart = () => {
        setFormError(null);
        void auth.login({ oidc: true }).catch((e) => {
            setFormError(e instanceof Error ? e.message : "Failed to start sign-in.");
        });
    };
    const errorText = formError ?? props.error ?? auth.error ?? null;
    return (_jsxs("div", { className: "min-h-screen bg-muted/10", children: [_jsx("header", { className: "border-b border-border/70 bg-background/95 px-6 py-4 backdrop-blur", children: _jsxs("div", { className: "mx-auto flex w-full max-w-6xl items-center gap-3", children: [_jsx("img", { src: brand.logoPath, alt: BRAND_NAME, className: "h-8 w-8" }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold tracking-tight text-foreground", children: props.appName ?? BRAND_NAME }), _jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: BRAND_TAGLINE })] })] }) }), _jsx("div", { className: "grid min-h-[calc(100vh-4.5rem)] place-items-center p-4", children: _jsxs(Card, { className: "w-full max-w-md border-border/80 shadow-sm", children: [_jsxs(CardHeader, { className: "space-y-4 text-center", children: [_jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/70 bg-background shadow-sm", children: _jsx("img", { src: brand.logoPath, alt: BRAND_NAME, className: "h-8 w-8" }) }), _jsxs("div", { className: "space-y-1", children: [_jsx("p", { className: "text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground", children: BRAND_TAGLINE }), _jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: props.title ?? "Sign in" }), _jsx("p", { className: "text-sm text-muted-foreground", children: description })] })] }), _jsxs(CardContent, { children: [mode === "cookie" ? (_jsxs("form", { onSubmit: onCookieSubmit, className: "space-y-4", "aria-describedby": "login-errors", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "loginUsername", children: "Username" }), _jsx(Input, { id: "loginUsername", name: "username", value: username, onChange: (e) => setUsername(e.target.value), autoComplete: "username", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "loginPassword", children: "Password" }), _jsx(Input, { id: "loginPassword", name: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), autoComplete: "current-password", required: true })] }), _jsx("div", { id: "login-errors", "aria-live": "polite", className: "min-h-5 text-sm text-destructive", children: errorText }), _jsx(Button, { type: "submit", loading: auth.isLoading, className: "w-full", children: "Sign in" })] })) : null, mode === "api_key" ? (_jsxs("form", { onSubmit: onApiKeySubmit, className: "space-y-4", "aria-describedby": "login-errors", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "api-key", children: "API key" }), _jsx(Input, { id: "api-key", value: apiKeyValue, onChange: (e) => props.onApiKeyChange?.(e.target.value), placeholder: "Enter API key", autoComplete: "off", required: true })] }), props.secondaryField ? (_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: props.secondaryField.id, children: props.secondaryField.label }), _jsx(Input, { id: props.secondaryField.id, value: props.secondaryField.value, onChange: (e) => props.secondaryField?.onChange(e.target.value), placeholder: props.secondaryField.placeholder, autoComplete: props.secondaryField.autoComplete ?? "off" })] })) : null, _jsx("div", { id: "login-errors", "aria-live": "polite", className: "min-h-5 text-sm text-destructive", children: errorText }), _jsx(Button, { type: "submit", loading: auth.isLoading, className: "w-full", disabled: !apiKeyValue.trim(), children: "Sign in" })] })) : null, mode === "oidc" ? (_jsxs("div", { className: "space-y-4", children: [_jsx(Button, { type: "button", onClick: onOidcStart, loading: auth.isLoading, className: "w-full", children: props.oidcButtonLabel ?? "Continue with SSO" }), _jsx("div", { id: "login-errors", "aria-live": "polite", className: "min-h-5 text-sm text-destructive", children: errorText })] })) : null] })] }) })] }));
}
