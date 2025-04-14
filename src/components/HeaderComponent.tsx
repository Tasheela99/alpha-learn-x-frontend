import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useUser } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../assets/css/HeaderComponent.css";

const HeaderComponent = ({ toggleDrawer }: any) => {
    const { isAuthenticated, user, logout } = useUser();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    {toggleDrawer && (
                        <IconButton
                            edge="start"
                            color="primary"
                            onClick={toggleDrawer}
                            className="me-2 d-none d-lg-flex"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <IconButton 
                        className="d-lg-none me-2"
                        onClick={toggleMobileMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="logo-circle">Logo</div>
                    <span className="brand-text">Tinker Alpha</span>
                </div>

                <div className={`mx-auto nav-links ${mobileMenuOpen ? 'd-flex' : 'd-none d-lg-flex'}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-link--active" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/subjects"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-link--active" : ""}`
                        }
                    >
                        Subjects
                    </NavLink>
                    <NavLink
                        to="/community"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-link--active" : ""}`
                        }
                    >
                        Community
                    </NavLink>
                    <NavLink
                        to="/help"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "nav-link--active" : ""}`
                        }
                    >
                        Help
                    </NavLink>
                </div>

                <div className={mobileMenuOpen ? 'mt-3 w-100' : ''}>
                    {isAuthenticated ? (
                        <div className="d-flex align-items-center gap-3">
                            <span className="fw-bold">{user?.name}</span>
                            <button className="btn btn-outline-danger btn-sm" onClick={logout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink to="/register">
                            <button className="btn btn-light">Register Now</button>
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;