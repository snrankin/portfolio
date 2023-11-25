'use client';
import React from 'react';
import { TypeJobFields } from '@/lib/types';
import TimelineItem from './print-item';
export default function Timeline({
	jobs,
}: {
	jobs?: TypeJobFields[];
}): JSX.Element {
	return (
		<ul className="timeline timeline-vertical timeline-compact	  timeline-snap-icon">
			{!!jobs &&
				jobs.map((job, i) => {
					return <TimelineItem key={i} {...job} />;
				})}
		</ul>
	);
}
