"use client";

import React, { useState, useEffect } from "react";

export default function InternshipApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisError, setAnalysisError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  const handleAnalyzeResume = async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    
    setIsAnalyzing(true);
    setAnalysisResult(null);
    setAnalysisError(null);

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await fetch('/api/internship/analyze', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setAnalysisResult(result);
        setShowModal(true); // Automatically open the modal when results are ready
      } else {
        setAnalysisError(result.error || "Analysis failed. Please try again.");
      }
    } catch (error) {
      console.error("Analysis failed:", error);
      setAnalysisError("Network error. Please check your connection.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!track) {
      alert("Please select a specialization track.");
      return;
    }
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    
    // File validation
    const resumeFile = formData.get('resume');
    if (resumeFile && resumeFile.size > 2 * 1024 * 1024) {
      alert("Resume file size must be less than 2MB.");
      setIsSubmitting(false);
      return;
    }
    if (resumeFile && resumeFile.type !== 'application/pdf') {
      alert("Please upload resume in PDF format only.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/internship', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert(`Error: ${result.error || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [track, setTrack] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main style={{ paddingTop: '0px' }}>
      <section id="intern-apply" className="contact-section-grid" style={{ padding: '140px 0 100px', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
          {!isSubmitted && (
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="status-badge" style={{ borderColor: 'rgba(0, 62, 216, 0.1)', background: 'rgba(0, 62, 216, 0.05)' }}>
                <div className="status-dot" style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
                <span className="status-text" style={{ color: 'var(--primary)' }}>Applications Open for 2026</span>
              </div>
              <h2 className="display-title" style={{ marginBottom: '1rem' }}>Internship <span>Application</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Fill out the form below to join our specialized training program.</p>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="contact-form reveal" style={{ 
              position: 'relative', 
              minHeight: isSubmitted ? 'auto' : '600px', 
              width: '100%', 
              background: '#ffffff',
              border: '1px solid rgba(0, 62, 216, 0.08)',
              boxShadow: 'var(--shadow-soft)',
              borderRadius: '30px',
              padding: 'clamp(1.5rem, 5vw, 3.5rem)'
            }}>
              {isSubmitted ? (
                <div className="success-overlay" style={{ textAlign: 'center' }}>
                  <div className="success-icon" style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1.5rem' }}>
                    <i className="fas fa-circle-check"></i>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800' }}>Application Received</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Our HR division will review your profile and contact you soon.</p>
                  <button 
                    onClick={() => window.location.href = '/internship'} 
                    className="btn btn-outline" 
                    style={{ marginTop: '2rem', borderRadius: '50px' }}
                  >
                    Back to Internship
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="internship-application-form" style={{ width: '100%' }}>
                  <style jsx>{`
                    .input-label {
                      display: block;
                      color: var(--primary);
                      font-size: 0.85rem;
                      font-weight: 600;
                      margin-bottom: 0.8rem;
                      text-transform: uppercase;
                      letter-spacing: 1px;
                    }
                    .others-input {
                      margin-top: 1rem;
                      animation: slideDown 0.3s ease-out;
                    }
                    @keyframes slideDown {
                      from { opacity: 0; transform: translateY(-10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes slideDownDropdown {
                      from { opacity: 0; transform: translateY(-5px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    .dropdown-item {
                      padding: 0.8rem 1rem;
                      color: var(--text-main);
                      cursor: pointer;
                      transition: all 0.2s;
                      font-size: 0.9rem;
                    }
                    .dropdown-item:hover {
                      background: rgba(0, 62, 216, 0.05);
                      color: var(--primary);
                    }
                    .dropdown-item.active {
                      background: rgba(0, 62, 216, 0.1);
                      color: var(--primary);
                      font-weight: bold;
                    }
                  `}</style>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    <div className="form-group">
                      <label className="input-label">Full Name</label>
                      <input type="text" name="name" placeholder="Example: John Doe" required style={{ width: '100%' }} />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Email Address</label>
                      <input type="email" name="email" placeholder="Example: john@company.com" required style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div className="form-group">
                      <label className="input-label">Phone Number</label>
                      <input type="tel" name="phone" placeholder="Example: +91 98765 43210" required style={{ width: '100%' }} />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Select Specialization</label>
                      <input type="hidden" name="track" value={track} />
                      <div className="custom-dropdown" style={{ position: 'relative', width: '100%' }}>
                        <div 
                          className="custom-dropdown-header"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          style={{
                            width: '100%',
                            padding: '1.2rem',
                            background: '#ffffff',
                            border: '1px solid rgba(0, 62, 216, 0.08)',
                            borderRadius: '16px',
                            color: track ? 'var(--text-main)' : 'var(--text-muted)',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.9rem'
                          }}
                        >
                          {track || "Choose a specialization..."}
                          <i className={`fas fa-chevron-down ${isDropdownOpen ? 'open' : ''}`} style={{ transition: 'transform 0.3s', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', color: 'var(--primary)' }}></i>
                        </div>
                        
                        {isDropdownOpen && (
                          <div 
                            className="custom-dropdown-list"
                            style={{
                              position: 'absolute',
                              top: 'calc(100% + 5px)',
                              left: 0,
                              width: '100%',
                              background: '#ffffff',
                              border: '1px solid rgba(0, 62, 216, 0.15)',
                              borderRadius: '16px',
                              zIndex: 1000,
                              maxHeight: '250px',
                              overflowY: 'auto',
                              boxShadow: 'var(--shadow-soft)',
                              animation: 'slideDownDropdown 0.2s ease-out'
                            }}
                          >

                            {[
                              "Frontend Development",
                              "Backend Development",
                              "Full Stack Development",
                              "AI",
                              "UI/UX Design",
                              "AI & RAG Architecture",
                              "Enterprise SaaS & Admin",
                              "Infrastructure Automation",
                              "Luxury UX & Tourism Tech",
                              "E-Commerce & Biz Growth",
                              "Others"
                            ].map((option) => (
                              <div
                                key={option}
                                className={`dropdown-item ${track === option ? 'active' : ''}`}
                                onClick={() => {
                                  setTrack(option);
                                  setIsDropdownOpen(false);
                                }}
                              >
                                {option === "Others" ? "Others (Specify below)" : option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {track === "Others" && (
                        <div className="others-input" style={{ marginTop: '1rem', animation: 'slideDown 0.3s ease-out' }}>
                          <input type="text" name="otherTrack" placeholder="Enter your preferred track" required style={{ width: '100%' }} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div className="form-group">
                      <label className="input-label">University</label>
                      <input 
                        type="text" 
                        name="university" 
                        placeholder="Example: IIT Delhi / RTU Kota" 
                        required 
                        style={{ width: '100%' }} 
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-label">College / Institute</label>
                      <input 
                        type="text" 
                        name="college" 
                        placeholder="Example: Geetanjali / CTAE" 
                        required 
                        style={{ width: '100%' }} 
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div className="form-group" style={{ flex: 1 }}>
                        <label className="input-label">Course & Academic Duration</label>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <input type="text" name="course" placeholder="Example: B.Tech CS" required style={{ flex: '2 1 200px', minWidth: '0' }} />
                            <input type="number" name="startYear" placeholder="2023" required min="2000" max="2100" style={{ flex: '1 1 80px', minWidth: '0' }} />
                            <input type="number" name="endYear" placeholder="2027" required min="2000" max="2100" style={{ flex: '1 1 80px', minWidth: '0' }} />
                        </div>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label className="input-label">Upload Resume (PDF only)</label>
                    
                    {/* Advisory Note */}
                    <div style={{ 
                      background: 'rgba(0, 62, 216, 0.03)', 
                      borderLeft: '3.5px solid var(--primary)', 
                      padding: '1rem', 
                      borderRadius: '8px',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start'
                    }}>
                      <i className="fas fa-info-circle" style={{ color: 'var(--primary)', marginTop: '0.2rem' }}></i>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Pro Tip:</span> Please upload your <span style={{ color: 'var(--text-main)' }}>actual, professional resume</span>. Our AI analysis provides the most accurate Tech-Readiness Score and feedback when it can analyze your real skills and experience.
                      </p>
                    </div>

                    <div style={{ 
                      position: 'relative',
                      border: '2px dashed rgba(0, 62, 216, 0.15)',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      textAlign: 'center',
                      background: 'rgba(0, 62, 216, 0.01)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0, 62, 216, 0.15)'}>
                      <input 
                        type="file" 
                        name="resume" 
                        accept=".pdf" 
                        required 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          opacity: 0,
                          cursor: 'pointer',
                          width: '100%',
                          height: '100%'
                        }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          const fileName = file?.name;
                          if (fileName) {
                            const label = e.target.parentElement.querySelector('.file-name-display');
                            if (label) label.textContent = fileName;
                            handleAnalyzeResume(file);
                          }
                        }}
                      />
                      <div className="file-upload-ui">
                        <i className="fas fa-cloud-arrow-up" style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem', display: 'block' }}></i>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>Click to upload PDF</p>
                        <p className="file-name-display" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>No file selected</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Feedback Status / Trigger */}
                  {(isAnalyzing || analysisResult || analysisError) && (
                    <div style={{ 
                      marginTop: '2rem', 
                      padding: '1.2rem', 
                      background: 'rgba(0, 62, 216, 0.03)', 
                      border: '1px solid rgba(0, 62, 216, 0.1)', 
                      borderRadius: '16px',
                      animation: 'slideDown 0.5s ease-out',
                      textAlign: 'center'
                    }}>
                      {isAnalyzing ? (
                        <div>
                          <div className="status-badge" style={{ margin: '0 auto 0.8rem', borderColor: 'rgba(0, 62, 216, 0.1)', background: 'rgba(0, 62, 216, 0.05)' }}>
                            <div className="status-dot" style={{ backgroundColor: 'var(--primary)', animation: 'pulse 1.5s infinite' }}></div>
                            <span style={{ color: 'var(--primary)' }}>AI Analysis in Progress...</span>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Reviewing your technical profile for ChittorTech Standards.</p>
                        </div>
                      ) : analysisError ? (
                        <div>
                          <p style={{ color: '#ff4d4d', fontSize: '0.9rem' }}><i className="fas fa-exclamation-triangle"></i> {analysisError}</p>
                        </div>
                      ) : (
                        <div>
                          <p style={{ color: '#4CAF50', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                            <i className="fas fa-check-circle"></i> AI Analysis Complete!
                          </p>
                          <button 
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="btn btn-outline"
                            style={{ 
                              padding: '0.6rem 1.5rem', 
                              fontSize: '0.85rem'
                            }}
                          >
                            <i className="fas fa-chart-line"></i> View Detailed Analysis
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Analysis Modal */}
                  {showModal && analysisResult && (
                    <div className="shahi-modal-overlay" style={{
                      position: 'fixed',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.5)',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10000,
                      padding: '1.5rem'
                    }}>
                      <div className="shahi-modal-card" style={{
                        background: '#ffffff',
                        border: '1px solid rgba(0, 62, 216, 0.15)',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        maxWidth: '500px',
                        width: '100%',
                        boxShadow: 'var(--shadow-glow)',
                        position: 'relative'
                      }}>
                        <button className="close-modal" onClick={() => setShowModal(false)} style={{
                          position: 'absolute',
                          top: '1.5rem',
                          right: '1.5rem',
                          background: 'none',
                          border: 'none',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          color: 'var(--text-muted)'
                        }}>
                          <i className="fas fa-times"></i>
                        </button>

                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                          <div className="score-circle" style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'rgba(0, 62, 216, 0.05)',
                            border: '2px solid var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            fontWeight: '900',
                            color: 'var(--primary)',
                            margin: '0 auto 1rem'
                          }}>
                            {analysisResult.score}%
                          </div>
                          <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>Tech-Readiness Score</h3>
                        </div>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                          <div>
                            <h4 style={{ color: '#4CAF50', fontSize: '0.95rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                              <i className="fas fa-star"></i> CORE STRENGTHS
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {analysisResult.strengths?.map((s, i) => (
                                <li key={i} style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                  <div style={{ width: '6px', height: '6px', background: '#4CAF50', borderRadius: '50%', flexShrink: 0 }}></div> {s}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div style={{ borderTop: '1px solid rgba(0, 62, 216, 0.08)', paddingTop: '1.2rem' }}>
                            <h4 style={{ color: 'var(--primary)', fontSize: '0.95rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                              <i className="fas fa-lightbulb"></i> AREAS FOR GROWTH
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                              {analysisResult.tips?.map((t, i) => (
                                <li key={i} style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '0.7rem', display: 'flex', gap: '0.8rem' }}>
                                  <i className="fas fa-arrow-right" style={{ color: 'var(--primary)', fontSize: '0.7rem', marginTop: '0.3rem', flexShrink: 0 }}></i> <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                          <button 
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="btn btn-primary"
                            style={{ 
                              padding: '0.7rem 2rem',
                              fontSize: '0.9rem',
                              borderRadius: '50px',
                              color: '#ffffff'
                            }}
                          >
                            GOT IT, THANKS!
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                    <button 
                      type="submit" 
                      className="btn btn-primary" 
                      disabled={isSubmitting}
                      style={{ 
                        width: '100%', 
                        maxWidth: '400px',
                        borderRadius: '50px',
                        color: '#ffffff'
                      }}
                    >
                      {isSubmitting ? "Processing Application..." : "Submit Application"}
                    </button>
                  </div>
                  
                  <div className="trust-badges" style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                    <div className="trust-item" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}><i className="fas fa-certificate" style={{ color: 'var(--primary)', marginRight: '6px' }}></i> Certified Program</div>
                    <div className="trust-item" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}><i className="fas fa-laptop-code" style={{ color: 'var(--primary)', marginRight: '6px' }}></i> Live Projects</div>
                    <div className="trust-item" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}><i className="fas fa-graduation-cap" style={{ color: 'var(--primary)', marginRight: '6px' }}></i> Industry Mentorship</div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
