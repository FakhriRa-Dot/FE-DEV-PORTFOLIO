"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold font-alfa text-(--color-ink)"
        >
          rhess.dev
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-inconsolata">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "relative transition",
                  pathname === item.href
                    ? "text-(--color-sage)"
                    : "text-(--color-ink) hover:text-(--color-sage)",
                )}
              >
                {item.name}

                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-(--color-sage)" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/CV/CV.pdf"
          download
          className="rounded-md bg-(--color-sage) px-4 py-2 text-sm text-white font-inconsolata font-bold transition hover:scale-105 hover:shadow-md"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
