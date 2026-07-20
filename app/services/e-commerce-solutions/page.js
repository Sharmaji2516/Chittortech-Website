import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "E-Commerce Web Development & Shopify Plus Services | ChittorTech",
  description: "Premier E-Commerce web development agency. We engineer high-converting Shopify stores, custom Next.js Commerce marketplaces, and multi-currency payment gateway integrations.",
  alternates: {
    canonical: "https://www.chittortech.online/services/e-commerce-solutions",
  },
  openGraph: {
    title: "E-Commerce & Online Store Development | ChittorTech",
    description: "Scale online sales with custom Shopify Plus stores, Next.js Commerce, and fast payment checkout integrations.",
    url: "https://www.chittortech.online/services/e-commerce-solutions",
    type: "website",
  },
  keywords: [
    "E-commerce web development company India",
    "Shopify store development Chittorgarh",
    "Custom Next.js Commerce agency",
    "Multi-currency payment gateway integration",
    "Online store development services",
  ],
};

export default function EcommerceServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-Commerce Development Services",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "description": "Custom Shopify Plus and Next.js headless e-commerce store development, payment gateway integration, and stock automation."
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
            <i className="fa-solid fa-cart-shopping" style={{ color: '#003ED8' }}></i>
            <span>High-Converting Online Store & Marketplace Engineering</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            Custom <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>E-Commerce Solutions</span> & Shopify Plus
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '800px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            Boost your digital sales with high-converting Shopify stores, headless Next.js Commerce platforms, and multi-currency payment checkout integrations (Stripe, Razorpay, PayPal).
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-shop"></i> Launch Your Online Store
            </Link>
            <a
              href="#pricing"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 600, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-tag"></i> View E-Commerce Plans
            </a>
          </div>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>3.5x</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Average Conversion Rate Boost</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>&lt; 1s</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Instant Product Page Load</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Secure PCI-DSS Payments</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>Auto Sync</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>ERP & Inventory Automation</div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Offerings */}
      <section style={{ padding: '70px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Complete Retail Tech</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>End-to-End E-Commerce Capabilities</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>From custom storefront design to automated order fulfillment workflows.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {[
            { icon: "fa-bag-shopping", title: "Shopify & Shopify Plus Setup", desc: "Custom theme development, Liquid engineering, app integrations, and conversion-optimized checkout customization.", color: "#003ED8" },
            { icon: "fa-bolt", title: "Headless Next.js Commerce", desc: "Ultra-fast headless online stores with microsecond speed, custom product configurators, and complete UI freedom.", color: "#002FA3" },
            { icon: "fa-credit-card", title: "Payment & Logistics Integrations", desc: "Seamless setup of Razorpay, Stripe, PayPal, Cash on Delivery (COD), Shiprocket, and automated WhatsApp order tracking.", color: "#7c3aed" },
            { icon: "fa-boxes-stacked", title: "Inventory & ERP Automation", desc: "Automate stock levels, multi-warehouse sync, invoice generation, and customer return processing across all sales channels.", color: "#0284c7" },
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
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Store Setup Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>E-Commerce Packages</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Turnkey online store setup and headless marketplace builds.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>Turnkey Shopify Store</h3>
              <p style={{ color: '#52525b', fontSize: '0.85rem', marginBottom: '20px' }}>Ready-to-sell Shopify store setup with payment & logistics integrations.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#003ED8', marginBottom: '20px' }}>₹30,000 <span style={{ fontSize: '0.9rem', color: '#71717a', fontWeight: 500 }}>($400)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#09090b', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Complete Shopify Store Setup & Theme Design</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Payment Gateway (Razorpay / Stripe / COD)</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Shipping & WhatsApp Notifications</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 800, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Launch Shopify Store</Link>
          </div>

          <div style={{ padding: '28px 20px', borderRadius: '24px', background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>★ Custom Marketplace</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>Headless Next.js Store</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '20px' }}>Custom multi-vendor or custom checkout headless e-commerce app.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px' }}>₹1,00,000+ <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>($1,200+)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#ffffff', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Custom Next.js 15 Commerce Front-End</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Multi-Currency & Regional Tax Engine</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Real-time Inventory & ERP API Sync</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 900, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Build Custom Store</Link>
          </div>
        </div>
      </section>

      <StrategyCTA />
    </main>
  );
}
