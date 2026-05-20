export type FileKey =
  | "about.md"
  | "experience.json"
  | "skills.ts"
  | "education.yml"
  | "certs.log"
  | "contact.sh";

export const FILES: { key: FileKey; icon: string; label: string }[] = [
  { key: "about.md", icon: "✶", label: "about.md" },
  { key: "experience.json", icon: "{}", label: "experience.json" },
  { key: "skills.ts", icon: "λ", label: "skills.ts" },
  { key: "education.yml", icon: "≡", label: "education.yml" },
  { key: "certs.log", icon: "✓", label: "certs.log" },
  { key: "contact.sh", icon: "$", label: "contact.sh" },
];
