"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projects = [
  {
    title: "Chittorgarh Tourism",
    category: "Tourism",
    description: "An immersive cultural tourism platform featuring interactive historical guides and virtual heritage tours for an unparalleled digital exploration of Chittorgarh.",
    image: "/assets/chittorgarh_fort.webp",
    link: "https://chittorgarh-tourism.vercel.app/"
  },
  {
    title: "Cafe S Website",
    category: "E-Commerce",
    description: "A sophisticated digital hospitality solution for Cafe S, integrating a dynamic visual menu and a seamless online ordering system for a premium cafe experience.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
    link: "https://cafe-s-website.vercel.app/"
  },
  {
    title: "Shaadi Sutra",
    category: "Hospitality",
    description: "A luxurious wedding management portal providing end-to-end event coordination, vendor management, and bespoke bridal services with meticulous attention to detail.",
    image: "/assets/shaadi_sutra_official.png",
    link: "https://shaadi-sutra.vercel.app/"
  },
  {
    title: "Jain Dharamshala",
    category: "Management",
    description: "A comprehensive Real-time Dharamshala Management System featuring live room availability tracking, automated booking allotment, and instant billing solutions.",
    image: "/assets/jain_dharamshala.png",
    link: "https://jain-dharamsala.vercel.app/#rooms"
  },
  {
    title: "Mehndi Artist Portfolio",
    category: "Portfolio",
    description: "An intuitive online booking platform designed for professional mehndi artists, enabling seamless appointment scheduling for bridal and cultural events.",
    image: "/assets/mehndi_artist.png",
    link: "https://mehendi-website.vercel.app/"
  },
  {
    title: "Mewari Aachar Shop",
    category: "E-Commerce",
    description: "A robust e-commerce storefront for a traditional pickle business, featuring authentic flavors with integrated online ordering and secure payments.",
    image: "/assets/aachar_business.png",
    link: "https://www.mewari-achar.shop/"
  },
  {
    title: "Professional Portfolio",
    category: "Portfolio",
    description: "A sophisticated portfolio website designed to showcase technical expertise, academic background, and a diverse range of creative projects.",
    image: "/assets/portfolio.png",
    link: "https://portfolio-six-smoky-vhgmd7wfta.vercel.app/"
  },
  {
    title: "Luxury Hotel Site",
    category: "Hospitality",
    description: "A premium and responsive frontend design for a luxury hotel, showcasing elegant layouts, seamless animations, and a high-end visual aesthetic.",
    image: "/assets/hotels_website.png",
    link: "https://hotel-website-eight-flax.vercel.app/"
  }
];

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      {/* Premium Hero Section */}
      <section className="projects-hero" style={{
        padding: '120px 0 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 100%, rgba(0, 210, 255, 0.05) 0%, transparent 70%)'
      }}>
        <div className="container">
          <div className="reveal">
            <span className="badge-mini" style={{ marginBottom: '1.5rem' }}>Our Work</span>
            <h1 className="display-title" style={{ 
              fontSize: 'clamp(1.8rem, 6vw, 4.5rem)', 
              marginBottom: '1.5rem',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}>
              Digital <span>Craftsmanship</span>
            </h1>
            <p className="about-description" style={{ margin: '0 auto 3rem', maxWidth: '700px', borderLeft: 'none', paddingLeft: 0 }}>
              From complex management systems to immersive digital experiences, we build solutions that redefine industry standards and drive technological excellence.
            </p>
          </div>
        </div>

        {/* Digital Grid Decoration */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          backgroundImage: 'radial-gradient(rgba(0, 210, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.3
        }}></div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" style={{ padding: '40px 0 120px', overflowX: 'hidden' }}>
        <div className="container">
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}

            {/* Dynamic Coming Soon Card */}
            <div className="project-card coming-soon-card reveal" style={{
              background: 'radial-gradient(at 0% 0%, rgba(0, 210, 255, 0.08) 0%, transparent 50%), radial-gradient(at 100% 100%, rgba(157, 80, 187, 0.08) 0%, transparent 50%), rgba(255, 255, 255, 0.01)',
              borderColor: 'rgba(0, 210, 255, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3rem',
              minHeight: '450px'
            }}>
              <i className="fas fa-rocket" style={{
                fontSize: '4rem',
                color: 'var(--primary)',
                marginBottom: '2.5rem',
                animation: 'pulse 2.5s infinite ease-in-out',
                filter: 'drop-shadow(0 0 20px rgba(0, 210, 255, 0.4))'
              }}></i>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '800' }}>Future Tech</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
                We are currently architecting the next wave of digital innovations. Revolutionary projects are in development and will be unveiled soon.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <span className="badge" style={{
                  background: 'var(--gradient)',
                  color: 'white',
                  padding: '0.6rem 1.5rem',
                  boxShadow: '0 10px 20px rgba(0, 210, 255, 0.2)'
                }}>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
            <h2 className="display-title" style={{ marginBottom: '1.5rem' }}>Ready to build your <span>vision?</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Let's collaborate to create something exceptional. Our team is ready to turn your ideas into a world-class reality.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
              Start Your Project <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
            </Link>

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
