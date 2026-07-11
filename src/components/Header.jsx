import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '/', isRouter: true },
  { label: 'Countries', href: '/#countries', isRouter: false },
  { label: 'About', href: '/about', isRouter: true },
  { label: 'Services', href: '/#services', isRouter: false },
  { label: 'Testimonials', href: '/#testimonials', isRouter: false },
  { label: 'Contact', href: '/#contact', isRouter: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.isRouter && link.href.startsWith('/') && !link.href.startsWith('/#')) {
      // Router links - handled by Link component
      return;
    }
    // Hash links outside home page
    if (!isHome && link.href.startsWith('/#')) {
      window.location.href = link.href;
    }
  };

  const renderNavLink = (link) => {
    if (link.href === '/') {
      // Home link — always scrolls to top
      return (
        <li key={link.href}>
          <a href="/" onClick={goHome}>
            {link.label}
          </a>
        </li>
      );
    }
    if (link.isRouter && link.href.startsWith('/') && !link.href.startsWith('/#')) {
      return (
        <li key={link.href}>
          <Link to={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        </li>
      );
    }
    return (
      <li key={link.href}>
        <a href={link.href} onClick={() => handleNavClick(link)}>
          {link.label}
        </a>
      </li>
    );
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
            {NAV_LINKS.map((link) => renderNavLink(link))}
          </ul>
          <Link to="/book-counselling" className="btn btn-gold header__nav-cta" onClick={() => setMenuOpen(false)}>
            Book Counselling
          </Link>
        </nav>

        <div className="header__actions">
          <Link to="/book-counselling" className="btn btn-gold header__cta-desktop">
            Book Counselling
          </Link>
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
    </header>
  );
}
