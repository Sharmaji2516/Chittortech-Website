"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";

export default function Services() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreServices = [
    {
      title: "SaaS & Enterprise Systems",
      slug: "saas-development",
      icon: "fa-layer-group",
      color: "#003ED8",
      outcome: "Infinite Scalability",
      description: "Custom Software-as-a-Service platforms. Including Event Management, Hospitality Admin Hubs, and Smart QR Infrastructure.",
      details: ["Real-time Inventory", "Vendor Coordination", "Automated Billing"],
      externalLink: "https://jain-dharamsala-front.vercel.app/",
      externalLinkNote: "Best viewed in mobile",
      backendLink: "https://dharamsala-admin-portal.vercel.app/",
      backendLinkNote: "Best viewed in desktop site"
    },
    {
      title: "Custom Web & E-Commerce",
      slug: "custom-web-development",
      icon: "fa-cart-shopping",
      color: "#003ED8",
      outcome: "Premium Digital Identity",
      description: "High-performance online stores and websites featuring real-time stock sync. Elevating local heritage brands to global reach.",
      details: ["Live Stock Sync", "Edge Runtime", "Next.js Architecture"],
      externalLink: "https://www.chittorgarhsonu.website/",
      externalLinkNote: "Best viewed in mobile",
      backendLink: "https://www.chittorgarhsonu.website/login.html",
      backendLinkNote: "Best viewed in mobile"
    },
    {
      title: "Custom AI Chatbots & RAG",
      icon: "fa-robot",
      color: "#003ED8",
      outcome: "24/7 Intelligent Support",
      description: "We architect custom AI assistants using RAG to answer domain-specific queries with persistence and precision.",
      details: ["RAG Architecture", "Context Persistence", "System Prompts"],
      externalLink: "https://www.mewari-achar.shop/",
      externalLinkNote: "* Visit site, click WhatsApp icon for live AI Chatbot."
    },
    {
      title: "High-Converting Landing Pages",
      icon: "fa-file-lines",
      color: "#003ED8",
      outcome: "Boosted Lead Generation",
      description: "Designing focused, single-page sites strategically crafted to capture leads and drive specific product sales.",
      details: ["A/B Tested Layouts", "Lead Capture Forms", "Fast Loading"]
    }
  ];

  const comparisonData = [
    { f: "Launch Speed", a: "Slow (3-6 Months)", c: "Rapid (2-4 Weeks)" },
    { f: "AI & Intelligence", a: "Manual Workflows", c: "Automated AI Systems" },
    { f: "Google Ranking (SEO)", a: "Basic Visibility", c: "Top-Tier Performance" },
    { f: "Future Scalability", a: "Rigid Systems", c: "Infinite Growth Ready" },
    { f: "Founder Support", a: "Ticket Support", c: "Direct Access to Experts" }
  ];

  return (
    <div style={{ background: 'var(--bg-dark)', color: 'var(--text-main)', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Scroll Progress Indicator */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, height: '4px', background: 'var(--gradient)', 
        width: `${scrollProgress}%`, zIndex: 9999, transition: 'width 0.1s ease-out' 
      }} />

      {/* Portfolio Showcase Section */}
      <section className="section-portfolio" style={{ padding: '140px 0 80px', borderBottom: '1px solid rgba(0,62,216,0.05)', overflow: 'hidden', position: 'relative' }}>
        <NeuralBackground />
        <div className="mesh-gradient"></div>
        <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-header-saas reveal reveal-active" style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
            <span className="badge-premium" style={{ margin: '0 auto 1rem auto' }}>
              <div className="pulse-dot"></div>
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="display-title-saas" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-main)' }}>
              ChittorTech – <span>Empowering Businesses with Elite Digital Solutions</span>
            </h2>
            <p style={{ maxWidth: '800px', margin: '1.5rem auto 0 auto', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              At ChittorTech, based in Chittorgarh (Rajasthan), we don't just build ordinary websites. We engineer stunning digital identities and highly scalable software architectures for your brand. Our expert engineering team has successfully delivered modern, secure, and high-performance digital solutions across diverse industries.
            </p>
          </div>

          {/* Work Highlights as Distinct Sections */}
          
          {/* Section 1: Business & Corporate Websites */}
          <section className="highlight-section" style={{ padding: '60px 0', borderBottom: '1px solid rgba(0,62,216,0.05)' }}>
            <div style={{ display: 'flex', gap: '3rem', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 350px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                  <div style={{ height: '50px', width: '50px', borderRadius: '12px', background: 'rgba(0,62,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: '900', color: 'var(--text-main)', margin: 0 }}>
                    Business & Corporate Websites
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  We design and engineer professional, lightning-fast, and fully mobile-responsive website architectures tailored for startups, small businesses, and corporate brands trying to establish a dominant online presence.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {["Company Profile Websites", "Service-Based Websites", "Premium Portfolio Websites"].map((pill, idx) => (
                    <span key={idx} style={{ padding: '8px 16px', borderRadius: '50px', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', fontSize: '0.9rem', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-soft)' }}>
                      <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}></i> {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', borderRadius: '24px', width: '100%', maxWidth: '400px', boxShadow: 'var(--shadow-soft)' }}>
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '800' }}>Key Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                    <li><i className="fas fa-bolt" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> 99+ Speed Score Optimization</li>
                    <li><i className="fas fa-mobile-alt" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Pixel-Perfect Responsive Testing</li>
                    <li><i className="fas fa-search" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Built-in SEO Semantic Markup</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Mobile & Cross-Platform App Development */}
          <section className="highlight-section" style={{ padding: '60px 0', borderBottom: '1px solid rgba(0,62,216,0.05)' }}>
            <div style={{ display: 'flex', gap: '3rem', flexDirection: 'row-reverse', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 350px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                  <div style={{ height: '50px', width: '50px', borderRadius: '12px', background: 'rgba(0,62,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <i className="fas fa-mobile-screen-button"></i>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: '900', color: 'var(--text-main)', margin: 0 }}>
                    Mobile & Cross-Platform Apps
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  We engineer premium, native, and cross-platform mobile apps for Android & iOS. By combining cutting-edge frameworks like **Expo (React Native)** and languages like **Kotlin** with hardware optimizations, we deliver apps with breathtaking speed, offline persistence, and seamless cloud integrations.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                  {["Native Android & iOS Apps", "Lottie Vector Animations", "Expo (React Native) & Kotlin"].map((pill, idx) => (
                    <span key={idx} style={{ padding: '8px 16px', borderRadius: '50px', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', fontSize: '0.9rem', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-soft)' }}>
                      <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}></i> {pill}
                    </span>
                  ))}
                </div>
                
                {/* Live Case Study Spotlight */}
                <div style={{ padding: '1.5rem', background: 'rgba(0, 62, 216, 0.03)', border: '1px solid rgba(0, 62, 216, 0.1)', borderRadius: '20px' }}>
                  <h4 style={{ color: 'var(--primary)', margin: '0 0 0.5rem 0', fontWeight: '800', fontSize: '1.1rem' }}>
                    🔥 Featured Case Study: Mewari Achaar Android App
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0 0 1.2rem 0', lineHeight: '1.6' }}>
                    We engineered the official **Mewari Achaar** mobile app built in Kotlin. Features fluid Lottie vector animation modules, highly responsive Firestore databases, safe background sync operations, and secure Google Sign-in protocols.
                  </p>
                  <div style={{ color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: '800' }}>
                    <i className="fas fa-flask"></i>
                    <span>Currently Under Closed Testing (Launching Soon!)</span>
                  </div>
                </div>
              </div>
              
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', borderRadius: '24px', width: '100%', maxWidth: '400px', boxShadow: 'var(--shadow-soft)' }}>
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '800' }}>Premium Architecture</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                    <li><i className="fas fa-bolt" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> 60FPS Fluid Lottie UI Transitions</li>
                    <li><i className="fas fa-database" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Firestore Persistent Cloud Sync</li>
                    <li><i className="fas fa-shield-halved" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Google Auth & Secure API Nodes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: E-Commerce Solutions */}
          <section className="highlight-section" style={{ padding: '60px 0', borderBottom: '1px solid rgba(0,62,216,0.05)' }}>
            <div style={{ display: 'flex', gap: '3rem', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 350px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                  <div style={{ height: '50px', width: '50px', borderRadius: '12px', background: 'rgba(0,62,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: '900', color: 'var(--text-main)', margin: 0 }}>
                    E-Commerce Solutions
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  Scale your retail business globally with fully robust e-commerce solutions. From intuitive online stores to secure multi-currency payment gateway integrations, we provide everything needed to sell online.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {["Product Catalog Management", "Order & Inventory Systems", "Secure Online Payment Node"].map((pill, idx) => (
                    <span key={idx} style={{ padding: '8px 16px', borderRadius: '50px', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', fontSize: '0.9rem', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-soft)' }}>
                      <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}></i> {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', borderRadius: '24px', width: '100%', maxWidth: '400px', boxShadow: 'var(--shadow-soft)' }}>
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '800' }}>Store Integrations</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                    <li><i className="fas fa-lock" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> SSL Encrypted Checkout</li>
                    <li><i className="fas fa-tags" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Real-Time Inventory Control</li>
                    <li><i className="fas fa-credit-card" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Smooth Payment Gateways</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Custom Software & Web Applications */}
          <section className="highlight-section" style={{ padding: '60px 0', borderBottom: '1px solid rgba(0,62,216,0.05)' }}>
            <div style={{ display: 'flex', gap: '3rem', flexDirection: 'row-reverse', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: '1 1 350px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                  <div style={{ height: '50px', width: '50px', borderRadius: '12px', background: 'rgba(0,62,216,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: '900', color: 'var(--text-main)', margin: 0 }}>
                    Custom Software & Web Apps
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  We engineer tailor-made software architectures and bespoke web applications designed specifically to match your internal business logic, admin flows, and automation goals.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {["MLM & Business CRM Software", "Business Management Dashboards", "Custom Web Solutions"].map((pill, idx) => (
                    <span key={idx} style={{ padding: '8px 16px', borderRadius: '50px', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', fontSize: '0.9rem', color: 'var(--text-main)', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-soft)' }}>
                      <i className="fas fa-check" style={{ color: 'var(--primary)', fontSize: '0.8rem' }}></i> {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid rgba(0,62,216,0.08)', borderRadius: '24px', width: '100%', maxWidth: '400px', boxShadow: 'var(--shadow-soft)' }}>
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '800' }}>Tech Architecture</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                    <li><i className="fas fa-database" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Scalable Backend Engines</li>
                    <li><i className="fas fa-microchip" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Automated Admin Dashboards</li>
                    <li><i className="fas fa-sync" style={{ color: 'var(--primary)', marginRight: '8px' }}></i> Custom API System Integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose & Contact Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2.5rem',
            background: '#ffffff',
            border: '1px solid rgba(0, 62, 216, 0.08)',
            borderRadius: '24px',
            padding: 'clamp(1rem, 4vw, 2.5rem)',
            marginTop: '4rem',
            boxShadow: 'var(--shadow-soft)',
            width: '100%'
          }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: '800' }}>
                Why Choose ChittorTech?
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "100% Client Satisfaction Guarantee",
                  "Affordable Pricing for Modern Solutions",
                  "SEO & Mobile-Responsive Design Focus",
                  "On-Time Project Delivery & Launch",
                  "Dedicated Support & Continuous Maintenance"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    <i className="fas fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.2rem', marginTop: '2px' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: '800' }}>
                Ready to Discuss Your Project?
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Get in touch with our elite engineering team today to establish a dominant digital presence for your business.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)', width: '20px', textAlign: 'center', flexShrink: 0 }}></i>
                  <span style={{ color: 'var(--text-muted)' }}>Chittorgarh, Rajasthan, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', overflow: 'hidden' }}>
                  <i className="fas fa-envelope" style={{ color: 'var(--primary)', width: '20px', textAlign: 'center', flexShrink: 0 }}></i>
                  <a href="mailto:chittortech@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', wordBreak: 'break-all' }}>chittortech@gmail.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', overflow: 'hidden' }}>
                  <i className="fas fa-globe" style={{ color: 'var(--primary)', width: '20px', textAlign: 'center', flexShrink: 0 }}></i>
                  <a href="https://www.chittortech.online" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', wordBreak: 'break-all' }}>www.chittortech.online</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', overflow: 'hidden' }}>
                  <i className="fab fa-linkedin" style={{ color: 'var(--primary)', width: '20px', textAlign: 'center', flexShrink: 0 }}></i>
                  <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '600', wordBreak: 'break-all' }}>ChittorTech LinkedIn Page</a>
                </div>
              </div>
              
              <Link 
                href="/projects"
                className="btn btn-primary" 
                style={{ 
                  marginTop: '2rem', 
                  width: '100%', 
                  maxWidth: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '50px',
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
              >
                <span>View Our Particular Projects</span>
                <i className="fas fa-network-wired"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Why ChittorTech? */}
      <section className="section-comparison" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-header-saas reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="display-title-saas" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-main)' }}>ChittorTech vs <span>Agencies</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Why industry leaders choose our engineering over generic development.</p>
          </div>

          <div className="comparison-grid reveal">
            {/* Desktop Table - Hidden on Mobile */}
            <div className="comparison-table desktop-only">
              <div className="comp-row header">
                <div className="comp-feature">Feature</div>
                <div className="comp-agency">Typical Agency</div>
                <div className="comp-chittor">ChittorTech</div>
              </div>
              {comparisonData.map((row, i) => (
                <div key={i} className="comp-row">
                  <div className="comp-feature">{row.f}</div>
                  <div className="comp-agency">{row.a}</div>
                  <div className="comp-chittor"><span>{row.c}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - The Conversion Point */}
      <section className="section-final-cta" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="final-cta-card reveal">
            <h2 className="display-title-saas" style={{ color: 'var(--text-main)' }}>Ready to <span>Engineer</span> Your Future?</h2>
            <p style={{ color: 'var(--text-muted)' }}>Stop settling for standard. Let's build the system that defines your industry.</p>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: 'var(--primary)',
              color: '#ffffff',
              padding: 'clamp(0.8rem, 3vw, 1.2rem) clamp(1.5rem, 6vw, 3rem)',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              textDecoration: 'none',
              marginTop: '2rem',
              boxShadow: 'var(--shadow-soft)',
              transition: 'transform 0.3s ease, boxShadow 0.3s ease',
              width: 'fit-content'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Start Your Project Now <i className="fas fa-rocket"></i>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .mesh-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(0, 62, 216, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 30% 70%, rgba(0, 63, 222, 0.03) 0%, transparent 50%);
          z-index: 1;
        }
        .badge-premium {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          background: rgba(0, 62, 216, 0.05);
          border: 1px solid rgba(0, 62, 216, 0.1);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 2rem;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .display-title-saas { font-size: clamp(2rem, 5vw, 4rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 1rem; }
        .display-title-saas span { color: var(--primary); }

        .comparison-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .comparison-table.desktop-only {
          display: block;
          background: #ffffff;
          border-radius: 30px;
          border: 1px solid rgba(0, 62, 216, 0.08);
          overflow: hidden;
          box-shadow: var(--shadow-soft);
        }

        .comp-row { display: grid; grid-template-columns: 2fr 1.5fr 1.5fr; padding: 1.5rem 2rem; border-bottom: 1px solid rgba(0, 62, 216, 0.05); }
        .comp-row.header { background: rgba(0, 62, 216, 0.02); font-weight: 900; color: var(--text-main); text-transform: uppercase; font-size: 0.7rem; }
        .comp-feature { font-weight: 700; font-size: 0.9rem; color: var(--text-main); }
        .comp-agency { color: #64748b; font-size: 0.9rem; }
        .comp-chittor { color: var(--primary); font-weight: 800; font-size: 0.9rem; }
        .comp-chittor span { color: var(--primary); position: relative; }
        .comp-chittor span::after { content: '✓'; margin-left: 8px; }

        .final-cta-card {
          background: linear-gradient(135deg, rgba(0, 62, 216, 0.05), rgba(110, 72, 170, 0.03));
          border: 1px solid rgba(0, 62, 216, 0.08);
          border-radius: 50px;
          padding: 5rem 2rem;
          text-align: center;
          box-shadow: var(--shadow-soft);
        }

        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </div>
  );
}
