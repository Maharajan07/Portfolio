export interface SkillCategory {
  title: string;
  skills: { name: string; detail: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Java", detail: "Object-oriented programming, core libraries, performance." },
      { name: "JavaScript", detail: "ES6+, async programming, DOM manipulation." },
      { name: "SQL", detail: "Complex queries, optimization, relational design." }
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Spring Boot", detail: "Microservices, security, data JPA, MVC." },
      { name: "REST APIs", detail: "Stateless architecture, token auth, best practices." },
      { name: "Node.js", detail: "Express, event-driven architecture, API development." } // Remove if not accurate
    ]
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "React", detail: "Hooks, state management, component architecture." },
      { name: "HTML & CSS", detail: "Semantic markup, modern layout modules, responsive." }
    ]
  },
  {
    title: "DATABASE",
    skills: [
      { name: "MySQL", detail: "Schema design, indexing, transactions." },
      { name: "MongoDB", detail: "NoSQL document design, aggregations." }
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", detail: "Version control, branching strategies, collaboration." },
      { name: "Docker", detail: "Containerization, environment consistency." }
    ]
  }
];
