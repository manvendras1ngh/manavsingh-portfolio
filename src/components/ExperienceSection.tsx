import type { Experience } from "../utils/types";

const renderText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="text-primary font-medium">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

const ExperienceSection = ({ experience }: { experience: Experience[] }) => {
  return (
    <div className="p-6 lg:p-8 h-full overflow-y-auto">
      <div className="space-y-3">
        {experience.map((exp, i) => (
          <article
            key={exp.id}
            className="border border-edge rounded-lg p-5 bg-surface animate-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-primary">{exp.company}</h3>
                  {exp.period.includes("Present") && (
                    <span className="bg-emerald-500/10 text-emerald-500 text-[11px] font-mono px-1.5 py-0.5 rounded">
                      current
                    </span>
                  )}
                </div>
                <p className="text-sm text-secondary mt-0.5">{exp.role}</p>
              </div>
              <span className="font-mono text-xs text-muted shrink-0">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-3">
              {exp.description.map((detail, j) => (
                <li key={j} className="flex gap-3 text-sm text-secondary">
                  <span className="text-muted select-none shrink-0 mt-[7px]">
                    <span className="block w-1 h-1 rounded-full bg-muted" />
                  </span>
                  <span className="leading-relaxed">{renderText(detail)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
