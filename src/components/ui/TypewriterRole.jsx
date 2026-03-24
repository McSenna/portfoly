import useTypewriter from '../../hooks/useTypewriter';
import { ROLES } from '../../utils/data';

const TypewriterRole = () => {
  const displayed = useTypewriter(ROLES);

  return (
    <div className="font-serif text-[clamp(1.4rem,3vw,2.4rem)] font-light text-cream-dim
      mb-7 tracking-[0.02em] min-h-[2.8rem] flex items-center">
      <span>{displayed}</span>
      <span aria-hidden="true"
        className="inline-block w-[2px] h-[1.2em] bg-gold ml-[3px] align-middle
          animate-[blink_1s_step-end_infinite]" />
    </div>
  );
};

export default TypewriterRole;
