/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.ctfassets.net'],
		loader: 'custom',
		path: '/_next/image',
		deviceSizes: [390, 450, 568, 768, 1024, 1200, 1440, 1920, 2560, 3840],
		formats: ['image/webp']
	},
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'en'
	}
};

module.exports = nextConfig;
