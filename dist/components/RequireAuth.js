import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@cloud-dog/ui";
import { useAuth } from "../context/useAuth";
export function RequireAuth(props) {
    const auth = useAuth();
    const location = useLocation();
    if (auth.isLoading)
        return _jsx(Spinner, { className: "h-6 w-6" });
    if (!auth.isAuthenticated) {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    return _jsx(_Fragment, { children: props.children });
}
