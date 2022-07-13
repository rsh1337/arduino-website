// /** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['content.instructables.com', 'i.imgur.com', 'makeawebsitehub.com', 'cdn-wordpress-info.futurelearn.com', 'blog.nexuria.ro', 'blog.nexuria.ro'],
//   },
// }

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	},
  images: {
    domains: ['content.instructables.com', 'i.imgur.com', 'makeawebsitehub.com', 'cdn-wordpress-info.futurelearn.com', 'blog.nexuria.ro'],
  },
});


// module.exports = nextConfig
