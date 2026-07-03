"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";

export default function ProjectsPage() {
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

  const projects = [
    {
      title: "Chittorgarh Tourism Ecosystem",
      category: "Tourism Websites",
      description: "A high-authority multi-lingual tourism ecosystem featuring heritage safety systems, interactive cultural discovery tools, and digital exploration guides for India's historic fort city.",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600",
      link: "https://chittorgarh-tourism.in/"
    },
    {
      title: "Premium Booking & Stay Network",
      category: "Hotel Management Portal",
      description: "A comprehensive booking platform and stay ecosystem. Facilitates real-time reservation scheduling, transparent room selection, and high-performance load times for travelers.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      link: "https://jain-dharamsala-front.vercel.app/"
    },
    {
      title: "SaaS Enterprise Booking Hub",
      category: "Enterprise Management System",
      description: "Robust enterprise administrative control center for accommodation complexes. Features live room inventory analytics, automated invoicing, guest ledger compliance, and staff shift control.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      link: "https://dharamsala-admin-portal.vercel.app/"
    },
    {
      title: "Shaadi Sutra SaaS",
      category: "Luxury Event Infrastructure",
      description: "Dedicated Software-as-a-Service system for premier wedding organizers and event planners. Built with customer management modules, vendor sync networks, and complex multi-venue timelines.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
      link: "https://shaadi-sutra.vercel.app/"
    },
    {
      title: "Mewari Achaar AI E-Commerce",
      category: "Heritage Commerce & AI",
      description: "Global e-commerce architecture scaling traditional Indian heritage foods. Fully integrated with context-persistent custom AI customer care bots operating over WhatsApp API.",
      image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=600",
      link: "https://www.mewari-achar.shop/"
    },
    {
      title: "Mewari Achaar Android Application",
      category: "Native Mobile App",
      description: "Premium native Android application built in Kotlin. Features a fluid Lottie-animated user interface, secure Firebase authentication, Firestore cloud sync, Glide image rendering, and background synchronization queues.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      link: "#",
      status: "Closed Testing (Launching Soon)"
    },
    {
      title: "MailPulse Elite Engine",
      category: "Marketing Infrastructure",
      description: "High-throughput enterprise bulk dispatch and SMTP delivery network. Features real-time server tracking, detailed receipt logs, and interactive console nodes.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600",
      link: "https://smtp-server-kohl.vercel.app/"
    },
    {
      title: "Cafes Website",
      category: "Cafes Website",
      description: "A sophisticated dining discovery solution incorporating interactive visual menus, mobile table scheduling, and automated contactless ordering pipelines.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
      link: "https://cafe-s-website.vercel.app/"
    },
    {
      title: "Professional Portfolios",
      category: "Professional Portfolios",
      description: "A premium digital authority and scheduling portfolio designed for executive consultants, featuring highly intuitive intake scheduling and credential showcase hubs.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600",
      link: "https://anju-mathur-counselling.vercel.app/"
    },
    {
      title: "Websites for local E-Commerce businesses",
      category: "Websites for local E-Commerce businesses",
      description: "A tailored hyper-local retail portal designed to bridge traditional Kirana goods with the international digital ecosystem, implementing automated checkout pipelines.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600",
      link: "https://www.chittorgarhsonu.website/"
    },
    {
      title: "NotebookLLM & AI Content Pipelines",
      category: "Artificial Intelligence",
      description: "Automated high-scale enterprise content synthesis and semantic processing clusters running modern large language models for hyper-efficient business logic automation.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      link: "https://chittortech.online/services#ai"
    }
  ];

  return (
    <div style={{ background: 'var(--bg-dark)', color: 'var(--text-main)', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Scroll Progress Indicator */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, height: '4px', background: 'var(--gradient)', 
        width: `${scrollProgress}%`, zIndex: 9999, transition: 'width 0.1s ease-out' 
      }} />

      {/* Hero Section */}
      <section className="section-portfolio" style={{ padding: '140px 0 80px', borderBottom: '1px solid rgba(0,62,216,0.05)', overflow: 'hidden', position: 'relative' }}>
        <NeuralBackground />
        <div className="mesh-gradient" style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(0, 62, 216, 0.05) 0%, transparent 50%)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-header-saas reveal reveal-active" style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
            <span className="badge-premium" style={{ 
              margin: '0 auto 1rem auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              background: 'rgba(0, 62, 216, 0.05)',
              border: '1px solid rgba(0, 62, 216, 0.1)',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--primary)'
            }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block' }}></span>
              PRODUCTION PORTFOLIO
            </span>
            <h2 className="display-title-saas" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--text-main)' }}>
              ChittorTech Live <span>Projects Network</span>
            </h2>
            <p style={{ maxWidth: '800px', margin: '1.5rem auto 0 auto', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              Explore our production-grade live architectures engineered for absolute performance, high-conversion rates, and robust scalability. These real-world applications define market leadership.
            </p>
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2.5rem',
            marginTop: '2rem',
            width: '100%'
          }}>
            {projects.map((proj, idx) => (
              <div key={idx} className="service-card-saas reveal reveal-active" style={{ 
                height: '100%',
                background: '#ffffff',
                border: '1px solid rgba(0, 62, 216, 0.08)',
                borderRadius: '30px',
                boxShadow: 'var(--shadow-soft)',
                overflow: 'hidden'
              }}>
                <div className="service-card-inner" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                  <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '200px', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    marginBottom: '1.5rem', 
                    border: '1px solid rgba(0, 62, 216, 0.08)' 
                  }}>
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: '12px', 
                      left: '12px', 
                      background: 'rgba(255, 255, 255, 0.95)', 
                      padding: '6px 14px', 
                      borderRadius: '50px', 
                      fontSize: '0.75rem', 
                      fontWeight: '800', 
                      border: '1px solid rgba(0, 62, 216, 0.1)', 
                      color: 'var(--primary)' 
                    }}>
                      {proj.category}
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
                    {proj.title}
                  </h3>
                  
                  <p className="service-desc" style={{ 
                    color: 'var(--text-muted)', 
                    fontSize: '1rem', 
                    lineHeight: '1.7', 
                    marginBottom: '2rem', 
                    flex: 1 
                  }}>
                    {proj.description}
                  </p>
                  
                  {proj.status ? (
                    <div 
                      className="btn"
                      style={{ 
                        width: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        padding: '12px', 
                        fontSize: '0.95rem',
                        fontWeight: '800',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        cursor: 'default',
                        border: '1px solid rgba(0, 62, 216, 0.2)',
                        color: 'var(--primary)',
                        background: 'rgba(0, 62, 216, 0.03)'
                      }}
                    >
                      <span>{proj.status}</span>
                      <i className="fas fa-flask"></i>
                    </div>
                  ) : (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ 
                        width: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        padding: '12px', 
                        fontSize: '0.95rem',
                        fontWeight: '800',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        color: '#ffffff'
                      }}
                    >
                      <span>Launch Live Application</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Back to Services CTA */}
          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link href="/services" className="btn btn-outline" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '12px 30px', 
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700'
            }}>
              <i className="fas fa-arrow-left"></i>
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
