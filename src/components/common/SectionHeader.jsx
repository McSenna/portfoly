const SectionHeader = ({ label, title, center = false }) => (
  <div className={center ? 'text-center' : ''}>
    <p className={`flex items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase text-gold mb-3
      before:content-[''] before:block before:w-6 before:h-px before:bg-gold
      ${center ? 'justify-center' : ''}`}>
      {label}
    </p>
    <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none mb-12 text-cream">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
