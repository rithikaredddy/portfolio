import type { Project } from "../types";
import { accentClasses } from "../lib/accents";
import { ApiTable } from "./ApiTable";
import { Button } from "./Button";
import { SystemFlow } from "./SystemFlow";

const themes: Record<Project["theme"], { card: string; chip: string }> = {
  mint: {
    card: "border-mint-edge bg-[linear-gradient(160deg,var(--color-mint-soft)_0%,#f4fbf8_55%,#fff_100%)]",
    chip: "border-mint-edge",
  },
  berry: {
    card: "border-berry-edge bg-[linear-gradient(160deg,var(--color-berry-soft)_0%,#fef6f9_55%,#fff_100%)]",
    chip: "border-berry-edge",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const theme = themes[project.theme];

  return (
    <article id={project.id} className={`overflow-hidden rounded-[22px] border p-5 sm:p-8 lg:p-11 ${theme.card}`}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div className="min-w-0">
          <h3 className="mb-3 text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[32px] lg:text-4xl">
            {project.title}
          </h3>

          <ul className="mb-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className={`rounded-lg border bg-white px-2.5 py-1 text-[13.5px] font-medium ${theme.chip}`}>
                {tech}
              </li>
            ))}
          </ul>

          {project.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="mb-3.5 max-w-[62ch]">
              {paragraph}
            </p>
          ))}

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Button href={project.liveUrl} variant={project.theme}>Open live demo</Button>
            <Button href={project.sourceUrl} variant="ghost">View source</Button>
          </div>
        </div>

        <aside className="self-start rounded-2xl border border-line bg-white/75 px-5 py-[18px]">
          <h4 className="mb-2.5 text-[15px] font-bold">{project.factsTitle}</h4>
          <ul>
            {project.facts.map((fact) => (
              <li key={fact.text} className="flex gap-2.5 border-t border-dashed border-line py-[7px] text-[15px] leading-snug first:border-t-0">
                <span className={`mt-1.5 size-2.5 shrink-0 rounded-[3px] ${accentClasses[fact.accent].bg}`} />
                {fact.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <h4 className="mb-3.5 mt-9 text-[17px] font-bold">{project.flowTitle}</h4>
      <SystemFlow steps={project.flow} />

      <h4 className="mb-3.5 mt-9 text-[17px] font-bold">API</h4>
      <ApiTable endpoints={project.endpoints} />

      <h4 className="mb-3.5 mt-9 text-[17px] font-bold">What I'd add next</h4>
      <ul className="flex flex-wrap gap-2">
        {project.nextSteps.map((step) => (
          <li key={step} className="rounded-[10px] border border-dashed border-arrow bg-white px-3 py-[7px] text-[14.5px]">
            {step}
          </li>
        ))}
      </ul>
    </article>
  );
}
