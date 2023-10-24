'use client';
import React from 'react';
export default function Heading(props: any): JSX.Element {
	return (
		<h2 className="mockup-code lg:w-9/12 mx-auto">
			<span className="sr-only">{props.title}</span>
			<pre data-prefix="$" aria-hidden="true" className="font-code">
				<code className="text-info">ls </code>
				<code>{props.displayTitle}</code>
				{props.flag ? <code className="text-secondary"> --{props.flag}</code> : null}
			</pre>
		</h2>
	);
}
