import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Helper to send email via EmailJS REST API
async function triggerEmailJS(templateParams) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.log('EmailJS credentials missing. Lead handled via Firestore.');
    return { success: true, mode: 'firestore_only' };
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    });
    return { success: res.ok };
  } catch (err) {
    console.error('EmailJS Send Warning:', err);
    return { success: true, warning: err.message };
  }
}

export async function sendChittorWelcomeEmail(email, name = '') {
  try {
    await addDoc(collection(db, "admin_welcome_logs"), {
      email,
      name,
      createdAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Welcome Log Warning:', error);
    return { success: true };
  }
}

export async function sendOtpEmail(email, otp, auditData = null) {
  try {
    await addDoc(collection(db, "otps"), {
      email,
      otp,
      auditData,
      createdAt: serverTimestamp()
    });
  } catch (dbErr) {
    console.warn('OTP DB Save Warning:', dbErr);
  }

  try {
    await triggerEmailJS({
      to_email: email,
      subject: `OTP Authorization Code: ${otp}`,
      message: `Your authorization OTP is ${otp}. It will expire in 5 minutes.`
    });
    return { success: true };
  } catch (error) {
    console.error('OTP Send Error:', error);
    return { success: false };
  }
}

export async function sendProjectInquiryEmail(formData) {
  let dbSaved = false;

  // 1. Save Lead to Firestore (1 Write per submission only)
  try {
    const { name, email, projectType, message } = formData;
    await addDoc(collection(db, "inquiries"), {
      name,
      email,
      projectType,
      message,
      createdAt: serverTimestamp()
    });
    dbSaved = true;
  } catch (dbError) {
    console.warn('Firestore write warning (quota/network):', dbError);
  }

  // 2. Email Notification via EmailJS
  try {
    await triggerEmailJS({
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      message: formData.message,
      to_email: 'chittortech@gmail.com'
    });
    return { success: true };
  } catch (emailError) {
    console.error('Project Inquiry Email Error:', emailError);
    return { success: dbSaved, error: emailError.message };
  }
}

export async function sendChatbotLeadEmail(leadData) {
  let dbSaved = false;

  // 1. Save Lead to Firestore (1 Write per submission only)
  try {
    const { name, email, phone, location } = leadData;
    await addDoc(collection(db, "chatbot_leads"), {
      name,
      email: email || 'Not Provided',
      phone: phone || 'Not Provided',
      location: location || 'Not Shared',
      createdAt: serverTimestamp()
    });
    dbSaved = true;
  } catch (dbError) {
    console.warn('Firestore write warning:', dbError);
  }

  // 2. Send via EmailJS
  try {
    await triggerEmailJS({
      from_name: leadData.name,
      from_email: leadData.email || 'Not Provided',
      phone: leadData.phone || 'Not Provided',
      location: leadData.location || 'Not Shared',
      to_email: 'chittortech@gmail.com'
    });
    return { success: true };
  } catch (error) {
    console.error('Chatbot Lead Email Error:', error);
    return { success: dbSaved };
  }
}

export async function sendInternshipApplicationEmail(formData) {
  let dbSaved = false;

  // 1. Save Lead to Firestore (1 Write per submission only)
  try {
    const { name, email, phone, university, college, course, startYear, endYear, track, resume } = formData;
    await addDoc(collection(db, "internship_applications"), {
      name,
      email,
      phone,
      university,
      college,
      course,
      startYear,
      endYear,
      track,
      resumeFileName: resume?.filename || null,
      createdAt: serverTimestamp()
    });
    dbSaved = true;
  } catch (dbError) {
    console.warn('Firestore write warning:', dbError);
  }

  // 2. Send via EmailJS
  try {
    await triggerEmailJS({
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      university: formData.university,
      track: formData.track,
      to_email: 'chittortech@gmail.com'
    });
    return { success: true };
  } catch (error) {
    console.error('Internship Application Email Error:', error);
    return { success: dbSaved };
  }
}

export async function sendModalLeadEmail(formData) {
  let dbSaved = false;

  // 1. Save Lead to Firestore (1 Write per submission only)
  try {
    const { type, name, email, phone, company, goalOrService, description } = formData;
    await addDoc(collection(db, "modal_leads"), {
      type: type || 'Demo / Strategy Call',
      name,
      email,
      phone,
      company: company || 'N/A',
      goalOrService: goalOrService || 'N/A',
      description: description || 'N/A',
      createdAt: serverTimestamp()
    });
    dbSaved = true;
  } catch (dbError) {
    console.warn('Firestore write warning:', dbError);
  }

  // 2. Send via EmailJS
  try {
    await triggerEmailJS({
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      lead_type: formData.type,
      description: formData.description,
      to_email: 'chittortech@gmail.com'
    });
    return { success: true };
  } catch (error) {
    console.error('Modal Lead Email Error:', error);
    return { success: dbSaved };
  }
}
