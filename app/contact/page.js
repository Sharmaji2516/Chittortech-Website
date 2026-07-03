"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
    }
  };

  const emailSubject = encodeURIComponent("Project Inquiry - ChittorTech");
  const emailBody = encodeURIComponent("Hello ChittorTech Team,\n\nI would like to inquire about your services for my upcoming project.\n\nBest regards,");
  const whatsappMessage = encodeURIComponent("Hello ChittorTech, I'm interested in your digital solutions. Let's discuss!");

  return (
    <main style={{ paddingTop: '0px' }}>
      <section id="contact" className="contact-section-grid" style={{ padding: '140px 0 100px' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="status-badge">
              <div className="status-dot"></div>
              <span className="status-text">Active Operations & Open to Connect for New Projects</span>
            </div>
            <h2 className="display-title" style={{ marginBottom: '1rem' }}>Let’s Build Something <span>Great</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>We bring elite digital innovation to your doorstep.</p>
          </div>

          <div className="contact-container">
            <div className="contact-info reveal">
              <h3>Contact Details</h3>
              
              {/* Email Us */}
              <a href={`mailto:chittortech@gmail.com?subject=${emailSubject}&body=${emailBody}`} className="info-box-link">
                <div className="info-box">
                  <div className="info-icon"><i className="fas fa-envelope"></i></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>chittortech@gmail.com</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>Available 24/7 • Click to email</p>
                  </div>
                </div>
              </a>



              {/* LinkedIn Official */}
              <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" className="info-box-link">
                <div className="info-box">
                  <div className="info-icon"><i className="fab fa-linkedin"></i></div>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>ChittorTech Official</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>Company Page • Click to follow</p>
                  </div>
                </div>
              </a>

              {/* Location */}
              <a href="https://www.google.com/maps/search/?api=1&query=Chittorgarh,+Rajasthan" target="_blank" rel="noopener noreferrer" className="info-box-link">
                <div className="info-box">
                  <div className="info-icon"><i className="fas fa-location-dot"></i></div>
                  <div>
                    <h4>Location</h4>
                    <p>Chittorgarh - 312021</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>Rajasthan, India • Click for maps</p>
                  </div>
                </div>
              </a>

              <div style={{ marginTop: '3rem' }}>
                <span style={{ fontWeight: 600, marginRight: '1.5rem' }}>Connect With Us:</span>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" className="social-link-item">
                    <i className="fab fa-linkedin-in"></i> ChittorTech
                  </a>
                  <a href="https://istart.rajasthan.gov.in/profile/11478/startups" target="_blank" rel="noopener noreferrer" className="social-link-item">
                    <i className="fas fa-medal"></i> iStart
                  </a>
                  <a href="https://www.linkedin.com/in/kush-sharma-9721a02ab/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                    <i className="fab fa-linkedin-in"></i> Kush (Founder)
                  </a>
                  <a href="https://www.linkedin.com/in/lav-sharma-a9919b2ab/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                    <i className="fab fa-linkedin-in"></i> Lav (Co-Founder)
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form reveal" style={{ position: 'relative', minHeight: '600px' }}>
              {isSubmitted ? (
                <div className="success-overlay">
                  <div className="success-icon">
                    <i className="fas fa-circle-check"></i>
                  </div>
                  <h3>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>We'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="btn btn-outline" 
                    style={{ marginTop: '2rem' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="chittortech-form">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <select name="projectType" required defaultValue="">
                      <option value="" disabled>What are you looking for?</option>
                      <option value="web-dev">Premium Web Development</option>
                      <option value="ai-solutions">Generative AI Solutions</option>
                      <option value="ui-ux">High-End UI/UX Design</option>
                      <option value="mobile-apps">Mobile App Development</option>
                      <option value="other">Other Digital Innovation</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea name="message" rows="5" placeholder="Project Inquiry" required></textarea>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', maxWidth: '400px' }}>
                      Send Query
                    </button>
                  </div>
                  
                  <div className="trust-badges">
                    <div className="trust-item"><i className="fas fa-shield-halved"></i> SSL Protected</div>
                    <div className="trust-item"><i className="fas fa-bolt"></i> Fast Deploy</div>
                    <div className="trust-item"><i className="fas fa-rocket"></i> Scalable Tech</div>
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
