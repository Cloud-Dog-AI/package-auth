import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, CardContent, CardHeader } from '@cloud-dog/ui';
export function SignInScreen({ config, onSelect }) {
    return (_jsx("div", { className: "mx-auto max-w-md", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx("h1", { className: "text-lg font-semibold", children: "Sign in" }), _jsx("p", { className: "text-sm text-neutral-500", children: "Choose an identity provider." })] }), _jsx(CardContent, { className: "space-y-2", children: config.providers.map((p) => (_jsxs(Button, { variant: "secondary", className: "w-full", onClick: () => onSelect(p.name), children: ["Continue with ", p.name] }, p.name))) })] }) }));
}
