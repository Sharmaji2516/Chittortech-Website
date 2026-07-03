"use client";
import React from 'react';
import './internship.css';

const ShahiIcons = {
    AI: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
            <path d="M12 7v2M12 15v2M7 12h2M15 12h2"></path>
        </svg>
    ),
    SaaS: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
    ),
    Infrastructure: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
    ),
    UX: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v8M8 12h8"></path>
        </svg>
    ),
    Growth: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
            <path d="M3 6l9 6 9-6-9-6-9 6z"></path>
            <path d="M3 18l9 6 9-6-9-6-9 6z"></path>
        </svg>
    ),
    WebDev: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    )
};

export default function InternshipPage() {
    const legacyTracks = [
        {
            title: "Full-Stack Web Development",
            icon: <ShahiIcons.WebDev />,
            desc: "Master modern web development with React, Next.js, Node.js, and MongoDB. Build scalable and highly responsive web applications from scratch.",
            skills: ["React/Next.js", "Node.js/Express", "MongoDB", "Modern UI/UX"],
            link: "https://visitchittorgarh.in/"
        },
        {
            title: "AI & RAG Architecture",
            icon: <ShahiIcons.AI />,
            desc: "Architect custom AI agents and RAG systems. Master context persistence, prompt engineering, and NotebookLLM content pipelines.",
            skills: ["RAG Systems", "NotebookLLM", "Vector DBs", "Groq/LLM"],
            link: "https://www.mewari-achar.shop/"
        },
        {
            title: "Enterprise SaaS & Admin",
            icon: <ShahiIcons.SaaS />,
            desc: "Build mission-critical systems like Hospitality Hubs and Event Management SaaS (Shaadi Sutra). Focus on Node.js backends and real-time synchronization.",
            skills: ["Node.js Backend", "Next.js Edge", "Admin Hubs", "Real-time Sync"],
            link: "https://shaadi-sutra.vercel.app/"
        },
        {
            title: "Infrastructure Automation",
            icon: <ShahiIcons.Infrastructure />,
            desc: "Engineer high-performance systems like MailPulse Elite and Smart QR. Master SMTP protocols and secure contactless token protocols.",
            skills: ["SMTP Protocols", "QR Security", "Node Processing", "Edge Runtime"],
            link: "https://smtp-server-kohl.vercel.app/"
        },
        {
            title: "Luxury UX & Tourism Tech",
            icon: <ShahiIcons.UX />,
            desc: "Craft immersive, multi-lingual heritage guides and SOS systems for tourism portals. Focus on high-fidelity heritage Discovery UX.",
            skills: ["Heritage UX", "Motion Design", "Multi-lingual Discovery", "SOS Systems"],
            link: "https://chittorgarh-tourism.in/"
        },
        {
            title: "E-Commerce & Biz Growth",
            icon: <ShahiIcons.Growth />,
            desc: "Digitize local heritage brands with global-scale infrastructure. Focus on WhatsApp integration and automated inventory scaling.",
            skills: ["WhatsApp API", "Inventory Scaling", "Brand Storytelling", "Global Commerce"],
            link: "https://www.mewari-achar.shop/"
        }
    ];

    const benefits = [
        { title: "Elite Mentorship", desc: "One-on-one sessions with veteran engineers and designers." },
        { title: "Shahi Heritage", desc: "Work on products that carry the premium ChittorTech legacy." },
        { title: "Global Exposure", desc: "Collaborate on projects for international enterprise clients." }
    ];

    return (
        <main className="intern-page">

            
            {/* Hero Section: The Royal Welcome */}
            <section className="shahi-hero">
                <span className="hero-badge">Professional Training & Internships</span>
                <h1>Build Your <span className="shahi-gold-text">Tech Career</span> With Us</h1>
                <p className="hero-desc">
                    Join our program to learn real-world tech skills. Work on live projects, gain hands-on experience, and start your career with ChittorTech.
                </p>
                <div className="hero-cta-group">
                    <button className="btn-shahi-primary" onClick={() => window.location.href = '/internship/apply'}>Apply Now</button>
                    <button className="btn-shahi-outline" onClick={() => document.getElementById('legacy-tracks').scrollIntoView({ behavior: 'smooth' })}>View Legacy Tracks</button>
                </div>
            </section>

            {/* Legacy Tracks Section */}
            <section className="legacy-tracks" id="legacy-tracks">
                <span className="section-label">THE CURRICULUM</span>
                <h2 className="section-title">Choose Your <span className="shahi-gold-text">Legacy Track</span></h2>
                <div className="tracks-container">
                    {legacyTracks.map((track, i) => (
                        <div key={i} className="track-shahi-card">
                            <div className="track-icon-box">{track.icon}</div>
                            <h3>{track.title}</h3>
                            <p>{track.desc}</p>
                            <div className="skill-pills">
                                {track.skills.map((skill, j) => (
                                    <span key={j} className="pill">{skill}</span>
                                ))}
                            </div>
                            <button 
                                className="track-live-btn" 
                                onClick={() => window.open(track.link, '_blank')}
                            >
                                Live Experience 
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Selection Process: How It Works */}
            <section className="ascension-path">
                <span className="section-label">PROCESS</span>
                <h2 className="section-title">The <span className="shahi-gold-text">Selection Process</span></h2>
                <div className="path-grid">
                    {[
                        { num: "01", title: "Profile Review", desc: "We review your skills and previous projects." },
                        { num: "02", title: "Interview", desc: "A conversation about your technical skills and interests." },
                        { num: "03", title: "Joining", desc: "Welcome to the team. Your journey begins today." }
                    ].map((step, i) => (
                        <div key={i} className="path-step">
                            <div className="step-circle">{step.num}</div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>



        </main>
    );
}
