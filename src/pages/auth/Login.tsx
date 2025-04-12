import React, { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
    CircularProgress,
} from "@mui/material";
import { useUser } from "../../context/UserContext";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { loginUser } from "../../api/AuthApi";

export function LoginComponent() {
    const { login } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (isLoading) return;
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            setIsLoading(true);
            setError("");

            const data = await loginUser(email, password);

            if (data && data.user && data.user.id) {
                login(data.user);
                if (!rememberMe) {
                    sessionStorage.setItem("authToken", data.token);
                    localStorage.removeItem("authToken");
                }

                const redirectTo = location.state?.from?.pathname || "/";
                navigate(redirectTo);
            } else {
                setError("Invalid response from server. Please try again.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Invalid credentials or server error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ mt: 8, textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>
                    Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Sign in to your account to continue
                </Typography>

                {error && (
                    <Typography color="error" sx={{ mb: 2 }}>
                        {error}
                    </Typography>
                )}

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    onKeyDown={handleKeyPress}
                />

                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    onKeyDown={handleKeyPress}
                />

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                color="primary"
                                disabled={isLoading}
                            />
                        }
                        label="Remember me"
                    />
                    <Link
                        component={RouterLink}
                        to="/forgot-password"
                        variant="body2"
                        underline="hover"
                        sx={{ cursor: "pointer" }}
                    >
                        Forgot password?
                    </Link>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleLogin}
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                </Button>

                <Grid container justifyContent="center" sx={{ mt: 2 }}>
                    <Grid>
                        <Typography variant="body2">
                            Don’t have an account?{" "}
                            <Link component={RouterLink} to="/register" underline="hover">
                                Register here
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
