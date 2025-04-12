import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Box,
    Container,
    Divider,
    ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { useUser } from "../../context/UserContext";
import { useState } from "react";

export function StudentDashboardComponent() {
    const { user, isAuthenticated, logout } = useUser();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    const drawerItems = [
        { text: "Dashboard", icon: <DashboardIcon /> },
        { text: "Users", icon: <PeopleIcon /> },
        { text: "Settings", icon: <SettingsIcon /> },
    ];

    return (
        <Box sx={{ display: "flex" }}>
            {/* AppBar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Student Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar (Drawer) */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") toggleDrawer();
                    }}
                >
                    <Typography variant="h6" sx={{ p: 2 }}>
                        Menu
                    </Typography>
                    <Divider />
                    <List>
                        {drawerItems.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* Spacer for AppBar */}
                <Toolbar />

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
            </Box>
        </Box>
    );
}
