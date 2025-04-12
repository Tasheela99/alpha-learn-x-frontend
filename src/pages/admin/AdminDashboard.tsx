import {
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    ListItemButton
} from "@mui/material";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import {useUser} from "../../context/UserContext";
import {useState} from "react";
import HeaderComponent from "../../components/HeaderComponent";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));


export function AdminDashboardComponent() {
    useUser();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    const drawerItems = [
        {text: "Dashboard", icon: <DashboardIcon/>},
        {text: "Users", icon: <PeopleIcon/>},
        {text: "Settings", icon: <SettingsIcon/>},
    ];

    return (
        <>
            <HeaderComponent toggleDrawer={toggleDrawer}/>
            <Box sx={{display: "flex"}}>
                {/* Sidebar (Drawer) */}
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                >
                    <Box
                        sx={{width: 250}}
                        role="presentation"
                        onClick={toggleDrawer}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") toggleDrawer();
                        }}
                    >
                        <Typography variant="h6" sx={{p: 2}}>
                            Menu
                        </Typography>
                        <Divider/>
                        <List>
                            {drawerItems.map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>

                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid size={2} sx={{maxHeight:'60vh',overflowY:'scroll', backgroundColor: 'red'}}>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                            <Item>size=4</Item>
                        </Grid>
                        <Grid size={10}
                              sx={{
                                  height: '100%',
                                  overflowY: 'auto',
                                  backgroundColor: '#ffffff',
                              }}>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
