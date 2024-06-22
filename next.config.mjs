/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [480, 768, 1024, 1440, 1920, 2304], // 다양한 해상도 지원
  },
  // output: 'export', // Outputs a Single-Page Application (SPA).
  // distDir: './dist', // Changes the build output directory to `./dist/`.
};

export default nextConfig;
