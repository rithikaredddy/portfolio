import type { Endpoint } from "../types";

const methodStyles: Record<Endpoint["method"], string> = {
  GET: "bg-mint-soft text-mint",
  POST: "bg-cobalt-soft text-cobalt",
  PUT: "bg-sun-soft text-sun",
  DELETE: "bg-berry-soft text-berry",
};

export function ApiTable({ endpoints }: { endpoints: Endpoint[] }) {
  return (
    <ul className="m-0 list-none overflow-hidden rounded-[14px] border border-line bg-white p-0">
      {endpoints.map((ep) => (
        <li
          key={`${ep.method} ${ep.path}`}
          className="grid grid-cols-[56px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 border-t border-line px-3.5 py-3 first:border-t-0 sm:grid-cols-[64px_minmax(0,1.1fr)_minmax(0,1fr)] sm:gap-3.5 sm:px-4 sm:py-[11px]"
        >
          <span className={`rounded-md py-[3px] text-center font-mono text-xs font-medium ${methodStyles[ep.method]}`}>
            {ep.method}
          </span>
          <span className="break-all font-mono text-[13.5px]">{ep.path}</span>
          <span className="col-start-2 text-sm text-muted sm:col-start-auto sm:text-[14.5px]">
            {ep.description}
            {ep.requiresLogin && (
              <span className="ml-1.5 whitespace-nowrap rounded-full bg-sun-soft px-2 py-px text-xs font-semibold text-sun">login</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
