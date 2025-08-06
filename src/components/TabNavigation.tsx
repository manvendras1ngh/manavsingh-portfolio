interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

const TabNavigation = ({
  activeTab,
  setActiveTab,
  isDarkMode,
}: TabNavigationProps) => {
  return (
    <div
      className={`p-4 ${isDarkMode ? "bg-black" : "bg-white"} border-b ${
        isDarkMode ? "border-zinc-700" : "border-gray-200"
      }`}
    >
      <div
        className={`${
          isDarkMode ? "bg-zinc-800" : "bg-gray-100"
        } p-1.5 rounded-lg flex gap-1.5`}
      >
        <button
          onClick={() => setActiveTab("projects")}
          className={`cursor-pointer flex-1 py-2 px-4 rounded-md font-medium text-sm transition-all ${
            activeTab === "projects"
              ? `${
                  isDarkMode
                    ? "bg-zinc-900 text-white"
                    : "bg-white text-gray-900"
                } shadow-sm`
              : `${
                  isDarkMode
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-900"
                }`
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`cursor-pointer flex-1 py-2 px-4 rounded-md font-medium text-sm transition-all ${
            activeTab === "experience"
              ? `${
                  isDarkMode
                    ? "bg-zinc-900 text-white"
                    : "bg-white text-gray-900"
                } shadow-sm`
              : `${
                  isDarkMode
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-900"
                }`
          }`}
        >
          Experience
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
