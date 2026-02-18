import { useState, useEffect } from "react";
import ProfileSection from "./ProfileSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import TabNavigation from "./TabNavigation";
import { projects } from "../utils/projects";
import { experience } from "../utils/experience";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-base font-sans p-3 md:p-5 lg:p-6">
      <div className="lg:h-[calc(100vh-48px)] bg-surface rounded-lg border border-edge lg:overflow-hidden">
        {/* Mobile */}
        <div className="lg:hidden">
          <ProfileSection
            isDark={isDark}
            onToggleTheme={() => setIsDark(!isDark)}
          />
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "projects" && <ProjectsSection projects={projects} />}
          {activeTab === "experience" && (
            <ExperienceSection experience={experience} />
          )}
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:h-full">
          <div className="lg:col-span-2 lg:h-full lg:overflow-hidden border-r border-edge">
            <ProfileSection
              isDark={isDark}
              onToggleTheme={() => setIsDark(!isDark)}
            />
          </div>
          <div className="lg:col-span-3 lg:h-full lg:flex lg:flex-col overflow-hidden">
            <div className="shrink-0">
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div className="flex-1 min-h-0 overflow-auto">
              {activeTab === "projects" && (
                <ProjectsSection projects={projects} />
              )}
              {activeTab === "experience" && (
                <ExperienceSection experience={experience} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
