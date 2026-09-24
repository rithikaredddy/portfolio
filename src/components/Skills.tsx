import { skillGroups } from "../data/profile";
import { accentClasses } from "../lib/accents";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Grouped by where I use them." tinted>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const accent = accentClasses[group.accent];
          return (
            <div key={group.name} className="rounded-2xl border border-line bg-white px-5 py-[18px]">
              <h3 className="mb-3 flex items-center gap-2 text-base font-bold">
                <span className={`size-2.5 rounded-[3px] ${accent.bg}`} aria-hidden="true" />
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-[7px]">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className={`rounded-lg px-2.5 py-1 text-sm ${item.primary ? `${accent.bg} font-semibold text-white` : `${accent.soft} text-ink`}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mt-[18px] flex items-center gap-2 text-[14.5px] text-muted">
        <span className="inline-block h-3.5 w-[26px] rounded bg-cobalt" aria-hidden="true" />
        Filled tags are the ones I use most in my projects.
      </p>
    </Section>
  );
}
