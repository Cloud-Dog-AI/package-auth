import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
// @cloud-dog/auth — SessionTimeoutProvider: Session timeout with warning dialog (UI-R10).
import * as React from "react";
import { Dialog, Button } from "@cloud-dog/ui";
import { useAuth } from "../context/useAuth";
const ACTIVITY_EVENTS = ["mousemove", "keydown", "scroll", "click", "touchstart"];
export function SessionTimeoutProvider({ timeoutMinutes = 30, warningMinutes = 5, onTimeout, children, }) {
    const auth = useAuth();
    const [showWarning, setShowWarning] = React.useState(false);
    const [secondsLeft, setSecondsLeft] = React.useState(warningMinutes * 60);
    const idleTimerRef = React.useRef(null);
    const countdownRef = React.useRef(null);
    const showWarningRef = React.useRef(false);
    const handleTimeout = React.useCallback(() => {
        if (onTimeout) {
            onTimeout();
        }
        else {
            void auth.logout();
            window.location.assign("/login");
        }
    }, [onTimeout, auth]);
    const clearTimers = React.useCallback(() => {
        if (idleTimerRef.current)
            clearTimeout(idleTimerRef.current);
        if (countdownRef.current)
            clearInterval(countdownRef.current);
        idleTimerRef.current = null;
        countdownRef.current = null;
    }, []);
    const startIdleTimer = React.useCallback(() => {
        clearTimers();
        showWarningRef.current = false;
        setShowWarning(false);
        const idleMs = (timeoutMinutes - warningMinutes) * 60 * 1000;
        idleTimerRef.current = setTimeout(() => {
            setSecondsLeft(warningMinutes * 60);
            showWarningRef.current = true;
            setShowWarning(true);
            countdownRef.current = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        clearTimers();
                        showWarningRef.current = false;
                        setShowWarning(false);
                        handleTimeout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }, idleMs);
    }, [timeoutMinutes, warningMinutes, clearTimers, handleTimeout]);
    React.useEffect(() => {
        showWarningRef.current = showWarning;
    }, [showWarning]);
    React.useEffect(() => {
        // UI-R23: Do not start timers if user is not authenticated or on login page
        const isLoginPage = window.location.pathname.includes("/login");
        if (!auth.isAuthenticated || isLoginPage) {
            clearTimers();
            setShowWarning(false);
            return;
        }
        const onActivity = () => {
            if (!showWarningRef.current)
                startIdleTimer();
        };
        for (const ev of ACTIVITY_EVENTS) {
            document.addEventListener(ev, onActivity, { passive: true });
        }
        startIdleTimer();
        return () => {
            clearTimers();
            for (const ev of ACTIVITY_EVENTS) {
                document.removeEventListener(ev, onActivity);
            }
        };
    }, [startIdleTimer, clearTimers, auth.isAuthenticated]);
    // UI-R23: Real-time countdown in MM:SS format
    const countdownMM = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const countdownSS = String(secondsLeft % 60).padStart(2, "0");
    return (_jsxs(_Fragment, { children: [children, _jsx(Dialog, { open: showWarning, onOpenChange: () => { }, children: _jsxs("div", { className: "space-y-4", role: "alertdialog", "aria-label": "Session timeout warning", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Session expiring soon" }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Your session will expire in", " ", _jsxs("span", { className: "font-mono font-semibold", "aria-live": "polite", children: [countdownMM, ":", countdownSS] }), "."] }), _jsx("div", { className: "flex gap-2", children: _jsx(Button, { onClick: startIdleTimer, children: "Stay signed in" }) })] }) })] }));
}
