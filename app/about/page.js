"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section id="about" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="about-text-content reveal">
            <div className="badge-mini"><i className="fas fa-rocket"></i> Our Mission</div>
            <h2 className="display-title">Pioneering <span>Modern Tech</span> from India</h2>
            <p className="about-description">
              At ChittorTech, we believe in the power of code to transform reality. Officially approved by the <strong>iStart program</strong>, we specialize in delivering <strong>premium quality work</strong> at a minimum cost. We prioritize <strong>rapid delivery</strong> and agile execution to ensure your vision reaches the market with excellence.
            </p>
            
            <div className="feature-stats-grid">
              <div className="m-feature-card">
                <div className="m-icon-wrapper blue"><i className="fas fa-coins"></i></div>
                <div className="m-feature-info">
                  <h4>Min Cost</h4>
                  <p>Elite Standards</p>
                </div>
              </div>
              <div className="m-feature-card">
                <div className="m-icon-wrapper purple"><i className="fas fa-gem"></i></div>
                <div className="m-feature-info">
                  <h4>High Quality</h4>
                  <p>Premium Code</p>
                </div>
              </div>
              <div className="m-feature-card">
                <div className="m-icon-wrapper violet"><i className="fas fa-bolt-lightning"></i></div>
                <div className="m-feature-info">
                  <h4>Min Time</h4>
                  <p>Agile Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recognition" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="istart-container reveal">
            <div className="istart-header">
              <h2>Recognized by <span className="text-gradient">iStart Rajasthan</span></h2>
              <p>Official Government of Rajasthan Startup Initiative</p>
            </div>
            
            <div className="istart-stats-grid">
              <div className="istart-stat-card">
                <div className="istart-icon blue"><i className="fas fa-industry"></i></div>
                <div className="istart-info">
                  <h4>Industry</h4>
                  <p>IT Services</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon purple"><i className="fas fa-chart-line"></i></div>
                <div className="istart-info">
                  <h4>Stage</h4>
                  <p>Pre Seed</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon violet"><i className="fas fa-list-ol"></i></div>
                <div className="istart-info">
                  <h4>QRate Score</h4>
                  <p>0</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon blue"><i className="fas fa-id-card"></i></div>
                <div className="istart-info">
                  <h4>Startup Id</h4>
                  <p>05F896CE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose">
        <div className="container">
          <h2 className="section-title reveal">Why Choose ChittorTech?</h2>
          <div className="feature-stats">
            <div className="feature-card reveal">
              <i className="fas fa-bolt"></i>
              <h3>Startup Speed</h3>
              <p>Agile development cycles that bring your product to market in record time.</p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-shield-halved"></i>
              <h3>Enterprise Quality</h3>
              <p>Rigorous engineering standards that ensure stability and performance at scale.</p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-user-tie"></i>
              <h3>Founder-Led Execution</h3>
              <p>Direct collaboration with our core leadership for strategic alignment and precision.</p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-tags"></i>
              <h3>Affordable Premium</h3>
              <p>World-class digital solutions delivered at a fraction of traditional agency costs.</p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-chart-line"></i>
              <h3>Growth Focused</h3>
              <p>Every line of code is engineered for conversion and market dominance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Conversion CTA Section */}
      <section className="cta-section" style={{ padding: '100px 0', position: 'relative' }}>
        <div className="container">
          <div className="reveal" style={{ 
            background: 'var(--bg-card)', 
            padding: '5rem 3rem', 
            borderRadius: '40px', 
            border: '1px solid var(--glass-border)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 className="display-title" style={{ marginBottom: '1.5rem' }}>Start Your <span>Digital Journey</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Experience the ChittorTech difference. Let's collaborate to build world-class technology that drives your growth and dominates the market.
            </p>
            <a href="/contact" className="btn btn-primary" style={{ 
              display: 'inline-block',
              padding: '1.2rem 3rem', 
              fontSize: '1.1rem',
              borderRadius: '50px',
              textDecoration: 'none'
            }}>
              Connect With Us <i className="fas fa-paper-plane" style={{ marginLeft: '10px' }}></i>
            </a>
            
            {/* Glow effect */}
            <div style={{ 
              position: 'absolute', 
              top: '-50%', 
              left: '-50%', 
              width: '200%', 
              height: '200%', 
              background: 'radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, transparent 60%)',
              pointerEvents: 'none'
            }}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
