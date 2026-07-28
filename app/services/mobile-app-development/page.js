import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "Mobile App Development Services (iOS & Android) | ChittorTech",
  description: "Premier mobile app development company in India. We engineer high-performance React Native, Expo, and Kotlin cross-platform iOS & Android mobile apps.",
  alternates: {
    canonical: "https://www.chittortech.online/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Agency India | ChittorTech",
    description: "Build fluid 60 FPS mobile applications for iOS & Android with top React Native & Kotlin developers.",
    url: "https://www.chittortech.online/services/mobile-app-development",
    type: "website",
  },
  keywords: [
    "Mobile app development company India",
    "React Native app development agency",
    "Cross-platform iOS Android app developers",
    "Android app development Rajasthan",
    "Expo CLI app developers",
  ],
};

export default function MobileAppDevServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "description": "Custom iOS and Android mobile application development engineered with React Native, Expo CLI, and Kotlin."
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
            <i className="fa-solid fa-mobile-screen-button" style={{ color: '#003ED8' }}></i>
            <span>Cross-Platform iOS & Android Mobile Engineering</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            Custom <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mobile App Development</span> for iOS & Android
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '800px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            We engineer high-speed, native-feel mobile applications with React Native, Expo CLI, and Kotlin. From startup MVPs to enterprise mobile products, we deliver 60 FPS fluid performance and App Store publication guarantees.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-mobile"></i> Build Your Mobile App
            </Link>
            <a
              href="#pricing"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 600, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-tag"></i> View App Packages
            </a>
          </div>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>60 FPS</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Fluid Native UI Animation</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>99.9%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Crash-Free Session Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>1 Codebase</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Simultaneous iOS & Android</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>App Store Approval Guarantee</div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Mobile Offerings */}
      <section style={{ padding: '70px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>End-to-End App Services</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Comprehensive Mobile Development</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>From initial wireframing to store deployment and cloud backend sync.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {[
            { icon: "fa-mobile", title: "React Native & Expo Apps", desc: "Cross-platform mobile apps built with React Native Expo CLI for rapid deployment on both Apple App Store and Google Play Store.", color: "#003ED8" },
            { icon: "fa-plug", title: "Native Swift & Kotlin Modules", desc: "Custom native module bridges for specialized hardware features: Bluetooth LE, Camera, Biometric Auth, and Push Notifications.", color: "#002FA3" },
            { icon: "fa-database", title: "Offline-First Architectures", desc: "Keep your app operational even without internet access using high-speed MMKV storage, WatermelonDB, and Supabase local sync.", color: "#7c3aed" },
            { icon: "fa-rocket", title: "App Store Publishing & CI/CD", desc: "Complete management of Apple Developer & Google Play Console accounts, automated Fastlane builds, and store approval handling.", color: "#0284c7" },
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

      {/* Pricing Models */}
      <section id="pricing" style={{ padding: '80px 16px', maxWidth: '1050px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Clear Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Mobile App Packages</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Fixed-scope MVP builds or dedicated monthly mobile engineers.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>Hourly Mobile Developer</h3>
              <p style={{ color: '#52525b', fontSize: '0.85rem', marginBottom: '20px' }}>Best for short tasks, feature updates, or app maintenance.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#003ED8', marginBottom: '20px' }}>$7 <span style={{ fontSize: '0.9rem', color: '#71717a', fontWeight: 500 }}>/ hour</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#09090b', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Tracked hours & daily Git commits</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Direct Slack & WhatsApp developer access</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Zero contract lock-in</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 800, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Hire Hourly Developer</Link>
          </div>

          <div style={{ padding: '28px 20px', borderRadius: '24px', background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>★ Dedicated Engineer</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>Full Dedicated Retainer</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '20px' }}>Full-time 160 hrs/month senior mobile app developer.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px' }}>$800 <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>/ month</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#ffffff', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>160 Hours/Month full app engineering</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>iOS & Android store publishing included</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>100% NDA & IP Transfer Ownership</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 900, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Start Dedicated Contract</Link>
          </div>
        </div>
      </section>

      <StrategyCTA />
    </main>
  );
}
