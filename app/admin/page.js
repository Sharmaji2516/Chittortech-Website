"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthContext";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore";

const STEPS = {
    EMAIL: 'EMAIL',
    PASSWORD: 'PASSWORD',
    SIGNUP: 'SIGNUP',
    OTP: 'OTP',
    REQUEST_SENT: 'REQUEST_SENT'
};

const Icons = {
    Shield: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    Mail: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    Lock: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    User: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    ArrowRight: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    ),
    Check: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}><polyline points="20 6 9 17 4 12"/></svg>
    ),
    ChevronLeft: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><polyline points="15 18 9 12 15 6"/></svg>
    ),
    Alert: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    )
};

const PROJECTS = [
    {
        id: 'chittor-tourism',
        title: 'Chittorgarh Tourism',
        client: 'Akechi Webcraft IT Solution (Ritesh)',
        domain: 'chittorgarh-tourism.in',
        hosting: 'Vercel',
        total: '1,82,500',
        received: '1,70,000',
        pending: '12,500',
        start: '01/03/2026',
        end: '31/03/2026',
        url: 'https://www.chittorgarh-tourism.in/',
        description: 'Mobile application and website development for digital presence.'
    },
    {
        id: 'dharamshala-mgmt',
        title: 'Dharamshala Management System',
        client: 'Jain Dharamshala (Pravin)',
        domain: 'jain-dharamsala-front.vercel.app',
        hosting: 'Vercel',
        total: '20,000',
        received: '20,000',
        pending: '0',
        start: '15/03/2026',
        end: '15/04/2026',
        url: 'https://jain-dharamsala-front.vercel.app/',
        description: 'Online Bookings and Form Filling and Real time room availability.'
    },
    {
        id: 'shaadi-sutra',
        title: 'Shaadi Sutra',
        client: 'Shaadi Sutra Events',
        domain: 'shaadisutra.online',
        hosting: 'Vercel',
        total: '45,000',
        received: '30,000',
        pending: '15,000',
        start: '01/04/2026',
        end: 'TBD',
        url: 'https://shaadisutra.online',
        description: 'Premium wedding planning and event management platform.'
    },
    {
        id: 'mewari-achar',
        title: 'Mewari Achar',
        client: 'Mewari Food Products',
        domain: 'mewariachar.com',
        hosting: 'HostGator',
        total: '15,000',
        received: '15,000',
        pending: '0',
        start: '10/03/2026',
        end: '25/03/2026',
        url: 'https://mewariachar.com',
        description: 'E-commerce platform for traditional Rajasthani pickles.'
    }
];

