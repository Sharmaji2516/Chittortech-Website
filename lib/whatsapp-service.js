/**
 * Direct WhatsApp Notification Helper for ChittorTech.
 * Uses seamless window.location navigation to launch WhatsApp instantly without blank tab flashes or screen blurs.
 */

const FOUNDER_WHATSAPP_NUMBER = "917597451057";

export function sendWhatsAppLead({ title, fields = {}, messageText = '' }) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  let text = `🚀 *${title} - ChittorTech*\n\n`;

  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      text += `${key}: ${value}\n`;
    }
  }

  if (messageText) {
    text += `\n${messageText}\n`;
  }

  text += `\n⏰ *Time:* ${timestamp}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${FOUNDER_WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

  if (typeof window !== 'undefined') {
    window.location.href = whatsappUrl;
  }

  return { success: true, url: whatsappUrl };
}
