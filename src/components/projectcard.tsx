import { Project } from "@/data/project";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const hasDemo = Boolean(project.demoUrl);

  return (
    <div className="group overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

        {project.featured && (
          <span className="absolute top-3 left-3 rounded-md bg-black/80 px-2 py-1 text-xs text-white">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-(--color-ink)">
            {project.title}
          </h3>
          <span className="text-xs text-(--color-ink)/60">{project.year}</span>
        </div>

        <p className="mt-2 text-sm text-(--color-ink)/70 leading-relaxed">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mt-3 text-xs text-(--color-ink)/70 list-disc list-inside space-y-1">
            {project.highlights.slice(0, 2).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={`${project.id}-${tech}-${idx}`}
              className="rounded-full bg-(--color-sage-soft) px-3 py-1 text-xs text-(--color-ink)"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {hasDemo ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-(--color-sage) py-2 text-sm text-white transition hover:scale-105 hover:shadow-md"
            >
              <FiExternalLink />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-gray-300 py-2 text-sm text-white cursor-not-allowed"
            >
              Live Demo
            </button>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-md border py-2 text-sm text-(--color-ink) transition hover:bg-gray-50 hover:scale-105"
            >
              <FiGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
