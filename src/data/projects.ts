export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "bikematch-pro",
    title: "BikeMatch Pro",
    shortDesc: "A motorcycle recommendation and discovery platform.",
    problem: "Enthusiasts struggle to filter, compare, and discover motorcycles tailored to specific technical needs and riding styles.",
    solution: "A robust platform that aggregates data, allowing comprehensive search, filtering, and comparison to deliver personalized recommendations.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MongoDB", "MySQL", "React", "Tailwind CSS"],
    keyFeatures: [
      "Advanced filtering engine",
      "Side-by-side vehicle comparison",
      "Algorithm-based recommendation system",
      "High-performance REST API backend"
    ],
    githubUrl: "https://github.com/maharajan-p/bikematch-pro", // Placeholder
  },
  {
    id: "talentai",
    title: "TalentAI",
    shortDesc: "AI-powered job portal concept.",
    status: "Concept / Prototype",
    problem: "Traditional job portals rely on exact keyword matches, missing nuanced skill similarities between resumes and job descriptions.",
    solution: "An intelligent job portal prototype that parses resumes using AI to detect underlying skills and recommend highly relevant roles.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "React", "AI Integration"],
    keyFeatures: [
      "AI-powered resume parsing",
      "Semantic skill detection",
      "Role matching algorithm",
      "Role-based authentication & analytics"
    ],
    githubUrl: "https://github.com/maharajan-p/talentai", // Placeholder
  }
];
