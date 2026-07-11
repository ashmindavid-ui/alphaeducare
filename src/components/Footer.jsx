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
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#why-choose">About Us</a></li>
            <li><a href="#countries">Countries</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#services">Career Counselling</a></li>
            <li><a href="#services">University Selection</a></li>
            <li><a href="#services">Visa Assistance</a></li>
            <li><a href="#services">Scholarship Guidance</a></li>
            <li><a href="#services">Pre-Departure Support</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li><i className="fa-solid fa-location-dot"></i> 123, 1st Floor, Anwarul Road, Connaught Place, Delhi</li>
            <li><i className="fa-solid fa-phone"></i> +91 90255 74747</li>
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
        href="https://wa.me/9811234567"
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
