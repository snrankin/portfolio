'use client';
import React, { useEffect, useRef } from 'react';
import { padStart, pick } from 'lodash';
import Shell, { ShellProps } from '../code/shell';
export interface HeadingProps extends ShellProps {
	title?: string;
}
export default function Heading(props: HeadingProps): JSX.Element {
	let shellProps = pick(props, ['command', 'argument', 'flags']);

	return (
		<h2 className="flex justify-center my-0">
			{!!props.title && props.title && (
				<span className="sr-only">{props.title} </span>
			)}
			<Shell
				className="min-w-full md:min-w-0 lg:w-max mx-auto shadow"
				{...shellProps}
			/>
		</h2>
	);
}
