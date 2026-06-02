"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-bg text-center">
      <h2 className="mb-4 text-3xl font-bold text-accent">Something went wrong!</h2>
      <p className="mb-6 text-muted">{error.message || "An unexpected error occurred."}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-md bg-accent px-5 py-2 text-white transition hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  );
}
