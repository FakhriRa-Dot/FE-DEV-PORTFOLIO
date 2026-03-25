import { techIconMap } from "@/data/icons";
import { techStacks } from "@/data/skill";

export default function TechSection() {
  return (
    <section className="py-28 text-center">
      <p className="text-sm tracking-widest text-sage mb-2">MY STACK</p>

      <h2 className="text-3xl font-alfa text-ink">Technical Expertise</h2>

      <p className="mt-4 text-sm text-ink/70 max-w-xl mx-auto">
        Technologies I use to build scalable and high-performance web
        applications.
      </p>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {techStacks.map((stack) => (
            <div
              key={stack.title}
              className="group rounded-2xl border bg-white p-8 text-left transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h4 className="mb-6 text-lg font-semibold text-ink">
                {stack.title}
              </h4>

              <ul className="space-y-4">
                {stack.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 text-sm text-ink transition group-hover:translate-x-1"
                  >
                    <span className="text-xl text-sage">
                      {techIconMap[item.id]}
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
