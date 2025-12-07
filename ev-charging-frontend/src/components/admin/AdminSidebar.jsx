import React from "react";
import "../../styles/admin.css";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <h2>EV Admin</h2>

      <ul>
        <li><a href="/admin/dashboard">Dashboard</a></li>
        <li><a href="/admin/stations">Manage Stations</a></li>
        <li><a href="/admin/users">Manage Users</a></li>
        <li><a href="/admin/bookings">Manage Bookings</a></li>
        <li
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
