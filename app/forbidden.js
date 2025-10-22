export default function Forbidden() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">403</h1>
      <p className="text-lg text-gray-600 mb-6">Access Denied. You don't have permission to view this page.</p>
      <a
        href="/"
        className="px-5 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
