import AboutBio from "../section/about/biosection";
import TechnicalToolkit from "../section/about/toolssection";
import ExperienceTimeline from "../section/about/xperiencesection";

export default function AboutPage() {
  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-12 lg:col-span-5 space-y-16">
          <section>
            <h1 className="text-4xl font-extrabold text-ink leading-tight">
              About & <br /> Experience
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Frontend Developer focused on building scalable, accessible, and
              high-performance web applications with strong attention to UI/UX.
            </p>
          </section>

          <AboutBio />

          <TechnicalToolkit />
        </div>

        <div className="col-span-12 lg:col-span-7">
          <ExperienceTimeline />
        </div>
      </div>
    </main>
  );
}
