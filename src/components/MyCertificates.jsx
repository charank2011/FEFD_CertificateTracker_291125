import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getExpiryStatus, formatDate } from '../utils/atsCalculator';
import { certificationData, mockUsers } from '../data/certificationsData';
import '../styles/myCertificates.css';

const MyCertificates = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  const userCertifications = useSelector(state => state.users.userCertifications);
  const [filterStatus, setFilterStatus] = useState('all');

  // Get the current user's certificates from mock data
  const user = mockUsers.find(u => u.name === currentUser?.name);
  const userCerts = user?.certifications || [];

  // Enrich certificates with domain information
  const enrichedCerts = userCerts.map(cert => {
    let fullCertDetails = null;
    let domainName = '';

    certificationData.forEach(domain => {
      const found = domain.certifications.find(c => c.id === cert.certId);
      if (found) {
        fullCertDetails = found;
        domainName = domain.domain;
      }
    });

    return {
      ...cert,
      fullDetails: fullCertDetails,
      domain: domainName
    };
  });

  // Filter certificates
  const filteredCerts = enrichedCerts.filter(cert => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'active') return cert.status === 'active';
    if (filterStatus === 'expiring') return cert.status === 'expiring-soon' || cert.status === 'expiring-warning';
    if (filterStatus === 'expired') return cert.status === 'expired';
    return true;
  });

  return (
    <div className="my-certificates-section">
      <div className="section-header">
        <h2>My Certificates</h2>
        <p>Track and manage your professional certifications</p>
      </div>

      <div className="filter-section">
        <button
          className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
          onClick={() => setFilterStatus('all')}
        >
          All Certificates
        </button>
        <button
          className={`filter-btn ${filterStatus === 'active' ? 'active' : ''}`}
          onClick={() => setFilterStatus('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filterStatus === 'expiring' ? 'active' : ''}`}
          onClick={() => setFilterStatus('expiring')}
        >
          Expiring Soon
        </button>
        <button
          className={`filter-btn ${filterStatus === 'expired' ? 'active' : ''}`}
          onClick={() => setFilterStatus('expired')}
        >
          Expired
        </button>
      </div>

      {filteredCerts.length === 0 ? (
        <div className="no-certificates">
          <p>No certificates found.</p>
          <p>Start by exploring available certifications!</p>
        </div>
      ) : (
        <div className="certificates-grid">
          {filteredCerts.map((cert, idx) => {
            const expiryInfo = getExpiryStatus(cert.expiryDate);
            return (
              <div key={idx} className={`my-cert-card status-${expiryInfo.status}`}>
                <div className="cert-status-badge">
                  {expiryInfo.status === 'active' && <span className="badge badge-active">✓ Active</span>}
                  {expiryInfo.status === 'expiring-soon' && <span className="badge badge-expiring">⚠ Expiring Soon</span>}
                  {expiryInfo.status === 'expiring-warning' && <span className="badge badge-warning">⏰ Warning</span>}
                  {expiryInfo.status === 'expired' && <span className="badge badge-expired">✗ Expired</span>}
                </div>

                <div className="cert-content">
                  <h3>{cert.name}</h3>
                  <p className="cert-domain">{cert.domain}</p>
                  <p className="cert-provider">{cert.fullDetails?.provider}</p>
                </div>

                <div className="cert-dates">
                  <div className="date-row">
                    <span className="date-label">Issued:</span>
                    <span className="date-value">{formatDate(cert.issuedDate)}</span>
                  </div>
                  <div className="date-row">
                    <span className="date-label">Expires:</span>
                    <span className={`date-value expiry-${expiryInfo.status}`}>
                      {formatDate(cert.expiryDate)}
                    </span>
                  </div>
                </div>

                <div className={`cert-countdown countdown-${expiryInfo.status}`}>
                  <div className="countdown-display">
                    <span className="countdown-number">{expiryInfo.days}</span>
                    <span className="countdown-label">days</span>
                  </div>
                  <p className="countdown-message">{expiryInfo.message}</p>
                </div>

                <div className="cert-actions">
                  <button className="action-btn view-btn">View Certificate</button>
                  {expiryInfo.status === 'expiring-soon' || expiryInfo.status === 'expired' ? (
                    <button className="action-btn renew-btn">Renew</button>
                  ) : (
                    <button className="action-btn download-btn">Download</button>
                  )}
                </div>

                <div className="cert-progress">
                  <div className="progress-bar">
                    <div
                      className={`progress-fill progress-${expiryInfo.status}`}
                      style={{
                        width: `${Math.max(0, Math.min(100, (expiryInfo.days / 365) * 100))}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {enrichedCerts.length > 0 && (
        <div className="certificates-summary">
          <h3>Summary</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-label">Total Certificates:</span>
              <span className="summary-value">{enrichedCerts.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Active:</span>
              <span className="summary-value status-active">
                {enrichedCerts.filter(c => c.status === 'active').length}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Expiring Soon:</span>
              <span className="summary-value status-warning">
                {enrichedCerts.filter(c => c.status === 'expiring-soon' || c.status === 'expiring-warning').length}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Expired:</span>
              <span className="summary-value status-expired">
                {enrichedCerts.filter(c => c.status === 'expired').length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCertificates;
