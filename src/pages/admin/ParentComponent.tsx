import { Typography } from "@mui/material";

export function ParentComponent() {
    return (
        <div>
            <Typography variant="h4">Settings</Typography>
            {/* Remove the recursive call to SettingsComponent */}
            <Typography variant="body1">Parent content goes here</Typography>
        </div>
    );
}