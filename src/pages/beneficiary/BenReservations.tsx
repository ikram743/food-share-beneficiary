// src/pages/beneficiary/BenReservations.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'confirmed': return 'status-confirmed';
      case 'pending': return 'status-pending';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'confirmed': return '✅ Confirmed';
      case 'pending': return '⏳ Pending';
      case 'completed': return '✔️ Completed';
      default: return status;
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar-wrapper">
        {/* ====== اللوجو مثل باقي الصفحات ====== */}
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
          <h1>📋 My Reservations</h1>
          <p>View and manage your food reservations</p>
        </div>

        <div className="reservations-list">
          {reservations.map(res => (
            <div key={res.id} className="reservation-card">
              <div className="reservation-info">
                <h3>{res.food}</h3>
                <p>{res.donor}</p>
                <span>{res.date}</span>
              </div>
              <div className={`status ${getStatusClass(res.status)}`}>
                {getStatusText(res.status)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenReservations;