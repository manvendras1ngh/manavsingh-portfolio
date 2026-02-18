import {
  Github,
  Mail,
  Linkedin,
  Sun,
  Moon,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import ScheduleCall from "./ScheduleCall";

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
}

const socials = [
  {
    href: "https://github.com/manvendras1ngh",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:007singhmanvendra@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/manvendras1ngh/",
    icon: Linkedin,
    label: "LinkedIn",
  },
];

const stack = [
  {
    label: "frontend",
    value:
      "React, TailwindCSS, Ant Design, Headless UI, ShadCN UI, Redux, React Hook Form",
  },
  { label: "backend", value: "Node.js, Express.js" },
  { label: "database", value: "MongoDB, Firebase, Firestore, MySQL" },
  { label: "languages", value: "JavaScript, Java, Python" },
];

const ProfileSection = ({ isDark, onToggleTheme }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 lg:p-8 h-full overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 animate-in">
        <div className="flex items-center gap-1.5">
          <a
            href="https://dev.manavsingh.in"
            className="font-mono text-sm text-secondary hover:text-primary transition-colors"
          >
            dev.manavsingh.in
          </a>
          <button
            onClick={() => copyToClipboard("dev.manavsingh.in")}
            className="p-1 text-muted hover:text-secondary transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-3 h-3 text-emerald-500" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-md text-muted hover:text-primary hover:bg-raised transition-all cursor-pointer"
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </header>

      <main>
        {/* Name + Title */}
        <div className="mb-6 animate-in" style={{ animationDelay: "50ms" }}>
          <h1 className="text-4xl lg:text-5xl font-semibold text-primary tracking-tight">
            Manav
          </h1>
          <p className="font-mono text-sm text-muted mt-1.5">
            Full Stack Engineer
          </p>
        </div>

        {/* Status */}
        <div
          className="flex items-center gap-2 mb-8 animate-in"
          style={{ animationDelay: "100ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-secondary">
            Currently building at{" "}
            <span className="text-primary font-medium">iipmaps</span>
          </span>
        </div>

        {/* Bio */}
        <p
          className="text-secondary leading-relaxed mb-8 animate-in"
          style={{ animationDelay: "150ms" }}
        >
          I'm Manvendra Vikram Singh - I work across web, mobile, desktop,
          server, and applied AI. Over 2 years of shipping products, optimizing
          systems, and crafting interfaces that feel right.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-3 mb-8 animate-in"
          style={{ animationDelay: "200ms" }}
        >
          <ScheduleCall className="bg-primary text-inverse px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer" />
          <a
            href="https://drive.google.com/file/d/12UGS6C-uA63kyjqywhZkzv7lF1Xp6320/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-raised text-primary border border-edge hover:border-muted px-4 py-2 rounded-md font-medium text-sm transition-colors inline-flex items-center gap-1.5"
          >
            Resume
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex items-center gap-0.5 mb-8 animate-in"
          style={{ animationDelay: "250ms" }}
        >
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted hover:text-primary hover:bg-raised transition-all"
              title={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          className="border-t border-edge mb-8 animate-in"
          style={{ animationDelay: "300ms" }}
        />

        {/* Stack */}
        <div className="animate-in" style={{ animationDelay: "350ms" }}>
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
            Stack
          </p>
          <div className="space-y-2.5">
            {stack.map(({ label, value }) => (
              <div key={label} className="flex gap-3 text-sm">
                <span className="font-mono text-muted shrink-0 w-20 text-xs leading-5">
                  {label}
                </span>
                <span className="text-secondary leading-5">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSection;
