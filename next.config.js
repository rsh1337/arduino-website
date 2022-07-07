/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['content.instructables.com', 'i.imgur.com', 'makeawebsitehub.com', 'cdn-wordpress-info.futurelearn.com', 'blog.nexuria.ro'],
  },
}

module.exports = nextConfig
