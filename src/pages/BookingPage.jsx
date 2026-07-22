import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COUNTRIES_DATA } from '../data/countries';
import './BookingPage.css';

// Simulate existing bookings -- in production this would come from a backend
const EXISTING_BOOKINGS = [
  { date: '2026-07-15', time: '10:00' },
  { date: '2026-07-15', time: '11:00' },
  { date: '2026-07-16', time: '14:00' },
  { date: '2026-07-17', time: '09:00' },
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    country: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | conflict | success

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((e) => ({ ...e, [e.target.name]: '' }));
    setStatus('idle');
  };

  const isTimeSlotBooked = (date, time) => {
    return EXISTING_BOOKINGS.some((b) => b.date === date && b.time === time);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const max = new Date();
    max.setMonth(max.getMonth() + 3);
    return max.toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.country) newErrors.country = 'Please select a country';
    if (!form.date) newErrors.date = 'Please select a date';
    if (!form.time) newErrors.time = 'Please select a time slot';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check for time slot conflict
    if (isTimeSlotBooked(form.date, form.time)) {
      setStatus('conflict');
      return;
    }

    // Success
    console.log('Booking confirmed:', form);
    setStatus('success');
    setForm({ name: '', phone: '', country: '', date: '', time: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleRetry = () => {
    setStatus('idle');
    setForm((f) => ({ ...f, time: '' }));
  };

  const availableTimeSlots = form.date
    ? TIME_SLOTS.filter((t) => !isTimeSlotBooked(form.date, t))
    : TIME_SLOTS;

  return (
    <section className="booking">
      <div className="container booking__inner">
        <Link to="/" className="booking__back">
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </Link>

        <div className="booking__header">
          <h1>Book a <span>Counselling Session</span></h1>
          <p>Fill in your details and select a convenient time slot. Our expert counsellors will guide you through every step of your study abroad journey.</p>
        </div>

        <div className="booking__content">
          <div className="booking__info">
            <div className="booking__info-card">
              <i className="fa-solid fa-phone"></i>
              <div>
                <strong>Call Us</strong>
                <a href="tel:+919360886307">+91 93608 86307</a>
              </div>
            </div>
            <div className="booking__info-card">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <strong>Email Us</strong>
                <a href="mailto:info@alphaglobaleducare.com">info@alphaglobaleducare.com</a>
              </div>
            </div>
            <div className="booking__info-card">
              <i className="fa-brands fa-whatsapp"></i>
              <div>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/919360886307" target="_blank" rel="noreferrer">Chat Now</a>
              </div>
            </div>
            <div className="booking__info-card">
              <i className="fa-solid fa-clock"></i>
              <div>
                <strong>Working Hours</strong>
                <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
              </div>
            </div>
          </div>

          <form className="booking__form" onSubmit={handleSubmit}>
            <h3>Schedule Your Free Counselling</h3>

            {status === 'success' && (
              <div className="booking__alert booking__alert--success">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <strong>Booking Confirmed!</strong>
                  <p>We will contact you shortly to confirm your appointment. Check your phone and email for updates.</p>
                </div>
              </div>
            )}

            {status === 'conflict' && (
              <div className="booking__alert booking__alert--error">
                <i className="fa-solid fa-circle-exclamation"></i>
                <div>
                  <strong>Time Slot Unavailable</strong>
                  <p>The selected time slot on <strong>{form.date}</strong> at <strong>{form.time}</strong> is already booked. Please choose a different time.</p>
                  <button type="button" className="booking__retry-btn" onClick={handleRetry}>
                    Choose Another Time <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            <div className="booking__form-row">
              <label className={`booking__label ${errors.name ? 'booking__label--error' : ''}`}>
                Full Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="booking__field-error">{errors.name}</span>}
              </label>

              <label className={`booking__label ${errors.phone ? 'booking__label--error' : ''}`}>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Number"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="booking__field-error">{errors.phone}</span>}
              </label>
            </div>

            <label className={`booking__label ${errors.country ? 'booking__label--error' : ''}`}>
              Preferred Country *
              <select name="country" value={form.country} onChange={handleChange}>
                <option value="">Select a country</option>
                {COUNTRIES_DATA.map((c) => (
                  <option key={c.id} value={c.name}>{c.emoji} {c.name}</option>
                ))}
              </select>
              {errors.country && <span className="booking__field-error">{errors.country}</span>}
            </label>

            <div className="booking__form-row">
              <label className={`booking__label ${errors.date ? 'booking__label--error' : ''}`}>
                Preferred Date *
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={getMinDate()}
                  max={getMaxDate()}
                />
                {errors.date && <span className="booking__field-error">{errors.date}</span>}
              </label>

              <label className={`booking__label ${errors.time ? 'booking__label--error' : ''}`}>
                Preferred Time *
                <select name="time" value={form.time} onChange={handleChange}>
                  <option value="">Select a time</option>
                  {TIME_SLOTS.map((t) => {
                    const booked = form.date && isTimeSlotBooked(form.date, t);
                    return (
                      <option key={t} value={t} disabled={booked}>
                        {t} {booked ? '(Booked)' : ''}
                      </option>
                    );
                  })}
                </select>
                {errors.time && <span className="booking__field-error">{errors.time}</span>}
              </label>
            </div>

            {form.date && (
              <div className="booking__time-slots">
                <span>Available time slots for {form.date}:</span>
                <div className="booking__time-grid">
                  {availableTimeSlots.length > 0 ? (
                    availableTimeSlots.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`booking__time-chip ${form.time === t ? 'booking__time-chip--active' : ''}`}
                        onClick={() => {
                          setForm((f) => ({ ...f, time: t }));
                          setErrors((e) => ({ ...e, time: '' }));
                          setStatus('idle');
                        }}
                      >
                        {t}
                      </button>
                    ))
                  ) : (
                    <span className="booking__no-slots">No slots available. Please pick another date.</span>
                  )}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-gold"
              style={{ width: '100%', marginTop: 8 }}
              disabled={status === 'success'}
            >
              {status === 'success' ? (
                <><i className="fa-solid fa-check"></i> Booking Confirmed</>
              ) : (
                <><i className="fa-solid fa-calendar-check"></i> Confirm Booking</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
