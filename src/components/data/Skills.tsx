import { Code, Database, Server, Wind, Paintbrush, Bot } from "lucide-react";
import type { ReactNode } from "react";
const skills: { category: string; icon: ReactNode; items: string[] }[] = [
  {
    category: "Frontend",
    icon: <Code className="h-8 w-8 text-accent" />,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Angular",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
    ],
  },
  {
    category: "Styling",
    icon: <Paintbrush className="h-8 w-8 text-accent" />,
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "CSS Modules",
      "Framer Motion",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-accent" />,
    items: ["Node.js", "Java", ".NET", "REST APIs", "GraphQL", "C#"],
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8 text-accent" />,
    items: ["SQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "AI / GenAI",
    icon: <Bot className="h-8 w-8 text-accent" />,
    items: ["Genkit", "Google AI"],
  },
  {
    category: "Tools",
    icon: <Wind className="h-8 w-8 text-accent" />,
    items: [
      "Git & GitHub",
      " Jest & Docker",
      "Vite",
      "Webpack",
      "JIRA",
      "Babel",
    ],
  },
];

export default skills;
