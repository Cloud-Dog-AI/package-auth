import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, Button } from "@cloud-dog/ui";
import { useAuth } from "../context/useAuth";
export function SessionExpiredDialog(props) {
    const auth = useAuth();
    return (_jsx(Dialog, { open: props.open, onOpenChange: props.onOpenChange, children: _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Session expired" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Please sign in again to continue." }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { onClick: () => auth.logout(), children: "Sign out" }), _jsx(Button, { variant: "secondary", onClick: () => props.onOpenChange(false), children: "Close" })] })] }) }));
}
