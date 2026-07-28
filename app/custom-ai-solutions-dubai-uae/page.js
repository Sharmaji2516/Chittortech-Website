import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "Custom AI Chatbot & LLM Development Agency Dubai UAE | ChittorTech",
  description: "Premier AI automation agency in Dubai & UAE. Build custom OpenAI GPT-4o, RAG vector chatbots, Arabic/English AI assistants, and enterprise database integrations for UAE businesses.",
  alternates: {
    canonical: "https://www.chittortech.online/custom-ai-solutions-dubai-uae",
  },
  openGraph: {
    title: "Custom AI Chatbot Development Dubai UAE | ChittorTech",
    description: "Build secure, intelligent RAG AI chatbots and automated workflows tailored for Dubai, Abu Dhabi, and UAE enterprise markets.",
    url: "https://www.chittortech.online/custom-ai-solutions-dubai-uae",
    type: "website",
    images: [
      {
        url: "https://www.chittortech.online/ChittorTech%20Banner.png",
        width: 1200,
        height: 630,
        alt: "Custom AI Solutions Dubai UAE - ChittorTech",
      },
    ],
  },
  keywords: [
    "Custom AI chatbot development Dubai",
    "AI development company UAE",
    "RAG chatbot integration Dubai",
    "LLM solutions Abu Dhabi",
    "Arabic AI chatbot agency",
    "Enterprise AI automation UAE",
    "WhatsApp AI bot development Dubai",
  ],
};

