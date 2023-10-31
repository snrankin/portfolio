'use client';
import React, { useState, FunctionComponent, HTMLProps } from 'react';
import { Waypoint } from 'react-waypoint';
import Heading from './heading';
import classNames from 'classnames';
import { pick, isEmpty } from 'lodash';

export interface SectionProps
	extends Omit<HTMLProps<HTMLElement>, 'className'> {
	className?: string | undefined;
	title?: string;
	command?: string;
	argument?: string;
	flags?: string | string[];
}
export default function Section(props: SectionProps) {
	let children: React.ReactNode = props.children;

	let classes = classNames('py-32', 'min-h-screen', props.className);

	let headingArgs = pick(props, ['title', 'command', 'argument', 'flags']);

	return (
		<Waypoint>
			<section className={classes} {...props}>
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
