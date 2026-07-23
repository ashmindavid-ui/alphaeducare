import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { COUNTRIES_DATA } from '../data/countries';
import SectionTitle from '../components/SectionTitle';
import './CountryPage.css';

function HorizontalScroll({ children, className }) {
  const containerRef = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    const el = containerRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      const isNotAtEnd = el.scrollLeft + el.clientWidth < el.scrollWidth - 10;
      setShowRightArrow(hasOverflow && isNotAtEnd);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    checkScroll();

    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    const observer = new MutationObserver(checkScroll);
    observer.observe(el, { childList: true, subtree: true });

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      observer.disconnect();
    };
  }, [children]);

  const handleScrollRight = () => {
    const el = containerRef.current;
    if (el) {
      el.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="horizontal-scroll-container">
      <div className={className} ref={containerRef}>
        {children}
      </div>
      {showRightArrow && (
        <button
          className="horizontal-scroll-arrow-btn"
          onClick={handleScrollRight}
          aria-label="Scroll right"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
}


export default function CountryPage() {
  const { countryId } = useParams();
  const country = COUNTRIES_DATA.find((c) => c.id === countryId);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error

  if (!country) {
    return (
      <div className="country-404">
        <div className="container" style={{ textAlign: 'center', padding: '120px 24px' }}>
          <h1>Country not found</h1>
          <Link to="/" className="btn btn-gold" style={{ marginTop: 20, display: 'inline-flex' }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleFormChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setFormStatus('submitting');

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...form }),
      });

      if (!res.ok) throw new Error('Failed to send');

      await res.json();
      setFormStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (err) {
      console.error('Country enquiry submission failed:', err);
      setFormStatus('error');
    }
  };

  const getLogoUrl = (uni) =>
    uni.logo || `https://logo.clearbit.com/${uni.domain}?size=200`;

  return (
    <>
      {/* === Hero: Image Left / Content Right === */}
      <section className="country-hero">
        <div className="country-hero__inner container">
          <Link to="/" className="country-hero__back">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
          <div className="country-hero__grid">
            <div className="country-hero__image-wrap">
              <img src={country.heroImage} alt={country.name} className="country-hero__image" />
            </div>
            <div className="country-hero__content">
              <span className="country-hero__flag">{country.emoji}</span>
              <h1>{country.name}</h1>
              <p>{country.overview}</p>
              <div className="country-hero__quick-info">
                <div className="country-hero__quick-item">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Capital: <strong>{country.capital}</strong></span>
                </div>
                <div className="country-hero__quick-item">
                  <i className="fa-solid fa-language"></i>
                  <span>Language: <strong>{country.officialLanguage}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="country-facts section">
        <div className="container">
          <div className="country-facts__grid">
            <div className="country-fact-card">
              <i className="fa-solid fa-cloud-sun"></i>
              <h3>Climate</h3>
              <p>{country.climate}</p>
            </div>
            <div className="country-fact-card">
              <i className="fa-solid fa-plane-departure"></i>
              <h3>Major Airports</h3>
              <ul>
                {country.majorAirports.map((ap) => (
                  <li key={ap}>{ap}</li>
                ))}
              </ul>
            </div>
            <div className="country-fact-card">
              <i className="fa-solid fa-building-columns"></i>
              <h3>Program Duration</h3>
              <p><strong>UG:</strong> {country.programDuration.undergraduate}</p>
              <p><strong>PG:</strong> {country.programDuration.postgraduate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Study Destinations (Cities) */}
      <section className="country-destinations section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle eyebrow="Cities" title="Popular Study" highlighted="Destinations" />
          <HorizontalScroll className="country-cities-track">
            {country.popularDestinations.map((d) => (
              <div className="country-city-card" key={d}>
                <div className="country-city-card__img">
                  <img
                    src={country.cityImages?.[d] || country.heroImage}
                    alt={d}
                    loading="lazy"
                  />
                  <div className="country-city-card__overlay">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{d}</span>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="country-programs section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle eyebrow="Fields" title="Popular" highlighted="Programs" />
          <div className="country-badges">
            {country.popularPrograms.map((p) => (
              <span className="country-badge country-badge--gold" key={p}>
                <i className="fa-solid fa-graduation-cap"></i> {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities with Logos */}
      <section className="country-universities section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionTitle eyebrow="Partners" title="Our Partner" highlighted="Universities" />
          <HorizontalScroll className="country-univ-track">
            {country.universities.map((u) => (
              <div className="country-univ-card" key={u.name}>
                <div className="country-univ-card__logo-wrap">
                  <img
                    src={getLogoUrl(u)}
                    alt={`${u.name} logo`}
                    className="country-univ-card__logo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.country-univ-card__fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="country-univ-card__fallback" style={{ display: 'none' }}>
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                </div>
                <span className="country-univ-card__name">{u.name}</span>
                <a
                  href={`https://${u.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="country-univ-card__link"
                >
                  Visit Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* Important Note */}
      <section className="country-note section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="country-note__box">
            <i className="fa-solid fa-circle-info"></i>
            <div>
              <h3>Need the Latest Information?</h3>
              <p>
                Immigration policies and university admission requirements are updated regularly.
                For the latest information on post-study stay-back opportunities, part-time work eligibility,
                dependent visa options, scholarships, tuition fees, admission requirements, and English language
                proficiency (IELTS/PTE/Duolingo/MOI) requirements, speak with our {country.name} Counsellor today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="country-enquiry section" id="enquire">
        <div className="container">
          <div className="country-enquiry__inner">
            <div className="country-enquiry__info">
              <SectionTitle
                eyebrow="Enquire Now"
                title={`Interested in ${country.name}?`}
                highlighted="Apply Today"
                subtitle="Fill out the form and our counsellor will get back to you with personalised guidance."
              />
              <div className="country-enquiry__contact">
                <p><i className="fa-solid fa-phone"></i> +91 93608 86307</p>
                <p><i className="fa-solid fa-envelope"></i> info@alphaglobaleducare.com</p>
                <p><i className="fa-brands fa-whatsapp"></i> <a href="https://wa.me/919360886307" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
              </div>
            </div>

            <form className="country-enquiry__form" onSubmit={handleFormSubmit}>
              <h3>Send us an Enquiry</h3>

              {formStatus === 'submitting' && (
                <div className="country-enquiry__alert country-enquiry__alert--info">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  <div>
                    <strong>Submitting...</strong>
                    <p>Please wait while we send your enquiry.</p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="country-enquiry__alert country-enquiry__alert--error">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <div>
                    <strong>Something went wrong</strong>
                    <p>We couldn't send your enquiry. Please try again or email us directly.</p>
                    <button type="button" className="country-enquiry__retry-btn" onClick={() => setFormStatus('idle')}>
                      Try Again <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              )}

              {formStatus === 'success' && (
                <div className="country-enquiry__alert country-enquiry__alert--success">
                  <i className="fa-solid fa-circle-check"></i>
                  <div>
                    <strong>Enquiry Sent!</strong>
                    <p>We have received your enquiry and will get back to you shortly.</p>
                  </div>
                </div>
              )}

              <label>
                Full Name
                <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleFormChange} required />
              </label>
              <label>
                Email Address
                <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleFormChange} required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="Your Number" value={form.phone} onChange={handleFormChange} required />
              </label>
              <label>
                Message
                <textarea name="message" rows="3" placeholder={`I'm interested in studying in ${country.name}...`} value={form.message} onChange={handleFormChange} required></textarea>
              </label>
              <button type="submit" className="btn btn-gold" style={{ width: '100%' }} disabled={formStatus === 'submitting' || formStatus === 'success'}>
                {formStatus === 'submitting' ? (
                  <><i className="fa-solid fa-spinner fa-spin"></i> Submitting...</>
                ) : formStatus === 'success' ? (
                  <><i className="fa-solid fa-check"></i> Enquiry Sent</>
                ) : (
                  <><i className="fa-solid fa-paper-plane"></i> Send Enquiry</>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
