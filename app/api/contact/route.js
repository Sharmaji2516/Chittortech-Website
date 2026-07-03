import { NextResponse } from 'next/server';
import { sendProjectInquiryEmail } from '@/lib/email-service';

export async function POST(request) {
    try {
        const body = await request.json();
        
        // Validate required fields
        const { name, email, projectType, message } = body;
        if (!name || !email || !projectType || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await sendProjectInquiryEmail({ name, email, projectType, message });

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });
        } else {
            console.error('Email service failed:', result.error);
            return NextResponse.json({ error: result.error || 'Failed to send inquiry' }, { status: 500 });
        }
    } catch (error) {
        console.error('API Contact Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
