"use client";

import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card reveal">
      <div className="project-img" style={{ backgroundImage: `url('${project.image}')` }}></div>
      <div className="project-info">
        <span className="badge">{project.category}</span>
        <h3>{project.title}</h3>
        
        <p className={isExpanded ? "expanded-text" : "clamped-text"}>
          {project.description}
        </p>
        
        {project.description.length > 80 && (
          <button 
            className="read-more-btn" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "... Read More"}
          </button>
        )}
        
        <br/><br/>
        <a href={project.link} target="_blank" className="project-link">
          View Live <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}
