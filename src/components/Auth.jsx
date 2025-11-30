import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserRole } from '../store/store';
import '../styles/auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate successful login
      dispatch(setUserRole({
        isAdmin: false,
        user: {
          id: 1,
          name: email.split('@')[0],
          email: email,
          role: 'Employee'
        }
      }));
      navigate('/user-dashboard');
    }, 1000);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Simulate successful signup
      dispatch(setUserRole({
        isAdmin: false,
        user: {
          id: Math.random(),
          name: name,
          email: email,
          role: 'Employee'
        }
      }));
      navigate('/user-dashboard');
    }, 1000);
  };

  const handleGuestLogin = () => {
    dispatch(setUserRole({
      isAdmin: false,
      user: {
        id: 999,
        name: 'Guest User',
        email: 'guest@example.com',
        role: 'Employee'
      }
    }));
    navigate('/user-dashboard');
  };

  const handleGuestAdmin = () => {
    dispatch(setUserRole({
      isAdmin: true,
      user: {
        id: 'admin-guest',
        name: 'Guest Admin',
        email: 'admin@example.com',
        role: 'Admin'
      }
    }));
    navigate('/admin-dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-shape shape-1"></div>
        <div className="auth-shape shape-2"></div>
        <div className="auth-shape shape-3"></div>
      </div>

      <div className="auth-content">
        <div className="auth-card">
          <div className="auth-header">
            <h1>🎓 CertTracker Pro</h1>
            <p>Professional Certification Management</p>
          </div>

          {/* Logo/Brand */}
          <div className="auth-logo">
            {isLogin ? '🔐' : '✨'}
          </div>

          {/* Auth Form */}
          <form onSubmit={isLogin ? handleLogin : handleSignup} className="auth-form">
            <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>

            {error && <div className="auth-error">{error}</div>}

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input"
                />
              </div>
            )}

            <button
              type="submit"
              className="auth-btn auth-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-small"></span>
                  {isLogin ? 'Logging in...' : 'Creating account...'}
                </>
              ) : (
                isLogin ? 'Login' : 'Create Account'
              )}
            </button>
          </form>

          {/* Toggle Auth Mode */}
          <div className="auth-toggle">
            <p>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              {' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setEmail('');
                  setPassword('');
                  setName('');
                  setConfirmPassword('');
                }}
                className="toggle-btn"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="auth-divider">
            <span>or</span>
          </div>

          {/* Guest Options */}
          <div className="guest-options">
            <button
              type="button"
              onClick={handleGuestLogin}
              className="guest-btn guest-user"
            >
              👤 Continue as User
            </button>
            <button
              type="button"
              onClick={handleGuestAdmin}
              className="guest-btn guest-admin"
            >
              👨‍💼 Continue as Admin
            </button>
          </div>

          {/* Footer */}
          <div className="auth-footer">
            <p>By logging in, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>

        {/* Side Info */}
        <div className="auth-side">
          <div className="side-content">
            <h3>Why Choose CertTracker Pro?</h3>
            <div className="side-features">
              <div className="side-feature">
                <span className="feature-icon">📊</span>
                <p>Track 27+ Professional Certifications</p>
              </div>
              <div className="side-feature">
                <span className="feature-icon">⏰</span>
                <p>Real-time Expiry Monitoring</p>
              </div>
              <div className="side-feature">
                <span className="feature-icon">🎯</span>
                <p>ATS Resume Score Calculator</p>
              </div>
              <div className="side-feature">
                <span className="feature-icon">📈</span>
                <p>Admin Compliance Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
