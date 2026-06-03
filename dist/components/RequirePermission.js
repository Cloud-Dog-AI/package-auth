import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useAuth } from "../context/useAuth";
export function RequirePermission(props) {
    const auth = useAuth();
    if (!auth.hasPermission(props.permission)) {
        return _jsx(_Fragment, { children: props.fallback ?? _jsx("div", { role: "alert", children: "Forbidden" }) });
    }
    return _jsx(_Fragment, { children: props.children });
}
