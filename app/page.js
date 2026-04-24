"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const featuredProjects = [
    {
      title: "Chittorgarh Tourism",
      category: "Tourism & Culture",
      description: "An immersive cultural tourism platform featuring interactive historical guides and virtual heritage tours.",
      image: "/assets/chittorgarh_fort.webp",
      link: "https://chittorgarh-tourism.vercel.app/"
    },
    {
      title: "Shaadi Sutra",
      category: "Event Planning",
      description: "A luxurious wedding management portal providing end-to-end event coordination and bespoke bridal services.",
      image: "/assets/shaadi_sutra_official.png",
      link: "https://shaadi-sutra.vercel.app/"
    },
    {
      title: "Jain Dharamshala",
      category: "Hospitality & Religious",
      description: "A comprehensive Real-time Dharamshala Management System featuring live room availability tracking.",
      image: "/assets/jain_dharamshala.png",
      link: "https://jain-dharamsala.vercel.app/#rooms"
    }
  ];

  return (
    <>
      <header className="hero" id="home">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        
        <div className="container hero-content">
          <div className="hero-label reveal">
            <span className="badge"><i className="fas fa-certificate"></i> iStart Approved & MSME Approved</span>
          </div>
          <h1 className="reveal">Architecting the New <span>Digital</span> Standard.</h1>
          <p className="hero-description reveal">
            ChittorTech engineers premium digital products with a focus on high-performance architecture and modern user experiences.
          </p>
          <div className="hero-actions reveal">
            <Link href="/projects" className="btn btn-primary magnetic">Explore Work</Link>
            <Link href="/about" className="btn btn-outline">The Vision</Link>
          </div>
        </div>
      </header>

      <section id="featured-projects">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <h2 className="section-title reveal" style={{ margin: 0, textAlign: 'left' }}>Featured Work</h2>
            <Link href="/projects" className="project-link reveal">View All Projects <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <h2 className="section-title reveal">Built for Scale</h2>
          <div className="feature-stats">
            <div className="feature-card reveal">
              <i className="fas fa-bolt"></i>
              <h3>Startup Speed</h3>
              <p>Agile development cycles that bring your product to market in record time.</p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-shield-halved"></i>
              <h3>Enterprise Quality</h3>
              <p>Rigorous engineering standards that ensure stability at scale.</p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-user-tie"></i>
              <h3>Founder-Led</h3>
              <p>Direct collaboration with our core leadership for precision.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '6rem' }} className="reveal">
            <Link href="/about" className="btn btn-outline">Learn Why We're Different</Link>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="container">
          <div className="istart-container cta-container reveal" style={{ textAlign: 'center' }}>
            <h2 className="cta-heading">Ready to Scale?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Let's engineer your digital success story together. Get a premium proposal within 24 hours.
            </p>
            <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>

      {/* Modals are still available via Footer callbacks if needed, or kept here for Home page specific links */}
      {/* ... (Modals logic could be moved to a shared component if they appear on all pages) */}
    </>
  );
}
