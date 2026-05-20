import { profile } from "~/data/profile";

export function Footer() {
  return (
    <footer className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-muted px-2">
      <div>
        <span className="cm">// hand-built with</span>{" "}
        <span className="text-warm-ochre">remix</span> ·{" "}
        <span className="text-warm-moss">typescript</span> ·{" "}
        <span className="text-warm-terracotta">tailwind</span>
      </div>
      <div>© {new Date().getFullYear()} {profile.name}</div>
    </footer>
  );
}
