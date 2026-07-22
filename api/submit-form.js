/**
 * Vercel Serverless Function — Form Submission Handler
 *
 * Accepts POST requests from the booking & contact forms,
 * validates required fields, and forwards the data via Resend.
 *
 * ── Environment Variables ─────────────────────────────────────────
 *   RESEND_API_KEY       – Resend API key (required)
 *   NOTIFICATION_EMAIL   – email address to receive submissions (required)
 *
 * ── Domain verification ──────────────────────────────────────────
 * The `from` address is set to info@alphaglobaleducare.com. Before
 * sending live emails, you must verify your domain (alphaglobaleducare.com)
 * in your Resend dashboard: https://resend.com/domains
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // ── CORS headers ────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL) {
    console.error('Missing RESEND_API_KEY or NOTIFICATION_EMAIL env vars');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { type, ...data } = req.body;

    // ── Validate ──────────────────────────────────────────────────
    if (!type) return res.status(400).json({ error: 'Missing "type" field' });

    if (type === 'booking') {
      const { name, phone, country, date, time } = data;
      if (!name || !phone || !country || !date || !time) {
        return res.status(400).json({ error: 'All booking fields are required' });
      }
    } else if (type === 'contact') {
      const { name, email, message } = data;
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }
    } else {
      return res.status(400).json({ error: 'Unknown form type' });
    }

    // ── Build email HTML ──────────────────────────────────────────
    const subject =
      type === 'booking'
        ? `🔔 New Booking Enquiry – ${data.name}`
        : `📩 New Contact Message – ${data.name}`;

    const fields =
      type === 'booking'
        ? `
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.name}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.phone}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Country</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.country}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Date</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.date}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Time</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.time}</td></tr>`
        : `
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.name}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.email}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Message</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${data.message}</td></tr>`;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
        <div style="background:#1a3a5c;padding:20px;text-align:center;">
          <h2 style="color:#f4b800;margin:0;">Alpha Global Educare</h2>
        </div>
        <div style="padding:24px;">
          <h3 style="margin-top:0;">${subject}</h3>
          <table style="width:100%;border-collapse:collapse;">
            ${fields}
          </table>
          <p style="color:#888;font-size:12px;margin-top:24px;">
            Submitted via Alpha Global Educare website
          </p>
        </div>
      </div>`;

    // ── Send via Resend SDK ───────────────────────────────────────
    // ⚠️ You must verify your domain (alphaglobaleducare.com) in Resend
    //    dashboard before this works. Until then, change to:
    //    `Alpha Global Educare <onboarding@resend.dev>`
    const { data: emailResult, error } = await resend.emails.send({
      from: 'Alpha Global Educare <info@alphaglobaleducare.com>',
      to: [process.env.NOTIFICATION_EMAIL],
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    console.log(`Email sent: ${emailResult.id}`);
    return res.status(200).json({ success: true, id: emailResult.id });
  } catch (error) {
    console.error('Form handler error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
