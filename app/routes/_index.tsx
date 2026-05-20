import { useState } from "react";
import { FILES, type FileKey } from "~/lib/files";
import { Hero } from "~/components/Hero";
import { Sidebar } from "~/components/Sidebar";
import { Tabs } from "~/components/Tabs";
import { FileView } from "~/components/FileView";
import { StatusBar } from "~/components/StatusBar";
import { Footer } from "~/components/Footer";

export default function Index() {
  const [active, setActive] = useState<FileKey>("about.md");
  const [openTabs, setOpenTabs] = useState<FileKey[]>(["about.md"]);

  const open = (key: FileKey) => {
    setActive(key);
    setOpenTabs((t) => (t.includes(key) ? t : [...t, key]));
  };

  return (
    <div className="min-h-screen bg-ink-bg text-ink-text font-mono relative overflow-hidden">
      <div className="crt-scan fixed inset-0 z-50 opacity-40" />

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
