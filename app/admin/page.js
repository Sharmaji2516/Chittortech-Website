"use client";

import React, { useState, useEffect } from "react";
import "./admin.css";
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
        universityName: "",
        gainedSkills: "",
        signatoryName: "",
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
            content = `student of ${formData.universityName || "[ University Name ]"}, has successfully completed a summer internship in the field of ${formData.role || "[ Field Name ]"} from ${formData.startDate || "[ Start Date ]"} to ${formData.endDate || "[ End Date ]"} under guidance of ChittorTech.

During the period of their internship program with us, they had been exposed to ${formData.gainedSkills || "[ Gained Skills ]"}.`;
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
    }, [activeTab, formData.role, formData.recipientName, formData.startDate, formData.endDate, formData.date, formData.tenure, formData.universityName, formData.gainedSkills, formData.signatoryName, isModalOpen]);

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

        if (isLandscape) {
            // 1. Draw the beautiful border image as full background
            doc.addImage("/certificate-template.webp", "WEBP", 0, 0, pageWidth, pageHeight);
            
            // 2. Draw a pale background rectangle over the inner text area to hide the original template text 
            // but leave the borders visible around the edges.
            doc.setFillColor(247, 249, 250);
            doc.rect(20, 20, pageWidth - 40, pageHeight - 40, 'F');
            

            const deepBlue = [27, 54, 93];

            // --- HEADER ---
            doc.addImage("/logo.png", "PNG", pageWidth/2 - 12.5, 20, 25, 25);

            // --- TITLE ---
            doc.setFont("times", "bold");
            doc.setFontSize(36);
            doc.text("CERTIFICATE OF INTERNSHIP", pageWidth/2, 60, { align: "center" });

            // --- SUBTITLE ---
            doc.setFontSize(14);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(50, 50, 50);
            doc.text("This is to certify that", pageWidth/2, 78, { align: "center" });

            // --- RECIPIENT NAME ---
            doc.setTextColor(...deepBlue);
            doc.setFontSize(32);
            doc.setFont("times", "normal");
            doc.text(data.recipientName.toUpperCase(), pageWidth/2, 98, { align: "center" });
            
            // Dotted underline
            doc.setDrawColor(...deepBlue);
            doc.setLineDashPattern([1, 1.5], 0);
            doc.setLineWidth(0.5);
            const nameWidth = doc.getTextWidth(data.recipientName.toUpperCase());
            doc.line((pageWidth - nameWidth - 20)/2, 102, (pageWidth + nameWidth + 20)/2, 102);
            doc.setLineDashPattern([], 0); // reset dash

            // --- BODY CONTENT ---
            doc.setTextColor(60, 60, 60);
            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            
            const splitDesc = doc.splitTextToSize(data.docContent || "", pageWidth - 60);
            doc.text(splitDesc, pageWidth/2, 118, { align: "center", lineHeightFactor: 1.6 });

            // --- FOOTER ---
            const footerY = 165;
            
            // Left: Signatory Name
            doc.setTextColor(...deepBlue);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.text(data.signatoryName || "Full Name", 60, footerY, { align: "center" });

            // Right: Reference Number
            doc.setTextColor(...deepBlue);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            doc.text(`ID: ${data.internID || "N/A"}`, pageWidth - 60, footerY + 6, { align: "center" });
            doc.text(`Date: ${data.date ? new Date(data.date).toLocaleDateString() : new Date().toLocaleDateString()}`, pageWidth - 60, footerY + 12, { align: "center" });

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

        // No extra footer text needed for landscape

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
                                    universityName: "",
                                    gainedSkills: "",
                                    signatoryName: "",
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
                                                <>
                                                    <div className="modal-field">
                                                        <label>Intern ID</label>
                                                        <input type="text" placeholder="CT-2026-001" value={formData.internID} onChange={e => setFormData({...formData, internID: e.target.value})} required />
                                                    </div>
                                                    <div className="modal-field">
                                                        <label>University Name</label>
                                                        <input type="text" placeholder="e.g. Mewar University" value={formData.universityName} onChange={e => setFormData({...formData, universityName: e.target.value})} required />
                                                    </div>
                                                    <div className="modal-field">
                                                        <label>Gained Skills</label>
                                                        <input type="text" placeholder="e.g. React, Next.js, Firebase" value={formData.gainedSkills} onChange={e => setFormData({...formData, gainedSkills: e.target.value})} required />
                                                    </div>
                                                    <div className="modal-field">
                                                        <label>Signatory Full Name</label>
                                                        <input type="text" placeholder="e.g. Lav Sharma" value={formData.signatoryName} onChange={e => setFormData({...formData, signatoryName: e.target.value})} required />
                                                    </div>
                                                </>
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
                                     <div className="preview-scroll-wrapper">
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
                                                <div className="preview-inner-border-new">
                                                        <div className="preview-header-new">
                                                            <img src="/logo.png" alt="Logo" className="preview-logo-new" />
                                                        </div>
                                                        <h1 className="preview-title-new">CERTIFICATE OF INTERNSHIP</h1>
                                                        <p className="preview-label-new">This is to certify that</p>
                                                        <h2 className="preview-name-new">{formData.recipientName.toUpperCase()}</h2>
                                                        <div className="preview-body-text-new">
                                                            <p style={{ whiteSpace: "pre-line" }}>{docContent}</p>
                                                        </div>
                                                        
                                                        <div className="preview-footer-new">
                                                            <div className="footer-col-new" style={{ paddingTop: '10px' }}>
                                                                <p><strong>{formData.signatoryName || "Full Name"}</strong></p>
                                                            </div>
                                                            <div className="footer-col-new" style={{ paddingTop: '10px' }}>
                                                                <p className="sub-text-new">ID: {formData.internID || "N/A"}</p>
                                                                <p className="sub-text-new">Date: {formData.date ? new Date(formData.date).toLocaleDateString() : new Date().toLocaleDateString()}</p>
                                                            </div>
                                                        </div>
                                                </div>
                                            )}
                                        </div>
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
        </main>
    );
}
