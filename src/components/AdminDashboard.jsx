import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getExpiryStatus, formatDate } from '../utils/atsCalculator';
import { mockUsers } from '../data/certificationsData';
import '../styles/adminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.users.currentUser);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    navigate('/');
  };

  const getComplianceStats = () => {
    const stats = {
      totalUsers: mockUsers.length,
      totalCertifications: 0,
      activeCerts: 0,
      expiringCerts: 0,
      expiredCerts: 0
    };

    mockUsers.forEach(user => {
      user.certifications.forEach(cert => {
        stats.totalCertifications++;
        const status = getExpiryStatus(cert.expiryDate).status;
        if (status === 'active') stats.activeCerts++;
        else if (status === 'expiring-soon' || status === 'expiring-warning') stats.expiringCerts++;
        else if (status === 'expired') stats.expiredCerts++;
      });
    });

    return stats;
  };

  const stats = getComplianceStats();

  return (
    <div className="admin-dashboard-container">
      <nav className="admin-navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h1>⚙️ Admin Dashboard</h1>
          </div>
          <div className="navbar-center">
            <input
              type="text"
              className="search-input"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="navbar-user">
            <span className="user-info">Welcome, {currentUser?.name}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="admin-content">
        <div className="stats-section">
          <h2>📊 Compliance Overview</h2>
          <div className="stats-grid">
            <div className="stat-card stat-total">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <span className="stat-label">Total Users</span>
                <span className="stat-value">{stats.totalUsers}</span>
              </div>
            </div>
            <div className="stat-card stat-certs">
              <div className="stat-icon">📜</div>
              <div className="stat-info">
                <span className="stat-label">Total Certifications</span>
                <span className="stat-value">{stats.totalCertifications}</span>
              </div>
            </div>
            <div className="stat-card stat-active">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <span className="stat-label">Active</span>
                <span className="stat-value">{stats.activeCerts}</span>
              </div>
            </div>
            <div className="stat-card stat-expiring">
              <div className="stat-icon">⚠️</div>
              <div className="stat-info">
                <span className="stat-label">Expiring Soon</span>
                <span className="stat-value">{stats.expiringCerts}</span>
              </div>
            </div>
            <div className="stat-card stat-expired">
              <div className="stat-icon">❌</div>
              <div className="stat-info">
                <span className="stat-label">Expired</span>
                <span className="stat-value">{stats.expiredCerts}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="users-section">
          <h2>👥 User Certifications</h2>
          
          <div className="users-grid">
            {filteredUsers.map(user => (
              <div key={user.id} className="user-card admin-user-card">
                <div className="user-header">
                  <h3>{user.name}</h3>
                  <button
                    className="expand-btn"
                    onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}
                  >
                    {selectedUser === user.id ? '▼' : '▶'}
                  </button>
                </div>
                <p className="user-email">{user.email}</p>
                <p className="user-role">{user.role} • {user.department}</p>
                <p className="cert-count">Certifications: <strong>{user.certifications.length}</strong></p>

                {selectedUser === user.id && (
                  <div className="user-certs-expanded">
                    {user.certifications.length === 0 ? (
                      <p className="no-certs">No certifications on record</p>
                    ) : (
                      <div className="certs-table">
                        <div className="table-header">
                          <div className="col-cert">Certificate</div>
                          <div className="col-dates">Dates</div>
                          <div className="col-status">Status</div>
                          <div className="col-days">Days Left</div>
                        </div>
                        {user.certifications.map((cert, idx) => {
                          const expiryInfo = getExpiryStatus(cert.expiryDate);
                          return (
                            <div key={idx} className="table-row">
                              <div className="col-cert">{cert.name}</div>
                              <div className="col-dates">
                                <small>{formatDate(cert.issuedDate)} → {formatDate(cert.expiryDate)}</small>
                              </div>
                              <div className="col-status">
                                <span className={`status-badge status-${expiryInfo.status}`}>
                                  {expiryInfo.status === 'active' && '✓ Active'}
                                  {expiryInfo.status === 'expiring-soon' && '⚠ Expiring Soon'}
                                  {expiryInfo.status === 'expiring-warning' && '⏰ Warning'}
                                  {expiryInfo.status === 'expired' && '✗ Expired'}
                                </span>
                              </div>
                              <div className="col-days">
                                <span className={`days-badge days-${expiryInfo.status}`}>
                                  {expiryInfo.status === 'expired' ? `${expiryInfo.days}d ago` : `${expiryInfo.days}d left`}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <div className="no-results">
              <p>No users found matching "{searchQuery}"</p>
            </div>
          )}
        </div>

        <div className="expiry-alerts-section">
          <h2>🔔 Expiry Alerts</h2>
          <div className="alerts-list">
            {mockUsers.map(user =>
              user.certifications
                .filter(cert => {
                  const status = getExpiryStatus(cert.expiryDate).status;
                  return status === 'expiring-soon' || status === 'expiring-warning' || status === 'expired';
                })
                .map((cert, idx) => {
                  const expiryInfo = getExpiryStatus(cert.expiryDate);
                  return (
                    <div key={`${user.id}-${idx}`} className={`alert-item alert-${expiryInfo.status}`}>
                      <div className="alert-icon">
                        {expiryInfo.status === 'expired' && '❌'}
                        {expiryInfo.status !== 'expired' && '⚠️'}
                      </div>
                      <div className="alert-content">
                        <p className="alert-text">
                          <strong>{user.name}</strong>'s "{cert.name}" expires in <strong>{expiryInfo.days} days</strong>
                        </p>
                        <p className="alert-date">
                          Expiry: {formatDate(cert.expiryDate)}
                        </p>
                      </div>
                      <button className="alert-action">Notify User</button>
                    </div>
                  );
                })
            ).filter((_, idx) => idx < 10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
