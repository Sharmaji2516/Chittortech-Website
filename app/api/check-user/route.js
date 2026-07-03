import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        const userDocRef = doc(db, 'users', email.toLowerCase());
        const userDoc = await getDoc(userDocRef);

        return NextResponse.json({ 
            success: true, 
            exists: userDoc.exists(),
            name: userDoc.exists() ? userDoc.data().name : null
        });

    } catch (error) {
        console.error('Check user error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
