import type { FileKey } from "~/lib/files";
import { AboutFile } from "./files/AboutFile";
import { ExperienceFile } from "./files/ExperienceFile";
import { SkillsFile } from "./files/SkillsFile";
import { EducationFile } from "./files/EducationFile";
import { CertsFile } from "./files/CertsFile";
import { ContactFile } from "./files/ContactFile";

export function FileView({ file }: { file: FileKey }) {
  return (
    <div key={file} className="flex-1 bg-ink-panel text-sm overflow-auto animate-fade-up">
      {file === "about.md" && <AboutFile />}
      {file === "experience.json" && <ExperienceFile />}
      {file === "skills.ts" && <SkillsFile />}
      {file === "education.yml" && <EducationFile />}
      {file === "certs.log" && <CertsFile />}
      {file === "contact.sh" && <ContactFile />}
    </div>
  );
}
