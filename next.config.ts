import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'image.tmdb.org',
      'ghibliapi.vercel.app',
      'upload.wikimedia.org',
      'www.themoviedb.org',
    ],
  },
}

export default nextConfig
