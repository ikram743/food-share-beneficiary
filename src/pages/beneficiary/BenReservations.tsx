// src/pages/beneficiary/BenReservations.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BenReservations.css';

const BenReservations = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('reservations');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/beneficiary/dashboard' },
    { id: 'surplus', name: 'Food Surplus', icon: '🍽️', path: '/beneficiary/surplus' },
    { id: 'reservations', name: 'Reservations', icon: '📋', path: '/beneficiary/reservations' },
    { id: 'history', name: 'History', icon: '📜', path: '/beneficiary/history' },
    { id: 'profile', name: 'Profile', icon: '👤', path: '/beneficiary/profile' },
    { id: 'settings', name: 'Settings', icon: '⚙️', path: '/beneficiary/settings' }
  ];

  const reservations = [
    { id: 1, food: 'Ready Meals', donor: 'Al Salam Restaurant', date: '2024-12-20', status: 'confirmed' },
    { id: 2, food: 'Fresh Bread', donor: 'Al Noor Bakery', date: '2024-12-21', status: 'pending' },
    { id: 3, food: 'Vegetables', donor: 'Al Fallah Market', date: '2024-12-19', status: 'completed' }
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
            <div key={item.id} className={`menu-link ${activeMenu === item.id ? 'active' : ''}`} onClick={() => { setActiveMenu(item.id); navigate(item.path); }}>
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
          <h1>📋 My Reservations</h1>
          <p>View and manage your reservations</p>
        </div>

        <div className="reservations-list">
          {reservations.map(res => (
            <div key={res.id} className="reservation-card">
              <div className="reservation-info">
                <h3>{res.food}</h3>
                <p>{res.donor}</p>
                <span>{res.date}</span>
              </div>
              <div className={`status ${res.status}`}>{res.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenReservations;