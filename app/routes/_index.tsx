import { useState } from "react";
import { profile } from "~/data/profile";

type FileKey = "about.md" | "experience.json" | "skills.ts" | "education.yml" | "certs.log" | "contact.sh";

const FILES: { key: FileKey; icon: string; label: string }[] = [
  { key: "about.md", icon: "✶", label: "about.md" },
  { key: "experience.json", icon: "{}", label: "experience.json" },
  { key: "skills.ts", icon: "λ", label: "skills.ts" },
  { key: "education.yml", icon: "≡", label: "education.yml" },
  { key: "certs.log", icon: "✓", label: "certs.log" },
  { key: "contact.sh", icon: "$", label: "contact.sh" },
];

export default function Index() {
  const [active, setActive] = useState<FileKey>("about.md");
  const [openTabs, setOpenTabs] = useState<FileKey[]>(["about.md"]);

  const open = (key: FileKey) => {
    setActive(key);
    setOpenTabs((t) => (t.includes(key) ? t : [...t, key]));
  };

  return (
    <div className="min-h-screen bg-ink-bg text-ink-text font-mono relative overflow-hidden">
      {/* CRT scanline overlay */}
      <div className="crt-scan fixed inset-0 z-50 opacity-40" />

      {/* Soft warm vignettes — distinct from typical AI cyan glow */}
      <div className="pointer-events-none fixed -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-warm-rust/10 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-warm-moss/10 blur-3xl" />
      <div className="pointer-events-none fixed top-1/3 left-1/2 h-[300px] w-[300px] rounded-full bg-warm-ochre/[0.06] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] p-3 md:p-6">
        <Hero />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 ink-shadow rounded-md overflow-hidden border border-ink-rule bg-ink-panel">
          <Sidebar active={active} onOpen={open} />
          <div className="flex flex-col min-h-[640px]">
            <Tabs tabs={openTabs} active={active} setActive={setActive} onClose={(k) => {
              setOpenTabs((t) => {
                const next = t.filter((x) => x !== k);
                if (active === k && next.length) setActive(next[next.length - 1]);
                return next.length ? next : [FILES[0].key];
              });
              if (openTabs.filter((x) => x !== k).length === 0) setActive(FILES[0].key);
            }} />
            <FileView file={active} />
            <StatusBar file={active} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
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

/* ───────────────────────── Sidebar ───────────────────────── */

function Sidebar({ active, onOpen }: { active: FileKey; onOpen: (k: FileKey) => void }) {
  return (
    <aside className="bg-ink-sidebar border-r border-ink-rule px-2 py-3 text-sm">
      <div className="px-2 py-1 text-[10px] uppercase tracking-widest text-ink-muted">Explorer</div>
      <div className="px-2 py-1 text-ink-dim text-xs flex items-center gap-1">
        <span className="text-warm-ochre">▾</span> portfolio
      </div>
      <ul className="mt-1 space-y-[2px]">
        {FILES.map((f, i) => {
          const isActive = active === f.key;
          return (
            <li key={f.key} className="animate-slide-in" style={{ animationDelay: `${i * 60 + 100}ms` }}>
              <button
                onClick={() => onOpen(f.key)}
                className={
                  "group w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-sm transition-all duration-200 " +
                  (isActive
                    ? "bg-ink-line text-ink-paper border-l-2 border-warm-ochre"
                    : "text-ink-dim hover:bg-ink-line/60 hover:text-ink-paper hover:translate-x-0.5 border-l-2 border-transparent hover:border-warm-terracotta/40")
                }
              >
                <span className={"w-4 text-center transition-transform " + (isActive ? "text-warm-ochre scale-110" : "text-warm-terracotta/80 group-hover:scale-110")}>{f.icon}</span>
                <span className="truncate">{f.label}</span>
                {isActive && <span className="ml-auto text-[10px] text-warm-ochre animate-caret">●</span>}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 px-2 py-1 text-[10px] uppercase tracking-widest text-ink-muted">Outline</div>
      <ul className="mt-1 space-y-[2px] text-xs text-ink-dim px-2">
        <li>• systems</li>
        <li>• ai · agents</li>
        <li>• backend</li>
        <li>• tooling</li>
      </ul>
    </aside>
  );
}

/* ───────────────────────── Tabs ───────────────────────── */

function Tabs({
  tabs,
  active,
  setActive,
  onClose,
}: {
  tabs: FileKey[];
  active: FileKey;
  setActive: (k: FileKey) => void;
  onClose: (k: FileKey) => void;
}) {
  return (
    <div className="flex items-center bg-ink-sidebar border-b border-ink-rule overflow-x-auto">
      {tabs.map((t) => {
        const isActive = t === active;
        return (
          <div
            key={t}
            className={
              "flex items-center gap-2 px-3 py-2 text-xs cursor-pointer border-r border-ink-rule " +
              (isActive
                ? "bg-ink-panel text-ink-paper border-t-2 border-t-warm-ochre"
                : "text-ink-dim hover:text-ink-paper border-t-2 border-t-transparent")
            }
            onClick={() => setActive(t)}
          >
            <span>{t}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(t);
              }}
              className="text-ink-muted hover:text-warm-rust"
              aria-label={`close ${t}`}
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}

/* ───────────────────────── File views ───────────────────────── */

function FileView({ file }: { file: FileKey }) {
  return (
    <div key={file} className="flex-1 bg-ink-panel text-sm overflow-auto animate-fade-up">
      {file === "about.md" && <AboutFile />}
      {file === "experience.json" && <ExperienceFile />}
      {file === "skills.ts" && <SkillsFile />}
      {file === "education.yml" && <EducationFile />}
      {file === "certs.log" && <CertsFile />}
      {file === "contact.sh" && <ContactFile />}
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="px-4 md:px-8 py-6 text-[13.5px] leading-7 whitespace-pre-wrap break-words">
      {children}
    </pre>
  );
}

function L({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[3rem_1fr]">
      <span className="line-number">{n}</span>
      <span>{children}</span>
    </div>
  );
}

function AboutFile() {
  return (
    <Code>
      <L n={1}><span className="tg"># {profile.name}</span></L>
      <L n={2}><span className="cm">&gt; {profile.headline}</span></L>
      <L n={3}>{" "}</L>
      {profile.about.map((line, i) => (
        <L key={i} n={4 + i}>{line}</L>
      ))}
      <L n={4 + profile.about.length}>{" "}</L>
      <L n={5 + profile.about.length}>
        <span className="tg">## </span><span className="vr">what I&apos;m optimizing for</span>
      </L>
      <L n={6 + profile.about.length}>- clarity over cleverness</L>
      <L n={7 + profile.about.length}>- depth over surface — going one layer below the abstraction</L>
      <L n={8 + profile.about.length}>- shipping reliable software, not demos</L>
    </Code>
  );
}

function ExperienceFile() {
  return (
    <Code>
      <L n={1}><span className="kw">const</span> <span className="vr">experience</span> = [</L>
      {profile.experience.map((e, idx) => {
        const base = 2 + idx * 9;
        return (
          <div key={e.company}>
            <L n={base}>{"  "}{"{"}</L>
            <L n={base + 1}>{"    "}<span className="fn">role</span>: <span className="str">&quot;{e.role}&quot;</span>,</L>
            <L n={base + 2}>{"    "}<span className="fn">company</span>: <span className="str">&quot;{e.company}&quot;</span>,</L>
            <L n={base + 3}>{"    "}<span className="fn">period</span>: <span className="str">&quot;{e.period}&quot;</span>, <span className="cm">// {e.type}</span></L>
            <L n={base + 4}>{"    "}<span className="fn">location</span>: <span className="str">&quot;{e.location}&quot;</span>,</L>
            <L n={base + 5}>{"    "}<span className="fn">stack</span>: [{e.stack.map((s, i) => (
              <span key={s}>
                <span className="str">&quot;{s}&quot;</span>{i < e.stack.length - 1 ? ", " : ""}
              </span>
            ))}],</L>
            <L n={base + 6}>{"    "}<span className="fn">highlights</span>: [</L>
            {e.highlights.map((h, i) => (
              <L key={i} n={base + 7 + i}>{"      "}<span className="str">&quot;{h}&quot;</span>,</L>
            ))}
            <L n={base + 7 + e.highlights.length}>{"    "}],</L>
            <L n={base + 8 + e.highlights.length}>{"  "}{"}"},</L>
          </div>
        );
      })}
      <L n={99}>];</L>
    </Code>
  );
}

function SkillsFile() {
  const s = profile.skills;
  return (
    <Code>
      <L n={1}><span className="cm">// rendered as a typed map — beginner tracks are explicit, not hidden</span></L>
      <L n={2}><span className="kw">export const</span> <span className="vr">skills</span> = {"{"}</L>
      <L n={3}>{"  "}<span className="fn">languages</span>: [{s.languages.map((x, i) => <span key={x}><span className="str">&quot;{x}&quot;</span>{i < s.languages.length - 1 ? ", " : ""}</span>)}],</L>
      <L n={4}>{"  "}<span className="fn">learning</span>: [{s.learning.map((x, i) => <span key={x}><span className="str">&quot;{x}&quot;</span>{i < s.learning.length - 1 ? ", " : ""}</span>)}], <span className="cm">// hands-on, not just curious</span></L>
      <L n={5}>{"  "}<span className="fn">frameworks</span>: [{s.frameworks.map((x, i) => <span key={x}><span className="str">&quot;{x}&quot;</span>{i < s.frameworks.length - 1 ? ", " : ""}</span>)}],</L>
      <L n={6}>{"  "}<span className="fn">cloud</span>: [{s.cloud.map((x, i) => <span key={x}><span className="str">&quot;{x}&quot;</span>{i < s.cloud.length - 1 ? ", " : ""}</span>)}],</L>
      <L n={7}>{"  "}<span className="fn">databases</span>: [{s.databases.map((x, i) => <span key={x}><span className="str">&quot;{x}&quot;</span>{i < s.databases.length - 1 ? ", " : ""}</span>)}],</L>
      <L n={8}>{"  "}<span className="fn">domains</span>: [{s.domains.map((x, i) => <span key={x}><span className="str">&quot;{x}&quot;</span>{i < s.domains.length - 1 ? ", " : ""}</span>)}],</L>
      <L n={9}>{"}"} <span className="kw">as const</span>;</L>
      <L n={10}>{" "}</L>
      <L n={11}><span className="cm">/* visual map */</span></L>
      {([
        ["languages", s.languages],
        ["learning", s.learning],
        ["frameworks", s.frameworks],
        ["cloud", s.cloud],
        ["databases", s.databases],
        ["domains", s.domains],
      ] as const).map(([label, list], idx) => (
        <div key={label} className="grid grid-cols-[3rem_1fr] py-1">
          <span className="line-number">{12 + idx}</span>
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-warm-ochre/90 mr-1">{label}:</span>
            {list.map((tag) => (
              <span
                key={tag}
                className={
                  "px-2 py-[2px] text-[11.5px] rounded-sm border " +
                  (label === "learning"
                    ? "border-warm-rust/60 text-warm-terracotta bg-warm-rust/5"
                    : "border-ink-rule text-ink-text bg-ink-bg/60 hover:border-warm-ochre/60 hover:text-warm-ochre")
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Code>
  );
}

function EducationFile() {
  return (
    <Code>
      <L n={1}><span className="cm"># education.yml</span></L>
      {profile.education.map((e, idx) => (
        <div key={idx}>
          <L n={2 + idx * 5}><span className="tg">- school</span>: <span className="str">{e.school}</span></L>
          <L n={3 + idx * 5}>{"  "}<span className="tg">degree</span>: <span className="str">{e.degree}</span></L>
          <L n={4 + idx * 5}>{"  "}<span className="tg">field</span>: <span className="str">{e.field}</span></L>
          <L n={5 + idx * 5}>{"  "}<span className="tg">period</span>: <span className="str">{e.period}</span></L>
          <L n={6 + idx * 5}>{" "}</L>
        </div>
      ))}
      <L n={20}><span className="cm"># also: continuous self-study — distributed systems, low-level, rust/go</span></L>
    </Code>
  );
}

function CertsFile() {
  return (
    <Code>
      <L n={1}><span className="cm">[certifications.log]</span></L>
      {profile.certifications.map((c, idx) => (
        <div key={idx}>
          <L n={2 + idx * 3}>
            <span className="text-warm-moss">[OK]</span> <span className="vr">{c.name}</span> <span className="text-ink-muted">— {c.issuer}</span>
          </L>
          <L n={3 + idx * 3}>{"     "}<span className="cm">issued: {c.date}</span></L>
          <L n={4 + idx * 3}>{"     "}<span className="cm">id: {c.id}</span></L>
        </div>
      ))}
      <L n={20}><span className="text-warm-ochre">[INFO]</span> additional certifications available on request</L>
    </Code>
  );
}

function ContactFile() {
  return (
    <Code>
      <L n={1}><span className="cm">#!/bin/sh</span></L>
      <L n={2}><span className="cm"># reach me — i reply when i can</span></L>
      <L n={3}>{" "}</L>
      <L n={4}><span className="kw">EMAIL</span>=<span className="str">&quot;{profile.email}&quot;</span></L>
      <L n={5}><span className="kw">LINKEDIN</span>=<span className="str">&quot;{profile.linkedin}&quot;</span></L>
      <L n={6}><span className="kw">LOCATION</span>=<span className="str">&quot;{profile.location}&quot;</span></L>
      <L n={7}>{" "}</L>
      <L n={8}><span className="fn">contact</span>() {"{"}</L>
      <L n={9}>{"  "}<span className="kw">echo</span> <span className="str">&quot;hi, i&apos;m open to building useful things.&quot;</span></L>
      <L n={10}>{"}"}</L>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 px-4 py-2 border border-warm-ochre/60 text-warm-ochre hover:bg-warm-ochre hover:text-ink-bg transition-colors rounded-sm">
          <span>→</span> send mail
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-4 py-2 border border-warm-moss/60 text-warm-moss hover:bg-warm-moss hover:text-ink-bg transition-colors rounded-sm">
          <span>↗</span> linkedin
        </a>
      </div>
    </Code>
  );
}

/* ───────────────────────── Status bar ───────────────────────── */

function StatusBar({ file }: { file: FileKey }) {
  const lang = file.endsWith(".md") ? "markdown" :
               file.endsWith(".json") ? "json" :
               file.endsWith(".ts") ? "typescript" :
               file.endsWith(".yml") ? "yaml" :
               file.endsWith(".log") ? "log" : "shell";
  return (
    <div className="flex items-center justify-between px-4 py-1.5 text-[11px] bg-warm-rust/90 text-ink-paper">
      <div className="flex items-center gap-4">
        <span>● main</span>
        <span>{file}</span>
        <span className="opacity-80">{lang}</span>
      </div>
      <div className="flex items-center gap-4 opacity-90">
        <span>UTF-8</span>
        <span>LF</span>
        <span>spaces: 2</span>
      </div>
    </div>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
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
