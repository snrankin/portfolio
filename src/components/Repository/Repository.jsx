/**
 * Repository
 *
 * @file    Render the Repository component
 * @author  Sam Rankin <srankin@riester.com>
 * @version 0.1.0
 */

import styles from "./Repository.module.scss"

export default function Repository({ repo }) {
	const {
		name,
		full_name,
		description,
		html_url,
		homepage,
		stargazers_count,
	} = repo

	const isExternal = !full_name.includes("samrankin")

	// for blog & portfolio and if there's no homepage, use github url
	// else use homepage field
	const repoLink =
		name === "blog" || name === "portfolio" || !homepage || isExternal
			? html_url
			: homepage

	return (
		<div className={styleRepo}>
			<h1 className={repoTitle}>
				<a href={repoLink}>{isExternal ? full_name : name}</a>
			</h1>
			<p>{description}</p>
			<p className={meta}>
				{name === "portfolio" || name === "blog"
					? null
					: !isExternal &&
					  homepage && (
							<a href={homepage}>
								<Icon name="Compass" /> More info
							</a>
					  )}

				<a href={html_url}>
					<Icon name="GitHub" /> GitHub
				</a>

				<a href={`${html_url}/stargazers`}>
					<Icon name="Star" /> {stargazers_count}
				</a>
			</p>
		</div>
	)
}

Repository.propTypes = {
	repo: PropTypes.object.isRequired,
}
