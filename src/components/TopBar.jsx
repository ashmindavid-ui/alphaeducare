import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href="tel:+919360886307">
            <i className="fa-solid fa-phone"></i> +91 93608 86307
          </a>
          <a href="mailto:alphaglobaleducare@gmail.com">
            <i className="fa-solid fa-envelope"></i> alphaglobaleducare@gmail.com
          </a>
        </div>
        <div className="topbar__social">
          <span className="topbar__follow">Follow Us</span>
          <a href="https://www.facebook.com/ALPHAGLOBALEDUCARE" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/alphaglobaleducare/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@alphaglobaleducare" target="_blank" rel="noreferrer" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/company/alpha-global-educare" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
