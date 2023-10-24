/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 't1.gstatic.com',
				port: '',
				pathname: '/faviconV2',
			},
		],
	},
	webpack: (config) =>  {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

module.exports = nextConfig;
