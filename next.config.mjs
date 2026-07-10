/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/Projects", destination: "/projects", permanent: true },
      { source: "/Projects/:path*", destination: "/projects/:path*", permanent: true },
      { source: "/About", destination: "/about", permanent: true },
      { source: "/About/:path*", destination: "/about/:path*", permanent: true },
      { source: "/Blogs", destination: "/blogs", permanent: true },
      { source: "/Blogs/:path*", destination: "/blogs/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Robots-Tag", value: "noindex" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
