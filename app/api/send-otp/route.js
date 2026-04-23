import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { sendOtpEmail } from '@/lib/email-service';
import { generateOtpToken } from '@/lib/otpStore';

export async function POST(request) {
    try {
        const { email, password, loginWithOtp, mode, auditData } = await request.json();

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        const emailKey = email.toLowerCase();
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'Unknown';

        // Security check for login
        if (mode === 'login' && !loginWithOtp) {
            const userDoc = await getDoc(doc(db, 'users', emailKey));
            if (!userDoc.exists()) return NextResponse.json({ message: 'User not found' }, { status: 404 });
            if (userDoc.data().password !== password) return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiry = Date.now() + 5 * 60 * 1000;

        // Save to Firestore (Fallback)
        await setDoc(doc(db, 'otps', emailKey), { otp, expiry });

        // Generate Stateless Token
        const token = generateOtpToken(emailKey, otp, expiry);

        // Send Email with Audit Data
        const mailRes = await sendOtpEmail(emailKey, otp, { ...auditData, ip });

        if (mailRes.success) {
            return NextResponse.json({ success: true, message: 'OTP sent', token });
        } else {
            return NextResponse.json({ 
                success: true, 
                message: 'OTP simulated (check console)', 
                token,
                mock: true,
                otp
            });
        }

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
