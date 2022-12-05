type overLogOptions = {
    onLog?: (message: string) => void;
    appMode: "Development" | "Production";
}

export const useOverLog = (option: overLogOptions) => {
    window.console.log = (function () {
        const log = console.log;
        return function () {
            if (option.appMode === "Production") return;
            const args = Array.prototype.slice.call(arguments);
            const params = typeof args[0] === "object" ? JSON.stringify(args) : args;
            option.onLog && option.onLog(params);
            return Function.prototype.apply.call(log, console, args);
        };
    })();
};