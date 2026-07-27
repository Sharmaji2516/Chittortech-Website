import { NextResponse } from 'next/server';
import { sendModalLeadEmail } from '@/lib/email-service';

export const dynamic = 'force-static';

export async function POST(req) {
    try {
        const body = await req.json();
        
        // Basic validation
        if (!body.name || !body.email || !body.phone) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const result = await sendModalLeadEmail(body);

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, error: result.error || 'Failed to send email' }, { status: 500 });
        }

    } catch (error) {
        console.error('Modal Lead API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
