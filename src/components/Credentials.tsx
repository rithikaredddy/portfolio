import { credentials } from "../data/profile";
import { accentClasses } from "../lib/accents";
import { Section } from "./Section";

export function Credentials() {
  return (
    <Section id="education" title="Certifications and education">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((item) => {
          const accent = accentClasses[item.accent];
          return (
            <article key={item.title} className={`rounded-2xl border border-l-[5px] border-line bg-white p-[22px] ${accent.borderLeft}`}>
              <span className={`text-sm font-semibold ${accent.text}`}>{item.when}</span>
              <h3 className="mb-2 mt-1.5 text-lg font-bold leading-snug">{item.title}</h3>
              <p className="text-[15.5px] text-muted">
                {item.detail}{" "}
                {item.link && (
                  <a href={item.link.href} className="text-cobalt underline underline-offset-[3px]">
                    {item.link.label}
                  </a>
                )}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
