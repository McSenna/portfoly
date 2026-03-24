import AnimatedName    from '../components/ui/AnimatedName';
import TypewriterRole  from '../components/ui/TypewriterRole';
import HeroOrbs        from '../components/ui/HeroOrbs';
import HeroCodeBlock   from '../components/ui/HeroCodeBlock';
import HeroStats       from '../components/ui/HeroStats';
import ScrollIndicator from '../components/ui/ScrollIndicator';

const Hero = () => (
  <section id="hero"
    className="relative z-[2] min-h-screen grid grid-cols-1 md:grid-cols-2
      items-center px-[5%] pt-20 overflow-hidden">

    {/* Left */}
    <div className="pr-0 md:pr-16">
      {/* Eyebrow */}
      <div className="opacity-0 translate-y-5 animate-[fadeSlideUp_0.7s_ease_0.1s_forwards]">
        <p className="flex items-center gap-3 text-[0.75rem] tracking-[0.3em] uppercase
          text-gold mb-5 before:content-[''] before:block before:w-8 before:h-px before:bg-gold">
          Available for work
        </p>
      </div>

      <AnimatedName />
      <TypewriterRole />

      {/* Description */}
      <div className="opacity-0 translate-y-5 animate-[fadeSlideUp_0.7s_ease_1.5s_forwards]">
        <p className="text-[0.95rem] leading-[1.8] text-cream-dim max-w-[420px] mb-10">
          Building modern, user-focused digital experiences that combine
          clean design with efficient, scalable functionality.
        </p>
      </div>

      {/* Buttons */}
      <div className="opacity-0 translate-y-5 animate-[fadeSlideUp_0.7s_ease_1.8s_forwards]
        flex gap-4 flex-wrap">
        <a href="#projects"
          className="bg-gold text-ink px-8 py-3 text-[0.82rem] tracking-[0.12em]
            uppercase font-semibold no-underline inline-block
            transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5
            hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)]">
          View Projects
        </a>
        <a href="#contact"
          className="bg-transparent text-cream px-8 py-3 text-[0.82rem] tracking-[0.12em]
            uppercase font-normal no-underline inline-block
            border border-[var(--border)]
            transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5">
          Download CV
        </a>
      </div>
    </div>

    {/* Right */}
    <div className="hidden md:flex items-center justify-center relative h-[500px]">
      <HeroStats />
      <HeroOrbs />
      <HeroCodeBlock />
    </div>

    <ScrollIndicator />
  </section>
);

export default Hero;
