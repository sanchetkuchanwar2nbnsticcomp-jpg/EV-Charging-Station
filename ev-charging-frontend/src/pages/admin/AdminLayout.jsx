// src/components/AdminLayout.jsx
import React from "react";

export default function AdminLayout({ title, icon, children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0d",
        color: "white",
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "700", color: "#f1b400" }}>
        <span style={{ marginRight: "10px" }}>{icon}</span>
        {title}
      </h1>

      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
          marginTop: "30px",
          background: "#111",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(241,180,0,0.3)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
