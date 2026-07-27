import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ADMIN_RECIPIENTS = 'chittortech@gmail.com, kushsharma.cor@gmail.com, lavsharma.cor@gmail.com';
const ADMIN_TEMPLATE_ID = 'template_vgr3kaj';
const AUTOREPLY_TEMPLATE_ID = 'template_u0wkwuo';

// Helper to send email via EmailJS REST API
async function triggerEmailJS(templateParams, templateIdOverride) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = templateIdOverride || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ADMIN_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey) {
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

  // 1. Save Lead to Firestore
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
    console.warn('Firestore write warning:', dbError);
  }

  // Common Template Parameters (matching all EmailJS variable formats)
  const params = {
    name: formData.name,
    from_name: formData.name,
    email: formData.email,
    from_email: formData.email,
    reply_to: formData.email,
    phone: formData.phone || 'N/A',
    project_type: formData.projectType || 'Project Inquiry',
    title: formData.projectType || 'Project Inquiry',
    message: formData.message,
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: ADMIN_RECIPIENTS
  };

  // 2. Send Admin Notification to all 3 Admin Inboxes
  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID);
  } catch (emailError) {
    console.error('Project Inquiry Admin Email Error:', emailError);
  }

  // 3. Send Auto-Reply to Customer
  if (formData.email) {
    try {
      await triggerEmailJS({
        ...params,
        to_email: formData.email
      }, AUTOREPLY_TEMPLATE_ID);
    } catch (autoReplyErr) {
      console.warn('Auto-Reply Warning:', autoReplyErr);
    }
  }

  return { success: true };
}

export async function sendChatbotLeadEmail(leadData) {
  let dbSaved = false;

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

  const params = {
    name: leadData.name,
    from_name: leadData.name,
    email: leadData.email || 'Not Provided',
    from_email: leadData.email || 'Not Provided',
    reply_to: leadData.email || 'Not Provided',
    phone: leadData.phone || 'Not Provided',
    location: leadData.location || 'Not Shared',
    message: `Chatbot Lead - Phone: ${leadData.phone || 'N/A'}, Location: ${leadData.location || 'N/A'}`,
    project_type: 'AI Chatbot Lead',
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: ADMIN_RECIPIENTS
  };

  // Admin Email
  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID);
  } catch (error) {
    console.error('Chatbot Lead Email Error:', error);
  }

  // Auto-Reply to customer if email provided
  if (leadData.email && leadData.email.includes('@')) {
    try {
      await triggerEmailJS({
        ...params,
        to_email: leadData.email
      }, AUTOREPLY_TEMPLATE_ID);
    } catch (e) {}
  }

  return { success: true };
}

export async function sendInternshipApplicationEmail(formData) {
  let dbSaved = false;

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

  const params = {
    name: formData.name,
    from_name: formData.name,
    email: formData.email,
    from_email: formData.email,
    reply_to: formData.email,
    phone: formData.phone,
    university: formData.university,
    project_type: `Internship Application (${formData.track})`,
    message: `University: ${formData.university}, Course: ${formData.course}, Track: ${formData.track}`,
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: ADMIN_RECIPIENTS
  };

  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID);
  } catch (error) {
    console.error('Internship Application Email Error:', error);
  }

  if (formData.email) {
    try {
      await triggerEmailJS({
        ...params,
        to_email: formData.email
      }, AUTOREPLY_TEMPLATE_ID);
    } catch (e) {}
  }

  return { success: true };
}

export async function sendModalLeadEmail(formData) {
  let dbSaved = false;

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

  const params = {
    name: formData.name,
    from_name: formData.name,
    email: formData.email,
    from_email: formData.email,
    reply_to: formData.email,
    phone: formData.phone,
    project_type: formData.type || 'Strategy / Demo Call',
    message: `Company: ${formData.company || 'N/A'}, Goal: ${formData.goalOrService || 'N/A'}\nDescription: ${formData.description || 'N/A'}`,
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: ADMIN_RECIPIENTS
  };

  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID);
  } catch (error) {
    console.error('Modal Lead Email Error:', error);
  }

  if (formData.email) {
    try {
      await triggerEmailJS({
        ...params,
        to_email: formData.email
      }, AUTOREPLY_TEMPLATE_ID);
    } catch (e) {}
  }

  return { success: true };
}
