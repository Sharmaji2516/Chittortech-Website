import React from "react";
import Link from "next/link";
import StrategyCTA from "@/components/StrategyCTA";

export const metadata = {
  title: "AI Integration & Custom LLM Chatbot Services | ChittorTech",
  description: "Premier AI automation & LLM integration agency. We engineer custom OpenAI GPT-4o chatbots, RAG vector document search, and bilingual WhatsApp AI assistants.",
  alternates: {
    canonical: "https://www.chittortech.online/services/ai-integration",
  },
  openGraph: {
    title: "AI Integration & LLM Development Agency | ChittorTech",
    description: "Automate 85% of customer support and enterprise workflows with custom AI chatbots and RAG vector databases.",
    url: "https://www.chittortech.online/services/ai-integration",
    type: "website",
  },
  keywords: [
    "AI integration agency India",
    "Custom LLM development company",
    "RAG chatbot integration",
    "OpenAI GPT-4o chatbot developers",
    "WhatsApp AI automation company",
  ],
};

export default function AIIntegrationServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & LLM Integration Services",
    "provider": {
      "@type": "Organization",
      "name": "ChittorTech",
      "url": "https://www.chittortech.online"
    },
    "description": "Enterprise AI chatbot development, custom RAG vector database implementation, and LLM automation pipelines."
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
            <i className="fa-solid fa-brain" style={{ color: '#003ED8' }}></i>
            <span>Enterprise AI, LLM & RAG Automation Agency</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: '20px', width: '100%' }}>
            Enterprise <span style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI & LLM Integration</span> Services
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)', color: '#52525b', maxWidth: '800px', margin: '0 auto 36px', lineHeight: 1.6, width: '100%' }}>
            Transform your business with custom OpenAI GPT-4o, Claude 3.5, and Groq Llama 3 AI models. We build private RAG vector knowledge bases over your company PDFs and automate WhatsApp & web customer support.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px', width: '100%' }}>
            <Link
              href="/contact"
              style={{ background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', fontWeight: 800, padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px rgba(0, 62, 216, 0.25)', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-robot"></i> Request Live AI Consultation
            </Link>
            <a
              href="#pricing"
              style={{ background: '#f4f4f5', color: '#09090b', fontWeight: 600, padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #e4e4e7', fontSize: '0.95rem', maxWidth: '100%', textAlign: 'center', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fa-solid fa-tag"></i> View AI Bot Packages
            </a>
          </div>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', padding: '24px 16px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0, 62, 216, 0.12)', boxShadow: '0 15px 35px rgba(0, 62, 216, 0.05)', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>85%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Support Ticket Automation</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>&lt; 500ms</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Groq AI Response Latency</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>0%</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Zero Hallucination RAG DB</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#003ED8', lineHeight: 1 }}>24/7</div>
              <div style={{ fontSize: '0.825rem', color: '#52525b', fontWeight: 600, marginTop: '6px' }}>Automated Customer Sales</div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Offerings */}
      <section style={{ padding: '70px 16px', maxWidth: '1150px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>AI Capabilities</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>Custom AI Engineering Services</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>Deploy intelligent LLM models into your existing product or website.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          {[
            { icon: "fa-comments", title: "Web & WhatsApp AI Chatbots", desc: "Custom conversational AI bots for customer support, lead qualification, appointment booking, and instant order queries.", color: "#003ED8" },
            { icon: "fa-database", title: "Custom RAG Vector Databases", desc: "Ingest thousands of internal company PDFs, policy manuals, and SQL databases into Pinecone/Qdrant for accurate AI semantic search.", color: "#002FA3" },
            { icon: "fa-network-wired", title: "Autonomous AI Agents", desc: "AI workflows that automatically parse incoming emails, extract data from PDF invoices, and update your CRM database.", color: "#7c3aed" },
            { icon: "fa-microchip", title: "OpenAI, Claude & Groq LLM API", desc: "Fine-tune foundation AI models and deploy ultra-fast sub-500ms Groq Llama 3 inference endpoints for enterprise applications.", color: "#0284c7" },
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
          <div className="badge-mini" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'rgba(0, 62, 216, 0.08)', color: '#003ED8', fontWeight: 700, fontSize: '0.8rem', marginBottom: '14px' }}>Clear AI Packages</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#09090b', marginBottom: '10px' }}>AI Solution Plans</h2>
          <p style={{ color: '#52525b', fontSize: '0.95rem' }}>Turnkey chatbot setup and enterprise RAG vector search systems.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ padding: '28px 20px', borderRadius: '24px', background: '#ffffff', border: '1px solid #e4e4e7', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>Starter Web / WhatsApp Bot</h3>
              <p style={{ color: '#52525b', fontSize: '0.85rem', marginBottom: '20px' }}>Ideal for SMB customer support and lead collection.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#003ED8', marginBottom: '20px' }}>$600 <span style={{ fontSize: '0.9rem', color: '#71717a', fontWeight: 500 }}>(₹48,000)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#09090b', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Single Web Widget or WhatsApp API Bot</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>Custom FAQ training & Lead Capture</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#003ED8', marginTop: '4px' }}></i><span>OpenAI GPT-4o Integration</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#f4f4f5', color: '#09090b', fontWeight: 800, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Build Starter Bot</Link>
          </div>

          <div style={{ padding: '28px 20px', borderRadius: '24px', background: 'linear-gradient(135deg, #003ED8 0%, #002FA3 100%)', color: '#ffffff', boxShadow: '0 20px 40px rgba(0, 62, 216, 0.25)', position: 'relative', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: '50px', background: '#09090b', color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '16px' }}>★ Enterprise Choice</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>Enterprise RAG AI System</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '20px' }}>Custom vector database search over internal PDFs & ERP.</p>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginBottom: '20px' }}>$1,500 <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>(₹1,20,000)</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', color: '#ffffff', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Pinecone / Qdrant Vector DB Integration</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Ingest thousands of company PDFs & ERP databases</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><i className="fa-solid fa-check" style={{ color: '#ffffff', marginTop: '4px' }}></i><span>Bilingual English & Regional language AI</span></li>
              </ul>
            </div>
            <Link href="/contact" style={{ display: 'block', padding: '14px', borderRadius: '50px', background: '#ffffff', color: '#003ED8', fontWeight: 900, textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}>Build Enterprise AI</Link>
          </div>
        </div>
      </section>

      <StrategyCTA />
    </main>
  );
}
