"use client";

import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card reveal" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="project-img-container" style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '16/9',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'block'
          }}
          className="project-image-element"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)',
          pointerEvents: 'none'
        }}></div>
      </div>

      <div className="project-info" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }}>
          <span className="badge" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>{project.category}</span>
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '800', wordBreak: 'break-word' }}>{project.title}</h3>

        <p className={isExpanded ? "expanded-text" : "clamped-text"} style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
          {project.description}
        </p>

        {project.description.length > 80 && (
          <button
            className="read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <a href={project.link} target="_blank" className="project-link" style={{ width: '100%', justifyContent: 'center' }}>
            Explore Project <i className="fas fa-arrow-right" style={{ marginLeft: '8px', fontSize: '0.8rem' }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}
