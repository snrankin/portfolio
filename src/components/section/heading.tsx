'use client';
import React, { useEffect, useRef } from 'react';
import { padStart } from 'lodash';
export interface HeadingProps {
	title?: string;
	command?: string;
	argument?: string;
	flags?: string | string[];
}
export default function Heading(props: HeadingProps): JSX.Element {
	let flags = props.flags;

	if (flags != undefined) {
		if (typeof flags == 'string') {
			flags = flags.split('|');
		}
		flags = flags.map((flag) => {
			flag = padStart(flag, flag.length + 2, '-');
			return flag;
		});
		flags = flags.join(' ');
	}

	return (
		<h2 className="flex justify-center my-0">
			<span className="min-w-full md:min-w-0 mockup-code lg:w-max mx-auto dark:bg-gray-950">
				{!!props.title && props.title && (
					<span className="sr-only">{props.title} </span>
				)}

				<pre data-prefix=">" aria-hidden="true" className="font-mono">
					{!!props.command && props.command && (
						<code className="text-primary-500">
							{props.command}{' '}
						</code>
					)}
					{!!props.argument && props.argument && props.argument}
					{!!flags && flags && (
						<code className="text-secondary-500"> {flags}</code>
					)}
				</pre>
			</span>
		</h2>
	);
}
