import { Resend } from 'resend';

/**
 * Dispatch emails using Resend API.
 * Supports both server-side (process.env.RESEND_API_KEY) and static client builds (process.env.NEXT_PUBLIC_RESEND_API_KEY).
 */
export async function dispatchEmail({ from, to, subject, html, attachments = [] }) {
  const resendApiKey = (process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY)?.trim();

  if (!resendApiKey) {
    console.error('Email Service Error: RESEND_API_KEY is missing in environment variables');
    return {
      success: false,
      error: 'Credentials missing! Please set RESEND_API_KEY in .env.local',
    };
  }

  try {
    const resend = new Resend(resendApiKey);
    
    // Clean quotes if present in env variable
    let rawFrom = from || process.env.RESEND_FROM_EMAIL || process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL || 'ChittorTech <onboarding@resend.dev>';
    rawFrom = rawFrom.replace(/^["']|["']$/g, '').trim();
    if (!rawFrom) rawFrom = 'ChittorTech <onboarding@resend.dev>';

    const payload = {
      from: rawFrom,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    };

    if (attachments && attachments.length > 0) {
      payload.attachments = attachments.map(att => ({
        filename: att.filename,
        content: att.content,
      }));
    }

    let response = await resend.emails.send(payload);

    // Auto-retry sending to account owner email if running in Resend unverified domain testing mode
    if (response.error && response.error.message?.includes('only send testing emails to your own email address')) {
      const accountEmail = response.error.message.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/)?.[1] || 'chittortech@gmail.com';
      console.warn(`Resend testing mode detected. Re-routing notification to verified account owner email (${accountEmail})...`);
      payload.to = [accountEmail];
      response = await resend.emails.send(payload);
    }

    if (response.error) {
      console.error('Resend API Error:', response.error);
      return { success: false, error: response.error.message || 'Resend send failed' };
    }

    console.log('Email sent successfully via Resend. ID:', response.data?.id);
    return { success: true, id: response.data?.id };
  } catch (err) {
    console.error('Resend Dispatch Error:', err);
    return { success: false, error: err.message };
  }
}

export async function sendChittorWelcomeEmail(email, name = '') {
  return await dispatchEmail({
    to: email,
    subject: "Welcome to ChittorTech - The Digital Frontier 🚀",
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #FFF9F1; border: 1.5px solid #E5D5B5; border-radius: 24px;">
          <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #4A3728; margin: 0; font-size: 32px; letter-spacing: 1px;">ChittorTech</h1>
              <p style="color: #B8860B; margin: 5px 0; font-size: 12px; letter-spacing: 4px; text-transform: uppercase;">The Digital Frontier</p>
          </div>
          <h2 style="color: #4A3728; font-size: 24px;">Hello ${name || 'Admin'},</h2>
          <p style="color: #8C7B6C; font-size: 16px; line-height: 1.6;">Welcome to the inner circle of ChittorTech. Your admin account has been successfully initialized.</p>
          <div style="background: white; padding: 25px; border-radius: 16px; margin: 30px 0; border: 1px solid #E5D5B5;">
              <p style="margin: 0; color: #4A3728;"><strong>Platform:</strong> Admin Dashboard</p>
              <p style="margin: 5px 0; color: #4A3728;"><strong>Status:</strong> Verification Complete</p>
          </div>
          <p style="color: #8C7B6C; font-size: 14px; text-align: center;">Secure. Robust. Revolutionary.</p>
          <div style="margin-top: 40px; text-align: center; border-top: 1px solid #E5D5B5; padding-top: 30px;">
              <p style="margin: 0; color: #B8860B; font-weight: bold;">ChittorTech Solutions</p>
          </div>
      </div>
    `,
  });
}

export async function sendOtpEmail(email, otp, auditData = null) {
  const isEdit = auditData?.action === 'DATA_MODIFICATION';
  const actionLabel = isEdit ? "Editing/Adding Project" : "Viewing Project";
  const subjectAction = isEdit ? "Modification" : "Access";

  const auditHtml = auditData ? `
      <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 25px; border: 1px solid #E5D5B5; text-align: left;">
          <p style="margin: 0; color: #B8860B; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Request Context</p>
          <p style="margin: 5px 0 15px 0; color: #4A3728; font-size: 18px; font-weight: 700;">${auditData.projectName || 'Infrastructure Access'}</p>
          
          <div style="font-size: 13px; color: #4A3728; margin-bottom: 10px;">
              <strong>Intent:</strong> <span style="color: #B8860B;">${actionLabel}</span>
          </div>
          
          ${auditData.diff ? `
              <div style="background: #FDF5E6; padding: 15px; border-radius: 8px; border-left: 4px solid #B8860B; margin-top: 15px;">
                  <p style="margin: 0 0 10px 0; font-weight: 800; font-size: 12px; color: #4A3728;">MODIFICATION LOG:</p>
                  <pre style="margin: 0; font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #4A3728; line-height: 1.5; white-space: pre-wrap;">${auditData.diff}</pre>
              </div>
          ` : ''}

          <div style="margin-top: 15px; font-size: 11px; color: #8C7B6C;">
              Time: ${new Date().toLocaleString()}
          </div>
      </div>
  ` : '';

  return await dispatchEmail({
    to: email,
    subject: `[OTP] ${subjectAction} - ${auditData?.projectName || 'Infrastructure'}`,
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #FFF9F1; border: 1.5px solid #E5D5B5; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <div style="text-align: center; margin-bottom: 25px;">
                <h2 style="color: #4A3728; margin: 0;">OTP Validation for ${actionLabel}</h2>
                <p style="color: #8C7B6C; font-size: 14px;">Please authorize the request details below.</p>
            </div>

            ${auditHtml}

            <div style="background-color: #fdf5e6; padding: 25px; border-radius: 12px; text-align: center; border: 1px dashed #B8860B; margin-bottom: 25px;">
                <p style="margin: 0 0 10px 0; color: #8C7B6C; font-size: 12px; font-weight: 700; text-transform: uppercase;">Verification Code</p>
                <h1 style="color: #B8860B; font-size: 48px; margin: 0; letter-spacing: 12px; font-weight: 800;">${otp}</h1>
            </div>

            <p style="color: #8C7B6C; font-size: 13px; text-align: center; line-height: 1.5;">
                This code will expire in <strong style="color: #B8860B;">5 minutes</strong>. <br/>
                Secure administrative authorization gateway.
            </p>
            
            <div style="margin-top: 30px; border-top: 1px solid #E5D5B5; padding-top: 20px; text-align: center;">
                <p style="margin: 0; color: #B8860B; font-weight: 800; font-size: 14px; letter-spacing: 2px;">ChittorTech Solutions</p>
            </div>
        </div>
    `,
  });
}

export async function sendProjectInquiryEmail(formData) {
  const { name, email, projectType, message } = formData;
  const recipients = ['kushsharma.cor@gmail.com', 'lavsharma.cor@gmail.com'];

  console.log(`Inquiry from ${name} (${email}) for ${projectType}`);

  return await dispatchEmail({
    to: recipients,
    subject: `🚀 New Lead: ${name} (${projectType})`,
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #030305; border: 1px solid #1a1a1a; border-radius: 24px; color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 20px;">
                <h1 style="color: #00d2ff; margin: 0; font-size: 28px;">New Lead Detected</h1>
                <p style="color: #94a3b8; margin: 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Inquiry Initialization</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); padding: 25px; border-radius: 16px; border: 1px solid #333;">
                <div style="margin-bottom: 20px;">
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Client Identity</p>
                    <p style="font-size: 18px; font-weight: 700; margin: 0;">${name}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Auth Email</p>
                    <p style="font-size: 16px; margin: 0; color: #94a3b8;">${email}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Project Parameters</p>
                    <div style="display: inline-block; background: rgba(0,210,255,0.1); border: 1px solid rgba(0,210,255,0.2); padding: 5px 12px; border-radius: 50px; font-size: 13px; font-weight: 700; color: #00d2ff;">
                        ${projectType}
                    </div>
                </div>

                <div>
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 10px 0;">Scope Description</p>
                    <div style="background: #0a0a0c; padding: 15px; border-radius: 12px; border: 1px solid #333; line-height: 1.6; color: #e2e8f0;">
                        ${message}
                    </div>
                </div>
            </div>

            <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 11px;">
                <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                <p style="margin-top: 20px; border-top: 1px solid #333; padding-top: 20px; color: #00d2ff; font-weight: 800; letter-spacing: 2px;">ChittorTech Solutions</p>
            </div>
        </div>
    `,
  });
}

export async function sendChatbotLeadEmail(leadData) {
  const { name, email, phone, location } = leadData;
  const recipients = ['kushsharma.cor@gmail.com', 'lavsharma.cor@gmail.com'];
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return await dispatchEmail({
    to: recipients,
    subject: `🤖 New Chatbot Lead: ${name}`,
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #030305; border: 1px solid #FF9933; border-radius: 24px; color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 1px solid rgba(255,153,51,0.2); padding-bottom: 20px;">
                <h1 style="color: #FF9933; margin: 0; font-size: 28px;">AI Lead Captured</h1>
                <p style="color: #94a3b8; margin: 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Chatbot Initialization</p>
            </div>

            <div style="background: rgba(255,153,51,0.03); padding: 25px; border-radius: 16px; border: 1px solid rgba(255,153,51,0.1);">
                <div style="margin-bottom: 20px;">
                    <p style="color: #FF9933; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Name</p>
                    <p style="font-size: 18px; font-weight: 700; margin: 0;">${name}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #FF9933; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Email</p>
                    <p style="font-size: 16px; margin: 0; color: #94a3b8;">${email || 'Not Provided'}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #FF9933; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Phone</p>
                    <p style="font-size: 16px; margin: 0; color: #94a3b8;">${phone || 'Not Provided'}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #FF9933; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Location</p>
                    <p style="font-size: 16px; margin: 0; color: #94a3b8;">${location || 'Not Shared'}</p>
                </div>
            </div>

            <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 11px;">
                <p>Timestamp: ${timestamp}</p>
                <p style="margin-top: 20px; border-top: 1px solid rgba(255,153,51,0.2); padding-top: 20px; color: #FF9933; font-weight: 800; letter-spacing: 2px;">ChittorTech Solutions</p>
            </div>
        </div>
    `,
  });
}

export async function sendInternshipApplicationEmail(formData) {
  const { name, email, phone, university, college, course, startYear, endYear, track, resume } = formData;
  const recipients = ['kushsharma.cor@gmail.com', 'lavsharma.cor@gmail.com'];
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const attachments = resume ? [{
    filename: resume.filename,
    content: resume.content,
    contentType: resume.contentType
  }] : [];

  return await dispatchEmail({
    to: recipients,
    subject: `🎓 New Internship App: ${name} (${track})`,
    attachments,
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #030305; border: 1px solid #D4AF37; border-radius: 24px; color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 20px;">
                <h1 style="color: #D4AF37; margin: 0; font-size: 28px;">Internship Application</h1>
                <p style="color: #94a3b8; margin: 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Candidate Initialization</p>
            </div>

            <div style="background: rgba(212,175,55,0.03); padding: 25px; border-radius: 16px; border: 1px solid rgba(212,175,55,0.1);">
                <div style="margin-bottom: 15px;">
                    <p style="color: #D4AF37; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Candidate Name</p>
                    <p style="font-size: 18px; font-weight: 700; margin: 0;">${name}</p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                    <div>
                        <p style="color: #D4AF37; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Email</p>
                        <p style="font-size: 14px; margin: 0; color: #94a3b8;">${email}</p>
                    </div>
                    <div>
                        <p style="color: #D4AF37; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Phone</p>
                        <p style="font-size: 14px; margin: 0; color: #94a3b8;">${phone}</p>
                    </div>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="color: #D4AF37; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Academic Context</p>
                    <p style="font-size: 14px; margin: 0; color: #e2e8f0;">${university}</p>
                    <p style="font-size: 13px; margin: 2px 0; color: #94a3b8;">${college}</p>
                    <p style="font-size: 13px; margin: 5px 0 0 0; color: #94a3b8;">${course} | Duration: ${startYear} - ${endYear}</p>
                </div>

                <div style="margin-bottom: 15px;">
                    <p style="color: #D4AF37; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Preferred Track</p>
                    <div style="display: inline-block; background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.2); padding: 5px 12px; border-radius: 50px; font-size: 12px; font-weight: 700; color: #D4AF37;">
                        ${track}
                    </div>
                </div>

                <div>
                    <p style="color: #D4AF37; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 10px 0;">Resume</p>
                    <div style="background: #0a0a0c; padding: 15px; border-radius: 12px; border: 1px solid #333; color: #e2e8f0; font-size: 14px; text-align: center;">
                        <i class="fas fa-file-pdf" style="margin-right: 10px; color: #D4AF37;"></i> ${resume?.filename || 'No resume attached'} (Check attachments)
                    </div>
                </div>
            </div>

            <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 11px;">
                <p>Timestamp: ${timestamp}</p>
                <p style="margin-top: 20px; border-top: 1px solid rgba(212,175,55,0.2); padding-top: 20px; color: #D4AF37; font-weight: 800; letter-spacing: 2px;">ChittorTech HR Division</p>
            </div>
        </div>
    `,
  });
}

export async function sendModalLeadEmail(formData) {
  const { type, name, email, phone, company, goalOrService, description } = formData;
  const recipients = ['kushsharma.cor@gmail.com', 'lavsharma.cor@gmail.com'];
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return await dispatchEmail({
    to: recipients,
    subject: `🚀 New ${type === 'Strategy Call' ? 'Strategy Call' : 'Free Demo'} Lead: ${name}`,
    html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #030305; border: 1px solid #1a1a1a; border-radius: 24px; color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 20px;">
                <h1 style="color: #00d2ff; margin: 0; font-size: 28px;">New Lead Detected</h1>
                <p style="color: #94a3b8; margin: 5px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">${type}</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); padding: 25px; border-radius: 16px; border: 1px solid #333;">
                <div style="margin-bottom: 20px;">
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Client Identity</p>
                    <p style="font-size: 18px; font-weight: 700; margin: 0;">${name}</p>
                    <p style="font-size: 14px; margin: 5px 0 0 0; color: #94a3b8;">${company || 'No Company Provided'}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Contact Details</p>
                    <p style="font-size: 16px; margin: 0; color: #e2e8f0;">Email: ${email}</p>
                    <p style="font-size: 16px; margin: 5px 0 0 0; color: #e2e8f0;">Phone: ${phone}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 5px 0;">Goal / Service Focus</p>
                    <div style="display: inline-block; background: rgba(0,210,255,0.1); border: 1px solid rgba(0,210,255,0.2); padding: 5px 12px; border-radius: 50px; font-size: 13px; font-weight: 700; color: #00d2ff;">
                        ${goalOrService}
                    </div>
                </div>

                <div>
                    <p style="color: #00d2ff; font-size: 11px; font-weight: 800; text-transform: uppercase; margin: 0 0 10px 0;">Description / Context</p>
                    <div style="background: #0a0a0c; padding: 15px; border-radius: 12px; border: 1px solid #333; line-height: 1.6; color: #e2e8f0;">
                        ${description || 'No description provided.'}
                    </div>
                </div>
            </div>

            <div style="margin-top: 30px; text-align: center; color: #94a3b8; font-size: 11px;">
                <p>Timestamp: ${timestamp}</p>
                <p style="margin-top: 20px; border-top: 1px solid #333; padding-top: 20px; color: #00d2ff; font-weight: 800; letter-spacing: 2px;">ChittorTech Solutions</p>
            </div>
        </div>
    `,
  });
}
