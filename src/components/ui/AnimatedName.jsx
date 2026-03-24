const FIRST_NAME = 'Justin';
const LAST_NAME  = 'Valladolid';
const BASE_DELAY = 0.35;

const AnimatedName = () => (
  <h1 className="font-serif text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.9] text-cream mb-2 block"
    aria-label="Justin Valladolid">
    <span className="block overflow-hidden">
      {FIRST_NAME.split('').map((ch, i) => (
        <span key={i}
          className="inline-block opacity-0 translate-y-[60px] [transform-style:preserve-3d]
            animate-[letterIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          style={{ animationDelay: `${BASE_DELAY + i * 0.07}s` }}>
          {ch}
        </span>
      ))}
    </span>
    <span className="block overflow-hidden">
      {LAST_NAME.split('').map((ch, i) => (
        <span key={i}
          className="inline-block text-gold opacity-0 translate-y-[60px]
            animate-[letterIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          style={{ animationDelay: `${BASE_DELAY + (FIRST_NAME.length + i) * 0.07}s` }}>
          {ch}
        </span>
      ))}
    </span>
  </h1>
);

export default AnimatedName;
