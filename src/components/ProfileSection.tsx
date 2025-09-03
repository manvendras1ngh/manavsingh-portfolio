import { Github, Mail, Linkedin, Sun, Moon, Copy, Check } from "lucide-react";
import { useState } from "react";
import type { ProfileSectionProps } from "../utils/types";
import ScheduleCall from "./ScheduleCall";

const ProfileSection = ({ isDarkMode, setIsDarkMode }: ProfileSectionProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`p-8 lg:p-12 h-full overflow-y-auto ${
        isDarkMode ? "border-zinc-700" : "border-gray-200"
      } lg:border-r`}
    >
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-1">
          <a
            href="https://dev.manavsingh.in"
            className={`text-mds underline font-light cursor-pointer ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            dev.manavsingh.in
          </a>
          <button
            onClick={() => copyToClipboard("dev.manavsingh.in")}
            className={`cursor-pointer p-1 transition-colors duration-200 ${
              copied
                ? isDarkMode
                  ? "text-green-400"
                  : "text-green-600"
                : isDarkMode
                ? "text-gray-400"
                : "text-gray-500"
            }`}
          >
            {copied ? (
              <Check className="w-3 h-3" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-4">
          {/* <button
            className={`${
              isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors`}
          >
             <Rss className="w-5 h-5" /> 
          </button> */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`${
              isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            } transition-colors`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <main>
        <h2
          className={`text-5xl font-bold mb-3 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Manav
        </h2>
        <p
          className={`text-xl mb-8 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Bringing Ideas to Reality ✨
        </p>

        <p
          className={`mb-8 leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Hey there 👋 I'm Manvendra Vikram Singh a.k.a Manav - I'm a{" "}
          <span className="font-semibold">Full Stack Developer</span>. I work on
          web, mobile, desktop, server, applied AI. I have over 2 years of
          industry experience. I love Modern UI/UX, Computer Science, and
          creating elegant solutions to complex problems.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <ScheduleCall
            className={`${
              isDarkMode
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-black text-white hover:bg-gray-800"
            } px-5 py-2.5 rounded-lg font-medium transition-colors inline-block cursor-pointer`}
          />
          <a
            href="https://drive.google.com/file/d/1NiQnAYpY1Jdca3gYSc999SuGRrfCHGRV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "bg-zinc-800 text-gray-100 hover:bg-zinc-700"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } px-5 py-2.5 rounded-lg font-medium transition-colors inline-block`}
          >
            Resume
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://github.com/manvendras1ngh"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:007singhmanvendra@gmail.com"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manvendras1ngh/"
              className={`${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              } transition-colors`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div
          className={`space-y-3 text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <p>
            <span className="font-semibold">Frontend:</span> React, TailwindCSS,
            Ant Design, Headless UI, ShadCN UI, Redux, React Hook Form
          </p>
          <p>
            <span className="font-semibold">Javascript runtime:</span> Node.js
          </p>
          <p>
            <span className="font-semibold">Backend:</span> Express.js
          </p>
          <p>
            <span className="font-semibold">Database:</span> MongoDB, Firebase,
            Firestore, MySQL
          </p>
          <p>
            <span className="font-semibold">Programming Languages:</span>{" "}
            Javascript, Java, Python
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProfileSection;
