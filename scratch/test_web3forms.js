async function testWeb3Forms() {
  console.log('Testing Web3Forms API...');
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY', // We can get a free key for kushsharma.cor@gmail.com
        name: 'Test Client',
        email: 'testclient@example.com',
        message: 'Testing Web3Forms submission'
      })
    });
    const data = await response.json();
    console.log('Web3Forms Status:', response.status);
    console.log('Web3Forms Data:', data);
  } catch (err) {
    console.error('Web3Forms Error:', err);
  }
}

testWeb3Forms();
