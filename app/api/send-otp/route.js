import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        // 1. Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiry = Date.now() + 5 * 60 * 1000; // 5 mins

        // 2. Save to Firestore (Wait for it)
        await setDoc(doc(db, 'otps', email.toLowerCase()), {
            otp,
            expiry
        });

        // 3. Setup Nodemailer
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (!emailUser || !emailPass) {
            console.warn("⚠️ EMAIL_USER or EMAIL_PASS missing in .env. Falling back to console log.");
            console.log(`[MOCK EMAIL to ${email}]: Your OTP is ${otp}`);
            return NextResponse.json({ 
                success: true, 
                message: 'OTP simulated (check server console)',
                mock: true,
                otp: otp // Returning for easy testing until email is set up
            });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: `"ChittorTech Admin" <${emailUser}>`,
            to: email,
            subject: 'ChittorTech Admin Verification Code',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px;">
                    <h2 style="color: #00d2ff; text-align: center;">Verification Code</h2>
                    <p>Hello,</p>
                    <p>Your verification code for the ChittorTech Admin Panel is:</p>
                    <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 10px; border-radius: 8px;">
                        ${otp}
                    </div>
                    <p>This code will expire in 5 minutes.</p>
                    <p>If you didn't request this, please ignore this email.</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #666; text-align: center;">ChittorTech Solutions Pvt Ltd</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'OTP sent successfully' });

    } catch (error) {
        console.error('Error in send-otp:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
