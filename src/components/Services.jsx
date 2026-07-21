import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import SERVICES from '../data/services';
import './Services.css';

export default function Services() {
  const ref = useReveal();

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header">
          <SectionTitle eyebrow="What We Offer" title="Our" highlighted="Services" />
        </div>

        <div className="services__grid reveal" ref={ref}>
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card__image">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>{s.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <Link to="/services" className="btn btn-gold">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
