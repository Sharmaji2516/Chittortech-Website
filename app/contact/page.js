"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '100px' }}>
      <section id="contact">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Let’s Build Something Great</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Response within 24 hours</p>
          </div>
          <div className="contact-container">
            <div className="contact-info reveal">
              <h3>Contact Details</h3>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@chittortech.online</p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-phone"></i></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 75979 01057</p>
                  <p>+91 82338 16674</p>
                </div>
              </div>
              <div className="info-box">
                <div className="info-icon"><i className="fas fa-location-dot"></i></div>
                <div>
                  <h4>Location</h4>
                  <p>Bcw Colony Sector-1, Chittaurgarh</p>
                </div>
              </div>
              <div style={{ marginTop: '3rem' }}>
                <span style={{ fontWeight: 600, marginRight: '1.5rem' }}>Follow Us:</span>
                <a href="#"><i className="fab fa-linkedin fa-lg"></i></a> &nbsp;&nbsp;
                <a href="#"><i className="fab fa-twitter fa-lg"></i></a> &nbsp;&nbsp;
                <a href="#"><i className="fab fa-github fa-lg"></i></a>
              </div>
            </div>
            <div className="contact-form reveal">
              <form action="https://formspree.io/f/xwvroogw" method="POST" id="chittortech-form">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <textarea name="message" rows="5" placeholder="Project Inquiry" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Start Your Project</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
