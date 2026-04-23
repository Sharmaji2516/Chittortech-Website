"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [otpToken, setOtpToken] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await firebaseSignOut(auth);
    };

    const checkUserExists = async (email) => {
        try {
            const response = await fetch('/api/check-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            return data; // { exists, name }
        } catch (error) {
            return { exists: false };
        }
    };

    const sendOtp = async (email, password, loginWithOtp, mode, auditData = null) => {
        const response = await fetch('/api/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, loginWithOtp, mode, auditData }),
        });
        const data = await response.json();
        if (data.success && data.token) {
            setOtpToken(data.token);
        }
        return data;
    };

    const verifyOtp = async (email, otp, name, password, mode) => {
        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, token: otpToken, name, password, mode }),
            });
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("[AUTH_CONTEXT] OTP Verification Fetch Error:", error);
            return { success: false, message: "Server connection failed. Retry" };
        }
    };

    const login = async (email, password) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            return await response.json();
        } catch (error) {
            return { success: false, message: "Login service unavailable" };
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            logout, 
            sendOtp, 
            verifyOtp,
            checkUserExists,
            login
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
