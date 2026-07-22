import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo-row">
            <img src={logo} alt="Alpha Global Educare logo" />
            <span>Alpha Global Educare</span>
          </div>
          <p>We are committed to helping students achieve their dreams of studying abroad.</p>
          <div className="footer__social">
            <a href="https://www.facebook.com/ALPHAGLOBALEDUCARE" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/alphaglobaleducare/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com/@alphaglobaleducare" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/company/alpha-global-educare" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/#countries">Countries</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/#services">Career Counselling</Link></li>
            <li><Link to="/#services">University Selection</Link></li>
            <li><Link to="/#services">Visa Assistance</Link></li>
            <li><Link to="/#services">Scholarship Guidance</Link></li>
            <li><Link to="/#services">Pre-Departure Support</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li><i className="fa-solid fa-location-dot"></i> Coimbatore, Tamilnadu</li>
            <li><i className="fa-solid fa-phone"></i> +91 93608 86307</li>
            <li><i className="fa-solid fa-envelope"></i> info@alphaglobaleducare.com</li>
            <li><i className="fa-solid fa-clock"></i> Mon - Sat: 9:30 AM - 6:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>&copy; {year} Alpha Global Educare. All Rights Reserved.</span>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919360886307"
        target="_blank"
        rel="noreferrer"
        className="footer__whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
}
