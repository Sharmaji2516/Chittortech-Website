const serviceId = 'service_sjqfz3h';
const adminTemplateId = 'template_vgr3kaj';
const publicKey = 'dyBbqU9idjG-3dnIg';

async function testSingleCall() {
  console.log('--- TESTING 1 SINGLE API CALL (KUSH + LAV + AUTOMATIC 1 AUTO-REPLY) ---');

  const clientEmail = 'webdev.digifysoft@gmail.com';
  const baseParams = {
    name: 'DigifySoft Client (Single Call Test)',
    from_name: 'DigifySoft Client (Single Call Test)',
    email: clientEmail,
    from_email: clientEmail,
    reply_to: clientEmail,
    phone: '+91 9876543210',
    project_type: 'Full Web App Solution',
    title: 'Full Web App Solution Inquiry',
    message: 'Testing single API call for Kush & Lav with automatic 1 auto-reply.',
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: 'kushsharma.cor@gmail.com, lavsharma.cor@gmail.com'
  };

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Origin': 'https://chittor-tech.web.app' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: adminTemplateId,
      user_id: publicKey,
      template_params: baseParams
    })
  });

  console.log('Status Code:', res.status);
  console.log('Response Text:', await res.text());
}

testSingleCall();
