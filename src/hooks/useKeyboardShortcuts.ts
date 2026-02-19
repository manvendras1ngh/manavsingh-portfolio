import { useEffect } from "react";

interface ShortcutHandlers {
  onNavigate: (tab: string) => void;
  onToggleTheme: () => void;
  onToggleShortcuts: () => void;
  isCommandPaletteOpen: boolean;
}

const useKeyboardShortcuts = ({
  onNavigate,
  onToggleTheme,
  onToggleShortcuts,
  isCommandPaletteOpen,
}: ShortcutHandlers) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if command palette is open
      if (isCommandPaletteOpen) return;

      // Skip if modifier keys are held
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // Skip if target is an input/textarea/contentEditable
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      )
        return;

      switch (e.key) {
        case "1":
          e.preventDefault();
          onNavigate("projects");
          break;
        case "2":
          e.preventDefault();
          onNavigate("experience");
          break;
        case "d":
          e.preventDefault();
          onToggleTheme();
          break;
        case "?":
          e.preventDefault();
          onToggleShortcuts();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNavigate, onToggleTheme, onToggleShortcuts, isCommandPaletteOpen]);
};

export default useKeyboardShortcuts;
