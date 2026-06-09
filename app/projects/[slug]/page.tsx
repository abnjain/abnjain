import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  generatePageMetadata,
  getSoftwareApplicationSchema,
  getBreadcrumbSchema,
  buildGraph,
} from "@/lib/seo";
import { JsonLdGraph } from "@/components/seo/JsonLdGraph";
import { getCaseStudyProjects, getProjectBySlug } from "@/lib/data/projects";
import { personProfile } from "@/lib/data/profile";
import { imageAlt } from "@/lib/seo/imageAlt";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getCaseStudyProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return generatePageMetadata({
    title: `${project.name} — Case Study`,
    description: `${project.summary} By Abhinav Jain (abnjain). Stack: ${project.stack.join(", ")}.`,
    path: `/projects/${project.slug}`,
    image: project.img || undefined,
  });
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project || project.slug === "portfolio") notFound();

  const liveUrl =
    project.link.startsWith("http") && !project.link.includes("github.com")
      ? project.link
      : null;
  const repoUrl = project.repoUrl ?? project.gitlink ?? null;

  const schema = buildGraph(
    getSoftwareApplicationSchema(project),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.name, path: `/projects/${project.slug}` },
    ]),
  );

  return (
    <>
      <JsonLdGraph schema={schema} />
      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <nav className="mb-8 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">{project.name}</span>
        </nav>

        {project.img && (
          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-card border border-text/10">
            <Image
              src={project.img}
              alt={imageAlt(`${project.name} — abnjain case study screenshot`)}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>
        )}

        <h1 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{project.summary}</p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-text">Problem</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-text">Solution</h2>
          <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-text">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-text/10 bg-surface px-3 py-1 text-sm text-text"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {project.metrics && project.metrics.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-text">Outcomes</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted">
              {project.metrics.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 flex flex-wrap gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-card bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View live project
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-card border border-text/10 px-6 py-3 text-sm font-medium text-text transition hover:border-accent"
            >
              View source
            </a>
          )}
          <Link
            href="/#contact"
            className="rounded-card border border-accent px-6 py-3 text-sm font-medium text-accent transition hover:bg-accent/10"
          >
            Hire {personProfile.alternateName}
          </Link>
        </div>
      </main>
    </>
  );
}
