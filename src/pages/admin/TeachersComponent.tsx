import { Typography } from "@mui/material";

export function TeachersComponent() {
    return (
        <div>
            <Typography variant="h4">Settings</Typography>
            {/* Remove the recursive call to SettingsComponent */}
            <Typography variant="body1">Teachers content goes here</Typography>
        </div>
    );
}