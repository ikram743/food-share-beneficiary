// src/components/beneficiary/BenHeader.tsx
import React from 'react';
import './BenHeader.css';

const BenHeader = () => {
  return (
    <header className="ben-header">
      <div className="ben-header-left">
        <button className="menu-toggle">
          <i className="fas fa-bars"></i>
        </button>
        <h2>Food Waste Impact</h2>
      </div>
      <div className="ben-header-right">
        <div className="notification-icon">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
        <div className="user-menu">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <span>Fatima Zahra</span>
        </div>
      </div>
    </header>
  );
};

export default BenHeader;