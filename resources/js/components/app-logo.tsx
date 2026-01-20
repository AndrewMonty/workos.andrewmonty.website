import AppLogoIcon from "./app-logo-icon";

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center gap-2 font-mono text-lg font-semibold">
                <AppLogoIcon />
                <span className="truncate">AndrewOS</span>
            </div>
        </>
    );
}
