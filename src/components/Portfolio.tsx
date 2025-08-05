import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ProfileSection from "./ProfileSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import TabNavigation from "./TabNavigation";
import { projects } from "../utils/projects";
import { experience } from "../utils/experience";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } p-4 md:p-6 lg:p-8`}
    >
      <div
        className={`lg:h-[calc(100vh-64px)] ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } rounded-lg border ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        } lg:overflow-hidden`}
      >
        <div className="h-full">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <ProfileSection
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
            <TabNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isDarkMode={isDarkMode}
            />
            <div>
              {activeTab === "projects" && (
                <ProjectsSection isDarkMode={isDarkMode} projects={projects} />
              )}
              {activeTab === "experience" && (
                <ExperienceSection
                  isDarkMode={isDarkMode}
                  experience={experience}
                />
              )}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:h-full">
            {/* Left Section - Profile */}
            <div className="lg:col-span-2 lg:h-full lg:overflow-hidden">
              <ProfileSection
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </div>

            {/* Right Section - Projects/Experience */}
            <div className="lg:col-span-3 lg:h-full lg:flex lg:flex-col overflow-auto">
              {/* Tab Navigation */}
              <div className="lg:flex-shrink-0">
                <TabNavigation
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  isDarkMode={isDarkMode}
                />
              </div>

              {/* Content Area */}
              <div className="lg:flex-1 lg:overflow-hidden">
                {activeTab === "projects" && (
                  <ProjectsSection
                    isDarkMode={isDarkMode}
                    projects={projects}
                  />
                )}
                {activeTab === "experience" && (
                  <ExperienceSection
                    isDarkMode={isDarkMode}
                    experience={experience}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        className={`fixed bottom-6 right-6 ${
          isDarkMode
            ? "bg-white text-gray-900 hover:bg-gray-100"
            : "bg-gray-900 text-white hover:bg-gray-800"
        } p-4 rounded-full shadow-lg transition-colors`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Portfolio;
