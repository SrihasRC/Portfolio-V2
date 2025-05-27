import { LucideIcon } from "lucide-react";
import { Code, MonitorSmartphone, Brain } from "lucide-react";

interface SkillCategory {
    icon: LucideIcon;
    title: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "C/C++", "Java", "JavaScript", "TypeScript", "SQL",],
  },
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    skills: [
      "HTML & CSS",
      "TailwindCSS",
      "React.js",
      "Next.js",
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
      "scikit-learn",
      "ML Fundamentals",
      "Regression",
      "Classification",
      "Neural Networks",
    ],
  },
];

