import FadeUp         from '../components/common/FadeUp';
import SectionHeader   from '../components/common/SectionHeader';
import ExperienceItem  from '../components/ui/ExperienceItem';
import { EXPERIENCE } from '../utils/data';

const Experience = () => (
  <section id="experience" className="relative z-[2] px-[5%] py-28 bg-ink-2">
    <FadeUp>
      <SectionHeader label="Where I've worked" title="Experience" />
    </FadeUp>

    {/* Timeline */}
    <div className="mt-12 relative
      before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0
      before:w-px before:bg-gradient-to-b before:from-gold before:to-transparent">
      {EXPERIENCE.map((exp, i) => (
        <ExperienceItem key={exp.company} experience={exp} index={i} />
      ))}
    </div>
  </section>
);

export default Experience;
