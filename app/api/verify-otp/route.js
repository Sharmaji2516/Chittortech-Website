import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

export async function POST(request) {
    try {
        const { email, otp } = await request.json();

        if (!email || !otp) {
            return NextResponse.json({ message: 'Email and OTP are required' }, { status: 400 });
        }

        const emailKey = email.toLowerCase();
        const otpDocRef = doc(db, 'otps', emailKey);
        const otpDoc = await getDoc(otpDocRef);

        if (!otpDoc.exists()) {
            return NextResponse.json({ message: 'No valid OTP found or it has expired', success: false }, { status: 400 });
        }

        const data = otpDoc.data();

        if (Date.now() > data.expiry) {
            await deleteDoc(otpDocRef);
            return NextResponse.json({ message: 'OTP has expired', success: false }, { status: 400 });
        }

        if (data.otp !== otp) {
            return NextResponse.json({ message: 'Invalid verification code', success: false }, { status: 400 });
        }

        // Valid! Cleanup
        await deleteDoc(otpDocRef);

        return NextResponse.json({ 
            message: 'OTP verified successfully', 
            success: true 
        });

    } catch (error) {
        console.error('Error verifying OTP:', error);
        return NextResponse.json({ 
            message: 'Failed to verify OTP', 
            success: false 
        }, { status: 500 });
    }
}
