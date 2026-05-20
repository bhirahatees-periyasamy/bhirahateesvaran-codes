import { profile } from "~/data/profile";
import { Code, L } from "./Code";

export function ExperienceFile() {
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
