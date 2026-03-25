import SectionHeader from "@/components/sectionheader";
import { experiences } from "@/data/xperience";

export default function ExperienceTimeline() {
  return (
    <div>
      <SectionHeader title="Experience" />

      <div className="relative pl-6">
        <div className="absolute left-2 top-0 h-full w-0.5 bg-sageSoft" />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="absolute -left-1.5 top-6 h-3 w-3 rounded-full bg-sage" />

              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-ink">{exp.role}</h2>
                  <p className="text-xs text-gray-500">{exp.company}</p>
                </div>

                <span className="text-xs text-gray-400">{exp.period}</span>
              </div>

              <ul className="list-disc space-y-2 pl-4 text-sm text-gray-600">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
