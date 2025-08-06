import React from "react";
import Image from "next/image";
import {
  Brain,
  Code,
  Building2,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/app/data/education";
import { skillsData } from "@/app/data/skillsData"
import SkillsCard from "./SkillsCard";

const AboutDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-20" >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/ip.jpeg"
                alt="Srihas"
                fill
                sizes="192px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Srihas Challa</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Full-Stack Developer & AI/ML Explorer
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" /> Web Developer
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" /> AI/ML Enthusiast
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <ShieldCheck className="w-3 h-3 mr-2" /> Linux Customization Enthusiast
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20" >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a developer who enjoys building useful and creative tech. My journey began in full-stack web development with a focus on clean UI and responsive design using React, Next.js, and Tailwind CSS. Over time, I grew more confident with backend tools like Node.js, Express, MongoDB, and Supabase.
              </p>
              <p>
                Recently, I&apos;ve been actively working on AI and machine learning—building hands-on projects that combine web development with AI-powered features. I&apos;m using tools like NumPy, scikit-learn, and transformer-based models to experiment with tasks like document summarization and retrieval-augmented generation (RAG).
              </p>
              <p>
                I also enjoy customizing my Linux environment and using the command line in my development workflow. I&apos;m always open to learning new things and aim to build meaningful projects that connect web and AI.
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-20" >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <SkillsCard
              key={index}
              title={skill.title}
              icon={skill.icon}
              skills={skill.skills}
              />
            ))}
          </div>
        </div>

        <div className="mb-20" >
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
            {education.map((ed, index) => (
                <div key={index} className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{ed.school}</h3>
                      <p className="text-muted-foreground">{ed.degree}</p>
                    </div>
                    <div className="text-right mt-1 md:mt-0">
                      <p className="text-sm text-muted-foreground">
                        {ed.startDate} - {ed.endDate}
                      </p>
                      {ed.cgpa && (
                          <p className="text-sm font-medium text-primary">
                              CGPA: {ed.cgpa}
                          </p>
                      )}
                      {ed.grade && (
                          <p className="text-sm font-medium text-primary">
                              Grade: {ed.grade}
                          </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;