import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { email, name, password } = await request.json();

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (emailUser && emailPass) {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: { user: emailUser, pass: emailPass.replace(/\s/g, '') },
            });

            await transporter.sendMail({
                from: `"ChittorTech Security" <${emailUser}>`,
                to: email,
                subject: "Access Approved - ChittorTech Admin Panel",
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #1e293b; margin: 0; font-size: 24px; letter-spacing: -1px;">CHITTOR<span style="color: #D4AF37;">TECH</span></h1>
                            <p style="color: #64748b; font-size: 12px; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Enterprise Solutions</p>
                        </div>
                        <div style="border-top: 2px solid #f1f5f9; padding-top: 30px;">
                            <div style="text-align: center; font-size: 48px; margin-bottom: 20px;">✅</div>
                            <h2 style="color: #0f172a; font-size: 24px; margin-bottom: 15px; text-align: center;">Access Granted</h2>
                            <p style="color: #475569; line-height: 1.6;">Hello <strong>${name || 'User'}</strong>,</p>
                            <p style="color: #475569; line-height: 1.6;">Your administrative access request for the ChittorTech Admin Panel has been **Approved**. You can now access the infrastructure management console.</p>
                            
                            <div style="margin: 30px 0; padding: 25px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                                <h3 style="color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">Your Security Credentials:</h3>
                                <p style="margin: 5px 0; color: #64748b; font-size: 13px;">Login Email:</p>
                                <p style="margin: 0 0 15px 0; color: #0f172a; font-weight: 600;">${email}</p>
                                <p style="margin: 5px 0; color: #64748b; font-size: 13px;">Password:</p>
                                <p style="margin: 0; color: #0f172a; font-weight: 600; font-family: monospace; font-size: 16px;">${password || '********'}</p>
                            </div>

                            <div style="text-align: center;">
                                <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/admin" 
                                   style="display: inline-block; padding: 16px 32px; background: #D4AF37; color: #000000; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px;">
                                   Log In to Dashboard
                                </a>
                            </div>
                        </div>
                        <div style="margin-top: 40px; text-align: center; color: #94a3b8; font-size: 12px;">
                            &copy; ${new Date().getFullYear()} Chittor-Tech Enterprise. All rights reserved.
                        </div>
                    </div>
                `
            });

            return NextResponse.json({ success: true, message: 'Notification sent' });
        }

        return NextResponse.json({ success: false, message: 'Email configuration missing' }, { status: 500 });

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
