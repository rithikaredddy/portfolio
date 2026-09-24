import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/scroll";

const TOTAL_TESTS = 8;

/**
 * Hero illustration of the Online Judge: hidden tests pass one by one,
 * then the submission is marked Accepted.
 */
export function VerdictCard() {
  const [passed, setPassed] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPassed(TOTAL_TESTS);
      return;
    }
    let timer: number;
    const tick = (count: number) => {
      setPassed(count);
      if (count < TOTAL_TESTS) timer = window.setTimeout(() => tick(count + 1), 220);
    };
    timer = window.setTimeout(() => tick(1), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const done = passed === TOTAL_TESTS;

  return (
    <figure className="m-0 w-full max-w-[520px] lg:max-w-none">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_48px_-28px_rgba(26,34,51,.35),0_2px_6px_rgba(26,34,51,.04)]">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="font-mono text-[13.5px]">two_sum.py</span>
          <span className="rounded-full bg-sun-soft px-2.5 py-0.5 text-[12.5px] font-semibold text-sun">Python</span>
        </div>

        <pre className="m-0 overflow-x-auto bg-[#fafbfe] px-[18px] py-4 font-mono text-[13px] leading-[1.7] sm:text-[13.5px]">
          <code>
            <K>def</K> <F>two_sum</F>(nums, target):{"\n"}
            {"    "}seen = {"{}"}{"\n"}
            {"    "}<K>for</K> i, n <K>in</K> <F>enumerate</F>(nums):{"\n"}
            {"        "}<K>if</K> target - n <K>in</K> seen:{"\n"}
            {"            "}<K>return</K> [seen[target - n], i]{"\n"}
            {"        "}seen[n] = i{"\n"}
            {"    "}<K>return</K> []  <span className="text-[#8a93a5]"># no pair found</span>
          </code>
        </pre>

        <div className="border-t border-line px-4 pb-4 pt-3.5">
          <div className="mb-3 flex gap-1.5" aria-hidden="true">
            {Array.from({ length: TOTAL_TESTS }, (_, i) => (
              <span
                key={i}
                className={`h-2 flex-1 rounded transition-colors duration-300 ${i < passed ? "bg-mint" : "bg-line"}`}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2.5 text-sm text-muted" aria-live="polite">
            <span>{passed === 0 ? "Running hidden tests" : `${passed} of ${TOTAL_TESTS} tests passed`}</span>
            <span
              className={`rounded-full px-3 py-1 text-[14.5px] font-bold ${
                done ? "bg-mint-soft text-mint" : "bg-sun-soft text-sun"
              }`}
            >
              {done ? "Accepted" : "Judging"}
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mx-1 mt-3 text-sm leading-normal text-muted">
        How my online judge reports a submission: each hidden test case, then a verdict.
      </figcaption>
    </figure>
  );
}

function K({ children }: { children: string }) {
  return <span className="text-violet">{children}</span>;
}

function F({ children }: { children: string }) {
  return <span className="text-cobalt">{children}</span>;
}
