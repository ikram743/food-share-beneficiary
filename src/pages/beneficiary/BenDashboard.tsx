// src/pages/beneficiary/BenDashboard.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    { icon: '🍲', number: '12', label: 'Available Surplus' },
    { icon: '📌', number: '03', label: 'Active Reservations' },
    { icon: '✅', number: '08', label: 'Completed Orders' }
  ];

  const surplusItems = [
    { id: 1, name: 'Ready Meals', donor: 'Al Salam Restaurant', quantity: '50 meals', expiry: '2024-12-31', location: 'Tunis' },
    { id: 2, name: 'Fresh Bread', donor: 'Al Noor Bakery', quantity: '100 pieces', expiry: '2024-12-30', location: 'Ariana' },
    { id: 3, name: 'Vegetables', donor: 'Al Fallah Market', quantity: '30 kg', expiry: '2024-12-29', location: 'Ben Arous' }
  ];

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
        <div className="content-header">
          <h1>Welcome back, Ahmed!</h1>
          <p>Here's what's happening with your food surplus today</p>
        </div>

        <div className="stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="stat-box">
              <div className="stat-emoji">{stat.icon}</div>
              <div className="stat-num">{stat.number}</div>
              <div className="stat-title">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="surplus-card-list">
          <div className="section-title">
            <h2>🍽️ Available Food Surplus</h2>
            <button onClick={() => navigate('/beneficiary/surplus')}>View All →</button>
          </div>
          <div className="card-grid">
            {surplusItems.map(item => (
              <div key={item.id} className="food-card">
                <span className="food-badge">Available</span>
                <h3>{item.name}</h3>
                <p className="food-donor">🏪 {item.donor}</p>
                <div className="food-details">
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