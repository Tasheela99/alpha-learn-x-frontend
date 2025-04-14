import { Typography } from "@mui/material";

export function StudentComponent() {
    return (
        <div>
            <Typography variant="h4">Settings</Typography>
            {/* Remove the recursive call to SettingsComponent */}
            <Typography variant="body1">Student content goes here</Typography>
        </div>
    );
}