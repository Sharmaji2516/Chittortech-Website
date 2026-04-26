"use client";

import React, { useEffect } from 'react';

const policyContent = {
  privacy: {
    title: "Privacy Policy",
    content: (
      <>
        <p>At ChittorTech, we prioritize the security and privacy of our clients' data. This policy outlines how we handle information.</p>
        <h3>1. Data Collection</h3>
        <p>We collect information necessary to provide our digital services, including contact details and project specifications.</p>
        <h3>2. Use of Information</h3>
        <p>Your data is used solely for project communication, service delivery, and legal compliance. We never sell your data to third parties.</p>
        <h3>3. Data Security</h3>
        <p>We implement enterprise-grade encryption and secure infrastructure (Firebase/Vercel) to protect your intellectual property.</p>
      </>
    )
  },
  terms: {
    title: "Terms & Conditions",
    content: (
      <>
        <p>By engaging with ChittorTech, you agree to the following architectural and digital service standards.</p>
        <h3>1. Service Delivery</h3>
        <p>Project timelines are estimates based on initial requirements. Final delivery depends on iterative feedback and technical specifications.</p>
        <h3>2. Intellectual Property</h3>
        <p>Upon final payment, full ownership of the digital product is transferred to the client, while we retain rights to showcase the work in our portfolio unless agreed otherwise.</p>
        <h3>3. Liability</h3>
        <p>ChittorTech is not liable for indirect losses arising from service usage beyond the scope of the project agreement.</p>
      </>
    )
  },
  refund: {
    title: "Refund & Support",
    content: (
      <>
        <p>We strive for excellence, but we understand that project scopes can change.</p>
        <h3>1. Refund Policy</h3>
        <p>Refunds are processed based on the project stage. Milestone-based payments are generally non-refundable once work has commenced and been approved for that phase.</p>
        <h3>2. Ongoing Support</h3>
        <p>All projects include 30 days of complimentary technical support post-launch. Extended maintenance packages are available for architectural scalability.</p>
        <h3>3. Contact Support</h3>
        <p>For urgent technical issues, please contact your project manager or email us at <a href="mailto:Kushsharma.cor@gmail.com" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}><strong>Kushsharma.cor@gmail.com</strong></a></p>
      </>
    )
  }
};

export default function PolicyModal({ type, onClose }) {
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!type || !policyContent[type]) return null;

  const { title, content } = policyContent[type];

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="modal-content reveal reveal-active" onClick={e => e.stopPropagation()} style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--glass-border)',
        borderRadius: '30px',
        width: '100%',
        maxWidth: '700px',
        maxHeight: '85vh',
        overflowY: 'auto',
        position: 'relative',
        padding: '3rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '25px',
          right: '25px',
          background: 'rgba(255,255,255,0.05)',
          border: 'none',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          transition: 'all 0.3s ease'
        }}>
          <i className="fas fa-times"></i>
        </button>

        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '2rem', 
          background: 'linear-gradient(to right, #fff, #888)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'var(--font-space-grotesk)'
        }}>{title}</h2>
        
        <div className="policy-text" style={{ 
          color: 'var(--text-muted)', 
          lineHeight: '1.8',
          fontSize: '1.05rem'
        }}>
          {content}
        </div>

        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'center' }}>
          <button onClick={onClose} className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>
            I Understand
          </button>
        </div>
      </div>

      <style jsx>{`
        .policy-text h3 {
          color: #fff;
          margin: 2rem 0 1rem;
          font-size: 1.3rem;
        }
        .policy-text p {
          margin-bottom: 1.5rem;
        }
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          borderRadius: 10px;
        }
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}
