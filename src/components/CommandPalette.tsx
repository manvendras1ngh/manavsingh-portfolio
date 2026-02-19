import { useState, useEffect, useRef, useCallback } from "react";
import {
  Search,
  FolderOpen,
  Briefcase,
  Sun,
  Moon,
  Mail,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";

interface Action {
  id: string;
  label: string;
  keywords: string;
  icon: React.ReactNode;
  category: "Navigation" | "Actions" | "Links";
  handler: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigate: (tab: string) => void;
}

const CommandPalette = ({
  isOpen,
  onOpenChange,
  isDark,
  onToggleTheme,
  onNavigate,
}: CommandPaletteProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const actions: Action[] = [
    {
      id: "projects",
      label: "Go to Projects",
      keywords: "navigate projects work",
      icon: <FolderOpen className="w-4 h-4" />,
      category: "Navigation",
      handler: () => onNavigate("projects"),
    },
    {
      id: "experience",
      label: "Go to Experience",
      keywords: "navigate experience work jobs",
      icon: <Briefcase className="w-4 h-4" />,
      category: "Navigation",
      handler: () => onNavigate("experience"),
    },
    {
      id: "theme",
      label: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
      keywords: "toggle dark light theme mode",
      icon: isDark ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      ),
      category: "Actions",
      handler: onToggleTheme,
    },
    {
      id: "email",
      label: "Copy Email",
      keywords: "copy email contact mail",
      icon: <Mail className="w-4 h-4" />,
      category: "Actions",
      handler: () => navigator.clipboard.writeText("hello@manavsingh.in"),
    },
    {
      id: "resume",
      label: "Open Resume",
      keywords: "resume cv download",
      icon: <FileText className="w-4 h-4" />,
      category: "Actions",
      handler: () =>
        window.open(
          "https://drive.google.com/file/d/12UGS6C-uA63kyjqywhZkzv7lF1Xp6320/view?usp=sharing",
          "_blank",
        ),
    },
    {
      id: "github",
      label: "GitHub",
      keywords: "github source code repository",
      icon: <Github className="w-4 h-4" />,
      category: "Links",
      handler: () => window.open("https://github.com/manvendras1ngh", "_blank"),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      keywords: "linkedin social profile",
      icon: <Linkedin className="w-4 h-4" />,
      category: "Links",
      handler: () =>
        window.open("https://www.linkedin.com/in/manvendras1ngh/", "_blank"),
    },
  ];

  const filtered = actions.filter((action) => {
    const q = query.toLowerCase();
    return (
      action.label.toLowerCase().includes(q) ||
      action.keywords.toLowerCase().includes(q)
    );
  });

  const grouped = filtered.reduce(
    (acc, action) => {
      if (!acc[action.category]) acc[action.category] = [];
      acc[action.category].push(action);
      return acc;
    },
    {} as Record<string, Action[]>,
  );

  const categoryOrder: Action["category"][] = [
    "Navigation",
    "Actions",
    "Links",
  ];

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      onOpenChange(false);
      setClosing(false);
      setQuery("");
      setSelectedIndex(0);
    }, 100);
  }, [onOpenChange]);

  const execute = useCallback(
    (action: Action) => {
      close();
      // Delay execution slightly so the palette closes first
      setTimeout(() => action.handler(), 120);
    },
    [close],
  );

  // Global Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          close();
        } else {
          onOpenChange(true);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close, onOpenChange]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !closing) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, closing]);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      execute(filtered[selectedIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    const selected = listRef.current?.querySelector("[data-selected='true']");
    selected?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  if (!isOpen && !closing) return null;

  let flatIndex = -1;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center ${closing ? "backdrop-exit" : "backdrop-enter"}`}
      style={{ paddingTop: "20vh" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={close}
      />

      {/* Dialog */}
      <div
        className={`relative w-full max-w-md mx-4 h-fit bg-surface border border-edge rounded-xl shadow-2xl overflow-hidden ${closing ? "palette-exit" : "palette-enter"}`}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-edge">
          <Search className="w-4 h-4 text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-sm text-primary placeholder:text-muted outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-raised border border-edge font-mono text-[10px] text-muted">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-72 overflow-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-sm text-muted text-center">
              No results found.
            </p>
          ) : (
            categoryOrder.map((category) => {
              const items = grouped[category];
              if (!items) return null;
              return (
                <div key={category}>
                  <div className="px-4 py-1.5">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                      {category}
                    </span>
                  </div>
                  {items.map((action) => {
                    flatIndex++;
                    const isSelected = flatIndex === selectedIndex;
                    return (
                      <button
                        key={action.id}
                        data-selected={isSelected}
                        onClick={() => execute(action)}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-raised text-primary"
                            : "text-secondary hover:bg-raised hover:text-primary"
                        }`}
                      >
                        <span className="text-muted">{action.icon}</span>
                        {action.label}
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
