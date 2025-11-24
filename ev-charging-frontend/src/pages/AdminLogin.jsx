import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save login session
        localStorage.setItem("username", username);
        localStorage.setItem("isLoggedIn", "true");

        // Go to profile page
        window.location.href = "/profile";
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      setError("Unable to connect to server.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "520px",
          padding: "45px",
          borderRadius: "14px",
          backgroundColor: "#111",
          border: "1px solid rgba(255, 200, 0, 0.25)",
          boxShadow: "0 0 25px rgba(255, 200, 0, 0.2)",
        }}
      >
        <h1
          style={{
            color: "#ffc400",
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "25px",
            textAlign: "left",
          }}
        >
          Admin Login
        </h1>

        {error && (
          <p style={{ color: "red", marginBottom: "10px", fontSize: "15px" }}>
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #333",
            backgroundColor: "#1b1b1b",
            color: "white",
            marginBottom: "18px",
            fontSize: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #333",
            backgroundColor: "#1b1b1b",
            color: "white",
            marginBottom: "22px",
            fontSize: "15px",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#ffc400",
            color: "#000",
            fontSize: "18px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
