import { TICKER_ITEMS } from '../../utils/data';

const TickerItem = ({ name, svg }) => (
  <div className="flex items-center gap-[0.65rem] px-[1.8rem] text-[0.7rem] tracking-[0.15em]
    uppercase text-cream-dim whitespace-nowrap transition-colors duration-300
    hover:text-gold cursor-default">
    <span className="flex items-center w-5 h-5 flex-shrink-0"
      dangerouslySetInnerHTML={{ __html: svg }} aria-hidden="true" />
    <span>{name}</span>
    <span className="w-px h-5 bg-[var(--border)] flex-shrink-0 ml-[0.6rem]" />
  </div>
);

const SkillTicker = () => {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap mt-auto py-[1.6rem] bg-ink-3
      border-t border-b border-[var(--border)]
      overflow-hidden relative
      before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0
        before:w-32 before:z-[2] before:pointer-events-none
        before:bg-gradient-to-r before:from-ink-3 before:to-transparent
      after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0
        after:w-32 after:z-[2] after:pointer-events-none
        after:bg-gradient-to-l after:from-ink-3 after:to-transparent">
      <div className="ticker-track flex items-center w-max animate-[ticker_40s_linear_infinite]">
        {doubled.map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SkillTicker;
