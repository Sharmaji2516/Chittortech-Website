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

import { dispatchEmail } from '../lib/email-service.js';

async function testDispatch() {
  console.log('Testing updated dispatchEmail with native fetch...');
  const res = await dispatchEmail({
    to: ['kushsharma.cor@gmail.com', 'lavsharma.cor@gmail.com'],
    subject: 'Native Fetch Dispatch Test',
    html: '<p>Testing native fetch dispatch to team members</p>'
  });
  console.log('Dispatch Result:', res);
}

testDispatch();
