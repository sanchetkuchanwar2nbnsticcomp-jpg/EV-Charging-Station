import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="admin-title">Admin Dashboard</h1>

      <p className="admin-welcome">Welcome Admin — manage the system below.</p>

      <div className="admin-card-container">
        <Link to="/admin/manage-users" className="admin-card">
          <h2>👤 Manage Users</h2>
        </Link>

        <Link to="/admin/manage-stations" className="admin-card">
          <h2>⚡ Manage Stations</h2>
        </Link>

        <Link to="/admin/manage-bookings" className="admin-card">
          <h2>📘 Manage Bookings</h2>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
