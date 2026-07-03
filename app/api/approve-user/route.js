import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const action = searchParams.get('action') || 'approve';
    
    if (!email) {
        return new Response('Email missing', { status: 400 });
    }

    try {
        const requestRef = doc(db, 'signup_requests', email.toLowerCase());
        const requestDoc = await getDoc(requestRef);

        if (!requestDoc.exists()) {
            return new Response('Request not found or already processed.', { 
                status: 404,
                headers: { 'Content-Type': 'text/html' }
            });
        }

        const userData = requestDoc.data();

        if (action === 'approve') {
            // 1. Move to 'users' collection
            await setDoc(doc(db, 'users', email.toLowerCase()), {
                name: userData.name,
                email: email.toLowerCase(),
                password: userData.password,
                role: 'admin',
                approvedAt: Date.now()
            });
            // 2. Delete from requests
            await deleteDoc(requestRef);
        } else {
            // Reject: Just delete the request
            await deleteDoc(requestRef);
        }

        const isApproved = action === 'approve';

        return new Response(`
            <html>
                <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #050505; color: white; margin: 0;">
                    <div style="text-align: center; padding: 50px; background: rgba(255,255,255,0.03); border-radius: 32px; border: 1px solid ${isApproved ? 'rgba(212,175,55,0.3)' : 'rgba(239,68,68,0.3)'}; max-width: 400px;">
                        <div style="font-size: 64px; margin-bottom: 20px;">${isApproved ? '✅' : '❌'}</div>
                        <h1 style="color: ${isApproved ? '#D4AF37' : '#ef4444'}; margin-bottom: 10px;">${isApproved ? 'User Approved' : 'Request Rejected'}</h1>
                        <p style="color: #94a3b8; line-height: 1.5;">The request for <b>${email}</b> has been ${isApproved ? 'granted full admin access' : 'discarded from the system'}.</p>
                        <a href="/admin" style="display: inline-block; margin-top: 30px; padding: 14px 28px; background: ${isApproved ? '#D4AF37' : 'rgba(255,255,255,0.1)'}; color: ${isApproved ? 'black' : 'white'}; text-decoration: none; border-radius: 14px; font-weight: bold; transition: opacity 0.2s;">
                            Return to Admin Panel
                        </a>
                    </div>
                </body>
            </html>
        `, { headers: { 'Content-Type': 'text/html' } });

    } catch (error) {
        return new Response('Error: ' + error.message, { status: 500 });
    }
}
