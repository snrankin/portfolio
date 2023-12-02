'use client';
import classNames from 'classnames';
import { isEmpty, omit, pick, set } from 'lodash';
import React, { HTMLProps, useContext } from 'react';
import { Waypoint } from 'react-waypoint';

import { Content, Markdown } from '@/components/contentful/markdown';
import { SectionContext } from '@/lib/context/section';

import Heading, { HeadingProps } from './heading';

export interface SectionProps
	extends HeadingProps,
		Omit<HTMLProps<HTMLElement>, 'id'> {
	id: string;
	intro?: Content;
	containerClasses?: string;
}

export default function Section(props: SectionProps) {
	let args = props;
	let children: React.ReactNode = props.children;

	let classes = classNames(
		'py-12',
		'xl:py-32',
		'pl-envl',
		'pr-envr',

		props.className
	);

	let headingArgs = pick(props, ['title', 'command', 'argument', 'flags']);
	let sectionProps = omit(props, [
		'title',
		'command',
		'argument',
		'flags',
		'intro',
		'containerClasses',
	]);

	set(sectionProps, 'className', classes);

	const sectionCtx: {
		section: string;
		updateSectionHandler: (str: string) => void;
	} = useContext(SectionContext);

	function enterHandler(args: Waypoint.CallbackArgs): void {
		if (args.currentPosition == 'inside') {
			sectionCtx.updateSectionHandler(props.id);
		}
	}

	let containerClasses = classNames(
		'container',
		'gap-row',
		'flex',
		'flex-col',
		props.containerClasses
	);

	return (
		<Waypoint topOffset="-90%" onEnter={enterHandler}>
			<section {...sectionProps}>
				<div className={containerClasses}>
					{(!isEmpty(props.title) || !isEmpty(props.command)) && (
						<Heading {...headingArgs} />
					)}
					{!!props.intro && (
						<div className="prose xl:prose-xl dark:prose-invert mx-auto text-center my-0 md:max-w-[60%]">
							<Markdown content={props.intro} />
						</div>
					)}
					{children}
				</div>
			</section>
		</Waypoint>
	);
}
