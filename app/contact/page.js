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
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <main style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <section id="contact" className="contact-section-grid">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="status-badge">
              <div className="status-dot"></div>
              <span className="status-text">Active Operations {"&"} Open to Connect for New Projects</span>
            </div>
            <h2 className="display-title" style={{ marginBottom: '1rem' }}>Let’s Build Something <span>Great</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>We bring elite digital innovation to your doorstep.</p>
          </div>

          <div className="contact-container">
            <div className="contact-info reveal">
              <h3>Contact Details</h3>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4>Email Us</h4>
                  <p>chittortech@gmail.com</p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-phone"></i></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 75979 01057</p>
                  <p>+91 82338 16674</p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-location-dot"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>Madhav Nagar Sector-1, Chanderiya, Chittorgarh</p>
                </div>
              </div>
              <div style={{ marginTop: '3rem' }}>
                <span style={{ fontWeight: 600, marginRight: '1.5rem' }}>Follow Us:</span>
                <a href="#"><i className="fab fa-linkedin fa-lg"></i></a> &nbsp;&nbsp;
                <a href="#"><i className="fab fa-twitter fa-lg"></i></a> &nbsp;&nbsp;
                <a href="#"><i className="fab fa-github fa-lg"></i></a>
              </div>
            </div>

            <div className="contact-form reveal" style={{ position: 'relative' }}>
              {isSubmitted ? (
                <div className="success-overlay">
                  <div className="success-icon">
                    <i className="fas fa-circle-check"></i>
                  </div>
                  <h3>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>We'll get back to you within 2 hours.</p>
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
                      Start Your Project
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
