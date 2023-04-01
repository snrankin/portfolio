import { useStaticQuery, graphql } from "gatsby"

/**
 * Description placeholder
 * @date 3/31/2023 - 6:08:51 PM
 *
 * @returns {Object}
 */
export const useGitHubData = () => {
	const { githubData } = useStaticQuery(graphql`
		query onGithub {
			githubData {
				data {
					user {
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
						repositories {
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
			}
		}
	`)
	return githubData.data
}
