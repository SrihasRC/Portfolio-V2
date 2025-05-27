import React from 'react'
import { Badge } from '../ui/badge'
import { GraduationCap, LucideArrowRight, LucideSparkles } from 'lucide-react'
import { skillsData } from '@/app/data/skillsData'
import SkillsCard from '../SkillsCard'
import { Button } from '../ui/button'
import Link from 'next/link'

const AboutPreview = () => {
  return (
    <section className="py-18 mt-2 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className='absolute left-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10'></div>
        </div>
        <div className="container mx-auto px-4">
            <div className="text-center mb-20 relative">
                <Badge variant="outline" className="mb-4 px-2 py-1">
                    <span><LucideSparkles className='w-4 h-4'/></span>
                    About Me
                </Badge>
                <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                    Building Web, Learning AI
                </h2>
                <p className="text-lg max-w-2xl text-muted-foreground mx-auto">
                    I&apos;m a developer exploring AI/ML and backend development. I enjoy building clean web apps and learning about cybersecurity along the way.
                </p>
            </div>
            <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
                <div className="rounded-xl border bg-card text-card-foreground shadow lg:col-span-2 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <GraduationCap />
                        </div>
                        <h3 className="text-2xl font-semibold">Background</h3>
                    </div>
                    <p className="text-muted-foreground">
                        I enjoy exploring different tech fields and building projects that interest me. I started with web development and build modern web apps using React, Next.js, and Node.js. Along the way, I&apos;ve worked on backend basics like databases and APIs, and I&apos;m comfortable with Linux and the command line. Currently, I&apos;m diving deeper into AI/ML concepts like neural networks and machine learning fundamentals to expand my skills and create innovative projects.
                    </p>
                </div>
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
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
            <div className="text-center relative z-10">
                <Button asChild variant="default" size="lg">
                    <Link href="/contact" className='group flex items-center justify-center gap-1'>
                        Learn More About Me
                        <LucideArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default AboutPreview
