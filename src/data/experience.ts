export interface Experience {
  id: string;
  year: string;
  role: string;
  company: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    year: "2024",
    role: "Full-Stack Developer Intern",
    company: "Company Name Placeholder", // REPLACE WITH REAL DATA
    description: "Developed and maintained full-stack web applications using React and Spring Boot. Improved backend API performance and integrated new features.",
  },
  {
    id: "exp-2",
    year: "2023",
    role: "Software Engineering Student",
    company: "University Name Placeholder", // REPLACE WITH REAL DATA
    description: "Completed rigorous coursework in data structures, algorithms, database management, and software architecture. Built foundational projects in Java and web technologies.",
  }
];
