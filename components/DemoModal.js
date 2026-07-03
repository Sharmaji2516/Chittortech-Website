"use client";

import { useState } from "react";

export default function DemoModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus("Sending...");
    
    const formData = {
      type: "Free Demo",
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      company: e.target[3].value,
      goalOrService: e.target[4].value,
      description: e.target[5].value
    };

    try {
      const response = await fetch('/api/modal-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you! Our expert will call you shortly.");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send request.");
    }

    setTimeout(() => {
      onClose();
      setStatus("");
    }, 4000);
  };

  return (
    <div className="demo-modal-overlay" onClick={onClose}>
      <div className="demo-modal-content reveal reveal-active" onClick={(e) => e.stopPropagation()}>
        <button className="demo-close-btn" onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Book a Free Demo</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
          Schedule a 1-on-1 session with our experts to map out your digital growth strategy.
        </p>

        {status ? (
          <div style={{ color: '#00ff88', fontWeight: 'bold', padding: '3rem 0', textAlign: 'center', fontSize: '1.1rem' }}>
            <i className="fas fa-check-circle" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}></i>
            {status}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="demo-form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" required placeholder="e.g. John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" required placeholder="+91 9876543210" />
            </div>
            <div className="form-group">
              <label>Business / Company Name</label>
              <input type="text" placeholder="e.g. Acme Corp" />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Service Interested In *</label>
              <select required defaultValue="">
                <option value="" disabled>Select a Service</option>
                <option value="website">Premium Website Development</option>
                <option value="saas">SaaS Architecture & Web App</option>
                <option value="mobile">Mobile App Development (Kotlin & Expo)</option>
                <option value="ai">AI Business Automation</option>
                <option value="chatbot">Real-Time Chatbots</option>
                <option value="other">Other Digital Solutions</option>
              </select>
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Briefly Describe Your Project</label>
              <textarea placeholder="Tell us a little bit about what you're looking to build..." rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ gridColumn: '1 / -1', width: '100%', marginTop: '0.5rem', padding: '1rem' }}>
              Request Demo Call
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
