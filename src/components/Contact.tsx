import { links, person } from "../data/profile";
import { Button } from "./Button";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" className="!pt-0">
      <div className="relative overflow-hidden rounded-[26px] bg-cobalt p-8 text-white sm:p-12 lg:p-16">
        <div
          className="pointer-events-none absolute -bottom-[150px] -right-[90px] size-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.18),transparent_70%)]"
          aria-hidden="true"
        />
        <h2 className="mb-3.5 max-w-[18ch] text-[30px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[40px] lg:text-5xl">
          Let's build something together.
        </h2>
        <p className="mb-6 max-w-[46ch] text-lg text-white/90">
          I'm looking for a full-stack internship where I can ship real features. Email is the fastest way to reach me.
        </p>
        <div className="relative z-[1] flex flex-wrap gap-2.5">
          <Button href={`mailto:${person.email}`} variant="inverse" className="flex-1 sm:flex-none">Email me</Button>
          {Object.values(links).map((link) => (
            <Button key={link.href} href={link.href} variant="outline-light" className="flex-1 sm:flex-none">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
