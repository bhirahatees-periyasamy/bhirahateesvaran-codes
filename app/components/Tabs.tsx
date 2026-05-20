import type { FileKey } from "~/lib/files";

export function Tabs({
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
