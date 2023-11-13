'use client';
import React, { HTMLProps } from 'react';
import TimelineItem, { TimelineItemProps } from './item';
import { IJob } from '@/lib/api/jobs';
export default function Timeline({ jobs }: { jobs?: IJob[] }): JSX.Element {
	return (
		<div className="flex justify-center">
			<div className="grid grid-cols-1 md:grid-cols-[2rem_1fr] gap-x-0 md:gap-x-5 lg:grid-cols-[max-content_1fr] max-w-full">
				{!!jobs &&
					jobs.map((job, i) => {
						return <TimelineItem key={i} {...job} />;
					})}
			</div>
		</div>
	);
}
