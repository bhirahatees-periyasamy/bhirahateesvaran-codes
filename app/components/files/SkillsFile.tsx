import { profile } from "~/data/profile";
import { Code, L } from "./Code";

export function SkillsFile() {
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
