import { links, person } from "../data/profile";
import { scrollToSection } from "../lib/scroll";
import { Button } from "./Button";
import { VerdictCard } from "./VerdictCard";

export function Hero() {
  return (
    <section id="hero" className="relative isolate py-12 sm:py-20 lg:py-24">
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-10 px-[18px] sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-10">
        <div className="min-w-0">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-mint-soft px-3 py-1.5 text-[15px] font-medium text-mint">
            <span className="size-2 rounded-full bg-mint" />
            {person.status}
          </span>

          <h1 className="mb-5 text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[46px] lg:text-[56px]">
            {person.headline}
          </h1>

          {person.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="mb-3.5 max-w-[58ch] text-[17px] text-body sm:text-lg lg:text-[19px]">
              {paragraph}
            </p>
          ))}

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="flex-1 sm:flex-none"
            >
              See my projects
            </Button>
            <Button href={links.github.href} variant="ghost" className="flex-1 sm:flex-none">
              GitHub profile
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[15.5px]">
            <a href={links.linkedin.href} className="text-cobalt underline underline-offset-[3px]">{links.linkedin.label}</a>
            <a href={links.leetcode.href} className="text-cobalt underline underline-offset-[3px]">{links.leetcode.label}</a>
            <a href={`mailto:${person.email}`} className="text-cobalt underline underline-offset-[3px]">{person.email}</a>
          </div>
        </div>

        <VerdictCard />
      </div>
    </section>
  );
}
