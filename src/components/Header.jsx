import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import CounsellingForm from './CounsellingForm';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Countries', to: '/#countries' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/#services' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Contact', to: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Close form on Escape
  useEffect(() => {
    if (!showForm) return;
    const handleEsc = (e) => { if (e.key === 'Escape') setShowForm(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showForm]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const goHome = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHashClick = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      // Already on homepage — just scroll smoothly
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage with hash — ScrollToTop in App.jsx handles scrolling
      navigate('/#' + hash);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="/" className="header__brand" onClick={goHome}>
          <img src={logo} alt="Alpha Global Educare logo" className="header__logo" />
          <div className="header__brandtext">
            <span className="header__name">Alpha Global Educare</span>
            <span className="header__tagline">Your Gateway to Global Education</span>
          </div>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => {
              const isHashLink = link.to.startsWith('/#') && link.to.length > 2;
              if (link.to === '/') {
                return (
                  <li key={link.to}>
                    <a href="/" onClick={goHome}>{link.label}</a>
                  </li>
                );
              }
              if (isHashLink) {
                const hash = link.to.split('#')[1];
                return (
                  <li key={link.to}>
                    <a href={link.to} onClick={(e) => handleHashClick(e, hash)}>{link.label}</a>
                  </li>
                );
              }
              return (
                <li key={link.to}>
                  <Link to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          <button className="btn btn-gold header__nav-cta" onClick={() => { setMenuOpen(false); setShowForm(true); }}>
            Book Free Counselling
          </button>
        </nav>

        <div className="header__actions">
          <button className="btn btn-gold header__cta-desktop" onClick={() => setShowForm(true)}>
            Book Free Counselling
          </button>
          <button
            className={`header__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {/* Booking Form Popup */}
      {showForm && (
        <div className="header__form-overlay" onClick={() => setShowForm(false)}>
          <div className="header__form-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="header__form-close"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <CounsellingForm onSuccess={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
