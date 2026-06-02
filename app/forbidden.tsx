import Link from "next/link";

export default function Forbidden() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-bg text-center">
      <h1 className="mb-4 text-5xl font-bold text-accent">403</h1>
      <p className="mb-6 text-lg text-muted">
        Access denied. You don&apos;t have permission to view this page.
      </p>
      <Link
        href="/"
        className="rounded-md bg-text px-5 py-2 text-bg transition hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
