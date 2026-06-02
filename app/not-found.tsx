import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-5xl font-bold text-text">404</h1>
      <p className="mb-6 text-lg text-muted">
        Page not found. The resource you requested doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-md bg-custom-fireOpal px-5 py-2 text-white transition hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
