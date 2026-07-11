import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href="tel:+919025574747">
            <i className="fa-solid fa-phone"></i> +91 90255 74747
          </a>
          <a href="mailto:info@alphaglobaleducare.com">
            <i className="fa-solid fa-envelope"></i> info@alphaglobaleducare.com
          </a>
        </div>
        <div className="topbar__social">
          <span className="topbar__follow">Follow Us</span>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
