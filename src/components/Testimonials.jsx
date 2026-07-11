import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Ananya R.',
    country: 'United Kingdom',
    uni: 'University of Manchester',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'Alpha Global Educare guided me at every step. Today, I am living my dream in the UK.',
  },
  {
    name: 'Vikram S.',
    country: 'Canada',
    uni: 'University of Toronto',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Great support with university selection and the visa process. Highly recommended.',
  },
  {
    name: 'Mehak P.',
    country: 'Australia',
    uni: 'University of Melbourne',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Their team is professional, friendly and always available to help.',
  },
  {
    name: 'Arjun K.',
    country: 'Germany',
    uni: 'TU Munich',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote: 'Thanks to Alpha Global Educare, studying in Germany became possible for me.',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <SectionTitle eyebrow="Success Stories" title="Our Success" highlighted="Stories" />

        <div className="testimonials__grid reveal" ref={ref}>
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-card__person">
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.uni} &middot; {t.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
