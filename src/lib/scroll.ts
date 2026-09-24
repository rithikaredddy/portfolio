export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scrolls to a section by id, leaving room for the sticky header.
 * Uses JS rather than #hash links so it also works inside embedded previews.
 */
export function scrollToSection(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.getElementById("site-header");
  const offset = id === "hero" ? 0 : header?.offsetHeight ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion() ? "auto" : "smooth" });

  // Move keyboard focus to the section for screen reader and keyboard users.
  target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
}
