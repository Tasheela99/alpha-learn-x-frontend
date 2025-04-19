import React, {useState} from "react";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import {useNavigate, Link as RouterLink} from "react-router-dom";
import {registerUser} from "../../api/AuthApi";

export function RegisterComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!name  || !email || !password) {
            setError("All fields are required.");
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
            const data = await registerUser(name, email, password);
            console.log(data);  // Add logging to see the response
            navigate("/login");
        } catch (err: any) {
            console.error("Registration failed:", err);
            if (err.response) {
                // Check the response error from the server
                console.error("Response data:", err.response.data);
                setError(err.response.data?.message || "Registration failed. Please try again.");
            } else {
                setError("Registration failed. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleRegister();
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{mt: 8, textAlign: "center"}}>
                <Typography variant="h4" gutterBottom>
                    Create an Account
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    Join us and get started in seconds!
                </Typography>

                {error && (
                    <Typography color="error" sx={{mb: 2}}>
                        {error}
                    </Typography>
                )}

                <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isLoading}
                />

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isLoading}
                />
                <TextField
                    fullWidth
                    label="Phone"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isLoading}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isLoading}
                />

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{mt: 2}}
                    onClick={handleRegister}
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={24} color="inherit"/> : "Register"}
                </Button>

                <Grid container justifyContent="center" sx={{mt: 2}}>
                    <Grid>
                        <Typography variant="body2">
                            Already have an account?{" "}
                            <Link component={RouterLink} to="/login" underline="hover">
                                Login here
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
