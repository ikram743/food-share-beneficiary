import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // محاكاة تسجيل الدخول (هنا تجي من API حقيقي)
    if (email && password) {
      // التحقق من نوع المستخدم
      if (email.includes('association') || email.includes('beneficiary')) {
        // إذا كان المستفيد
        navigate('/beneficiary/dashboard');
      } else if (email.includes('donor') || email.includes('business')) {
        // إذا كان متبرع
        navigate('/donor/dashboard');
      } else {
        // مستخدم عادي
        navigate('/');
      }
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          {/* زر الرجوع للصفحة الرئيسية */}
          <Link to="/" className="back-to-home">
            <i className="fas fa-arrow-left"></i> Back to home
          </Link>

          <div className="login-header">
            <div className="logo">
              <i className="fas fa-leaf"></i>
              <span>FoodShare</span>
            </div>
            <h1>Sign in</h1>
            <p className="subtitle">Sign in to your account to continue</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="password-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button type="submit" className="btn-primary btn-block">
              Sign in
            </button>
          </form>

          <div className="login-footer">
            <p className="or-divider">Or</p>
            <p className="signup-link">
              Don't have an account? <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>

        <div className="login-right">
          <h2>Join the fight against food waste</h2>
          <p>Sign in to access your dashboard and manage your redistributions in real-time.</p>
          
          <ul className="feature-list">
            <li>
              <i className="fas fa-check-circle"></i>
              <span>Quick surplus declaration</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>Real-time notifications</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>Detailed impact tracking</span>
            </li>
          </ul>

          {/* روابط سريعة للتجربة */}
          <div className="demo-links">
            <p>Demo accounts:</p>
            <button 
              className="demo-btn"
              onClick={() => {
                setEmail('association@nour.dz');
                setPassword('password123');
              }}
            >
              Beneficiary (Association)
            </button>
            <button 
              className="demo-btn"
              onClick={() => {
                setEmail('donor@bakery.dz');
                setPassword('password123');
              }}
            >
              Donor (Business)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;