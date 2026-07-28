/**
 * Direct WhatsApp Notification Helper for ChittorTech.
 * Formats lead details and opens WhatsApp directly to +91 7597451057.
 */

const FOUNDER_WHATSAPP_NUMBER = "917597451057";

export function sendWhatsAppLead({ title, fields = {}, messageText = '' }) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  let text = `🚀 *${title} - ChittorTech*\n\n`;

  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      text += `*${key}:* ${value}\n`;
    }
  }

  if (messageText) {
    text += `\n📝 *Details:* ${messageText}\n`;
  }

  text += `\n⏰ *Time:* ${timestamp}`;

  const whatsappUrl = `https://wa.me/${FOUNDER_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank');
  }

  return { success: true, url: whatsappUrl };
}
