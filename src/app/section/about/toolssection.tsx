import SectionHeader from "@/components/sectionheader";
import { techStacks } from "@/data/skill";

export default function TechnicalToolkit() {
  return (
    <div>
      <SectionHeader title="Technical Toolkit" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {techStacks.map((stack) => (
          <div
            key={stack.title}
            className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <h2 className="mb-3 text-sm font-semibold text-ink">
              {stack.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {stack.items.map((tech) => (
                <span
                  key={tech.id}
                  className="rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-xs font-medium text-sage transition hover:bg-sage hover:text-white"
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
