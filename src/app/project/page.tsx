"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/project";
import { SkillId } from "@/data/skill";
import ProjectFilter from "@/components/projecctfilter";
import ProjectCard from "@/components/projectcard";

type FilterId = SkillId | "all";

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) =>
      project.category.includes(activeFilter),
    );
  }, [activeFilter]);

  const totalProjects = projects.length;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Selected Works
        </h1>

        <p className="mb-3 text-sm text-gray-600">
          Frontend projects focused on performance, accessibility, and modern UI
          engineering using React & Next.js.
        </p>

        <p className="text-xs text-gray-500">
          {totalProjects} projects • Clean Code • Scalable Architecture
        </p>
      </div>

      <div className="mb-8">
        <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

        {activeFilter !== "all" && (
          <p className="mt-3 text-xs text-gray-500">
            Showing projects for:{" "}
            <span className="font-medium text-gray-700">{activeFilter}</span>
          </p>
        )}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-gray-300">
          <p className="text-sm text-gray-500">
            No projects found for this category.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
