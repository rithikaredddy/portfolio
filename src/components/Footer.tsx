import { person } from "../data/profile";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1120px] px-[18px] pb-10 pt-2 text-sm text-muted sm:px-8 lg:px-10">
      © {new Date().getFullYear()} {person.name}
    </footer>
  );
}
