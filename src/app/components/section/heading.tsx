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
			flags = flags.split(' | ');
		}
		flags = flags.map((flag) => {
			flag = padStart(flag, flag.length + 2, '-');
			return flag;
		});
		flags = flags.join(' ');
	}

	return (
		<h2 className="flex justify-center my-0">
			<span className="min-w-full md:min-w-0 mockup-code lg:w-max mx-auto dark:bg-gray-900">
				{props.title != undefined ? (
					<span className="sr-only">{props.title} </span>
				) : null}

				<pre data-prefix=">" aria-hidden="true" className="font-mono">
					{props.command != undefined ? (
						<code className="text-success-500">
							{props.command}{' '}
						</code>
					) : null}
					{props.argument != undefined ? props.argument : null}
					{flags != undefined ? (
						<code className="text-secondary-500"> {flags}</code>
					) : null}
				</pre>
			</span>
		</h2>
	);
}
