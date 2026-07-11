import { useState } from 'react';
import SectionTitle from './SectionTitle';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your backend / email service (e.g. EmailJS, Formspree, or a custom API route)
    console.log('Contact form submitted:', form);
    setStatus('sent');
    setForm(INITIAL_FORM);
    setTimeout(() => setStatus('idle'), 4000);
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
              <span>123, 1st Floor, Anwarul Road, Connaught Place, Delhi</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+919360886307">+91 93608 86307</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:alphaglobaleducare@gmail.com">alphaglobaleducare@gmail.com</a>
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

          <button type="submit" className="btn btn-gold contact__submit">
            {status === 'sent' ? (
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
