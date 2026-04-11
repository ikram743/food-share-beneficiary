// src/pages/beneficiary/BenSurplus.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './BenSurplus.css';

const BenSurplus = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('surplus');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', path: '/beneficiary/dashboard' },
    { id: 'surplus', name: 'Food Surplus', icon: '🍽️', path: '/beneficiary/surplus' },
    { id: 'reservations', name: 'Reservations', icon: '📋', path: '/beneficiary/reservations' },
    { id: 'history', name: 'History', icon: '📜', path: '/beneficiary/history' },
    { id: 'profile', name: 'Profile', icon: '👤', path: '/beneficiary/profile' },
    { id: 'settings', name: 'Settings', icon: '⚙️', path: '/beneficiary/settings' }
  ];

  const surplusItems = [
    { id: 1, name: 'Ready Meals', donor: 'Al Salam Restaurant', quantity: '50 meals', expiry: '2024-12-31', location: 'Algiers' },
    { id: 2, name: 'Fresh Bread', donor: 'Al Noor Bakery', quantity: '100 pieces', expiry: '2024-12-30', location: 'Oran' },
    { id: 3, name: 'Vegetables', donor: 'Al Fallah Market', quantity: '30 kg', expiry: '2024-12-29', location: 'Constantine' },
    { id: 4, name: 'Fruits', donor: 'Fresh Market', quantity: '25 kg', expiry: '2024-12-28', location: 'Algiers' }
  ];

  const locations = ['all', 'Algiers', 'Oran', 'Constantine'];

  const filteredItems = surplusItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.donor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === 'all' || item.location === filterLocation;
    return matchesSearch && matchesLocation;
  });

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
        <div className="content-header">
          <h1>🍽️ Food Surplus</h1>
          <p>Browse available food donations near you</p>
        </div>

        {/* Filters */}
        <div className="filters-row">
          <input
            type="text"
            placeholder="🔍 Search by food or donor..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className="location-select" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc === 'all' ? '📍 All Locations' : loc}</option>
            ))}
          </select>
        </div>

        <div className="results-count">Found {filteredItems.length} items</div>

        {/* Surplus Grid */}
        <div className="card-grid">
          {filteredItems.map(item => (
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

        {filteredItems.length === 0 && (
          <div className="no-results">No food surplus found matching your criteria</div>
        )}
      </div>
    </div>
  );
};

export default BenSurplus;