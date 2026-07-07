"use client";

import { useEffect, useState, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PolicyModal from "./PolicyModal";
import ChatBot from "./ChatBot";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  useEffect(() => {
    // Hide the loader after a short delay on hard refresh to prevent FOUC
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercent = (window.scrollY / height) * 100;
        scrollProgress.style.width = `${scrolledPercent}%`;
      }
    };

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 992) return; // Don't run on mobile where it's hidden

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const cursor = document.querySelector('.cursor-glow');
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      });
    };

    // Intersection Observer for Scroll Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const observeElements = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    observeElements();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      {!isPageLoaded && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--bg-dark)',
          zIndex: 9999999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-main)',
        }}>
          <img 
            src="/logo.png" 
            alt="ChittorTech Logo" 
            style={{ 
              width: '80px', 
              height: 'auto', 
              marginBottom: '30px',
              animation: 'logoPulse 2s ease-in-out infinite'
            }} 
          />
          <div style={{
            width: '45px',
            height: '45px',
            border: '3px solid rgba(0, 62, 216, 0.1)',
            borderTopColor: 'var(--primary)',
            borderRightColor: 'var(--primary)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            marginBottom: '20px'
          }}></div>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
            letterSpacing: '2px', 
            fontWeight: '700', 
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            padding: '0 20px',
            lineHeight: '1.4'
          }}>Authenticating to the ChittorTech System...</h2>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            @keyframes logoPulse {
              0% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 10px rgba(0, 62, 216, 0.4)); }
              100% { transform: scale(1); opacity: 0.8; }
            }
          `}</style>
        </div>
      )}
      <div className="cursor-glow"></div>
      <div className="scroll-progress"></div>
      <Navbar />
      <main>
        {children}
      </main>
      {!isAdminPage && <Footer onModalOpen={setActiveModal} />}
      {!isAdminPage && (
        <Suspense fallback={null}>
          <ChatBot onModalOpen={setActiveModal} />
        </Suspense>
      )}
      {activeModal && (
        <PolicyModal 
          type={activeModal} 
          onClose={() => setActiveModal(null)} 
        />
      )}
    </>
  );
}
