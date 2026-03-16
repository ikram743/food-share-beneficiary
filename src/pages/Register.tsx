import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register: React.FC = () => {
  const [accountType, setAccountType] = useState<'business' | 'association'>('business');
  const [formData, setFormData] = useState({
    // للحساب التجاري
    businessName: '',
    contactName: '',
    email: '',
    address: '',
    phone: '',
    businessType: 'bakery',
    
    // للجمعية
    associationName: '',
    registrationNumber: '',
    
    // مشتركة
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', { accountType, ...formData });
    // هنا هتضيفي منطق التسجيل
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <Link to="/" className="back-to-home">
            <i className="fas fa-arrow-left"></i> Back to home
          </Link>
          <div className="logo">
            <i className="fas fa-leaf"></i>
            <span>FoodShare</span>
          </div>
          <h1>Create an account</h1>
          <p className="subtitle">Choose your account type to get started</p>
        </div>

        {/* أزرار اختيار نوع الحساب (مشتغلين الآن) */}
        <div className="account-type-toggle">
          <button
            className={`type-btn ${accountType === 'business' ? 'active' : ''}`}
            onClick={() => setAccountType('business')}
          >
            <i className="fas fa-store"></i>
            Business
          </button>
          <button
            className={`type-btn ${accountType === 'association' ? 'active' : ''}`}
            onClick={() => setAccountType('association')}
          >
            <i className="fas fa-heart"></i>
            Association
          </button>
        </div>

        {/* الفورم (يتغير حسب نوع الحساب) */}
        <form onSubmit={handleSubmit} className="register-form">
          {accountType === 'business' ? (
            // حقول Business
            <>
              <div className="form-group">
                <label>Business name *</label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="e.g. Artisan Bakery"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Contact name *</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Ahmed Benali"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="contact@bakery.dz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="123 Business Street, Algiers"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Business type</label>
                  <select name="businessType" value={formData.businessType} onChange={handleChange}>
                    <option value="bakery">Bakery</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="supermarket">Supermarket</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+213 555 123 456"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </>
          ) : (
            // حقول Association
            <>
              <div className="form-group">
                <label>Association name *</label>
                <input
                  type="text"
                  name="associationName"
                  placeholder="e.g. Association Nour"
                  value={formData.associationName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Contact name *</label>
                <input
                  type="text"
                  name="contactName"
                  placeholder="Fatima Zahra"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="contact@association.dz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Registration number</label>
                  <input
                    type="text"
                    name="registrationNumber"
                    placeholder="ASSOC001"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="45 Rue Didouche, Algiers"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+213 555 123 456"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* حقول كلمة السر مشتركة */}
          <div className="form-row">
            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm password *</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary btn-block">
            Create my {accountType === 'business' ? 'business' : 'association'} account
          </button>

          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>

        {/* القسم الإضافي (For businesses / For associations) */}
        <div className="features-section">
          <div className="features-grid">
            <div className="feature-card businesses">
              <div className="feature-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>For businesses</h3>
              <ul className="feature-list">
                <li>
                  <span className="check-badge">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Reduce your waste</span>
                </li>
                <li>
                  <span className="check-badge">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Tax deduction</span>
                </li>
                <li>
                  <span className="check-badge">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Positive social impact</span>
                </li>
              </ul>
            </div>

            <div className="feature-card associations">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>For associations</h3>
              <ul className="feature-list">
                <li>
                  <span className="check-badge">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Free access to surplus</span>
                </li>
                <li>
                  <span className="check-badge">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Geolocation</span>
                </li>
                <li>
                  <span className="check-badge">
                    <i className="fas fa-check"></i>
                  </span>
                  <span>Real-time notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;