import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const dynamic = 'force-static';

export async function POST(request) {
    try {
        const data = await request.json();
        
        // 1. Basic Validation
        if (!data.recipientName || !data.verificationCode) {
            return NextResponse.json({ message: 'Missing required data' }, { status: 400 });
        }

        // 2. Secure Firestore Write (Server-Side)
        // Adding the Shahi Gatekeeper Key to bypass public blocks
        const docRef = await addDoc(collection(db, "recognition"), {
            ...data,
            shahiAuthKey: 'CT_SECRET_GATEWAY_2026', 
            issuedAt: serverTimestamp()
        });

        return NextResponse.json({ 
            message: 'Recognition Issued Successfully',
            id: docRef.id 
        }, { status: 200 });

    } catch (error) {
        console.error("Issuance Error:", error);
        return NextResponse.json({ 
            message: 'Issuance failed at server',
            details: error.message 
        }, { status: 500 });
    }
}
