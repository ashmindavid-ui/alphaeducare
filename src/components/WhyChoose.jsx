import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import './WhyChoose.css';

const FEATURES = [
  { icon: 'fa-user-tie', title: 'Expert Counsellors', text: 'Experienced and certified counsellors to guide your journey.' },
  { icon: 'fa-building-columns', title: 'University Selection', text: 'Choose from 500+ top-ranked universities worldwide.' },
  { icon: 'fa-list-check', title: 'End-to-End Support', text: 'We assist you from application to visa and beyond.' },
  { icon: 'fa-graduation-cap', title: 'Scholarship Guidance', text: 'Get help to secure scholarships and financial aid.' },
  { icon: 'fa-passport', title: 'Visa Assistance', text: 'High visa success rate with expert documentation support.' },
  { icon: 'fa-plane-arrival', title: 'Post Arrival Support', text: 'Accommodation, travel and settling-in support in your new country.' },
];

export default function WhyChoose() {
  const ref = useReveal();

  return (
    <section className="why-choose section" id="why-choose">
      <div className="container">
        <SectionTitle
          align="center"
          eyebrow="Why Alpha"
          title="Why Choose"
          highlighted="Alpha Global Educare?"
          subtitle="From your first consultation to settling in on campus, we stay with you at every step of the journey."
        />

        <div className="why-choose__grid reveal" ref={ref}>
          {FEATURES.map((f) => (
            <div className="why-choose__card" key={f.title}>
              <div className="why-choose__icon">
                <i className={`fa-solid ${f.icon}`}></i>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
