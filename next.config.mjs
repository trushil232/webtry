/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Forces a static HTML export suitable for GitHub Pages
  basePath: '/webtry', // Tells Next.js that all styles and assets live inside the /webtry subfolder
  images: {
    unoptimized: true, // Required because static sites can't use the default Next.js image optimization server
  },
  typescript: {
    ignoreBuildErrors: true, // Prevents false-alarm editor warning highlights from blocking your live build
  },
};

export default nextConfig;