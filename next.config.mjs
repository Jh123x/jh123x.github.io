/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./build", // Changes the build output directory to `./build`.
  reactStrictMode: true, // Enables React Strict Mode.
  images: {
    unoptimized: false, // Disables image optimization.
  },
};

export default nextConfig;
