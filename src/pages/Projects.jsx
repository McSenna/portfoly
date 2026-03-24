import FadeUp        from '../components/common/FadeUp';
import SectionHeader  from '../components/common/SectionHeader';
import ProjectCard    from '../components/ui/ProjectCard';
import { PROJECTS }  from '../utils/data';

const Projects = () => (
  <section id="projects" className="relative z-[2] px-[5%] py-28">
    <FadeUp>
      <SectionHeader label="What I've built" title="Selected Projects" />
    </FadeUp>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-px mt-12 bg-[var(--border)] border border-[var(--border)]">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.num} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default Projects;
