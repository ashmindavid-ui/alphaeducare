import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import { COUNTRIES_DATA, TOP_DESTINATIONS } from '../data/countries';
import './Countries.css';

export default function Countries() {
  const ref1 = useReveal();
  const ref2 = useReveal();

  const handleScrollLeft = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: -280, behavior: 'smooth' });
  };

  const handleScrollRight = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: 280, behavior: 'smooth' });
  };

  return (
    <section className="countries section" id="countries">
      <div className="container">
        <SectionTitle eyebrow="Destinations" title="Explore" highlighted="Countries" />

        {/* Country Cards - Horizontal Scroll */}
        <div className="countries__scroll-section reveal" ref={ref1}>
          <div className="countries__scroll-wrap">
            <button
              className="countries__scroll-btn countries__scroll-btn--left"
              onClick={() => handleScrollLeft('countriesTrack')}
              aria-label="Scroll left"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="countries__track" id="countriesTrack">
              {COUNTRIES_DATA.map((c) => (
                <Link to={`/country/${c.id}`} className="country-card-h" key={c.id}>
                  <div className="country-card-h__img">
                    <img src={c.image} alt={c.name} loading="lazy" />
                    <img src={c.flag} alt="" className="country-card-h__flag" />
                  </div>
                  <div className="country-card-h__body">
                    <h3>{c.name}</h3>
                    <span className="country-card-h__arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <button
              className="countries__scroll-btn countries__scroll-btn--right"
              onClick={() => handleScrollRight('countriesTrack')}
              aria-label="Scroll right"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Popular Study Destinations */}
        <div className="countries__popular-section reveal" ref={ref2} style={{ marginTop: 60 }}>
          <SectionTitle eyebrow="Top Picks" title="Popular Study" highlighted="Destinations" />

          <div className="countries__scroll-wrap">
            <button
              className="countries__scroll-btn countries__scroll-btn--left"
              onClick={() => handleScrollLeft('popularTrack')}
              aria-label="Scroll left"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="countries__track" id="popularTrack">
              {TOP_DESTINATIONS.map((d) => (
                <Link to={`/country/${d.slug}`} className="country-card-h" key={d.slug}>
                  <div className="country-card-h__img">
                    <img src={d.image} alt={d.name} loading="lazy" />
                    <img src={d.flag} alt="" className="country-card-h__flag" />
                  </div>
                  <div className="country-card-h__body">
                    <h3>{d.name}</h3>
                    <span className="country-card-h__arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <button
              className="countries__scroll-btn countries__scroll-btn--right"
              onClick={() => handleScrollRight('popularTrack')}
              aria-label="Scroll right"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
