"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Scroll progress
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercent = (window.scrollY / height) * 100;
        scrollProgress.style.width = `${scrolledPercent}%`;
      }
    };

    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor-glow');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    // Close modal on escape
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const projects = [
    {
      title: "Chittorgarh Tourism",
      category: "Tourism & Culture",
      description: "An immersive cultural tourism platform featuring interactive historical guides and virtual heritage tours for an unparalleled digital exploration of Chittorgarh.",
      image: "/assets/chittorgarh_fort.webp",
      link: "https://chittorgarh-tourism.vercel.app/"
    },
    {
      title: "Cafe S Website",
      category: "E-Commerce & Food",
      description: "A sophisticated digital hospitality solution for Cafe S, integrating a dynamic visual menu and a seamless online ordering system for a premium cafe experience.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
      link: "https://cafe-s-website.vercel.app/"
    },
    {
      title: "Shaadi Sutra",
      category: "Event Planning",
      description: "A luxurious wedding management portal providing end-to-end event coordination, vendor management, and bespoke bridal services with meticulous attention to detail.",
      image: "/assets/shaadi_sutra_official.png",
      link: "https://shaadi-sutra.vercel.app/"
    },
    {
      title: "Jain Dharamshala",
      category: "Hospitality & Religious",
      description: "A comprehensive Real-time Dharamshala Management System featuring live room availability tracking, automated booking allotment, and instant billing solutions.",
      image: "/assets/jain_dharamshala.png",
      link: "https://jain-dharamsala.vercel.app/#rooms"
    },
    {
      title: "Mehndi Artist Portfolio",
      category: "Arts & Portfolio",
      description: "An intuitive online booking platform designed for professional mehndi artists, enabling seamless appointment scheduling for bridal and cultural events.",
      image: "/assets/mehndi_artist.png",
      link: "https://mehendi-website.vercel.app/"
    },
    {
      title: "Vijay Laxmi Sharma Aachar",
      category: "Food & Business",
      description: "A robust e-commerce storefront for a traditional pickle business, featuring authentic flavors with integrated online ordering and secure payments.",
      image: "/assets/aachar_business.png",
      link: "https://www.mewari-achar.shop/"
    },
    {
      title: "Professional Portfolio",
      category: "Portfolio & Branding",
      description: "A sophisticated portfolio website designed to showcase technical expertise, academic background, and a diverse range of creative projects.",
      image: "/assets/portfolio.png",
      link: "https://portfolio-six-smoky-vhgmd7wfta.vercel.app/"
    },
    {
      title: "Hotel's Website",
      category: "Frontend Only",
      description: "A premium and responsive frontend design for a luxury hotel, showcasing elegant layouts, seamless animations, and a high-end visual aesthetic.",
      image: "/assets/hotels_website.png",
      link: "https://hotel-website-eight-flax.vercel.app/"
    }
  ];

  return (
    <>
      <div className="cursor-glow"></div>
      <div className="scroll-progress"></div>
      
      <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
        <div className="container nav-content">
          <Link href="/" className="logo">
            <img src="/assets/chittortech_logo.png" alt="ChittorTech Logo" />
          </Link>

          <div 
            className={`menu-toggle ${menuActive ? "active" : ""}`} 
            onClick={() => setMenuActive(!menuActive)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuActive(false)}>Projects</a></li>
            <li><a href="#team" onClick={() => setMenuActive(false)}>Team</a></li>
            <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
            <li><Link href="/admin" onClick={() => setMenuActive(false)}>Admin</Link></li>
            <li className="mobile-only">
              <a href="#contact" className="btn btn-primary" onClick={() => setMenuActive(false)}>
                Get Started
              </a>
            </li>
          </ul>
          <a href="#contact" className="btn btn-primary nav-btn">Get Started</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        
        <div className="container hero-content">
          <div className="hero-label">
            <span className="badge"><i className="fas fa-certificate"></i> iStart Approved & MSME Approved</span>
          </div>
          <h1>Architecting the <span>Digital</span> Frontier.</h1>
          <p className="hero-description">
            ChittorTech engineers premium digital products with a focus on high-performance architecture and modern user experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary magnetic">Explore Work</a>
            <a href="#about" className="btn btn-outline">The Vision</a>
          </div>
        </div>
      </header>

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
              <div className="experience-card">
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

      <section id="projects">
        <div className="container">
          <h2 className="section-title reveal">Innovative Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card reveal">
                <div className="project-img" style={{ backgroundImage: `url('${project.image}')` }}></div>
                <div className="project-info">
                  <span className="badge">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" className="project-link">
                    View Live <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            ))}
            <div className="project-card coming-soon-card reveal">
              <i className="fas fa-rocket"></i>
              <h3>More Projects</h3>
              <p>We are currently working on some exciting new digital experiences. Stay tuned for more innovations!</p>
              <span className="badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <h2 className="section-title reveal">Meet The Founders</h2>
          <div className="team-grid">
            <div className="team-card reveal">
              <img src="/assets/kush_sharma.jpg" alt="Kush Sharma" className="team-img" />
              <h4>Kush Sharma</h4>
              <span>Founder</span>
            </div>
            <div className="team-card reveal">
              <img src="/assets/lav_sharma.jpg" alt="Lav Sharma" className="team-img" />
              <h4>Lav Sharma</h4>
              <span>Director</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title reveal">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info reveal">
              <h3>Contact Details</h3>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@chittortech.online</p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-phone"></i></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 75979 01057</p>
                  <p>+91 82338 16674</p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-location-dot"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>Bcw Colony Sector-1, Chittaurgarh</p>
                </div>
              </div>
              <div style={{ marginTop: '3rem' }}>
                <span style={{ fontWeight: 600, marginRight: '1.5rem' }}>Follow Us:</span>
                <a href="#"><i className="fab fa-linkedin fa-lg"></i></a> &nbsp;&nbsp;
                <a href="#"><i className="fab fa-twitter fa-lg"></i></a> &nbsp;&nbsp;
                <a href="#"><i className="fab fa-github fa-lg"></i></a>
              </div>
            </div>
            <div className="contact-form reveal">
              <form action="https://formspree.io/f/xwvroogw" method="POST" id="chittortech-form">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <textarea name="message" rows="5" placeholder="Project Inquiry" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="legal">
        <div className="container">
          <h2 className="section-title reveal">Transparency & Trust</h2>
          <p className="reveal" style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem' }}>
            At ChittorTech, we believe in building long-term partnerships based on clarity and mutual trust. Our policies are designed to protect our clients' interests while maintaining the highest standards of professional service.
          </p>
          <div className="feature-stats" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="feature-card reveal" style={{ cursor: 'pointer' }} onClick={() => setActiveModal('privacy')}>
              <i className="fas fa-user-shield"></i>
              <p>Privacy Policy</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Data Security</span>
            </div>
            <div className="feature-card reveal" style={{ cursor: 'pointer' }} onClick={() => setActiveModal('terms')}>
              <i className="fas fa-file-contract"></i>
              <p>Terms of Service</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Engagement Rules</span>
            </div>
            <div className="feature-card reveal" style={{ cursor: 'pointer' }} onClick={() => setActiveModal('refund')}>
              <i className="fas fa-hand-holding-heart"></i>
              <p>Refund & Support</p>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Post-Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="dev-credit-wrapper reveal">
            <a href="https://chittortech.online" target="_blank" className="dev-credit-pill">
              <img src="/assets/chittortech_logo.png" alt="ChittorTech Logo" />
              <p>Developed & Maintained by <span>ChittorTech</span></p>
            </a>
          </div>
          <p>&copy; 2026 ChittorTech Solutions Pvt Ltd. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', marginTop: '5px', color: 'var(--text-muted)' }}>Approved by iStart Rajasthan | Approved by MSME India</p>
          <div className="footer-links" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.85rem' }}>
            <a href="javascript:void(0)" onClick={() => setActiveModal('privacy')} style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
            <a href="javascript:void(0)" onClick={() => setActiveModal('terms')} style={{ color: 'var(--text-muted)' }}>Terms & Conditions</a>
            <a href="javascript:void(0)" onClick={() => setActiveModal('refund')} style={{ color: 'var(--text-muted)' }}>Refund & Support</a>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeModal === 'privacy' && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setActiveModal(null)}>&times;</span>
            <h2>Privacy Policy</h2>
            <div className="modal-body">
              <p><strong>Effective Date:</strong> March 12, 2026</p>
              <p>ChittorTech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how your personal information is collected, used, and safeguarded when you visit our website or engage with our services.</p>
              <h3>1. Information Collection</h3>
              <p>We collect information that you provide directly to us when you fill out a recruitment form, contact us for inquiries, or sign a service agreement.</p>
              <ul className="modal-list">
                <li>Identification Data: Name, Email, Phone Number.</li>
                <li>Professional Data: Resume links, portfolio details, and business requirements.</li>
                <li>Digital Footprint: IP address, browser type, and usage patterns via cookies.</li>
              </ul>
              <h3>2. Purpose of Processing</h3>
              <ul className="modal-list">
                <li>Facilitate communication regarding projects and employment.</li>
                <li>Provide and improve our technical services.</li>
                <li>Maintain the security and integrity of our digital platforms.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'terms' && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setActiveModal(null)}>&times;</span>
            <h2>Terms & Conditions</h2>
            <div className="modal-body">
              <p><strong>Last Updated:</strong> March 12, 2026</p>
              <h3>1. Project Delivery</h3>
              <p>Chittor Tech is committed to delivering the website project within the mutually agreed timeline based on the project scope and requirements provided by the client.</p>
              <h3>2. Post-Delivery Support (15 Days)</h3>
              <p>After the website is delivered, we provide a support period of <strong>15 days</strong> during which limited minor changes can be requested free of cost.</p>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'refund' && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close-modal" onClick={() => setActiveModal(null)}>&times;</span>
            <h2>Refund & Support</h2>
            <div className="modal-body">
              <p><strong>Effective Date:</strong> March 12, 2026</p>
              <h3>1. Post-Delivery Support Period</h3>
              <p>Every project includes a <strong>15-day complimentary support period</strong> starting from the day of final delivery.</p>
              <h3>2. Refund Policy</h3>
              <p>Payment for consulting and development services is generally non-refundable due to the labor-intensive nature of the work.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
