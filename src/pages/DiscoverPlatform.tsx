// src/pages/DiscoverPlatform.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DiscoverPlatform.css';

const DiscoverPlatform: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    { icon: '🍽️', title: 'Easy to Use', desc: 'Simple interface for donors and beneficiaries' },
    { icon: '📍', title: 'Geolocation', desc: 'Find nearby food surplus automatically' },
    { icon: '🔔', title: 'Real-time Alerts', desc: 'Instant notifications for new donations' },
    { icon: '📊', title: 'Impact Tracking', desc: 'Track your donations and impact' },
    { icon: '🔄', title: 'Real-time Updates', desc: 'Live status of reservations' },
    { icon: '📱', title: 'Mobile Friendly', desc: 'Access from any device' },
  ];

  const steps = [
    { number: '01', title: 'Create Account', desc: 'Sign up as donor or beneficiary' },
    { number: '02', title: 'Add or Search', desc: 'Donors add surplus, beneficiaries search' },
    { number: '03', title: 'Reserve', desc: 'Beneficiaries reserve available food' },
    { number: '04', title: 'Pick Up', desc: 'Arrange pickup and receive food' },
  ];

  return (
    <div className="discover-page">
      {/* Hero Section */}
      <section className="discover-hero">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
          <h1>Discover FoodShare Platform</h1>
          <p>The complete solution to fight food waste and help those in need</p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple 4-step process to get started</p>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Platform Features</h2>
          <p className="section-subtitle">Everything you need to manage food surplus</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* CTA Section */}
<section className="cta-section">
  <div className="container">
    <h2>Ready to Get Started?</h2>
    <p>Join FoodShare today and make a difference</p>
    <div className="cta-buttons">
      <button onClick={() => navigate('/register')} className="btn-primary">
        Sign Up Now
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default DiscoverPlatform;