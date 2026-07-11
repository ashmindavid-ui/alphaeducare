import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import './Services.css';

const SERVICES = [
  { icon: 'fa-comments', title: 'Career Counselling' },
  { icon: 'fa-school', title: 'Course & University Selection' },
  { icon: 'fa-file-signature', title: 'Application Assistance' },
  { icon: 'fa-stamp', title: 'Visa Filing Support' },
  { icon: 'fa-hand-holding-dollar', title: 'Scholarship & Loan Assistance' },
  { icon: 'fa-house-chimney', title: 'Accommodation Assistance' },
  { icon: 'fa-suitcase-rolling', title: 'Pre-Departure Guidance' },
  { icon: 'fa-language', title: 'German Language Training' },
  { icon: 'fa-pen-to-square', title: 'IELTS Training' },
];

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
              <i className={`fa-solid ${s.icon}`}></i>
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <a href="#contact" className="btn btn-gold">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
