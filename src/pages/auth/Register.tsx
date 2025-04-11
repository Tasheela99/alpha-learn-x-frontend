import React, {useState} from "react";
import {TextField, Button, Box, Typography, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {registerUser} from "../../api/AuthApi.ts";


export function RegisterComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await registerUser(firstName, lastName, mobile, email, password);
            navigate("/login");
        } catch (err) {
            setError("Registration failed. Please try again.");
        }
    };
    return (
        <Container maxWidth="sm">
            <Box sx={{mt: 8, textAlign: "center"}}>
                <Typography variant="h5" gutterBottom>Register</Typography>
                <TextField fullWidth label="First Name" margin="normal" variant="outlined" value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}/>
                <TextField fullWidth label="Last Name" margin="normal" variant="outlined" value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                <TextField fullWidth label="Mobile" margin="normal" variant="outlined" value={mobile}
                           onChange={(e) => setMobile(e.target.value)}/>
                <TextField fullWidth label="Email" margin="normal" variant="outlined" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined"
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button fullWidth variant="contained" color="primary" sx={{mt: 2}}
                        onClick={handleRegister}>Register</Button>
            </Box>
        </Container>
    );
}