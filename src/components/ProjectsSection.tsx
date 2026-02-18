import { Github, Globe, Linkedin, Play } from "lucide-react";
import type { Project } from "../utils/types";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="p-6 lg:p-8 h-full overflow-y-auto">
      <div className="space-y-3">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="group border border-edge rounded-lg p-5 bg-surface hover:border-muted transition-colors animate-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-base font-semibold text-primary">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {project.date}
                  </span>
                </div>
                <p className="text-sm text-secondary leading-relaxed mb-3">
                  {project.description}
                </p>
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="font-mono bg-raised text-muted text-[11px] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-muted hover:text-primary hover:bg-raised transition-all"
                      title="Website"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-muted hover:text-primary hover:bg-raised transition-all"
                      title="Source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-muted hover:text-primary hover:bg-raised transition-all"
                      title="Demo"
                    >
                      <Play className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.linkedin && (
                    <a
                      href={project.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-muted hover:text-primary hover:bg-raised transition-all"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="md:col-span-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover object-left rounded border border-edge"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
