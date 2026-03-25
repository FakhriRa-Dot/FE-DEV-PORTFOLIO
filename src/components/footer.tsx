import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-32 border-t bg-(--color-cream)">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* LEFT */}
          <div>
            <h3 className="text-xl font-bold font-alfa text-(--color-ink)">
              rhess.dev
            </h3>
            <p className="mt-3 max-w-sm text-sm text-(--color-ink)/70">
              Frontend Developer specializing in building modern, performant,
              and user-friendly web applications.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold text-(--color-ink)">
              Connect with me
            </p>

            <div className="flex gap-6 text-lg">
              <a
                href="https://github.com/FakhriRa-Dot"
                target="_blank"
                className="transition hover:text-(--color-sage)"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/zhfakhri-ara/"
                target="_blank"
                className="transition hover:text-(--color-sage)"
              >
                <FiLinkedin />
              </a>

              <a
                href="https://x.com/rhessistance"
                target="_blank"
                className="transition hover:text-(--color-sage)"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t pt-6 text-center text-xs text-(--color-ink)/60">
          © {new Date().getFullYear()} rhess.dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
