import type { FileKey } from "~/lib/files";

export function StatusBar({ file }: { file: FileKey }) {
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
