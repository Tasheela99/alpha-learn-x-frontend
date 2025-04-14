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
import {ManageUsersComponent} from "./ManageUsersComponent.tsx";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {SettingsComponent} from "./SettingsComponent.tsx";
import {StudentComponent} from "./StudentComponent.tsx";
import {TeachersComponent} from "./TeachersComponent.tsx";
import {ParentComponent} from "./ParentComponent.tsx";
import {ActivityReportsComponent} from "./ActivityReportsComponent.tsx";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

// Placeholder components for each menu item
const Dashboard = () => <div><Typography variant="h4">Dashboard</Typography><p>Dashboard content goes here</p></div>;
const Reports = () => <div><Typography variant="h4">Reports</Typography><p>Reports content goes here</p></div>;
const Chat = () => <div><Typography variant="h4">Chat</Typography><p>Chat functionality goes here</p></div>;

export function AdminDashboardComponent() {
    useUser();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // State to track which menu item is selected
    const [selectedItem, setSelectedItem] = useState("Dashboard");

    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    const handleMenuItemClick = (text) => {
        setSelectedItem(text);
        // Close the drawer if on mobile
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };

    // Map menu items to their corresponding components
    const renderComponent = () => {
        switch (selectedItem) {
            case "Dashboard":
                return <Dashboard/>;
            case "Students":
                return <StudentComponent/>;
            case "Teachers":
                return <TeachersComponent/>;
            case "Parents":
                return <ParentComponent/>;
            case "Reports":
                return <Reports/>;
            case "Chat":
                return <Chat/>;
            case "Activity Reports":
                return <ActivityReportsComponent/>;
            case "Settings":
                return <SettingsComponent/>;
            case "Manage Users":
                return <ManageUsersComponent/>;
            default:
                return <Dashboard/>;
        }
    };

    const drawerItems = [
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


    const sidebarItems = [
        {text: "Dashboard", icon: <DashboardIcon/>},
        {text: "Students", icon: <PeopleIcon/>},
        {text: "Teachers", icon: <SchoolIcon/>},
        {text: "Manage Users", icon: <PeopleIcon/>},
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

            <div style={{display: 'flex'}}>
                <div className="left" style={{width: '20%'}}>
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
                            <ListItem
                                key={index}
                                button
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: selectedItem === item.text ? '#b1b1b1' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: '#c0c0c0',
                                    },
                                    borderRadius: '10px',
                                }}
                                onClick={() => handleMenuItemClick(item.text)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                        ))}
                    </Grid>
                </div>
                <div className="right" style={{width: '80%'}}>
                    <Grid size={{xs: 10,}}
                          sx={{
                              height: '100%',
                              overflowY: 'auto',
                              backgroundColor: '#ffffff',
                              padding: 2
                          }}
                    >
                        {renderComponent()}
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
                    >
                        <Typography variant="h6" sx={{p: 2}}>
                            Menu
                        </Typography>
                        <Divider/>
                        <List>
                            {drawerItems.map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton
                                        onClick={() => handleMenuItemClick(item.text)}
                                        selected={selectedItem === item.text}
                                    >
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