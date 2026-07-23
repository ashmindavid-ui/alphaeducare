import { useState } from 'react';
import { COUNTRIES_DATA } from '../data/countries';
import './CounsellingForm.css';

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
];

export default function CounsellingForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    country: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | conflict | success | submitting | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setStatus('idle');
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

  const handleSubmit = async (e) => {
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

    // Submit to backend — backend handles real conflict checking via Vercel KV
    setStatus('submitting');

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'booking', ...form }),
      });

      const result = await res.json();

      // Check if backend returned a slot conflict
      if (res.status === 409 && result.conflict) {
        setStatus('conflict');
        return;
      }

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setForm({ name: '', phone: '', country: '', date: '', time: '' });

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
    } catch (err) {
      console.error('Booking submission failed:', err);
      setStatus('error');
    }
  };

  const handleRetry = () => {
    setStatus('idle');
    setForm((f) => ({ ...f, time: '' }));
  };

  // All time slots are shown; conflict checking happens on the backend
  const availableTimeSlots = TIME_SLOTS;

  return (
    <div className="counselling-form">
      <div className="counselling-form__header">
        <h3>
          <i className="fa-solid fa-calendar-check"></i> Schedule Your Free Counselling
        </h3>
        <p>Fill in your details and our expert counsellors will guide you.</p>
      </div>

      {/* Working Hours */}
      <div className="counselling-form__hours">
        <i className="fa-solid fa-clock"></i>
        <span>Working Hours: Mon - Sat: 9:30 AM - 6:30 PM</span>
      </div>

      {status === 'submitting' && (
        <div className="counselling-form__alert counselling-form__alert--info">
          <i className="fa-solid fa-spinner fa-spin"></i>
          <div>
            <strong>Submitting...</strong>
            <p>Please wait while we process your booking.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="counselling-form__alert counselling-form__alert--error">
          <i className="fa-solid fa-circle-exclamation"></i>
          <div>
            <strong>Something went wrong</strong>
            <p>We couldn't submit your booking. Please try again or call us directly.</p>
            <button type="button" className="counselling-form__retry-btn" onClick={() => setStatus('idle')}>
              Try Again <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="counselling-form__alert counselling-form__alert--success">
          <i className="fa-solid fa-circle-check"></i>
          <div>
            <strong>Booking Confirmed!</strong>
            <p>We will contact you shortly to confirm your appointment.</p>
          </div>
        </div>
      )}

      {status === 'conflict' && (
        <div className="counselling-form__alert counselling-form__alert--error">
          <i className="fa-solid fa-circle-exclamation"></i>
          <div>
            <strong>Time Slot Unavailable</strong>
            <p>
              The selected time slot on <strong>{form.date}</strong> at{' '}
              <strong>{form.time}</strong> is already booked.
            </p>
            <button type="button" className="counselling-form__retry-btn" onClick={handleRetry}>
              Choose Another Time <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="counselling-form__row">
          <label className={`counselling-form__label ${errors.name ? 'counselling-form__label--error' : ''}`}>
            Full Name *
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="counselling-form__field-error">{errors.name}</span>}
          </label>

          <label className={`counselling-form__label ${errors.phone ? 'counselling-form__label--error' : ''}`}>
            Phone Number *
            <input
              type="tel"
              name="phone"
              placeholder="Your Number"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="counselling-form__field-error">{errors.phone}</span>}
          </label>
        </div>

        <label className={`counselling-form__label ${errors.country ? 'counselling-form__label--error' : ''}`}>
          Preferred Country *
          <select name="country" value={form.country} onChange={handleChange}>
            <option value="">Select a country</option>
            {COUNTRIES_DATA.map((c) => (
              <option key={c.id} value={c.name}>
                {c.emoji} {c.name}
              </option>
            ))}
          </select>
          {errors.country && <span className="counselling-form__field-error">{errors.country}</span>}
        </label>

        <div className="counselling-form__row">
          <label className={`counselling-form__label ${errors.date ? 'counselling-form__label--error' : ''}`}>
            Preferred Date *
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              min={getMinDate()}
              max={getMaxDate()}
            />
            {errors.date && <span className="counselling-form__field-error">{errors.date}</span>}
          </label>

          <label className={`counselling-form__label ${errors.time ? 'counselling-form__label--error' : ''}`}>
            Preferred Time *
            <select name="time" value={form.time} onChange={handleChange}>
              <option value="">Select a time</option>
              {TIME_SLOTS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.time && <span className="counselling-form__field-error">{errors.time}</span>}
          </label>
        </div>

        {form.date && (
          <div className="counselling-form__time-slots">
            <span>Available time slots for {form.date}:</span>
            <div className="counselling-form__time-grid">
              {availableTimeSlots.length > 0 ? (
                availableTimeSlots.map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`counselling-form__time-chip ${form.time === t ? 'counselling-form__time-chip--active' : ''}`}
                    onClick={() => {
                      setForm((f) => ({ ...f, time: t }));
                      setErrors((prev) => ({ ...prev, time: '' }));
                      setStatus('idle');
                    }}
                  >
                    {t}
                  </button>
                ))
              ) : (
                <span className="counselling-form__no-slots">No slots available. Please pick another date.</span>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-gold counselling-form__submit"
          disabled={status === 'success' || status === 'submitting'}
        >
          {status === 'success' ? (
            <><i className="fa-solid fa-check"></i> Booking Confirmed</>
          ) : (
            <><i className="fa-solid fa-calendar-check"></i> Confirm Booking</>
          )}
        </button>
      </form>
    </div>
  );
}
