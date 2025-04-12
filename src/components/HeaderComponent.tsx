import {Link} from "react-router-dom";
import "../assets/css/HeaderComponent.css"

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container d-flex align-items-center">
                {/* Left Section: Logo & Brand */}
                <div className="d-flex align-items-center">
                    <div className="logo-circle me-2">Logo</div>
                    <span className="fw-bold brand-text">Tinker Alpha</span>
                </div>

                {/* Middle Section: Navigation Links */}
                <div className="mx-auto d-flex align-items-center nav-links">
                    <button className="btn btn-light active">Home</button>
                    <Link to="#" className="nav-link">Subjects</Link>
                    <Link to="#" className="nav-link">Community</Link>
                    <Link to="#" className="nav-link">Help</Link>
                </div>

                {/* Right Section: Register Button */}
                <div>
                    <button className="btn btn-light">Register Now</button>
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;
