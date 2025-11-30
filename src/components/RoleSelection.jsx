import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserRole } from '../store/store';
import '../styles/roleSelection.css';

const RoleSelection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserRole = () => {
    dispatch(setUserRole({ 
      isAdmin: false, 
      user: { 
        id: 1, 
        name: 'Current User', 
        email: 'user@example.com',
        role: 'Employee'
      } 
    }));
    navigate('/user-dashboard');
  };

  const handleAdminRole = () => {
    dispatch(setUserRole({ 
      isAdmin: true, 
      user: { 
        id: 'admin', 
        name: 'Administrator', 
        email: 'admin@example.com',
        role: 'Admin'
      } 
    }));
    navigate('/admin-dashboard');
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-content">
        <div className="selection-header">
          <h1>Professional Certification Tracker</h1>
          <p>Choose your role to continue</p>
        </div>

        <div className="roles-grid">
          <div className="role-card user-card">
            <div className="role-card-content">
              <div className="role-icon">👤</div>
              <h2>User</h2>
              <p>Track and manage your certifications, explore new learning paths, and monitor expiry dates.</p>
              <ul className="role-features">
                <li>✓ View available certifications</li>
                <li>✓ Track your certifications</li>
                <li>✓ Monitor expiry dates</li>
                <li>✓ Get renewal reminders</li>
              </ul>
              <button className="role-btn user-btn" onClick={handleUserRole}>
                Continue as User
              </button>
            </div>
          </div>

          <div className="role-card admin-card">
            <div className="role-card-content">
              <div className="role-icon">👨‍💼</div>
              <h2>Admin</h2>
              <p>Manage all user certifications, track organizational compliance, and oversee renewal processes.</p>
              <ul className="role-features">
                <li>✓ View all users</li>
                <li>✓ Manage certifications</li>
                <li>✓ Track expiry dates</li>
                <li>✓ Generate reports</li>
              </ul>
              <button className="role-btn admin-btn" onClick={handleAdminRole}>
                Continue as Admin
              </button>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h3>Why Certifications Matter?</h3>
          <p>Professional certifications validate your expertise, increase employability, and demonstrate commitment to continuous learning. This platform helps you track, manage, and renew your certifications effortlessly.</p>
        </div>
      </div>

      <div className="background-animation">
        <div className="cube"></div>
        <div className="sphere"></div>
        <div className="pyramid"></div>
      </div>
    </div>
  );
};

export default RoleSelection;
