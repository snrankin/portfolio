'use client';
import classNames from 'classnames';
import { omit, padStart, set } from 'lodash';
import React, { HTMLProps } from 'react';

export interface ShellProps extends HTMLProps<HTMLElement> {
	command?: string;
	argument?: string;
	flags?: string | string[];
}
export default function Heading(props: ShellProps): JSX.Element {
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

	let args = omit(props, ['command', 'argument', 'flags']);

	set(args, 'aria-hidden', true);

	let classes = classNames(
		'mockup-code',
		'dark:bg-slate-950',
		'dark:text-slate-300',
		'before:content-none',
		'shadow',
		props.className
	);

	set(args, 'className', classes);
	return (
		<span {...args}>
			<span className="flex gap-2 buttons">
				<span className="w-[0.75em] h-[0.75em] rounded-full bg-error"></span>
				<span className="w-[0.75em] h-[0.75em] rounded-full bg-warning"></span>
				<span className="w-[0.75em] h-[0.75em] rounded-full bg-success"></span>
			</span>
			<pre
				data-prefix="$"
				role="presentation"
				className="font-mono dark:text-slate-300"
			>
				{!!props.command && props.command != null && (
					<code className="text-primary nohighlight">
						{props.command}{' '}
					</code>
				)}
				{!!props.argument &&
					props.argument != null &&
					props.argument != 'null' && (
						<code className="nohighlight ">{props.argument}</code>
					)}
				{!!flags && flags != null && (
					<code className="text-secondary nohighlight"> {flags}</code>
				)}
			</pre>
		</span>
	);
}
