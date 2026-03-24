const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
    text-[0.65rem] tracking-[0.2em] uppercase text-cream-dim">
    <div className="w-px h-[50px] bg-gradient-to-b from-gold to-transparent
      animate-[scrollDown_2s_ease-in-out_infinite]" />
    Scroll
  </div>
);

export default ScrollIndicator;
