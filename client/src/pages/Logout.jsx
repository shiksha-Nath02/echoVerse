import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("cliked");
    try {
      await logout();        // clear session / cookie
      navigate("/login");   // redirect AFTER logout
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <span className="logout" onClick={handleLogout}>
      Logout
    </span>
  );
};

export default Navbar;