export default function CustomAIDubaiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom AI Chatbot & LLM Integration Services UAE",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "description": "Enterprise-grade AI RAG chatbots, LLM integrations, and custom knowledge search solutions for Dubai & UAE businesses."
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
            <i className="fa-solid fa-robot" style={{ color: '#003ED8' }}></i>
            <span>Enterprise AI & LLM Automation Agency Dubai & UAE</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            Custom <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Chatbots & RAG Systems</span> for UAE Businesses
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '800px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            Automate 85% of customer support inquiries, connect internal company documents to vector databases (Pinecone/Qdrant), and launch custom bilingual <strong style={{ color: '#003ED8' }}>Arabic & English AI assistants</strong> for WhatsApp and Website.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-comments"></i> Request Live AI Demo & Consultation
            </Link>
            <a
              href="#use-cases"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 600, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-microchip"></i> Explore AI Use Cases
            </a>
          </div>

          {/* Key ROI Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>85%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Support Automation Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>&lt; 1.5s</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Average AI Response Time</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Bilingual Arabic & English</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>24/7</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>WhatsApp & Web Automation</div>
            </div>
          </div>

        </div>
      </section>

      {/* Live Chatbot Interactive Mockup */}
      <section style={{ padding: '50px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', borderBottom: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="badge-mini" style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '12px' }}>Live AI Experience</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '8px' }}>Bilingual AI Chatbot Simulator</h2>
            <p style={{ color: '#52525b', fontSize: '0.9rem' }}>Here is how ChittorTech custom AI assistants handle real customer inquiries in Dubai & UAE.</p>
          </div>

          {/* Mock Chat Window */}
          <div style={{ borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.15)', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.08)', overflow: 'hidden', width: '100%', boxSizing: 'border-box' }}>
            {/* Chat Header */}
            <div style={{ background: '#003ED8', padding: '16px 20px', color: '#ffffff', display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', color: '#003ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
                  🤖
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>ChittorTech AI Concierge (Dubai)</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></span> Online • GPT-4o + RAG Vector Engine
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#f8fafc', minHeight: '260px' }}>
              {/* User Msg 1 */}
              <div style={{ alignSelf: 'flex-end', background: '#003ED8', color: '#ffffff', padding: '12px 18px', borderRadius: '18px 18px 2px 18px', maxWidth: '85%', fontSize: '0.875rem', lineHeight: 1.5, boxShadow: '0 4px 12px rgba(0,62,216,0.15)' }}>
                Hi, I'm interested in buying a 2-bedroom luxury apartment in Business Bay Dubai with a post-handover payment plan.
              </div>

              {/* Bot Msg 1 */}
              <div style={{ alignSelf: 'flex-start', background: '#ffffff', color: '#09090b', padding: '14px 18px', borderRadius: '18px 18px 18px 2px', maxWidth: '90%', fontSize: '0.875rem', lineHeight: 1.6, border: '1px solid #e4e4e7', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ fontWeight: 700, color: '#003ED8', marginBottom: '4px' }}>مرحباً بك! (Welcome!)</div>
                I found 3 verified properties matching your exact criteria from our vector database:
                <ul style={{ margin: '8px 0 8px 18px', padding: 0 }}>
                  <li><strong>Peninsula Four (Business Bay)</strong>: AED 1.95M • 40/60 2-Yr Post-Handover</li>
                  <li><strong>Regalia by Deyaar</strong>: AED 1.82M • 7-Yr Payment Plan</li>
                </ul>
                Would you like me to schedule a WhatsApp consultation with our senior agent or send the full PDF brochure to your email?
              </div>

              {/* User Msg 2 (Arabic) */}
              <div style={{ alignSelf: 'flex-end', background: '#003ED8', color: '#ffffff', padding: '12px 18px', borderRadius: '18px 18px 2px 18px', maxWidth: '85%', fontSize: '0.875rem', lineHeight: 1.5 }}>
                نعم، أرسل الكتيب إلى البريد الإلكتروني (Yes, send the brochure to my email).
              </div>

              {/* Bot Msg 2 */}
              <div style={{ alignSelf: 'flex-start', background: '#ffffff', color: '#09090b', padding: '14px 18px', borderRadius: '18px 18px 18px 2px', maxWidth: '90%', fontSize: '0.875rem', lineHeight: 1.6, border: '1px solid #e4e4e7' }}>
                ✅ تم إرسال الكتيب بنجاح! (Brochure sent successfully!). Check your inbox for Peninsula Four complete layout & pricing sheet.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Industry Use Cases for UAE */}
      <section id="use-cases" style={{ padding: '80px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Industry Tailored Solutions</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Custom AI Use Cases for Dubai & UAE Markets</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto' }}>We engineer bespoke AI models designed for specific high-value business sectors.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {[
            { icon: "fa-building", title: "Real Estate & Property Bot", desc: "Automate property inquiries, layout brochures, payment plan calculations, and lead qualification for Dubai real estate brokerages.", color: "#003ED8" },
            { icon: "fa-comments", title: "Bilingual WhatsApp Support Bot", desc: "Native Arabic & English automated customer support with instant resolution for order tracking, FAQs, and appointment bookings 24/7.", color: "#059669" },
            { icon: "fa-database", title: "Enterprise RAG Document Search", desc: "Upload thousands of company PDFs, legal contracts, and financial documents to Pinecone/Qdrant for instant zero-hallucination internal AI search.", color: "#7c3aed" },
            { icon: "fa-user-doctor", title: "Healthcare & Clinic Booking Bot", desc: "Automate patient appointments, doctor availability, insurance approvals, and automated WhatsApp appointment reminders.", color: "#0284c7" },
            { icon: "fa-cart-shopping", title: "E-Commerce AI Shopping Assistant", desc: "Personalized product recommendations, cart recovery campaigns, and instant multi-currency checkout support on Shopify and Next.js platforms.", color: "#d97706" },
            { icon: "fa-network-wired", title: "Autonomous CRM & Workflow Agents", desc: "AI agents that qualify leads, trigger email sequences, parse incoming PDF invoices, and update Hubspot/Zendesk CRMs without human intervention.", color: "#dc2626" },
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '28px 24px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.1)', boxShadow: 'var(--shadow-soft)', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
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

      {/* AI Tech Stack & LLM Architecture */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Powered by Leading AI Models & Vector Infrastructure</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem' }}>We integrate best-in-class LLM foundation models and vector databases.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))', gap: '20px', width: '100%' }}>
            {[
              { title: "OpenAI GPT-4o & GPT-4o-mini", desc: "Top-tier conversational intelligence & multilingual precision." },
              { title: "Claude 3.5 Sonnet", desc: "Superior long-context processing & complex document reasoning." },
              { title: "Groq Llama 3 Inference", desc: "Ultra-fast sub-500ms AI responses for real-time chat." },
              { title: "Pinecone & Qdrant Vector DB", desc: "Scalable semantic embeddings & enterprise RAG retrieval." }
            ].map((tech, idx) => (
              <div key={idx} style={{ padding: '24px 20px', borderRadius: '18px', background: '#ffffff', border: '1px solid #e4e4e7', boxSizing: 'border-box' }}>
                <i className="fa-solid fa-microchip" style={{ fontSize: '1.5rem', color: '#003ED8', marginBottom: '12px', display: 'block' }}></i>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#09090b', marginBottom: '6px' }}>{tech.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#52525b', lineHeight: 1.5, margin: 0 }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Pricing (AED / USD) */}
      <section id="pricing" style={{ padding: '80px 16px', maxWidth: '1050px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Transparent AI Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Custom AI & Chatbot Packages</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Fixed-price setup and flexible monthly AI maintenance plans.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {/* Package 1 */}
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>Web / WhatsApp Customer Bot</h3>
              <p style={{ color: '#52525b', fontSize: '0.85rem', marginBottom: '20px' }}>Ideal for SMBs needing automated customer support and lead qualification.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#003ED8', marginBottom: '20px' }}>$600 <span style={{ fontSize: '0.9rem', color: '#71717a', fontWeight: 500 }}>(AED 2,200)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#09090b', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Single Web / WhatsApp integration</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Bilingual Arabic & English AI responses</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Custom FAQ training & lead collection</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 800, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Get Started</Link>
          </div>

          {/* Package 2 (Most Popular) */}
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>★ Enterprise Choice</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>Custom Enterprise RAG AI System</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '20px' }}>For businesses requiring vector database search over internal PDFs & ERP.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px' }}>$1,500 <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>(AED 5,500)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#ffffff', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Pinecone / Qdrant vector database integration</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Ingest thousands of company PDFs, catalog & ERP data</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Multi-channel (WhatsApp + Web Widget + Mobile SDK)</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 900, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Build Enterprise AI</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 16px', background: '#f8fafc', borderTop: '1px solid rgba(0, 62, 216, 0.06)', width: '100%' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Frequently Asked Questions (UAE Market)</h2>
            <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Common questions about implementing AI chatbots for businesses in Dubai & Abu Dhabi.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            {[
              { q: "How accurate is the Arabic AI language model for local UAE dialects?", a: "We fine-tune our models using OpenAI GPT-4o and custom prompt engineering so the AI understands Modern Standard Arabic (MSA) as well as GCC/Emirati dialect nuances." },
              { q: "Can the AI chatbot connect directly to our company's WhatsApp Business account?", a: "Yes, we integrate with the official WhatsApp Business Cloud API. Your customers can chat directly with your AI bot inside WhatsApp." },
              { q: "Is our internal company data safe and private?", a: "100%. We deploy private vector embeddings with enterprise API endpoints ensuring zero data sharing with third-party public AI training models." },
              { q: "How long does it take to deploy a custom RAG AI chatbot?", a: "Standard chatbots are deployed within 5 to 7 days. Custom enterprise RAG vector systems take 10 to 14 days." }
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
