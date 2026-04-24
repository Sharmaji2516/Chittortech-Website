"use client";

import { useEffect } from "react";

export default function ClientLayout({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercent = (window.scrollY / height) * 100;
        scrollProgress.style.width = `${scrolledPercent}%`;
      }
    };

    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor-glow');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Intersection Observer for Scroll Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
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
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Re-observe on route changes (using a simple MutationObserver as a fallback)
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-glow"></div>
      <div className="scroll-progress"></div>
      {children}
    </>
  );
}
