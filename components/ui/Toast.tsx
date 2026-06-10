type ToastProps = {
  message: string;
  visible: boolean;
};

/** Brutalist fixed toast — use with local state + timeout. */
export function Toast({ message, visible }: ToastProps) {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 border border-black bg-ink px-5 py-3 font-mono text-sm font-bold uppercase tracking-label text-on-dark shadow-brutal"
    >
      {message}
    </div>
  );
}
