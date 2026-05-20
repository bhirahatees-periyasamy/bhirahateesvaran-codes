export const profile = {
  name: "Bhirahateesvaran Periyasamy",
  handle: "bhirahateesvaran",
  pronouns: "He/Him",
  headline: "Junior Software Developer @ Grids and Guides",
  focus: "Agentic AI · Scalable Systems · Low-level Programming",
  location: "Chennai, India",
  email: "bhirahateesvaran@gridsandguides.com",
  linkedin: "https://www.linkedin.com/in/bhirahateesvaran-periyasamy-47aa14256",
  about: [
    "Software developer building scalable systems and exploring low-level programming.",
    "Curious about how software works beneath the surface — clean, efficient, reliable code.",
    "Hands-on learner: backend systems, automation tools, system-level components, and AI agents for workflow automation.",
    "Currently exploring hardware/IoT to understand how software meets physical systems. Interested in system design, distributed systems, and emerging tech.",
  ],
  experience: [
    {
      role: "Junior Software Developer",
      company: "Grids and Guides",
      type: "Full-time · On-site",
      period: "Mar 2025 — Present",
      location: "Chennai, India",
      stack: ["TypeScript", "AWS", "Agentic AI", "Node.js"],
      highlights: [
        "Building agentic AI systems for workflow automation and structured task execution.",
        "Designing scalable backends and integrating cloud services on AWS.",
      ],
    },
    {
      role: "Software Developer",
      company: "JarvisLabs.ai",
      type: "Full-time · On-site",
      period: "Nov 2023 — Oct 2024",
      location: "Coimbatore, India",
      stack: ["React.js", "Python", "SQLAlchemy", "Postgres"],
      highlights: [
        "Built features across the GPU cloud product surface and internal tooling.",
        "Owned data-layer work with SQLAlchemy and React-driven dashboards.",
      ],
    },
    {
      role: "Trainee",
      company: "Freshworks STS Software Academy",
      type: "Apprenticeship",
      period: "Sep 2022 — Nov 2023",
      location: "Chennai, India",
      stack: ["React.js", "CSS", "JavaScript", "Fundamentals"],
      highlights: [
        "Intensive training across full-stack web fundamentals and modern frontend.",
        "Shipped multiple practice projects under engineering mentorship.",
      ],
    },
  ],
  education: [
    {
      school: "Manipal University Jaipur",
      degree: "Bachelor of Computer Applications",
      field: "Computer Applications",
      period: "Aug 2025 — Present",
    },
  ],
  certifications: [
    { name: "AWS Certifications", issuer: "Grids and Guides", date: "Dec 2025", id: "dc2206bb2bb448ef8e30058c227f9436" },
    { name: "MySQL Intermediate", issuer: "HackerRank", date: "Sep 2023", id: "77CA92853B5D" },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    learning: ["Rust (beginner)", "Go (beginner)"],
    frameworks: ["React", "Remix", "Node.js", "SQLAlchemy"],
    cloud: ["AWS", "Linux", "Docker"],
    domains: ["Agentic AI", "Automation", "System Design", "Distributed Systems"],
    databases: ["PostgreSQL", "MySQL"],
  },
};

export type Profile = typeof profile;
