import { Github, Globe, Linkedin, Play } from "lucide-react";
import type { ProjectsSectionProps } from "../utils/types";

const ProjectsSection = ({ isDarkMode, projects }: ProjectsSectionProps) => {
  return (
    <div className="p-8 h-full overflow-y-auto">
      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border ${
              isDarkMode ? "border-zinc-700" : "border-gray-200"
            } rounded-lg p-6 ${isDarkMode ? "bg-black" : "bg-white"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3
                  className={`text-xl font-semibold mb-1 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                  <span
                    className={`text-sm font-normal ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } ml-3`}
                  >
                    {project.date}
                  </span>
                </h3>
                <p
                  className={`mt-3 leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                {project.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`${
                          isDarkMode
                            ? "bg-zinc-800 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        } text-xs font-medium px-2.5 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-4">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-500 hover:text-gray-900"
                      } transition-colors`}
                      title="Visit Website"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-500 hover:text-gray-900"
                      } transition-colors`}
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-500 hover:text-gray-900"
                      } transition-colors`}
                      title="View Demo"
                    >
                      <Play className="w-5 h-5" />
                    </a>
                  )}
                  {project.links.linkedin && (
                    <a
                      href={project.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-500 hover:text-gray-900"
                      } transition-colors`}
                      title="View on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="md:col-span-1">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover object-left rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
