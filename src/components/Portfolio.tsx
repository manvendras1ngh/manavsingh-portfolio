import { useState, useEffect, useCallback } from "react";
import ProfileSection from "./ProfileSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";
import CommandPalette from "./CommandPalette";
import ShortcutsOverlay from "./ShortcutsOverlay";
import useKeyboardShortcuts from "../hooks/useKeyboardShortcuts";
import { projects } from "../utils/projects";
import { experience } from "../utils/experience";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Console Easter Egg
  useEffect(() => {
    console.log(
      `%cHey there! 👀
%cIf you're reading this, you probably know your way around DevTools.
%cLet's talk → hello@manavsingh.in
Source   → github.com/manvendras1ngh`,
      "font-size: 16px; font-weight: bold; color: #10b981;",
      "font-size: 12px; color: inherit;",
      "font-size: 12px; color: #a1a1aa;",
    );
  }, []);

  const toggleTheme = useCallback(() => setIsDark((d) => !d), []);
  const toggleShortcuts = useCallback(() => setShowShortcuts((s) => !s), []);

  useKeyboardShortcuts({
    onNavigate: setActiveTab,
    onToggleTheme: toggleTheme,
    onToggleShortcuts: toggleShortcuts,
    isCommandPaletteOpen,
  });

  const tabContent: Record<string, React.ReactNode> = {
    projects: <ProjectsSection projects={projects} />,
    experience: <ExperienceSection experience={experience} />,
  };

  return (
    <div className="min-h-screen bg-base font-sans p-3 md:p-5 lg:p-6">
      <div className="lg:h-[calc(100vh-48px)] bg-surface rounded-lg border border-edge lg:overflow-hidden">
        {/* Mobile */}
        <div className="lg:hidden">
          <ProfileSection
            isDark={isDark}
            onToggleTheme={toggleTheme}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          />
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabContent activeTab={activeTab}>{tabContent}</TabContent>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:h-full">
          <div className="lg:col-span-2 lg:h-full lg:overflow-hidden border-r border-edge">
            <ProfileSection
              isDark={isDark}
              onToggleTheme={toggleTheme}
              onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
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
              <TabContent activeTab={activeTab}>{tabContent}</TabContent>
            </div>
          </div>
        </div>
      </div>

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onOpenChange={setIsCommandPaletteOpen}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onNavigate={(tab) => setActiveTab(tab)}
      />

      <ShortcutsOverlay
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />
    </div>
  );
};

export default Portfolio;
