"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
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
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
      <div className="container nav-content">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img src="/logo.png" alt="ChittorTech Logo" />
          <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.5px' }}>CHITTORTECH</span>
        </Link>

        <div 
          className={`menu-toggle ${menuActive ? "active" : ""}`} 
          onClick={() => setMenuActive(!menuActive)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${menuActive ? "active" : ""}`}>
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
          <li className="mobile-only">
            <Link href="/contact" className="btn btn-primary" onClick={() => setMenuActive(false)}>
              Get Started
            </Link>
          </li>
        </ul>
        <Link href="/contact" className="btn btn-primary nav-btn">Get Started</Link>
      </div>
    </nav>
  );
}
