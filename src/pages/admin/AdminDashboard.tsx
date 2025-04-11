import React from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import { useUser } from "../../context/UserContext";

export function AdminDashboardComponent() {
    const { user, isAuthenticated, logout } = useUser();

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>
                    {isAuthenticated ? `Welcome, ${user?.name}!` : "Welcome to Admin Dashboard"}
                </Typography>

                <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                    ADMIN
                </Button>

                {isAuthenticated && (
                    <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        sx={{ mt: 2 }}
                        onClick={logout}
                    >
                        Logout
                    </Button>
                )}
            </Box>
        </Container>
    );
}
