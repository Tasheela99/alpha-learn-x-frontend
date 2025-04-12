import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useUser } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "../assets/css/HeaderComponent.css";

const HeaderComponent = ({ toggleDrawer }:any) => {
    const { isAuthenticated, user, logout } = useUser();

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container d-flex align-items-center justify-content-between">
                {/* Left Section: Menu Icon + Logo */}
                <div className="d-flex align-items-center">
                    {toggleDrawer && (
                        <IconButton
                            edge="start"
                            color="primary"
                            onClick={toggleDrawer}
                            className="me-2"
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <div className="logo-circle me-2">Logo</div>
                    <span className="brand-text">Tinker Alpha</span>
                </div>

                {/* Middle Section: Nav Links */}
                <div className="mx-auto d-flex align-items-center nav-links">
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

                {/* Right Section: User */}
                <div>
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
