import type { MouseEvent } from "react";
import { navItems, person } from "../data/profile";
import { useScrolled } from "../hooks/useScrolled";
import { scrollToSection } from "../lib/scroll";

export function Header() {
  const scrolled = useScrolled();

  const go = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-10 border-b bg-white/90 backdrop-blur-md backdrop-saturate-150 transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between gap-4 px-[18px] sm:px-8 lg:px-10">
        <a href="#hero" onClick={go("hero")} className="flex items-center gap-2.5 whitespace-nowrap font-bold text-ink no-underline">
          <span className="grid size-8 place-items-center rounded-[9px] bg-cobalt text-[13px] font-extrabold text-white">
            {person.initials}
          </span>
          <span className="hidden sm:inline">{person.name}</span>
        </a>

        <nav aria-label="Sections" className="flex gap-1 overflow-x-auto [scrollbar-width:none]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={go(item.id)}
              className="whitespace-nowrap rounded-full px-2.5 py-[7px] text-[14.5px] font-medium text-ink no-underline hover:bg-cobalt-soft hover:text-cobalt sm:px-3 sm:text-[15px]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
