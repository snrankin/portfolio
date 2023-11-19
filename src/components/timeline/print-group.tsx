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
		<div className="flex flex-col gap-y-[0.5in]">
			{!!jobs &&
				jobs.map((job, i) => {
					return <TimelineItem key={i} {...job} />;
				})}
		</div>
	);
}
