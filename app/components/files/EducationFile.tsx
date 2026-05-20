import { profile } from "~/data/profile";
import { Code, L } from "./Code";

export function EducationFile() {
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
