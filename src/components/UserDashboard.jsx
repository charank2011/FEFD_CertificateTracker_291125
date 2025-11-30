import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CertificationCard from './CertificationCard';
import MyCertificates from './MyCertificates';
import '../styles/dashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { domains } = useSelector(state => state.certifications);
  const [activeTab, setActiveTab] = useState('available');
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const currentUser = useSelector(state => state.users.currentUser);

  const filteredDomains = domains.filter(domain =>
    domain.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h1>🎓 CertTracker Pro</h1>
          </div>
          <div className="navbar-center">
            <input
              type="text"
              className="search-input"
              placeholder="Search certifications..."
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

      <div className="dashboard-content">
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'available' ? 'active' : ''}`}
            onClick={() => setActiveTab('available')}
          >
            📚 Available Certifications
          </button>
          <button
            className={`tab-btn ${activeTab === 'my-certs' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-certs')}
          >
            📋 My Certificates
          </button>
          <button
            className={`tab-btn ${activeTab === 'ats' ? 'active' : ''}`}
            onClick={() => setActiveTab('ats')}
          >
            🎯 ATS Score Calculator
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'available' && (
            <div className="available-certs-section">
              <div className="section-header">
                <h2>Explore Professional Certifications</h2>
                <p>Discover certifications across 9 domains to advance your career</p>
              </div>

              {searchQuery && filteredDomains.length === 0 && (
                <div className="no-results">
                  <p>No certifications found for "{searchQuery}"</p>
                </div>
              )}

              <div className="domains-grid">
                {filteredDomains.map(domain => (
                  <div
                    key={domain.id}
                    className={`domain-card ${selectedDomain === domain.id ? 'expanded' : ''}`}
                    onClick={() => setSelectedDomain(selectedDomain === domain.id ? null : domain.id)}
                  >
                    <div className="domain-header">
                      <span className="domain-emoji">{domain.emoji}</span>
                      <h3>{domain.domain}</h3>
                    </div>
                    <p className="domain-description">{domain.description}</p>
                    
                    {selectedDomain === domain.id && (
                      <div className="domain-details">
                        <div className="domain-section">
                          <h4>📍 Companies</h4>
                          <div className="companies-list">
                            {domain.companies.map((company, idx) => (
                              <span key={idx} className="company-badge">{company}</span>
                            ))}
                          </div>
                        </div>

                        <div className="domain-section">
                          <h4>💼 Roles</h4>
                          <div className="roles-list">
                            {domain.roles.map((role, idx) => (
                              <span key={idx} className="role-badge">{role}</span>
                            ))}
                          </div>
                        </div>

                        <div className="certifications-list">
                          <h4>🏆 Certifications</h4>
                          {domain.certifications.map(cert => (
                            <CertificationCard key={cert.id} certification={cert} domain={domain} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'my-certs' && <MyCertificates />}

          {activeTab === 'ats' && (
            <div className="ats-section">
              <ATSCalculator />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ATS Calculator Component
const ATSCalculator = () => {
  const [resumeText, setResumeText] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [atsResult, setAtsResult] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { calculateATSScore } = require('../utils/atsCalculator');

  const processFile = async (file) => {
    setUploadError('');
    setIsLoading(true);

    try {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('File size must be less than 5MB');
        setIsLoading(false);
        return;
      }

      // Check file type
      const validTypes = ['.txt', '.pdf', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      
      if (!validTypes.includes(fileExtension)) {
        setUploadError('Invalid file type. Supported formats: TXT, PDF, DOCX');
        setIsLoading(false);
        return;
      }

      setResumeFile(file);

      // PDF parsing note
      if (fileExtension === '.pdf') {
        setUploadError('⚠️ PDF parsing requires additional library. Please paste resume text or upload as .txt or .docx');
        setIsLoading(false);
        return;
      }

      // Handle different file types
      let text = '';
      
      if (fileExtension === '.txt') {
        text = await file.text();
      } else if (fileExtension === '.docx') {
        // For DOCX files, extract basic text
        // Note: Full DOCX parsing requires a library like mammoth.js
        // For now, we'll provide a message to paste text
        setUploadError('⚠️ DOCX parsing requires additional library. Please paste resume text or upload as .txt');
        setIsLoading(false);
        return;
      }

      if (text.trim()) {
        setResumeText(text);
        calculateScore(text);
      } else {
        setUploadError('File appears to be empty. Please ensure it contains text.');
      }
    } catch (error) {
      setUploadError('Error reading file: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true);
    } else if (e.type === 'dragleave') {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      processFile(files[0]);
    }
  };

  const calculateScore = (text) => {
    const { score, matches, analysis } = calculateATSScore(text);
    setAtsResult({ score, matches, analysis });
  };

  const handleCalculate = () => {
    if (resumeText.trim()) {
      calculateScore(resumeText);
    } else {
      setUploadError('Please enter resume text to calculate score');
    }
  };

  const clearResume = () => {
    setResumeText('');
    setResumeFile(null);
    setAtsResult(null);
    setUploadError('');
  };

  return (
    <div className="ats-calculator">
      <div className="ats-header">
        <h2>🎯 ATS Score Calculator</h2>
        <p>Analyze your resume for Applicant Tracking System compatibility</p>
      </div>

      <div className="ats-content">
        <div className="ats-input-section">
          <h3>Upload Your Resume</h3>
          
          {/* Drag and Drop Area */}
          <div 
            className={`drag-drop-area ${isDragActive ? 'active' : ''} ${resumeFile ? 'has-file' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {isLoading ? (
              <div className="upload-loading">
                <div className="spinner"></div>
                <p>Processing file...</p>
              </div>
            ) : resumeFile ? (
              <div className="file-info">
                <span className="file-icon">✅</span>
                <p className="file-name">{resumeFile.name}</p>
                <p className="file-size">({(resumeFile.size / 1024).toFixed(2)} KB)</p>
                <button 
                  type="button" 
                  className="clear-file-btn"
                  onClick={clearResume}
                >
                  ✕ Clear
                </button>
              </div>
            ) : (
              <div className="upload-prompt">
                <span className="upload-icon">📄</span>
                <p className="upload-main">Drag and drop your resume here</p>
                <p className="upload-or">or</p>
                <label htmlFor="resume-upload" className="upload-btn">
                  Click to Browse
                </label>
                <p className="upload-support">Supported: TXT, DOCX (PDF coming soon)</p>
              </div>
            )}
            <input
              type="file"
              id="resume-upload"
              accept=".txt,.pdf,.docx"
              onChange={handleFileUpload}
              className="file-input"
            />
          </div>

          {uploadError && (
            <div className={`upload-error ${uploadError.includes('⚠️') ? 'warning' : ''}`}>
              {uploadError}
            </div>
          )}

          {/* Text Input Alternative */}
          <div className="divider">
            <span>or</span>
          </div>

          <div className="text-input-section">
            <h4>Paste Your Resume Text</h4>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume content here..."
              className="resume-textarea"
              rows="12"
            />
            <div className="textarea-info">
              <span>{resumeText.length}</span> characters
            </div>
          </div>

          <button 
            className="calculate-btn" 
            onClick={handleCalculate}
            disabled={!resumeText.trim()}
          >
            📊 Calculate ATS Score
          </button>
        </div>

        {atsResult && (
          <div className="ats-results">
            <div className="ats-score-display">
              <div className={`score-circle score-${Math.floor(atsResult.score / 25)}`}>
                <span className="score-number">{atsResult.score}</span>
                <span className="score-text">/ 100</span>
              </div>
              <div className="score-interpretation">
                {atsResult.score >= 75 && <p className="score-excellent">Excellent! Your resume is ATS-friendly</p>}
                {atsResult.score >= 50 && atsResult.score < 75 && <p className="score-good">Good! Consider improvements below</p>}
                {atsResult.score >= 25 && atsResult.score < 50 && <p className="score-fair">Fair. Make recommended changes</p>}
                {atsResult.score < 25 && <p className="score-poor">Needs improvement. Review suggestions</p>}
              </div>
            </div>

            <div className="ats-analysis">
              <div className="analysis-section strengths">
                <h4>✅ Strengths</h4>
                {atsResult.analysis.strengths.map((strength, idx) => (
                  <p key={idx}>{strength}</p>
                ))}
              </div>

              <div className="analysis-section weaknesses">
                <h4>⚠️ Areas for Improvement</h4>
                {atsResult.analysis.weaknesses.map((weakness, idx) => (
                  <p key={idx}>{weakness}</p>
                ))}
              </div>
            </div>

            {atsResult.matches.length > 0 && (
              <div className="keywords-section">
                <h4>🔑 Keywords Found</h4>
                <div className="keywords-list">
                  {atsResult.matches.slice(0, 15).map((keyword, idx) => (
                    <span key={idx} className="keyword-tag">{keyword}</span>
                  ))}
                  {atsResult.matches.length > 15 && (
                    <span className="keyword-more">+{atsResult.matches.length - 15} more</span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
