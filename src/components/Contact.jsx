import { useState } from 'react';
import SectionTitle from './SectionTitle';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sent | submitting | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...form }),
      });

      if (!res.ok) throw new Error('Failed to send');

      await res.json();
      setStatus('sent');
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <SectionTitle
            eyebrow="Get In Touch"
            title="Let's Start Your"
            highlighted="Journey Abroad"
            subtitle="Book a free counselling session and let our experts map out the best path for your international education."
          />

          <ul className="contact__details">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Coimbatore, Tamilnadu</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+919360886307">+91 93608 86307</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@alphaglobaleducare.com">info@alphaglobaleducare.com</a>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
            </li>
            <li>
              <i className="fa-brands fa-whatsapp"></i>
              <a href="https://wa.me/919360886307" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>

          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us which country and course you're interested in..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          {status === 'error' && (
            <div className="contact__error">
              <i className="fa-solid fa-circle-exclamation"></i>
              Could not send. Please try again or email us directly.
            </div>
          )}

          <button
            type="submit"
            className="btn btn-gold contact__submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i> Sending...
              </>
            ) : status === 'sent' ? (
              <>
                <i className="fa-solid fa-check"></i> Message Sent
              </>
            ) : (
              <>
                Send Message <i className="fa-solid fa-paper-plane"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
