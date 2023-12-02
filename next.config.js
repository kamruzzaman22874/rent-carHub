/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio", "i.ibb.co"],
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
