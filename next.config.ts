import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; connect-src 'self' https://*.supabase.co wss://*.supabase.co https:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;