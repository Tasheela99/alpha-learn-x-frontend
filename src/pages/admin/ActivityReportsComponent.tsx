import { Typography } from "@mui/material";

export function ActivityReportsComponent() {
    return (
        <div>
            <Typography variant="h4">Settings</Typography>
            {/* Remove the recursive call to SettingsComponent */}
            <Typography variant="body1">Activity content goes here</Typography>
        </div>
    );
}