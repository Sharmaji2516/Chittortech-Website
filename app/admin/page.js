"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthContext";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, deleteDoc, query, orderBy, setDoc, addDoc, serverTimestamp } from "firebase/firestore";

const STEPS = {
    EMAIL: 'EMAIL',
    PASSWORD: 'PASSWORD',
    SIGNUP: 'SIGNUP',
    OTP: 'OTP',
    REQUEST_SENT: 'REQUEST_SENT'
};

const TABS = {
    CERTIFICATES: 'CERTIFICATES',
    OFFER_LETTERS: 'OFFER_LETTERS'
};

const Icons = {
    Shield: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    Download: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
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
    Plus: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    ),
    Award: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
    ),
    FileText: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    Star: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    ChevronLeft: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><polyline points="15 18 9 12 15 6"/></svg>
    ),
    Check: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}><polyline points="20 6 9 17 4 12"/></svg>
    )
};

import { jsPDF } from "jspdf";

const AUTHORIZED_ADMINS = [
    'kushsharma.cor@gmail.com',
    'lavsharma.cor@gmail.com'
];

export default function AdminPage() {
    const { checkUserExists, sendOtp, verifyOtp, login, logout } = useAuth();
    
    const [step, setStep] = useState(STEPS.EMAIL);
    const [activeTab, setActiveTab] = useState(TABS.CERTIFICATES);
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [authMode, setAuthMode] = useState("login"); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [recognitions, setRecognitions] = useState([]);

    // Form State
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        recipientName: "",
        recipientEmail: "",
        internID: "",
        role: "Full Stack Web Developer",
        startDate: "",
        endDate: "",
        tenure: "3 Months",
        date: new Date().toISOString().split('T')[0],
        type: TABS.CERTIFICATES
    });
    const [docContent, setDocContent] = useState("");

    useEffect(() => {
        let content = "";
        if (activeTab === TABS.CERTIFICATES) {
            content = `for their exceptional performance, dedication, and successful completion of their tenure as a ${formData.role}. Throughout their internship at ChittorTech, they demonstrated remarkable technical proficiency, a proactive learning attitude, and a strong commitment to delivering high-quality solutions.`;
        } else if (activeTab === TABS.APPRECIATION) {
            content = `in recognition of their outstanding contribution and meritorious service as a ${formData.role} at ChittorTech. Your dedication to excellence, innovative approach to problem-solving, and collaborative spirit have been instrumental in our projects.`;
        } else if (activeTab === TABS.LORS) {
            content = `This is to certify that ${formData.recipientName} has successfully completed their internship as a ${formData.role} at ChittorTech. During their tenure, they demonstrated exceptional technical proficiency, a proactive learning attitude, and a strong commitment to excellence. They have been instrumental in delivering high-quality solutions and integrated seamlessly with our professional environment. We give them our highest recommendation for all their future professional endeavors.`;
        } else if (activeTab === TABS.OFFER_LETTERS) {
            const issueDate = formData.date ? new Date(formData.date) : new Date();
            const deadlineDate = new Date(issueDate.getTime() + 5*24*60*60*1000);
            const formattedStart = formData.startDate ? new Date(formData.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "[Joining Date]";
            const formattedDeadline = deadlineDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

            content = `Dear ${formData.recipientName || "[Recipient Name]"},

We are pleased to offer you the position of ${formData.role || "[Role]"} at ChittorTech. We were highly impressed with your qualifications and technical background, and we believe you will be a valuable addition to our engineering team.

Please find the details of your offer below:

1. POSITION: ${formData.role || "[Role]"}
2. START DATE: ${formattedStart}
3. TENURE: ${formData.tenure || "3 Months"}
4. WORK HOURS: 10:00 AM to 6:00 PM (Monday to Saturday)
5. STIPEND: Performance-Based / Unpaid Internship

Key Responsibilities:
• Assist in developing high-performance web applications and services.
• Master industry-standard APIs, databases, and core system architectures.
• Collaborate with engineers on debugging and deploying production-ready code.

Please confirm your acceptance of this offer by signing and returning a copy of this letter by ${formattedDeadline}.

We look forward to a mutually beneficial association and welcoming you to ChittorTech.

Warm regards,`;
        }
        setDocContent(content);
    }, [activeTab, formData.role, formData.recipientName, formData.startDate, formData.date, formData.tenure, isModalOpen]);

    useEffect(() => {
        const savedLogin = sessionStorage.getItem("adminLoggedIn");
        if (savedLogin === "true") setIsLoggedIn(true);

        // Strict Device Detection
        const checkDevice = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
            if (mobileRegex.test(userAgent.toLowerCase())) {
                setIsMobileDevice(true);
            }
        };

        checkDevice();
        setTimeout(() => setAuthLoading(false), 800);
    }, []);

    useEffect(() => {
        if (isLoggedIn) fetchRecognitions();
    }, [isLoggedIn, activeTab]);

    const fetchRecognitions = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "recognition"), orderBy("issuedAt", "desc"));
            const querySnapshot = await getDocs(q);
            const list = querySnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(item => item.type === activeTab);
            setRecognitions(list);
        } catch (err) {
            console.error("Fetch failed:", err);
        } finally {
            setLoading(false);
        }
    };

    const generatePDF = (data) => {
        const isLandscape = data.type === TABS.CERTIFICATES;
        const doc = new jsPDF({
            orientation: isLandscape ? "landscape" : "portrait",
            unit: "mm",
            format: "a4"
        });

        const pageWidth = isLandscape ? 297 : 210;
        const pageHeight = isLandscape ? 210 : 297;

        // 1. Background (Parchment/Cream)
        doc.setFillColor(252, 249, 242);
        doc.rect(0, 0, pageWidth, pageHeight, 'F');

        // 2. Watermark
        doc.setGState(new doc.GState({ opacity: 0.03 }));
        doc.addImage("/logo.png", "PNG", (pageWidth - 100)/2, (pageHeight - 100)/2, 100, 100);
        doc.setGState(new doc.GState({ opacity: 1 }));

        if (isLandscape) {
            // --- LANDSCAPE DESIGN (Certificate/Appreciation) ---
            // Ornate Gold Border
            doc.setDrawColor(212, 175, 55); 
            doc.setLineWidth(2);
            doc.rect(8, 8, pageWidth - 16, pageHeight - 16);
            doc.setLineWidth(0.5);
            doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

            // Corner Ornaments (Simulated)
            doc.setLineWidth(1.5);
            const corners = [
                [8, 8, 20, 20], [pageWidth-28, 8, 20, 20],
                [8, pageHeight-28, 20, 20], [pageWidth-28, pageHeight-28, 20, 20]
            ];
            corners.forEach(c => doc.rect(c[0], c[1], c[2], c[2]));

            // Content
            doc.addImage("/logo.png", "PNG", (pageWidth - 40)/2, 12, 40, 40);
            
            doc.setTextColor(26, 43, 72); // Deep Navy
            doc.setFont("times", "bold");
            doc.setFontSize(36);
            doc.text(data.type === TABS.CERTIFICATES ? "CERTIFICATE OF INTERNSHIP" : "CERTIFICATE OF APPRECIATION", pageWidth/2, 65, { align: "center" });

            doc.setFontSize(16);
            doc.setFont("times", "italic");
            doc.text("This prestigious recognition is proudly presented to", pageWidth/2, 80, { align: "center" });

            doc.setTextColor(212, 175, 55); // Shahi Gold
            doc.setFontSize(32);
            doc.setFont("times", "bold");
            doc.text(data.recipientName.toUpperCase(), pageWidth/2, 98, { align: "center" });

            doc.setTextColor(26, 43, 72);
            doc.setFontSize(13);
            doc.setFont("times", "normal");
            
            const splitDesc = doc.splitTextToSize(data.docContent || "", pageWidth - 80);
            doc.text(splitDesc, pageWidth/2, 112, { align: "center" });

            doc.setFont("times", "normal");
            doc.setFontSize(12);
            doc.text(`at ChittorTech from ${data.startDate}${data.endDate ? ' to ' + data.endDate : ''}.`, pageWidth/2, 145, { align: "center" });

        } else {
            // --- PORTRAIT DESIGN (LOR/Offer Letter/Shahi Letterhead) ---
            
            // Center Logo (No Top Strip)
            doc.addImage("/logo.png", "PNG", (pageWidth - 25)/2, 10, 25, 25);
            
            // Company Branding Header
            doc.setTextColor(212, 175, 55);
            doc.setFont("times", "bold");
            doc.setFontSize(14);
            doc.text("CHITTORTECH", pageWidth/2, 42, { align: "center" });
            
            doc.setTextColor(26, 43, 72);
            doc.setFont("times", "normal");
            doc.setFontSize(8);
            doc.text("PREMIUM IT SOLUTIONS • SOFTWARE EXCELLENCE • GLOBAL DELIVERY", pageWidth/2, 47, { align: "center" });
            
            // Thin Gold Divider
            doc.setDrawColor(212, 175, 55);
            doc.setLineWidth(0.5);
            doc.line(20, 52, pageWidth - 20, 52);

            // Document Metadata
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            if (data.internID) {
                doc.text(`REF ID: ${data.internID}`, 30, 62);
            }

            // Formal Title & Layout
            if (data.type === TABS.OFFER_LETTERS) {
                // REF ID on the Left
                if (data.internID) {
                    doc.setFontSize(10);
                    doc.setTextColor(100, 100, 100);
                    doc.setFont("times", "normal");
                    doc.text(`REF ID: ${data.internID}`, 20, 62);
                }

                // Date on the Right
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.setFont("times", "normal");
                const docDate = data.date ? new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                doc.text(`Date: ${docDate}`, pageWidth - 20, 62, { align: "right" });

                // Recipient Address block
                doc.setFont("times", "bold");
                doc.setFontSize(11);
                doc.setTextColor(26, 43, 72);
                doc.text("To,", 20, 72);
                doc.text(data.recipientName || "", 20, 78);
                doc.setFont("times", "normal");
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text(`Email: ${data.recipientEmail || ""}`, 20, 84);

                // Formal Title
                doc.setTextColor(26, 43, 72);
                doc.setFontSize(16);
                doc.setFont("times", "bold");
                const title = "LETTER OF OFFER";
                doc.text(title, pageWidth/2, 98, { align: "center" });
                
                // Elegant Underline for Title
                doc.setLineWidth(0.5);
                const titleWidth = doc.getTextWidth(title);
                doc.line((pageWidth - titleWidth)/2, 100, (pageWidth + titleWidth)/2, 100);

                // Subject Line
                doc.setFont("times", "bold");
                doc.setFontSize(10.5);
                doc.setTextColor(26, 43, 72);
                const subject = `Subject: Internship Offer for ${data.role} position at ChittorTech`;
                doc.text(subject, 20, 110);
                doc.setLineWidth(0.3);
                doc.line(20, 112, pageWidth - 20, 112);

                // Body Content
                doc.setFont("times", "normal");
                doc.setFontSize(10.5);
                doc.setTextColor(40, 40, 40);
                const content = data.docContent || "";
                const splitContent = doc.splitTextToSize(content, pageWidth - 40);
                doc.text(splitContent, 20, 120, { align: "left", lineHeightFactor: 1.5 });

                // Dual Signature Blocks
                const lineCount = splitContent.length;
                const contentBottomY = 120 + (lineCount * 7.5); 
                const finalY = Math.max(contentBottomY + 20, pageHeight - 65); 

                // For ChittorTech (Left)
                doc.setFont("times", "normal");
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text("For ChittorTech,", 20, finalY);
                doc.setFont("times", "bold");
                doc.setTextColor(26, 43, 72);
                doc.text("Authorized Signatory", 20, finalY + 18);

                // Accepted By (Right)
                doc.setFont("times", "normal");
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text("Accepted By,", pageWidth - 20, finalY, { align: "right" });
                doc.setFont("times", "bold");
                doc.setTextColor(26, 43, 72);
                doc.text(data.recipientName || "", pageWidth - 20, finalY + 18, { align: "right" });

            } else {
                // LOR / Certificate format
                doc.setTextColor(26, 43, 72);
                doc.setFontSize(18);
                doc.setFont("times", "bold");
                const title = "TO WHOM IT MAY CONCERN";
                doc.text(title, pageWidth/2, 85, { align: "center" });
                
                doc.setLineWidth(0.8);
                const titleWidth = doc.getTextWidth(title);
                doc.line((pageWidth - titleWidth)/2, 87, (pageWidth + titleWidth)/2, 87);

                doc.setFont("times", "normal");
                doc.setFontSize(13);
                doc.setTextColor(40, 40, 40);
                
                const content = data.docContent || "";
                const splitContent = doc.splitTextToSize(content, pageWidth - 60);
                doc.text(splitContent, 30, 110, { align: "left", lineHeightFactor: 1.6 });

                const lineCount = splitContent.length;
                const contentBottomY = 110 + (lineCount * 8.5); 
                const finalY = Math.max(contentBottomY + 25, pageHeight - 80); 

                doc.setFont("times", "normal");
                doc.text("Sincerely,", 20, finalY);
                
                doc.setFont("times", "bold");
                doc.setFontSize(14);
                doc.text("Founder - ChittorTech", 30, finalY + 12);
                
                doc.setFont("times", "normal");
                doc.setFontSize(11);
                doc.setTextColor(100, 100, 100);
                doc.text(`Date: ${data.date ? new Date(data.date).toLocaleDateString() : new Date().toLocaleDateString()}`, pageWidth - 30, finalY + 12, { align: "right" });
            }

            // Footer
            doc.setFillColor(212, 175, 55);
            doc.rect(0, pageHeight - 12, pageWidth, 12, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(9);
            doc.text("www.chittortech.online", pageWidth/2, pageHeight - 5, { align: "center" });
        }

        // Certification Footer
        doc.setTextColor(26, 43, 72);
        doc.setFontSize(10);
        doc.setFont("times", "bold");
        const footerY = pageHeight - 15;
        if (isLandscape) {
            doc.text(`Certificate ID: ${data.internID}`, pageWidth/2, footerY, { align: "center" });
        }
        doc.setFont("times", "normal");

        doc.save(`${data.recipientName}_${data.type.replace('_', '')}.pdf`);
    };

    const handleIssue = async () => {
        setLoading(true);
        try {
            const verificationCode = `CT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
            const recognitionData = {
                ...formData,
                docContent,
                verificationCode
            };
            
            // Secure API Call
            const response = await fetch('/api/issue', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recognitionData)
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.details || "Issuance failed at server");
            }
            
            setIsModalOpen(false);
            setShowPreview(false);
            fetchRecognitions();
            
            // Trigger PDF
            generatePDF(recognitionData);
            
            alert("Recognition Issued & PDF Downloaded via Secure Gateway!");
        } catch (err) {
            alert("Error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await login(email, password);
            if (res.success) {
                setIsLoggedIn(true);
                sessionStorage.setItem("adminLoggedIn", "true");
            } else {
                setError(res.message);
            }
        } catch (err) {
            setError("Login failed. Check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = () => {
        logout();
        setIsLoggedIn(false);
        sessionStorage.removeItem("adminLoggedIn");
    };

    const handleCheckEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const normalizedEmail = email.toLowerCase().trim();
        
        if (!AUTHORIZED_ADMINS.includes(normalizedEmail)) {
            setError("You are not an authorized person to log in into Administrative Recognition Portal. Please contact the Admins for the approval of login.");
            setLoading(false);
            return;
        }

        // Auto-assign name for authorized admins so they don't have to enter it manually
        if (normalizedEmail.includes('kush')) {
            setName('Kush Sharma');
        } else if (normalizedEmail.includes('lav')) {
            setName('Lav Sharma');
        } else {
            setName('Admin User');
        }

        try {
            const res = await checkUserExists(normalizedEmail);
            if (res.exists) {
                setAuthMode("login");
                setStep(STEPS.PASSWORD);
            } else {
                // If authorized but not in Firestore yet
                setAuthMode("signup");
                setStep(STEPS.SIGNUP);
            }
        } catch (err) {
            setError("Connection failure.");
        } finally {
            setLoading(false);
        }
    };

    const handleSendOtpFlow = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await sendOtp(email, password, false, authMode);
            if (res.success) setStep(STEPS.OTP);
            else setError(res.message);
        } catch (err) {
            setError("OTP failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleFinalVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await verifyOtp(email, otp, name, password, authMode);
            if (res.success) {
                if (authMode === 'signup') setStep(STEPS.REQUEST_SENT);
                else {
                    setIsLoggedIn(true);
                    sessionStorage.setItem("adminLoggedIn", "true");
                }
            } else setError(res.message);
        } catch (err) {
            setError("Verification error.");
        } finally {
            setLoading(false);
        }
    };

    if (authLoading) return <div className="loading-screen">Authenticating...</div>;

    return (
        <main className="admin-page">
            <div className="bg-gradient"></div>
            
            {!isLoggedIn ? (
                <div className="auth-container">
                    <div className="auth-card">
                        {step !== STEPS.EMAIL && step !== STEPS.REQUEST_SENT && (
                            <button onClick={() => setStep(STEPS.EMAIL)} className="back-btn"><Icons.ChevronLeft /> Back</button>
                        )}
                        <div className="logo-section">
                            <img src="/logo.png" alt="ChittorTech" className="shahi-logo" />
                            <h1>CHITTOR<span>TECH</span></h1>
                            <p>Administrative Recognition Portal</p>
                        </div>

                        {/* Redesigned Error Alert (Shahi Style) */}
                        {error && (
                            <div className="shahi-error-overlay">
                                <div className="error-card">
                                    <div className="error-icon-ring">
                                        <Icons.Shield />
                                    </div>
                                    <h3>Security Alert</h3>
                                    <p>{error}</p>
                                    <button onClick={() => setError("")} className="retry-btn">Back to Login</button>
                                </div>
                            </div>
                        )}

                        {step === STEPS.REQUEST_SENT ? (
                            <div className="success-msg">
                                <Icons.Check />
                                <h3>Access Requested</h3>
                                <p>Admin will review your request shortly.</p>
                                <button onClick={() => setStep(STEPS.EMAIL)} className="shahi-btn">Home</button>
                            </div>
                        ) : (
                            <form onSubmit={
                                step === STEPS.EMAIL ? handleCheckEmail : 
                                step === STEPS.OTP ? handleFinalVerify : 
                                authMode === 'login' ? handleLogin : handleSendOtpFlow
                            }>

                                <div className="input-group">
                                    <Icons.Mail />
                                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} disabled={step !== STEPS.EMAIL} required />
                                </div>
                                {(step === STEPS.PASSWORD || step === STEPS.SIGNUP) && (
                                    <div className="input-group">
                                        <Icons.Lock />
                                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                )}
                                {step === STEPS.OTP && (
                                    <div className="otp-group">
                                        <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6} required />
                                    </div>
                                )}
                                <button type="submit" className="shahi-btn" disabled={loading}>
                                    {loading ? "Processing..." : step === STEPS.EMAIL ? "Continue" : "Authorize"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            ) : (
                <div className="dashboard">
                    <div className="dash-header">
                        <div className="dash-tabs">
                            <button className={activeTab === TABS.CERTIFICATES ? 'active' : ''} onClick={() => setActiveTab(TABS.CERTIFICATES)}><Icons.Award /> Certificates</button>
                            <button className={activeTab === TABS.OFFER_LETTERS ? 'active' : ''} onClick={() => setActiveTab(TABS.OFFER_LETTERS)}><Icons.Mail /> Offer Letters</button>
                        </div>
                        <div className="nav-actions">
                            <button className="issue-btn" onClick={() => { 
                                setEditingId(null);
                                setFormData({
                                    recipientName: "",
                                    recipientEmail: "",
                                    internID: "",
                                    role: "Full Stack Web Developer",
                                    startDate: "",
                                    endDate: "",
                                    tenure: "3 Months",
                                    date: new Date().toISOString().split('T')[0],
                                    type: activeTab
                                });
                                setIsModalOpen(true); 
                            }}>
                                <Icons.Plus /> Issue New
                            </button>
                            <button className="logout-btn" onClick={handleSignOut}>Sign Out</button>
                        </div>
                    </div>

                    <div className="activity-feed">
                        {loading ? (
                            <div className="feed-status">Loading documents...</div>
                        ) : recognitions.length === 0 ? (
                            <div className="empty-feed">
                                <div className="gold-badge">
                                    <div className="badge-ribbon left"></div>
                                    <div className="badge-ribbon right"></div>
                                    <div className="badge-circle">
                                        <div className="badge-inner">
                                            <Icons.Award />
                                        </div>
                                    </div>
                                </div>
                                <p>No {activeTab.toLowerCase().replace('_', ' ')} issued yet.</p>
                            </div>
                        ) : (
                            <div className="recognition-grid">
                                {recognitions.map(item => (
                                    <div key={item.id} className="recognition-card">
                                        <div className="card-top">
                                            <h3>{item.recipientName}</h3>
                                            <span className="verify-tag">{item.verificationCode}</span>
                                        </div>
                                        <p className="card-role">{item.role}</p>
                                        <div className="card-meta">
                                            <span>{new Date(item.issuedAt?.seconds * 1000).toLocaleDateString()}</span>
                                            <div className="card-actions">
                                                <button className="download-btn" onClick={() => generatePDF(item)}>
                                                    <Icons.Download />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            {!showPreview ? (
                                <div className="shahi-modal">
                                    <h3>Issue {activeTab.replace('S', '')}</h3>
                                    <form onSubmit={(e) => { e.preventDefault(); setShowPreview(true); }}>
                                        <div className="modal-grid">
                                            <div className="modal-field">
                                                <label>Recipient Name</label>
                                                <input type="text" value={formData.recipientName} onChange={e => setFormData({...formData, recipientName: e.target.value})} required />
                                            </div>
                                            <div className="modal-field">
                                                <label>Email Address</label>
                                                <input type="email" value={formData.recipientEmail} onChange={e => setFormData({...formData, recipientEmail: e.target.value})} required />
                                            </div>
                                            {activeTab === TABS.CERTIFICATES && (
                                                <div className="modal-field">
                                                    <label>Intern ID</label>
                                                    <input type="text" placeholder="CT-2026-001" value={formData.internID} onChange={e => setFormData({...formData, internID: e.target.value})} required />
                                                </div>
                                            )}
                                            <div className="modal-field">
                                                <label>Role</label>
                                                <input type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} required />
                                            </div>
                                            <div className="modal-field">
                                                <label>Issue Date</label>
                                                <input type="date" value={formData.date || ""} onChange={e => setFormData({...formData, date: e.target.value})} required />
                                            </div>
                                            {activeTab === TABS.CERTIFICATES && (
                                                <>
                                                    <div className="modal-field">
                                                        <label>Start Date</label>
                                                        <input type="date" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} required />
                                                    </div>
                                                    <div className="modal-field">
                                                        <label>End Date</label>
                                                        <input type="date" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} required />
                                                    </div>
                                                </>
                                            )}
                                            {activeTab === TABS.OFFER_LETTERS && (
                                                <>
                                                    <div className="modal-field">
                                                        <label>Joining Date</label>
                                                        <input type="date" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} required />
                                                    </div>
                                                    <div className="modal-field">
                                                        <label>Tenure / Duration</label>
                                                        <input type="text" placeholder="e.g. 3 Months, 45 Days" value={formData.tenure || ""} onChange={e => setFormData({...formData, tenure: e.target.value})} required />
                                                    </div>
                                                </>
                                            )}
                                            <div className="modal-field full-width">
                                                <label>Document Content</label>
                                                <textarea rows={6} value={docContent} onChange={e => setDocContent(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="modal-actions">
                                            <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                            <button type="submit" className="confirm-btn">Preview Document</button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="shahi-modal preview-modal">
                                     <div className={`certificate-preview ${activeTab === TABS.OFFER_LETTERS ? 'portrait' : 'landscape'}`}>
                                        <div className="preview-border">
                                             {activeTab === TABS.OFFER_LETTERS ? (
                                                <div className="preview-inner-portrait">
                                                    <div className="header-text" style={{ textAlign: 'center', paddingBottom: '1rem', marginBottom: '1.5rem', position: 'relative' }}>
                                                        <img src="/logo.png" alt="Logo" className="portrait-logo" style={{ margin: '0 auto', width: '70px', marginBottom: '10px' }} />
                                                        <h3 style={{ color: '#D4AF37', margin: 0, letterSpacing: '3px', fontSize: '1.3rem', fontWeight: '900' }}>CHITTORTECH</h3>
                                                        <p style={{ color: '#1A2B48', fontSize: '0.65rem', margin: '5px 0', opacity: 0.8, letterSpacing: '1px' }}>PREMIUM IT SOLUTIONS • SOFTWARE EXCELLENCE • GLOBAL DELIVERY</p>
                                                        <div style={{ height: '1px', background: '#D4AF37', width: '85%', margin: '15px auto 0' }}></div>
                                                    </div>
                                                    <div className="portrait-body" style={{ textAlign: 'left', padding: '0 3rem' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
                                                            <span>{formData.internID ? `REF ID: ${formData.internID}` : ''}</span>
                                                            <span>Date: {formData.date ? new Date(formData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                        </div>
                                                        
                                                        <div style={{ marginBottom: '2rem', color: '#334155', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                                            <strong>To,</strong><br />
                                                            <span style={{ fontSize: '1.1rem', color: '#1A2B48', fontWeight: 'bold' }}>{formData.recipientName}</span><br />
                                                            Email: {formData.recipientEmail}<br />
                                                        </div>

                                                        <h2 style={{ textAlign: 'center', color: '#1A2B48', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '1.5px', marginBottom: '1rem', textDecoration: 'underline', textUnderlineOffset: '8px' }}>
                                                            LETTER OF OFFER
                                                        </h2>
                                                        
                                                        <p style={{ fontSize: '0.95rem', marginBottom: '2rem', fontWeight: 'bold', color: '#1A2B48', borderBottom: '1px solid rgba(26,43,72,0.1)', paddingBottom: '10px' }}>
                                                            Subject: Internship Offer for {formData.role} position at ChittorTech
                                                        </p>

                                                        <div style={{ lineHeight: '1.6', fontSize: '0.95rem', color: '#334155', textAlign: 'left', whiteSpace: 'pre-line', minHeight: '280px', padding: '0 0.5rem', fontFamily: "'Outfit', sans-serif" }}>
                                                            {docContent}
                                                        </div>

                                                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(26,43,72,0.1)', paddingTop: '20px' }}>
                                                            <div>
                                                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b' }}>For <strong>ChittorTech</strong>,</p>
                                                                <div style={{ height: '30px' }}></div>
                                                                <p style={{ fontWeight: '800', fontSize: '1.05rem', margin: '5px 0 0', color: '#1A2B48' }}>Authorized Signatory</p>
                                                            </div>
                                                            <div style={{ textAlign: 'right' }}>
                                                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b' }}>Accepted By,</p>
                                                                <div style={{ height: '30px' }}></div>
                                                                <p style={{ fontWeight: '800', fontSize: '1.05rem', margin: '5px 0 0', color: '#1A2B48' }}>{formData.recipientName}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="portrait-footer" style={{ background: '#D4AF37', color: 'white', padding: '12px', fontSize: '0.85rem', textAlign: 'center', position: 'absolute', bottom: 0, left: 0, width: '100%', fontWeight: '500' }}>
                                                        <span>www.chittortech.online</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="preview-inner-border">
                                                        <img src="/logo.png" alt="Logo" className="preview-logo-fixed" />
                                                        <h1 className="preview-title-fixed">CERTIFICATE OF INTERNSHIP</h1>
                                                        <p className="preview-label">This prestigious recognition is proudly presented to</p>
                                                        <h2 className="preview-name-fixed">{formData.recipientName.toUpperCase()}</h2>
                                                        <div className="preview-body-text">
                                                            <p>{docContent}</p>
                                                        </div>
                                                        <div className="preview-footer-block">
                                                            <p>at <b>ChittorTech</b></p>
                                                            <p className="date-sub">from <b>{formData.startDate}</b> to <b>{formData.endDate}</b></p>
                                                        </div>
                                                        
                                                        <div className="preview-signatures centered">
                                                        {/* Manual Seal/Signature Area */}
                                                    </div>
                                                     <div className="preview-footer">
                                                         <p style={{ fontWeight: 'bold', color: '#1A2B48', fontSize: '1.1rem' }}>Certificate ID: {formData.internID}</p>
                                                     </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="modal-actions">
                                        <button type="button" className="cancel-btn" onClick={() => setShowPreview(false)}>Edit Details</button>
                                        <button type="button" className="confirm-btn" onClick={handleIssue} disabled={loading}>
                                            {loading ? "Issuing..." : "Confirm & Issue"}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            <div className={`desktop-only-guard ${isMobileDevice ? 'active' : ''}`}>
                <div className="guard-content">
                    <img src="/logo.png" alt="ChittorTech" className="guard-logo" />
                    <div className="guard-icon"><Icons.Shield /></div>
                    <h2>ACCESS RESTRICTED</h2>
                    <p>For administrative security and data integrity, the ChittorTech Console is exclusively optimized for desktop environments.</p>
                    <div className="guard-footer">Please log in from a workstation or laptop to continue.</div>
                </div>
            </div>

            <style jsx global>{`
                :root {
                    --gold: #D4AF37;
                    --dark-bg: #f8fafc;
                    --card-bg: #ffffff;
                    --border: rgba(0, 62, 216, 0.1);
                }

                .admin-page {
                    min-height: 100vh;
                    background: var(--dark-bg);
                    color: #09090b;
                    font-family: 'Outfit', sans-serif;
                    position: relative;
                    overflow-x: hidden;
                    padding-top: 80px; /* Reduced to move content up */
                }

                /* Shahi Error Overlay */
                .shahi-error-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(10, 10, 15, 0.95);
                    backdrop-filter: blur(10px);
                    z-index: 100;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    border-radius: 40px;
                }

                .error-card {
                    animation: errorScale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-align: center;
                }

                @keyframes errorScale {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                .error-icon-ring {
                    width: 60px;
                    height: 60px;
                    background: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    color: #ef4444;
                    animation: pulseRing 2s infinite;
                }

                @keyframes pulseRing {
                    0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
                    70% { box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
                }

                .error-card h3 {
                    color: #09090b;
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .error-card p {
                    color: #94a3b8;
                    font-size: 0.9rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    max-width: 300px;
                }

                .retry-btn {
                    background: #ef4444;
                    color: #fff;
                    border: none;
                    padding: 0.75rem 2rem;
                    border-radius: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .retry-btn:hover {
                    box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
                    transform: translateY(-2px);
                }

                /* Desktop Only Guard */
                .desktop-only-guard {
                    display: none;
                    position: fixed;
                    inset: 0;
                    background: #f8fafc;
                    z-index: 99999;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    text-align: center;
                }

                .desktop-only-guard.active {
                    display: flex;
                }

                @media (max-width: 1024px) {
                    .desktop-only-guard { display: flex; }
                    .auth-container, .dashboard { display: none !important; }
                }

                .desktop-only-guard.active ~ .auth-container,
                .desktop-only-guard.active ~ .dashboard {
                    display: none !important;
                }

                .guard-content {
                    max-width: 400px;
                    animation: guardFadeIn 0.8s ease-out;
                }

                @keyframes guardFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .guard-logo { width: 60px; opacity: 0.5; margin-bottom: 2rem; }
                .guard-icon { color: var(--gold); margin-bottom: 1.5rem; filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.4)); }
                .guard-content h2 { font-size: 1.5rem; letter-spacing: 4px; color: #09090b; margin-bottom: 1rem; font-weight: 800; }
                .guard-content p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }
                .preview-footer { margin-top: 1rem; position: relative; bottom: 40px; }
                .guard-footer { font-size: 0.7rem; color: var(--gold); text-transform: uppercase; letter-spacing: 2px; font-weight: 700; opacity: 0.8; }

                .bg-gradient {
                    position: fixed;
                    inset: 0;
                    background: 
                        radial-gradient(circle at 15% 50%, rgba(0, 62, 216, 0.08), transparent 25%),
                        radial-gradient(circle at 85% 30%, rgba(0, 62, 216, 0.05), transparent 25%);
                    pointer-events: none;
                }

                /* Auth Section */
                .auth-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem 2rem;
                    min-height: calc(100vh - 100px);
                    position: relative;
                }

                .auth-card {
                    background: #ffffff;
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(0, 62, 216, 0.1);
                    padding: 3rem 2.5rem;
                    border-radius: 24px;
                    width: 100%;
                    max-width: 440px;
                    text-align: center;
                    position: relative;
                    box-shadow: 0 25px 50px -12px rgba(0, 62, 216, 0.15), 0 0 0 1px rgba(0, 62, 216, 0.05);
                }

                .back-btn {
                    position: absolute;
                    top: 1.5rem;
                    left: 1.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--border);
                    color: #94a3b8;
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-size: 0;
                }

                .back-btn:hover {
                    background: var(--gold);
                    color: #000;
                    border-color: var(--gold);
                    transform: translateX(-3px);
                }

                .back-btn :global(svg) { width: 14px; height: 14px; }

                .shahi-logo { display: block; width: 70px; margin: 0 auto 1.5rem auto; filter: drop-shadow(0 4px 10px rgba(0,62,216,0.15)); }
                .logo-section h1 { font-size: 1.8rem; letter-spacing: 2px; margin-bottom: 0.5rem; font-weight: 800; color: #09090b; }
                .logo-section h1 span { color: #003ED8; }
                .logo-section p { color: #64748b; font-size: 0.75rem; margin-bottom: 2.5rem; letter-spacing: 1px; text-transform: uppercase; font-weight: 600; }

                .input-group {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 1rem 1.25rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.25rem;
                    box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.02);
                    transition: all 0.3s ease;
                }
                
                .input-group:focus-within {
                    border-color: #003ED8;
                    box-shadow: 0 0 0 4px rgba(0, 62, 216, 0.1);
                    transform: translateY(-1px);
                }
                
                .input-group svg {
                    color: #94a3b8;
                    transition: color 0.3s ease;
                }
                
                .input-group:focus-within svg {
                    color: #003ED8;
                }

                .input-group input {
                    background: transparent;
                    border: none;
                    color: #09090b;
                    width: 100%;
                    outline: none;
                    font-size: 0.95rem;
                    font-weight: 500;
                }
                
                .input-group input::placeholder {
                    color: #94a3b8;
                }

                .shahi-btn {
                    width: 100%;
                    background: linear-gradient(135deg, #003ED8, #001F6B);
                    color: #ffffff;
                    border: none;
                    padding: 1.15rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    margin-top: 1rem;
                    box-shadow: 0 10px 25px -5px rgba(0, 62, 216, 0.4);
                }

                .shahi-btn:hover {
                    box-shadow: 0 15px 35px -5px rgba(0, 62, 216, 0.5);
                    transform: translateY(-2px);
                }

                /* Dashboard */
                .dashboard {
                    padding: 2rem 1rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .dash-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2.5rem;
                    background: #ffffff;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(0, 62, 216, 0.08);
                    padding: 0.5rem 1.5rem;
                    border-radius: 20px;
                    box-shadow: var(--shadow-soft);
                }

                .nav-actions { 
                    display: flex; 
                    gap: 1rem; 
                    align-items: center; 
                }
                
                .issue-btn {
                    background: var(--gradient);
                    color: #ffffff;
                    border: none;
                    padding: 0.6rem 1.25rem;
                    border-radius: 12px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                    box-shadow: 0 4px 15px rgba(0, 62, 216, 0.1);
                }

                .issue-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-glow);
                }

                .logout-btn {
                    background: transparent;
                    border: 1px solid rgba(0, 62, 216, 0.1);
                    color: var(--text-muted);
                    padding: 0.6rem 1.25rem;
                    border-radius: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-size: 0.9rem;
                }

                .logout-btn:hover {
                    background: rgba(239, 68, 68, 0.08);
                    color: #ef4444;
                    border-color: rgba(239, 68, 68, 0.2);
                }

                .dash-tabs {
                    display: flex;
                    gap: 0.5rem;
                }

                .dash-tabs button {
                    background: none;
                    border: none;
                    color: #64748b;
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    padding: 0.75rem 1.25rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    border-radius: 12px;
                    font-size: 0.95rem;
                }

                .dash-tabs button:hover {
                    color: var(--primary);
                    background: rgba(0, 62, 216, 0.03);
                }

                .dash-tabs button.active {
                    color: var(--primary);
                    background: rgba(0, 62, 216, 0.05);
                }

                .activity-feed {
                    margin-top: 2rem;
                    min-height: 300px;
                    display: flex;
                    flex-direction: column;
                }

                .gold-badge {
                    position: relative;
                    width: 100px;
                    height: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2rem;
                    filter: drop-shadow(0 15px 30px rgba(0, 62, 216, 0.2));
                    animation: float 4s ease-in-out infinite;
                }

                .badge-circle {
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #003ED8, #0b48ff);
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.4);
                    box-shadow: 
                        inset 0 0 15px rgba(0, 0, 0, 0.2),
                        inset 0 4px 6px rgba(255, 255, 255, 0.6),
                        0 8px 20px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }

                .badge-inner {
                    width: 68px;
                    height: 68px;
                    border: 1px dashed rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: radial-gradient(circle, #0b48ff 0%, #003ED8 100%);
                    box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.5);
                }

                .badge-inner :global(svg) {
                    width: 32px !important;
                    height: 32px !important;
                    color: #ffffff !important;
                    margin-bottom: 0 !important;
                    filter: drop-shadow(0 2px 2px rgba(255, 255, 255, 0.5)) !important;
                    animation: none !important;
                    opacity: 1 !important;
                }

                .badge-ribbon {
                    position: absolute;
                    bottom: 12px;
                    width: 20px;
                    height: 48px;
                    background: linear-gradient(to bottom, #003ED8, #0b48ff);
                    z-index: 1;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }

                .badge-ribbon.left {
                    left: 24px;
                    transform: rotate(-15deg);
                    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%);
                }

                .badge-ribbon.right {
                    right: 24px;
                    transform: rotate(15deg);
                    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%);
                }

                .empty-feed {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 4.5rem 2rem;
                    background: #ffffff;
                    backdrop-filter: blur(10px);
                    border: 1px dashed rgba(0, 62, 216, 0.25);
                    border-radius: 28px;
                    margin: 2rem 0;
                    min-height: 280px;
                    box-shadow: var(--shadow-soft);
                    animation: fadeIn 0.6s ease-out;
                }

                .empty-feed p {
                    font-size: 1.25rem;
                    color: var(--text-main);
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    background: var(--gradient);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-top: 0.5rem;
                }

                .feed-status {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.1rem;
                    color: var(--primary);
                    min-height: 250px;
                    font-weight: 600;
                    letter-spacing: 1.5px;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .recognition-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 1.5rem;
                }

                .recognition-card {
                    background: #ffffff;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(0, 62, 216, 0.08);
                    padding: 1.75rem;
                    border-radius: 28px;
                    box-shadow: var(--shadow-soft);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .recognition-card:hover {
                    border-color: var(--primary);
                    transform: translateY(-5px);
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                }

                .verify-tag {
                    font-size: 0.7rem;
                    background: rgba(0, 62, 216, 0.05);
                    color: var(--primary);
                    padding: 4px 8px;
                    border-radius: 6px;
                    font-weight: 800;
                }

                .card-role { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; }
                .card-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.8rem;
                    color: #64748b;
                }

                .card-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .download-btn {
                    background: rgba(0, 62, 216, 0.05);
                    border: 1px solid rgba(0, 62, 216, 0.15);
                    color: var(--primary);
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .download-btn:hover {
                    background: var(--primary);
                    color: #ffffff;
                    transform: translateY(-2px);
                }

                .download-btn :global(svg) { width: 14px; height: 14px; }

                /* Modal Position Fix - No More Cutoff */
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(25px);
                    display: flex;
                    align-items: flex-start; /* Start from top to prevent cutoff */
                    justify-content: center;
                    z-index: 9999;
                    padding: 4rem 1.5rem; /* Generous top padding */
                    overflow-y: auto;
                    scroll-behavior: smooth;
                }

                .shahi-modal {
                    background: #ffffff;
                    border: 1px solid rgba(0, 62, 216, 0.15);
                    padding: 3rem;
                    border-radius: 40px;
                    width: 100%;
                    max-width: 1000px;
                    box-shadow: var(--shadow-glow);
                    animation: modalEntry 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                }

                @keyframes modalEntry {
                    from { opacity: 0; transform: translateY(30px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                .shahi-modal h3 {
                    font-size: 2rem;
                    letter-spacing: 4px;
                    color: var(--text-main);
                    margin-bottom: 2rem;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 800;
                }

                .shahi-modal h3::after {
                    content: '';
                    display: block;
                    width: 60px;
                    height: 3px;
                    background: var(--primary);
                    margin: 1rem auto;
                    border-radius: 2px;
                }

                /* Document Preview Frame */
                .certificate-preview {
                    background: #FCF9F2;
                    color: #1A2B48;
                    padding: 5rem;
                    border: 2px solid var(--gold);
                    margin-bottom: 3rem;
                    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.1);
                    position: relative;
                    width: 100%;
                    min-height: 600px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .certificate-preview.portrait {
                    max-width: 600px;
                    margin: 0 auto 3rem;
                }

                /* LOGO STABILIZATION - ULTIMATE FIX */
                .portrait-logo, 
                .preview-logo, 
                .preview-logo-fixed {
                    width: 80px !important;
                    height: auto !important;
                    display: block !important;
                    margin: 0 auto 2rem !important;
                    max-width: 80px !important;
                }

                .portrait-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 3rem;
                    border-bottom: 1px solid rgba(26, 43, 72, 0.1);
                    padding-bottom: 2rem;
                }

                .header-text { text-align: center; }
                .header-text h2 { font-size: 1.5rem; letter-spacing: 4px; color: #1A2B48; margin-bottom: 0.2rem; font-weight: 800; }
                .header-text span { font-size: 0.7rem; letter-spacing: 2px; color: var(--gold); font-weight: 700; }

                .portrait-body { width: 100%; }
                .meta-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: #64748b; margin-bottom: 3rem; }
                .portrait-title { font-size: 2.2rem; text-align: center; margin-bottom: 3rem; color: #1A2B48; font-weight: 800; }
                .portrait-content { font-size: 1.1rem; line-height: 1.8; color: #475569; }
                .portrait-content p { margin-bottom: 1.5rem; }
                .sig { font-weight: 800; color: #1A2B48; margin-top: 3rem; }

                .portrait-footer {
                    margin-top: auto;
                    padding-top: 3rem;
                    text-align: center;
                    font-size: 0.8rem;
                    color: #94a3b8;
                    border-top: 1px solid rgba(26, 43, 72, 0.1);
                }

                .preview-title-fixed {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin-bottom: 2.5rem;
                    color: #1A2B48;
                    text-align: center;
                    letter-spacing: 3px;
                    line-height: 1.2;
                }

                .preview-label {
                    font-size: 1.1rem;
                    color: #64748b;
                    margin-bottom: 0.5rem;
                    font-style: italic;
                    text-align: center;
                }

                .preview-name-fixed {
                    font-size: 3.5rem;
                    color: var(--gold);
                    font-weight: 900;
                    margin: 2rem 0;
                    text-align: center;
                    letter-spacing: 2px;
                    text-shadow: 1px 1px 0px rgba(0,0,0,0.05);
                }

                .preview-body-text {
                    max-width: 85%;
                    margin: 0 auto 3rem;
                    text-align: center;
                    font-size: 1.15rem;
                    line-height: 2;
                    color: #475569;
                }

                .preview-footer-block {
                    text-align: center;
                    margin-top: 3rem;
                }

                .preview-footer-block p {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #1A2B48;
                }

                .date-sub {
                    font-size: 1rem;
                    color: #64748b;
                    margin-top: 0.5rem;
                }

                /* Form Controls Upgrade */
                .modal-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .modal-field label {
                    display: block;
                    font-size: 0.8rem;
                    color: var(--primary);
                    margin-bottom: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: 800;
                }

                .modal-field input {
                    width: 100%;
                    background: #ffffff;
                    border: 1px solid rgba(0, 62, 216, 0.08);
                    padding: 1.2rem;
                    border-radius: 18px;
                    color: var(--text-main);
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.3s;
                }

                .modal-field input:focus {
                    border-color: var(--primary);
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 0 20px rgba(0, 62, 216, 0.08);
                }

                .modal-field textarea {
                    width: 100%;
                    background: #ffffff;
                    border: 1px solid rgba(0, 62, 216, 0.08);
                    border-radius: 18px;
                    color: var(--text-main);
                    padding: 1.25rem;
                    font-family: inherit;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    resize: vertical;
                    min-height: 150px;
                    transition: all 0.3s ease;
                    outline: none;
                }

                .modal-field textarea:focus {
                    border-color: var(--primary);
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 0 20px rgba(0, 62, 216, 0.08);
                }

                .modal-field.full-width { grid-column: 1 / -1; }

                .modal-actions {
                    display: flex;
                    gap: 1.5rem;
                }

                .cancel-btn {
                    flex: 1;
                    background: rgba(0, 62, 216, 0.02);
                    color: var(--text-muted);
                    border: 1px solid rgba(0, 62, 216, 0.1);
                    padding: 1.25rem;
                    border-radius: 20px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .cancel-btn:hover { background: rgba(239, 68, 68, 0.1); color: #ef4444; border-color: rgba(239, 68, 68, 0.2); }

                .confirm-btn {
                    flex: 2;
                    background: var(--gradient);
                    color: #ffffff;
                    border: none;
                    padding: 1.25rem;
                    border-radius: 20px;
                    font-weight: 900;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .confirm-btn:hover {
                    box-shadow: var(--shadow-glow);
                    transform: translateY(-3px);
                }

                .preview-footer {
                    margin-top: 4rem;
                    font-size: 0.8rem;
                    color: #94a3b8;
                    text-align: center;
                    opacity: 0.6;
                }

                @media (max-width: 768px) {
                    .modal-grid { grid-template-columns: 1fr; }
                    .shahi-modal { padding: 2rem; }
                    .preview-name-fixed { font-size: 2rem; }
                }
            `}</style>
        </main>
    );
}
