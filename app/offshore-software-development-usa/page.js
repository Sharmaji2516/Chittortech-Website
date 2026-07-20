import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "Offshore Software Development Agency for USA | ChittorTech",
  description: "Premier offshore software development agency in India for US startups & enterprises. Next.js, React Native, custom AI chatbots & SaaS engineering with US timezone overlap. Save up to 70% in development costs starting at $7/hr or $800/mo.",
  alternates: {
    canonical: "https://www.chittortech.online/offshore-software-development-usa",
  },
  openGraph: {
    title: "Offshore Software Development Agency for USA | ChittorTech",
    description: "Build high-performing web apps, mobile apps, & AI software with top 1% Indian developers. Seamless US timezone overlap & NDA compliance.",
    url: "https://www.chittortech.online/offshore-software-development-usa",
    type: "website",
    images: [
      {
        url: "https://www.chittortech.online/ChittorTech%20Banner.png",
        width: 1200,
        height: 630,
        alt: "Offshore Software Development USA - ChittorTech",
      },
    ],
  },
  keywords: [
    "Offshore software development USA",
    "Outsource web development India",
    "Hire Next.js developers USA",
    "React Native app outsourcing India",
    "US startup software agency",
    "Hire dedicated developers India",
    "Offshore AI development company",
    "Cost effective IT outsourcing India",
  ],
};

