// src/pages/beneficiary/BenSettings.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BenSettings.css';

const BenSettings = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('settings');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/beneficiary/dashboard' },
    { id: 'surplus', name: 'Food Surplus', icon: '🍽️', path: '/beneficiary/surplus' },
    { id: 'reservations', name: 'Reservations', icon: '📋', path: '/beneficiary/reservations' },
    { id: 'history', name: 'History', icon: '📜', path: '/beneficiary/history' },
    { id: 'profile', name: 'Profile', icon: '👤', path: '/beneficiary/profile' },
    { id: 'settings', name: 'Settings', icon: '⚙️', path: '/beneficiary/settings' }
  ];

  // Notification Settings
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    reservationAlerts: true,
    expiryAlerts: true,
    newsletter: false
  });

  // Preferences
  const [preferences, setPreferences] = useState({
    language: 'en',
    radius: 10,
    theme: 'light'
  });

  // Privacy
  const [privacy, setPrivacy] = useState({
    showEmail: true,
    showPhone: false,
    showLocation: true
  });

  const handleNotificationChange = (key: string) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key as keyof typeof notifications]
    });
  };

  const handlePreferenceChange = (key: string, value: string | number) => {
    setPreferences({
      ...preferences,
      [key]: value
    });
  };

  const handlePrivacyChange = (key: string) => {
    setPrivacy({
      ...privacy,
      [key]: !privacy[key as keyof typeof privacy]
    });
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
        {/* اللوجو */}
        <Link to="/" className="sidebar-logo">
          <i className="fas fa-leaf"></i>
          <span>FoodShare</span>
        </Link>

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

        <div className="sidebar-home" onClick={() => navigate('/')}>
          <span className="menu-icon">🏠</span>
          <span className="menu-text">Back to Home</span>
        </div>

        <div className="sidebar-logout" onClick={() => navigate('/auth')}>
          <span className="menu-icon">🚪</span>
          <span className="menu-text">Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <div className="settings-container">
          <div className="settings-header">
            <h1>⚙️ Settings</h1>
            <p>Manage your account preferences and notifications</p>
          </div>

          {/* Notifications Section */}
          <div className="settings-card">
            <h3>
              <i className="fas fa-bell"></i> Notifications
            </h3>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Email Notifications</span>
                  <span className="setting-desc">Receive updates via email</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={notifications.email} onChange={() => handleNotificationChange('email')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Push Notifications</span>
                  <span className="setting-desc">Get instant alerts on your device</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={notifications.push} onChange={() => handleNotificationChange('push')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Reservation Alerts</span>
                  <span className="setting-desc">Get notified about your reservations</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={notifications.reservationAlerts} onChange={() => handleNotificationChange('reservationAlerts')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Expiry Alerts</span>
                  <span className="setting-desc">Reminders for expiring food items</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={notifications.expiryAlerts} onChange={() => handleNotificationChange('expiryAlerts')} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="settings-card">
            <h3>
              <i className="fas fa-sliders-h"></i> Preferences
            </h3>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Language</span>
                  <span className="setting-desc">Choose your preferred language</span>
                </div>
                <select 
                  className="setting-select" 
                  value={preferences.language}
                  onChange={(e) => handlePreferenceChange('language', e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Search Radius</span>
                  <span className="setting-desc">Maximum distance for food surplus search</span>
                </div>
                <div className="radius-control">
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={preferences.radius}
                    onChange={(e) => handlePreferenceChange('radius', parseInt(e.target.value))}
                  />
                  <span className="radius-value">{preferences.radius} km</span>
                </div>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Theme</span>
                  <span className="setting-desc">Choose your theme preference</span>
                </div>
                <div className="theme-buttons">
                  <button 
                    className={`theme-btn ${preferences.theme === 'light' ? 'active' : ''}`}
                    onClick={() => handlePreferenceChange('theme', 'light')}
                  >
                    <i className="fas fa-sun"></i> Light
                  </button>
                  <button 
                    className={`theme-btn ${preferences.theme === 'dark' ? 'active' : ''}`}
                    onClick={() => handlePreferenceChange('theme', 'dark')}
                  >
                    <i className="fas fa-moon"></i> Dark
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="settings-card">
            <h3>
              <i className="fas fa-lock"></i> Privacy
            </h3>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Show Email</span>
                  <span className="setting-desc">Display your email to donors</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={privacy.showEmail} onChange={() => handlePrivacyChange('showEmail')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Show Phone</span>
                  <span className="setting-desc">Display your phone number to donors</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={privacy.showPhone} onChange={() => handlePrivacyChange('showPhone')} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <span className="setting-title">Show Location</span>
                  <span className="setting-desc">Display your location for food pickup</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={privacy.showLocation} onChange={() => handlePrivacyChange('showLocation')} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="save-settings-btn" onClick={handleSave}>
            <i className="fas fa-save"></i> Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenSettings;