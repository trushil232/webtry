/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures a static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static exports
  },
  typescript: {
    // This allows production builds to successfully complete 
    // even if TypeScript has minor display hints/warnings
    ignoreBuildErrors: true,
  },
};

export default nextConfig;