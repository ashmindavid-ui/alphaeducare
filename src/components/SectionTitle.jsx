import useReveal from '../hooks/useReveal';
import './SectionTitle.css';

/**
 * Reusable section heading.
 * Usage: <SectionTitle eyebrow="Countries" title="Study in Top" highlighted="Countries" subtitle="..." />
 */
export default function SectionTitle({ eyebrow, title, highlighted, subtitle, align = 'left' }) {
  const ref = useReveal();

  return (
    <div className={`section-title section-title--${align} reveal`} ref={ref}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">
        {title} {highlighted && <em>{highlighted}</em>}
      </h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}
