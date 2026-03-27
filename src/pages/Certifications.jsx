import FadeUp           from '../components/common/FadeUp';
import SectionHeader    from '../components/common/SectionHeader';
import CertificationCard from '../components/ui/CertificationCard';
import { Certifications as certifications } from '../utils/data';

const Certifications = () => (
  <section id="certifications" className="relative z-[2] px-[5%] py-28">
    <FadeUp>
      <SectionHeader label="What I've earned" title="Certifications" />
    </FadeUp>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-px mt-12 bg-[var(--border)] border border-[var(--border)]">
      {certifications.map((cert, i) => (
        <CertificationCard key={cert.num} project={cert} index={i} />
      ))}
    </div>
  </section>
);

export default Certifications;