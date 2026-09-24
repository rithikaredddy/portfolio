import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "mint" | "berry" | "inverse" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "border-transparent bg-cobalt text-white shadow-[0_6px_18px_-8px_rgba(47,91,234,.7)]",
  mint: "border-transparent bg-mint text-white shadow-[0_6px_18px_-8px_rgba(14,140,104,.7)]",
  berry: "border-transparent bg-berry text-white shadow-[0_6px_18px_-8px_rgba(200,53,107,.7)]",
  ghost: "border-line bg-white text-ink hover:border-ink",
  inverse: "border-transparent bg-white text-cobalt",
  "outline-light": "border-white/50 text-white hover:border-white",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  return (
    
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] px-[18px] py-[11px] text-[15.5px] font-semibold no-underline transition hover:-translate-y-px ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
