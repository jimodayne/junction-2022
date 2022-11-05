/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    theme: {
        colors: {
            primary: {
                DEFAULT: "#0070f3",
            },
        },
    },
};

module.exports = nextConfig;
