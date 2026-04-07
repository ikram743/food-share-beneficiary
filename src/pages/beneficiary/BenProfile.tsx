// src/pages/beneficiary/BenProfile.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BenProfile.css';

const BenProfile = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/beneficiary/dashboard' },
    { id: 'surplus', name: 'Food Surplus', icon: '🍽️', path: '/beneficiary/surplus' },
    { id: 'reservations', name: 'Reservations', icon: '📋', path: '/beneficiary/reservations' },
    { id: 'history', name: 'History', icon: '📜', path: '/beneficiary/history' },
    { id: 'profile', name: 'Profile', icon: '👤', path: '/beneficiary/profile' },
    { id: 'settings', name: 'Settings', icon: '⚙️', path: '/beneficiary/settings' }
  ];

  const [profileData, setProfileData] = useState({
    name: 'Ahmed Mansouri',
    email: 'ahmed@foodshare.com',
    phone: '+216 99 999 999',
    role: 'Beneficiary',
    location: 'Tunis, Tunisia',
    joinDate: 'January 2024',
    address: '45 Rue Didouche Mourad',
    city: 'Tunis',
    postalCode: '1000',
    bio: 'Passionate about reducing food waste and helping the community.'
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saved:', profileData);
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
        <div className="sidebar-logo">
 
                <i className="fas fa-leaf"></i>
                <span>FoodShare</span>
              </div>
        <div className="sidebar-menu">
          {menuItems.map(item => (
            <div
              key={item.id}
              className={`menu-link ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveMenu(item.id);
                navigate(item.path);
              }}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="sidebar-logout" onClick={() => navigate('/')}>
          <span className="menu-icon">🚪</span>
          <span className="menu-text">Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <div className="profile-container">
          {/* Profile Header */}
          <div className="profile-header-card">
            <div className="profile-avatar">
              <span>👤</span>
            </div>
            <div className="profile-info">
              <h1>{profileData.name}</h1>
              <p className="profile-role">{profileData.role}</p>
              <p className="profile-location">
                <i className="fas fa-map-marker-alt"></i> {profileData.location}
              </p>
            </div>
            <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
              <i className={`fas fa-${isEditing ? 'times' : 'edit'}`}></i>
              {isEditing ? ' Cancel' : ' Edit Profile'}
            </button>
          </div>

          {/* Stats Cards */}
          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-value">12</div>
              <div className="stat-label">Total Pickups</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">125</div>
              <div className="stat-label">Meals Received</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4.8</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">15</div>
              <div className="stat-label">Donors Helped</div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="profile-details-card">
            <h3>Personal Information</h3>
            
            {!isEditing ? (
              <div className="details-grid">
                <div className="detail-row">
                  <div className="detail-label">Full Name:</div>
                  <div className="detail-value">{profileData.name}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Email:</div>
                  <div className="detail-value">{profileData.email}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Phone:</div>
                  <div className="detail-value">{profileData.phone}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Address:</div>
                  <div className="detail-value">{profileData.address}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">City:</div>
                  <div className="detail-value">{profileData.city}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Postal Code:</div>
                  <div className="detail-value">{profileData.postalCode}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Joined:</div>
                  <div className="detail-value">{profileData.joinDate}</div>
                </div>
                <div className="detail-row full-width">
                  <div className="detail-label">Bio:</div>
                  <div className="detail-value">{profileData.bio}</div>
                </div>
              </div>
            ) : (
              <div className="edit-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" value={profileData.name} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={profileData.email} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={profileData.phone} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" name="address" value={profileData.address} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={profileData.city} onChange={handleProfileChange} />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" name="postalCode" value={profileData.postalCode} onChange={handleProfileChange} />
                </div>
                <div className="form-group full-width">
                  <label>Bio</label>
                  <textarea name="bio" rows={3} value={profileData.bio} onChange={handleProfileChange}></textarea>
                </div>
                <button className="save-btn" onClick={handleSave}>
                  <i className="fas fa-save"></i> Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenProfile;