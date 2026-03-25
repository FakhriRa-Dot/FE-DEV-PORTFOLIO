import ProjectCard from "@/components/projectcard";
import { projects } from "@/data/project";
import Link from "next/link";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm tracking-widest text-sage mb-2">PORTFOLIO</p>
            <h2 className="text-3xl font-alfa text-ink">Selected Projects</h2>
          </div>

          <Link
            href="/project"
            className="text-sm text-sage hover:text-ink transition"
          >
            View All →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
