import SectionHeader from "@/components/sectionheader";

export default function AboutBio() {
  return (
    <section className="max-w-3xl">
      <SectionHeader title="Professional Bio" />

      <p className="mb-4 text-sm leading-relaxed text-gray-600">
        I am an Informatics student at the University of Bengkulu with a strong
        focus on frontend development. I specialize in building responsive,
        user-friendly interfaces using modern technologies such as React,
        Tailwind CSS, and JavaScript.
      </p>

      <p className="text-sm leading-relaxed text-gray-600">
        I have developed several web-based applications, including information
        systems and dashboards, where I focused on performance, usability, and
        clean architecture. I am passionate about crafting intuitive user
        experiences and continuously improving my technical skills to deliver
        impactful digital products.
      </p>
    </section>
  );
}
