import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Page Not Found — abnjain",
  description:
    "The page you requested does not exist on abnjain.me. Return to Abhinav Jain (abnjain) portfolio for projects, about, and contact.",
  path: "/404",
  keywords: ["abnjain", "404", "Page Not Found"],
});

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold text-text">404</h1>
      <p className="mb-6 text-lg text-muted">
        Page not found on <span className="text-accent">abnjain.me</span>. The resource you
        requested doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-md bg-accent px-5 py-2 text-white transition hover:opacity-90"
      >
        Go to abnjain Home
      </Link>
    </div>
  );
}
