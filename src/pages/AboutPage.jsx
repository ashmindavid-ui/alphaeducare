import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import CounsellingForm from '../components/CounsellingForm';
import useReveal from '../hooks/useReveal';
import './AboutPage.css';

export default function AboutPage() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  const year = new Date().getFullYear();
  const sinceYear = 2019;
  const experience = year - sinceYear;

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <Link to="/" className="about-hero__back">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
          <div className="about-hero__content">
            <span className="about-hero__eyebrow">About Us</span>
            <h1>About <span>Alpha Global Educare</span></h1>
            <p className="about-hero__motto">
              <i className="fa-solid fa-quote-left"></i>
              Your Dream. Our Guidance. Your Global Success.
              <i className="fa-solid fa-quote-right"></i>
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro section">
        <div className="container">
          <div className="about-intro__grid reveal" ref={ref1}>
            <div className="about-intro__text">
              <SectionTitle eyebrow="Who We Are" title="Transforming Lives Through" highlighted="Education" />
              <p>
                At <strong>Alpha Global Educare</strong>, we believe that education has the power to transform
                lives, create opportunities, and shape a brighter future. Since <strong>2019</strong>, we have
                been committed to guiding students in making informed academic decisions and helping them achieve
                their higher education goals in <strong>India and abroad</strong> through honest advice, personalized
                counselling, and end-to-end support.
              </p>
              <p>
                Our journey began with a simple vision—to ensure that every student receives the right guidance at the
                right time. Over the years, we have successfully guided <strong>300+ students</strong> towards higher
                education in reputed institutions across India. Building on this strong foundation, we have expanded our
                services to overseas education, assisting students in pursuing undergraduate and postgraduate programs
                in destinations including the <strong>United Kingdom, Canada, Australia, New Zealand, Ireland, Germany,
                France, Sweden, Italy, Malta, the United States</strong>, and other leading study destinations.
              </p>
            </div>
            <div className="about-intro__stats">
              <div className="about-intro__stat-card">
                <span className="about-intro__stat-number">{sinceYear}</span>
                <span className="about-intro__stat-label">Founded</span>
              </div>
              <div className="about-intro__stat-card">
                <span className="about-intro__stat-number">300+</span>
                <span className="about-intro__stat-label">Students Guided</span>
              </div>
              <div className="about-intro__stat-card">
                <span className="about-intro__stat-number">{experience}+</span>
                <span className="about-intro__stat-label">Years Experience</span>
              </div>
              <div className="about-intro__stat-card">
                <span className="about-intro__stat-number">12+</span>
                <span className="about-intro__stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story section">
        <div className="container reveal" ref={ref2}>
          <SectionTitle eyebrow="Our Story" title="Born from" highlighted="Experience" />
          <div className="about-story__content">
            <div className="about-story__text">
              <p>
                Alpha Global Educare was founded with a purpose born from personal experience.
              </p>
              <p>
                Our Founder, <strong>Edwin Bros D. S.</strong>, completed his{' '}
                <strong>Bachelor of Engineering in Aeronautical Engineering</strong> after facing significant
                financial challenges throughout his educational journey. Like many students, he did not receive
                proper career counselling before choosing his course. As a result, he experienced first-hand how
                a lack of professional guidance can affect a student's academic path, career planning, and future
                opportunities.
              </p>
              <p>
                Rather than allowing those experiences to become obstacles, they became the inspiration behind
                Alpha Global Educare.
              </p>
              <p>
                With a deep understanding of the challenges students and parents face while selecting the right
                course, college, or country, Edwin established Alpha Global Educare with a clear mission—to ensure
                that no student has to make life-changing educational decisions without receiving genuine,
                professional, and personalized guidance.
              </p>
              <p>
                Today, that vision continues to drive everything we do. Every student who walks through our doors
                is treated with care, respect, and individual attention because we believe that every dream deserves
                the right direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv section">
        <div className="container">
          <div className="about-mv__grid">
            <div className="about-mv__card">
              <i className="fa-solid fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                To empower students with honest career guidance, transparent counselling, and world-class
                educational opportunities by providing ethical, professional, and personalized support throughout
                their academic journey.
              </p>
            </div>
            <div className="about-mv__card">
              <i className="fa-solid fa-eye"></i>
              <h3>Our Vision</h3>
              <p>
                To become one of India's most trusted and student-focused education consultancies, helping
                students transform their dreams into successful careers through integrity, excellence, and
                lifelong guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="about-services section">
        <div className="container">
          <SectionTitle eyebrow="What We Do" title="Our" highlighted="Services" />
          <div className="about-services__grid reveal" ref={ref3}>
            {[
              'Career Guidance & Profile Evaluation',
              'One-to-One Student Counselling',
              'Higher Education Admissions (India & Abroad)',
              'Undergraduate (UG) & Postgraduate (PG) Admissions',
              'University & Course Selection',
              'Scholarship Guidance',
              'Application & Documentation Support',
              'SOP & LOR Guidance',
              'Education Loan Assistance',
              'Student Visa Assistance',
              'IELTS Training',
              'German Language Training',
              'Free Educational Webinars & Career Seminars',
              'Pre-Departure Orientation',
              'Accommodation & Travel Guidance',
            ].map((s) => (
              <div className="about-service-card" key={s}>
                <i className="fa-solid fa-check-circle"></i>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="about-commit section">
        <div className="container">
          <div className="about-commit__inner">
            <SectionTitle eyebrow="Our Commitment" title="Service-Oriented, Not" highlighted="Money-Oriented" />
            <p>
              At Alpha Global Educare, we are <strong>service-oriented rather than money-oriented</strong>. We
              believe that trust cannot be purchased—it is earned through honesty, transparency, and consistent
              support.
            </p>
            <p>
              We do not simply recommend universities or courses. We carefully understand each student's interests,
              strengths, academic background, career aspirations, and financial situation before providing guidance.
              Our goal is not just to secure an admission, but to help students make informed decisions that lead
              to successful and fulfilling careers.
            </p>
            <p className="about-commit__highlight">Every student is unique, and every dream deserves the right opportunity.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section">
        <div className="container">
          <SectionTitle eyebrow="Our Values" title="Integrity." highlighted="Transparency. Commitment. Excellence." subtitle="As we continue to grow, our values remain unchanged." />
          <div className="about-values__cta">
            <button className="btn btn-gold" onClick={() => setShowForm(true)}>
              Book Free Counselling <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button className="btn btn-outline-dark" onClick={() => {
              navigate('/');
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}>
              Contact Us <i className="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Booking Form Popup */}
      {showForm && (
        <div className="about__form-overlay" onClick={() => setShowForm(false)}>
          <div className="about__form-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="about__form-close"
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
