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

import { sendProjectInquiryEmail } from '../lib/email-service.js';

async function testHybrid() {
  console.log('Testing Bulletproof Hybrid Dispatcher...');
  const res = await sendProjectInquiryEmail({
    name: 'Test Hybrid Client',
    email: 'hybridtest@example.com',
    projectType: 'Web Development',
    message: 'Testing bulletproof hybrid dispatch for static browser hosting'
  });

  console.log('Hybrid Dispatch Result:', res);
}

testHybrid();
