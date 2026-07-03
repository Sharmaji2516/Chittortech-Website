"use client";

import React, { useState } from "react";
import Link from "next/link";
import NeuralBackground from "@/components/NeuralBackground";
import TechStack from "@/components/TechStack";
import ReviewMarquee from "@/components/ReviewMarquee";


export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const featuredServices = [
    {
      title: "Business & Corporate Websites",
      icon: "fa-globe",
      color: "#00d2ff",
      description: "Professional, lightning-fast, and fully mobile-responsive website architectures tailored for corporate brands and startups to establish a dominant online presence.",
      link: "/services"
    },
    {
      title: "Mobile App Development",
      icon: "fa-mobile-screen-button",
      color: "#ff9933",
      description: "High-performance native Android & iOS mobile applications engineered on Expo (React Native) and Kotlin for fluid user experience and offline support.",
      link: "/services"
    },
    {
      title: "E-Commerce Solutions",
      icon: "fa-cart-shopping",
      color: "#9d50bb",
      description: "Scale retail globally with robust e-commerce architectures, real-time stock sync systems, and secure multi-currency payment gateway integrations.",
      link: "/services"
    },
    {
      title: "Digital Marketing & Growth",
      icon: "fa-chart-line",
      color: "#00ff88",
      description: "Explosive lead generation campaigns, optimized Meta/Google Ad management, and high-performance search engine optimization to dominate google rankings.",
      link: "/services"
    },
    {
      title: "Creative Graphics & Branding",
      icon: "fa-paint-brush",
      color: "#ff9933",
      description: "Bespoke visual brand identities, vector logos, and engaging social creatives tailored to give your business a modern premium corporate voice.",
      link: "/services"
    },
    {
      title: "Custom Software & Web Apps",
      icon: "fa-code",
      color: "#ff4b2b",
      description: "Tailor-made software architectures, enterprise CRMs, admin workflows, and custom API systems engineered for absolute performance.",
      link: "/services"
    }
  ];


  return (
    <>
      <header className="hero" id="home">
        <NeuralBackground />
        
        <div className="container hero-content">
          <div className="hero-label reveal" style={{ paddingTop: '1.5rem' }}>
            <div className="marquee-wrapper">
              <div className="marquee-content">
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>⚡ PREMIUM WEBSITE DEVELOPMENT</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>🚀 BEST SAAS ARCHITECTURE</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>🤖 AI BUSINESS AUTOMATION</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>💬 REAL-TIME CHATBOTS</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>🌍 NEXT-GEN DIGITAL SOLUTIONS</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>⚡ PREMIUM WEBSITE DEVELOPMENT</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>🚀 BEST SAAS ARCHITECTURE</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>🤖 AI BUSINESS AUTOMATION</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>💬 REAL-TIME CHATBOTS</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
                <span className="marquee-text" style={{ color: 'var(--text-main)' }}>🌍 NEXT-GEN DIGITAL SOLUTIONS</span>
                <span className="marquee-text" style={{ opacity: 0.5, color: 'var(--primary)' }}>•</span>
              </div>
            </div>
          </div>
          <h1 className="reveal" style={{ color: 'var(--text-main)' }}>Best <span>IT Company</span> in Chittorgarh. <br/>Crafted for India</h1>
          <p className="hero-description reveal" style={{ color: 'var(--text-muted)' }}>
            ChittorTech is the leading IT company and web development agency in Chittorgarh, specializing in high-performance digital solutions and modern software architecture.
          </p>
          <div className="hero-actions reveal">
            <Link href="/services" className="btn btn-primary magnetic" style={{ color: '#ffffff', borderRadius: '50px' }}>Explore Solutions</Link>
            <Link href="/about" className="btn btn-outline" style={{ borderRadius: '50px' }}>The Vision</Link>
          </div>
        </div>
      </header>

      <section id="featured-services" style={{ padding: '120px 0', background: 'transparent', position: 'relative' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '5rem',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', 
              fontWeight: '900', 
              margin: 0,
              letterSpacing: '-2px',
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Featured Solutions</h2>
            <Link href="/services" className="project-link reveal" style={{ margin: 0, fontSize: '1rem' }}>
              View All Services <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
            </Link>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', 
            gap: '2.5rem',
            width: '100%',
            justifyContent: 'center'
          }}>
            {featuredServices.map((service, index) => (
              <div key={index} className="reveal card-hover-shadow" style={{ 
                textAlign: 'left', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%', 
                padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)', 
                background: '#ffffff', 
                border: '1px solid rgba(0, 62, 216, 0.08)', 
                borderRadius: 'clamp(24px, 4vw, 40px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)'
              }}>
                <div style={{ 
                  color: service.color, 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
                  marginBottom: 'clamp(1rem, 3vw, 2rem)',
                  background: `${service.color}12`,
                  width: '70px',
                  height: '70px',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: '900', marginBottom: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: '1.7', marginBottom: 'clamp(1.5rem, 4vw, 3rem)', flex: 1 }}>
                  {service.description}
                </p>
                <Link href={service.link} style={{ 
                  color: service.color, 
                  fontWeight: '800', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                  width: 'fit-content',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  <span style={{ borderBottom: `2px solid ${service.color}40`, paddingBottom: '4px' }}>View Service Page</span>
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    background: `${service.color}15`,
                    fontSize: '0.7rem',
                    transition: 'transform 0.3s ease'
                  }} className="chevron-icon-wrapper">
                    <i className="fas fa-chevron-right" style={{ transform: 'translateX(1px)' }}></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />


      <ReviewMarquee />

    </>
  );
}
