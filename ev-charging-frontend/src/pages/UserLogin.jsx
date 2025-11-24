import React, { useState } from "react";
import "./UserLogin.css";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Sanchet Kuchanwar" && password === "123456") {
      alert("Login Successful!");

      // ✅ Store login state
      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");

      window.location.href = "/";  
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2 className="login-title">User Login</h2>

        <form onSubmit={handleLogin} className="login-form">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <footer className="footer">
          © 2025 EV Charging — All Rights Reserved ⚡
        </footer>
      </div>
    </div>
  );
};

export default UserLogin;
