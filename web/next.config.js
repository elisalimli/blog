/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,

  // Uncoment to add domain whitelist
  images: {
    domains: [
      'i.ytimg.com',
      'lh3.googleusercontent.com',
      'www.travelgram.com',
      'picsum.photos',
      'cdn.britannica.com',
      'localhost',
    ],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
