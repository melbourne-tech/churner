/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:
      process.env.NODE_ENV === 'production'
        ? ['ancvbyqrgdwaklclccxw.supabase.co']
        : ['localhost'],
  },
}

module.exports = nextConfig
