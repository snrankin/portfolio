'use client';
import React, { useContext, HTMLProps } from 'react';
import { Waypoint } from 'react-waypoint';
import Heading, { HeadingProps } from './heading';
import classNames from 'classnames';
import { pick, isEmpty, omit, set } from 'lodash';
import { SectionContext } from '@/lib/context/section';
export interface SectionProps
	extends HeadingProps,
		Omit<HTMLProps<HTMLElement>, 'id'> {
	id: string;
	intro?: string;
}

export default function Section(props: SectionProps) {
	let args = props;
	let children: React.ReactNode = props.children;

	let classes = classNames('py-12', 'xl:py-32', props.className);

	let headingArgs = pick(props, ['title', 'command', 'argument', 'flags']);
	let sectionProps = omit(props, [
		'title',
		'command',
		'argument',
		'flags',
		'intro',
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

	return (
		<Waypoint onEnter={enterHandler}>
			<section className={classes} {...sectionProps}>
				<div className="container flex flex-col gap-row">
					{(!isEmpty(props.title) || !isEmpty(props.command)) && (
						<Heading {...headingArgs} />
					)}
					{props.intro != undefined && !isEmpty(props.intro) && (
						<div className="prose mx-auto text-center my-0">
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
