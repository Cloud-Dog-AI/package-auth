import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@cloud-dog/ui";
import { useAuth } from "../context/useAuth";
export function LogoutButton(props) {
    const auth = useAuth();
    return (_jsx(Button, { ...props, onClick: async (e) => {
            props.onClick?.(e);
            await auth.logout();
        }, children: props.children ?? "Sign out" }));
}
