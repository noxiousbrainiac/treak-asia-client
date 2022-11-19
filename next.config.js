/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.ctfassets.net', 'www.kirghizasia.com'],
		deviceSizes: [390, 450, 568, 768, 1024, 1200, 1440, 1920, 2560, 3840],
		formats: ['image/webp', 'image/avif']
	},
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'en'
	}
};

module.exports = nextConfig;
