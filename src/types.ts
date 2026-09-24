export type Accent = "cobalt" | "mint" | "berry" | "sun" | "violet";

export interface Link {
  label: string;
  href: string;
}

export interface FlowStep {
  title: string;
  detail: string;
  accent: Accent;
}

export interface Endpoint {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  requiresLogin?: boolean;
}

export interface Fact {
  text: string;
  accent: Accent;
}

export interface Project {
  id: string;
  title: string;
  theme: "mint" | "berry";
  stack: string[];
  summary: string[];
  liveUrl: string;
  sourceUrl: string;
  factsTitle: string;
  facts: Fact[];
  flowTitle: string;
  flow: FlowStep[];
  endpoints: Endpoint[];
  nextSteps: string[];
}

export interface SkillGroup {
  name: string;
  accent: Accent;
  items: { name: string; primary?: boolean }[];
}

export interface Credential {
  when: string;
  title: string;
  detail: string;
  accent: Accent;
  link?: Link;
}
