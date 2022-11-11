/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { appDir: true },
	images: {
		domains: ['images.ctfassets.net'],
		loader: 'custom',
		path: '',
		deviceSizes: [390, 450, 568, 768, 1024, 1200, 1440, 1920, 2560, 3840]
	},
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'en'
	}
};

module.exports = nextConfig;
