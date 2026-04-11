// src/components/beneficiary/BenSidebar.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BenSidebar.css';

const BenSidebar = () => {
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

  return (
    <div className="ben-sidebar">
      {/* ====== اللوجو مثل Home Page ====== */}
      <Link to="/" className="ben-logo">
        <i className="fas fa-leaf"></i>
        <span>FoodShare</span>
      </Link>

      <nav className="ben-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`ben-nav-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => {
              setActiveMenu(item.id);
              navigate(item.path);
            }}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="ben-home-btn" onClick={() => navigate('/')}>
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Back to Home</span>
        </button>
        <button className="ben-logout" onClick={() => navigate('/auth')}>
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default BenSidebar;