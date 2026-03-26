import FadeUp from '../components/common/FadeUp';
import SectionHeader from '../components/common/SectionHeader';
import SkillTag from '../components/common/SkillTag';
import SkillTicker from '../components/ui/SkillTicker';
import { SKILLS } from '../utils/data';

const AboutImage = () => (
  <div className="relative w-full flex-shrink-0">
    <div className="w-full aspect-[3/4] sm:aspect-[3/4] xs:aspect-square bg-ink-3 border border-[var(--border)]
      relative overflow-hidden flex items-center justify-center
      before:content-[''] before:absolute before:inset-0
      before:bg-gradient-to-br before:from-gold/10 before:to-transparent before:z-[1]">
      <img
        src="/me.png"
        alt="Justin Valladolid"
        className="w-full h-full object-cover object-top"
      />
    </div>
    <div className="absolute -bottom-4 -right-4 w-[60%] h-[60%]
      border border-gold opacity-20 pointer-events-none" />
  </div>
);

const AboutContent = () => (
  <div>
    <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.8] sm:leading-[1.9] text-cream-dim mb-5">
      Hi, I&apos;m Justin, a 3rd year student at Computer Arts
      Technological College and a web and mobile application developer.
      I&apos;m passionate about building modern, user-focused digital
      solutions that combine clean design with efficient functionality.
    </p>
    <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.8] sm:leading-[1.9] text-cream-dim mb-5">
      I specialize in React for frontend development and MySQL-backed
      systems on the backend. I focus on creating scalable, maintainable
      applications while continuously improving my skills in both web and
      mobile development.
    </p>

    <div className="mt-6 sm:mt-8">
      <p className="text-[0.72rem] tracking-[0.2em] uppercase text-gold mb-4">
        Core Skills
      </p>
      <div className="flex flex-wrap gap-[0.5rem] sm:gap-[0.6rem] mb-8 sm:mb-10">
        {SKILLS.slice(0, 12).map(skill => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </div>

    <div className="flex gap-3 sm:gap-4 flex-wrap mt-4 sm:mt-6">
      <a href="#projects"
        className="bg-gold text-ink px-6 sm:px-8 py-2.5 sm:py-3 text-[0.78rem] sm:text-[0.82rem] tracking-[0.12em]
          uppercase font-semibold no-underline inline-block
          transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5
          hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)]">
        See Projects
      </a>
      <a href="#contact"
        className="bg-transparent text-cream px-6 sm:px-8 py-2.5 sm:py-3 text-[0.78rem] sm:text-[0.82rem] tracking-[0.12em]
          uppercase no-underline inline-block border border-[var(--border)]
          transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5">
        Download CV
      </a>
    </div>
  </div>
);

const About = () => (
  <section id="about"
    className="relative z-[2] bg-ink-2 min-h-screen flex flex-col justify-between">

    <div className="px-[5%] pt-20 sm:pt-28 pb-10 sm:pb-12 flex-1">
      <FadeUp>
        <SectionHeader label="Who I am" title="About Me" />
      </FadeUp>

      {/* 
        Mobile (default):  single column, image on top centered, content below
        Tablet (sm):       two columns, narrow image left, content right
        Desktop (lg):      two columns, wider image left, content right
      */}
      <div className="
        flex flex-col items-center gap-10
        sm:grid sm:items-start sm:gap-12 sm:mt-4
        sm:grid-cols-[160px_1fr]
        lg:grid-cols-[220px_1fr]
        lg:gap-16
      ">
        {/* Image: full-width on mobile, fixed column width on sm+ */}
        <FadeUp delay={0.1} className="w-full max-w-[220px] sm:max-w-none">
          <AboutImage />
        </FadeUp>

        <FadeUp delay={0.2} className="w-full">
          <AboutContent />
        </FadeUp>
      </div>
    </div>

    <SkillTicker />
  </section>
);

export default About;