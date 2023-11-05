'use client';
import React, { useState, FunctionComponent, HTMLProps } from 'react';
import { Waypoint } from 'react-waypoint';
import Heading, { HeadingProps } from './heading';
import classNames from 'classnames';
import { pick, isEmpty, omit, set } from 'lodash';

export interface SectionProps extends HeadingProps, HTMLProps<HTMLElement> {
	intro?: string;
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
	let sectionProps = omit(props, [
		'title',
		'command',
		'argument',
		'flags',
		'intro',
	]);

	set(sectionProps, 'className', classes);

	return (
		<Waypoint>
			<section className={classes} {...sectionProps}>
				<div className="container mx-auto">
					{(!isEmpty(props.title) || !isEmpty(props.command)) && (
						<Heading {...headingArgs} />
					)}
					{props.intro != undefined && !isEmpty(props.intro) && (
						<div className="prose mx-auto text-center py-11">
							<p
								className="lead"
								dangerouslySetInnerHTML={{
									__html: props.intro,
								}}
							></p>
						</div>
					)}
					{children}
				</div>
			</section>
		</Waypoint>
	);
}
