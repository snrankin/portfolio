'use client';
import React, { useState, FunctionComponent, HTMLProps } from 'react';
import { Waypoint } from 'react-waypoint';
import Heading from './heading';
import classNames from 'classnames';
import { pick, isEmpty, omit, set } from 'lodash';

export interface SectionProps extends HTMLProps<HTMLElement> {
	title?: string;
	command?: string;
	argument?: string;
	flags?: string | string[];
}
export default function Section(props: SectionProps) {
	let args = props;
	let children: React.ReactNode = props.children;

	let classes = classNames(
		'py-32',
		'min-h-screen',
		'!print:h-auto',
		'print:py-0',
		props.className
	);

	let headingArgs = pick(props, ['title', 'command', 'argument', 'flags']);
	let sectionProps = omit(props, ['title', 'command', 'argument', 'flags']);

	set(sectionProps, 'className', classes);

	return (
		<Waypoint>
			<section className={classes} {...sectionProps}>
				<div className="container mx-auto">
					{!isEmpty(props.title) || !isEmpty(props.command) ? (
						<Heading {...headingArgs} />
					) : null}

					{children}
				</div>
			</section>
		</Waypoint>
	);
}
