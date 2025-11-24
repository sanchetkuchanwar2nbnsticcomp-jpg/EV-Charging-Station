import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    fullName: "Sanchet Kuchanwar",
    email: "kuchanwarsanchet@gmail.com",
    phone: "8446592672",
    membership: "Premium",
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-title">User Profile</h2>

        <div className="profile-section">
          <label className="profile-label">Full Name</label>
          <p className="profile-value">{user.fullName}</p>
        </div>

        <div className="profile-section">
          <label className="profile-label">Email</label>
          <p className="profile-value">{user.email}</p>
        </div>

        <div className="profile-section">
          <label className="profile-label">Phone</label>
          <p className="profile-value">{user.phone}</p>
        </div>

        <div className="profile-section">
          <label className="profile-label">Membership</label>
          <p className="profile-value">{user.membership}</p>
        </div>

        <button
          className="edit-btn"
          onClick={() => navigate("/edit-profile")}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
