import type { NextConfig } from 'next'
import { withWorkflow } from 'workflow/next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { hostname: 'ancvbyqrgdwaklclccxw.supabase.co' },
      ...(process.env.NODE_ENV !== 'production'
        ? [{ hostname: '127.0.0.1' }]
        : []),
    ],
  },
}

export default withWorkflow(nextConfig)
