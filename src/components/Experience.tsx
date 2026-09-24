import { experience } from "../data/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Back-end development on SAP's cloud stack, from data models to services."
      tinted
    >
      <article className="grid grid-cols-1 items-start gap-4 rounded-[18px] border border-t-[5px] border-line border-t-violet bg-white p-5 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-8">
        <div className="grid size-14 place-items-center rounded-[14px] bg-violet-soft text-xl font-extrabold text-violet" aria-hidden="true">
          {experience.initial}
        </div>
        <div>
          <h3 className="text-[22px] font-bold leading-tight">
            {experience.role}, {experience.company}
          </h3>
          <p className="mb-3.5 mt-1 text-[15.5px] text-muted">
            {experience.when}, {experience.context}
          </p>
          <p className="mb-3 max-w-[68ch]">{experience.description}</p>

          <ul className="my-4 flex flex-wrap gap-2">
            {experience.tools.map((tool) => (
              <li key={tool} className="rounded-full bg-violet-soft px-3 py-1 text-sm font-medium text-violet">
                {tool}
              </li>
            ))}
          </ul>

          <a
            href={experience.credential.href}
            className="mt-1 inline-flex items-center gap-2.5 rounded-xl bg-sun-soft px-3.5 py-2.5 text-[15px] font-semibold text-sun-deep no-underline hover:underline"
          >
            <span className="grid size-[26px] shrink-0 place-items-center rounded-full bg-sun text-sm text-white" aria-hidden="true">✓</span>
            {experience.credential.label}
          </a>
        </div>
      </article>
    </Section>
  );
}
