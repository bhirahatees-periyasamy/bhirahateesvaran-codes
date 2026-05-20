import { profile } from "~/data/profile";

export function Hero() {
  return (
    <header className="relative rounded-md border border-ink-rule bg-ink-panel/60 px-5 py-6 md:px-8 md:py-10 paper-grid overflow-hidden ink-shadow">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="stamp">open · to · build</span>
            <span className="text-ink-muted text-xs">// {profile.location}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl leading-tight text-ink-paper animate-fade-up">
            <span className="text-warm-ochre">$</span> hello, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="text-warm-terracotta">{profile.name.split(" ")[0]}</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-warm-rust/60 origin-left animate-underline-grow" />
            </span>
            <span className="text-ink-text animate-caret inline-block ml-1">_</span>
          </h1>
          <p className="mt-4 text-ink-dim text-sm md:text-base">
            <span className="cm">/*</span> {profile.headline} <span className="cm">*/</span>
          </p>
          <p className="mt-2 text-warm-moss text-sm">
            <span className="text-ink-muted">focus →</span> {profile.focus}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {["typed · pragmatic", "backend · systems", "ai · agents", "learning rust · go"].map((t, i) => (
              <span key={t} style={{ animationDelay: `${i * 90 + 200}ms` }} className="animate-fade-up">
                <Pill>{t}</Pill>
              </span>
            ))}
          </div>

          <Marquee />
        </div>

        {/* Right: terminal card */}
        <div className="w-full md:w-[360px] shrink-0 rounded-md border border-ink-rule bg-ink-bg/80 animate-flicker hover:-translate-y-1 hover:border-warm-ochre/50 transition-all duration-300 animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ink-rule">
            <span className="h-2.5 w-2.5 rounded-full bg-warm-rust/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warm-ochre/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warm-moss/70" />
            <span className="ml-2 text-[11px] text-ink-muted">~/bhirahatees · zsh</span>
          </div>
          <div className="px-4 py-4 text-[12.5px] leading-relaxed">
            <div><span className="text-warm-ochre">$</span> whoami</div>
            <div className="text-ink-dim">{profile.name.toLowerCase().replace(/\s+/g, "_")}</div>
            <div className="mt-2"><span className="text-warm-ochre">$</span> cat role.txt</div>
            <div className="text-ink-dim">junior software dev → agentic ai</div>
            <div className="mt-2"><span className="text-warm-ochre">$</span> ls skills/</div>
            <div className="text-ink-dim">typescript  python  aws  react  sql</div>
            <div className="text-warm-moss">rust*  go*  <span className="cm">// learning</span></div>
            <div className="mt-2 flex items-center">
              <span className="text-warm-ochre">$</span>
              <span className="ml-2 inline-block h-4 w-2 bg-ink-text animate-caret" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Marquee() {
  const items = [
    "typescript", "python", "aws", "react", "remix", "node.js", "sqlalchemy",
    "postgres", "linux", "docker", "agentic ai", "rust*", "go*", "systems",
  ];
  const row = [...items, ...items];
  return (
    <div className="mt-6 relative overflow-hidden border-y border-ink-rule py-2">
      <div className="flex gap-6 whitespace-nowrap animate-marquee w-[200%]">
        {row.map((s, i) => (
          <span key={i} className="text-xs text-ink-dim">
            <span className="text-warm-rust mr-1">◆</span>
            <span className={s.endsWith("*") ? "text-warm-terracotta" : ""}>{s}</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-panel to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-panel to-transparent" />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 rounded-sm border border-ink-rule bg-ink-bg/60 text-ink-dim hover:text-warm-ochre hover:border-warm-ochre/50 transition-colors">
      {children}
    </span>
  );
}
