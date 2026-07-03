"use client";

import React, { useState, useEffect } from "react";
import NeuralBackground from "@/components/NeuralBackground";
import Link from "next/link";

export default function ReviewsPage() {
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

  const reviews = [
    {
      name: "Vijay Laxmi Sharma",
      role: "Founder, Mewari Achaar",
      text: "ChittorTech has developed the app and website system for Mewari Achaar with a modern and professional digital experience. Their services are best-in-class, highly supportive for local vendors and businesses, and delivered at very reasonable pricing.",
      stars: 5,
    },
    {
      name: "Kush",
      role: "Founder, Shaadi Sutra",
      text: "ChittorTech developed the website and application system for Shaadi Sutra with a smooth and modern user experience. The platform includes wedding planning tools, vendor management, budget tracking, event coordination, and management features that make wedding organization simple and efficient.",
      stars: 5,
    },
    {
      name: "Ayush Sharma",
      role: "AI Product Manager, BrowserStack",
      text: "Really happy to see ChittorTech growing and achieving great things. The team has always been supportive, helpful, and inspiring, and their guidance and dedication towards technology and innovation are truly commendable. Wishing the entire ChittorTech team lots of success, growth, and many more achievements in the future ahead!",
      stars: 5,
    },
    {
      name: "Tahir Hussain",
      role: "Ecosystem Mentor, iStart Rajasthan",
      text: "As a mentor associated with the ecosystem, I am happy to see ChittorTech growing as a promising registered startup. The team is doing remarkable work in the field of technology and digital innovation while creating positive impact at the local level. Chittor tech is well known platform, reliable service.",
      stars: 5,
    },
    {
      name: "Siddhi Sharma",
      role: "College Junior",
      text: "Excellent service and a great experience overall! The team at ChittorTech is professional, responsive, and very supportive. Their work quality, communication, and dedication is really impressive. Highly recommended for anyone looking for reliable tech services and learning opportunities.",
      stars: 5,
    },
    {
      name: "Muskan Sisodia",
      role: "College Junior",
      text: "Proud to see my senior building an innovative startup like ChittorTech. It's inspiring to watch someone from our own circle work with such dedication, vision, and passion toward technology and digital innovation. Wishing him and the entire team great success, growth, and all the very best for the future ahead! 🚀",
      stars: 5,
    },
    {
      name: "Nisha Singh",
      role: "Sister",
      text: "As an elder sister, I feel truly proud to see my brother building something so meaningful through ChittorTech. His dedication, determination, and passion for creating innovative digital solutions are really inspiring. Watching him grow and work towards his dreams brings immense happiness to our family. Wishing him and the entire team great success, positivity, and many more achievements ahead! 🌟",
      stars: 5,
    },
    {
      name: "Muskan Falwaria",
      role: "College Classmate",
      text: "It's amazing to see classmates building something so impactful through ChittorTech. Their creativity, consistency, and modern approach towards technology truly make them stand out. Wishing the team more growth, success, and recognition in the coming years! ✨🚀",
      stars: 5,
    },
    {
      name: "Priyanka Vyas",
      role: "School Junior",
      text: "Honestly, it feels really good to see your growth and how far you've come. Watching a friend work hard, improve, and achieve new things is something that truly makes me happy. You've been putting in great effort, and it's inspiring to see you growing with confidence. Wishing you even more success ahead — keep shining and keep growing! 💖🚀",
      stars: 5,
    }
  ];

  const services = [
    { title: "Enterprise Web Systems", icon: "fa-code-branch", color: "var(--primary)", desc: "High-performance front-end & back-end architectures." },
    { title: "Custom AI Chatbots & RAG", icon: "fa-robot", color: "var(--primary)", desc: "24/7 intelligent support trained on your business data." },
    { title: "E-Commerce Solutions", icon: "fa-shop", color: "var(--primary)", desc: "Scalable digital storefronts for local and global brands." }
  ];

  return (
    <div style={{ background: 'var(--bg-dark)', color: 'var(--text-main)', minHeight: '100vh', overflowX: 'hidden' }}>
      <div style={{ 
        position: 'fixed', top: 0, left: 0, height: '4px', background: 'var(--gradient)', 
        width: `${scrollProgress}%`, zIndex: 9999, transition: 'width 0.1s ease-out' 
      }} />

      <section className="hero-saas" style={{ padding: '160px 0 60px', position: 'relative' }}>
        <NeuralBackground />
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="badge-premium" style={{ 
            display: 'inline-flex', 
            padding: '8px 20px', 
            background: 'rgba(0, 62, 216, 0.05)', 
            border: '1px solid rgba(0, 62, 216, 0.1)', 
            borderRadius: '50px', 
            color: 'var(--primary)', 
            fontSize: '0.8rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            marginBottom: '2rem' 
          }}>
            5.0 ⭐ RATED ON GOOGLE
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            Trusted by Businesses in <br/><span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Chittorgarh & Globally</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Real stories from startup founders, government mentors, and industry leaders who trust ChittorTech to engineer their digital success.
          </p>
        </div>
      </section>

      {/* Wall of Love - Reviews Section */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {reviews.map((review, idx) => (
              <div key={idx} style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 62, 216, 0.08)', 
                borderRadius: '24px', 
                padding: '2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                boxShadow: 'var(--shadow-soft)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease' 
              }} 
              className="card-hover-shadow"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 62, 216, 0.08)';
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#FFD700' }}>
                  {[...Array(review.stars)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{review.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(0, 62, 216, 0.05)', paddingTop: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#ffffff' }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{review.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{review.role}</span>
                  </div>
                  <a href="https://www.google.com/search?q=ChittorTech" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', color: '#4285F4', fontSize: '1.2rem', textDecoration: 'none', transition: 'transform 0.3s' }}>
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="https://www.google.com/search?sca_esv=6928ac2b0f569e1e&authuser=4&sxsrf=ANbL-n7-Pjo4BaDOIa0GUFuZece8IKQd1g%3A1779709891690&q=ChittorTech&stick=H4sIAAAAAAAAAONgU1I1qDAyS0s2NLFISba0TLawNEqxMqgwTUsyTTOyMEk0MElOMzAwWMTK7ZyRWVKSXxSSmpwBAKzHU1w3AAAA&mat=CT1NqaDfU_rN&ved=2ahUKEwjX1Jb_r9SUAxVY4jgGHSY9OpMQrMcEegQIFhAC" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}>
              <i className="fab fa-google" style={{ color: '#4285F4', fontSize: '1.2rem' }}></i> View all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Offer Catalog Section */}
      <section style={{ padding: '80px 0', background: '#fbfbfb', borderTop: '1px solid rgba(0, 62, 216, 0.05)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-main)' }}>Our <span style={{ color: 'var(--primary)' }}>Service Catalog</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4rem' }}>The premium solutions that generate these 5-star experiences.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {services.map((service, idx) => (
              <div key={idx} style={{ 
                background: '#ffffff', 
                border: '1px solid rgba(0, 62, 216, 0.08)', 
                borderRadius: '20px', 
                padding: '2rem', 
                width: '100%', 
                maxWidth: '320px', 
                textAlign: 'left',
                boxShadow: 'var(--shadow-soft)'
              }}>
                <i className={`fas ${service.icon}`} style={{ fontSize: '2rem', color: service.color, marginBottom: '1rem' }}></i>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{service.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <Link href="/services" className="btn btn-primary" style={{ padding: '1rem 2.5rem', color: '#ffffff', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
