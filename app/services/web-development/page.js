import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "Custom Web Development Agency & Next.js 15 Services | ChittorTech",
  description: "Premier web development agency in India. We engineer lightning-fast Next.js 15, React, and Node.js web applications, corporate websites, and SaaS portals with 100/100 Lighthouse speed scores.",
  alternates: {
    canonical: "https://www.chittortech.online/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development & Next.js 15 Agency | ChittorTech",
    description: "Build high-converting, scalable web applications with India's top Next.js & React architects. Fast delivery, clean code, and SEO dominance.",
    url: "https://www.chittortech.online/services/web-development",
    type: "website",
    images: [
      {
        url: "https://www.chittortech.online/ChittorTech%20Banner.png",
        width: 1200,
        height: 630,
        alt: "Custom Web Development ChittorTech",
      },
    ],
  },
  keywords: [
    "Web development agency India",
    "Next.js 15 development company",
    "React web application development",
    "Corporate website development Rajasthan",
    "Custom web portal development",
    "SaaS dashboard development India",
  ],
};

export default function WebDevelopmentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "description": "High-performance Next.js 15, React, and Node.js web application development for startups, corporate brands, and enterprise clients."
  };

  return (
    <main style={{ paddingTop: '110px', background: '#ffffff', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section style={{ padding: '40px 16px 60px', background: 'radial-gradient(circle at 50% 0%, rgba(0, 62, 216, 0.07), transparent 70%)', width: '100%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '20px', border: '1px solid rgba(0, 62, 216, 0.15)', maxWidth: '100%' }}>
            <i className="fa-solid fa-globe" style={{ color: '#003ED8' }}></i>
            <span>Next-Gen Web Architecture & Next.js 15 Specialists</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            High-Performance <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Web Development</span> & SaaS Portals
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '800px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            We build lightning-fast, SEO-optimized web applications with Next.js 15, React 19, and Node.js. From corporate websites to complex SaaS platforms, we guarantee 100/100 Lighthouse performance and responsive precision.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-rocket"></i> Start Your Web Project
            </Link>
            <a
              href="#web-offerings"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 600, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-layer-group"></i> Explore Solutions
            </a>
          </div>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>&lt; 0.8s</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>First Contentful Paint (LCP)</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>100/100</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Google Lighthouse Score</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Mobile & Tablet Responsive</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>SEO #1</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Built-in Schema & Meta</div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Offerings */}
      <section id="web-offerings" style={{ padding: '70px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Tailored Web Engineering</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Custom Web Development Solutions</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>From brand websites to high-scale web platforms, we deliver tailored digital products.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {[
            { icon: "fa-laptop-code", title: "Corporate & Business Sites", desc: "Sleek, modern brand websites designed to establish trust, showcase services, and convert visitors into high-paying leads.", color: "#003ED8" },
            { icon: "fa-cubes", title: "SaaS Dashboards & Web Apps", desc: "Complex web applications featuring user authentication, role-based access control, analytics charts, and subscription billing.", color: "#002FA3" },
            { icon: "fa-diagram-project", title: "Enterprise Web Portals", desc: "Custom B2B & B2C portals built to streamline operations, customer onboarding, document management, and team workflows.", color: "#7c3aed" },
            { icon: "fa-database", title: "Headless CMS Integration", desc: "Empower your content team with headless CMS setups (Strapi, Sanity, Payload) paired with ultra-fast Next.js frontends.", color: "#0284c7" },
          ].map((item, idx) => (
            <div key={idx} className="card-hover-shadow" style={{ padding: '28px 20px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.08)', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
              <div style={{ 
                color: item.color, 
                fontSize: '1.6rem', 
                marginBottom: '18px',
                background: `${item.color}12`,
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Web Tech Stack */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Modern Web Technology Stack</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem' }}>We utilize industry-proven web frameworks and cloud infrastructure.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px', width: '100%' }}>
            {[
              { title: "Next.js 15 App Router", desc: "Server React Components, SSR/SSG rendering, and microsecond edge routing." },
              { title: "React 19 & TypeScript", desc: "Strict type safety, reusable UI components, and maintainable codebase." },
              { title: "Node.js & Express / NestJS", desc: "High-concurrency REST & GraphQL API backend services." },
              { title: "PostgreSQL, MongoDB & Prisma", desc: "Optimized relational database schemas with high-performance query caching." }
            ].map((tech, idx) => (
              <div key={idx} style={{ padding: '24px 20px', borderRadius: '18px', background: '#ffffff', border: '1px solid #e4e4e7', boxSizing: 'border-box' }}>
                <i className="fa-solid fa-code" style={{ fontSize: '1.5rem', color: '#003ED8', marginBottom: '12px', display: 'block' }}></i>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#09090b', marginBottom: '6px' }}>{tech.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.5, margin: 0 }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 16px', maxWidth: '1050px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Clear Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Web Development Packages</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Transparent costs with zero hidden charges.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {/* Starter */}
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>Starter Business Site</h3>
              <p style={{ color: '#52525b', fontSize: '0.85rem', marginBottom: '20px' }}>Ideal for small businesses wanting a fast, professional online presence.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#003ED8', marginBottom: '20px' }}>₹25,000 <span style={{ fontSize: '0.9rem', color: '#71717a', fontWeight: 500 }}>($300)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#09090b', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Up to 5 Responsive Custom Pages</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Next.js 15 & Tailwind CSS Architecture</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Google Local SEO & Schema Setup</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Fast 14-Day Delivery</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 800, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Build Starter Website</Link>
          </div>

          {/* Business Pro */}
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>★ Most Popular</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>Custom Web App / SaaS MVP</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '20px' }}>For startups needing web portals, auth, databases & API integrations.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px' }}>₹80,000+ <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>($1,000+)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#ffffff', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Full-Stack Next.js + Node.js Application</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Database Setup (Firebase / PostgreSQL / MongoDB)</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Auth, Payment Gateway & Admin Dashboard</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Vercel / Firebase Cloud Deployment</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 900, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Start Web App Project</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Common questions about web development services at ChittorTech.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {[
              { q: "Why do you use Next.js 15 instead of standard WordPress or PHP?", a: "Next.js 15 provides unmatched page load speed (<1 second), server-side rendering for top Google rankings, and bulletproof security with zero plugin vulnerability risks." },
              { q: "Will my website be mobile-friendly and fast on 4G/5G networks?", a: "Yes. Every website we build achieves 95+ to 100/100 Lighthouse performance scores and is fully optimized for mobile devices." },
              { q: "Do you provide website maintenance and domain hosting support?", a: "Yes, we provide end-to-end cloud hosting setup on Vercel/AWS, SSL certificate installation, domain connection, and ongoing monthly maintenance." }
            ].map((faq, idx) => (
              <div key={idx} style={{ padding: '20px 20px', borderRadius: '16px', background: '#ffffff', border: '1px solid #e4e4e7', width: '100%', boxSizing: 'border-box' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#09090b', marginBottom: '6px' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.55, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StrategyCTA />
    </main>
  );
}
