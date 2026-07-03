import { NextResponse } from 'next/server';
import { sendInternshipApplicationEmail } from '@/lib/email-service';

export async function POST(request) {
    try {
        const formData = await request.formData();
        
        // Extract fields
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const course = formData.get('course');
        const startYear = formData.get('startYear');
        const endYear = formData.get('endYear');
        const resumeFile = formData.get('resume');

        // Handle Track Others
        let track = formData.get('track');
        if (track === "Others") track = formData.get('otherTrack');

        const university = formData.get('university');
        const college = formData.get('college');

        // Validate required fields
        if (!name || !email || !phone || !college || !university || !course || !startYear || !endYear || !track || !resumeFile) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Convert file to Buffer for email service
        const bytes = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await sendInternshipApplicationEmail({ 
            name, email, phone, college, university, course, startYear, endYear, track,
            resume: {
                content: buffer,
                filename: resumeFile.name,
                contentType: resumeFile.type
            }
        });

        if (result.success) {
            return NextResponse.json({ success: true, message: 'Application sent successfully' });
        } else {
            console.error('Email service failed:', result.error);
            return NextResponse.json({ error: result.error || 'Failed to send application' }, { status: 500 });
        }
    } catch (error) {
        console.error('API Internship Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
