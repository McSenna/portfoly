import { SOCIAL_LINKS } from '../../utils/data';

const SocialLinks = () => (
  <div className="flex justify-center gap-6 mb-16 flex-wrap">
    {SOCIAL_LINKS.map(({ label, href, icon }) => (
      <a key={label} href={href}
        target="_blank" rel="noopener noreferrer"
        className="social-link flex items-center gap-[0.6rem] px-6 py-[0.7rem]
          border border-[var(--border)] text-cream-dim no-underline
          text-[0.8rem] tracking-widest uppercase
          transition-all duration-300
          hover:border-gold hover:text-gold hover:bg-gold/5">
        <span dangerouslySetInnerHTML={{ __html: icon }} aria-hidden="true" />
        {label}
      </a>
    ))}
  </div>
);

export default SocialLinks;
