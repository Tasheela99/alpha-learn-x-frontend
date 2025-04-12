import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/HeaderComponent.css";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container d-flex align-items-center">
        {/* Left Section: Logo & Brand */}
        <div className="d-flex align-items-center">
          <div className="logo-circle me-2">Logo</div>
          <span className="brand-text">Tinker Alpha</span>
        </div>

        {/* Middle Section: Navigation Links */}
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

        {/* Right Section: Register Button */}
        <div>
          <button className="btn btn-light">Register Now</button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
