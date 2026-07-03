"use client";

import React from "react";
import Image from "next/image";
import NeuralBackground from "@/components/NeuralBackground";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '0px' }}>
      <section id="about" style={{ padding: '160px 0 60px', background: 'radial-gradient(circle at top right, rgba(0, 62, 216, 0.05), transparent 50%)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="about-text-content reveal">
            <div className="badge-mini"><i className="fas fa-rocket"></i> Our Mission</div>
            <h2 className="display-title">Pioneering <span>Modern Tech</span> from India</h2>
            <p className="about-description">
              At ChittorTech, we are the <strong>best IT company in Chittorgarh</strong>, committed to transforming reality through the power of code. Officially approved by the <strong>iStart program</strong>, we specialize in delivering <strong>premium quality work</strong> at a minimum cost. We prioritize <strong>rapid delivery</strong> and agile execution to ensure your vision reaches the market with excellence.
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

      {/* Meet the Team Section */}
      <section id="team" className="team-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <NeuralBackground />
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="display-title" style={{ marginBottom: '1rem' }}>Meet the <span>Leadership</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>The visionaries behind ChittorTech's digital excellence.</p>
          </div>

          <div className="team-grid">
            {/* Kush Sharma */}
            <div className="team-profile-card reveal">
              <div className="team-header">
                <div className="team-img-wrapper">
                  <Image 
                    src="/assets/kush_sharma.jpg" 
                    alt="Kush Sharma - Founder of ChittorTech IT Company in Chittorgarh" 
                    width={120} 
                    height={120} 
                  />
                </div>
                <div className="team-info">
                  <h3>Kush Sharma</h3>
                  <p className="role">Founder</p>
                </div>
              </div>
              <p className="team-bio">
                Kush Sharma is a visionary Software Engineer and the Founder of ChittorTech. A 2025 B.Tech IT graduate from JECRC Foundation with an impressive 8.90 CGPA, he specializes in Generative AI and robust backend systems using LangChain, Node.js, and MongoDB. He has a proven track record of building intelligent AI-powered solutions, including RAG systems and automation agents.
              </p>
              <div className="team-contact" style={{ marginTop: 'auto' }}>
                <a href="https://www.linkedin.com/in/kush-sharma-9721a02ab/" className="contact-item" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="mailto:kushsharma.cor@gmail.com" className="contact-item">
                  <i className="fas fa-envelope"></i> kushsharma.cor@gmail.com
                </a>
              </div>
            </div>

            {/* Lav Sharma */}
            <div className="team-profile-card reveal">
              <div className="team-header">
                <div className="team-img-wrapper">
                  <Image 
                    src="/assets/lav_sharma.jpg" 
                    alt="Lav Sharma - Co-Founder at ChittorTech IT Company in Chittorgarh" 
                    width={120} 
                    height={120} 
                  />
                </div>
                <div className="team-info">
                  <h3>Lav Sharma</h3>
                  <p className="role">Co-Founder</p>
                </div>
              </div>
              <p className="team-bio">
                Lav Sharma is the Co-Founder and lead AI Full Stack Developer at ChittorTech. A 2025 B.Tech IT graduate from JECRC Foundation with an 8.52 CGPA, he brings deep expertise in full-stack web development, specializing in Node.js, Express.js, and MongoDB. Lav has a passion for building AI-assisted digital platforms and interactive portals.
              </p>
              <div className="team-contact" style={{ marginTop: 'auto' }}>
                <a href="https://www.linkedin.com/in/lav-sharma-a9919b2ab/" className="contact-item" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="mailto:lavsharma.cor@gmail.com" className="contact-item">
                  <i className="fas fa-envelope"></i> lavsharma.cor@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recognition" style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div className="istart-container reveal">
            <div className="istart-header">
              <h2>Recognized by <span className="text-gradient">iStart Rajasthan</span></h2>
              <p>Official Government of Rajasthan Startup Initiative</p>
            </div>

            <div className="istart-stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div className="istart-stat-card">
                <div className="istart-icon blue"><i className="fas fa-industry"></i></div>
                <div className="istart-info">
                  <h4>Industry</h4>
                  <p>IT Services</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon bronze"><i className="fas fa-medal"></i></div>
                <div className="istart-info">
                  <h4>Rating</h4>
                  <p>Bronze Card</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon violet"><i className="fas fa-list-ol"></i></div>
                <div className="istart-info">
                  <h4>QRate Score</h4>
                  <p>16</p>
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

          <div className="istart-container reveal">
            <div className="istart-header">
              <h2>Recognized by <span className="text-gradient">Startup India</span></h2>
              <p>Official Government of India Initiative (DPIIT)</p>
            </div>
            
            <div className="istart-stats-grid">
              <div className="istart-stat-card">
                <div className="istart-icon blue"><i className="fas fa-user-tie"></i></div>
                <div className="istart-info">
                  <h4>Role</h4>
                  <p>Startup Founder</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon purple"><i className="fas fa-certificate"></i></div>
                <div className="istart-info">
                  <h4>BHASKAR ID</h4>
                  <p>IN-0426-9449SG</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon violet"><i className="fas fa-globe"></i></div>
                <div className="istart-info">
                  <h4>Network</h4>
                  <p>BHASKAR</p>
                </div>
              </div>
              <div className="istart-stat-card">
                <div className="istart-icon blue"><i className="fas fa-layer-group"></i></div>
                <div className="istart-info">
                  <h4>Sectors</h4>
                  <p>IT, SaaS & Tourism</p>
                </div>
              </div>
            </div>
          </div>

          <div className="istart-container reveal">
            <div className="istart-header">
              <h2>Our <span className="text-gradient">Digital Footprint</span></h2>
              <p>Verified Presence Across Major Platforms</p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', width: '100%' }}>
              <div className="istart-stat-card" style={{ flex: '1 1 200px', maxWidth: '260px' }}>
                <div className="istart-icon violet"><i className="fas fa-globe"></i></div>
                <div className="istart-info">
                  <h4>Official Website</h4>
                  <p>Live & Operational</p>
                  <a href="/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', marginTop: '8px', color: '#FF9933', fontSize: '0.75rem', fontWeight: 'bold', textDecoration: 'none' }}>Click here to see this <i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
              <div className="istart-stat-card" style={{ flex: '1 1 200px', maxWidth: '260px' }}>
                <div className="istart-icon blue"><i className="fab fa-google-play"></i></div>
                <div className="istart-info">
                  <h4>Google Developer</h4>
                  <p>Play Store Publisher</p>
                </div>
              </div>
              <div className="istart-stat-card" style={{ flex: '1 1 200px', maxWidth: '260px' }}>
                <div className="istart-icon bronze"><i className="fas fa-store"></i></div>
                <div className="istart-info">
                  <h4>Google Business</h4>
                  <p>Verified Profile</p>
                  <a href="https://www.google.co.in/search?q=chittortech" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', marginTop: '8px', color: '#FF9933', fontSize: '0.75rem', fontWeight: 'bold', textDecoration: 'none' }}>Click here to see this <i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
              <div className="istart-stat-card" style={{ flex: '1 1 200px', maxWidth: '260px' }}>
                <div className="istart-icon purple"><i className="fas fa-medal"></i></div>
                <div className="istart-info">
                  <h4>iStart Rajasthan</h4>
                  <p>Registered Startup</p>
                  <a href="https://istart.rajasthan.gov.in/profile/11478/startups" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', marginTop: '8px', color: '#FF9933', fontSize: '0.75rem', fontWeight: 'bold', textDecoration: 'none' }}>Click here to see this <i className="fas fa-external-link-alt"></i></a>
                </div>
              </div>
              <div className="istart-stat-card" style={{ flex: '1 1 200px', maxWidth: '260px' }}>
                <div className="istart-icon blue"><i className="fab fa-linkedin"></i></div>
                <div className="istart-info">
                  <h4>LinkedIn</h4>
                  <p>Company Page</p>
                  <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', marginTop: '8px', color: '#FF9933', fontSize: '0.75rem', fontWeight: 'bold', textDecoration: 'none' }}>Click here to see this <i className="fas fa-external-link-alt"></i></a>
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
            <div className="feature-card reveal">
              <i className="fas fa-handshake"></i>
              <h3>Dedicated Support</h3>
              <p>Continuous technical assistance and maintenance to keep your digital assets running flawlessly.</p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
