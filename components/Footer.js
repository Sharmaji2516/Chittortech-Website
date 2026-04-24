"use client";

import Link from "next/link";

export default function Footer({ onModalOpen }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="dev-credit-wrapper reveal reveal-active">
          <Link href="/" className="dev-credit-pill">
            <img src="/logo.png" alt="ChittorTech Logo" />
            <p>Developed & Maintained by <span>ChittorTech</span></p>
          </Link>
        </div>
        <p>&copy; 2026 ChittorTech Solutions Pvt Ltd. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '5px', color: 'var(--text-muted)' }}>Approved by iStart Rajasthan | Approved by MSME India</p>
        <div className="footer-links" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.85rem' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onModalOpen?.('privacy'); }} style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onModalOpen?.('terms'); }} style={{ color: 'var(--text-muted)' }}>Terms & Conditions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onModalOpen?.('refund'); }} style={{ color: 'var(--text-muted)' }}>Refund & Support</a>
        </div>
      </div>
    </footer>
  );
}
