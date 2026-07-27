import { NextResponse } from 'next/server';
import Groq from "groq-sdk";
const pdf = require('pdf-parse-fork');

export const dynamic = 'force-static';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('resume');

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Use the fork specifically designed for Next.js/Webpack
        let text = "";
        try {
            const pdfData = await pdf(buffer);
            text = pdfData.text;
        } catch (pdfError) {
            console.error('PDF Parse Fork Error:', pdfError);
            return NextResponse.json({ error: 'Failed to read PDF. Try a different PDF file.' }, { status: 500 });
        }

        if (!text || text.trim().length === 0) {
            return NextResponse.json({ error: 'Resume text could not be extracted.' }, { status: 400 });
        }

        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });

        const prompt = `
            You are a senior recruiter at ChittorTech.
            Analyze this resume and provide a Tech-Readiness Score (0-100) and brief feedback.
            Return JSON with keys: score, tips (array), strengths (array).
            
            Resume Text:
            ${text.substring(0, 8000)} 
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: "Return output in JSON format." },
                { role: "user", content: prompt }
            ],
            model: "llama-3.3-70b-versatile",
            response_format: { type: "json_object" }
        });

        const analysis = JSON.parse(completion.choices[0].message.content);
        return NextResponse.json(analysis);

    } catch (error) {
        console.error('Final Attempt Analysis Error:', error);
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}
