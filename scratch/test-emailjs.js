const serviceId = 'service_sjqfz3h';
const templateId = 'template_vgr3kaj';
const publicKey = 'dyBbqU9idjG-3dnIg';

async function testEmailJS() {
  console.log('Testing EmailJS with template_vgr3kaj...');
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://chittor-tech.web.app'
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          name: 'ChittorTech Test User',
          time: new Date().toLocaleString(),
          message: 'Testing EmailJS email delivery for ChittorTech website.',
          title: 'Live Verification Test'
        }
      }),
    });

    console.log('HTTP Status Code:', response.status);
    const text = await response.text();
    console.log('Response Text:', text);
    if (response.ok) {
      console.log('🎉 SUCCESS 200 OK! EmailJS delivered test email!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

testEmailJS();
