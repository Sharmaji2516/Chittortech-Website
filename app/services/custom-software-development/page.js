import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "Custom Software Development & ERP/CRM Solutions | ChittorTech",
  description: "Premier custom software development agency. We engineer enterprise ERP systems, CRM dashboards, SaaS MVP platforms, and automated workflow engines.",
  alternates: {
    canonical: "https://www.chittortech.online/services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development & ERP Agency | ChittorTech",
    description: "Streamline enterprise business operations with custom ERP, CRM, and SaaS software engineering.",
    url: "https://www.chittortech.online/services/custom-software-development",
    type: "website",
  },
  keywords: [
    "Custom software development company India",
    "Enterprise ERP software Rajasthan",
    "SaaS MVP development agency",
    "Custom CRM development company",
    "B2B software engineering India",
  ],
};

export default function CustomSoftwareServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "description": "Enterprise software engineering, custom ERP platforms, CRM systems, and SaaS product MVP development."
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
            <i className="fa-solid fa-gears" style={{ color: '#003ED8' }}></i>
            <span>Enterprise ERP, CRM & SaaS MVP Engineering</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            Tailored <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Custom Software</span> & ERP Platforms
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '800px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            Replace manual spreadsheets and clunky legacy tools with custom enterprise ERPs, CRM platforms, and SaaS products built for scalable growth and automated efficiency.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-terminal"></i> Request Software Consultation
            </Link>
            <a
              href="#pricing"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 600, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-tag"></i> View SaaS Packages
            </a>
          </div>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>65%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Operational Time Saved</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Custom Database Schema</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>RBAC</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Role-Based Access Control</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>API-First</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Microservices Architecture</div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Offerings */}
      <section style={{ padding: '70px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Custom B2B Software</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Enterprise Software Engineering</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>Custom built software tailored to your specific internal operational workflow.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {[
            { icon: "fa-industry", title: "Custom ERP Systems", desc: "Inventory management, manufacturing workflows, billing, GST invoicing, and multi-branch stock tracking (e.g. Granite & Textile ERPs).", color: "#003ED8" },
            { icon: "fa-users-gear", title: "Custom CRM & Lead Portals", desc: "Track sales pipelines, customer interactions, staff attendance, and commission payouts with custom role-based dashboards.", color: "#002FA3" },
            { icon: "fa-cloud", title: "SaaS MVP Development", desc: "Transform your startup idea into a scalable multi-tenant SaaS application with subscription billing, API rate limiting, and onboarding flows.", color: "#7c3aed" },
            { icon: "fa-network-wired", title: "API Integrations & Microservices", desc: "Connect WhatsApp API, Payment Gateways, Tally ERP, and third-party logistics through secure, resilient REST & GraphQL APIs.", color: "#0284c7" },
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

      {/* Pricing Section */}
      <section id="pricing" style={{ padding: '80px 16px', maxWidth: '1050px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Transparent Investment</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Software Development Engagement</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Fixed milestone billing or dedicated software engineering retainers.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>SaaS MVP Package</h3>
              <p style={{ color: '#52525b', fontSize: '0.85rem', marginBottom: '20px' }}>Turnkey MVP build for B2B SaaS startups ready for launch.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#003ED8', marginBottom: '20px' }}>₹95,000 <span style={{ fontSize: '0.9rem', color: '#71717a', fontWeight: 500 }}>($1,200)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#09090b', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Multi-Tenant Node.js + Next.js Stack</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Stripe / Razorpay Subscription Billing</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Admin Control Dashboard & User Roles</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 800, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Build SaaS MVP</Link>
          </div>

          <div style={{ padding: '28px 20px', borderRadius: '24px', background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>★ Enterprise Custom</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>Enterprise ERP System</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '20px' }}>Custom multi-branch ERP & automated operations platform.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px' }}>Custom Quote</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#ffffff', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>End-to-End Enterprise Architecture</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Legacy Data Migration & Tally Sync</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Dedicated Support & SLA Guarantee</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 900, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Request ERP Quote</Link>
          </div>
        </div>
      </section>

      <StrategyCTA />
    </main>
  );
}
