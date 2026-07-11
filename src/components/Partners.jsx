import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import './Partners.css';

const PARTNERS = [
  { name: 'University of Toronto', country: 'Canada' },
  { name: 'The University of Melbourne', country: 'Australia' },
  { name: 'University of Manchester', country: 'United Kingdom' },
  { name: 'UNSW Sydney', country: 'Australia' },
  { name: 'The University of British Columbia', country: 'Canada' },
];

export default function Partners() {
  const ref = useReveal();

  return (
    <section className="partners section">
      <div className="container">
        <SectionTitle align="center" eyebrow="Global Network" title="Our Partner" highlighted="Universities" />

        <div className="partners__row reveal" ref={ref}>
          {PARTNERS.map((p) => (
            <div className="partner-pill" key={p.name}>
              <i className="fa-solid fa-award"></i>
              <div>
                <strong>{p.name}</strong>
                <span>{p.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
