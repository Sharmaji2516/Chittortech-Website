"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { sendWhatsAppLead } from "@/lib/whatsapp-service";

export default function StrategyModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setStatus("Redirecting to WhatsApp...");
    
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const company = e.target[3].value;
    const goalOrService = e.target[4].value;
    const description = e.target[5].value;

    sendWhatsAppLead({
      title: 'Strategy Call Request',
      fields: {
        '👤 Name': name,
        '📧 Email': email,
        '📱 Phone': phone,
        '🏢 Company': company || 'N/A',
        '🎯 Primary Goal': goalOrService,
      },
      messageText: description
    });

    setTimeout(() => {
      onClose();
      setStatus("");
    }, 2500);
  };

  const modalContent = (
    <div className="demo-modal-overlay" onClick={onClose}>
      <div className="demo-modal-content reveal reveal-active" onClick={(e) => e.stopPropagation()}>
        <button className="demo-close-btn" onClick={onClose}>&times;</button>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Book a Strategy Call</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
          Schedule a 1-on-1 session with our experts to map out your digital growth strategy.
        </p>

        {status ? (
          <div style={{ color: '#25D366', fontWeight: 'bold', padding: '3rem 0', textAlign: 'center', fontSize: '1.1rem' }}>
            <i className="fab fa-whatsapp" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}></i>
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
              <label>What's your primary goal? *</label>
              <select required defaultValue="">
                <option value="" disabled>Select a Goal</option>
                <option value="Scale Existing Business">Scale existing business</option>
                <option value="Launch New Product">Launch a new product</option>
                <option value="Automate Internal Processes">Automate internal processes</option>
                <option value="Dominate Search Rankings">Dominate search rankings</option>
                <option value="Other Growth Goals">Other</option>
              </select>
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Briefly Describe Your Business Context</label>
              <textarea placeholder="Tell us about your current challenges and what you want to achieve..." rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ gridColumn: '1 / -1', width: '100%', marginTop: '0.5rem', padding: '1rem', backgroundColor: '#25D366', borderColor: '#25D366', color: '#fff' }}>
              <i className="fab fa-whatsapp" style={{ marginRight: '8px', fontSize: '1.2rem' }}></i> Confirm Strategy Call via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
