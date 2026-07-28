async function testFormSubmit() {
  console.log('Testing FormSubmit AJAX endpoint...');
  try {
    const response = await fetch('https://formsubmit.co/ajax/kushsharma.cor@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test Client via FormSubmit',
        email: 'testclient@example.com',
        _subject: '🚀 New Lead: Test Client (Web Development)',
        projectType: 'Web Development',
        message: 'Hello ChittorTech team! Testing live form submission delivery.',
        _cc: 'lavsharma.cor@gmail.com'
      })
    });
    
    console.log('Status:', response.status);
    const data = await response.json();
    console.log('Data:', data);
  } catch (err) {
    console.error('FormSubmit Error:', err);
  }
}

testFormSubmit();
