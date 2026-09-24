import { projects } from "../data/profile";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Both are deployed, and the full source is on GitHub.">
      <div className="flex flex-col gap-6 sm:gap-9">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
