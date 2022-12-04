type xLogOptions = {
    onLog?: (message: string) => void;
    appMode: "Development" | "Production";
}
export const useXLog = (option: xLogOptions) => {
    window.console.log = (function () {
        const log = console.log;
        return function () {
            if (option.appMode === "Production") return;
            const args = Array.prototype.slice.call(arguments);
            const message = args.join(" ");
            option.onLog && option.onLog(message);
            return Function.prototype.apply.call(log, console, args);
        };
    })();
};