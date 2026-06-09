import Link from "next/link";
import { personProfile } from "@/lib/data/profile";
import { serviceOfferings } from "@/lib/data/services";

export function EntityIntroSection() {
  return (
    <section
      className="relative mx-auto w-full max-w-5xl px-4 py-16 md:py-20"
      aria-label="About Abhinav Jain"
    >
      <h2 className="text-center text-2xl font-normal tracking-tight text-text sm:text-3xl">
        Full-stack developer &amp; designer from Indore, India
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted sm:text-lg">
        {personProfile.summaryParagraph}
      </p>
      <div className="mt-10">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          I build
        </h3>
        <ul className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
          {serviceOfferings.map((service) => (
            <li
              key={service.id}
              className="rounded-card border border-text/10 bg-surface/60 px-4 py-3 text-sm text-text"
            >
              <span className="font-medium text-accent">{service.name}</span>
              <span className="mt-1 block text-muted">{service.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 text-center text-sm text-muted">
        <Link href="/projects" className="text-accent hover:underline">
          View projects
        </Link>
        {" · "}
        <Link href="/about" className="text-accent hover:underline">
          About me
        </Link>
        {" · "}
        <Link href="/#contact" className="text-accent hover:underline">
          Hire me
        </Link>
      </p>
    </section>
  );
}
