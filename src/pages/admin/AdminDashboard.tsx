import {
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    ListItemButton,
} from "@mui/material";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {useUser} from "../../context/UserContext";
import {useState} from "react";
import HeaderComponent from "../../components/HeaderComponent";
import {ManageUsers} from "./ManageUsers";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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
        {text: "Students", icon: <PeopleIcon/>},
        {text: "Teachers", icon: <SettingsIcon/>},
        {text: "Parents", icon: <SettingsIcon/>},
        {text: "Reports", icon: <SettingsIcon/>},
        {text: "Chat", icon: <SettingsIcon/>},
        {text: "Activity Reports", icon: <SettingsIcon/>},
        {text: "Settings", icon: <SettingsIcon/>},
        {text: "LogOut", icon: <SettingsIcon/>},
    ];


    const sidebarItems = [
        {text: "Dashboard", icon: <DashboardIcon/>},
        {text: "Students", icon: <PeopleIcon/>},
        {text: "Teachers", icon: <SchoolIcon/>},
        {text: "Parents", icon: <FamilyRestroomIcon/>},
        {text: "Reports", icon: <AssessmentIcon/>},
        {text: "Chat", icon: <ChatIcon/>},
        {text: "Activity Reports", icon: <TimelineIcon/>},
        {text: "Settings", icon: <SettingsIcon/>},
        {text: "LogOut", icon: <LogoutIcon/>},
    ];

    return (
        <>
            <HeaderComponent toggleDrawer={toggleDrawer}/>

            <div style={{display:'flex'}}>
                <div className="left" style={{width:'20%'}}>
                    <Grid size={{xs: 2}} sx={{
                        height: '85vh',
                        overflowY: 'auto',
                        backgroundColor: '#D9D9D9',
                        borderRadius: '50px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        {sidebarItems.map((item, index) => (
                            <ListItem key={index} button sx={{cursor: 'pointer'}}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        ))}
                    </Grid>
                </div>
                <div className="right" style={{width:'100%'}}>
                    <Grid size={{xs: 10,}}
                          sx={{
                              height: '100%',
                              overflowY: 'auto',
                              backgroundColor: '#ffffff',
                              padding: 2
                          }}
                    >
                        <ManageUsers/>
                    </Grid>
                </div>
            </div>
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
            </Box>
        </>
    );
}