async function testVercelApi() {
  console.log('Testing Vercel API endpoint...');
  try {
    const res = await fetch('https://chittortech-official.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Vercel API Test Client',
        email: 'test@example.com',
        projectType: 'Web Development',
        message: 'Testing lead via Vercel Serverless API'
      })
    });
    
    console.log('Status:', res.status);
    const data = await res.json();
    console.log('Data:', data);
  } catch (err) {
    console.error('Vercel API Error:', err);
  }
}

testVercelApi();
