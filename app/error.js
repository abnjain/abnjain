"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-700 mb-6">{error?.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="px-5 py-2 bg-custom-fireOpal text-white rounded-md"
      >
        Try Again
      </button>
    </div>
  );
}
