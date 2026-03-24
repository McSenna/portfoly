const SkillTag = ({ label }) => (
  <span className="skill-tag px-[0.9rem] py-[0.4rem] text-[0.75rem] tracking-[0.08em]
    border border-[var(--border)] text-cream-dim bg-ink-3 cursor-default
    transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/5">
    {label}
  </span>
);

export default SkillTag;
