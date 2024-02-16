const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true
});
module.exports = withPWA({
	images: {
		domains: ['i.imgur.com'],
	},
	i18n: {
		locales: ['ro'],
		defaultLocale: 'ro'
	}
});
