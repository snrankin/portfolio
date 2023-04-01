/**
 * Repositories
 *
 * @file    Render the Repositories component
 * @author  Sam Rankin <srankin@riester.com>
 * @version 0.1.0
 */
import * as React from "react"
import { graphql } from "gatsby"

import styles from "./Repositories.module.scss"

export default function Repositories({ data }) {
	if (!data) return null

	return (
		<>
			<p>{data.name}</p>
		</>
	)
}
