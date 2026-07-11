import SectionTitle from './SectionTitle';
import useReveal from '../hooks/useReveal';
import './News.css';

const NEWS = [
  {
    title: 'Top Scholarships for International Students in 2025',
    date: '20 May',
    icon: 'fa-graduation-cap',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Study in Canada: Courses in Demand in 2025',
    date: '15 May',
    icon: 'fa-maple-leaf',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'How to Write a Strong SOP for University Admissions',
    date: '10 May',
    icon: 'fa-pen-nib',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80',
  },
  {
    title: "Student Visa Tips: Documents You Shouldn't Miss",
    date: '05 May',
    icon: 'fa-passport',
    image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=500&q=80',
  },
];

export default function News() {
  const ref = useReveal();

  return (
    <section className="news section" id="news">
      <div className="container">
        <SectionTitle eyebrow="Stay Informed" title="Latest News &" highlighted="Updates" />

        <div className="news__grid reveal" ref={ref}>
          {NEWS.map((n) => (
            <article className="news-card" key={n.title}>
              <div className="news-card__image-wrap">
                <img src={n.image} alt={n.title} loading="lazy" />
                <span className="news-card__date">{n.date}</span>
              </div>
              <div className="news-card__body">
                <i className={`fa-solid ${n.icon}`}></i>
                <h3>{n.title}</h3>
                <a href="#contact" className="news-card__link">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
