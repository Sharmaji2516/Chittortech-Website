"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showRequestModal, setShowRequestModal] = useState(false);

    // Request Form State
    const [reqName, setReqName] = useState("");
    const [reqEmail, setReqEmail] = useState("");
    const [reqReason, setReqReason] = useState("");

    const projects = [
        { name: "Chittorgarh Tourism", start: "Jan 2026", end: "Mar 2026", domain: "chittorgarh-tourism.vercel.app", url: "https://chittorgarh-tourism.vercel.app/", vercel: "ct-prod-v1", firebase: "ct-tourism-db", status: "Completed" },
        { name: "Shaadi Sutra", start: "Feb 2026", end: "Apr 2026", domain: "shaadi-sutra.online", url: "https://shaadi-sutra.vercel.app/", vercel: "ss-official-v2", firebase: "shaadi-sutra-auth", status: "Active" },
        { name: "Mewari Achar", start: "Mar 2026", end: "May 2026", domain: "mewari-achar.shop", url: "https://www.mewari-achar.shop/", vercel: "ma-commerce-live", firebase: "mewari-achar-prod", status: "Active" }
    ];

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        try {
            const res = await fetch('/api/send-otp', {
                method: 'POST',
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            
            if (data.success) {
                setIsOtpSent(true);
                if (data.mock) {
                    alert(`Demo Mode: OTP is ${data.otp}. In production, this would be emailed.`);
                } else {
                    alert("Verification code sent to your email.");
                }
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Failed to connect to server.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch('/api/verify-otp', {
                method: 'POST',
                body: JSON.stringify({ email, otp }),
            });
            const data = await res.json();

            if (data.success) {
                setIsLoggedIn(true);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Verification failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleRequestAccess = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "access_requests"), {
                name: reqName,
                email: reqEmail,
                reason: reqReason,
                timestamp: serverTimestamp(),
                status: "pending"
            });
            alert("Request submitted successfully! We will review it shortly.");
            setShowRequestModal(false);
            setReqName(""); setReqEmail(""); setReqReason("");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    if (isLoggedIn) {
        return (
            <main className="p-8 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-5xl font-bold mb-2">Frontier <span className="text-[#00d2ff]">Control</span></h1>
                        <p className="text-slate-400">Operational overview of all architectural digital solutions.</p>
                    </div>
                    <button onClick={() => setIsLoggedIn(false)} className="px-8 py-3 rounded-full border border-white/10 hover:border-[#00d2ff] transition-all">
                        Logout <i className="fas fa-sign-out-alt ml-2"></i>
                    </button>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5">
                                <tr>
                                    <th className="p-6">Project Frontier</th>
                                    <th className="p-6">Timeline</th>
                                    <th className="p-6">Endpoint</th>
                                    <th className="p-6">Infrastructure</th>
                                    <th className="p-6">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((p, i) => (
                                    <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-all">
                                        <td className="p-6">
                                            <div className="font-bold text-xl">{p.name}</div>
                                            <div className="text-xs text-slate-500 mt-1">PRJ-{1000 + i}</div>
                                        </td>
                                        <td className="p-6 text-slate-300">
                                            {p.start} - {p.end}
                                        </td>
                                        <td className="p-6">
                                            <a href={p.url} className="text-[#00d2ff] hover:underline flex items-center gap-2">
                                                {p.domain} <i className="fas fa-external-link-alt text-[10px]"></i>
                                            </a>
                                        </td>
                                        <td className="p-6 text-sm">
                                            <div className="flex flex-col gap-1">
                                                <span className="flex items-center gap-2"><i className="fas fa-play text-green-400"></i> {p.vercel}</span>
                                                <span className="flex items-center gap-2"><i className="fas fa-fire text-orange-400"></i> {p.firebase}</span>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`px-4 py-1 rounded-full text-xs font-bold ${p.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                                {p.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="admin-page min-h-screen flex items-center justify-center bg-[#030305]">
            <div className="w-full max-w-[460px] p-6">
                <div className="login-card">
                    <img src="/logo.png" alt="Logo" className="h-14 mx-auto mb-8 opacity-90" />
                    <h2 className="text-4xl font-bold text-white mb-2">Admin Login</h2>
                    <p className="text-slate-400 mb-10">Access the ChittorTech internal dashboard.</p>

                    <form onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp} className="space-y-4">
                        <div className="relative">
                            <i className="fas fa-envelope absolute left-5 top-1/2 -translate-y-1/2 text-[#00d2ff]"></i>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isOtpSent}
                                placeholder="kushsharma.cor@gmail.com" 
                                required 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white outline-none focus:border-[#00d2ff] transition-all"
                            />
                        </div>

                        {isOtpSent && (
                            <div className="relative animate-in fade-in slide-in-from-top-4 duration-500">
                                <i className="fas fa-lock absolute left-5 top-1/2 -translate-y-1/2 text-[#00d2ff]"></i>
                                <input 
                                    type="text" 
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter 6-digit OTP" 
                                    required 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white outline-none focus:border-[#00d2ff] transition-all"
                                />
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#9d50bb] py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            {loading ? <i className="fas fa-spinner fa-spin"></i> : (isOtpSent ? "Verify & Enter" : "Send Verification Code")}
                            {!loading && <i className="fas fa-paper-plane"></i>}
                        </button>
                    </form>

                    <div className="mt-8">
                        <p className="text-sm text-slate-400">
                            Don't have access? <button onClick={() => setShowRequestModal(true)} className="text-[#00d2ff] font-bold hover:underline">Request Access</button>
                        </p>
                    </div>

                    {error && (
                        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {/* Request Modal */}
            {showRequestModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                    <div className="bg-[#0a0a0c] border border-white/10 rounded-[32px] p-8 w-full max-w-[450px]">
                        <h3 className="text-3xl font-bold mb-2">Request <span className="text-[#00d2ff]">Access</span></h3>
                        <p className="text-slate-400 mb-8 text-sm">Submit your details for review.</p>
                        
                        <form onSubmit={handleRequestAccess} className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                required 
                                value={reqName}
                                onChange={(e) => setReqName(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#00d2ff]"
                            />
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                required 
                                value={reqEmail}
                                onChange={(e) => setReqEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#00d2ff]"
                            />
                            <textarea 
                                placeholder="Reason for access" 
                                required 
                                value={reqReason}
                                onChange={(e) => setReqReason(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#00d2ff] h-32 resize-none"
                            ></textarea>
                            
                            <button type="submit" className="w-full bg-[#00d2ff] py-4 rounded-xl font-bold text-lg hover:bg-opacity-90">Submit Request</button>
                            <button type="button" onClick={() => setShowRequestModal(false)} className="w-full text-slate-500 mt-2 hover:text-white transition-all">Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
