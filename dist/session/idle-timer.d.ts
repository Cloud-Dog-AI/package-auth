export declare class IdleTimer {
    private readonly timeoutMs;
    private readonly onIdle;
    private timer;
    private readonly handler;
    constructor(timeoutMs: number, onIdle: () => void);
    start(): void;
    stop(): void;
    reset(): void;
}
//# sourceMappingURL=idle-timer.d.ts.map