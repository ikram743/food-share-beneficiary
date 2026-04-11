// src/pages/Home.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* ========== NAVBAR ========== */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <i className="fas fa-leaf"></i>
            <span>FoodShare</span>
          </Link>

          <div className="nav-links">
            <button className="nav-link-btn" onClick={() => scrollToSection('how')}>
              How it works
            </button>
            <span className="separator">|</span>
            <button className="nav-link-btn" onClick={() => scrollToSection('whom')}>
              For whom
            </button>
            <span className="separator">|</span>
            <button className="nav-link-btn" onClick={() => scrollToSection('impact')}>
              Impact
            </button>
            <Link to="/food-waste-impact" className="impact-link">
              Food Waste Impact
            </Link>
          </div>

          <div className="nav-buttons">
            <Link to="/login" className="btn-outline">Sign in</Link>
            <Link to="/register" className="btn-primary">Sign up</Link>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Technological solution <br />with social impact</h1>
            <div className="hero-tagline">
              <h2>Together against food waste</h2>
            </div>
            <p>Redistribute your food surplus in real-time and connect businesses with associations to give food a second life</p>
            <div className="hero-buttons">
              <button onClick={() => navigate('/register')} className="btn-primary">
                <i className="fas fa-leaf"></i> Join FoodShare
              </button>
              <button onClick={() => navigate('/discover')} className="btn-outline">
                <i className="fas fa-chart-line"></i> Discover the platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS SECTION ========== */}
      <section id="how" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How does it work?</h2>
          <p className="section-subtitle">A simple and effective 4-step process to fight food waste</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Declare your surplus</h3>
              <p>Businesses declare their food surplus in just a few clicks via our platform.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Automatic geolocation</h3>
              <p>The system automatically locates the surplus and finds nearby associations.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Real-time notification</h3>
              <p>Associations receive instant notifications with all the details.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Collection and tracking</h3>
              <p>The redistribution is organized and tracked until its completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOR WHOM SECTION ========== */}
      <section id="whom" className="for-whom">
        <div className="container">
          <h2 className="section-title">For whom?</h2>
          <p className="section-subtitle">Our platform connects generous businesses with committed associations</p>
          <div className="cards-grid">
            <div className="card businesses">
              <div className="card-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>For businesses</h3>
              <p className="card-subtitle">Bakeries, restaurants, supermarkets</p>
              <ul className="card-features">
                <li><i className="fas fa-check-circle"></i> Reduce your waste</li>
                <li><i className="fas fa-check-circle"></i> Tax deduction for donations</li>
                <li><i className="fas fa-check-circle"></i> Positive social impact</li>
                <li><i className="fas fa-check-circle"></i> Tracking dashboard</li>
                <li><i className="fas fa-check-circle"></i> Automatic notifications</li>
              </ul>
              <button onClick={() => navigate('/donor/register')} className="btn-outline">
                I am a business
              </button>
            </div>
            <div className="card associations">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>For associations</h3>
              <p className="card-subtitle">Food banks, aid centers</p>
              <ul className="card-features">
                <li><i className="fas fa-check-circle"></i> Free access to food surplus</li>
                <li><i className="fas fa-check-circle"></i> Geolocation of businesses</li>
                <li><i className="fas fa-check-circle"></i> Real-time booking</li>
                <li><i className="fas fa-check-circle"></i> Collection planning</li>
                <li><i className="fas fa-check-circle"></i> Impact statistics</li>
              </ul>
              <button onClick={() => navigate('/beneficiary/register')} className="btn-primary">
                I am an association
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== IMPACT SECTION ========== */}
      <section id="impact" className="impact">
        <div className="container">
          <h2 className="section-title">Food waste in Algeria</h2>
          <p className="section-subtitle">A silent crisis that requires immediate action</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">900M</div>
              <div className="stat-label">Bread wasted/year</div>
              <div className="stat-description">In Algeria every year</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">5M</div>
              <div className="stat-label">Bread/day</div>
              <div className="stat-description">Wasted daily</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">10-15%</div>
              <div className="stat-label">Of production</div>
              <div className="stat-description">Ends up in the trash</div>
            </div>
          </div>
          <div className="quote">
            <i className="fas fa-quote-left"></i>
            <p>Every saved Food can feed a family in need</p>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta">
        <div className="container">
          <h2>Ready to make a difference?</h2>
          <p>Join our community and participate in the fight against food insecurity</p>
          <div className="cta-buttons">
            <button onClick={() => navigate('/donor/register')} className="btn-outline">
              Create a business account
            </button>
            <button onClick={() => navigate('/beneficiary/register')} className="btn-primary">
              Create an association account
            </button>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <i className="fas fa-leaf"></i>
                <span>FoodShare</span>
              </div>
              <p>Together against food waste. A platform to redistribute surplus and create positive social impact.</p>
            </div>
            <div className="footer-links">
              <h4>Quick links</h4>
              <ul>
                <li><button className="footer-link-btn" onClick={() => scrollToSection('how')}>How it works</button></li>
                <li><button className="footer-link-btn" onClick={() => scrollToSection('whom')}>For whom</button></li>
                <li><button className="footer-link-btn" onClick={() => scrollToSection('impact')}>Impact</button></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <ul>
                <li><i className="fas fa-envelope"></i> contact@foodshare.dz</li>
                <li><i className="fas fa-phone"></i> +213 12 34 56 789</li>
                <li><i className="fas fa-map-marker-alt"></i> Algérie</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 FoodShare. All rights reserved. Developed by us</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;