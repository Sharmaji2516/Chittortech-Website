import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
        }

        const userRef = doc(db, 'users', email.toLowerCase());
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const userData = userDoc.data();

        // Security Check: Match password
        if (userData.password !== password) {
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Login successful',
            user: {
                name: userData.name,
                email: userData.email,
                role: userData.role
            }
        });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
