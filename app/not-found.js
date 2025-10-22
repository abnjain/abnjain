export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">Page not found. The resource you requested doesn’t exist.</p>
      <a
        href="/"
        className="px-5 py-2 bg-custom-fireOpal text-white rounded-md"
      >
        Go Home
      </a>
    </div>
  );
}
