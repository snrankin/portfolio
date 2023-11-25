'use client';
import React from 'react';
import TimelineItem from './item';
import { TypeJobFields } from '@/lib/types';
export default function Timeline({
	jobs,
}: {
	jobs?: TypeJobFields[];
}): JSX.Element {
	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-1 md:grid-cols-[2.5rem_1fr] gap-x-0 md:gap-x-5 lg:grid-cols-[max-content_1fr] max-w-full">
				{!!jobs &&
					jobs.map((job, i) => {
						return <TimelineItem key={i} {...job} />;
					})}
			</div>
		</div>
	);
}
