import { profile } from "~/data/profile";
import { Code, L } from "./Code";

export function CertsFile() {
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
