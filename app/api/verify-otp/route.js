import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '@/lib/firebase';
import { doc, getDoc, deleteDoc, setDoc } from 'firebase/firestore';
import { sendChittorWelcomeEmail } from '@/lib/email-service';
import { verifyOtpToken } from '@/lib/otpStore';

export async function POST(request) {
    try {
        const { email, otp, token, name, password, mode } = await request.json();

        if (!email || !otp) {
            return NextResponse.json({ message: 'Email and OTP are required' }, { status: 400 });
        }

        const emailKey = email.toLowerCase();
        console.log(`[VERIFY] Checking OTP for ${emailKey}...`);
        
        // Verify using stateless token OR Firestore
        const isValidToken = verifyOtpToken(emailKey, otp, token);
        let isValidDb = false;

        const otpDocRef = doc(db, 'otps', emailKey);
        const otpDoc = await getDoc(otpDocRef);
        if (otpDoc.exists()) {
            const data = otpDoc.data();
            console.log(`[VERIFY] Found OTP in DB: ${data.otp}, Input: ${otp}`);
            if (data.otp === otp && Date.now() <= data.expiry) isValidDb = true;
        }

        console.log(`[VERIFY] Results - Token: ${isValidToken}, DB: ${isValidDb}`);

        if (!isValidToken && !isValidDb) {
            return NextResponse.json({ message: 'OTP not matched. Retry', success: false }, { status: 400 });
        }

        // Cleanup
        if (otpDoc.exists()) await deleteDoc(otpDocRef);

        // Finalize
        if (mode === 'signup') {
            console.log(`[VERIFY] Creating signup request for ${emailKey}`);
            await setDoc(doc(db, 'signup_requests', emailKey), {
                name,
                email: emailKey,
                password,
                status: 'pending',
                requestedAt: Date.now()
            });

            // Send custom notification to user
            const emailUser = process.env.EMAIL_USER;
            const emailPass = process.env.EMAIL_PASS;
            
            if (emailUser && emailPass) {
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: { user: emailUser, pass: emailPass.replace(/\s/g, '') },
                });

                const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

                // 1. Send confirmation to the USER
                transporter.sendMail({
                    from: `"ChittorTech Security" <${emailUser}>`,
                    to: email,
                    subject: "Request Received - ChittorTech Admin Panel",
                    html: `
                        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h1 style="color: #1e293b; margin: 0; font-size: 24px; letter-spacing: -1px;">CHITTOR<span style="color: #D4AF37;">TECH</span></h1>
                                <p style="color: #64748b; font-size: 12px; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Enterprise Solutions</p>
                            </div>
                            <div style="border-top: 2px solid #f1f5f9; padding-top: 30px;">
                                <h2 style="color: #0f172a; font-size: 20px; margin-bottom: 15px;">Access Request Received</h2>
                                <p style="color: #475569; line-height: 1.6;">Hello <strong>${name}</strong>,</p>
                                <p style="color: #475569; line-height: 1.6;">Your request for administrator access to the ChittorTech Admin Panel has been successfully logged. Our technical team has been notified and is currently reviewing your application.</p>
                                <p style="color: #475569; line-height: 1.6;">You will receive another email as soon as your access is approved.</p>
                                <div style="margin-top: 40px; padding: 20px; background-color: #f8fafc; border-radius: 12px; border-left: 4px solid #D4AF37;">
                                    <p style="color: #64748b; font-size: 14px; margin: 0;"><strong>Status:</strong> Pending Audit</p>
                                </div>
                            </div>
                            <div style="margin-top: 40px; text-align: center; color: #94a3b8; font-size: 12px;">
                                &copy; ${new Date().getFullYear()} Chittor-Tech Enterprise. All rights reserved.
                            </div>
                        </div>
                    `
                }).catch(err => console.error("[VERIFY] User email failed:", err));

                // 2. Send notification to the DEVELOPER (chittortech@gmail.com)
                transporter.sendMail({
                    from: `"ChittorTech System" <${emailUser}>`,
                    to: emailUser,
                    subject: "🚨 ACTION REQUIRED: New Admin Request",
                    html: `
                        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0;">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h1 style="color: #1e293b; margin: 0; font-size: 24px; letter-spacing: -1px;">CHITTOR<span style="color: #D4AF37;">TECH</span></h1>
                                <p style="color: #64748b; font-size: 12px; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Developer Console</p>
                            </div>
                            <div style="background-color: #fff7ed; border: 1px solid #ffedd5; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
                                <h2 style="color: #9a3412; font-size: 18px; margin: 0 0 10px 0;">New Signup Request</h2>
                                <p style="color: #c2410c; margin: 0; font-size: 14px;">A new user is awaiting authorization to access the admin portal.</p>
                            </div>
                            
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-size: 14px;">User Name:</td>
                                    <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email Address:</td>
                                    <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${emailKey}</td>
                                </tr>
                            </table>

                            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
                                <h2 style="color: #0f172a; font-size: 18px; margin: 0 0 15px 0;">Security Authorization Required</h2>
                                <p style="color: #475569; margin: 0; font-size: 14px; line-height: 1.6;">
                                    A new administrative access request has been initialized. For security integrity, this request must be processed **manually** through the Firebase Management Console.
                                </p>
                            </div>
                            
                            <div style="margin-bottom: 30px;">
                                <h3 style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">Applicant Credentials:</h3>
                                <table style="width: 100%; background: #f1f5f9; border-radius: 8px;">
                                    <tr>
                                        <td style="padding: 12px; color: #64748b; font-size: 13px;">Full Name:</td>
                                        <td style="padding: 12px; color: #0f172a; font-weight: 600;">${name}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px; color: #64748b; font-size: 13px;">Email Identity:</td>
                                        <td style="padding: 12px; color: #0f172a; font-weight: 600;">${emailKey}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px; color: #64748b; font-size: 13px;">Security Password:</td>
                                        <td style="padding: 12px; color: #0f172a; font-weight: 600; font-family: monospace;">${password}</td>
                                    </tr>
                                </table>
                            </div>

                            <div style="background-color: #fff; border: 1px dashed #cbd5e1; padding: 20px; border-radius: 12px;">
                                <h3 style="color: #D4AF37; font-size: 14px; margin: 0 0 10px 0;">Manual Approval Protocol:</h3>
                                <ol style="color: #475569; font-size: 13px; padding-left: 20px; margin: 0; line-height: 1.8;">
                                    <li>Log in to <strong>Firebase Console</strong> using <code>mewariachar@gmail.com</code>.</li>
                                    <li>Navigate to <strong>Authentication > Users</strong> and select <strong>"Add User"</strong> using the credentials above.</li>
                                    <li>Access <strong>Cloud Firestore</strong> and locate the document in the <code>signup_requests</code> collection.</li>
                                    <li>Once manual registry is complete, utilize the <strong>ChittorTech Admin Dashboard</strong> to transmit the formal approval notification to the user.</li>
                                </ol>
                            </div>

                            <div style="margin-top: 30px; text-align: center;">
                                <a href="${baseUrl}/admin" style="display: inline-block; padding: 12px 24px; background: #1e293b; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 13px;">
                                    Access Admin Dashboard
                                </a>
                            </div>

                            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 30px 0;">
                            <p style="font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.4;">
                                <strong>Security Notice:</strong> Direct approval links have been disabled to prevent unauthorized access. Manual verification is mandatory.
                            </p>
                        </div>
                    `
                }).then(() => console.log(`[VERIFY] Developer alert sent to ${emailUser}`))
                  .catch(err => console.error("[VERIFY] Dev alert failed:", err));
            }
        } else {
            console.log(`[VERIFY] Login/Access verified for ${emailKey}`);
        }

        return NextResponse.json({ success: true, message: 'Verified' });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
