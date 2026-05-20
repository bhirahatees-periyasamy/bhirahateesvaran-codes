import { profile } from "~/data/profile";
import { Code, L } from "./Code";

export function AboutFile() {
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
