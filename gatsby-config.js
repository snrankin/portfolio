/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

// gatsby-config.js
require("dotenv-vault-core").config()

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
		siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
	},
	plugins: [
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		"gatsby-plugin-svgr",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `sam-rankin-portfolio`,
				short_name: `sam-rankin`,
				start_url: `/`,
				background_color: `#8AC926`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				theme_color: `#8AC926`,
				display: `minimal-ui`,
				icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-github-api`,
			options: {
				token: process.env.GATSBY_GITHUB_TOKEN,
				variables: {},
				graphQLQuery: `
        query {
  user(login: "snrankin") {
    bio
    bioHTML
    avatarUrl
    anyPinnableItems
    email
    id
    isHireable
    location
    login
    name
    url
    websiteUrl
    recentProjects {
      totalCount
    }
    repositories(
      privacy: PUBLIC
      last: 10
      orderBy: {field: CREATED_AT, direction: DESC}
    ) {
      nodes {
        description
        descriptionHTML
        homepageUrl
        name
        nameWithOwner
        openGraphImageUrl
        shortDescriptionHTML
        resourcePath
        url
      }
    }
  }
}
        `,
			},
		},
	],
}
