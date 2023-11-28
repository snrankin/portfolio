/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		deviceSizes: [576, 768, 1024, 1280, 1440, 1920, 2048, 3840],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 't1.gstatic.com',
				port: '',
				pathname: '/faviconV2',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
		],
	},
	experimental: {
		webVitalsAttribution: ['CLS', 'LCP'],
	},
	webpack: (config) => {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg')
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /(url|raw)/ }, // exclude if *.svg?url
				use: [
					{
						loader: '@svgr/webpack',
						options: {
							svgo: false,
							memo: true,
							svgProps: { role: 'img' },
						},
					},
				],
			},
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /raw/,
				type: 'asset/source',
			},

			{
				test: /\.svg$/i,
				issuer: /\.css$/,
				loader: 'svg-inline-loader',
			}
			// {
			// 	test: /\.(eot|ttf|woff2?)$/i,
			// 	issuer: /\.css$/,
			// 	type: 'asset/resource',
			// 	loader: 'file-loader',
			// 	options: {
			// 		outputPath: 'public',
			// 	},
			// }
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

module.exports = nextConfig;
