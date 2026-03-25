import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid min-h-screen items-center gap-10 px-6 md:grid-cols-2 md:px-16">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sageSoft px-4 py-1">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <p className="text-sm font-inconsolata text-sage">
            Available for work
          </p>
        </div>

        <h1 className="text-5xl font-bold text-ink font-alfa leading-tight">
          Zahrah Hafizah Fakhri
        </h1>

        <p className="mt-4 text-lg font-inconsolata text-sage">
          Frontend Developer • React & Next.js Specialist
        </p>

        <p className="mt-6 max-w-lg text-sm text-ink/80 font-crimson leading-relaxed">
          I build fast, scalable, and user-friendly web applications with a
          strong focus on performance, clean architecture, and great user
          experience.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded bg-sage px-6 py-3 text-white transition hover:scale-105 hover:shadow-lg">
            View Projects
          </button>
          <button className="rounded border border-sage px-6 py-3 text-sage transition hover:bg-sage hover:text-white">
            Download CV
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-linear-to-br from-sageSoft to-transparent blur-xl" />
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={260}
            height={320}
            priority
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
