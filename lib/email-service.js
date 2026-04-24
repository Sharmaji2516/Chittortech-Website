import nodemailer from 'nodemailer';

export async function sendChittorWelcomeEmail(email, name = '') {
  try {
    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPass = process.env.EMAIL_PASS?.trim().replace(/\s/g, '');

    if (!emailUser || !emailPass) return { success: false };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: emailUser, pass: emailPass },
    });

    const mailOptions = {
      from: `"ChittorTech Frontiers" <${emailUser}>`,
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
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email Error:', error);
    return { success: false };
  }
}


export async function sendOtpEmail(email, otp, auditData = null) {
    try {
        const emailUser = process.env.EMAIL_USER?.trim();
        const emailPass = process.env.EMAIL_PASS?.trim().replace(/\s/g, '');
        if (!emailUser || !emailPass) return { success: false };

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: emailUser, pass: emailPass },
        });

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

        const mailOptions = {
            from: `"ChittorTech Security" <${emailUser}>`,
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
                        <p style="margin: 0; color: #B8860B; font-weight: 800; font-size: 14px; letter-spacing: 2px;">CHITTOR-TECH SOLUTIONS</p>
                    </div>
                </div>
            `,
        };
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('OTP Email Error:', error);
        return { success: false };
    }
}

export async function sendProjectInquiryEmail(formData) {
    try {
        const emailUser = process.env.EMAIL_USER?.trim();
        const emailPass = process.env.EMAIL_PASS?.trim().replace(/\s/g, '');
        if (!emailUser || !emailPass) {
            console.error('Email credentials missing in environment');
            return { success: false, error: 'Credentials missing' };
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: { user: emailUser, pass: emailPass },
        });

        const { name, email, projectType, message } = formData;
        const recipients = ['lavsharma.cor@gmail.com', 'kushsharma.cor@gmail.com'];

        const mailOptions = {
            from: `"ChittorTech Operations" <${emailUser}>`,
            to: recipients.join(', '),
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
                        <p style="margin-top: 20px; border-top: 1px solid #333; padding-top: 20px; color: #00d2ff; font-weight: 800; letter-spacing: 2px;">CHITTOR-TECH SOLUTIONS</p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Project Inquiry Email Error:', error);
        return { success: false, error: error.message };
    }
}
