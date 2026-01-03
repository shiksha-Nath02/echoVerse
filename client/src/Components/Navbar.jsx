import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left" onClick={() => navigate("/dashboard")}>
          EchoVerse
        </div>

        <div className="navbar-right">
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>

          <NavLink to="/admin/new" className="nav-link">
            Write
          </NavLink>

          {/* <NavLink to="/profile" className="nav-link">Profile</NavLink> */}

          <NavLink to="/AdminPortal" className="nav-link">
            Profile
          </NavLink>

          <NavLink to="/Login" className="nav-link">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
