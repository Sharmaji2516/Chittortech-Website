"use client";

import React, { useState, useEffect } from "react";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { sendWhatsAppLead } from "@/lib/whatsapp-service";

export default function InternshipApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [track, setTrack] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

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
    if (resumeFile && resumeFile.size > 5 * 1024 * 1024) {
      alert("Resume file size must be less than 5MB.");
      setIsSubmitting(false);
      return;
    }
    if (resumeFile && resumeFile.size > 0 && resumeFile.type !== 'application/pdf') {
      alert("Please upload resume in PDF format only.");
      setIsSubmitting(false);
      return;
    }

    let resumeUrl = "Not Provided";
    if (resumeFile && resumeFile.size > 0) {
      try {
        const fileRef = ref(storage, `resumes/${Date.now()}_${resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`);
        await uploadBytes(fileRef, resumeFile);
        resumeUrl = await getDownloadURL(fileRef);
      } catch (uploadErr) {
        console.warn("Resume Storage Upload Fallback:", uploadErr);
        resumeUrl = `File: ${resumeFile.name} (Upload error, please ask candidate)`;
      }
    }

    try {
      sendWhatsAppLead({
        title: 'Internship Application',
        fields: {
          '👤 Candidate Name': formData.get('name'),
          '📧 Email': formData.get('email'),
          '📱 Phone': formData.get('phone'),
          '🏫 University': formData.get('university'),
          '🎓 College': formData.get('college'),
          '📚 Course': `${formData.get('course')} (${formData.get('startYear')} - ${formData.get('endYear')})`,
          '💻 Preferred Track': track === "Others" ? (formData.get('otherTrack') || "Others") : track,
          '📄 PDF Resume Link': resumeUrl !== "Not Provided" ? resumeUrl : "No File Uploaded"
        }
      });

      setIsSubmitted(true);
      form.reset();
      setTrack("");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <div className="success-icon" style={{ color: '#25D366', fontSize: '3rem', marginBottom: '1.5rem' }}>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '800' }}>Opening WhatsApp!</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Your internship application and resume link have been formatted for WhatsApp.</p>
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
                          }
                        }}
                      />
                      <div className="file-upload-ui">
                        <i className="fas fa-cloud-arrow-up" style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem', display: 'block' }}></i>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>Click to upload PDF resume</p>
                        <p className="file-name-display" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>No file selected</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
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
                      {isSubmitting ? (
                        <span><i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i> Uploading Resume & Preparing WhatsApp...</span>
                      ) : (
                        <span><i className="fab fa-whatsapp" style={{ marginRight: '8px', fontSize: '1.2rem' }}></i> Submit Application via WhatsApp</span>
                      )}
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
