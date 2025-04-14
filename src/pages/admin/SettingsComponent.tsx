import { Typography } from "@mui/material";

export function SettingsComponent() {
    return (
        <div>
            <Typography variant="h4">Settings</Typography>
            {/* Remove the recursive call to SettingsComponent */}
            <Typography variant="body1">Settings content goes here</Typography>
        </div>
    );
}