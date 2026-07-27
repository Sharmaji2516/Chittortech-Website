import { NextResponse } from 'next/server';
import { sendChittorWelcomeEmail } from '@/lib/email-service';

export const dynamic = 'force-static';

export async function POST(request) {
    try {
        const { email, name } = await request.json();
        await sendChittorWelcomeEmail(email, name);
        return NextResponse.json({ success: true, message: 'Notification processed' });
    } catch (error) {
        console.error('Notify Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
