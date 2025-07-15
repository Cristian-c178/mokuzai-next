/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true, // ← Esta línea es la clave
    },
}

module.exports = nextConfig
