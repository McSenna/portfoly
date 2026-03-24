const HeroCodeBlock = () => (
  <div className="hero-code-block absolute bottom-[30px] right-0
    bg-[rgba(14,14,14,0.9)] border border-[var(--border)]
    px-[1.4rem] py-4 text-[0.72rem] leading-[1.7] font-mono text-cream-dim
    backdrop-blur-[10px] animate-[float_6s_ease-in-out_infinite]">
    <span className="text-gold">const</span>{' '}
    <span className="text-[#7dd3fc]">developer</span> = {'{'}<br />
    &nbsp;&nbsp;name: <span className="text-[#86efac]">"Justin Valladolid"</span>,<br />
    &nbsp;&nbsp;stack: <span className="text-[#86efac]">"Full Stack"</span>,<br />
    &nbsp;&nbsp;available: <span className="text-gold">true</span>,<br />
    &nbsp;&nbsp;coffee: <span className="text-[#86efac]">"☕ always"</span><br />
    {'}'};
  </div>
);

export default HeroCodeBlock;
