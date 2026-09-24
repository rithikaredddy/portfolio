import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  tinted?: boolean;
  className?: string;
  children: ReactNode;
}

export function Section({ id, title, subtitle, tinted = false, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 lg:py-24 ${tinted ? "bg-wash" : ""} ${className}`}>
      <div className="mx-auto w-full max-w-[1120px] px-[18px] sm:px-8 lg:px-10">
        {title && (
          <div className="mb-7 max-w-[640px] sm:mb-11">
            <h2 className="mb-2.5 text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
              {title}
            </h2>
            {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
