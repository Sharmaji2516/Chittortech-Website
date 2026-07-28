import { NextResponse } from 'next/server';
import { sendChatbotLeadEmail } from '@/lib/email-service';

export const dynamic = 'force-static';

export async function POST(request) {
    try {
        const leadData = await request.json();
        
        // Notify founders via email
        const emailResult = await sendChatbotLeadEmail(leadData);
        
        return NextResponse.json({ 
            success: true, 
            emailSent: emailResult.success 
        });
    } catch (error) {
        console.error('[CHATBOT_LEAD_API] Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
