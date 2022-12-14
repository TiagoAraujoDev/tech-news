/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.prismic.io/",
  //       port: "",
  //       pathname: "/tech-new/**",
  //     },
  //   ],
  // },
  images: {
    domains: ["images.prismic.io"],
  },
};

module.exports = nextConfig;
