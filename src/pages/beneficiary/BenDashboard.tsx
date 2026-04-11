import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BenDashboard.css';

const BenDashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/beneficiary/dashboard' },
    { id: 'surplus', name: 'Food Surplus', icon: '🍽️', path: '/beneficiary/surplus' },
    { id: 'reservations', name: 'Reservations', icon: '📋', path: '/beneficiary/reservations' },
    { id: 'history', name: 'History', icon: '📜', path: '/beneficiary/history' },
    { id: 'profile', name: 'Profile', icon: '👤', path: '/beneficiary/profile' },
    { id: 'settings', name: 'Settings', icon: '⚙️', path: '/beneficiary/settings' }
  ];

  const stats = [
    { icon: '🍲', value: '12', label: 'Available Surplus' },
    { icon: '📌', value: '03', label: 'Active Reservations' },
    { icon: '✅', value: '08', label: 'Completed Orders' }
  ];

  const surplusItems = [
    { id: 1, name: 'Ready Meals', donor: 'Al Salam Restaurant', quantity: '50 meals', expiry: '2024-12-31', location: 'Algiers' },
    { id: 2, name: 'Fresh Bread', donor: 'Al Noor Bakery', quantity: '100 pieces', expiry: '2024-12-30', location: 'Oran' },
    { id: 3, name: 'Vegetables', donor: 'Al Fallah Market', quantity: '30 kg', expiry: '2024-12-29', location: 'Constantine' }
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
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

        <div className="sidebar-footer">
          <div className="footer-btn home-btn" onClick={() => navigate('/')}>
            <span>🏠</span>
            <span>Back to Home</span>
          </div>
          <div className="footer-btn logout-btn" onClick={() => navigate('/auth')}>
            <span>🚪</span>
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <div className="welcome-header">
          <h1>Welcome back, Ahmed! 👋</h1>
          <p>Here's what's happening with your food surplus today</p>
        </div>

        <div className="stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="surplus-section">
          <div className="section-header">
            <h2>🍽️ Available Food Surplus</h2>
            <button className="view-all" onClick={() => navigate('/beneficiary/surplus')}>View All →</button>
          </div>
          <div className="surplus-grid">
            {surplusItems.map(item => (
              <div key={item.id} className="surplus-card">
                <span className="badge">Available</span>
                <h3>{item.name}</h3>
                <p className="donor">🏪 {item.donor}</p>
                <div className="details">
                  <span>📦 {item.quantity}</span>
                  <span>📅 {item.expiry}</span>
                  <span>📍 {item.location}</span>
                </div>
                <button className="reserve-btn">Reserve Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenDashboard;