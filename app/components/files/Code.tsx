export function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="px-4 md:px-8 py-6 text-[13.5px] leading-7 whitespace-pre-wrap break-words">
      {children}
    </pre>
  );
}

export function L({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[3rem_1fr]">
      <span className="line-number">{n}</span>
      <span>{children}</span>
    </div>
  );
}
