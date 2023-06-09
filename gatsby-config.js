/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const util = require('util');

// gatsby-config.js
require('dotenv-vault-core').config({
	path: `.env.${process.env.NODE_ENV}`,
});

console.log(util.inspect(process.env, { showHidden: true, depth: null, colors: true }));

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(process.cwd(), 'node_modules', 'gatsby', 'dist', 'utils', 'eslint-rules');

const config = require('./src/config');
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: 'Brittany Chiang',
		description:
			'Brittany Chiang is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
		siteUrl: 'https://brittanychiang.com', // No trailing slash allowed!
		image: '/og.png', // Path to your image you placed in the 'static' folder
		twitterUsername: '@bchiang7',
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
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-svgr',
		'gatsby-plugin-vanilla-extract',
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
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'node',
				path: `${__dirname}/node_modules`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/content/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/content/posts`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'projects',
				path: `${__dirname}/content/projects`,
			},
		},
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/data/`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						// https://www.gatsbyjs.org/packages/gatsby-remark-external-links
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank',
							rel: 'nofollow noopener noreferrer',
						},
					},
					{
						// https://www.gatsbyjs.org/packages/gatsby-remark-images
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 700,
							linkImagesToOriginal: true,
							quality: 90,
							tracedSVG: { color: config.colors.green },
						},
					},
					{
						// https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/
						resolve: 'gatsby-remark-code-titles',
					}, // IMPORTANT: this must be ahead of other plugins that use code blocks
					{
						// https://www.gatsbyjs.org/packages/gatsby-remark-prismjs
						resolve: 'gatsby-remark-prismjs',
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (e.g. <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (e.g. for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-',
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in gatsby-browser.js
							// right after importing the prism color scheme:
							//  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: false,
							// This adds a new language definition to Prism or extend an already
							// existing language definition. More details on this option can be
							// found under the header "Add new language definition or extend an
							// existing language" below.
							languageExtensions: [
								{
									language: 'superscript',
									extend: 'javascript',
									definition: {
										superscript_types: /(SuperType)/,
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/,
										},
									},
								},
							],
							// Customize the prompt used in shell output
							// Values below are default
							prompt: {
								user: 'root',
								host: 'localhost',
								global: false,
							},
						},
					},
				],
			},
		},
	],
};
