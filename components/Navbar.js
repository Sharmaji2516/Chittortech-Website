"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DemoModal from "./DemoModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Internship", href: "/internship" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className={"top-banner " + (scrolled ? "scrolled" : "")}>
        <button onClick={() => setDemoModalOpen(true)} className="top-banner-content" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>
          <span className="desktop-only-inline">👉 Claim Your Free Tech Strategy Session & Accelerate Business Growth</span><span className="mobile-only-inline">👉 Book a Free Demo Call</span>
        </button>
      </div>
      <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
        <div className="container nav-content desktop-layout">
          {/* Logo Section */}
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image 
              src="/logo.png" 
              alt="ChittorTech Logo" 
              width={35} 
              height={35} 
              priority
              style={{ height: '35px', width: 'auto' }} 
            />
            <span className="desktop-brand-name" style={{ fontWeight: '800', fontSize: '1.4rem', letterSpacing: '-1px' }}>ChittorTech</span>
          </Link>
          <div className="brand-name" style={{ fontWeight: '800', fontSize: '1.2rem' }}>ChittorTech</div>

          {/* Desktop Center Links */}
          <div className="desktop-center-wrapper">
            <ul className="desktop-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/admin">Admin</Link></li>
            </ul>
          </div>

          {/* Desktop Right Social Icons */}
          <div className="desktop-social-icons">
            <a href="https://www.linkedin.com/company/chittortech" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/917597451057" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chittortech@gmail.com&su=New%20Project%20Inquiry" target="_blank" rel="noopener noreferrer" className="social-icon" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <button 
            className={"menu-toggle " + (menuActive ? "active" : "")} 
            onClick={() => setMenuActive(!menuActive)}
            aria-label={menuActive ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuActive}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Mobile Links */}
          <ul className={"nav-links " + (menuActive ? "active" : "")}>
            <li className="mobile-only" style={{ marginBottom: '30px', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
              <Image 
                src="/logo.png" 
                alt="ChittorTech Logo" 
                width={70} 
                height={70} 
                style={{ opacity: 1, filter: 'drop-shadow(0px 0px 15px rgba(0, 62, 216, 0.3))' }}
              />
            </li>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={pathname === link.href ? "active" : ""}
                  onClick={() => setMenuActive(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li><Link href="/admin" onClick={() => setMenuActive(false)}>Admin</Link></li>
          </ul>
        </div>
      </nav>
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}
