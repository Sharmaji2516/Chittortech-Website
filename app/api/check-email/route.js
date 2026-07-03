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

        if (userDoc.exists()) {
            return NextResponse.json({ 
                success: true, 
                exists: true,
                name: userDoc.data().name 
            });
        } else {
            return NextResponse.json({ 
                success: true, 
                exists: false 
            });
        }

    } catch (error) {
        console.error('Error checking email:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
