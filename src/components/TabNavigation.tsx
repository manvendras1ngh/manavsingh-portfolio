import { useRef, useState, useLayoutEffect } from "react";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(
      `[data-tab="${activeTab}"]`,
    ) as HTMLElement;
    if (activeBtn) {
      setIndicator({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
      });
      setReady(true);
    }
  }, [activeTab]);

  return (
    <div className="px-6 lg:px-8 pt-6 lg:pt-8 pb-0 bg-surface">
      <div ref={containerRef} className="relative flex border-b border-edge">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-tab={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "text-primary"
                : "text-muted hover:text-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
        <div
          className={`absolute bottom-0 h-[2px] bg-primary rounded-t-full transition-all duration-300 ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />
      </div>
    </div>
  );
};

export default TabNavigation;
