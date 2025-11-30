import React, { useState } from 'react';
import '../styles/certificationCard.css';

const CertificationCard = ({ certification, domain }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="certification-card-wrapper">
      <div
        className={`certification-card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="card-front">
          <div className="card-header">
            <h4>{certification.name}</h4>
          </div>
          <div className="card-body">
            <p className="provider">
              <strong>Provider:</strong> {certification.provider}
            </p>
            <p className="duration">
              <strong>Duration:</strong> {certification.duration}
            </p>
            <p className="difficulty">
              <strong>Difficulty:</strong> <span className={`difficulty-${certification.difficulty.toLowerCase()}`}>{certification.difficulty}</span>
            </p>
            <p className="price">
              <strong>Price:</strong> {certification.price}
            </p>
          </div>
          <div className="card-footer">
            <span className="flip-hint">Click to flip</span>
          </div>
        </div>

        {/* Back of card */}
        <div className="card-back">
          <div className="card-header">
            <h4>Details</h4>
          </div>
          <div className="card-body">
            <p className="description">{certification.description}</p>
            <div className="companies-section">
              <p className="label">Preferred Companies:</p>
              <div className="companies">
                {certification.companies.map((company, idx) => (
                  <span key={idx} className="company">{company}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="add-cert-btn">Add to My Certs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
