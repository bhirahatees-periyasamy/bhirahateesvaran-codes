import { FILES, type FileKey } from "~/lib/files";

export function Sidebar({ active, onOpen }: { active: FileKey; onOpen: (k: FileKey) => void }) {
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