export default function AdminPage() {
    const { checkUserExists, sendOtp, verifyOtp, login } = useAuth();
    
    const [isRestoringSession, setIsRestoringSession] = useState(true);
    const [step, setStep] = useState(STEPS.EMAIL);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginWithOtp, setLoginWithOtp] = useState(false);
    const [authMode, setAuthMode] = useState("login"); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [requests, setRequests] = useState([]);
    const [notifying, setNotifying] = useState(null);
    const [admins, setAdmins] = useState([]);

    const [revealingAdmin, setRevealingAdmin] = useState(null);
    const [revealOtp, setRevealOtp] = useState("");
    const [revealStep, setRevealStep] = useState(null); // 'SELECT_ADMIN', 'VERIFY', 'SHOW'
    const [revealedPasswords, setRevealedPasswords] = useState({}); // { adminEmail: password }
    const [revealingProject, setRevealingProject] = useState(null);
    const [targetAdminForOtp, setTargetAdminForOtp] = useState(null);
    const [revealedProjects, setRevealedProjects] = useState({}); // { projectId: true }

    const [projects, setProjects] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingData, setEditingData] = useState(null);

    // Persistent Session Recovery - Initialize states immediately to prevent flash
    const [isLoggedIn, setIsLoggedIn] = useState(() => typeof window !== 'undefined' ? localStorage.getItem("adminLoggedIn") === "true" : false);
    const [loggedInUserEmail, setLoggedInUserEmail] = useState(() => typeof window !== 'undefined' ? localStorage.getItem("adminEmail") || "" : "");
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        // Recovery logic on client-side mount
        const savedLogin = localStorage.getItem("adminLoggedIn");
        const savedEmail = localStorage.getItem("adminEmail");
        
        if (savedLogin === "true" && savedEmail) {
            setIsLoggedIn(true);
            setLoggedInUserEmail(savedEmail);
        }
        
        // Give a tiny delay for a smoother transition
        setTimeout(() => setAuthLoading(false), 800);
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetchRequests();
            fetchAdmins();
            fetchProjects();
        }
    }, [isLoggedIn]);

    const fetchProjects = async () => {
        try {
            const q = query(collection(db, "projects"), orderBy("title", "asc"));
            const querySnapshot = await getDocs(q);
            const projs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProjects(projs);
        } catch (err) {
            console.error("Fetch projects failed:", err);
        }
    };

    const fetchRequests = async () => {
        try {
            const q = query(collection(db, "signup_requests"), orderBy("requestedAt", "desc"));
            const querySnapshot = await getDocs(q);
            const reqs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setRequests(reqs);
        } catch (err) {
            console.error("Fetch requests failed:", err);
        }
    };

    const fetchAdmins = async () => {
        try {
            const q = query(collection(db, "users"), orderBy("approvedAt", "desc"));
            const querySnapshot = await getDocs(q);
            const adminList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAdmins(adminList);
        } catch (err) {
            console.error("Fetch admins failed:", err);
        }
    };

    const handleSaveProject = () => {
        setRevealStep('SELECT_ADMIN');
    };

    const performCloudSync = async () => {
        setLoading(true);
        try {
            // Sanitize data: Remove redundant fields before saving to Firestore
            const sanitizedData = { ...editingData };
            delete sanitizedData.domainLink;
            delete sanitizedData.firebaseProvider;

            const { setDoc, doc: fireDoc } = await import("firebase/firestore");
            await setDoc(fireDoc(db, "projects", sanitizedData.id), sanitizedData, { merge: true });
            setRevealingProject(sanitizedData);
            setIsEditing(false);
            setRevealStep(null);
            fetchProjects();
            alert("Project Vault Synced to Cloud Successfully.");
        } catch (err) {
            alert("Sync failed: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleNotify = async (req) => {
        setNotifying(req.id);
        try {
            // 1. Move to 'users' collection (The actual Approval)
            const { setDoc, doc: fireDoc } = await import("firebase/firestore");
            await setDoc(fireDoc(db, "users", req.email.toLowerCase()), {
                name: req.name,
                email: req.email.toLowerCase(),
                password: req.password, // Stored securely for their reference
                role: 'admin',
                approvedAt: Date.now()
            });

            // 2. Call Notify API (Send the formal email with password)
            const res = await fetch('/api/notify-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email: req.email, 
                    name: req.name,
                    password: req.password 
                }),
            });
            
            const data = await res.json();
            if (data.success) {
                // 3. Cleanup pending request
                await deleteDoc(doc(db, "signup_requests", req.id));
                setRequests(prev => prev.filter(r => r.id !== req.id));
                alert(`Approval complete. Notification sent to ${req.email}`);
            } else {
                alert("User approved in DB, but email failed: " + data.message);
            }
        } catch (err) {
            alert("Error during approval: " + err.message);
        } finally {
            setNotifying(null);
        }
    };

    const handleCheckEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await checkUserExists(email);
            if (res.exists) {
                setName(res.name);
                setAuthMode("login");
                setStep(STEPS.PASSWORD);
            } else {
                setAuthMode("signup");
                setStep(STEPS.SIGNUP);
            }
        } catch (err) {
            setError("Connection failure. Verification aborted.");
        } finally {
            setLoading(false);
        }
    };

    const handleSendOtpFlow = async (e) => {
        if (e) e.preventDefault();

        if (authMode === 'login') {
            setLoading(true);
            setError("");
            try {
                const res = await login(email, password);
                if (res.success) {
                    setLoggedInUserEmail(email);
                    setIsLoggedIn(true);
                    localStorage.setItem("adminLoggedIn", "true");
                    localStorage.setItem("adminEmail", email);
                } else {
                    setError(res.message || "Invalid credentials.");
                }
            } catch (err) {
                setError("Login service error.");
            } finally {
                setLoading(false);
            }
            return;
        }

        if (authMode === 'signup') {
            if (password.length < 6) {
                setError("Security standards require 6+ characters.");
                return;
            }
            if (password !== confirmPassword) {
                setError("Credential mismatch. Re-verify identity.");
                return;
            }
        }
        setLoading(true);
        setError("");
        try {
            const res = await sendOtp(email, password, loginWithOtp, authMode);
            if (res.success) {
                setStep(STEPS.OTP);
            } else {
                setError(res.message || "Registry error. Transmission failed.");
            }
        } catch (err) {
            setError("Network instability detected. Retry.");
        } finally {
            setLoading(false);
        }
    };

    const handleRequestProjectReveal = (proj) => {
        setRevealingProject(proj);
        setEditingData(proj);
        setIsEditing(false); // Ensure we start in view mode
        setRevealStep('SELECT_ADMIN');
    };

    const handleSendOtpToAdmin = async (adm) => {
        setLoading(true);
        try {
            // Calculate Audit Info for the Email
            let diffLog = "";
            let projectName = revealingProject?.title || "New Project Infrastructure";
            
            if (isEditing && editingData) {
                const changes = [];
                Object.keys(editingData).forEach(key => {
                    // Skip internal IDs and redundant metadata
                    if (key === 'id' || key === 'requestedAt') return;
                    
                    const oldVal = revealingProject[key] || "N/A";
                    const newVal = editingData[key];
                    
                    if (oldVal !== newVal) {
                        // Create a human readable diff
                        changes.push(`${key.toUpperCase()}: "${oldVal}" → "${newVal}"`);
                    }
                });
                diffLog = changes.length > 0 ? changes.join('\n') : "Viewing sensitive infrastructure data";
            } else {
                diffLog = "Viewing sensitive infrastructure data (Read-only access)";
            }

            const res = await sendOtp(adm.email, "", false, 'reveal', {
                projectName,
                diff: diffLog,
                action: isEditing ? "DATA_MODIFICATION" : "DATA_REVEAL"
            });

            if (res.success) {
                setTargetAdminForOtp(adm);
                setRevealStep('VERIFY');
            } else {
                alert("Failed to send verification code to " + adm.name);
            }
        } catch (err) {
            alert("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyReveal = async () => {
        setLoading(true);
        try {
            const res = await verifyOtp(targetAdminForOtp.email, revealOtp, "", "", 'reveal');
            if (res.success) {
                if (isEditing) {
                    // This was a SAVE action
                    await performCloudSync();
                } else {
                    // This was a VIEW action
                    if (revealingProject) {
                        setRevealedProjects(prev => ({ ...prev, [revealingProject.id]: true }));
                        setRevealStep('SHOW');
                    } else if (revealingAdmin) {
                        setRevealedPasswords(prev => ({ ...prev, [revealingAdmin.email]: revealingAdmin.password }));
                        setRevealStep(null);
                    }
                }
                setRevealOtp("");
            } else {
                alert("Invalid verification code.");
            }
        } catch (err) {
            alert("Verification error.");
        } finally {
            setLoading(false);
        }
    };

    const handleFinalVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await verifyOtp(email, otp, name, password, authMode);
            if (res && res.success) {
                if (authMode === 'signup') {
                    setStep(STEPS.REQUEST_SENT);
                } else {
                    setLoggedInUserEmail(email);
                    setIsLoggedIn(true);
                    localStorage.setItem("adminLoggedIn", "true");
                    localStorage.setItem("adminEmail", email);
                }
            } else {
                setError(res?.message || "Token invalid. Access denied.");
            }
        } catch (err) {
            setError("Authorization server timeout. Retry.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="admin-container">
            {/* Ambient Background Effects */}
            <div className="bg-pattern"></div>
            <div className="glow-top"></div>
            <div className="glow-bottom"></div>

            {authLoading ? (
                <div style={{ 
                    height: '100vh', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'rgba(10, 10, 15, 0.95)',
                    zIndex: 9999,
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0
                }}>
                    <div className="logo-container" style={{ marginBottom: '2rem', transform: 'scale(1.2)' }}>
                        <div className="logo-glow"></div>
                        <img src="/logo.png" alt="Chittor-Tech" className="brand-logo" />
                    </div>
                    <div className="loading-bar-container" style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                        <div className="loading-bar-fill" style={{ 
                            height: '100%', 
                            width: '60%', 
                            background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                            animation: 'shimmer 1.5s infinite'
                        }}></div>
                    </div>
                    <p style={{ color: '#D4AF37', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '4px', marginTop: '1.5rem', opacity: 0.8 }}>Authenticating Session</p>
                </div>
            ) : (
                <React.Fragment>
                    {!isLoggedIn && (
                <div className="auth-card active">
                    {step !== STEPS.EMAIL && step !== STEPS.REQUEST_SENT && (
                        <button onClick={() => setStep(STEPS.EMAIL)} className="back-btn">
                            <Icons.ChevronLeft /> Back
                        </button>
                    )}

                    <header className="auth-header">
                        <div className="logo-container">
                            <div className="logo-glow"></div>
                            <img src="/logo.png" alt="Chittor-Tech Logo" className="brand-logo" />
                        </div>
                        
                        <h2 className="auth-title">
                            {step === STEPS.REQUEST_SENT ? 'Access Requested' : 
                             step === STEPS.EMAIL ? 'Chittor-Tech Admin' : 
                             step === STEPS.OTP ? 'Verify Identity' : 
                             authMode === 'signup' ? 'Create Account' : 'Welcome Back'}
                        </h2>
                        <p className="auth-subtitle">
                            {step === STEPS.EMAIL ? 'Enter your credentials to access the console' : 
                             step === STEPS.OTP ? `We've sent a code to ${email}` : 
                             'Secure administrative access gateway'}
                        </p>
                    </header>

                    {error && (
                        <div className="error-box">
                            <div className="error-icon"><Icons.Shield /></div>
                            <span>{error}</span>
                        </div>
                    )}

                    {step === STEPS.REQUEST_SENT ? (
                        <div className="success-step">
                            <div className="check-icon">
                                <Icons.Check />
                            </div>
                            <h3>Request Received</h3>
                            <p>Your application has been logged. Our administrators will review your access request shortly.</p>
                            <button onClick={() => setStep(STEPS.EMAIL)} className="primary-btn">Return to Login</button>
                        </div>
                    ) : (
                        <form onSubmit={
                            step === STEPS.EMAIL ? handleCheckEmail : 
                            step === STEPS.OTP ? handleFinalVerify : 
                            handleSendOtpFlow
                        } className="auth-form">
                            {step === STEPS.SIGNUP && (
                                <div className="input-wrapper">
                                    <div className="input-icon"><Icons.User /></div>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="auth-input" required />
                                </div>
                            )}
                            
                            <div className="input-wrapper">
                                <div className="input-icon"><Icons.Mail /></div>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={step !== STEPS.EMAIL} placeholder="Email Address" className="auth-input" style={{ opacity: step !== STEPS.EMAIL ? 0.6 : 1 }} required />
                            </div>
                            
                            {(step === STEPS.PASSWORD || step === STEPS.SIGNUP) && (
                                <div className="password-fields">
                                    <div className="input-wrapper">
                                        <div className="input-icon"><Icons.Lock /></div>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="auth-input" required autoFocus />
                                    </div>
                                    {step === STEPS.SIGNUP && (
                                        <div className="input-wrapper">
                                            <div className="input-icon"><Icons.Lock /></div>
                                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="auth-input" required />
                                        </div>
                                    )}
                                </div>
                            )}

                            {step === STEPS.OTP && (
                                <div className="otp-container">
                                    <input 
                                        type="text" 
                                        value={otp} 
                                        onChange={(e) => setOtp(e.target.value)} 
                                        placeholder="000000" 
                                        maxLength={6}
                                        className="otp-input"
                                        required 
                                        autoFocus 
                                    />
                                </div>
                            )}

                            <button type="submit" disabled={loading} className="primary-btn">
                                {loading ? (
                                    <span className="btn-content">
                                        <svg className="animate-spin" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" style={{ opacity: 0.25 }}></circle>
                                            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.75 }}></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    step === STEPS.EMAIL ? 'Continue' : 
                                    step === STEPS.OTP ? 'Verify & Access' : 
                                    authMode === 'signup' ? 'Create Account' : 'Sign In'
                                )}
                            </button>
                        </form>
                    )}

                    <footer className="auth-footer">
                        <p>&copy; {new Date().getFullYear()} Chittor-Tech Enterprise. All rights reserved.</p>
                    </footer>
                </div>
            )}

            {isLoggedIn && (
                <div className="dashboard-overlay">
                    <div className="dashboard-content">
                         <header className="dash-header">
                            <div>
                                <h1 className="dash-logo">CHITTOR<span>TECH</span></h1>
                                <p className="dash-tag">ENTERPRISE SOLUTIONS</p>
                            </div>
                            <button onClick={() => setIsLoggedIn(false)} className="signout-btn">Sign Out</button>
                        </header>

                        {/* Management Sections */}
                        <div className="dashboard-grid">
                            {/* Signup Requests */}
                            <section className="mgmt-section">
                                <div className="section-header">
                                    <h2 className="section-title"><Icons.Alert /> Pending Access Requests</h2>
                                    <button onClick={fetchRequests} className="refresh-btn">Refresh</button>
                                </div>
                                
                                <div className="request-list">
                                    {requests.length === 0 ? (
                                        <div className="empty-state">No pending requests found.</div>
                                    ) : (
                                        requests.map((req) => (
                                            <div key={req.id} className="request-item">
                                                <div className="req-info">
                                                    <span className="req-name">{req.name}</span>
                                                    <span className="req-email">{req.email}</span>
                                                    <span className="req-date">{new Date(req.requestedAt).toLocaleDateString()}</span>
                                                </div>
                                                <button 
                                                    onClick={() => handleNotify(req)} 
                                                    disabled={notifying === req.id}
                                                    className="notify-btn"
                                                >
                                                    {notifying === req.id ? 'Sending...' : 'Confirm Approval & Notify'}
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <p className="mgmt-hint"><b>Note:</b> Only click notify AFTER manually adding the user to Firebase Auth.</p>
                            </section>

                            {/* System Administrators */}
                            <section className="mgmt-section">
                                <div className="section-header">
                                    <h2 className="section-title"><Icons.Shield /> Authorized Administrators</h2>
                                    <button onClick={fetchAdmins} className="refresh-btn">Refresh</button>
                                </div>
                                
                                <div className="request-list">
                                    {admins.length === 0 ? (
                                        <div className="empty-state">No administrators found.</div>
                                    ) : (
                                        admins.map((adm) => (
                                            <div key={adm.id} className="request-item">
                                                <div className="req-info">
                                                    <span className="req-name">{adm.name}</span>
                                                    <span className="req-email">{adm.email}</span>
                                                    <div className="admin-meta-row">
                                                        <span className="req-date">Approved: {new Date(adm.approvedAt).toLocaleDateString()}</span>
                                                        <span className="badge-admin">ADMIN</span>
                                                    </div>
                                                    <div className="password-reveal-row">
                                                        <span className="password-text">
                                                            Password: {revealedPasswords[adm.email] || '••••••••'}
                                                        </span>
                                                        {!revealedPasswords[adm.email] && (
                                                            <button 
                                                                onClick={() => handleRequestReveal(adm)} 
                                                                className="reveal-btn"
                                                                title="Verify identity to reveal password"
                                                            >
                                                                <Icons.Shield /> Verify & View
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="admin-status-dot"></div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Security & Reveal Modal */}
                                {revealStep && (
                                    <div className="reveal-modal-overlay">
                                        <div className="reveal-modal" style={{ maxWidth: revealStep === 'SHOW' ? '600px' : '400px' }}>
                                            {revealStep === 'SELECT_ADMIN' && (
                                                <>
                                                    <h3>Authorize Access</h3>
                                                    <p>Select an administrator to verify this request:</p>
                                                    <div className="admin-selection-list">
                                                        {admins.map(adm => (
                                                            <div key={adm.id} className="admin-select-item">
                                                                <div className="adm-sel-info">
                                                                    <span className="adm-sel-name">{adm.name}</span>
                                                                    <span className="adm-sel-email">{adm.email}</span>
                                                                </div>
                                                                <button onClick={() => handleSendOtpToAdmin(adm)} className="send-otp-btn" disabled={loading}>
                                                                    {loading ? '...' : 'Send OTP'}
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <button onClick={() => { setRevealStep(null); setRevealingProject(null); }} className="cancel-btn-full">Cancel</button>
                                                </>
                                            )}

                                            {revealStep === 'VERIFY' && (
                                                <>
                                                    <h3>Identity Challenge</h3>
                                                    <p>Verification code sent to <b>{targetAdminForOtp?.email}</b>.</p>
                                                    <input 
                                                        type="text" 
                                                        value={revealOtp} 
                                                        onChange={(e) => setRevealOtp(e.target.value)} 
                                                        placeholder="000000"
                                                        className="reveal-otp-input"
                                                        maxLength={6}
                                                    />
                                                    <div className="modal-actions">
                                                        <button onClick={() => setRevealStep('SELECT_ADMIN')} className="cancel-btn">Back</button>
                                                        <button onClick={handleVerifyReveal} className="confirm-btn" disabled={loading}>
                                                            {loading ? 'Verifying...' : 'Unlock Vault'}
                                                        </button>
                                                    </div>
                                                </>
                                            )}

                                            {revealStep === 'SHOW' && revealingProject && (
                                                <div className="project-audit-view">
                                                    <div className="audit-header" style={{ marginBottom: '2rem' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '15px' }}>
                                                            <div style={{ textAlign: 'left', flex: 1 }}>
                                                                <span className="audit-tag">INTERNAL AUDIT</span>
                                                                {isEditing ? (
                                                                    <input 
                                                                        value={editingData.title || ""} 
                                                                        onChange={(e) => setEditingData({...editingData, title: e.target.value})} 
                                                                        className="audit-input"
                                                                        placeholder="Project Name"
                                                                        style={{ fontSize: '1.2rem', fontWeight: '800', marginTop: '0.5rem', background: 'transparent', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                                                                    />
                                                                ) : (
                                                                    <h3 style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem' }}>{revealingProject.title}</h3>
                                                                )}
                                                            </div>
                                                            <button 
                                                                onClick={() => setIsEditing(!isEditing)} 
                                                                className="edit-toggle-btn"
                                                                style={{ flexShrink: 0 }}
                                                            >
                                                                {isEditing ? 'Cancel Edit' : 'Edit Details'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="audit-grid">
                                                        <div className="audit-item">
                                                            <label>Client Entity</label>
                                                            {isEditing ? (
                                                                <input value={editingData.client || ""} onChange={(e) => setEditingData({...editingData, client: e.target.value})} className="audit-input" />
                                                            ) : (
                                                                <span>{revealingProject.client}</span>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Website URL</label>
                                                            {isEditing ? (
                                                                <input value={editingData.websiteUrl || ""} onChange={(e) => setEditingData({...editingData, websiteUrl: e.target.value})} className="audit-input" />
                                                            ) : (
                                                                <a href={revealingProject.websiteUrl} target="_blank" rel="noreferrer">{revealingProject.websiteUrl}</a>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Hosting Provider & Email</label>
                                                            {isEditing ? (
                                                                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                                                                    <input value={editingData.hosting || ""} onChange={(e) => setEditingData({...editingData, hosting: e.target.value})} className="audit-input" placeholder="Provider" />
                                                                    <input value={editingData.hostingEmail || ""} onChange={(e) => setEditingData({...editingData, hostingEmail: e.target.value})} className="audit-input" placeholder="Hosting Email ID" />
                                                                </div>
                                                            ) : (
                                                                <span>{revealingProject.hosting} <br/> <small style={{ color: '#64748b' }}>{revealingProject.hostingEmail}</small></span>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Github Repository</label>
                                                            {isEditing ? (
                                                                <input value={editingData.githubRepo || ""} onChange={(e) => setEditingData({...editingData, githubRepo: e.target.value})} className="audit-input" placeholder="Repository URL" />
                                                            ) : (
                                                                <a href={revealingProject.githubRepo} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: '#D4AF37' }}>{revealingProject.githubRepo || 'N/A'}</a>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Domain Provider</label>
                                                            {isEditing ? (
                                                                <input value={editingData.domainProvider || ""} onChange={(e) => setEditingData({...editingData, domainProvider: e.target.value})} className="audit-input" />
                                                            ) : (
                                                                <span>{revealingProject.domainProvider}</span>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Domain By (Email)</label>
                                                            {isEditing ? (
                                                                <input value={editingData.domainEmail || ""} onChange={(e) => setEditingData({...editingData, domainEmail: e.target.value})} className="audit-input" />
                                                            ) : (
                                                                <span>{revealingProject.domainEmail}</span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Profit Toggle */}
                                                    <div style={{ margin: '1.5rem 0', textAlign: 'left' }}>
                                                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', cursor: 'pointer' }}>
                                                            <input 
                                                                type="checkbox" 
                                                                checked={isEditing ? (editingData.isForProfit || false) : (revealingProject.isForProfit || false)}
                                                                onChange={(e) => isEditing && setEditingData({...editingData, isForProfit: e.target.checked})}
                                                                disabled={!isEditing}
                                                            />
                                                            <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Made for Profit Project</span>
                                                        </label>
                                                    </div>

                                                    {/* Project Finance Box */}
                                                    {((isEditing ? editingData.isForProfit : revealingProject.isForProfit)) && (
                                                        <div style={{ background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '1.5rem', borderRadius: '20px', marginBottom: '1.5rem', textAlign: 'left' }}>
                                                            <span style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Project Finance</span>
                                                            <div className="audit-grid">
                                                                <div className="audit-item">
                                                                    <label>Total Valuation</label>
                                                                    {isEditing ? <input value={editingData.totalValue || ""} onChange={(e) => setEditingData({...editingData, totalValue: e.target.value})} className="audit-input" placeholder="₹" /> : <span className="val-amt" style={{ color: '#fff', fontWeight: '800', fontSize: '1.1rem' }}>₹{revealingProject.totalValue}</span>}
                                                                </div>
                                                                <div className="audit-item">
                                                                    <label>Payment Mode</label>
                                                                    {isEditing ? <input value={editingData.paymentMode || ""} onChange={(e) => setEditingData({...editingData, paymentMode: e.target.value})} className="audit-input" placeholder="e.g. PhonePe / Bank" /> : <span>{revealingProject.paymentMode}</span>}
                                                                </div>
                                                                <div className="audit-item">
                                                                    <label>UTR Number</label>
                                                                    {isEditing ? <input value={editingData.utrNumber || ""} onChange={(e) => setEditingData({...editingData, utrNumber: e.target.value})} className="audit-input" placeholder="Transaction ID" /> : <span>{revealingProject.utrNumber}</span>}
                                                                </div>
                                                                <div className="audit-item">
                                                                    <label>Total Amount Received</label>
                                                                    {isEditing ? <input value={editingData.receivedAmount || ""} onChange={(e) => setEditingData({...editingData, receivedAmount: e.target.value})} className="audit-input" placeholder="₹ Amount" /> : <span style={{ color: '#22c55e', fontWeight: '700' }}>₹{revealingProject.receivedAmount}</span>}
                                                                </div>
                                                                <div className="audit-item">
                                                                    <label>Total Pending Amount</label>
                                                                    {isEditing ? <input value={editingData.pendingAmount || ""} onChange={(e) => setEditingData({...editingData, pendingAmount: e.target.value})} className="audit-input" placeholder="₹ Amount" /> : <span style={{ color: '#ef4444', fontWeight: '700' }}>₹{revealingProject.pendingAmount}</span>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="audit-grid">
                                                        <div className="audit-item">
                                                            <label>Maintenance (AMC)</label>
                                                            {isEditing ? (
                                                                <select value={editingData.maintenance || "No"} onChange={(e) => setEditingData({...editingData, maintenance: e.target.value})} className="audit-input" style={{ background: '#111', color: '#fff' }}>
                                                                    <option>No</option>
                                                                    <option>Yes (Standard)</option>
                                                                    <option>Yes (Premium)</option>
                                                                </select>
                                                            ) : (
                                                                <span>{revealingProject.maintenance || 'No'}</span>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Firebase Configuration</label>
                                                            {isEditing ? (
                                                                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                                                                    <input value={editingData.firebaseEmail || ""} onChange={(e) => setEditingData({...editingData, firebaseEmail: e.target.value})} className="audit-input" placeholder="Firebase Email" />
                                                                    <input value={editingData.firebaseProjectName || ""} onChange={(e) => setEditingData({...editingData, firebaseProjectName: e.target.value})} className="audit-input" placeholder="Project Name" />
                                                                </div>
                                                            ) : (
                                                                <div style={{ fontSize: '0.8rem', color: '#fff' }}>
                                                                    <div>{revealingProject.firebaseProjectName}</div>
                                                                    <div style={{ color: '#64748b' }}>{revealingProject.firebaseEmail}</div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Project Owner</label>
                                                            {isEditing ? (
                                                                <select value={editingData.owner || ""} onChange={(e) => setEditingData({...editingData, owner: e.target.value})} className="audit-input" style={{ background: '#111', color: '#fff' }}>
                                                                    <option value="">Select Owner</option>
                                                                    {admins.map(adm => (
                                                                        <option key={adm.id} value={adm.name}>{adm.name}</option>
                                                                    ))}
                                                                </select>
                                                            ) : (
                                                                <span>{revealingProject.owner}</span>
                                                            )}
                                                        </div>
                                                        <div className="audit-item">
                                                            <label>Deployment Period</label>
                                                            {isEditing ? (
                                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                                    <input type="date" value={editingData.startDate || ""} onChange={(e) => setEditingData({...editingData, startDate: e.target.value})} className="audit-input" />
                                                                    <input type="date" value={editingData.endDate || ""} onChange={(e) => setEditingData({...editingData, endDate: e.target.value})} className="audit-input" />
                                                                </div>
                                                            ) : (
                                                                <span>{revealingProject.startDate} — {revealingProject.endDate}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="audit-item" style={{ marginBottom: '1.5rem' }}>
                                                        <label>Description / Internal Notes</label>
                                                        {isEditing ? (
                                                            <textarea value={editingData.description || ""} onChange={(e) => setEditingData({...editingData, description: e.target.value})} className="audit-textarea" />
                                                        ) : (
                                                            <p className="audit-desc">{revealingProject.description}</p>
                                                        )}
                                                    </div>
                                                    
                                                    {isEditing ? (
                                                        <div style={{ display: 'flex', gap: '10px' }}>
                                                            <button 
                                                                onClick={async () => {
                                                                    if(confirm("Are you sure you want to PERMANENTLY DELETE this project infrastructure? This cannot be undone.")) {
                                                                        setLoading(true);
                                                                        try {
                                                                            const { deleteDoc, doc: fireDoc } = await import("firebase/firestore");
                                                                            await deleteDoc(fireDoc(db, "projects", editingData.id));
                                                                            alert("Project Infrastructure Deleted.");
                                                                            setRevealStep(null);
                                                                            setRevealingProject(null);
                                                                            fetchProjects();
                                                                        } catch (err) { alert("Delete failed: " + err.message); }
                                                                        finally { setLoading(false); }
                                                                    }
                                                                }} 
                                                                className="close-audit-btn" 
                                                                style={{ background: '#ef4444', color: '#fff', flex: 1 }}
                                                            >
                                                                Delete Project
                                                            </button>
                                                            <button onClick={handleSaveProject} className="save-cloud-btn" style={{ flex: 2 }} disabled={loading}>
                                                                {loading ? 'Syncing...' : 'Save & Upload to Cloud'}
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <button onClick={() => { setRevealStep(null); setRevealingProject(null); setIsEditing(false); }} className="close-audit-btn">Close Vault</button>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </section>

                            {/* Active Infrastructures */}
                            <section className="mgmt-section">
                                <div className="section-header">
                                    <h2 className="section-title"><Icons.Shield /> Active Infrastructures</h2>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button 
                                            onClick={() => {
                                                const newProj = { id: 'new-' + Date.now(), title: 'New Project', client: '', websiteUrl: '', hosting: '', hostingEmail: '', githubRepo: '', domainLink: '', domainProvider: '', domainEmail: '', totalValue: '', receivedAmount: '', pendingAmount: '', maintenance: 'No', firebaseProvider: '', firebaseEmail: '', firebaseProjectName: '', owner: '', startDate: '', endDate: '', description: '', paymentMode: '', utrNumber: '' };
                                                setRevealingProject(newProj);
                                                setEditingData(newProj);
                                                setIsEditing(true);
                                                setRevealStep('SHOW');
                                            }} 
                                            className="refresh-btn" 
                                            style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37' }}
                                        >
                                            + Add Project
                                        </button>
                                        <button 
                                            onClick={async () => {
                                                if(confirm("This will populate your database with the 4 projects from your screenshots. Proceed?")) {
                                                    setLoading(true);
                                                    try {
                                                        const { setDoc, doc: fireDoc } = await import("firebase/firestore");
                                                        for(const p of PROJECTS) {
                                                            await setDoc(fireDoc(db, "projects", p.id), {
                                                                ...p,
                                                                websiteUrl: p.url,
                                                                totalValue: p.total,
                                                                receivedAmount: p.received,
                                                                pendingAmount: p.pending,
                                                                startDate: p.start,
                                                                endDate: p.end,
                                                                domainEmail: 'kushsharma.cor@gmail.com'
                                                            }, { merge: true });
                                                        }
                                                        alert("Database Seeded Successfully!");
                                                        fetchProjects();
                                                    } catch (err) { alert("Seed failed: " + err.message); }
                                                    finally { setLoading(false); }
                                                }
                                            }} 
                                            className="refresh-btn"
                                        >
                                            Seed Data
                                        </button>
                                        <button onClick={fetchProjects} className="refresh-btn">Refresh</button>
                                    </div>
                                </div>
                                <div className="project-grid-dash">
                                    {projects.length === 0 ? (
                                        <div className="empty-state">No active infrastructures found. Click "+ Add Project" or "Seed Data" to begin.</div>
                                    ) : (
                                        projects.map((proj) => (
                                            <div key={proj.id} className="project-card-mini" onClick={() => handleRequestProjectReveal(proj)} style={{ cursor: 'pointer' }}>
                                                <h3 className="card-title-mini">{proj.title}</h3>
                                                <p className="card-domain-mini">{proj.domainLink || proj.websiteUrl || proj.domain}</p>
                                                <p className="click-view-text">Click here to view all the data</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )}

            <style jsx global>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                .dashboard-content {
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    overflow-x: hidden;
                }
                .dashboard-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
                @media (max-width: 1024px) {
                    .dashboard-grid { grid-template-columns: 1fr; }
                }

                .mgmt-section {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    padding: clamp(1rem, 3vw, 2rem);
                }
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    gap: 1rem;
                }
                .section-title {
                    font-size: clamp(1rem, 4vw, 1.25rem);
                    font-weight: 700;
                    font-family: var(--font-outfit);
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .request-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 1.25rem;
                    border-radius: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }
                @media (max-width: 640px) {
                    .request-item {
                        flex-direction: column;
                        align-items: flex-start;
                        text-align: left;
                    }
                    .notify-btn {
                        width: 100%;
                    }
                    .dash-header {
                        text-align: center;
                        justify-content: center;
                    }
                    .signout-btn {
                        width: 100%;
                        margin-top: 1rem;
                    }
                }
                .req-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    word-break: break-all;
                }
                .req-name { color: #fff; font-weight: 600; font-size: 0.95rem; }
                .req-email { color: #94a3b8; font-size: 0.8rem; }
                .req-date { color: #64748b; font-size: 0.7rem; margin-top: 2px; }

                .refresh-btn {
                    background: none;
                    border: none;
                    color: #D4AF37;
                    font-size: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                }
                .request-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .notify-btn {
                    background: #D4AF37;
                    color: #000;
                    border: none;
                    padding: 0.75rem 1rem;
                    border-radius: 10px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.2s;
                }
                .notify-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2); }
                .notify-btn:disabled { opacity: 0.5; cursor: not-allowed; }

                .empty-state { color: #64748b; font-size: 0.9rem; text-align: center; padding: 2rem; }
                .mgmt-hint { color: #64748b; font-size: 0.75rem; margin-top: 1.5rem; text-align: center; }

                .project-grid-dash { display: flex; flex-direction: column; gap: 1rem; }
                .project-card-mini {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.05);
                    padding: 1.25rem;
                    border-radius: 16px;
                }
                .card-status-mini { font-size: 0.65rem; color: #D4AF37; font-weight: 800; }
                .card-title-mini { font-size: 1.1rem; color: #fff; margin: 0.5rem 0 0.25rem 0; font-family: var(--font-outfit); }
                .card-domain-mini { color: #94a3b8; font-size: 0.8rem; }

                .otp-input {
                    width: 100%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1rem;
                    border-radius: 16px;
                    color: #FFF;
                    text-align: center;
                    font-size: 2rem;
                    font-weight: 800;
                    letter-spacing: 0.5rem;
                    font-family: var(--font-outfit);
                    outline: none;
                }
                .dash-tag {
                    color: #94a3b8;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.2em;
                    margin-top: 0.25rem;
                }
                .signout-btn {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #FFF;
                    padding: 0.6rem 1.25rem;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                }
                .back-btn {
                    position: absolute;
                    top: 24px;
                    left: 24px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: #94a3b8;
                    padding: 0.5rem 0.75rem;
                    border-radius: 10px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    z-index: 10;
                }
                .back-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #fff;
                    transform: translateX(-2px);
                }
                .back-btn :global(svg) {
                    color: #D4AF37;
                }
                .badge-admin {
                    font-size: 0.6rem;
                    background: #D4AF37;
                    color: #000;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                }
                .admin-status-dot {
                    width: 8px;
                    height: 8px;
                    background: #10b981;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
                }
                .admin-meta-row {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    margin-top: 4px;
                }
                .password-reveal-row {
                    margin-top: 8px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .password-text {
                    font-size: 0.8rem;
                    color: #94a3b8;
                    font-family: monospace;
                    background: rgba(0,0,0,0.2);
                    padding: 4px 8px;
                    border-radius: 6px;
                }
                .reveal-btn {
                    background: none;
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    color: #D4AF37;
                    font-size: 0.65rem;
                    font-weight: 700;
                    padding: 4px 8px;
                    border-radius: 6px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    transition: all 0.2s;
                }
                .reveal-btn:hover {
                    background: rgba(212, 175, 55, 0.1);
                    transform: scale(1.05);
                }

                /* Modal Styles */
                .reveal-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    padding: 20px;
                }
                .reveal-modal {
                    background: rgba(10, 10, 15, 0.98);
                    backdrop-filter: blur(30px);
                    border: 1px solid rgba(212, 175, 55, 0.15);
                    padding: 3rem 2rem;
                    border-radius: 40px;
                    max-width: 500px;
                    width: 95%;
                    text-align: center;
                    box-shadow: 0 0 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.03);
                    max-height: 90vh;
                    overflow-y: auto;
                    animation: modalPop 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                }
                @keyframes modalPop {
                    from { transform: scale(0.9) translateY(20px); opacity: 0; }
                    to { transform: scale(1) translateY(0); opacity: 1; }
                }
                .reveal-modal::-webkit-scrollbar { width: 6px; }
                .reveal-modal::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }

                .reveal-modal h3 { color: #fff; margin-bottom: 1rem; font-family: var(--font-outfit); }
                .reveal-modal p { color: #94a3b8; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem; }
                .reveal-otp-input {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: #fff;
                    padding: 1rem;
                    border-radius: 12px;
                    text-align: center;
                    font-size: 1.5rem;
                    letter-spacing: 0.5rem;
                    margin-bottom: 1.5rem;
                    outline: none;
                }
                .modal-actions {
                    display: flex;
                    gap: 1rem;
                }
                .confirm-btn {
                    flex: 2;
                    background: #D4AF37;
                    color: #000;
                    border: none;
                    padding: 0.75rem;
                    border-radius: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }
                .cancel-btn {
                    flex: 1;
                    background: rgba(255,255,255,0.05);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.1);
                    padding: 0.75rem;
                    border-radius: 12px;
                    cursor: pointer;
                }
                .admin-selection-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin: 2rem 0;
                    width: 100%;
                }
                .admin-select-item {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 1rem;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    width: 100%;
                }
                .admin-select-item:hover {
                    background: rgba(212, 175, 55, 0.05);
                    border-color: rgba(212, 175, 55, 0.3);
                    transform: translateY(-2px);
                }
                .adm-info {
                    text-align: left;
                    flex: 1;
                    min-width: 0;
                    margin-right: 12px;
                }
                .adm-sel-name {
                    display: block;
                    color: #fff;
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .adm-sel-email {
                    display: block;
                    color: #94a3b8;
                    font-size: 0.65rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .send-otp-btn {
                    background: transparent;
                    color: #D4AF37;
                    border: 1px solid rgba(212, 175, 55, 0.5);
                    padding: 0.4rem 0.8rem;
                    border-radius: 10px;
                    font-size: 0.6rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    white-space: nowrap;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }
                .send-otp-btn:hover {
                    background: #D4AF37;
                    color: #000;
                    box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
                }
                .cancel-btn-full {
                    width: 100%;
                    background: none;
                    border: none;
                    color: #64748b;
                    font-size: 0.8rem;
                    cursor: pointer;
                    margin-top: 0.5rem;
                }

                .project-audit-view { text-align: left; }
                .audit-header { margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem; }
                .audit-tag { font-size: 0.6rem; color: #D4AF37; letter-spacing: 2px; font-weight: 800; }
                .audit-header h3 { font-size: 1.5rem; color: #fff; margin-top: 0.25rem; }
                
                .audit-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                @media (max-width: 480px) { .audit-grid { grid-template-columns: 1fr; } }
                
                .audit-item label { display: block; font-size: 0.65rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
                .audit-item span, .audit-item a { color: #fff; font-size: 0.95rem; font-weight: 500; text-decoration: none; }
                .audit-item a { color: #D4AF37; border-bottom: 1px solid rgba(212, 175, 55, 0.3); }
                
                .val-amt { color: #fff !important; font-weight: 700 !important; font-size: 1.1rem !important; }
                .val-received { display: block; color: #10b981 !important; font-size: 0.8rem !important; }
                .val-pending { display: block; color: #ef4444 !important; font-size: 0.8rem !important; }
                
                .audit-desc { color: #94a3b8; font-size: 0.85rem; line-height: 1.6; margin-bottom: 2rem; padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 12px; }
                .close-audit-btn {
                    width: 100%;
                    background: #D4AF37;
                    color: #000;
                    border: none;
                    padding: 1rem;
                    border-radius: 12px;
                    font-weight: 700;
                    cursor: pointer;
                }
                .audit-input, .audit-textarea {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: #fff;
                    padding: 8px 12px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .audit-input:focus, .audit-textarea:focus {
                    border-color: #D4AF37;
                }
                .audit-textarea {
                    min-height: 100px;
                    resize: vertical;
                    font-family: inherit;
                }
                .save-cloud-btn {
                    width: 100%;
                    background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
                    color: #000;
                    border: none;
                    padding: 1rem;
                    border-radius: 12px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
                }
                .save-cloud-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(212, 175, 55, 0.3);
                }
                .save-cloud-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }
                .edit-toggle-btn {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: #fff;
                    padding: 6px 12px;
                    border-radius: 8px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    cursor: pointer;
                }
                .click-view-text {
                    color: #D4AF37;
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-top: 1rem;
                    opacity: 0.8;
                }
            `}</style>
        </main>
    );
}
