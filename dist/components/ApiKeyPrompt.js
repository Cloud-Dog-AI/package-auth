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
// @cloud-dog/auth — API key login prompt.
import * as React from "react";
import { Button, Input } from "@cloud-dog/ui";
import { useAuth } from "../context/useAuth";
export function ApiKeyPrompt(props) {
    const auth = useAuth();
    const [apiKey, setApiKey] = React.useState("");
    const submit = async (e) => {
        e.preventDefault();
        await auth.login({ apiKey });
        setApiKey("");
    };
    return (_jsxs("form", { onSubmit: submit, className: "space-y-3", "aria-label": "API key sign-in", children: [_jsx("div", { className: "text-lg font-semibold", children: props.title ?? "Sign in" }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", htmlFor: "api-key", children: "API key" }), _jsx(Input, { id: "api-key", value: apiKey, onChange: (e) => setApiKey(e.target.value), placeholder: "Enter API key", autoComplete: "off" })] }), _jsx(Button, { type: "submit", disabled: !apiKey.trim() || auth.isLoading, children: "Sign in" }), auth.error ? (_jsx("div", { role: "alert", className: "text-sm text-destructive", children: auth.error })) : null] }));
}
