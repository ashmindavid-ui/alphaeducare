/**
 * Vercel Serverless Function — Form Submission Handler
 *
 * Accepts POST requests from booking & contact forms,
 * validates fields, checks for time-slot conflicts via Vercel KV,
 * stores confirmed bookings, and forwards data via Resend.
 *
 * ── Environment Variables ─────────────────────────────────────────
 *   RESEND_API_KEY       – Resend API key (required)
 *   NOTIFICATION_EMAIL   – email address that receives submissions (required)
 *   FROM_EMAIL           – sender address (optional, defaults to onboarding@resend.dev)
 *   KV_URL / KV_REST_API_URL – set automatically when Vercel KV is added
 *
 * ── Resend Domain Setup ──────────────────────────────────────────
 * Until your domain is verified in Resend, emails will be sent from
 * `onboarding@resend.dev`. Set FROM_EMAIL to override once verified.
 *   https://resend.com/domains
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Resolve sender address — default to Resend onboarding (no domain verification needed)
const FROM_EMAIL =
  process.env.FROM_EMAIL ||
  'Alpha Global Educare <onboarding@resend.dev>';

/**
 * Get a Redis-backed KV client for booking slot management.
 * Uses @vercel/kv which auto-detects KV_URL / KV_REST_API_URL env vars.
 */
let _kv = null;
async function getKv() {
  if (_kv !== null) return _kv;
  try {
    const { kv } = await import('@vercel/kv');
    _kv = kv;
  } catch {
    _kv = null;
  }
  return _kv;
}

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
    if (!type) return res.status(400).json({ error: 'Missing "type" field' });

    // ── BOOKING ───────────────────────────────────────────────────
    if (type === 'booking') {
      const { name, phone, country, date, time } = data;
      if (!name || !phone || !country || !date || !time) {
        return res.status(400).json({ error: 'All booking fields are required' });
      }

      // ── Real conflict check via Vercel KV ─────────────────────
      const kv = await getKv();
      if (kv) {
        const slotKey = `booking:${date}:${time}`;
        const existing = await kv.get(slotKey);
        if (existing) {
          console.log(`Conflict — ${slotKey} already booked by ${existing.name}`);
          return res.status(409).json({
            success: false,
            conflict: true,
            date,
            time,
            message: `The time slot on ${date} at ${time} is already booked. Please choose another time.`,
          });
        }

        // Persist booking in KV (expire after 30 days for automatic cleanup)
        await kv.set(
          slotKey,
          { name, phone, country, date, time, createdAt: new Date().toISOString() },
          { ex: 60 * 60 * 24 * 30 },
        );
        console.log(`Booking stored — ${slotKey}`);
      } else {
        console.log('KV not available — conflict check skipped');
      }

      // ── Build & send email notification ───────────────────────
      const subject = `🔔 New Booking Enquiry – ${name}`;
      const fields = `
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${phone}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Country</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${country}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Date</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${date}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Time</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${time}</td></tr>`;

      const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
        <div style="background:#1a3a5c;padding:20px;text-align:center;">
          <h2 style="color:#f4b800;margin:0;">Alpha Global Educare</h2>
        </div>
        <div style="padding:24px;">
          <h3 style="margin-top:0;">${subject}</h3>
          <table style="width:100%;border-collapse:collapse;">${fields}</table>
          <p style="color:#888;font-size:12px;margin-top:24px;">Submitted via Alpha Global Educare website</p>
        </div>
      </div>`;

      const { data: emailResult, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [process.env.NOTIFICATION_EMAIL],
        subject,
        html,
      });

      if (error) {
        console.error('Resend error:', JSON.stringify(error));
        return res.status(500).json({ error: 'Failed to send email' });
      }

      console.log(`Booking email sent: ${emailResult.id}`);
      return res.status(200).json({ success: true, id: emailResult.id });
    }

    // ── CONTACT / ENQUIRY ─────────────────────────────────────────
    if (type === 'contact') {
      const { name, email, message } = data;
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      const subject = `📩 New Contact Message – ${name}`;
      const fields = `
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td></tr>
      <tr><td style="font-weight:700;padding:8px 12px;border-bottom:1px solid #eee;">Message</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${message}</td></tr>`;

      const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
        <div style="background:#1a3a5c;padding:20px;text-align:center;">
          <h2 style="color:#f4b800;margin:0;">Alpha Global Educare</h2>
        </div>
        <div style="padding:24px;">
          <h3 style="margin-top:0;">${subject}</h3>
          <table style="width:100%;border-collapse:collapse;">${fields}</table>
          <p style="color:#888;font-size:12px;margin-top:24px;">Submitted via Alpha Global Educare website</p>
        </div>
      </div>`;

      const { data: emailResult, error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [process.env.NOTIFICATION_EMAIL],
        subject,
        html,
      });

      if (error) {
        console.error('Resend error:', JSON.stringify(error));
        return res.status(500).json({ error: 'Failed to send email' });
      }

      console.log(`Contact email sent: ${emailResult.id}`);
      return res.status(200).json({ success: true, id: emailResult.id });
    }

    return res.status(400).json({ error: 'Unknown form type' });
  } catch (error) {
    console.error('Form handler error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
