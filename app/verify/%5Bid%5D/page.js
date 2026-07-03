"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";

const Icons = {
    ShieldCheck: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '64px', height: '64px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    ),
    AlertTriangle: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '64px', height: '64px' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    )
};

export default function VerificationPage() {
    const { id } = useParams();
    const [status, setStatus] = useState("loading"); // loading, verified, invalid
    const [data, setData] = useState(null);

    useEffect(() => {
        if (id) verifyCertificate();
    }, [id]);

    const verifyCertificate = async () => {
        try {
            const q = query(collection(db, "recognition"), where("verificationCode", "==", id));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
                setData(querySnapshot.docs[0].data());
                setStatus("verified");
            } else {
                setStatus("invalid");
            }
        } catch (error) {
            console.error("Verification failed:", error);
            setStatus("invalid");
        }
    };

    return (
        <main className="verify-page">
            <div className="bg-gradient"></div>
            
            <div className="verify-container">
                <header className="verify-header">
                    <img src="/logo.png" alt="ChittorTech" className="shahi-logo" />
                    <h1>CHITTOR<span>TECH</span></h1>
                    <p>Official Verification Portal</p>
                </header>

                <div className={`status-card ${status}`}>
                    {status === "loading" && (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Querying Secure Database...</p>
                        </div>
                    )}

                    {status === "verified" && (
                        <div className="verified-state">
                            <div className="status-icon"><Icons.ShieldCheck /></div>
                            <div className="status-badge">Authentic Recognition</div>
                            
                            <div className="recipient-info">
                                <h2>{data.recipientName}</h2>
                                <p className="role">{data.role}</p>
                            </div>

                            <div className="info-grid">
                                <div className="info-item">
                                    <label>Document Type</label>
                                    <span>{data.type}</span>
                                </div>
                                <div className="info-item">
                                    <label>Intern ID</label>
                                    <span>{data.internID}</span>
                                </div>
                                <div className="info-item">
                                    <label>Issued On</label>
                                    <span>{data.issuedAt?.toDate().toLocaleDateString()}</span>
                                </div>
                                <div className="info-item">
                                    <label>Duration</label>
                                    <span>{data.startDate} — {data.endDate}</span>
                                </div>
                            </div>

                            <div className="verification-footer">
                                <p>Verification ID: <strong>{id}</strong></p>
                                <p>This document is digitally signed and verified by ChittorTech Enterprise Solutions.</p>
                            </div>
                        </div>
                    )}

                    {status === "invalid" && (
                        <div className="invalid-state">
                            <div className="status-icon"><Icons.AlertTriangle /></div>
                            <h3>Invalid Credential</h3>
                            <p>The verification code <strong>{id}</strong> could not be found in our secure registry.</p>
                            <a href="/" className="home-link">Return to Home</a>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .verify-page {
                    min-height: 100vh;
                    background: #0A0A0F;
                    color: #fff;
                    font-family: 'Outfit', sans-serif;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .bg-gradient {
                    position: fixed;
                    inset: 0;
                    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05), transparent 70%);
                    pointer-events: none;
                }

                .verify-container {
                    width: 100%;
                    max-width: 600px;
                    text-align: center;
                    z-index: 10;
                }

                .verify-header { margin-bottom: 3rem; }
                .shahi-logo { width: 80px; margin-bottom: 1rem; }
                .verify-header h1 { font-size: 2rem; letter-spacing: 2px; }
                .verify-header h1 span { color: #D4AF37; }
                .verify-header p { color: #64748b; font-size: 0.9rem; }

                .status-card {
                    background: rgba(255, 255, 255, 0.02);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 40px;
                    padding: 3rem 2rem;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                }

                .status-badge {
                    display: inline-block;
                    background: rgba(34, 197, 94, 0.1);
                    color: #22c55e;
                    padding: 0.5rem 1rem;
                    border-radius: 100px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 1.5rem 0;
                }

                .verified .status-icon { color: #22c55e; }
                .invalid .status-icon { color: #ef4444; }

                .recipient-info h2 { font-size: 2.5rem; margin-bottom: 0.5rem; }
                .recipient-info .role { color: #D4AF37; font-size: 1.1rem; font-weight: 600; }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin: 3rem 0;
                    text-align: left;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    padding: 2rem 0;
                }

                .info-item label { display: block; font-size: 0.75rem; color: #64748b; text-transform: uppercase; margin-bottom: 0.5rem; }
                .info-item span { font-weight: 600; color: #fff; }

                .verification-footer { color: #64748b; font-size: 0.8rem; line-height: 1.6; }
                .verification-footer strong { color: #fff; }

                .invalid-state h3 { font-size: 1.5rem; margin: 1rem 0; }
                .invalid-state p { color: #94a3b8; margin-bottom: 2rem; }
                .home-link {
                    display: inline-block;
                    background: #D4AF37;
                    color: #000;
                    padding: 1rem 2rem;
                    border-radius: 12px;
                    font-weight: 700;
                    text-decoration: none;
                }

                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(212, 175, 55, 0.1);
                    border-top-color: #D4AF37;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1.5rem;
                }

                @keyframes spin { to { transform: rotate(360deg); } }

                @media (max-width: 480px) {
                    .info-grid { grid-template-columns: 1fr; gap: 1rem; }
                    .recipient-info h2 { font-size: 1.8rem; }
                }
            `}</style>
        </main>
    );
}
