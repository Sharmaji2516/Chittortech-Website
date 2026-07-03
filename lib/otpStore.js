import crypto from 'crypto';

export const generateOtpToken = (email, otp, expiry) => {
    const secret = process.env.OTP_SECRET || 'chittortech-secret-778899';
    const data = `${email.toLowerCase()}:${otp}:${expiry}`;
    const signature = crypto.createHmac('sha256', secret).update(data).digest('hex');
    return `${signature}.${expiry}`;
};

export const verifyOtpToken = (email, otp, receivedToken) => {
    if (!receivedToken || !receivedToken.includes('.')) return false;

    const [receivedSignature, expiry] = receivedToken.split('.');
    
    if (Date.now() > parseInt(expiry)) return false;

    const secret = process.env.OTP_SECRET || 'chittortech-secret-778899';
    const data = `${email.toLowerCase()}:${otp}:${expiry}`;
    const expectedSignature = crypto.createHmac('sha256', secret).update(data).digest('hex');

    try {
        return crypto.timingSafeEqual(
            Buffer.from(receivedSignature, 'hex'),
            Buffer.from(expectedSignature, 'hex')
        );
    } catch (e) {
        return false;
    }
};
