'use client';
import React, { HTMLProps } from 'react';
import { jobs } from '@/app/lib/jobs';
import TimelineItem from './item';
export default function Timeline(
	props: HTMLProps<HTMLDivElement>
): JSX.Element {
	return (
		<div {...props}>
			{jobs.map((job, i) => {
				return <TimelineItem key={i} {...job} />;
			})}
		</div>
	);
}
