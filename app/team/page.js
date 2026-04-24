"use client";

import React from "react";

export default function TeamPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section id="team">
        <div className="container">
          <h2 className="section-title reveal">Meet The Founders</h2>
          <div className="team-grid">
            <div className="team-card reveal">
              <img src="/assets/kush_sharma.jpg" alt="Kush Sharma" className="team-img" />
              <h4>Kush Sharma</h4>
              <span>Founder</span>
            </div>
            <div className="team-card reveal">
              <img src="/assets/lav_sharma.jpg" alt="Lav Sharma" className="team-img" />
              <h4>Lav Sharma</h4>
              <span>Director</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
