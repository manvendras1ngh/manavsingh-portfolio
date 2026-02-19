import { useState, useEffect, useRef, type ReactNode } from "react";

interface TabContentProps {
  activeTab: string;
  children: Record<string, ReactNode>;
}

const tabOrder = ["projects", "experience"];

const TabContent = ({ activeTab, children }: TabContentProps) => {
  const [displayedTab, setDisplayedTab] = useState(activeTab);
  const [animClass, setAnimClass] = useState("");
  const prevTabRef = useRef(activeTab);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (activeTab === displayedTab || isAnimating.current) return;

    isAnimating.current = true;
    const goingLeft =
      tabOrder.indexOf(activeTab) > tabOrder.indexOf(prevTabRef.current);

    // Exit animation
    setAnimClass(goingLeft ? "tab-exit-left" : "tab-exit-right");

    const timeout = setTimeout(() => {
      setDisplayedTab(activeTab);
      setAnimClass(goingLeft ? "tab-enter-right" : "tab-enter-left");
      prevTabRef.current = activeTab;

      const enterTimeout = setTimeout(() => {
        setAnimClass("");
        isAnimating.current = false;
      }, 200);

      return () => clearTimeout(enterTimeout);
    }, 150);

    return () => clearTimeout(timeout);
  }, [activeTab, displayedTab]);

  return <div className={animClass}>{children[displayedTab]}</div>;
};

export default TabContent;
