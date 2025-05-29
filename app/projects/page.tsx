import { projectsData } from "@/app/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="container py-12 mt-16">
      <div className="mx-auto max-w-[58rem] space-y-6">
        <h1 className="font-heading text-4xl font-bold md:text-6xl">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of projects showcasing my work.
        </p>
      </div>
      <div className="mt-16">
        <div className="space-y-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
