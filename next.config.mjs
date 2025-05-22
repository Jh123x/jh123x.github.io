/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './build', // Changes the build output directory to `./build`.
  reactStrictMode: true, // Enables React Strict Mode.
  images: {
    unoptimized: true, // Disables image optimization.
  },
  compiler: {
    styledComponents: {
      minify: true
    }
  }
}

export default nextConfig