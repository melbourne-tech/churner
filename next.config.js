/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { hostname: 'ancvbyqrgdwaklclccxw.supabase.co' },
      ...(process.env.NODE_ENV !== 'production'
        ? [{ hostname: 'localhost' }]
        : []),
    ],
  },
}

module.exports = nextConfig
