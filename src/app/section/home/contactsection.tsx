import { FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="grid overflow-hidden rounded-2xl md:grid-cols-2 shadow-lg">
        {/* LEFT */}
        <div className="bg-sage p-10 text-white">
          <h2 className="text-3xl font-bold">Let’s Work Together</h2>

          <p className="mt-3 text-sm text-white/80">
            Have a project in mind or looking for a frontend developer? Let’s
            talk.
          </p>

          <p className="mt-6 text-xs text-white/70">
            Available for freelance & full-time • Response within 24 hours
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div className="flex gap-3">
              <FiMail className="mt-1" />
              <a href="mailto:zhfakhri.zara@gmail.com">
                zhfakhri.zara@gmail.com
              </a>
            </div>

            <div className="flex gap-3">
              <FiLinkedin className="mt-1" />
              <a
                href="https://www.linkedin.com/in/zahrahhafizahfakhri"
                target="_blank"
              >
                linkedin.com/in/zahrahhafizahfakhri
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          action="https://formspree.io/f/mykpkpdl"
          method="POST"
          className="bg-white p-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="mb-4 w-full rounded border p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="mb-4 w-full rounded border p-3"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="mb-6 w-full rounded border p-3"
          />

          <button
            type="submit"
            className="w-full rounded bg-sage py-3 text-white transition hover:bg-sageSoft"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
