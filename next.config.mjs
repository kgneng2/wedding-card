/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Outputs a Single-Page Application (SPA).
  // distDir: './dist', // Changes the build output directory to `./dist/`.
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/images/gallery',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable', // 7일 동안 캐시
          },
        ],
      },
    ];
  },
};

export default nextConfig;
