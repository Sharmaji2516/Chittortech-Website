"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer({ onModalOpen }) {

  return (
    <footer style={{
      position: 'relative',
      width: '100%',
      background: '#ffffff',
      borderTop: '1px solid rgba(0, 62, 216, 0.08)',
      paddingTop: 'clamp(40px, 8vw, 80px)',
      paddingBottom: 'clamp(30px, 6vw, 48px)',
      overflow: 'hidden',
      zIndex: 10
    }}>
      {/* Subtle dot grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.03,
        backgroundImage: 'radial-gradient(rgba(0, 62, 216, 0.6) 1px, transparent 1px)',
        backgroundSize: '22px 22px'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Top CTA Block */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 64px auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#09090b',
            lineHeight: 1.25,
            letterSpacing: '-1px',
            marginBottom: '16px'
          }}>
            The Confidence experience of<br />
            building premium digital solutions.
          </h2>
          <p style={{
            color: '#52525b',
            fontSize: '1rem',
            lineHeight: 1.7,
            maxWidth: '480px',
            margin: '0 auto 32px auto'
          }}>
            Design fluid apps, scale enterprise web applications, and optimize search engine visibility with our expert engineering team.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            background: '#003ED8',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '14px 32px',
            borderRadius: '50px',
            textDecoration: 'none',
            transition: 'background 0.2s ease, transform 0.2s ease',
            boxShadow: '0 4px 15px rgba(0, 62, 216, 0.2)'
          }}>
            Start Your Project
          </Link>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0, 62, 216, 0.08)', marginBottom: '48px' }} />

        {/* Footer Columns Grid - 4 Columns Single Line */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '48px'
        }}>

          {/* Legal */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              color: '#09090b',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginBottom: '20px'
            }}>Legal</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a onClick={(e) => { e.preventDefault(); onModalOpen?.('privacy'); }} style={{ color: '#52525b', fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a onClick={(e) => { e.preventDefault(); onModalOpen?.('terms'); }} style={{ color: '#52525b', fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'none' }}>Terms of Service</a></li>
              <li><a onClick={(e) => { e.preventDefault(); onModalOpen?.('support'); }} style={{ color: '#52525b', fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'none' }}>Contact &amp; Support</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              color: '#09090b',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginBottom: '20px'
            }}>Services</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Web Development', href: '/services/web-development' },
                { name: 'Mobile App Dev', href: '/services/mobile-app-development' },
                { name: 'E-Commerce Setup', href: '/services/e-commerce-solutions' },
                { name: 'Custom Software', href: '/services/custom-software-development' },
                { name: 'AI Integration', href: '/services/ai-integration' },
              ].map(s => (
                <li key={s.name}><Link href={s.href} style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Global Markets */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              color: '#09090b',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginBottom: '20px'
            }}>Global Markets</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/offshore-software-development-usa" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>US Offshore Tech</Link></li>
              <li><Link href="/hire-react-native-developers" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>Hire React Native Devs</Link></li>
              <li><Link href="/custom-ai-solutions-dubai-uae" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>Dubai AI Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              color: '#09090b',
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginBottom: '20px'
            }}>Company</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/about" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link href="/services" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>Our Projects</Link></li>
              <li><Link href="/reviews" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>Reviews</Link></li>
              <li><Link href="/internship" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>Internship</Link></li>
              <li><Link href="/contact" style={{ color: '#52525b', fontSize: '0.875rem', textDecoration: 'none' }}>Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(0, 62, 216, 0.08)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0, textAlign: 'center' }}>
            &copy; 2026 ChittorTech. All rights reserved. Registered MSME | Made in India
          </p>
        </div>

      </div>
    </footer>
  );
}
