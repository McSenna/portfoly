const STATS = [
  { num: '2',   label: 'Years exp.' },
  { num: '10+', label: 'Projects'   },
];

const HeroStats = () => (
  <div className="absolute top-5 left-0 flex gap-6 flex-wrap">
    {STATS.map(({ num, label }, i) => (
      <div key={label}
        className={`bg-[rgba(14,14,14,0.8)] border border-[var(--border)] px-4 py-[0.6rem]
          backdrop-blur-[10px] ${i > 0 ? 'animate-[float_6s_ease-in-out_2s_infinite]' : 'animate-[float_6s_ease-in-out_infinite]'}`}>
        <span className="font-serif text-[1.4rem] font-bold text-gold block">{num}</span>
        <span className="text-[0.65rem] tracking-widest uppercase text-cream-dim">{label}</span>
      </div>
    ))}
  </div>
);

export default HeroStats;
