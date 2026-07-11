import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Countries', href: '#countries' },
  { label: 'About', href: '#why-choose' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Alpha Global Educare logo" className="header__logo" />
          <div className="header__brandtext">
            <span className="header__name">Alpha Global Educare</span>
            <span className="header__tagline">Your Gateway to Global Education</span>
          </div>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-gold header__nav-cta" onClick={() => setMenuOpen(false)}>
            Book Counselling
          </a>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="btn btn-gold header__cta-desktop">
            Book Counselling
          </a>
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
