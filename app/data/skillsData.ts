import { LucideIcon } from "lucide-react";
import { Code, MonitorSmartphone, Brain, Settings } from "lucide-react";

interface SkillCategory {
    icon: LucideIcon;
    title: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    skills: [
      "HTML & CSS",
      "TailwindCSS",
      "React.js",
      "Next.js",
      "ShadCN",
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: [
      "scikit-learn",
      "Neural Networks",
      "Retrieval-Augmented Generation (RAG)",
      "Hugging Face",
      "LLMs",
      "Chromadb",
      "LangChain",
    ],
  },
  {
    icon: Settings,
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "Linux / CLI",
      "Figma",
      "Postman",
      "Docker",
      "FastAPI",
      "PyTorch",
    ],
  },
];


