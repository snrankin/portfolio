/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.VERCEL_CUSTOM_DOMAIN,
	generateRobotsTxt: true, // (optional)
	changefreq: 'monthly',
	exclude: ['/server-sitemap.xml'], // <= exclude here
	generateIndexSitemap: false,
	robotsTxtOptions: {
		additionalSitemaps: [
			`${process.env.VERCEL_CUSTOM_DOMAIN}/server-sitemap.xml`, // <==== Add here
		],
	},
};
