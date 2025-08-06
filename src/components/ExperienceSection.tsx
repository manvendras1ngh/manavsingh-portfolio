import { Calendar } from "lucide-react";
import type { ExperienceSectionProps } from "../utils/types";

const ExperienceSection = ({
  isDarkMode,
  experience,
}: ExperienceSectionProps) => {
  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="space-y-8">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className={`border ${
              isDarkMode ? "border-zinc-700" : "border-gray-200"
            } rounded-lg p-6 ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.company}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-800"
                  }`}
                >
                  {exp.role}
                </p>
              </div>
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } flex items-center gap-1`}
              >
                <Calendar className="w-4 h-4" />
                {exp.period}
              </span>
            </div>
            <ul
              className={`text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {exp.description.map((detail) => (
                <li className="list-disc ml-6">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
