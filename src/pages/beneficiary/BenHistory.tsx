// src/pages/beneficiary/BenHistory.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BenHistory.css';

const BenHistory = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('history');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/beneficiary/dashboard' },
    { id: 'surplus', name: 'Food Surplus', icon: '🍽️', path: '/beneficiary/surplus' },
    { id: 'reservations', name: 'Reservations', icon: '📋', path: '/beneficiary/reservations' },
    { id: 'history', name: 'History', icon: '📜', path: '/beneficiary/history' },
    { id: 'profile', name: 'Profile', icon: '👤', path: '/beneficiary/profile' },
    { id: 'settings', name: 'Settings', icon: '⚙️', path: '/beneficiary/settings' }
  ];

  const historyItems = [
    { id: 1, food: 'Ready Meals', donor: 'Al Salam Restaurant', date: '2024-12-15', status: 'delivered' },
    { id: 2, food: 'Fresh Bread', donor: 'Al Noor Bakery', date: '2024-12-14', status: 'delivered' },
    { id: 3, food: 'Vegetables', donor: 'Al Fallah Market', date: '2024-12-13', status: 'delivered' }
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
        {/* ====== اللوجو مثل Profile ====== */}
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
        
        {/* زر العودة إلى Home */}
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
        <div className="content-header">
          <h1>📜 Order History</h1>
          <p>View your past orders</p>
        </div>

        <div className="history-list">
          {historyItems.map(item => (
            <div key={item.id} className="history-card">
              <div className="history-info">
                <h3>{item.food}</h3>
                <p>{item.donor}</p>
                <span>{item.date}</span>
              </div>
              <div className="status delivered">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenHistory;