"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Chittorgarh Tourism",
    category: "Tourism & Culture",
    description: "An immersive cultural tourism platform featuring interactive historical guides and virtual heritage tours for an unparalleled digital exploration of Chittorgarh.",
    image: "/assets/chittorgarh_fort.webp",
    link: "https://chittorgarh-tourism.vercel.app/"
  },
  {
    title: "Cafe S Website",
    category: "E-Commerce & Food",
    description: "A sophisticated digital hospitality solution for Cafe S, integrating a dynamic visual menu and a seamless online ordering system for a premium cafe experience.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
    link: "https://cafe-s-website.vercel.app/"
  },
  {
    title: "Shaadi Sutra",
    category: "Event Planning",
    description: "A luxurious wedding management portal providing end-to-end event coordination, vendor management, and bespoke bridal services with meticulous attention to detail.",
    image: "/assets/shaadi_sutra_official.png",
    link: "https://shaadi-sutra.vercel.app/"
  },
  {
    title: "Jain Dharamshala",
    category: "Hospitality & Religious",
    description: "A comprehensive Real-time Dharamshala Management System featuring live room availability tracking, automated booking allotment, and instant billing solutions.",
    image: "/assets/jain_dharamshala.png",
    link: "https://jain-dharamsala.vercel.app/#rooms"
  },
  {
    title: "Mehndi Artist Portfolio",
    category: "Arts & Portfolio",
    description: "An intuitive online booking platform designed for professional mehndi artists, enabling seamless appointment scheduling for bridal and cultural events.",
    image: "/assets/mehndi_artist.png",
    link: "https://mehendi-website.vercel.app/"
  },
  {
    title: "Vijay Laxmi Sharma Aachar",
    category: "Food & Business",
    description: "A robust e-commerce storefront for a traditional pickle business, featuring authentic flavors with integrated online ordering and secure payments.",
    image: "/assets/aachar_business.png",
    link: "https://www.mewari-achar.shop/"
  },
  {
    title: "Professional Portfolio",
    category: "Portfolio & Branding",
    description: "A sophisticated portfolio website designed to showcase technical expertise, academic background, and a diverse range of creative projects.",
    image: "/assets/portfolio.png",
    link: "https://portfolio-six-smoky-vhgmd7wfta.vercel.app/"
  },
  {
    title: "Hotel's Website",
    category: "Frontend Only",
    description: "A premium and responsive frontend design for a luxury hotel, showcasing elegant layouts, seamless animations, and a high-end visual aesthetic.",
    image: "/assets/hotels_website.png",
    link: "https://hotel-website-eight-flax.vercel.app/"
  }
];

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section id="projects">
        <div className="container">
          <h2 className="section-title reveal">Innovative Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
            <div className="project-card coming-soon-card reveal">
              <i className="fas fa-rocket"></i>
              <h3>More Projects</h3>
              <p>We are currently working on some exciting new digital experiences. Stay tuned for more innovations!</p>
              <span className="badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
