import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CounsellingForm from '../components/CounsellingForm';
import useReveal from '../hooks/useReveal';
import SERVICES from '../data/services';
import './ServicesPage.css';

export default function ServicesPage() {
  const ref = useReveal();
  const [showForm, setShowForm] = useState(false);

  // Close form on Escape
  useEffect(() => {
    if (!showForm) return;
    const handleEsc = (e) => { if (e.key === 'Escape') setShowForm(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showForm]);

  return (
    <>
      {/* Hero */}
      <section className="services-hero">
        <div className="container services-hero__inner">
          <Link to="/" className="services-hero__back">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
          <div className="services-hero__content">
            <span className="services-hero__eyebrow">What We Offer</span>
            <h1>Our <span>Services</span></h1>
            <p className="services-hero__subtitle">
              Comprehensive support from career counselling to post-arrival assistance — we guide you at every step of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-page section">
        <div className="container">
          <div className="services-page__list reveal" ref={ref}>
            {SERVICES.map((service, index) => (
              <div
                className={`service-detail ${index % 2 === 1 ? 'service-detail--reverse' : ''}`}
                key={service.title}
              >
                <div className="service-detail__image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-detail__content">
                  <span className="service-detail__number">0{index + 1}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-page-cta">
        <div className="container">
          <SectionTitle
            align="center"
            eyebrow="Get Started"
            title="Ready to Begin Your" highlighted="Journey?"
            subtitle="Book a free counselling session today and take the first step toward your study abroad dream."
          />
          <div className="services-page-cta__buttons">
            <button className="btn btn-gold" onClick={() => setShowForm(true)}>
              Book Free Counselling <i className="fa-solid fa-arrow-right"></i>
            </button>
            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form Popup */}
      {showForm && (
        <div className="services-form-overlay" onClick={() => setShowForm(false)}>
          <div className="services-form-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="services-form-close"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <CounsellingForm onSuccess={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}
