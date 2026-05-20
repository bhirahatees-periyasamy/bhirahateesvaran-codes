import { profile } from "~/data/profile";
import { Code, L } from "./Code";

export function ContactFile() {
  return (
    <Code>
      <L n={1}><span className="cm">#!/bin/sh</span></L>
      <L n={2}><span className="cm"># reach me — i reply when i can</span></L>
      <L n={3}>{" "}</L>
      <L n={4}><span className="kw">EMAIL</span>=<span className="str">&quot;{profile.email}&quot;</span></L>
      <L n={5}><span className="kw">LINKEDIN</span>=<span className="str">&quot;{profile.linkedin}&quot;</span></L>
      <L n={6}><span className="kw">LOCATION</span>=<span className="str">&quot;{profile.location}&quot;</span></L>
      <L n={7}>{" "}</L>
      <L n={8}><span className="fn">contact</span>() {"{"}</L>
      <L n={9}>{"  "}<span className="kw">echo</span> <span className="str">&quot;hi, i&apos;m open to building useful things.&quot;</span></L>
      <L n={10}>{"}"}</L>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 px-4 py-2 border border-warm-ochre/60 text-warm-ochre hover:bg-warm-ochre hover:text-ink-bg transition-colors rounded-sm">
          <span>→</span> send mail
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-4 py-2 border border-warm-moss/60 text-warm-moss hover:bg-warm-moss hover:text-ink-bg transition-colors rounded-sm">
          <span>↗</span> linkedin
        </a>
      </div>
    </Code>
  );
}
