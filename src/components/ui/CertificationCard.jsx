import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';
import ProjectStatusBadge from '../common/ProjectStatusBadge';

const CertificationCard = ({ project, index }) => {
  const { title, desc, tags, img, status, num } = project;
  const ref     = useRef();
  const visible = useIntersection(ref);

  return (
    <article
      ref={ref}
      className={`project-card relative overflow-hidden cursor-pointer bg-ink-2
        transition-all duration-300 group fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      {/* Image */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-ink-3 relative">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover
            transition-transform duration-500 group-hover:scale-[1.07]"
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/15 to-ink/55 pointer-events-none" />
        {/* Gold hover overlay */}
        <div className="absolute inset-0 bg-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-[0.65rem] tracking-[0.2em] text-gold mb-2">{num}</p>
        <h3 className="font-serif text-[1.35rem] font-bold text-cream mb-[0.6rem] leading-snug">
          {title}
        </h3>
        <ProjectStatusBadge status={status} />
        <p className="text-[0.82rem] leading-[1.7] text-cream-dim mb-4">{desc}</p>
        <div className="flex flex-wrap gap-[0.4rem]">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-[0.68rem] tracking-[0.08em] px-[0.7rem] py-[0.25rem]
                border border-gold/20 text-gold-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <span
        className="absolute top-4 right-4 text-gold text-[1.1rem]
          translate-x-1 -translate-y-1 opacity-0
          transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        ↗
      </span>
    </article>
  );
};

export default CertificationCard;