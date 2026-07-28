import fs from 'fs';
import path from 'path';

// Parse .env.local
const envPath = path.resolve('.env.local');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  for (const line of envConfig.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...val] = trimmed.split('=');
      if (key && val) {
        process.env[key.trim()] = val.join('=').trim();
      }
    }
  }
}

async function testCorsProxy() {
  const apiKey = process.env.RESEND_API_KEY;
  console.log('Testing Resend send via CORS proxy...');
  
  try {
    const response = await fetch('https://corsproxy.io/?https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ChittorTech <contact@chittortech.online>',
        to: ['kushsharma.cor@gmail.com', 'lavsharma.cor@gmail.com'],
        subject: 'CORS Proxy Test Email',
        html: '<p>Testing email delivery through CORS proxy for static browser hosting</p>'
      })
    });

    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Data:', data);
  } catch (err) {
    console.error('CORS Proxy Error:', err);
  }
}

testCorsProxy();
