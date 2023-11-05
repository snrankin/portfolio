'use client';
import React, { HTMLProps } from 'react';
import { jobs } from '@/app/lib/jobs';
import TimelineItem, { TimelineItemProps } from './item';
import classNames from 'classnames';
import { set } from 'lodash';
export default function Timeline(
	props: HTMLProps<HTMLDivElement>
): JSX.Element {
	let classes = classNames(
		'grid grid-cols-[2rem_1fr] gap-x-3 md:gap-x-5 lg:grid-cols-[175px_2rem_1fr] w-full max-w-full'
	);

	let args: HTMLProps<HTMLDivElement> = props;

	set(args, 'className', classes);
	console.log('🚀 ~ file: group.tsx:22 ~ args:', args);

	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-1 md:grid-cols-[2rem_1fr] gap-x-0 md:gap-x-5 lg:grid-cols-[max-content_1fr] max-w-full">
				{jobs.map((job, i) => {
					let args: TimelineItemProps = {
						index: i + 1,
						...job,
					};
					return <TimelineItem key={i} {...args} />;
				})}
			</div>
		</div>
	);
}
