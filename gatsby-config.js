/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

// gatsby-config.js
require('dotenv-vault-core').config({
	path: `.env.${process.env.NODE_ENV}`,
});
const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
		description:
			'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
		author: '@gatsbyjs',
		siteUrl: 'https://gatsbystarterdefaultsource.gatsbyjs.io/',
	},
	plugins: [
		{
			resolve: 'eslint-plugin-gatsby',
			options: {
				rulePaths: [gatsbyRequiredRules],
				// Default settings that may be omitted or customized
				stages: ['develop'],
				extensions: ['js', 'jsx', 'ts', 'tsx'],
				exclude: ['node_modules', 'bower_components', '.cache', 'public', 'blueprint-templates'],
				failOnError: false,
			},
		},
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-svgr',
		'gatsby-plugin-vanilla-extract',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				downloadLocal: true,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'sam-rankin-portfolio',
				short_name: 'sam-rankin',
				start_url: '/',
				background_color: '#8AC926',
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				theme_color: '#8AC926',
				display: 'minimal-ui',
				icon: 'src/images/favicon.svg', // This path is relative to the root of the site.
			},
		},
	],
};
