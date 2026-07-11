import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import './Countries.css';

const COUNTRIES = [
  {
    name: 'United Kingdom',
    flag: 'https://flagcdn.com/w160/gb.png',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80',
    blurb: "Qualifications recognised worldwide, with generous scholarships.",
  },
  {
    name: 'United States',
    flag: 'https://flagcdn.com/w160/us.png',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=500&q=80',
    blurb: 'Merit-based scholarships and the widest choice of courses.',
  },
  {
    name: 'Canada',
    flag: 'https://flagcdn.com/w160/ca.png',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=500&q=80',
    blurb: 'Immigration-friendly with strong post-study work permits.',
  },
  {
    name: 'Australia',
    flag: 'https://flagcdn.com/w160/au.png',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=500&q=80',
    blurb: 'Globally recognised degrees and generous bursaries.',
  },
  {
    name: 'Germany',
    flag: 'https://flagcdn.com/w160/de.png',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=500&q=80',
    blurb: 'Cutting-edge research with little to no tuition fees.',
  },
];

export default function Countries() {
  const ref = useReveal();

  return (
    <section className="countries section" id="countries">
      <div className="container">
        <SectionTitle eyebrow="Destinations" title="Study in Top" highlighted="Countries" />

        <div className="countries__grid reveal" ref={ref}>
          {COUNTRIES.map((c) => (
            <a href="#contact" className="country-card" key={c.name}>
              <div className="country-card__image-wrap">
                <img src={c.image} alt={`${c.name} skyline`} loading="lazy" />
                <img src={c.flag} alt={`${c.name} flag`} className="country-card__flag" loading="lazy" />
              </div>
              <div className="country-card__body">
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <span className="country-card__link">
                  Explore <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
