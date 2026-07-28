import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ADMIN_RECIPIENTS = 'kushsharma.cor@gmail.com, lavsharma.cor@gmail.com';
const ADMIN_TEMPLATE_ID = 'template_vgr3kaj';

// Helper to send email via EmailJS REST API
async function triggerEmailJS(templateParams, templateIdOverride, attachments = null) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = templateIdOverride || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ADMIN_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey) {
    console.log('EmailJS credentials missing. Lead handled via Firestore.');
    return { success: true, mode: 'firestore_only' };
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: templateParams,
  };

  if (attachments && Array.isArray(attachments) && attachments.length > 0) {
    payload.attachments = attachments;
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
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

  const params = {
    header_title: '🚀 New Project Inquiry Received',
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

  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID);
  } catch (emailError) {
    console.error('Project Inquiry Email Error:', emailError);
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
    header_title: '🤖 New AI Chatbot Lead Received',
    name: leadData.name,
    from_name: leadData.name,
    email: leadData.email || 'Not Provided',
    from_email: leadData.email || 'Not Provided',
    reply_to: leadData.email || 'Not Provided',
    phone: leadData.phone || 'Not Provided',
    location: leadData.location || 'Not Shared',
    message: `Chatbot Lead Details:\n- Name: ${leadData.name}\n- Email/Phone: ${leadData.email || leadData.phone || 'N/A'}\n- Location: ${leadData.location || 'Not Shared'}`,
    project_type: 'AI Chatbot Lead',
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: ADMIN_RECIPIENTS
  };

  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID);
  } catch (error) {
    console.error('Chatbot Lead Email Error:', error);
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

  const durationStr = `${formData.startYear || ''} - ${formData.endYear || ''}`;
  const resumeNameStr = formData.resume?.filename || 'Uploaded (PDF)';

  const params = {
    header_title: '🎓 New Internship Application Received',
    name: formData.name,
    from_name: formData.name,
    email: formData.email,
    from_email: formData.email,
    reply_to: formData.email,
    phone: formData.phone || 'N/A',
    university: formData.university || 'N/A',
    college: formData.college || 'N/A',
    course: formData.course || 'N/A',
    project_type: `Internship (${formData.track})`,
    message: `🎓 APPLICANT FULL DETAILS:\n\n• Specialization Track: ${formData.track}\n• University: ${formData.university || 'N/A'}\n• College / Institute: ${formData.college || 'N/A'}\n• Course: ${formData.course || 'N/A'}\n• Academic Duration: ${durationStr}\n• Phone Number: ${formData.phone || 'N/A'}\n• Resume File: ${resumeNameStr}`,
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: ADMIN_RECIPIENTS
  };

  const attachments = (formData.resume && formData.resume.data) ? [{
    name: formData.resume.name || 'Resume.pdf',
    data: formData.resume.data
  }] : null;

  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID, attachments);
  } catch (error) {
    console.error('Internship Application Email Error:', error);
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
    header_title: '🎯 New Strategy / Demo Call Booking',
    name: formData.name,
    from_name: formData.name,
    email: formData.email,
    from_email: formData.email,
    reply_to: formData.email,
    phone: formData.phone,
    project_type: formData.type || 'Strategy Call',
    message: `Company: ${formData.company || 'N/A'}, Goal: ${formData.goalOrService || 'N/A'}\nDescription: ${formData.description || 'N/A'}`,
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    to_email: ADMIN_RECIPIENTS
  };

  try {
    await triggerEmailJS(params, ADMIN_TEMPLATE_ID);
  } catch (error) {
    console.error('Modal Lead Email Error:', error);
  }

  return { success: true };
}
