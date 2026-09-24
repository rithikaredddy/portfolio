import type { Accent } from "../types";

/**
 * Tailwind only generates classes it can find as full strings in the source,
 * so accent colors are mapped to complete class names here instead of being
 * built dynamically (e.g. `bg-${accent}` would not work).
 */
export const accentClasses: Record<
  Accent,
  { text: string; bg: string; soft: string; borderTop: string; borderLeft: string }
> = {
  cobalt: { text: "text-cobalt", bg: "bg-cobalt", soft: "bg-cobalt-soft", borderTop: "border-t-cobalt", borderLeft: "border-l-cobalt" },
  mint:   { text: "text-mint",   bg: "bg-mint",   soft: "bg-mint-soft",   borderTop: "border-t-mint",   borderLeft: "border-l-mint" },
  berry:  { text: "text-berry",  bg: "bg-berry",  soft: "bg-berry-soft",  borderTop: "border-t-berry",  borderLeft: "border-l-berry" },
  sun:    { text: "text-sun",    bg: "bg-sun",    soft: "bg-sun-soft",    borderTop: "border-t-sun",    borderLeft: "border-l-sun" },
  violet: { text: "text-violet", bg: "bg-violet", soft: "bg-violet-soft", borderTop: "border-t-violet", borderLeft: "border-l-violet" },
};
