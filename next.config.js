/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },

        ],
        domains: ["cdn.imagin.studio", 'i.ibb.co'],
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
