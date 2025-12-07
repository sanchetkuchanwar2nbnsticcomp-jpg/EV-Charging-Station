import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Stations from "./pages/Stations";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";   // ✅ You forgot this earlier
import UserLogin from "./pages/UserLogin";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageStations from "./pages/admin/ManageStations";
import ManageBookings from "./pages/admin/ManageBookings";

import "./styles/App.css";

function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <footer className="footer">
        © {new Date().getFullYear()} EV Charging — All Rights Reserved ⚡
      </footer>
    </>
  );
}

function AdminLayout({ children }) {
  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/stations" element={<UserLayout><Stations /></UserLayout>} />
        
        {/* USER PROFILE */}
        <Route path="/profile" element={<UserLayout><Profile /></UserLayout>} />
        <Route path="/edit-profile" element={<UserLayout><EditProfile /></UserLayout>} />

        {/* USER LOGIN */}
        <Route path="/UserLogin" element={<UserLayout><UserLogin /></UserLayout>} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<Navigate to="/admin/login" />} />

        <Route path="/admin/login" element={<AdminLayout><AdminLogin /></AdminLayout>} />
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/manage-users" element={<AdminLayout><ManageUsers /></AdminLayout>} />
        <Route path="/admin/manage-stations" element={<AdminLayout><ManageStations /></AdminLayout>} />
        <Route path="/admin/manage-bookings" element={<AdminLayout><ManageBookings /></AdminLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
