import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./BenProfile.css";

const BenProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "📊", path: "/beneficiary/dashboard" },
    { id: "surplus", name: "Food Surplus", icon: "🍽️", path: "/beneficiary/surplus" },
    { id: "reservations", name: "Reservations", icon: "📋", path: "/beneficiary/reservations" },
    { id: "history", name: "History", icon: "📜", path: "/beneficiary/history" },
    { id: "profile", name: "Profile", icon: "👤", path: "/beneficiary/profile" },
    { id: "settings", name: "Settings", icon: "⚙️", path: "/beneficiary/settings" },
  ];

  const [profile, setProfile] = useState({
    name: "Ahmed Mansouri",
    email: "ahmed@foodshare.com",
    phone: "+213 55 12 34 56",
    location: "Algiers, Algeria",
    memberSince: "January 2024",
    bio: "Passionate about reducing food waste and helping the community",
    stats: [
      { label: "Pickups", value: "12", icon: "📦" },
      { label: "Meals Saved", value: "125", icon: "🍽️" },
      { label: "Rating", value: "4.8", icon: "⭐" },
      { label: "Food Rescued", value: "15kg", icon: "🌱" },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <Link to="/" className="logo">
          🌿 FoodShare
        </Link>

        <div className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={activeMenu === item.id ? "active" : ""}
              onClick={() => {
                setActiveMenu(item.id);
                navigate(item.path);
              }}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </div>

        <div className="sidebar-footer">
          <button onClick={() => navigate("/")} className="home-btn">🏠 Back to Home</button>
          <button onClick={() => navigate("/auth")} className="logout-btn">🚪 Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Profile Header */}
        <div className="card header-card">
          <div className="avatar">👤</div>
          <div className="header-info">
            <h2>{profile.name}</h2>
            <p className="location">📍 {profile.location}</p>
            <p className="member">🎗️ Member since {profile.memberSince}</p>
            <p className="bio">"{profile.bio}"</p>
          </div>
          <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "✏️ Edit"}
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {profile.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="card">
          <h3>Contact Information</h3>
          {!isEditing ? (
            <div className="contact-info">
              <p>📧 {profile.email}</p>
              <p>📞 {profile.phone}</p>
              <p>📍 {profile.location}</p>
            </div>
          ) : (
            <div className="edit-form">
              <input name="name" placeholder="Name" value={profile.name} onChange={handleChange} />
              <input name="email" placeholder="Email" value={profile.email} onChange={handleChange} />
              <input name="phone" placeholder="Phone" value={profile.phone} onChange={handleChange} />
              <input name="location" placeholder="Location" value={profile.location} onChange={handleChange} />
              <button className="save-btn" onClick={handleSave}>💾 Save Changes</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BenProfile;