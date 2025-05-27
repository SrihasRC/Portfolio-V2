import React from 'react';
import { Badge } from './ui/badge';

type SkillsCardProps = {
    icon: React.ElementType;
    title: string;  
    skills: string[];
};

const SkillsCard = ({ title, icon: Icon, skills }: SkillsCardProps) => {
  return (
    <div className='rounded-xl border bg-card text-card-foreground shadow p-6 hover:shadow-md transition-shadow'>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className='w-6 h-6' />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="px-3 py-1">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard
