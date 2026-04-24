"use client";

import NeuralBackground from "@/components/NeuralBackground";

export default function TeamPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <section id="team" className="team-section">
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
                  <img src="/assets/kush_sharma.jpg" alt="Kush Sharma" />
                </div>
                <div className="team-info">
                  <h3>Kush Sharma</h3>
                  <p className="role">Founder</p>
                </div>
              </div>
              <p className="team-bio">
                Kush Sharma is a visionary Software Engineer and the Founder of ChittorTech. A 2025 B.Tech IT graduate from JECRC Foundation with an impressive 8.90 CGPA, he specializes in Generative AI and robust backend systems using LangChain, Node.js, and MongoDB. He has a proven track record of building intelligent AI-powered solutions, including RAG systems and automation agents. Alongside leading ChittorTech, he contributes as a Technical Contributor to the Chittorgarh Tourism portal.
              </p>
              <div className="team-contact">
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
                  <img src="/assets/lav_sharma.jpg" alt="Lav Sharma" />
                </div>
                <div className="team-info">
                  <h3>Lav Sharma</h3>
                  <p className="role">Director</p>
                </div>
              </div>
              <p className="team-bio">
                Lav Sharma is the Director and lead AI Full Stack Developer at ChittorTech. A 2025 B.Tech IT graduate from JECRC Foundation with an 8.52 CGPA, he brings deep expertise in full-stack web development, specializing in Node.js, Express.js, and MongoDB. Lav has a passion for building AI-assisted digital platforms, evidenced by his successful deployment of multiple business websites and interactive portals. He also serves as a Technical Contributor for Rajasthan Tourism.
              </p>
              <div className="team-contact">
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
    </main>
  );
}
