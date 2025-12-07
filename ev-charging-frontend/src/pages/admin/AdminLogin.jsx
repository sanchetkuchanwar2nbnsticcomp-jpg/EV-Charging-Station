import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    const validUser = "admin";
    const validPass = "admin123";

    if (username === validUser && password === validPass) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        
        <h1 className="admin-login-title">
          Admin <br /> Login
        </h1>

        <div className="admin-login-form">
          {error && (
            <p style={{ color: "red", marginBottom: "-10px" }}>
              {error}
            </p>
          )}

          <input
            type="text"
            placeholder="Username"
            className="admin-login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="admin-login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="admin-login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;
