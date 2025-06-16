import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://ru-msk-dr3-1.store.cloud.mts.ru/**')],
  },
};

export default nextConfig;
