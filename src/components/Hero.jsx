import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import CounsellingForm from './CounsellingForm';
import './Hero.css';

const STATS = [
  { icon: 'fa-earth-americas', value: '25+', label: 'Countries' },
  { icon: 'fa-building-columns', value: '500+', label: 'Universities' },
  { icon: 'fa-user-graduate', value: '10K+', label: 'Students Placed' },
  { icon: 'fa-passport', value: '98%', label: 'Visa Success' },
];

const SLIDES = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/30721230/pexels-photo-30721230.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    imageMobile: 'https://images.pexels.com/photos/30721230/pexels-photo-30721230.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&dpr=1',
    eyebrow: 'Study in the UK · Prestigious · Historic',
    headline: 'Study in the <span>United Kingdom</span>',
    subtitle:
      'The UK offers world-renowned universities, rich cultural heritage, and excellent career opportunities. From Oxford to Cambridge, unlock your potential at top British institutions.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1920&q=85',
    imageMobile: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    eyebrow: 'Study in Canada · Diverse · Welcoming',
    headline: 'Study in <span>Canada</span>',
    subtitle:
      'Canada is known for its high-quality education system, multicultural environment, and immigration-friendly policies. Enjoy stunning natural landscapes and world-class universities.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=85',
    imageMobile: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    eyebrow: 'Study in Australia · Vibrant · Innovative',
    headline: 'Study in <span>Australia</span>',
    subtitle:
      'Australia boasts a world-class education system with globally recognised degrees. Experience a vibrant campus lifestyle, stunning beaches, and excellent post-study work opportunities.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 900);
    },
    [isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  return (
    <section className="hero" id="home">
      {/* === Background image wrapper === */}
      <div className="hero__slides">
        {SLIDES.map((s, i) => (
          <picture key={s.id}>
            <source media="(max-width: 768px)" srcSet={s.imageMobile} />
            <img
              src={s.image}
              alt=""
              aria-hidden="true"
              className={`hero__slide-img ${i === current ? 'hero__slide-img--active' : ''}`}
            />
          </picture>
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="hero__overlay"></div>

      {/* Signature animated flight path */}
      <svg className="hero__flightpath" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
        <path
          id="flightArc"
          d="M -50 420 Q 480 60 1250 260"
          fill="none"
          stroke="rgba(244,180,0,0.30)"
          strokeWidth="2"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
        <circle r="5" fill="var(--color-gold)">
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
            <mpath href="#flightArc" />
          </animateMotion>
        </circle>
      </svg>

      {/* === Content === */}
      <div className="container hero__inner">
        {/* Slide text — animated on change */}
        <div className="hero__content" key={slide.id}>
          <span className="hero__eyebrow">
            <i className="fa-solid fa-plane-departure"></i> {slide.eyebrow}
          </span>
          <h1
            className="hero__headline"
            dangerouslySetInnerHTML={{ __html: slide.headline }}
          />
          <p className="hero__subtitle">{slide.subtitle}</p>

          <div className="hero__cta-group">
            <button className="btn btn-gold" onClick={() => setShowForm(true)}>
              Book Free Counselling
            </button>
            <a href="/#countries" className="btn btn-outline">
              Explore Countries <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Dots navigation */}
          <div className="hero__dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          <div className="hero__stats">
            {STATS.map((s) => (
              <div className="hero__stat" key={s.label}>
                <i className={`fa-solid ${s.icon}`}></i>
                <div>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual area — kept minimal for large screens */}
        <div className="hero__visual">
          <div className="hero__visual-ring"></div>
          <div className="hero__visual-badge">
            <i className="fa-solid fa-circle-check"></i>
            <div>
              <strong>Trusted Consultancy</strong>
              <span>Since day one, student-first</span>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Form Popup */}
      {showForm && (
        <div className="hero__form-overlay" onClick={() => setShowForm(false)}>
          <div className="hero__form-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="hero__form-close"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <CounsellingForm onSuccess={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
}
