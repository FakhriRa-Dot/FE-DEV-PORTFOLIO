import { Suspense } from "react";
import HeroSection from "./section/home/herosection";
import ProjectsSection from "./section/home/projectsetion";
import TechSection from "./section/home/skillsection";
import ContactSection from "./section/home/contactsection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ProjectsSection />
        <TechSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}
