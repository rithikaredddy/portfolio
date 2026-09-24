import { Fragment } from "react";
import type { FlowStep } from "../types";
import { accentClasses } from "../lib/accents";

/** Pipeline diagram: stacks vertically on small screens, runs left to right on large ones. */
export function SystemFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="m-0 flex list-none flex-col items-stretch p-0 lg:flex-row">
      {steps.map((step, i) => (
        <Fragment key={step.title}>
          {i > 0 && (
            <li aria-hidden="true" className="flex h-7 items-center pl-6 text-arrow lg:h-auto lg:w-7 lg:shrink-0 lg:justify-center lg:pl-0">
              <svg width="18" height="18" viewBox="0 0 18 18" className="rotate-90 lg:rotate-0">
                <path d="M2 9h12M10 4.5 14.5 9 10 13.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
          )}
          <li
            className={`min-w-0 flex-1 rounded-xl border border-t-4 border-line bg-white px-3.5 py-3 text-sm leading-snug ${accentClasses[step.accent].borderTop}`}
          >
            <b className="mb-0.5 block text-[14.5px]">{step.title}</b>
            <span className="text-muted">{step.detail}</span>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
