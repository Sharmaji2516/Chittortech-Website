"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section id="about">
        <div className="container about-grid">
          <div className="about-text-content reveal">
            <div className="badge-mini"><i className="fas fa-eye"></i> Our Vision</div>
            <h2 className="display-title">Pioneering <span>Modern Tech</span> from India</h2>
            <p className="about-description">
              At ChittorTech, we believe in the power of code to transform reality. Approved by the **iStart program**, we specialize in delivering **premium quality work at a minimum cost**. We prioritize **rapid delivery** without compromising on excellence.
            </p>
            
            <div className="feature-stats-grid">
              <div className="m-feature-card">
                <div className="m-icon-wrapper blue"><i className="fas fa-hand-holding-dollar"></i></div>
                <div className="m-feature-info">
                  <h4>Min Cost</h4>
                  <p>Global Standards</p>
                </div>
              </div>
              <div className="m-feature-card">
                <div className="m-icon-wrapper purple"><i className="fas fa-award"></i></div>
                <div className="m-feature-info">
                  <h4>High Quality</h4>
                  <p>Premium Code</p>
                </div>
              </div>
              <div className="m-feature-card">
                <div className="m-icon-wrapper violet"><i className="fas fa-bolt"></i></div>
                <div className="m-feature-info">
                  <h4>Min Time</h4>
                  <p>Agile Delivery</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image-side reveal">
            <div className="workplace-wrapper">
              <div className="workplace-image">
                <img src="/assets/chittortech_workplace.png" alt="Tech Workplace" />
                <div className="floating-badge">
                  <i className="fas fa-microchip"></i>
                  <span>Innovative Workflow</span>
                </div>
              </div>
              <div className="experience-card reveal">
                <h3>99%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recognition">
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
    </main>
  );
}
