import * as React from "react"
import { Link } from "gatsby"

import { ReactComponent as Logo } from "../images/favicon.svg"

const Header = ({ siteTitle }) => (
	<header
		style={{
			margin: `0 auto`,
			padding: `var(--space-4) var(--size-gutter)`,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `space-between`,
		}}
	>
		<Link
			to="/"
			style={{
				fontSize: `var(--font-sm)`,
				textDecoration: `none`,
			}}
		>
			{siteTitle}
		</Link>
		<Logo dimensions role="img" width="60" height="60" />
	</header>
)

export default Header
