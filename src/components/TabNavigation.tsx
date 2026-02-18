interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <div className="px-6 lg:px-8 pt-6 lg:pt-8 pb-2 bg-surface">
      <div className="flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-raised text-primary"
                : "text-muted hover:text-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
