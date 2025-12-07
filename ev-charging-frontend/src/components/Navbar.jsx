import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/App.css";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    window.location.reload(); // refresh UI
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "1rem 2rem"
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        ⚡ EV Charging
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/stations" style={{ color: "white", textDecoration: "none" }}>
          Stations
        </Link>

        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          Profile
        </Link>

        {/* Admin visible ONLY if NOT logged in */}
        {!isLoggedIn && (
          <Link to="/admin" className="navbar-admin-btn" style={{ color: "white" }}>
            Admin
          </Link>
        )}
      </div>

      {/* Right Side Buttons */}
      <div>
        {/* Sign In button visible only when NOT logged in */}
        {!isLoggedIn && (
          <button
            onClick={() => navigate("/UserLogin")}
            className="navbar-signin-btn"
            style={{
              backgroundColor: "#f1c40f",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#000"
            }}
          >
            Sign In
          </button>
        )}

        {/* Logout button visible only when logged in */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#ff4d4d",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "white",
              marginLeft: "1rem"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
