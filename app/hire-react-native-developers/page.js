import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "Hire Dedicated React Native Developers | Outsource Mobile Apps India",
  description: "Hire pre-vetted senior React Native & Expo developers from India starting at $7/hr or $800/mo. Build high-performance cross-platform iOS & Android apps with 48-hr onboarding.",
  alternates: {
    canonical: "https://www.chittortech.online/hire-react-native-developers",
  },
  openGraph: {
    title: "Hire Dedicated React Native Developers India | ChittorTech",
    description: "Expert React Native & Expo developers for mobile startups and enterprises. Fast onboarding, clean architecture, and App Store submission support.",
    url: "https://www.chittortech.online/hire-react-native-developers",
    type: "website",
    images: [
      {
        url: "https://www.chittortech.online/ChittorTech%20Banner.png",
        width: 1200,
        height: 630,
        alt: "Hire React Native Developers India - ChittorTech",
      },
    ],
  },
  keywords: [
    "Hire React Native developers India",
    "Dedicated mobile app developers",
    "React Native Expo developers for hire",
    "Outsource iOS Android app development",
    "Cross-platform mobile developers India",
    "Hire React Native engineer USA UK",
  ],
};

export default function HireReactNativePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hire Dedicated React Native Developers",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "description": "Hire senior React Native and Expo mobile app developers for full-time monthly or hourly contracts starting at $7/hr or $800/mo.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "7",
      "unitText": "HOUR"
    }
  };

  return (
    <main style={{ paddingTop: '110px', background: '#ffffff', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section style={{ padding: '40px 16px 60px', background: 'radial-gradient(circle at 50% 0%, rgba(0, 62, 216, 0.07), transparent 70%)', width: '100%', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', width: '100%' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '20px', border: '1px solid rgba(0, 62, 216, 0.15)', maxWidth: '100%' }}>
            <i className="fa-solid fa-mobile-screen-button" style={{ color: '#003ED8' }}></i>
            <span>Pre-Vetted Top 1% React Native & Expo Engineers</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            Hire Dedicated <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>React Native</span> Developers in 48 Hours
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '780px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            Build production-ready, 60 FPS cross-platform iOS & Android mobile apps with India's top React Native architects. Save up to 70% in development costs starting at just <strong style={{ color: '#003ED8' }}>$7/hr</strong> or <strong style={{ color: '#003ED8' }}>$800/month</strong>.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', maxWidth: '100%', justifyContent: 'center' }}
            >
              <i className="fa-solid fa-user-plus"></i> Hire Dedicated Developer
            </Link>
            <a
              href="#tech-matrix"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 700, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', maxWidth: '100%', justifyContent: 'center' }}
            >
              <i className="fa-solid fa-layer-group"></i> Explore Tech Matrix
            </a>
          </div>

          {/* Stats Bar (Mobile Apps Delivered removed per request) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>99.9%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Crash-Free Session Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>48 Hrs</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Average Onboarding Time</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>4.9★</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Client Satisfaction Rating</div>
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack Matrix — Equal Height & 100% Symmetric Mobile Layout */}
      <section id="tech-matrix" style={{ padding: '60px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Full Mobile Ecosystem</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>React Native Technical Competency Matrix</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>Our developers are proficient across the entire modern cross-platform mobile stack.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px', width: '100%' }}>
          {[
            { icon: "fa-brands fa-react", title: "React Native & Expo SDK", desc: "Expertise in Expo Router, EAS Build, and bare workflow transition for maximum performance.", color: "#003ED8" },
            { icon: "fa-solid fa-code-branch", title: "State & Cache Architecture", desc: "Zustand, Redux Toolkit, React Query (TanStack), and Recoil state management.", color: "#002FA3" },
            { icon: "fa-solid fa-bolt", title: "Animations & 60FPS UI", desc: "Complex gesture handling with React Native Reanimated 3 and Skia graphics engine.", color: "#7c3aed" },
            { icon: "fa-solid fa-plug", title: "Native Swift & Kotlin Bridges", desc: "Custom Native Modules for Bluetooth LE, Camera, Biometrics, and hardware sensors.", color: "#0284c7" },
            { icon: "fa-solid fa-bell", title: "Push & Realtime Sync", desc: "Firebase Cloud Messaging (FCM), OneSignal, WebSockets, and Supabase Realtime.", color: "#d97706" },
            { icon: "fa-solid fa-credit-card", title: "In-App Purchases & Payments", desc: "Seamless RevenueCat, Stripe, Apple Pay, Google Pay, and Razorpay integrations.", color: "#059669" },
            { icon: "fa-solid fa-database", title: "Offline Storage & DB", desc: "MMKV high-speed key-value storage, WatermelonDB, SQLite, and Realm DB.", color: "#dc2626" },
            { icon: "fa-solid fa-rocket", title: "CI/CD & Store Deployment", desc: "Automated TestFlight, Fastlane pipelines, and Google Play Console release management.", color: "#2563eb" },
          ].map((item, idx) => (
            <div key={idx} style={{ 
              padding: '24px 20px', 
              borderRadius: '20px', 
              background: '#ffffff', 
              border: '1px solid rgba(0, 62, 216, 0.08)', 
              boxShadow: 'var(--shadow-soft)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start',
              height: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ 
                color: item.color, 
                fontSize: '1.6rem', 
                marginBottom: '16px',
                background: `${item.color}12`,
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <i className={item.icon}></i>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#09090b', marginBottom: '8px', lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#52525b', lineHeight: 1.55, margin: 0, flexGrow: 1 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Onboarding Process */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>How to Hire in 4 Simple Steps</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Seamless onboarding process designed for fast, risk-free developer integration.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px', width: '100%' }}>
            {[
              { step: "01", title: "Submit Requirements", desc: "Tell us your tech stack, project timeline, and required developer experience." },
              { step: "02", title: "Review Pre-Vetted Profiles", desc: "Interview top 2–3 handpicked React Native candidates matching your stack." },
              { step: "03", title: "3-Day Risk-Free Trial", desc: "Test the developer on your actual code tasks before committing to contracts." },
              { step: "04", title: "Instant Slack & GitHub Sync", desc: "Developer joins your daily standups, Jira board, and repositories." },
            ].map((step, idx) => (
              <div key={idx} style={{ padding: '24px 20px', borderRadius: '18px', background: '#ffffff', border: '1px solid #e4e4e7', boxSizing: 'border-box' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'rgba(0, 62, 216, 0.18)', marginBottom: '8px' }}>{step.step}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09090b', marginBottom: '6px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section — 100% Responsive & Zero Overflow on Mobile (320px+) */}
      <section id="pricing" style={{ padding: '70px 16px', maxWidth: '1050px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Clear USD Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Simple, Transparent Hiring Plans</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem' }}>No hidden recruitment fees. Pay only for developer hours worked.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {/* Hourly Card */}
          <div style={{ 
            padding: '28px 20px', 
            borderRadius: '24px', 
            background: '#ffffff', 
            border: '1px solid #e4e4e7', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>Hourly Engagement</h3>
              <p style={{ color: '#52525b', fontSize: '0.85rem', marginBottom: '20px' }}>Best for short tasks, feature updates, or code reviews.</p>
              <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#003ED8', marginBottom: '20px' }}>$7 <span style={{ fontSize: '0.95rem', color: '#71717a', fontWeight: 500 }}>/ hour</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#09090b', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Pay only for tracked hours via Toggl/Hubstaff</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Daily Standup & Git commit logs</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Direct communication via Slack / Teams</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Zero long-term contract lock-in</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 800, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Hire Hourly Developer</Link>
          </div>

          {/* Monthly Dedicated Card */}
          <div style={{ 
            padding: '28px 20px', 
            borderRadius: '24px', 
            background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', 
            color: '#ffffff', 
            boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', 
            position: 'relative',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>★ Most Popular</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>Dedicated Monthly Developer</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '20px' }}>Full-time 160 hrs/month dedicated senior mobile engineer.</p>
              <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px' }}>$800 <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>/ month</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#ffffff', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>160 Hours/Month dedicated development</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Guaranteed US / UK timezone overlap</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>100% NDA & IP Transfer Ownership</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Free project management support</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 900, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Hire Dedicated Full-Time</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Everything you need to know about hiring React Native developers from ChittorTech.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {[
              { q: "How quickly can a React Native developer start on my project?", a: "Once we discuss your requirements, we can share candidate profiles within 24 hours. Your selected developer can start working within 48 hours." },
              { q: "How does timezone alignment work for US or UK clients?", a: "Our developers adjust their working hours to provide a minimum of 4 to 6 hours of real-time overlap with your local business hours (EST, PST, BST, GST)." },
              { q: "Do I own 100% of the code and intellectual property?", a: "Yes. All code produced by ChittorTech developers is 100% owned by your company under strict legal NDA and IP assignment contracts." },
              { q: "Is there a trial period available?", a: "Yes, we provide a 3-day risk-free trial period for dedicated monthly hiring so you can evaluate technical capability firsthand." }
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
