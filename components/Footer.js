"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ onModalOpen }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative w-full border-t border-neutral-100 bg-[#fbfbfb] pt-16 pb-12 overflow-hidden" style={{ zIndex: 10 }}>
      {/* Decorative vector grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(rgba(0, 62, 216, 0.15) 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }}></div>

      <div className="container relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col">
        {/* Top CTA Block */}
        <div className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-16">
          <h2 className="text-neutral-900 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4" style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#09090b', fontWeight: 800 }}>
            The Confidence experience of <br />
            building premium digital solutions.
          </h2>
          <p className="text-neutral-500 text-sm md:text-base font-normal leading-relaxed mb-8 max-w-[480px] mx-auto" style={{ color: '#52525b' }}>
            Design fluid apps, scale enterprise web applications, and optimize search engine visibility with our expert engineering team.
          </p>
          <Link href="/contact" className="inline-block bg-[#003ED8] hover:bg-[#0b48ff] font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-[1.02] shadow-[0_4px_15px_rgba(0,62,216,0.15)] hover:shadow-[0_4px_20px_rgba(0,62,216,0.3)]" style={{ color: '#ffffff', backgroundColor: '#003ED8', textDecoration: 'none' }}>
            Start Your Project
          </Link>
        </div>

        {/* Horizontal separator */}
        <div className="border-t border-neutral-200/60 my-8" style={{ borderColor: 'rgba(0, 62, 216, 0.08)' }}></div>

        {/* Footer main grid columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 text-left w-full">
          {/* Logo & About & Newsletter column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="ChittorTech Logo" 
                width={40} 
                height={40} 
                className="flex-shrink-0 object-contain" 
              />
              <span className="font-heading font-extrabold text-neutral-900 text-xl tracking-tight" style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#09090b', fontWeight: 800 }}>ChittorTech</span>
            </div>
            <p className="text-neutral-500 text-sm font-normal leading-relaxed" style={{ color: '#52525b' }}>
              ChittorTech is the leading IT company and web development agency in Chittorgarh. We engineer next-gen cross-platform apps, enterprise SaaS, and AI automation.
            </p>
            
            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="relative w-full max-w-[340px] flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 bg-white rounded-full border border-neutral-300 px-5 pr-[120px] text-neutral-800 text-sm outline-none focus:border-[#003ED8] focus:ring-2 focus:ring-[#003ED8]/10 transition-all shadow-sm"
                style={{ border: '1px solid #d4d4d8' }}
              />
              <button type="submit" className="absolute right-1 top-1 bottom-1 bg-[#003ED8] hover:bg-[#0b48ff] text-xs font-semibold px-4 rounded-full transition-colors" style={{ color: '#ffffff', backgroundColor: '#003ED8' }}>
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
            <p className="text-zinc-400 text-xs pl-2" style={{ color: '#a1a1aa' }}>
              Recognized by iStart Rajasthan & Startup India (DPIIT).
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-900 text-sm font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#09090b', fontWeight: 700 }}>Services</h4>
              <ul className="space-y-3 flex flex-col">
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/services" style={{ color: '#52525b' }}>Web Development</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/services" style={{ color: '#52525b' }}>Mobile App Dev</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/services" style={{ color: '#52525b' }}>E-Commerce Setup</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/services" style={{ color: '#52525b' }}>Custom Software</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/services" style={{ color: '#52525b' }}>AI Integration</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-900 text-sm font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#09090b', fontWeight: 700 }}>Company</h4>
              <ul className="space-y-3 flex flex-col">
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/about" style={{ color: '#52525b' }}>About Us</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/services" style={{ color: '#52525b' }}>Our Projects</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/reviews" style={{ color: '#52525b' }}>Reviews</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/internship" style={{ color: '#52525b' }}>Internship</Link></li>
                <li><Link className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors" href="/contact" style={{ color: '#52525b' }}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-neutral-900 text-sm font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-poppins), sans-serif', color: '#09090b', fontWeight: 700 }}>Legal</h4>
              <ul className="space-y-3 flex flex-col">
                <li><a className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); onModalOpen?.('privacy'); }} style={{ color: '#52525b', cursor: 'pointer' }}>Privacy Policy</a></li>
                <li><a className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); onModalOpen?.('terms'); }} style={{ color: '#52525b', cursor: 'pointer' }}>Terms of Service</a></li>
                <li><a className="text-neutral-500 text-sm hover:text-[#003ED8] transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); onModalOpen?.('support'); }} style={{ color: '#52525b', cursor: 'pointer' }}>Contact & Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-neutral-200/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm font-normal text-center sm:text-left" style={{ color: '#52525b' }}>
            &copy; 2026 ChittorTech. All rights reserved. Registered MSME | Made in India
          </p>
          <div className="flex items-center gap-6 justify-center">
            <span className="text-neutral-500 text-sm" style={{ color: '#52525b' }}>Government Recognized Startup</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
