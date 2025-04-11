import React, {useState} from "react";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import {loginUser} from "../../api/AuthApi.ts";

export function LoginComponent() {

    const { login } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const data = await loginUser(email, password);
            login(data.user);
            navigate("/");
        } catch (err) {
            console.log(err)
            setError("Invalid credentials. Please try again.");
        }
    };


    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Login</Typography>
                <TextField fullWidth label="Email" margin="normal" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
            </Box>
        </Container>
    );
}
