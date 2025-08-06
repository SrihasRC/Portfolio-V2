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
      "NumPy",
      "pandas",
      "scikit-learn",
      "Regression",
      "Classification",
      "Neural Networks",
      "Text Embeddings",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Transformers",
      "Hugging Face",
      "LLMs",
      "T5 / FLAN-T5",
    ],
  },
  {
    icon: Settings,
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "Linux / CLI",
      "VS Code",
      "Figma",
      "Postman",
      "FastAPI",
      "Vercel",
      "Docker",
      "LangChain",
      "Vector Databases",
    ],
  },
];