export default function OffshoreUSAPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Offshore Software Development Services for USA",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "description": "High-quality offshore software engineering, web apps, mobile apps, and custom AI chatbots for US-based startups, SMEs, and enterprises.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "7",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "USD",
        "price": "7",
        "unitText": "HOUR"
      }
    }
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
          <div className="badge-mini" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 600, fontSize: '0.8rem', marginBottom: '20px', maxWidth: '100%' }}>
            <i className="fa-solid fa-earth-americas" style={{ color: '#003ED8' }}></i>
            <span>Dedicated Offshore Partner for US Businesses</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.18, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            Scale Your Tech Stack with India's Elite <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Offshore Engineering Team</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '780px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            Save 60–70% in software development costs without compromising code quality. We deliver production-ready Next.js web applications, React Native mobile apps, and enterprise AI integrations starting at <strong style={{ color: '#003ED8' }}>$7/hr</strong> or <strong style={{ color: '#003ED8' }}>$800/month</strong> with full US timezone alignment.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-calendar-check"></i> Schedule Free Consultation
            </Link>
            <a
              href="#pricing"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 600, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-tag"></i> View USD Pricing Models
            </a>
          </div>

          {/* Stats Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>70%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Development Cost Savings</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>4–6 Hrs</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Daily US Timezone Sync</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>NDA & Code IP Ownership</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>2 Wks</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Agile Sprint Cycles</div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Highlights */}
      <section style={{ padding: '50px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '20px', width: '100%' }}>
          {[
            { icon: "fa-clock", title: "US Timezone Overlap", desc: "4 to 6 hours daily real-time sync with EST, CST, & PST." },
            { icon: "fa-shield-halved", title: "Strict NDA & IP Ownership", desc: "100% code ownership guaranteed under standard US legal contracts." },
            { icon: "fa-bolt", title: "Rapid Deployment", desc: "Agile 2-week sprints with transparent Jira & Slack communications." },
            { icon: "fa-piggy-bank", title: "70% Cost Efficiency", desc: "Hire senior developers starting at just $7/hr or $800/mo." },
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '24px 20px', borderRadius: '18px', background: '#f8fafc', border: '1px solid rgba(0, 62, 216, 0.08)', boxSizing: 'border-box' }}>
              <i className={`fa-solid ${item.icon}`} style={{ fontSize: '1.6rem', color: '#003ED8', marginBottom: '14px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#09090b', marginBottom: '6px' }}>{item.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Matrix */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', borderBottom: '1px solid rgba(0, 62, 216, 0.06)', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Core Offshore Services for US Clients</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto' }}>From MVP launch to high-scale enterprise engineering, we provide end-to-end technical execution.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ padding: '28px 20px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.1)', boxShadow: '0 8px 24px rgba(0, 62, 216, 0.04)', boxSizing: 'border-box' }}>
              <i className="fa-solid fa-code" style={{ fontSize: '2rem', color: '#003ED8', marginBottom: '16px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#09090b', marginBottom: '10px' }}>Custom Next.js & React Web Apps</h3>
              <p style={{ color: '#52525b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>High-performance SSR & SSG web platforms, SaaS dashboards, and e-commerce portals built for maximum speed and SEO optimization.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#09090b', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> Next.js 15 App Router</li>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> Tailored Design Systems</li>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> Serverless Architecture</li>
              </ul>
            </div>

            <div style={{ padding: '28px 20px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.1)', boxShadow: '0 8px 24px rgba(0, 62, 216, 0.04)', boxSizing: 'border-box' }}>
              <i className="fa-solid fa-mobile-screen-button" style={{ fontSize: '2rem', color: '#003ED8', marginBottom: '16px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#09090b', marginBottom: '10px' }}>Cross-Platform iOS & Android Apps</h3>
              <p style={{ color: '#52525b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>Native-feel mobile apps engineered with React Native & Expo. Single codebase deployment to App Store & Google Play Store.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#09090b', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> React Native & Expo CLI</li>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> Push Notifications & Offline Sync</li>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> App Store Submission Guarantee</li>
              </ul>
            </div>

            <div style={{ padding: '28px 20px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.1)', boxShadow: '0 8px 24px rgba(0, 62, 216, 0.04)', boxSizing: 'border-box' }}>
              <i className="fa-solid fa-robot" style={{ fontSize: '2rem', color: '#003ED8', marginBottom: '16px', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#09090b', marginBottom: '10px' }}>Custom AI & LLM Automation</h3>
              <p style={{ color: '#52525b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>Transform operational workflows with custom OpenAI, Claude, and Groq RAG chatbots, vector database integrations, and automated AI pipelines.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#09090b', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> Pinecone / Qdrant RAG Pipelines</li>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> Enterprise Knowledge Search</li>
                <li><i className="fa-solid fa-check" style={{ color: '#003ED8', marginRight: '8px' }}></i> Autonomous AI Workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section id="pricing" style={{ padding: '70px 16px', maxWidth: '1050px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Flexible USD Engagement Models</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto' }}>Transparent billing without hidden fees. Choose the hiring model that fits your product roadmap.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', textAlign: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#52525b', marginBottom: '6px' }}>Hourly Developer</h3>
              <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#09090b', marginBottom: '14px' }}>$7 <span style={{ fontSize: '0.95rem', color: '#71717a', fontWeight: 400 }}>/ hour</span></div>
              <p style={{ color: '#52525b', fontSize: '0.85rem', lineHeight: 1.55, marginBottom: '24px' }}>Ideal for short-term tasks, bug fixes, or specialized feature development.</p>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 700, textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Hire Hourly</Link>
          </div>

          <div style={{ padding: '28px 20px', borderRadius: '24px', background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', textAlign: 'center', position: 'relative', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '14px' }}>Most Popular</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>Dedicated Monthly Retainer</h3>
              <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>$800 <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>/ month</span></div>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', lineHeight: 1.55, marginBottom: '24px' }}>Full-time 160 hours/month senior developer working exclusively on your product.</p>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 800, textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Hire Monthly Developer</Link>
          </div>

          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', textAlign: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#52525b', marginBottom: '6px' }}>Fixed-Price Project</h3>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#09090b', marginBottom: '14px' }}>Custom Quote</div>
              <p style={{ color: '#52525b', fontSize: '0.85rem', lineHeight: 1.55, marginBottom: '24px' }}>Defined scope MVP development with guaranteed delivery timelines & milestone payouts.</p>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 700, textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Request Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Frequently Asked Questions (US Clients)</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Common questions about outsourcing web & app development from the USA to ChittorTech.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {[
              { q: "How do you handle timezone differences with US clients?", a: "Our development team overlaps 4 to 6 hours daily with EST, CST, and PST business hours. We join your daily standups and use Slack/Jira for real-time collaboration." },
              { q: "What legal contracts and IP protection do you provide?", a: "We execute standard US Non-Disclosure Agreements (NDAs) and Master Services Agreements (MSAs) explicitly assigning 100% code ownership and IP to your company." },
              { q: "What USD payment methods do you support?", a: "We accept USD payments via ACH bank transfer, Stripe, Wise, and International Wire Transfer." }
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
