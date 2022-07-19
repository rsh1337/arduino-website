const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	},
	images: {
		domains: ['i.imgur.com'],
	},
	i18n: {
		locales: ['ro'],
		defaultLocale: 'ro'
	}
});
