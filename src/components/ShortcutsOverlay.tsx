import { useEffect, useState } from "react";

interface ShortcutsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const shortcuts = [
  { key: "1", description: "Go to Projects" },
  { key: "2", description: "Go to Experience" },
  { key: "d", description: "Toggle dark mode" },
  { key: "?", description: "Show shortcuts" },
  { key: "⌘K", description: "Command palette" },
];

const ShortcutsOverlay = ({ isOpen, onClose }: ShortcutsOverlayProps) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 100);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!isOpen && !closing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center ${closing ? "backdrop-exit" : "backdrop-enter"}`}
      style={{ paddingTop: "20vh" }}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div
        className={`relative w-full max-w-sm mx-4 h-fit bg-surface border border-edge rounded-xl shadow-2xl overflow-hidden ${closing ? "palette-exit" : "palette-enter"}`}
      >
        <div className="px-4 py-3 border-b border-edge">
          <h2 className="font-mono text-xs text-muted uppercase tracking-widest">
            Keyboard Shortcuts
          </h2>
        </div>
        <div className="p-4 space-y-2.5">
          {shortcuts.map(({ key, description }) => (
            <div
              key={key}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-secondary">{description}</span>
              <kbd className="inline-flex items-center px-2 py-0.5 rounded bg-raised border border-edge font-mono text-xs text-muted min-w-[28px] justify-center">
                {key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortcutsOverlay;
