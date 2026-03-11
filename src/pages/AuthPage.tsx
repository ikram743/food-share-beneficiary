// pages/AuthPage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AuthPage.css";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isFlipped, setIsFlipped] = useState(false);
  const [accountType, setAccountType] = useState<
    "donor" | "beneficiary" | null
  >(null);
  const [showAccountSelection, setShowAccountSelection] = useState(true);

  // Sign In fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Sign Up fields
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Contact fields
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [wilaya, setWilaya] = useState("");

  // Donor fields
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [businessType, setBusinessType] = useState("");

  // Beneficiary fields
  const [associationName, setAssociationName] = useState("");
  const [associationType, setAssociationType] = useState("");

  // Check URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    const type = params.get("type");

    if (mode === "signup") {
      setIsFlipped(true);
      if (type === "donor" || type === "beneficiary") {
        setAccountType(type);
        setShowAccountSelection(false);
      } else {
        setShowAccountSelection(true);
        setAccountType(null);
      }
    } else {
      setIsFlipped(false);
      setShowAccountSelection(true);
      setAccountType(null);
    }
  }, [location.search]);

  const handleFlipToSignUp = (type?: "donor" | "beneficiary") => {
    if (type) {
      navigate(`/auth?mode=signup&type=${type}`);
    } else {
      navigate("/auth?mode=signup");
    }
  };

  const handleFlipToSignIn = () => {
    navigate("/auth?mode=signin");
  };

  const handleAccountTypeSelect = (type: "donor" | "beneficiary") => {
    navigate(`/auth?mode=signup&type=${type}`);
  };

  const handleBackToAccountType = () => {
    navigate("/auth?mode=signup");
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In", { email, password, rememberMe });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (signupPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the Terms of Service");
      return;
    }

    const signupData = {
      accountType,
      email: signupEmail,
      password: signupPassword,
      phone,
      address,
      city,
      wilaya,
      ...(accountType === "donor"
        ? { businessName, contactName, businessType }
        : { associationName, associationType }),
    };

    console.log("Sign Up", signupData);
    alert("Account created! Please check your email to verify.");
    handleFlipToSignIn();
  };

  // Dynamic left panel content
  const getLeftPanelContent = () => {
    if (!isFlipped) {
      return {
        title: "Welcome Back!",
        subtitle: "Continue your journey to fight food waste in Algeria.",
        icon: "👋",
        features: [
          "Track your donations in real-time",
          "See the impact you're making",
          "Connect with your community",
          "Receive instant notifications",
        ],
        quote: {
          text: "Together, we can ensure no good food goes to waste.",
          author: "FoodShare Initiative",
        },
      };
    }

    if (showAccountSelection) {
      return {
        title: "Be Part of the Solution",
        subtitle: "Join Algeria's first platform fighting food waste.",
        icon: "🌱",
        features: [
          "Save food from going to waste",
          "Help families in need",
          "Build a sustainable future",
          "Join a growing community",
        ],
        mission: "Every meal saved is a step toward a better Algeria.",
      };
    }

    if (accountType === "donor") {
      return {
        title: "Ready to Donate?",
        subtitle: "Turn your surplus into hope for others.",
        icon: "🏪",
        features: [
          "Reduce your environmental impact",
          "Support local communities",
          "Inspire others to give",
          "Make every meal count",
        ],
      };
    }

    if (accountType === "beneficiary") {
      return {
        title: "Ready to Receive?",
        subtitle: "Get quality food for those who need it most.",
        icon: "🤝",
        features: [
          "Access free food surplus",
          "Get notified when food is available",
          "Find donations near you",
          "Focus on your mission",
        ],
      };
    }

    return {
      title: "FoodShare",
      subtitle: "Fighting food waste together",
      icon: "🌍",
      features: [],
    };
  };

  const content = getLeftPanelContent();

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left panel */}
        <div
          className={`auth-left ${!isFlipped ? "signin-bg" : showAccountSelection ? "selection-bg" : accountType === "donor" ? "donor-bg" : "beneficiary-bg"}`}
        >
          <div className="auth-left-content">
            <div className="logo">
              <i className="fas fa-leaf"></i>
              <span>FoodShare</span>
            </div>

            <div className="left-icon">{content.icon}</div>
            <h1>{content.title}</h1>
            <p className="left-subtitle">{content.subtitle}</p>

            <div className="feature-list-left">
              {content.features.map((feature, index) => (
                <div key={index} className="feature-item-left">
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {!isFlipped && content.quote && (
              <div className="quote-box">
                <i className="fas fa-quote-left"></i>
                <p className="quote-text">"{content.quote.text}"</p>
                <p className="quote-author">- {content.quote.author}</p>
              </div>
            )}

            {isFlipped && showAccountSelection && content.mission && (
              <div className="mission-box">
                <p>{content.mission}</p>
              </div>
            )}

            {isFlipped && !showAccountSelection && (
              <div className="trust-badge">
                <i className="fas fa-shield-alt"></i>
                <span>Your information is secure and encrypted</span>
              </div>
            )}
          </div>
        </div>

        {/* Right panel - Flip container */}
        <div className="auth-right">
          <div className={`flip-container ${isFlipped ? "flipped" : ""}`}>
            {/* Sign In */}
            <div className="flip-front">
              <div className="auth-form-container">
                <h2>Sign in</h2>
                <p className="subtitle">Sign in to your account to continue</p>

                <form onSubmit={handleSignIn} className="auth-form">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="form-options">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span>Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="forgot-link"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button type="submit" className="btn-primary">
                    Sign in
                  </button>
                </form>

                <div className="divider">
                  <span>Or</span>
                </div>

                <div className="toggle-panel">
                  <p>
                    Don't have an account?{" "}
                    <button
                      onClick={() => handleFlipToSignUp()}
                      className="link-btn"
                    >
                      Create an account
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Sign Up */}
            <div className="flip-back">
              <div className="auth-form-container">
                {showAccountSelection ? (
                  /* Account Type Selection */
                  <>
                    <h2>Join FoodShare</h2>
                    <p className="subtitle">
                      Select your account type to continue
                    </p>

                    <div className="account-type-grid">
                      <button
                        className="type-card donor"
                        onClick={() => handleAccountTypeSelect("donor")}
                      >
                        <div className="type-icon">
                          <i className="fas fa-store"></i>
                        </div>
                        <h3>I'm a Donor</h3>
                        <p className="type-description">
                          Business, restaurant, bakery, supermarket with surplus
                          food to donate
                        </p>
                        <ul className="type-benefits">
                          <li>
                            <i className="fas fa-check-circle"></i> Reduce your
                            waste
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Support
                            local communities
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Make a
                            positive impact
                          </li>
                        </ul>
                      </button>

                      <button
                        className="type-card beneficiary"
                        onClick={() => handleAccountTypeSelect("beneficiary")}
                      >
                        <div className="type-icon">
                          <i className="fas fa-hand-holding-heart"></i>
                        </div>
                        <h3>I'm a Beneficiary</h3>
                        <p className="type-description">
                          Association, charity, food bank needing food surplus
                        </p>
                        <ul className="type-benefits">
                          <li>
                            <i className="fas fa-check-circle"></i> Free access
                            to surplus
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Real-time
                            notifications
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i> Serve your
                            community
                          </li>
                        </ul>
                      </button>
                    </div>
                  </>
                ) : (
                  /* Sign Up Form */
                  <>
                    <h2>
                      Create {accountType === "donor" ? "donor" : "beneficiary"}{" "}
                      account
                    </h2>
                    <p className="subtitle">
                      Join the fight against food waste
                    </p>

                    <form onSubmit={handleSignUp} className="auth-form">
                      {accountType === "donor" ? (
                        /* Donor fields */
                        <>
                          <div className="form-group">
                            <label>Business name *</label>
                            <input
                              type="text"
                              value={businessName}
                              onChange={(e) => setBusinessName(e.target.value)}
                              placeholder="e.g., Artisan Bakery"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Contact person *</label>
                            <input
                              type="text"
                              value={contactName}
                              onChange={(e) => setContactName(e.target.value)}
                              placeholder="Full name"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Business type *</label>
                            <select
                              value={businessType}
                              onChange={(e) => setBusinessType(e.target.value)}
                              required
                            >
                              <option value="">Select type</option>
                              <option value="bakery">Bakery</option>
                              <option value="restaurant">Restaurant</option>
                              <option value="supermarket">Supermarket</option>
                              <option value="catering">Catering</option>
                              <option value="hotel">Hotel</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </>
                      ) : (
                        /* Beneficiary fields */
                        <>
                          <div className="form-group">
                            <label>Association name *</label>
                            <input
                              type="text"
                              value={associationName}
                              onChange={(e) =>
                                setAssociationName(e.target.value)
                              }
                              placeholder="e.g., Food Bank Algiers"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label>Association type *</label>
                            <select
                              value={associationType}
                              onChange={(e) =>
                                setAssociationType(e.target.value)
                              }
                              required
                            >
                              <option value="">Select type</option>
                              <option value="foodBank">Food Bank</option>
                              <option value="charity">Charity</option>
                              <option value="shelter">Shelter</option>
                              <option value="community">
                                Community Center
                              </option>
                              <option value="religious">
                                Religious Organization
                              </option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </>
                      )}

                      {/* Common fields */}
                      <div className="form-group">
                        <label>Email *</label>
                        <input
                          type="email"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Phone number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+213 XXX XX XX XX"
                        />
                      </div>

                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Street address"
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group half">
                          <label>City</label>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                          />
                        </div>

                        <div className="form-group half">
                          <label>Wilaya</label>
                          <select
                            value={wilaya}
                            onChange={(e) => setWilaya(e.target.value)}
                          >
                            <option value="">Select</option>
                            <option value="16">Alger</option>
                            <option value="31">Oran</option>
                            <option value="23">Annaba</option>
                            <option value="13">Tlemcen</option>
                            <option value="15">Tizi Ouzou</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Password *</label>
                        <input
                          type="password"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          placeholder="••••••••"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Confirm password *</label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="••••••••"
                          required
                        />
                      </div>

                      <div className="form-group checkbox-group">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            required
                          />
                          <span>
                            I agree to the <a href="/terms">Terms of Service</a>{" "}
                            and <a href="/privacy">Privacy Policy</a>
                          </span>
                        </label>
                      </div>

                      <div className="form-actions">
                        <button type="submit" className="btn-primary">
                          Create account
                        </button>
                        <button
                          type="button"
                          onClick={handleBackToAccountType}
                          className="btn-back"
                        >
                          <i className="fas fa-arrow-left"></i> Back
                        </button>
                      </div>
                    </form>
                  </>
                )}

                {showAccountSelection && (
                  <>
                    <div className="divider">
                      <span>Or</span>
                    </div>

                    <div className="toggle-panel">
                      <p>
                        Already have an account?{" "}
                        <button
                          onClick={handleFlipToSignIn}
                          className="link-btn"
                        >
                          Sign in
                        </button>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
