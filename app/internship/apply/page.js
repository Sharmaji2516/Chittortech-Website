"use client";

import React, { useState, useEffect } from "react";
import { sendWhatsAppLead } from "@/lib/whatsapp-service";

export default function InternshipApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [track, setTrack] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!track) {
      alert("Please select a specialization track.");
      return;
    }

    const form = e.target;
    const formData = new FormData(form);

    sendWhatsAppLead({
      title: 'Internship Application',
      fields: {
        '👤 Candidate Name': formData.get('name'),
        '📧 Email': formData.get('email'),
        '📱 Phone': formData.get('phone'),
        '🏫 University': formData.get('university'),
        '🎓 College': formData.get('college'),
        '📚 Course': `${formData.get('course')} (${formData.get('startYear')} - ${formData.get('endYear')})`,
        '💻 Specialization Track': track === "Others" ? (formData.get('otherTrack') || "Others") : track,
      },
      messageText: '📌 NOTE: Please attach your PDF Resume here in this WhatsApp chat.'
    });

    setIsSubmitted(true);
    form.reset();
    setTrack("");
  };

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
              minHeight: isSubmitted ? 'auto' : '500px', 
              width: '100%', 
              background: '#ffffff',
              border: '1px solid rgba(0, 62, 216, 0.08)',
              boxShadow: 'var(--shadow-soft)',
              borderRadius: '30px',
              padding: 'clamp(1.5rem, 5vw, 3.5rem)'
            }}>
              {isSubmitted ? (
                <div className="success-overlay" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div className="success-icon" style={{ color: '#25D366', fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800' }}>Opening WhatsApp!</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.8rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    Your application details are pre-filled.<br/>
                    <strong style={{ color: '#25D366' }}>📌 Please attach your PDF resume directly inside the WhatsApp chat.</strong>
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="btn btn-outline" 
                    style={{ marginTop: '2rem', borderRadius: '50px' }}
                  >
                    Submit Another Application
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
                      <label className="input-label">Full Name *</label>
                      <input type="text" name="name" placeholder="Example: John Doe" required style={{ width: '100%' }} />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Email Address *</label>
                      <input type="email" name="email" placeholder="Example: john@company.com" required style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div className="form-group">
                      <label className="input-label">Phone Number *</label>
                      <input type="tel" name="phone" placeholder="Example: +91 98765 43210" required style={{ width: '100%' }} />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Select Specialization *</label>
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
                      <label className="input-label">University *</label>
                      <input 
                        type="text" 
                        name="university" 
                        placeholder="Example: IIT Delhi / RTU Kota" 
                        required 
                        style={{ width: '100%' }} 
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-label">College / Institute *</label>
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
                        <label className="input-label">Course & Academic Duration *</label>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <input type="text" name="course" placeholder="Example: B.Tech CS" required style={{ flex: '2 1 200px', minWidth: '0' }} />
                            <input type="number" name="startYear" placeholder="2023" required min="2000" max="2100" style={{ flex: '1 1 80px', minWidth: '0' }} />
                            <input type="number" name="endYear" placeholder="2027" required min="2000" max="2100" style={{ flex: '1 1 80px', minWidth: '0' }} />
                        </div>
                    </div>
                  </div>

                  {/* Informational Banner */}
                  <div style={{ 
                    marginTop: '2rem', 
                    padding: '1.2rem 1.5rem', 
                    background: 'rgba(37, 211, 102, 0.08)', 
                    border: '1px solid rgba(37, 211, 102, 0.3)', 
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <i className="fab fa-whatsapp" style={{ fontSize: '1.8rem', color: '#25D366' }}></i>
                    <div>
                      <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: '700' }}>WhatsApp Instant Application</h4>
                      <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.4' }}>
                        Clicking submit will open WhatsApp with your details pre-filled. <strong>Please attach your PDF resume directly inside the WhatsApp chat.</strong>
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                    <button 
                      type="submit" 
                      className="btn btn-primary" 
                      style={{ 
                        width: '100%', 
                        maxWidth: '400px', 
                        padding: '1rem',
                        backgroundColor: '#25D366', 
                        borderColor: '#25D366', 
                        color: '#fff',
                        borderRadius: '50px',
                        fontWeight: '700',
                        fontSize: '1rem'
                      }}
                    >
                      <i className="fab fa-whatsapp" style={{ marginRight: '8px', fontSize: '1.2rem' }}></i> Submit Application via WhatsApp
                    </button>
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
