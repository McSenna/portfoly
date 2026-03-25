import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';

const ExperienceItem = ({ experience, index }) => {
  const { date, company, role, desc, tags } = experience;
  const ref     = useRef();
  const visible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={`exp-item pb-10 sm:pb-14 pl-6 sm:pl-10 relative
        fade-up ${visible ? 'visible' : ''}
        before:content-[''] before:absolute before:left-[-4px] before:top-[6px]
        before:w-[9px] before:h-[9px] before:rounded-full
        before:bg-ink-2 before:border-2 before:border-gold
        sm:grid sm:grid-cols-[200px_1fr] sm:gap-12`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Meta — stacks above content on mobile, sits in left column on sm+ */}
      <div className="mb-3 sm:mb-0">
        <p className="text-[0.72rem] tracking-[0.12em] uppercase text-gold mb-1">{date}</p>
        <p className="text-[0.82rem] text-cream-dim">{company}</p>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-serif text-[1.2rem] sm:text-[1.5rem] font-bold text-cream mb-[0.5rem] sm:mb-[0.6rem]">
          {role}
        </h3>
        <p className="text-[0.85rem] sm:text-[0.88rem] leading-[1.7] sm:leading-[1.8] text-cream-dim mb-4">
          {desc}
        </p>
        <div className="flex flex-wrap gap-[0.35rem] sm:gap-[0.4rem]">
          {tags.map(tag => (
            <span key={tag}
              className="exp-tag text-[0.65rem] sm:text-[0.68rem] tracking-[0.08em]
                px-[0.6rem] sm:px-[0.7rem] py-[0.25rem]
                bg-gold/5 border border-[var(--border)] text-cream-dim">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;